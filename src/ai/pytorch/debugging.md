# PyTorch Debugging and Performance

训练问题先分成 correctness、numerical stability、memory 和 throughput。盲目调 batch 或清 cache 可能暂时隐藏症状，却不解决根因。

## Correctness Checklist

- Tensor shape、dtype、device 和 layout 是否符合 contract？
- Target 与 prediction 是否使用同一 label space 和 mask？
- `train()` / `eval()` 状态是否正确？
- Gradient 是否存在、finite，是否在正确时间清零？
- Data augmentation 是否改变 label semantics？
- Validation 是否禁用不必要的 gradient，并避免数据泄漏？

## Numerical Debugging

从小 batch 开始检查 loss、activation、gradient norm 和 parameter update。出现 NaN 时定位第一个 non-finite operation，检查 overflow、division、log、normalization 和 learning rate。

## Memory

| Symptom | Inspect |
| --- | --- |
| Persistent growth | 保存了带 graph 的 tensor、list/cache 无界 |
| Sudden OOM | batch / sequence outlier、temporary workspace |
| Fragmentation | allocation pattern、variable shape、cache behavior |
| High reserved, low active | allocator reuse 与 workload shape |

避免在日志或 metric list 中直接保存仍连接 autograd graph 的 tensor。

## Throughput

```text
input pipeline → host-to-device → kernels
  → communication → synchronization
```

- DataLoader 是否让 device 等待？
- 小 kernel 是否过多，launch overhead 是否显著？
- 是否有不必要的 device synchronization 或 `.item()`？
- Mixed precision、compile 或 fused kernel 是否命中真实瓶颈？
- Benchmark 是否包含 warm-up 并固定 input shape？

## Reproduce First

保存 minimal batch、seed、model state 和 environment，先把问题缩小到单机单卡，再逐步恢复 mixed precision、compile 和 distributed components。
