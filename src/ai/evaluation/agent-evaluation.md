# Agent Evaluation

Agent evaluation 需要在可交互环境中执行，因为下一步 observation 依赖前一步 action。静态问答 benchmark 无法覆盖工具失败、状态变化和副作用。

## Evaluation Unit

```text
initial state + goal + policy + tools
  → trajectory
  → final state + artifacts + side effects
```

## Dimensions

| Dimension | Measure |
| --- | --- |
| Outcome | 目标是否完成，最终外部状态是否正确 |
| Trajectory | action 是否必要、顺序正确、证据充分 |
| Tool use | tool selection、argument、error handling、idempotency |
| Recovery | timeout、partial failure、permission denial 后的行为 |
| Safety | authority、approval、data boundary、irreversible action |
| Efficiency | steps、tokens、wall time、tool / compute cost |

## Environment Design

- 工具使用真实 schema 和 error model。
- External state 可 reset、inspect 和 compare。
- Fixture 包含正常、延迟、错误、冲突和 concurrent change。
- 时间、随机性与第三方依赖尽量可控。
- Side effect 在 sandbox 中执行，或使用 faithful simulator。

## Outcome Verification

优先用外部 deterministic checker：文件存在、数据库状态、测试通过、邮件草稿内容、日历事件属性。模型自报“已完成”不能作为成功证据。

## Trajectory Scoring

Trajectory 并非越短越好。必要的预检查、验证和 approval 会增加步骤，却提高可靠性。应区分：

- redundant action；
- unsafe shortcut；
- useful recovery；
- evidence gathering；
- irreversible mistake。

## Failure Injection

注入 tool timeout、stale read、rate limit、partial write、permission change 和 malformed result。可靠 agent 的价值常在恢复，而不是 happy path。

## Regression

保存 minimal reproducible trace，并将事故转换为固定 case。每次 model、prompt、skill、tool schema 或 runtime 变化后重跑相关 slice。
