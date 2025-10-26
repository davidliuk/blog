# DIN

DIN 用加权平均代替平均，即注意力机制 (attention)
权重：候选物品与用户 LαstN 物品的相似度。

Zhou et al.Deep interest network for click-through rate prediction.In KDD,2018.

![image-20250824161930869](https://gcore.jsdelivr.net/gh/davidliuk/images@master/image-20250824161930869.png)

- 对于某候选物品，计算它与用户 Lα$tN 物品的相似度。
- 以相似度为权重，求用户 LαstN 物品向量的加权和，结果是一个向量
- 把得到的向量作为一种用户特征，输入排序模型，预估（用户，候选物品）的，点击率、点赞率等指标。
- 本质是注意力机制(attention)

![image-20250824162115222](https://gcore.jsdelivr.net/gh/davidliuk/images@master/image-20250824162115222.png)

---

简单平均 VS.注意力机制

- 简单平均和注意力机制都适用于精排模型。
- 简单平均适用于双塔模型、三塔模型。
  - ·简单平均只需要用到 LastN，属于用户自身的特征 o
  - ·把 LastN 向量的平均作为用户塔的输入。
- 注意力机制不适用于双塔模型、三塔模型。
  - ·注意力机制需要用到 LαstN+候选物品。
  - ·用户塔看不到候选物品，不能把注意力机制用在用户塔。
