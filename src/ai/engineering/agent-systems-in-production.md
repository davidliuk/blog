---
title: Agent Systems in Production
description: Notes from building production-grade agent systems for on-call operations, coding-agent interoperability, and evidence-gated validation.
icon: robot
---

# Agent Systems in Production

我对 agent system 的兴趣，不只来自“模型会不会调用工具”，而是来自更难的部分：

- 如何让 agent 在真实环境里安全地产生副作用；
- 如何在证据不足时停下来，而不是假装理解；
- 如何在长流程里恢复、继续、去重，而不是每次从头乱来；
- 如何把 agent 的行动、对象、证据和结论变成可审计的系统状态。

这些问题在 demo 里通常不显眼，但在生产环境里会立刻变成系统设计问题。

本文总结我在真实生产环境中做过的三条线：

1. 面向 on-call 的 **production agent**；
2. 面向 coding agents 的 **interoperability layer**；
3. 面向线上服务变更验证的 **evidence-gated validation framework**。

它们看起来是不同项目，但背后的设计主题很一致：**bounded autonomy、recoverability、evidence-based decisioning、human-auditable state**。

## Why this work is different from prompt integration

很多“agent 应用”本质上是 prompt + tool wrapper：

- 模型决定下一步；
- 工具执行；
- 返回结果；
- 再继续。

这种方式在简单任务里足够，但在真实环境里会很快遇到四类问题：

| Problem | What breaks |
| --- | --- |
| Non-idempotent side effects | 重试会创建重复对象、重复部署、重复发请求 |
| Long-running workflows | 聊天断了、session 丢了、机器换了，流程无法恢复 |
| Weak evidence | 日志、平台回读、控制面状态常常不足以证明真实结果 |
| Human boundary | 某些参数、审批、异常状态必须交回给人 |

所以真正值得做的，不是让模型“更会用工具”，而是把 agent 放进一个**有边界、有恢复点、有证据标准、有审计状态**的 runtime 里。

## 1. Production on-call agent

其中一个系统是面向大规模在线服务的 on-call agent。它不是一个泛泛的 chat assistant，而是一个真正参与告警处理流程的生产代理。

它的任务不是“回答怎么修”，而是：

- 在告警消息线程中接住 alert；
- 根据 SOP、runtime telemetry、change history 和 service topology 收集证据；
- 判断当前能确认什么、不能确认什么；
- 按规则推进 incident 生命周期、输出阶段性更新与治理报告。

### Core design

这个系统没有把全部逻辑交给模型，而是采用 **deterministic tools + bounded LLM reasoning**：

- 确定性工具负责读取事实、查询系统、执行受限操作；
- LLM 负责解释上下文、组织调查路径、整合证据与撰写输出；
- guardrails 负责把读写边界、线程作用域、未知状态和用户可见更新节奏固定下来。

这类架构的价值是：**把 agent 的“自由度”压到真正需要 reasoning 的地方，把可验证部分尽量做成 deterministic substrate**。

### What made it production-grade

真正让这个系统适合生产使用的，不是“会 triage alert”，而是下面这些约束：

- **thread-scoped sessions**：每个告警线程的状态隔离，避免跨事件污染；
- **read-only action boundaries**：默认读取证据，限制不可逆写操作；
- **region-aware routing**：查询和判断始终落在正确环境；
- **idempotent delivery**：重复触发不会制造重复用户可见更新；
- **explicit unknown-state semantics**：证据不足时明确写 unknown / insufficient，而不是补全故事；
- **evaluation harnesses**：用真实 alert replay、structured-output validation 和 watchdog rules 去持续测正确性、时延和安全行为。

### What this taught me

on-call agent 最难的地方，不是 reasoning，而是**何时不该做判断**。

在生产 incident 里，系统最大的风险通常不是“查不到信息”，而是：

- 把弱信号误当强证据；
- 把暂时读不到的数据误当不存在；
- 把控制面状态误当成 runtime 已生效；
- 把模型推测包装成结论。

因此，一个可靠的 on-call agent，本质上是一个**证据标准化系统**。

## 2. Agent interoperability layer for coding agents

第二条线是 coding-agent 互操作基础设施：把一个模型平台连接到 Claude Code、Codex，以及 Responses / Messages-compatible agents。

目标不是做一个新的 assistant，而是让不同 agent runtime 能在同一套平台能力上工作，同时保留各自原生的：

- tool execution semantics;
- sandboxing;
- approval policies;
- multi-agent workflows;
- persistent thread / session behavior.

### Why interoperability is hard

表面上看，这像是协议适配；实际上难点在 runtime semantics：

- tool call / tool result 如何做稳定关联；
- context compaction 之后怎样继续未完成 tool continuation；
- concurrent sessions 怎样隔离；
- stale result、late result、cancelled turn 怎样恢复；
- tool namespace 和 provider runtime 怎样 fail closed。

如果这些没设计好，兼容层只是在“看起来能对话”，而不能可靠地支持长任务。

