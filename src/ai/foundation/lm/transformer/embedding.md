# Embedding

从权重共享到低秩压缩

Embedding 负责将 Token 映射到连续向量空间。

- **初期 (Standard Embedding)**：简单的 Lookup Table。
- **中期 (Weight Tying)**：为了节省参数，很多模型（如 PaLM, Qwen1.5）让输入 Embedding 和输出层（LM Head）共享权重。
- **当前 (Low-rank & Latent Embedding)**：
  - **MLA (Multi-head Latent Attention)**：DeepSeek 引入。它将 Embedding 进行**低秩压缩**，在推理时动态还原，大幅减少了模型体积。
  - **模态对齐**：通过多模态投射器（Projector），将视觉/音频 Embedding 强行拉齐到文本空间。