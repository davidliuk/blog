# Unsupervised Learning

无监督学习试图从没有任务标签的数据中发现结构。结果没有天然“正确答案”，所以评估必须连接下游用途、稳定性和人工解释。

## Main Tasks

| Task | Goal | Common method |
| --- | --- | --- |
| Clustering | 把相似样本分组 | k-means、hierarchical、density-based |
| Dimensionality reduction | 保留主要结构并压缩表示 | PCA、matrix factorization、manifold method |
| Density estimation | 建模数据分布 | mixture model、kernel method、generative model |
| Anomaly detection | 找到低概率或偏离模式 | isolation、distance、reconstruction |
| Representation learning | 学习可迁移的 embedding | contrastive、masked、self-supervised objective |

## Clustering Questions

1. distance 是否符合业务语义？
2. feature scaling 是否让某些维度支配结果？
3. cluster 数由算法、统计证据还是下游容量决定？
4. 随机初始化和样本扰动后，分组是否稳定？
5. 新数据进入时，cluster identity 怎样演进？

## Dimensionality Reduction

PCA 寻找最大 variance 的正交方向，但最大 variance 不一定代表任务相关信息。用于可视化时，二维图可能夸大分离程度；用于特征压缩时，应验证下游效果与信息损失。

## Evaluate Without Labels

- internal compactness / separation 只反映几何结构；
- stability 检查重采样和超参数变化；
- human review 检查解释是否成立；
- downstream evaluation 判断表示是否改善真实任务；
- intervention test 检查分组是否支持可执行策略。
