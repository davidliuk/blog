# Distributed Training in PyTorch

分布式训练把 model state、optimizer state、activation 和 batch 映射到多个 device。选择并行方式前，先确认单卡限制来自 memory、compute 还是 step time。

## Parallelism

| Strategy | Split | Main communication |
| --- | --- | --- |
| Data parallel | 每卡完整 model，不同 batch shard | gradient all-reduce |
| Sharded data parallel | parameter / gradient / optimizer state 分片 | gather / reduce-scatter |
| Tensor parallel | 单层 tensor operation 分到多卡 | layer 内 collective |
| Pipeline parallel | 不同 layer stage 分到多卡 | activation point-to-point |
| Sequence / context parallel | sequence dimension 分片 | attention / normalization collective |

## Step Timeline

```text
load batch
  → forward
  → backward
  → gradient communication
  → optimizer update
  → checkpoint / metrics
```

Profiler 应同时展示 compute、communication、input stall 和 synchronization。

## Correctness

- sampler 确保各 rank 数据不重复且 epoch 可复现；
- loss normalization 与 global batch size 一致；
- gradient accumulation 不重复 optimizer step；
- mixed precision overflow 在所有 rank 协调；
- validation metric 正确聚合；
- seed、dropout 和 checkpoint restore 行为明确。

## Checkpoint

保存 model、optimizer、scheduler、scaler、sampler progress、RNG 和 training metadata。Sharded checkpoint 需要说明 world size 变化时怎样 reshard。

## Failure

一个 rank 变慢会阻塞 collective。监控每 rank step time、data time、memory、network 和 collective timeout；不要只看 rank 0。
