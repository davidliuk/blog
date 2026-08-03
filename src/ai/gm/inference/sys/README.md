---
title: LLM Serving Systems
description: LLM serving through request scheduling, KV cache, batching, parallelism, latency, throughput, and reliability.
icon: server
---

# LLM Serving Systems

推理系统把 token generation 映射到 GPU 计算、显存和请求调度。优化目标不是单一 tokens/s，而是在 workload 下平衡 time to first token、inter-token latency、tail latency、throughput、cost 和 reliability。

## Request Lifecycle

```text
admission
  → tokenize
  → prefill
  → decode loop
  → detokenize / stream
  → release KV cache
```

Prefill 更像高并行矩阵计算；decode 每步只生成少量 token，却需要反复读取权重和 KV cache。两阶段资源特征不同，调度策略也不同。

## Core Mechanisms

| Mechanism | Benefit | Trade-off |
| --- | --- | --- |
| Continuous batching | 动态合并活跃请求，提高利用率 | 调度和 tail latency 更复杂 |
| KV cache paging | 减少显存碎片，支持动态序列 | block 管理开销 |
| Prefix caching | 复用共同 prompt 的 prefill | 命中率、隔离和失效 |
| Quantization | 降低显存和带宽成本 | 精度、kernel 和硬件支持 |
| Tensor / pipeline parallelism | 扩展超出单卡的模型 | 通信与负载不均 |
| Speculative decoding | 用 draft 提议多个 token | 接受率与额外模型成本 |

## Workload Dimensions

- prompt 与 output length 分布；
- streaming / non-streaming；
- arrival burst 与 concurrency；
- model mix、adapter mix 与 context length；
- SLO priority、tenant quota 和 cancellation。

## Reliability

1. admission control 在过载前拒绝或排队，而不是让所有请求一起超时。
2. 请求有 end-to-end deadline 和 cancellation，释放不再需要的 cache。
3. 模型、tokenizer、template 和 adapter 版本被共同追踪。
4. 监控 queue、prefill、decode 和 network 的分段 latency。
5. OOM、worker loss 和 partial stream 有明确错误与重试语义。

## Framework Notes

- [vLLM](./vllm.md)
- [SGLang](./sgland.md)

框架名称会变化；调度、cache、parallelism 和 workload modeling 是长期有效的比较轴。
