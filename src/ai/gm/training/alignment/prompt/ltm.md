# Long-Term Memory for AI Systems

Long-term memory 不是把所有历史放进向量库，而是一个写入、组织、检索、更新和遗忘系统。目标是在需要时恢复高价值信息，同时控制错误、隐私和上下文成本。

## Memory Types

| Type | Example | Retrieval signal |
| --- | --- | --- |
| Semantic | 用户偏好、事实、稳定规则 | query similarity + entity / metadata |
| Episodic | 一次任务、事故或交互过程 | time、goal、participants、outcome |
| Procedural | 已验证 workflow、skill 和策略 | task type、precondition、environment |
| Artifact | 文档、代码、实验、截图和结果 | explicit reference、project、version |

## Write Policy

每条信息不都值得长期保存。写入前检查：

- 是否会在未来改变决策？
- 来源和 confidence 是什么？
- 作用域属于用户、项目、组织还是全局？
- 是否包含敏感信息或 retention constraint？
- 新信息与旧记忆冲突时如何合并或保留版本？

## Retrieval Pipeline

```text
current goal
  → query / entities / filters
  → candidate retrieval
  → rerank by relevance, recency, trust
  → compact evidence with provenance
  → model context
```

相似度只是 candidate generation；最终排序还需要任务相关性、来源可信度、时间和权限。

## Failure Modes

- 写入未经验证的模型推断，之后被当作事实。
- 旧偏好覆盖用户当前明确指令。
- 跨用户或跨项目泄露记忆。
- 检索结果过多，挤压当前任务证据。
- 没有删除和纠正路径，错误长期累积。

## Evaluation

分别测量 write precision、retrieval recall、ranking relevance、downstream task lift、privacy boundary 和 stale-memory harm。只测 embedding 相似度不能证明 memory 系统有价值。
