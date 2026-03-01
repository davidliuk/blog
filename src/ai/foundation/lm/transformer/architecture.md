# Architecture

- Encoder-Decoder
- Encoder-Only
- Decoder-Only

### Emergent Abilities 涌现能力

> 上述GPT系列模型的能力拓展和增强，主要得益于模型规模和数据规模的增长。

实验发现这些新能力随着模型规模提升凭空自然涌现出来，因此将其称为涌现能力(Emergent Abilities)，例如上下文学习、逻辑推理和常识推理等能力。

- 上下文学习：上下文学习(In-Context Learning)指大语言模型在某些任务中无需额外的训练仅通过上下文信息中的示例或提示即可理解任务并生成输出。
- 常识推理：常识推理(Commonsense Reasoning)指大语言模型基于常识知识和逻辑进行理解和推断的能力。
- 逻辑推理：逻辑推理(Logical Reasoning)指大语言模型基于给定信息和规则进行行合乎逻辑的推断和结论的能力。

### Scaling Law 扩展法则

而上述GPT系列模型的性能提升，有着一系列关于模型能力与参数/数据规模之间的定量关系作为理论支撑，即扩展法则(Scaling Law)。其中以OpenAl提出的 Kaplan-McCandlish 法则以及 DeepMind 提出的 Chinchilla 法则最为著名。

## Encoder-Decoder

正常的完整 Transformer 架构

- T5，常用于检索器、精排器
- BART

## Encoder-Only

**双向注意力** Bidirectional Attention

单词填空任务

模型

- BERT 表征学习时代的王者
  - 掩码语言模型（MLM）
  - 下一句预测（NSP）

- RoBERTa
- ViT (Vision Transformer)
- MAE (Masked Autoencoders)

架构

1. Embedding
2. Transformer Block
3. 下游

目前还应用于大规模的检索和实体匹配里面

## Decoder-Only

**单向注意力** Masked/Causal Attention

**下一词预测任务**

