---
title: AI Agents
description: An engineering model for AI agents covering goals, context, tools, state, execution, recovery, safety, and evaluation.
icon: robot
---

# AI Agents

Agent 是一个让模型在环境中持续做决策的执行系统。模型负责解释和选择，工具改变外部状态，runtime 管理上下文、权限、重试、状态与停止条件。

## Agent Anatomy

| Component | Responsibility |
| --- | --- |
| Goal & policy | 定义成功、约束、优先级和停止条件 |
| Model | 解释状态、提出动作或生成结构化调用 |
| Context | 提供当前任务、证据、历史和可用能力 |
| Tools / skills | 把动作映射到可验证的外部接口 |
| State & memory | 保存 workflow 状态、artifact 与长期信息 |
| Runtime | 调度、并发、timeout、retry、checkpoint 和恢复 |
| Guardrails | 权限、审批、数据边界、预算和风险控制 |
| Evaluator | 判断结果、过程和副作用是否满足 contract |

## Execution Loop

<div class="knowledge-flow" aria-label="Agent execution loop">
  <div class="knowledge-flow__item">
    <span class="knowledge-flow__index">01</span>
    <strong>Observe</strong>
    <p>读取目标、环境状态和新的工具结果，区分事实与假设。</p>
  </div>
  <div class="knowledge-flow__item">
    <span class="knowledge-flow__index">02</span>
    <strong>Decide</strong>
    <p>选择下一动作、所需能力和停止条件，不追求无意义的长计划。</p>
  </div>
  <div class="knowledge-flow__item">
    <span class="knowledge-flow__index">03</span>
    <strong>Act</strong>
    <p>用结构化参数调用工具，并在高风险外部写操作前经过权限边界。</p>
  </div>
  <div class="knowledge-flow__item">
    <span class="knowledge-flow__index">04</span>
    <strong>Recover</strong>
    <p>验证结果，处理部分失败、重试、补偿或从 checkpoint 恢复。</p>
  </div>
</div>

## Reliability Model

- 工具调用有 schema、idempotency、timeout 和错误分类。
- workflow 状态持久化到可恢复边界，不只存在于 prompt。
- 失败分为可重试、需换策略、需人工决策和永久失败。
- 长任务有 budget、heartbeat、checkpoint 和 cancellation。
- 最终结果包含证据、artifact 和未解决风险。

## Safety Model

Capability discovery 与 authority 必须分离：模型知道某个工具存在，不代表拥有调用权限。删除、发布、转账、发信等高影响动作应由明确 policy、scope 和 approval 控制。

## Notes

- [Model Context Protocol](./mcp.md)
- [Agent Skills](./skills.md)
- [Long-Term Memory](../../training/alignment/prompt/ltm.md)
- [Agent Evaluation](/ai/evaluation/#agent-evaluation)

设计有效 agent 的一个稳定原则是：优先构建简单、可组合、可观测的 workflow；只有当任务确实需要开放式决策时，才增加自主循环。
