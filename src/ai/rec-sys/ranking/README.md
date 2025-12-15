# Ranking

## Multi-task Learning, MTL 多目标模型

排序的依据

- 排序模型预估点击率、点赞率、收藏率、转发率等多种分数。
- 融合这些预估分数。（比如加权和。)
- 根据融合的分数做排序、截断。

## 模型

![image-20250818104259163](https://gcore.jsdelivr.net/gh/davidliuk/images@master/image-20250818104259163.png)

- 主要代价在 Shared Bottom
- 前期融合：先对所有特征做 concatenation，再输入神经网络。
- 线上推理代价大：如果有篇候选笔记，整个大模型要做 n 次推理。

$CrossEntropy(y_1,p_1)=-(y_1\cdot\ln p_1+(1-y_1)\cdot\ln(1-p_1))$

- 总的损失函数：$\sum_{i=1}^4\alpha_i\cdot CrossEntropy(y_i,p_i)$

> 加权和损失函数，alpha 是根据经验设置的超参

对损失函数求梯度，做梯度下降更新参数。

## 训练

- 困难：类别不平衡。

  - 每 100 次曝光，约有 10 次点击、90 次无，点击。
  - 每 100 次，点击，约有 10 次收藏、90 次无收藏。

- 解决方案：负样本降采样（down-sampling)

  - 保留一小部分负样本。

  - 让正负样本数量平衡，节约计算。

    > eg. 原本需要 10h，降采样完只需要 3h

## 预估值校准

- 真实点击率：$p_{true}=\frac{n_+}{n_++n_-}$
- 预估点击率：$p_{pred}=\frac{n_+}{n_++\alpha n_-}$
  - $\alpha$: 负样本的降采样率
- 校准公式：$p_{true}=\frac{\alpha\cdot p_{pred}}{(1-p_{pred})+\alpha\cdot p_{pred}}$

参考文献：

1. Xinran He et al.Practical lessons from predicting clicks on ads at Facebook.In the 8th International Workshop on Data Mining for Online Advertising.
