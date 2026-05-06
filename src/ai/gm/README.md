# Generative Models

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

1. `Text -> Fine-tuning -> Alignment`: 先理解模型本体，再看如何适配和对齐。
2. `Inference`: 明白一个可用的大模型系统为什么瓶颈常出在 serving 而不是训练。
3. `Multimodal`: 在语言模型基础上扩展到图像、视频、音频。
4. `Application`: 最后看 RAG / Agent 这类产品形态。

## Core Questions

- 模型是怎么学会生成的: 自回归、扩散、masked prediction 等范式有什么差别？
- 模型怎么变得“能用”: SFT、instruction tuning、偏好学习各自解决什么问题？
- 模型怎么跑得动: KV Cache、量化、系统优化的核心矛盾是什么？
- 模型怎么连接现实世界: 多模态编码器、工具调用、RAG 分别承担什么角色？

## High-Value Links

- [Text Model Notes](./text/)
- [Fine-tuning](./training/fine-tuning/)
- [Alignment](./training/alignment/)
- [Inference](./inference/)
- [KV Cache](./inference/kv-cache.md)
- [Multimodal](./multimodal/)
- [RAG](./application/rag/)
- [Agent](./application/agent/)

