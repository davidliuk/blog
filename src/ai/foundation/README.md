---
title: AI Foundations
description: Mathematical foundations, classical machine learning, deep learning, language models, reinforcement learning, and efficient adaptation.
icon: layer-group
---

# AI Foundations

这部分建立 AI 的共同语言：数学解释表示与优化，经典机器学习解释任务定义与泛化，深度学习解释 representation learning，语言模型和 RL 再扩展到序列生成与决策。

## Start Here

<div class="ai-card-grid">
  <a class="ai-card" href="./ml/linear-algebra.md">
    <span class="ai-card__eyebrow">Prerequisite</span>
    <h3>Math for ML</h3>
    <p>线性代数、概率与微积分，负责建立模型表达与优化的公共语言。</p>
  </a>
  <a class="ai-card" href="./dl/">
    <span class="ai-card__eyebrow">Representation</span>
    <h3>Deep Learning</h3>
    <p>从神经元、反向传播到 CNN / RNN / Transformer，理解表征学习的核心。</p>
  </a>
  <a class="ai-card" href="./classical-ml/">
    <span class="ai-card__eyebrow">Problem formulation</span>
    <h3>Classical Machine Learning</h3>
    <p>监督、无监督、generalization、metric、leakage 与 model selection。</p>
  </a>
  <a class="ai-card" href="./lm/">
    <span class="ai-card__eyebrow">Sequence modeling</span>
    <h3>Language Model</h3>
    <p>从 n-gram 到神经语言模型，再过渡到 Transformer 时代。</p>
  </a>
  <a class="ai-card" href="./rl/">
    <span class="ai-card__eyebrow">Decision making</span>
    <h3>Reinforcement Learning</h3>
    <p>奖励、策略、价值函数，以及为什么 RL 在 LLM 对齐里重新变重要。</p>
  </a>
  <a class="ai-card" href="./peft/">
    <span class="ai-card__eyebrow">Efficient adaptation</span>
    <h3>PEFT</h3>
    <p>LoRA 一类方法如何让大模型适配下游任务，同时控制训练成本。</p>
  </a>
  <a class="ai-card" href="./paper.md">
    <span class="ai-card__eyebrow">Reading</span>
    <h3>Paper Notes</h3>
    <p>放一些论文阅读与方法整理，适合和主题笔记交叉阅读。</p>
  </a>
</div>

## Suggested Reading Order

1. 先补 `Math -> Classical ML`，理解任务、数据、loss、泛化和 metric。
2. 再进 `Deep Learning -> Language Model -> Transformer`，建立现代模型主线。
3. 关心序列决策时继续 `RL`，关心低成本适配时继续 `PEFT`。
4. 每一层都用 [PyTorch](/ai/pytorch/) 实现，并用 [Evaluation](/ai/evaluation/) 验证。

## Core Subtopics

- `ml/`: 概率、线代、微积分这些最常被默认掌握的前置知识。
- `classical-ml/`: 任务定义、监督/无监督学习、泛化和数据泄漏。
- `dl/`: 深度学习通用组件、训练技巧、经典结构。
- `lm/`: 语言模型基础，以及 `transformer/` 这一条最重要的现代主线。
- `rl/`: 强化学习范式、应用场景和 2025 年前后的趋势。
- `peft/`: 参数高效微调，衔接到 LLM 工程实践。

## High-Value Links

- [Deep Learning](./dl/)
- [Classical Machine Learning](./classical-ml/)
- [Transformer](./lm/transformer/)
- [Feed-Forward Network](./lm/transformer/ffn.md)
- [Optimizer](./dl/optimizer.md)
- [FlyLoRA](./peft/fly-lora.md)

## Concept Dependencies

| 概念 | 依赖什么 | 后续用于 |
| --- | --- | --- |
| Gradient & Optimizer | 微积分、线性代数 | 训练神经网络 |
| Representation Learning | loss、backprop、architecture | CNN、LM、multimodal |
| Attention | 向量相似度、softmax | Transformer、VLM、retrieval |
| Autoregressive Modeling | 概率分解、sequence modeling | LLM generation |
| Policy & Value | 概率、期望、序列决策 | RL、alignment、agents |
| Low-Rank Adaptation | 矩阵分解、fine-tuning | PEFT 与低成本适配 |

## How I Read a Paper

1. 标题、作者和摘要：确认研究问题与主要结论。
2. 结论与引言：理解贡献、假设和适用范围。
3. 方法：还原输入、目标、结构和训练流程。
4. 实验：检查 baseline、数据、指标、消融与统计稳定性。
5. 限制：区分论文证明了什么，以及没有证明什么。
6. 复述：用自己的语言写下核心机制、失败条件和可复现实验。