| 特性                      | 原因                               |
| ------------------------- | ---------------------------------- |
| **Masked Self-Attention** | 防止看到未来信息（只看 $x_{）      |
| **无 Encoder 输入**       | 输入就是训练数据本身，无需外部序列 |
| **可逐词生成**            | 非常适合 open-ended generation     |

Decoder-only架构选取了Transformer中的解码器部分，即

- 输入编码
- 特征解码
- 输出生成部分

> 省略了每个解码模块中的交叉注意力子模块。

模型

- GPT
- LLaMA
- Mistral / Mixtral (MoE)
- DeepSeek
- Qwen
- DiT (Diffusion Transformer)
- Flux (Flow)

### GPT

- GPT-3 涌现出上下文学习(In-Context Learning ICL)能力，推理能力
- InstructGPT 引入 RLHF (Reinforcement Learning from Human Feedback)
- GPT 3.5 ChatGPT
- GPT 4 多模态能力

### LLaMA

#### LLaMA 1

- Embedding: CoPE -> RoPE (Rotary Positional Embeddings)
- Attention: Pre-Norm (RMSNorm (Root Mean Square))
- FFN: ReLU -> SwiGLU

#### LLaMA 2

- RLHF
- 拒绝采用
- GQA (Grouped Query Attention)

#### LLaMA 3

- **大规模 Token 训练：** 训练量从 2T 飙升至 **15T**，证明了即便参数量不变，更多高质量数据仍能显著提升模型上限。
- **新分词器 (Tiktoken)：** 词表大小从 32k 扩充到 **128k**，提升了文本压缩比和跨语言能力。
- **全系 GQA：** 即使是 8B 模型也采用了 GQA。

**Llama 3.1 (128k 时代)：**

- **405B Flagship：** 首次推出超大规模版本，性能比肩 GPT-4o。
- **长上下文处理：** 上下文窗口飞跃至 **128k**，并利用合成数据辅助训练。
- **工具调用 (Tool Use)：** 优化了函数调用（Function Calling）和代码执行能力。

#### Llama 3.2

视觉能力与边缘端优化 ，版本专注于“看”的能力和“轻量化”部署。

- **多模态适配器 (Vision Adapter)：** 在 LLM 基础上通过 Cross-Attention 接入了一个预训练的视觉编码器，使 11B 和 90B 模型具备了图像理解能力。
- **模型蒸馏 (Distillation)：** 1B 和 3B 的边缘端模型是通过大模型蒸馏得到的，在极小的体积下保持了极强的指令遵循能力。

#### LLaMA 4

- **MoE (Mixture of Experts)：** 彻底转向混合专家架构。代表作 **Maverick (400B)** 和 **Scout (109B)**，每次推理仅激活约 17B 参数，极大平衡了规模与算力开销。
- **原生多模态 (Early Fusion)：** 不再是外部挂载适配器，而是在预训练阶段就将图像、音频、文本 Token 进行“早期融合”，实现了更自然的跨模态逻辑推理。
- **iRoPE 与 10M 上下文：** 引入了改进的旋转位置编码（iRoPE），配合长度泛化技术，将上下文窗口推到了惊人的 **1000 万（10M）Token** 量级。
- **Behemoth 版本：** 拥有近 2 万亿总参数的超巨型模型，专注于解决科学、数学等极限推理任务。

> AlphaGo: 0.065B

LLaMA 衍生模型

- 性能改进类模型
  - Alpaca
  - Vicuna
- 垂域任务类模型
  - CodeLLaMA
  - FinLLaMA
- 多模态任务类
  - LLaVA
  - MiniGPT4

### Mixtral

- **Sliding Window Attention (SWA):** 在 Mistral 7B 中引入。模型只看最近的一部分 Token，节省计算量，但能通过层级传递处理长文。
- **Sparse MoE (Mixtral 8x7B):** 它是首个证明 **专家混合模型 (MoE)** 在开源界可行的模型。虽然总参数量大，但每次推理只激活 2 个专家，速度飞快。

### DeepSeek

- **DeepSeek-MoE:** 引入了“共享专家”和“细粒度专家”，解决了传统 MoE 中专家负担不均的问题。
- **MLA (Multi-head Latent Attention):** 在 V2/V3 中引入。通过**低秩压缩**减少 KV Cache 的存储压力，使得模型能以极低的显存处理超长文本。
- **DeepSeek-R1:** 类似于 OpenAI o1，通过大规模强化学习让模型具备了强大的自主推理和自我修正能力。

#### DeepSeek-V1

这是 DeepSeek 的起步版本，架构上相对保守，主要跟随 Llama 的主流设计。

- **核心改进：** 采用了标准的 **Decoder-Only** 架构，引入了 **RoPE** 和 **RMSNorm**。
- **思路：** 重点在于**高质量数据的清洗和大规模预训练**。证明了国内团队在没有任何先验红利的情况下，可以从零做出一个性能扎实的 Base 模型。

#### DeepSeek-V2

V2 是 DeepSeek 真正封神的版本，它引入了两个颠覆性的创新，彻底解决了长文本推理和显存占用的矛盾。

##### **MLA (Multi-head Latent Attention)**

- **逻辑：** 传统的 GQA 虽然减少了 KV 头的数量，但显存占用仍然随长度线性增长。MLA 通过 **低秩压缩（Low-rank Compression）**，将 KV 缓存压缩成一个极小的潜在向量（Latent Vector）。
- **意义：** 推理时 KV Cache 的显存占用减少了约 **90%**，使得单卡可以承载更长的上下文和更大的并发量。

##### **DeepSeek-MoE**

- **逻辑：** 引入了“**共享专家 (Shared Experts)**”和“**细粒度专家路由 (Fine-grained Expert Routing)**”。
- **意义：** 解决了专家坍塌问题。固定一部分专家处理通用知识，其余专家处理专业知识，使 236B 总参数的模型在推理时仅激活 21B 参数，极大降低了计算成本。

------

#### DeepSeek-V3

V3 是一个拥有 671B 参数的巨型模型，它在 V2 的基础上解决了超大规模模型训练的不稳定和效率问题。

- **FP8 混合精度训练：** 首次大规模成功应用 FP8 训练，显著提升了训练速度并降低了显存需求。
- **DualPipe 算法：** 针对流水线并行（Pipeline Parallelism）进行了深度优化，通过重叠计算和通信，几乎消除了“流水线气泡（Bubbles）”。
- **MTP (Multi-Token Prediction)：**
  - **逻辑：** 传统的预测是 $Next-Token$，V3 在训练时增加了一个预测未来多个词的分支。
  - **思路：** 这种设计增强了模型对文本的全局规划能力，并提升了投机采样（Speculative Decoding）的效率。

#### DeepSeek-V3.1

V3.1 是在生成策略上的微调版本，核心在于**强化学习（RL）**的深化。

- **思路：** 借鉴了 o1 的思路，大规模引入 **思维链 (CoT)**。
- **改进：** 优化了模型在 `<think>` 标签内的思考效率。它学会了“反思”和“验证”，但在 3.1 版本中，DeepSeek 设法在不增加 Token 数量的前提下提升了逻辑密度。

#### DeepSeek-V3.2

这是 2025 年末最受关注的版本，标志着 DeepSeek 进入了 $O(n)$ 复杂度时代。

##### DSA (DeepSeek Sparse Attention)

- **逻辑：** 摒弃了全局 Dense 注意力，转而使用**块状稀疏注意力**。模型只关注最相关的块，将注意力计算的复杂度从 $O(n^2)$ 降低到了接近 $O(n)$。
- **意义：** 极大地降低了长文本推理的成本，使得 DeepSeek 的 API 价格能再次大幅下降。

##### **原生 Agent 能力集成**

- **逻辑：** V3.2 解决了“思考”与“执行”的冲突。模型可以在思维链过程中随时调用外部工具（Code Interpreter, Search API），而不需要打断当前的逻辑流。

### Qwen

- **Qwen 1.0/1.5:** 优化了多语言支持，尤其是代码和数学能力。
- **Qwen 2.0/2.5:** **海量训练：** 2.5 版本使用了高达 18T 的 Token。
  - **Tie Embedding:** 在小参数模型中共享输入输出权重，节省参数。
- **Qwen 3 (2025):** 引入了类似 R1 的**思维链模式**，并支持多达 119 种语言。

#### **Qwen 1.0**

2023.08

- **核心架构**：采用了经典的 **RoPE**（旋转位置编码）、**SwiGLU** 激活函数和 **RMSNorm**（均值平方根归一化）。
- **训练规模**：在约 3T Token 的多样化数据上预训练。
- **亮点**：初步展现了极强的中文能力，并发布了 7B、14B 等不同规模的模型。

#### Qwen 1.5

2024.02

- **改进**：引入了更完善的 **长文本处理机制**（支持 32k），优化了对话的自然度和指令遵循能力。
- **多规模覆盖**：提供了从 0.5B 到 110B 的超全模型谱系，并首次引入了 **MoE 架构（Qwen1.5-MoE-A2.7B）** 的尝试。

#### Qwen 2

2024.06

- **GQA (Grouped-Query Attention)**：在全系模型中普及 GQA，显著降低了长序列推理时的显存占用（KV Cache）。
- **数据升级**：预训练数据量提升至 **7T Token**，支持语言扩展至 27 种以上。
- **上下文翻倍**：原生支持 128k 上下文，通过 **YaRN** 缩放技术实现。

#### Qwen 2.5

2024.09 - 2025.01

- **暴力美学**：训练 Token 数量飙升至 **18T - 20T**。
- **垂直领域增强**：推出了专门针对编程的 **Qwen2.5-Coder** 和数学的 **Qwen2.5-Math**，性能甚至超越了同规模的闭源模型。
- **视觉演进 (Qwen2.5-VL)**：引入 **M-RoPE (3D-RoPE)**。将位置编码拆分为时间、高度、宽度三个维度，使其能原生理解 1 小时以上的长视频。

#### Qwen 3

思维链 (CoT) 与推理革命

Qwen 3 的核心思路是 **“慢思考”与“快反应”的统一**。

- **双模式切换 (Thinking Mode)**：
  - **原理**：借鉴了类似 OpenAI o1 的思路，模型可以在输出前通过 `<think>` 标签进行长程逻辑推理。
  - **四阶段训练**：长思维链冷启动 $\rightarrow$ 强化学习（RL） $\rightarrow$ 模式融合 $\rightarrow$ 通用 RL。通过 **GRPO (组相对策略优化)** 算法提升推理能力，同时保持非思考模式下的响应速度。
- **超大规模 MoE**：
  - **代表型号**：Qwen3-235B-A22B。总参数高达 235B，但每次推理仅激活约 22B 参数。
- **Qwen3-Omni**：
  - **Thinker-Talker 架构**：Thinker 负责逻辑推理，Talker 负责流式语音生成。通过 **AuT 编码器**（2000 万小时音频训练），实现了极低延迟（~211ms）的真实感实时音视频交互。

#### Qwen 3-Next

线性注意力的效率终局

Qwen 3-Next 是为了彻底打破 Transformer 的 $O(n^2)$ 复杂度瓶颈而设计的**混合架构**。

- **核心创新：Gated DeltaNet (线性注意力)**：
  - **3:1 混合比例**：模型中 75% 的层采用线性化的 Gated DeltaNet，25% 的层保留标准注意力。这种设计在保持极高“回忆（Recall）”能力的同时，将长文本（32k+）的推理速度提升了 **10 倍** 以上。
  - Gated Attention
- **超稀疏 MoE (Ultra-Sparse MoE)**：
  - 参数量达到 80B，但每次仅激活 **3B** 参数（激活率 3.7%）。这使得一个拥有 80B 知识储备的模型，能在移动端或低功耗硬件上流畅运行。
- **MTP (Multi-Token Prediction)**：
  - **原生支持**：模型训练时不再只预测下一个词，而是同时预测未来多个 Token。这极大地增强了模型的规划能力，并完美契合了**投机采样（Speculative Decoding）**加速技术。