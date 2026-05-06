# Training

训练这条线回答的是两个问题: 模型如何学会任务，以及在大模型规模下如何把训练成本控制在可接受范围内。

## Main Branches

- [Fine-tuning](./fine-tuning/): 下游任务适配，重点看 SFT、FFT、PEFT。
- [Alignment](./alignment/): 让模型更符合人类偏好或可验证目标。
- [Framework](./framework.md): Megatron-LM、DeepSpeed 这类训练框架。
- [Efficiency](./efficiency.md): 并行、显存优化与训练系统设计。

## Suggested Order

1. 先看 [Fine-tuning](./fine-tuning/) 理解训练目标。
2. 再看 [Alignment](./alignment/) 理解为什么“答对”和“答得好”不是一回事。
3. 最后看 [Framework](./framework.md) 与 [Efficiency](./efficiency.md) 进入系统层。