### Runtime model

这个系统里我重点做的是一个 **protocol-neutral conversation and tool-continuation engine**。它支持：

- call-ID-based tool/result correlation；
- persistent thread reuse；
- concurrent session isolation；
- context compaction；
- stale-result recovery；
- encrypted continuity state；
- privacy-preserving logging。

这让我越来越确信：agent interoperability 的关键，不是“翻译 message schema”，而是**维持 agent runtime 的连续性与安全边界**。

### Security model

对这类系统，我特别在意 fail-closed 设计：

- unknown tool 直接拒绝；
- provider runtime deny-all by default；
- tool namespacing 明确隔离；
- continuity state 不能明文漂移；
- logging 不能为了调试破坏隐私边界。

如果兼容层把权限和恢复状态做成模糊区域，最终只会把 agent 系统的风险扩大。

## 3. Evidence-gated validation for online service changes

第三条线是我最喜欢的一类系统：它的核心不是让 agent “会跑流程”，而是让它在服务验证场景中获得**受控自治能力**。

这里的核心问题是：一个 agent 如何参与线上服务变更验证，而不因为重复 mutation、错误归因或证据不足，把验证本身变成新的风险源？

### Architecture

这个系统的分层非常清楚：

- **workflow orchestrator**：决定顺序、门禁、回边和恢复点；
- **stage skills**：每个阶段的专门能力；
- **watchers / wrappers**：把底层平台工具包装成 agent-safe 接口；
- **validation ledger / report**：把行动、对象、证据、结论落成可追踪状态。

所以它本质上是一个 **agent system architecture**，而不是一组脚本。

### Evidence-gated decisioning

最重要的一点是：这个系统不是“流程跑完就算完成”。

它要求每个 gate / invariant 都有清晰的 terminal disposition：

- satisfied；
- failed；
- human-required；
- insufficient evidence。

这背后的思想是：

- 新 SHA 会让下游 artifact / runtime / traffic / evidence stale；
- 平台回读不等于真实服务端已经生效；
- weak signal 不能冒充 strong proof；
- rc / command success 不能单独代表 validation success。

换句话说，系统不是在追求“自动化跑完流程”，而是在追求**evidence-based autonomous decisioning**。

### Three production problems this solves

#### Non-idempotent side effects

像 build、deploy、traffic creation 这类操作，本质上可能制造新的远端对象。

因此系统要求：

- 先做 discovery / lookup / dedup；
- 保留 canonical object ID；
- resume 时按 ID 查询，而不是盲目重发 mutation。

这类设计对 agent 很关键，因为真正难的不是“发命令”，而是**如何避免 agent 因重试而制造额外副作用**。

#### Recoverability across sessions and environments

系统状态不绑定在一次 chat 或一次本地会话上，而是落到显式 ledger：

- 记录 first unmet gate；
- 记录 object identity；
- 记录 owner-agnostic query intent；
- 支持换 harness、换 transport、换机器后继续执行。

这其实就是 durable execution，只不过它发生在 production-adjacent validation 里。

#### Anti-hallucination and anti-misclassification

系统里最有价值的一部分，往往是显式限制 agent：

- 参数解析不能猜；
- human-required 要一次问全；
- 裸 rc 不能直接作为结论；
- control-plane version 不等于 runtime identity；
- 证据弱时必须输出 insufficient。

这就是我理解的 **agent reliability engineering**：
不是让模型更大胆，而是让系统在证据不足时更克制。

## Design themes I keep coming back to

虽然这些系统面向不同问题，但我反复回到同几个主题。

## Bounded autonomy

可靠 agent 不是“尽可能自主”，而是：

- 在授权边界内尽量自主推进；
- 一旦碰到审批、不可解释状态或人类专属输入，明确升级给人。

## Recoverability

不是一次跑通，而是：

- 能暂停；
- 能恢复；
- 能 dedupe；
- 能在不同 runtime 之间继续。

## Evidence-based decisioning

系统必须知道：

- 哪些 signal 只是提示；
- 哪些 signal 才能当证明；
- 哪些结论必须依赖多源交叉验证。

## Human-auditable state

agent 做过什么、为什么这么做、根据什么证据得出当前结论，都应该可以落盘和复盘。

如果这点做不到，系统很难真正进入高风险、高复杂度场景。

## Why I keep writing these systems down

我越来越觉得，很多关于 agent 的重要经验，不在 benchmark 分数里，而在系统边缘：

- timeout 之后怎么办；
- stale result 怎么办；
- approval boundary 怎么画；
- side effect 如何 dedupe；
- 证据弱时如何停下来。

这些问题没有 flashy demo 效果，但决定了 agent 能不能从有趣的 prototype 变成可以长期依赖的系统。

对我来说，研究和工程在这里没有明显分界：

- 研究提供 abstraction 和 problem framing；
- 工程逼着这些 abstraction 面对真实约束；
- 最终留下来的，应该是 paper、system、benchmark 和经验都能互相支撑的一套东西。

