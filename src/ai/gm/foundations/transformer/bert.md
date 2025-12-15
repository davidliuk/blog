# BERT

NLP里的迁移学习

- 使用预训练好的模型来抽取词、句子的特征
  - 例如word2vec或语言模型
- 不更新预训练好的模型
- 需要构建新的网络来抓取新任务需要的信息
  - Word2vec忽略了时序信息，语言模型只看了一个方向



- 基于微调的NLP模型
- 预训练的模型抽取了足够多的信息
- 新的任务只需要增加一个简单的输出层

---

AE

没有Decoder的transformer

- 只有编码器的Transformer

- 两个版本：

  - Base:#blocks 12,hidden size 768,#heads 12,

    #parameters 110M

  - Large:#blocks=24,hidden size 1024,#heads 1

    #parameter=340M

- 在大规模数据上训练>3B词

---

每个样本是一个句子对
加入额外的片段嵌入
位置编码可学习

Position Embeddings
Segment Embeddings
Token Embeddings

Transfomer的编码器是双向，标准语言模型要求单向
带掩码的语言模型每次随机（15%概率)将一些词元换成
\<mask\>