# Tokenization

## 分词流程

分词是一个多阶段的过程，每个阶段都对文本进行一次转换：

| 阶段           | 作用                                                   | 示例                                |
| -------------- | ------------------------------------------------------ | ----------------------------------- |
| Normalizer     | 标准化文本（如小写转换、Unicode 正规化、清理空白字符） | "HELLO World" → "hello world"       |
| Pre-tokenizer  | 初步拆分文本                                           | "hello world" → ["hello", " world"] |
| Model          | 应用具体的分词算法（BPE、Unigram 等）                  | ["hello", " world"] → [9906, 1917]  |
| Post-processor | 添加特殊 token（如开始、结束、填充）                   | [9906, 1917] → [1, 9906, 1917, 2]   |
| Decoder        | 将 token ID 转换回文本                                 | [9906, 1917] → "hello world"        |

这些组件 **彼此独立**，你可以随意替换 [normalizer](https://link.zhihu.com/?target=https%3A//huggingface.co/docs/tokenizers/en/api/normalizers) 或改变 [算法模型](https://link.zhihu.com/?target=https%3A//huggingface.co/docs/tokenizers/en/api/models)，而不用重写整个分词器。

> 你可以通过 `_tokenizer` 属性访问底层 Rust 实现的分词器，详细内容见[这一节](https://zhuanlan.zhihu.com/write#tokenizersbackend-wraps-the-tokenizers-library)

分词是模型理解世界的第一步。演进的核心在于**词表扩容**与**跨模态兼容**。

- **初期 (WordPiece/BPE)**：BERT 使用 WordPiece，GPT-2 使用 BPE。词表较小（~32k-50k），对中文等语言不够友好。
- **中期 (SentencePiece/Tiktoken)**：Llama 系列采用 Tiktoken，词表扩展到 **128k**。这显著提升了编码效率，降低了序列长度。
- **当前 (Multimodal Tokenizer)**：
  - **动态分辨率 (Naive Dynamic Resolution)**：Qwen2-VL/Qwen3 不再强制缩放图片，而是按原始长宽比 Patch 化。
  - **原生融合 (Early Fusion)**：Llama 4 将图像、音频直接 Token 化进入同一空间，不再依赖外部的视觉编码器。

## 主流分词算法

目前主流的大模型分词器主要使用以下几种算法：

### **BPE（Byte Pair Encoding）**

通过迭代地合并最常出现的字符对来进行分词。该算法具有确定性，结果可复现，因而被广泛使用。[阅读 BPE 详情](https://link.zhihu.com/?target=https%3A//huggingface.co/learn/llm-course/en/chapter6/5)

```text
tokenizer = AutoTokenizer.from_pretrained("openai/gpt-oss-20b")
print(tokenizer._tokenizer.model)
# BPE(...)
```

### **Unigram**

采用概率模型，从大词表中选择最可能的切分方式，比 BPE 更灵活。[阅读 Unigram 详情](https://link.zhihu.com/?target=https%3A//huggingface.co/learn/llm-course/en/chapter6/7)

```text
tokenizer = AutoTokenizer.from_pretrained("google-t5/t5-base")
print(tokenizer._tokenizer.model)
# Unigram(...)
```

### **WordPiece**

与 BPE 类似，但使用基于概率的合并标准。[阅读 WordPiece 详情](https://link.zhihu.com/?target=https%3A//huggingface.co/learn/llm-course/en/chapter6/6)

```text
tokenizer = AutoTokenizer.from_pretrained("bert-base-uncased")
print(tokenizer._tokenizer.model)
# WordPiece(...)
```