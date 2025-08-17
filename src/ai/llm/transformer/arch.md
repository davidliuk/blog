# Architecture

- Encoder-Decoder
- Encoder-Only
- Decoder-Only

### 涌现能力

> 上述GPT系列模型的能力拓展和增强，主要得益于模型规模和数据规模的增长。

实验发现这些新能力随着模型规模提升凭空自然涌现出来，因此将其称为涌现能力(Emergent Abilities)，例如上下文学习、逻辑推理和常识推理等能力。

- 上下文学习：上下文学习(In-Context Learning)指大语言模型在某些任务中无需额外的训练仅通过上下文信息中的示例或提示即可理解任务并生成输出。
- 常识推理：常识推理(Commonsense Reasoning)指大语言模型基于常识知识和逻辑进行理解和推断的能力。
- 逻辑推理：逻辑推理(Logical Reasoning)指大语言模型基于给定信息和规则进行行合乎逻辑的推断和结论的能力。

### 扩展法则

而上述GPT系列模型的性能提升，有着一系列关于模型能力与参数/数据规模之间的定量关系作为理论支撑，即扩展法则(Scaling Law)。其中以OpenAl提出的 Kaplan-McCandlish 法则以及 DeepMind 提出的 Chinchilla 法则最为著名。

## Encoder-Decoder

正常的完整 Transformer 架构

- T5，常用于检索器、精排器
- BART

## Encoder-Only

双向注意力

单词填空任务

- BERT 表征学习时代的王者 
- RoBERTa

架构

1. Embedding
2. Transformer Block
3. 下游

目前还应用于大规模的检索和实体匹配里面

## Decoder-Only

Decoder-only架构选取了Transformer中的解码器部分，即输入编码、特征解码及输出生成部分。核心特点在于省略了每个解码模块中的交叉注意力子模块。

单向注意力

下一词预测任务

- GPT
- LLaMA

### GPT

- GPT-3 涌现出上下文学习(In-Context Learning ICL)能力，推理能力
- InstructGPT 引入 RLHF (Reinforcement Learning from Human Feedback)
- GPT 3.5 ChatGPT
- GPT-4 多模态能力

### LLaMA

LLaMA 1

- Embedding: CoPE -> RoPE
- Attention: Pre-Norm
- FFN: ReLU -> SwiGLU

LLaMA 2

- RLHF
- 拒绝采用
- GQA (Grouped Query Attention)

LLaMA 3

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