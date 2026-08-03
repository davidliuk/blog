---
title: Generative AI
description: Generative model training, alignment, inference, multimodal systems, RAG, and tool-using agents.
icon: wand-magic-sparkles
---

# Generative AI

这里主要整理大模型时代最常见的一条主线: 预训练模型学到通用能力，经过微调和对齐变得可用，再通过推理系统、多模态桥接和应用层封装进入真实产品。

## System Map

<div class="ai-card-grid">
  <a class="ai-card" href="./text/">
    <span class="ai-card__eyebrow">Core model</span>
    <h3>Text Models</h3>
    <p>语言模型、decoder-only 思路，以及从 token prediction 到能力涌现的主线。</p>
  </a>
  <a class="ai-card" href="./training/fine-tuning/">
    <span class="ai-card__eyebrow">Adaptation</span>
    <h3>Fine-tuning</h3>
    <p>SFT、FFT、PEFT，关注下游任务适配与训练成本。</p>
  </a>
  <a class="ai-card" href="./training/">
    <span class="ai-card__eyebrow">Capability pipeline</span>
    <h3>Training Systems</h3>
    <p>Data、objective、optimization、parallelism、checkpoint 和 experiment lineage。</p>
  </a>
  <a class="ai-card" href="./training/alignment/">
    <span class="ai-card__eyebrow">Preference</span>
    <h3>Alignment</h3>
    <p>从 RLHF 到 RLVR，回答“模型为什么更像人类想要的样子”。</p>
  </a>
  <a class="ai-card" href="./inference/">
    <span class="ai-card__eyebrow">Serving</span>
    <h3>Inference</h3>
    <p>Prefill / Decode、KV Cache、系统瓶颈与线上吞吐优化。</p>
  </a>
  <a class="ai-card" href="./multimodal/">
    <span class="ai-card__eyebrow">Beyond text</span>
    <h3>Multimodal</h3>
    <p>视觉编码器、VLM、扩散和音频，把文本模型扩展到更多模态。</p>
  </a>
  <a class="ai-card" href="./application/">
    <span class="ai-card__eyebrow">Product layer</span>
    <h3>Application</h3>
    <p>RAG、Agent、工具调用与 prompt 设计，关注能力如何落地。</p>
  </a>
</div>

## Suggested Reading Order

1. `Text -> Pretraining -> Training`: 先理解模型本体与能力如何获得。
2. `Fine-tuning -> Alignment`: 再看如何适配任务、偏好与可验证目标。
3. `Inference`: 理解 decoding、KV Cache、quantization 与 serving。
4. `Multimodal`: 在序列建模基础上扩展到图像、视频、音频。
5. `Application`: 最后把能力接入 RAG、Agent、工具与产品 workflow。

## Core Questions

- 模型是怎么学会生成的: 自回归、扩散、masked prediction 等范式有什么差别？
- 模型怎么变得“能用”: SFT、instruction tuning、偏好学习各自解决什么问题？
- 模型怎么跑得动: KV Cache、量化、系统优化的核心矛盾是什么？
- 模型怎么连接现实世界: 多模态编码器、工具调用、RAG 分别承担什么角色？

## High-Value Links

- [Text Model Notes](./text/)
- [Pretraining](./text/pretraining.md)
- [Mixture of Experts](./text/moe.md)
- [Long Context](./text/long-context.md)
- [Reasoning](./text/reasoning.md)
- [Training Systems](./training/)
- [Fine-tuning](./training/fine-tuning/)
- [Alignment](./training/alignment/)
- [Inference](./inference/)
- [KV Cache](./inference/kv-cache.md)
- [Decoding](./inference/decoding.md)
- [Quantization](./inference/quantization.md)
- [Multimodal](./multimodal/)
- [RAG](./application/rag/)
- [Agent](./application/agent/)

## Capability Delivery Loop

<div class="knowledge-flow knowledge-flow--ai">
  <div class="knowledge-flow__item">
    <span class="knowledge-flow__index">01</span>
    <strong>Pre-train</strong>
    <p>从大规模数据中学习通用表示和生成能力。</p>
  </div>
  <div class="knowledge-flow__item">
    <span class="knowledge-flow__index">02</span>
    <strong>Adapt</strong>
    <p>通过 SFT、PEFT 和偏好优化获得目标任务行为。</p>
  </div>
  <div class="knowledge-flow__item">
    <span class="knowledge-flow__index">03</span>
    <strong>Serve</strong>
    <p>在显存、吞吐、延迟和成本约束下交付模型能力。</p>
  </div>
  <div class="knowledge-flow__item">
    <span class="knowledge-flow__index">04</span>
    <strong>Ground & Act</strong>
    <p>用 RAG、工具和 agent orchestration 连接外部知识与环境。</p>
  </div>
</div>

## Evaluation Must Match the Layer

- 模型层：能力、泛化、校准、幻觉与安全。
- 推理层：首 token 延迟、生成速度、吞吐、显存和成本。
- RAG 层：检索召回、上下文相关性、答案忠实度。
- Agent 层：任务完成率、工具错误、恢复能力、资源消耗和长程稳定性。
