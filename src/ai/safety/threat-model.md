# AI Threat Modeling

Threat model 把模糊的“模型可能不安全”转成具体场景：谁能影响系统、什么资产会受损、通过哪条路径、现有控制是否足够。

## System Boundary

```text
user / external content
  → application
  → model context
  → retrieval / tools / memory
  → external systems and people
```

每个箭头都可能跨越 trust boundary。

## Threat Actors

- 普通用户的无意误用；
- 恶意用户或外部内容作者；
- 被攻破的 tool、document 或 dependency；
- 内部人员、错误配置或过度权限；
- 模型自身在不完整 specification 下采取错误动作。

## Failure Categories

| Category | Question |
| --- | --- |
| Integrity | 输入、memory、retrieval 或 tool result 能否被操纵？ |
| Confidentiality | prompt、training data、secret 或其他用户信息能否泄露？ |
| Availability | 高成本请求、循环或工具 fan-out 能否耗尽资源？ |
| Authorization | 模型是否能超出用户和任务 scope 行动？ |
| Reliability | 不确定输出是否被误当作确定事实？ |
| Abuse | 能力是否降低欺诈、攻击或有害内容的门槛？ |

## Risk Statement

一个可执行风险陈述包含：

```text
actor + precondition + action/path + affected asset + impact
```

例如“外部文档作者通过 retrieval 内容注入指令，使具有邮件权限的 agent 向未授权地址发送内部摘要”。

## Prioritization

综合 likelihood、impact、detectability 和 recoverability。低概率但不可恢复、影响巨大的动作，通常需要更强的预防和人工审批。

## Validation

每条高优先级风险应至少对应一个 control owner、一个 adversarial test、一个 production signal 和一个 response playbook。
