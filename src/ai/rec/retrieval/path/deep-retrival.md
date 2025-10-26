# Deep Retrieval

> 参考文献：
>
> 1. Weihao Gao et al.Learning A Retrievable Structure for Large-Scale Recommendations.In CIKM,2021.
> 2. Han Zhu et al.Learning Tree-based Deep Model for Recommender Systems.In KDD 2018.

1. 索引：
   - ·路径 →List<物品>
   - ·物品 →List<路径>
2. 预估模型：神经网络预估用户对路径的兴趣
3. 线上召回：用户 → 路径 → 物品。
4. 训练：
   - ·学习神经网络参数·
   - ·学习物品表征（物品 → 路径)。

## 索引

- 深度：depth=3。
- 宽度：width=Ko
- 把一个物品表示为一条路径(path),比如[2,4,1]。
- 一个物品可以表示为多条路径比如{[2,4,1]，[4,1,1]}。
