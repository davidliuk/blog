---
title: Math for Machine Learning
description: Mathematical foundations for representation, uncertainty, optimization, and model interpretation.
icon: square-root-variable
---

# Math for Machine Learning

数学基础的目标是解释模型：数据怎样被表示、不确定性怎样被量化、目标怎样被优化，以及结论在什么假设下成立。

## The Three Languages

| Foundation | Explains | Typical AI use |
| --- | --- | --- |
| [Linear Algebra](./linear-algebra.md) | 向量空间、变换、相似性和低秩结构 | embedding、attention、projection、factorization |
| [Probability](./probability.md) | 分布、条件、不确定性和期望 | likelihood、sampling、calibration、Bayesian reasoning |
| [Calculus](./calculus.md) | 局部变化、梯度和连续优化 | backpropagation、loss landscape、optimizer |

## Learn Math in Context

1. 从一个模型中的具体公式出发，标出每个量的 shape 和含义。
2. 用小规模数值例子手算 forward result。
3. 解释目标函数为什么代表任务，而不只推导梯度。
4. 检查隐含假设：独立性、线性、平滑性、可辨识性或数据分布。
5. 再回到代码验证数值、梯度和边界行为。

## Common Gaps

- 能做矩阵运算，但无法解释表示空间。
- 会套 Bayes 公式，但混淆 probability 与 likelihood。
- 会求导，却不知道 loss 与真实产品目标的偏差。
- 只看标量公式，不追踪 batch、sequence、head 和 feature shape。
