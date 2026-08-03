# Agent Skills

Skill 是可发现、可复用的任务能力包：它不仅描述“能做什么”，还定义何时使用、需要哪些输入、允许哪些副作用、怎样验证结果。

## Skill Contract

| Field | Purpose |
| --- | --- |
| Name & intent | 让模型区分相近能力 |
| Trigger | 哪类目标或上下文应该加载 |
| Inputs | 参数 schema、required context 与默认值 |
| Preconditions | 权限、连接、文件或外部状态要求 |
| Procedure | 稳定步骤、工具组合和决策边界 |
| Outputs | artifact、状态变化和返回结构 |
| Failure modes | 可重试、可恢复、需人工处理的错误 |
| Verification | 怎样证明结果正确且副作用在范围内 |

## Skill Lifecycle

```text
discover → select → authorize → execute → verify → learn
```

- **Discover**：只暴露与当前目标相关的 skill 摘要，降低选择噪声。
- **Select**：根据 intent、输入和约束选择，不靠名称关键词硬匹配。
- **Authorize**：在执行前检查用户、资源和动作 scope。
- **Execute**：保持步骤可观察，高风险动作可暂停审批。
- **Verify**：验证最终状态，而不是把“工具返回成功”当作任务成功。
- **Learn**：从失败 trace 更新 skill 文档和 evaluation cases。

## Design Rules

1. 一个 skill 解决一个可描述的能力边界。
2. 稳定逻辑写入 skill，任务特有信息留在当前 context。
3. 操作应尽量幂等；无法幂等时提供唯一 key 或预检查。
4. 不把凭证、长期 secret 或隐式权限写进指令。
5. Skill 版本变化时保留 contract compatibility 或 migration。

## Evaluation

测试不仅覆盖 happy path，还要覆盖相似 skill 误选、缺少输入、权限不足、部分完成、工具超时和验证失败。
