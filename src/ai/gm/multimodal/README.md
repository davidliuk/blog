# Multimodal

多模态这部分关注的是: 文本模型如何接入视觉、音频甚至视频，让模型既能“看懂”，也能“说出来”。

## Mental Model

一个典型多模态系统通常由三部分组成:

1. `Encoder`: 把图像、音频等模态编码成模型可消费的表征。
2. `Alignment / Fusion`: 让不同模态落到同一个语义空间，或者在中间层直接交互。
3. `LLM / Decoder`: 用语言模型或生成模型完成理解、生成与推理。

## Topic Map

<div class="ai-card-grid">
  <a class="ai-card" href="./vision-encoder.md">
    <span class="ai-card__eyebrow">Backbone</span>
    <h3>Vision Encoder</h3>
    <p>多模态系统的视觉入口，决定图像信息以什么形式进入语言模型。</p>
  </a>
  <a class="ai-card" href="./vit.md">
    <span class="ai-card__eyebrow">Representation</span>
    <h3>ViT and Visual Pretraining</h3>
    <p>从 ViT 到视觉预训练，是理解 DINO / MAE / CLIP 的共同底座。</p>
  </a>
  <a class="ai-card" href="./llava.md">
    <span class="ai-card__eyebrow">Adapted LLM</span>
    <h3>Visual Language Models</h3>
    <p>Flamingo、BLIP、LLaVA、Qwen-VL 这类模型怎样把视觉接到 LLM 上。</p>
  </a>
  <a class="ai-card" href="./diffusion/">
    <span class="ai-card__eyebrow">Generation</span>
    <h3>Diffusion</h3>
    <p>图像生成和更广义生成模型在多模态中的角色。</p>
  </a>
  <a class="ai-card" href="./audio/">
    <span class="ai-card__eyebrow">Speech and audio</span>
    <h3>Audio</h3>
    <p>语音识别、语音生成和音频 foundation model 的入口。</p>
  </a>
  <a class="ai-card" href="./project.md">
    <span class="ai-card__eyebrow">Building</span>
    <h3>Project Notes</h3>
    <p>记录多模态项目实践中更偏系统设计与落地的问题。</p>
  </a>
</div>

## Reading Order

1. 先看视觉底座: [ViT](./vit.md) -> [DINO](./3.%20DINO.md) -> [MAE](./mae.md)
2. 再看跨模态对齐: [CLIP](./7%20CLIP.md) / [SigLIP](./SigLIP.md)
3. 然后进入 VLM: [Flamingo](./flamingo.md), [BLIP](./blip.md), [LLaVA](./llava.md), [Qwen-VL](./qwen-vl.md)
4. 最后再看生成式扩展: [SAM](./5.%20SAM.md), [Diffusion](./diffusion/), [Audio](./audio/)

## Core Patterns

- `Dual-Encoder`: 图像和文本各走一个编码器，再在共同空间里做匹配。
- `Fusion`: 在中间层让多模态直接交互。
- `Encoder-Decoder`: 更偏经典 seq2seq 或生成式架构。
- `Adapted LLM`: 以大语言模型为核心，把视觉或音频编码结果接进来。

## Model Index

- Backbones: [ViT](./vit.md), [Vision Encoder](./vision-encoder.md), [DINO](./3.%20DINO.md), [MAE](./mae.md)
- Contrastive alignment: [CLIP](./7%20CLIP.md), [SigLIP](./SigLIP.md)
- VLMs: [Flamingo](./flamingo.md), [BLIP](./blip.md), [LLaVA](./llava.md), [Qwen-VL](./qwen-vl.md)
- Segmentation and adaptation: [SAM](./5.%20SAM.md), [微调](./6.%20%E5%BE%AE%E8%B0%83.md)
- Generative branch: [Diffusion](./diffusion/)