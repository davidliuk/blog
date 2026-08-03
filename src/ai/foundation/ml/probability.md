# Probability for Machine Learning

概率为不确定性提供语言。模型输出不是“事实”，而是在数据、假设和目标函数下对事件、类别或序列建立的分布。

## Core Objects

| Concept | Meaning in ML |
| --- | --- |
| Random variable | 把随机结果映射为可计算的数值 |
| Distribution | 描述可能结果及其概率质量或密度 |
| Expectation | 在分布下的平均目标，常形成训练 loss |
| Variance | 不确定性或波动的尺度 |
| Conditional probability | 给定观测后，事件概率怎样变化 |
| Likelihood | 把参数视为变量，衡量参数对观测数据的解释程度 |

## Conditional Probability and Bayes

$$
P(A \mid B) = \frac{P(B \mid A)P(A)}{P(B)}
$$

- **Prior**：观察当前证据前对参数或假设的相信程度。
- **Likelihood**：当前假设产生观测数据的可能性。
- **Posterior**：结合证据后的更新结果。

Bayes rule 的价值不是公式变形，而是区分“原因导致证据”与“看到证据后反推原因”。

## Expectations Become Objectives

许多模型训练可以写成经验期望：

$$
\hat{R}(\theta) = \frac{1}{n}\sum_{i=1}^{n}\mathcal{L}(f_\theta(x_i), y_i)
$$

它用有限样本近似真实数据分布下的风险。训练 loss 下降并不保证真实风险下降，因此需要 validation、regularization 和 distribution-shift 检查。

## MLE and MAP

- **Maximum Likelihood** 选择最能解释观测数据的参数。
- **Maximum A Posteriori** 在 likelihood 上加入 parameter prior。
- 负对数把概率乘积转成可优化的 loss 求和。

## Calibration

如果模型对一组事件给出约 0.8 的概率，其中应有约 80% 发生，才称得上校准。ranking quality 与 calibration 是不同性质：模型可以排序正确，但概率严重偏高或偏低。

## Review Questions

1. 概率是对数据噪声、模型不确定性，还是决策风险的表达？
2. 样本是否独立同分布，这个假设在哪里被破坏？
3. 训练目标对应的是 likelihood、expected reward 还是 surrogate loss？
4. 预测分布是否校准，阈值改变后决策成本怎样变化？
