---
title: LLM Inference
description: LLM inference from prefill and decoding to KV cache, quantization, speculative decoding, serving, and production SLOs.
icon: bolt
---

# LLM Inference

LLM inference 把一个已训练模型转换为持续的 token generation service。优化需要同时考虑输出质量、TTFT、inter-token latency、tail latency、throughput、memory 和 cost。

## Inference Map

<div class="ai-card-grid">
  <a class="ai-card" href="./decoding.md">
    <span class="ai-card__eyebrow">Output policy</span>
    <h3>Decoding</h3>
    <p>Greedy、sampling、temperature、top-k / top-p、beam 与 constrained output。</p>
  </a>
  <a class="ai-card" href="./kv-cache.md">
    <span class="ai-card__eyebrow">Autoregressive state</span>
    <h3>KV Cache</h3>
    <p>缓存历史 token 的 key/value，减少 decode 重复计算。</p>
  </a>
  <a class="ai-card" href="./quantization.md">
    <span class="ai-card__eyebrow">Memory efficiency</span>
    <h3>Quantization</h3>
    <p>降低 weight、activation 或 cache precision，交换质量与效率。</p>
  </a>
  <a class="ai-card" href="./speculative-decoding.md">
    <span class="ai-card__eyebrow">Decode acceleration</span>
    <h3>Speculative Decoding</h3>
    <p>用更便宜的 draft 提议 token，再由 target model 并行验证。</p>
  </a>
  <a class="ai-card" href="./sys/">
    <span class="ai-card__eyebrow">Production runtime</span>
    <h3>Serving Systems</h3>
    <p>Continuous batching、cache paging、scheduling、parallelism 和 admission。</p>
  </a>
  <a class="ai-card" href="./pruning.md">
    <span class="ai-card__eyebrow">Sequence reduction</span>
    <h3>Token Pruning</h3>
    <p>减少后续层需要处理的 token，但必须保护关键信息。</p>
  </a>
</div>

## Prefill and Decode

| Phase | Work | Typical pressure |
| --- | --- | --- |
| Prefill | 并行处理 prompt，创建 KV cache 并生成首 token | compute、prompt length、TTFT |
| Decode | 每一步读取历史 cache 和权重，生成一个或少量 token | memory bandwidth、batch、token latency |

这个区分是近似，不同 model、batch、hardware 和 kernel 会改变瓶颈。

## Metrics

- **TTFT**：请求进入到第一个 token。
- **ITL / TPOT**：相邻 token 的生成延迟。
- **End-to-end latency**：完整请求完成时间。
- **Throughput**：每秒 request 或 token。
- **Goodput**：满足 SLO 的有效吞吐。
- **Memory / cost**：每 request、token 和模型副本的资源。

## Quality–System Coupling

Context length、output limit、sampling、quantization 和 model routing 同时影响质量与成本。性能测试必须固定 workload distribution，不能只比较单一短 prompt。

## Production Checklist

1. Admission、queue、timeout 和 cancellation 怎样工作？
2. Streaming 中途失败返回什么，客户端能否重试？
3. Model、tokenizer、template 和 decoding config 是否共同版本化？
4. OOM、worker loss、slow request 和 overload 怎样隔离？
5. 指标能否按 prompt length、output length、tenant 和 model 分片？
