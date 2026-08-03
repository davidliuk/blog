# AI Deployment

AI 部署是把经过评估的 artifact 放入真实 workload，并限制未知行为的过程。Artifact 可以是 model、adapter、prompt、retrieval index、tool policy 或它们的组合。

## Release Unit

```text
model + tokenizer + template
  + adapter / decoding config
  + tools / retrieval index
  + safety policy
  + evaluation report
```

只版本化权重不足以复现线上行为。

## Promotion Path

| Stage | Purpose |
| --- | --- |
| Offline | 验证 capability、safety、latency 和 regression |
| Shadow | 在真实输入上执行，但不影响用户结果 |
| Canary | 让小流量接收新行为，检查真实 outcome |
| Ramp | 按 region、tenant 或 percentage 逐步扩大 |
| Full | 持续监控并保留快速 rollback |

## Compatibility

- tokenizer、embedding dimension 和 index version 必须匹配；
- prompt / tool schema 改变时保留 consumer compatibility；
- model output schema 需要 parser fallback 和 validation；
- feature change 允许新旧 model 并存；
- rollback 可能同时回退 model、prompt、index 和 policy。

## Online Inference Modes

- Batch scoring：吞吐优先，可接受结果延迟。
- Online prediction：latency 与 availability 受用户请求约束。
- Streaming generation：TTFT、token latency、cancellation 和 partial output。
- Edge / on-device：memory、power、privacy 和 update cadence。

## Failure Plan

过载时明确 queue、reject、fallback 或 degrade。模型不可用时可以返回旧模型、规则结果、缓存或人工路径，但 fallback 必须被监控，不能悄悄成为长期默认。
