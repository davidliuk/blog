# Speculative Decoding

Speculative decoding 用更便宜的 draft process 先提出多个 token，再由 target model 一次验证。被接受的 token 可以减少 target model 的串行 decode step，同时保持目标分布语义。

## Process

```text
draft model proposes k tokens
  → target model scores them in parallel
  → accept matching prefix
  → correct first rejection
  → repeat
```

## Performance Drivers

| Factor | Effect |
| --- | --- |
| Draft speed | Draft 必须明显便宜，否则额外工作抵消收益 |
| Acceptance rate | 越高，每次 target pass 接受的 token 越多 |
| Proposal length | 太短收益有限，太长增加拒绝浪费 |
| Batch / load | Scheduler 和额外 model 影响 serving efficiency |
| Task distribution | Code、重复模式与开放文本的接受率可能不同 |

## Draft Choices

- 较小的独立模型；
- target model 的早退层或 auxiliary head；
- n-gram / cache based proposer；
- retrieval 或 domain-specific draft。

## Quality

正确实现的 speculative sampling 可以保持 target distribution；工程错误、近似验证或 constrained decoding integration 仍可能改变行为，因此需要 token-level test。

## Evaluation

报告 accepted tokens per target step、draft overhead、TTFT、ITL、throughput、memory 和不同 output length 的结果。只在单请求上变快，不代表高并发服务 goodput 提升。
