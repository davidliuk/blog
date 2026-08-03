# Reasoning in Language Models

Reasoning 可以理解为在输出最终结果前执行中间计算、分解、搜索或验证。它不保证内部过程真实，也不应把自然语言解释自动当作可靠证据。

## Reasoning Operators

| Operator | Purpose |
| --- | --- |
| Decompose | 把复杂目标拆成较小子问题 |
| Retrieve | 获取外部事实或历史状态 |
| Execute | 用 calculator、code、search 或 domain tool 计算 |
| Search | 在多个 candidate path 中探索 |
| Verify | 用 rule、test、critic 或 independent sample 检查 |
| Aggregate | 从多个 solution / evidence 合成结果 |

## Training-Time and Test-Time

- Training-time 方法通过 demonstration、process data、outcome reward 或 verifier 学习行为。
- Test-time 方法增加 sample、search、tool call 或 verification compute。
- 增加 compute 只有在 candidate diversity 与 verifier quality 足够时才有价值。

## Failure Modes

- 提供流畅但错误的中间步骤。
- 在早期错误假设上继续展开。
- 搜索生成许多相似 candidate，没有真正多样性。
- Verifier 与 generator 共享同一 blind spot。
- 对简单任务过度思考，增加 latency 和出错机会。

## Reliable Pattern

```text
define success
  → solve or decompose
  → use external computation where possible
  → verify critical claims
  → report answer, evidence, and uncertainty
```

## Evaluation

分别评估 final outcome、sample efficiency、tool correctness、verification gain、failure recovery 和 cost。Process metric 只有在中间状态可可靠观察时才成立。
