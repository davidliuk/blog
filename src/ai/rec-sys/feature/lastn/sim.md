# SIM

用户长期兴趣

- 注意力层的计算量 ∝（用户行为序列的长度)
- 只能记录最近几百个物品’否则计算量太大。
- 缺点：关注短期兴趣，遗忘长期兴趣·

目标：保留用户长期行为序列（很大)，而且计算量不会过大。

改进 DIN:

- ·DIN 对 LastN 向量做加权平均’权重是相似度
- ·如果某 La$tN 物品与候选物品差异很大，则权重接近零。
- ·快速排除掉与候选物品无关的 LαstN 物品，降低注意力层的计算量。

- Qi et al.Search-based User Interest Modeling with Lifelong Sequential Behavior Data for Click-Through Rate Prediction.In CIKM,2020.

- 保留用户长期行为记录，的大小可以是几千。
- 对于每个候选物品，在用户 Lα$tN 记录中做快速查找，找到 k 个相似物品。
- 把 LastN 变成 TopK,然后输入到注意力层·
- SIM 模型减小计算量（从 n 降到 k)

## 第一步：查找

- 方法一：Iard Search
  - ·根据候选物品的类目，保留 Lα$tN 物品中类目相同的。
  - ·简单’快速’无需训练。
- 方法二：Soft Search
  - ·把物品做 embedding,变成向量。
  - ·把候选物品向量作为 query,做 k 近邻查找’保留 LastN 物品中最接近的飞个。
  - ·效果更好’编程实现更复杂。

## 第二部：注意力机制

![image-20250824162708642](https://gcore.jsdelivr.net/gh/davidliuk/images@master/image-20250824162708642.png)

使用时间信息

- 用户与某个 LαstN 物品的交互时刻距今为 δ。

- 对 δ 做离散化，再做 embedding，变成向量 d。

  > 1d, 7d, 30d, 1y, 1+y

- 把两个向量做 concatenation，表征一个 LastN 物品。

  - 向量 x 是物品的 embedding。
  - 向量 d 是时间的 embedding。

![image-20250824162928012](https://gcore.jsdelivr.net/gh/davidliuk/images@master/image-20250824162928012.png)

为什么 SIM 使用时间信息？

- DIN 的序列短，记录用户近期行为。
- SIM 的序列长’记录用户长期行为。
- 时间越久远，重要性越低。

结论

- 长序列（长期兴趣）优于短序列（近期兴趣)。
- 注意力机制优于简单平均。
- Soft search 还是 hard search?取决于工程基建。
- 使用时间信息有提升。
