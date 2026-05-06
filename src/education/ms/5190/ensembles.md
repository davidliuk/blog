# Ensembles



## Bagging

How to learn the base models?

- • Bagging (randomize dataset)
- • Boosting (weighted dataset)

How to combine the learned base models?

- Averaging (regression) 
- majority vote (classification)

### Random Forests



Bagging based Ensembles

1. Step 1: Create bootstrap replicates of the original training dataset

2. Step 2: Train a classifier for each replicate

3. Step 3 (Optional): Use held-out validation set to weight models

   Can just use average predictions

## Boosting

Boosting 的初衷是探讨：能否将多个“弱学习器”（误差仅比随机猜测好一点点，即错误率 $< 0.5$）组合成一个“强学习器” ？

- **目标**：主要为了**降低偏差（Bias）** 。
- **适用对象**：通常使用高偏差、低容量的模型作为基学习器，例如层数极浅（3-6层）的决策树 。

### AdaBoost

AdaBoost（Adaptive Boosting）是最具代表性的算法之一 。

#### 运作机制：

1. **样本权重**：起初，所有样本的权重都是一样的 。
2. **迭代学习**：
   - 训练一个模型后，检查哪些样本预测错了 。
   - **更新权重**：**大幅增加**被预测错的样本权重，**减小**预测正确的样本权重 。
   - **新模型**：下一个模型会被强迫去关注这些“难题”（高权重样本） 。
3. **模型加权投票**：最终预测时，表现越好的模型话语权（权重 $\beta_t$）越大 。

### Gradient Boosting

随着研究的发展，人们发现 Boosting 其实可以看作是在**损失函数上做梯度下降** 。

- **残差学习（Residuals）**：在回归问题中，每一个新模型 $f_{t+1}$ 并不是直接预测目标 $y$，而是去预测当前模型 $F_t$ 的“残差”（即 $y - F_t(x)$） 。
- **通用性**：这种方法不仅适用于平方误差，还可以通过计算梯度来处理任何可微的损失函数 。

### XGBoost

