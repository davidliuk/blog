# Flamingo

**Flamingo** 是由 **DeepMind** 在 2022 年提出的多模态模型系列。

如果不夸张地说，Flamingo 之于多模态领域，就像 GPT-3 之于自然语言处理领域。它是第一个真正展现出**惊人的“少样本学习 (Few-shot Learning)”能力**的视觉-语言模型。

在此之前，大多数 VLM（如 CLIP, 早期 BLIP）都需要针对特定任务（如 VQA、COCO Caption）进行微调。而 Flamingo 只需要你给它看几个例子（比如：“图1是猫，图2是狗，那图3是？”），它就能学会任务，无需更新参数。

### 1. 核心理念：交错的数据 (Interleaved Data)

在 Flamingo 之前，大部分模型是用“成对数据 (Image-Text Pairs)”训练的。

Flamingo 的核心洞察是：网络上的真实数据不是一对一的，而是图文交错的（比如博客文章、新闻网页）。

- **输入格式:** `Text -> Image -> Text -> Image -> Text`
- 这种格式使得 Flamingo 能够理解上下文，并进行“视觉上下文学习 (In-context Learning)”。

------

### 2. 模型架构详解

Flamingo 的架构设计非常优雅，它的核心原则是：**为了不破坏 LLM 已经学到的知识，必须冻结 LLM 和 Vision Encoder。**

它由三个主要部分组成：

#### A. Vision Encoder (冻结的视觉编码器)

- Flamingo 使用预训练好的 **NFNet** (Normalizer-Free ResNet) 或 CLIP-ViT。
- **作用:** 提取图像特征。
- **状态:** **Frozen (冻结)**。不参与训练。

#### B. Perceiver Resampler (感知器重采样器) —— *BLIP-3 的灵感来源*

这是 Flamingo 最著名的创新之一。

- **问题:** 视觉编码器输出的特征图大小不一，且数量很大（比如 $N$ 个 patch），直接喂给 LLM 会撑爆显存。
- **解决:** 引入一个可学习的模块，将任意数量的视觉特征压缩成**固定数量**（例如 64 个）的 Visual Tokens。
- **机制:** 使用 Cross-Attention，用固定数量的 Latent Queries 去“查询”视觉特征。
- **输出:** 无论输入图片多大，输出永远是 $64 \times D$。

#### C. Gated Cross-Attention (门控交叉注意力) —— *最独特的注入方式*

这是 Flamingo 与 BLIP-3/LLaVA 等现代模型**最大的不同点**。

- **BLIP-3/LLaVA 的做法:** 将 Visual Tokens 放在输入端，像文本一样拼接到 Prompt 里 (`[Img][Txt]`)。
- **Flamingo 的做法:** **将 Visual Tokens 插入到 LLM 的层中间。**

DeepMind 在冻结的 LLM 层之间插入了全新的 **GATED X-ATTN (Dense)** 层：

1. **交叉注意力:** 文本 Token 作为 Query，Visual Tokens 作为 Key/Value。这意味着文本会去“关注”图片信息。
2. **Tanh Gating (门控机制):** 初始化时，这个门的输出被乘以一个 `tanh` 参数（初始化为 0）。
   - **原因:** 在训练刚开始时，模型完全忽略新增的层，表现得和原始 LLM 一模一样。随着训练进行，门慢慢打开，视觉信息逐渐注入。这保证了训练极度稳定。

------

### 3. Flamingo 的开源继承者

由于 DeepMind 没有开源 Flamingo 的权重和代码，开源社区基于其论文复现了多个版本，构成了广泛的“Flamingo 家族”：

#### 1. OpenFlamingo

- **发布者:** LAION 社区。
- **特点:** 忠实复现了 Flamingo 的架构。
- **基座:** 使用 CLIP ViT + LLaMA (或其他开源 LLM)。
- **地位:** 是早期开源多模态研究的重要基石。

#### 2. IDEFICS (1 & 2)

- **发布者:** HuggingFace。
- **地位:** 目前最强的 Flamingo 架构开源版本。
- **改进:** * **IDEFICS-1 (2023):** 几乎是 80B Flamingo 的复刻版，但在公开数据上训练。
  - **IDEFICS-2 (2024):** 进行了现代化改造。它**放弃了** Gated Cross-Attention (层间插入)，改用了类似 BLIP-3/LLaVA 的**输入端拼接**方式，但保留了 Perceiver Resampler 和处理交错数据的能力。这证明了“输入端拼接”在效率上优于“层间插入”。

------

### 4. Flamingo vs. BLIP-3 (xGen-MM) 对比总结

因为您刚才问了 BLIP-3，这里做一个横向对比非常有意义：

| **特性**     | **Flamingo (2022)**                    | **BLIP-3 / xGen-MM (2024)**                |
| ------------ | -------------------------------------- | ------------------------------------------ |
| **视觉压缩** | **Perceiver Resampler** (首创)         | **Perceiver Resampler** (沿用)             |
| **融合方式** | **Gated Cross-Attention** (插入层中间) | **Input Concatenation** (拼接到输入文本前) |
| **LLM 状态** | Frozen + 新增层训练                    | Frozen (通常)                              |
| **数据类型** | **Interleaved (交错图文)**             | **Interleaved (交错图文)**                 |
| **优势**     | 训练极度稳定，不破坏 LLM 原始能力      | 架构更简单，推理更快 (KV Cache 更友好)     |

### 5. 总结

Flamingo 是多模态领域的**里程碑**。它确立了两件事：

1. **Interleaved Data (交错数据)** 是训练强大 VLM 的关键。
2. **Perceiver Resampler** 是连接视觉和语言的高效桥梁。

虽然现在主流架构（如 LLaVA, GPT-4V）更倾向于简单的“输入端拼接”，但它们处理多图、少样本学习的能力，在很大程度上都继承自 Flamingo 的遗产。如果你现在听到有人说“IDEFICS”或者“OpenFlamingo”，指的都是这一脉相承的模型。