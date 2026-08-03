# Quantization

Quantization 用较低精度表示 weight、activation 或 KV cache，以降低 memory、bandwidth 和部分计算成本。收益取决于硬件 kernel 和 workload，不是 bit 数越低越快。

## What Can Be Quantized

| Target | Main benefit | Main risk |
| --- | --- | --- |
| Weights | 降低模型存储和权重读取带宽 | outlier、quality regression |
| Activations | 降低中间计算与通信 | 动态范围、校准困难 |
| KV cache | 支持更长 context 或更多并发 | attention quality 与 conversion cost |
| Gradients / optimizer | 主要用于训练效率 | stability 与 accumulation error |

## Approaches

- **Post-training quantization**：训练后校准或直接转换，成本低。
- **Quantization-aware training**：训练中模拟低精度，通常更能适应误差。
- **Weight-only**：activation 保持较高精度，部署相对简单。
- **Mixed precision**：对敏感 layer、channel 或 operation 保留更高精度。

## Calibration

Calibration set 应覆盖真实 prompt、语言、长度和任务。只使用短英文文本校准，可能掩盖长上下文、代码或多语言退化。

## Evaluate

同时比较：

- capability 与 safety regression；
- perplexity 之外的 task metric；
- TTFT、ITL、throughput 和 memory；
- short / long context；
- batch size 与 hardware；
- quantize / dequantize overhead。

## Decision Rule

先明确限制是 capacity、memory bandwidth、compute 还是 network。Quantization 只有在命中真实瓶颈并满足质量 guardrail 时才有价值。
