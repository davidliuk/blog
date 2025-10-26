# Multi-gate Mixture-of- Experts

![image-20250818113820452](https://gcore.jsdelivr.net/gh/davidliuk/images@master/image-20250818113820452.png)

![image-20250818113854684](https://gcore.jsdelivr.net/gh/davidliuk/images@master/image-20250818113854684.png)

- 一般 4/8 个专家

- 多少组目标就需要有多少组权重

## 极化现象

极化(polarize)：Softmax 输出值一个接近 1，其余接近 0

- 如果有 n 个“专家”，那么每个 softmax 的输入和输出都是 n 维向量。
- 在训练时，对 softmax 的输出使用 dropout。

  - Softmax 输出的 n 个数值被 mask 的概率都是 10%。
  - 每个“专家”被随机丢弃的概率都是 10%。

- Google 的论文[1]提出 MMoE 模型。
- YouTube 的论文[2]提出极化问题的解决方案。

参考文献：

1. Jiaqi Ma et al.Modeling Task Relationships in Multi-task Learning with Multi-gate Mixture-of-Experts.In KDD,2018.
2. Zhe Zhao et al.Recommending What Video to Watch Next:A Multitask Ranking System.In RecSys,2019.

> 有人用了有提升有人用了没有，具体情况具体分析
