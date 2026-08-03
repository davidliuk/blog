# Mixture of Experts

Mixture of Experts (MoE) 用 router 为每个 token 选择少量 expert，使模型拥有更多参数容量，同时保持每个 token 的 active compute 相对有限。

## Layer Model

```text
token representation
  → router scores
  → top-k experts
  → expert FFN computation
  → weighted combine
```

## Core Terms

| Term | Meaning |
| --- | --- |
| Expert | 通常是独立 FFN 参数组 |
| Router | 根据 token representation 选择 expert |
| Top-k | 每个 token 激活多少 expert |
| Capacity | 一个 expert 在一个 batch 中可接收多少 token |
| Load balancing | 防止少数 expert 过载、其他 expert 闲置 |
| Expert parallelism | 把不同 expert 分布到不同 device |

## Why It Is Hard

- Router 可能 collapse 到少数 expert。
- Capacity overflow 需要 drop、reroute 或额外 buffer。
- Token 跨 device 路由产生 all-to-all communication。
- 不同 expert 负载造成 straggler。
- 总参数大使 checkpoint、memory 与 serving placement 更复杂。

## Training Metrics

同时观察 task loss、router entropy、expert load、overflow/drop rate、communication time 和 tokens per expert。只看总 loss 会隐藏 routing pathology。

## Serving

MoE 的 FLOPs 可能接近较小 dense model，但总权重读取、跨卡通信和 batch routing 会影响 latency。部署必须结合实际 batch、sequence、hardware topology 和 expert placement。

## Reference

- [Switch Transformers](https://arxiv.org/abs/2101.03961)
