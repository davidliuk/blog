# MAE

Masked Autoencoder（MAE）把自编码思想迁移到视觉 Transformer：随机遮住大部分图像 patch，只根据可见 patch 重建缺失像素，从而学习可迁移的视觉表示。

## 架构

1. 图像被切分为 patch；
2. 高比例 patch 被随机 mask；
3. encoder 只处理可见 patch；
4. 轻量 decoder 接收编码结果与 mask token；
5. 在被遮挡 patch 上计算像素重建误差。

若输入 patch 为 $x_i$，被遮挡集合为 $\mathcal M$，目标可写为：

$$
\mathcal L=\frac{1}{|\mathcal M|}\sum_{i\in\mathcal M}
\lVert \hat x_i-x_i\rVert_2^2
$$

通常会先对每个 patch 的像素做归一化，避免低频颜色统计支配学习。

## 为什么高遮挡率有效

相邻图像 patch 高度冗余，低遮挡率可能让模型通过局部插值完成任务，而不必学习对象级语义。高遮挡率既提高任务难度，又让 encoder 只处理少量 token，降低预训练计算。

## 与 BERT 的差异

BERT 的输入 token 是离散语义单元，图像 patch 则连续且冗余；MAE 的 decoder 仅用于预训练，迁移时通常丢弃。它更像表示学习底座，不直接等于生成式图像模型。

## 实践判断

重点观察 mask ratio、输入分辨率、decoder 容量、预训练数据与下游微调策略。线性探测衡量表示的直接可分性，全量微调则衡量可适配性，两者回答的问题不同。

参考：[Masked Autoencoders Are Scalable Vision Learners](https://arxiv.org/abs/2111.06377)。
