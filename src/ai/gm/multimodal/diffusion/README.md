---
title: Diffusion Models
description: Diffusion models through corruption, denoising, sampling, conditioning, latent spaces, and transformer backbones.
icon: wand-magic-sparkles
---

# Diffusion Models

Diffusion model 学习把逐步加入噪声的数据逆转回目标分布。训练通常随机选择 noise level，让模型预测 noise、clean sample 或相关参数化；生成时从噪声开始反复执行 denoising step。

## Core Process

```text
data x₀
  --forward corruption→ xₜ
  --learned reverse process→ x̂₀
```

## System Components

| Component | Role |
| --- | --- |
| Noise schedule | 决定不同 step 的 signal-to-noise ratio |
| Denoiser | 根据 noisy input、time 和 condition 预测更新方向 |
| Sampler | 用有限 step 近似 reverse process |
| Conditioner | 注入 text、class、image、pose 或 control signal |
| Latent encoder/decoder | 在压缩空间生成，降低计算成本 |
| Guidance | 调节 condition adherence 与 sample diversity |

## Conditioning and Control

- Text conditioning 把 prompt representation 注入 denoiser。
- Classifier-free guidance 组合 conditional 与 unconditional prediction。
- ControlNet 一类方法增加空间条件，使 pose、edge 或 depth 参与生成。
- LoRA 可用较少新增参数适配风格或概念。

## Design Trade-offs

1. 更少 sampling step 提高速度，但可能降低质量或稳定性。
2. 更强 guidance 提高 prompt adherence，也可能降低多样性和产生 artifact。
3. Pixel-space 保留直接表示，latent-space 更高效但受 autoencoder 上限影响。
4. Evaluation 需要同时覆盖 fidelity、diversity、condition alignment、safety 和 latency。

## Notes

- [Diffusion Transformer](./dit.md)
