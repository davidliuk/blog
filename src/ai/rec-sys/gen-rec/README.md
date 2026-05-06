# Generative Recommenders

生成式推荐关注的问题不是简单替换原来的漏斗，而是把生成模型接进推荐链路: 用更强的序列建模、listwise 生成或用户意图建模能力，改写候选生成、排序或重排。

## Why It Matters

- 传统推荐更多是 pointwise / pairwise 打分。
- 生成式推荐更适合直接建模“整页结果”或“下一个物品序列”。
- 它通常和 `re-ranking`、`listwise learning`、`LLM for Rec` 更紧密相关。

## Reading Direction

可以把这部分当成推荐系统与生成式模型的交叉区域，建议先读完 `retrieval -> ranking -> re-ranking` 的基本链路，再回来理解为什么生成式方法值得引入。