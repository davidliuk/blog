---
title: Large Language Models
description: Large language models through tokenization, architecture, pretraining, scaling, long context, reasoning, post-training, and inference.
icon: font
---

# Large Language Models

LLM 把语言建模扩展为通用 sequence prediction：模型根据上下文估计下一个 token 或其他生成目标，再通过数据规模、architecture、post-training 和工具环境形成可用能力。

## Knowledge Map

<div class="ai-card-grid">
  <a class="ai-card" href="./pretraining.md">
    <span class="ai-card__eyebrow">Capability acquisition</span>
    <h3>Pretraining</h3>
    <p>目标函数、数据 mixture、scaling、optimization 和 contamination。</p>
  </a>
  <a class="ai-card" href="../../foundation/lm/transformer/">
    <span class="ai-card__eyebrow">Dense architecture</span>
    <h3>Transformer</h3>
    <p>Tokenization、embedding、attention、FFN、normalization 和 position。</p>
  </a>
  <a class="ai-card" href="./moe.md">
    <span class="ai-card__eyebrow">Sparse capacity</span>
    <h3>Mixture of Experts</h3>
    <p>Router、expert capacity、load balance、communication 和 serving。</p>
  </a>
  <a class="ai-card" href="./long-context.md">
    <span class="ai-card__eyebrow">Context scaling</span>
    <h3>Long Context</h3>
    <p>Position、attention cost、retrieval、memory 和 effective context use。</p>
  </a>
  <a class="ai-card" href="./reasoning.md">
    <span class="ai-card__eyebrow">Test-time computation</span>
    <h3>Reasoning</h3>
    <p>Decomposition、verification、search、tools 和 compute allocation。</p>
  </a>
  <a class="ai-card" href="./dllm/">
    <span class="ai-card__eyebrow">Alternative generation</span>
    <h3>Diffusion Language Models</h3>
    <p>非自回归或迭代 refinement 的文本生成范式。</p>
  </a>
</div>

## Model Lifecycle

```text
tokenizer + architecture + pretraining data
  → base model
  → instruction / preference / verifiable training
  → inference configuration
  → RAG / tools / product policy
  → evaluation and production feedback
```

“模型能力”是整个组合的行为，不只来自权重。

## Modeling Objectives

- **Autoregressive**：按顺序预测下一个 token，生成路径自然但 decode 串行。
- **Autoencoding / masked modeling**：恢复被遮盖内容，适合双向表征。
- **Denoising / diffusion**：从被破坏序列迭代恢复，探索不同生成顺序。

## Read a New LLM

1. Architecture 是 dense、MoE、recurrent 还是 hybrid？
2. Tokenizer、context 和 position strategy 是什么？
3. Pretraining data、objective 与 compute budget 如何组成？
4. Post-training 使用 demonstration、preference 还是 verifier？
5. Evaluation 是否区分 memorization、reasoning、tools 与 contamination？
6. Serving 的 memory、latency、throughput 和 deployment constraint 是什么？
