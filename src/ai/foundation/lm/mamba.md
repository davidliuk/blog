# Mamba

Mamba 是一类基于 Selective State Space Model（选择性状态空间模型）的序列架构。它希望保留 RNN/SSM 对长序列的线性计算特征，同时用输入相关的选择机制提高内容建模能力。

## 从状态空间到序列模型

连续状态空间可写作：

$$
h'(t)=Ah(t)+Bx(t),\qquad y(t)=Ch(t)
$$

离散化后得到递推形式：

$$
h_t=\bar A h_{t-1}+\bar Bx_t,\qquad y_t=Ch_t
$$

传统线性时不变 SSM 的参数不随 token 改变，难以根据内容决定“记住什么、忘掉什么”。Mamba 让部分参数依赖当前输入，相当于给状态更新增加数据驱动的门控。

## Selective Scan

选择机制破坏了固定卷积核的简单并行形式。Mamba 通过硬件友好的 selective scan 实现，在训练时并行处理序列，在自回归推理时递归更新固定大小的状态。对长度 $L$ 的序列，其核心计算和内存增长更接近 $O(L)$，而标准全注意力为 $O(L^2)$。

## 与 Transformer 的取舍

| 维度 | Mamba / SSM | Transformer |
| --- | --- | --- |
| 长序列复杂度 | 近似线性 | 标准注意力为平方 |
| 自回归状态 | 固定状态递推 | KV cache 随上下文增长 |
| token 间访问 | 压缩进隐状态 | 可显式访问历史位置 |
| 生态成熟度 | 较新，算子依赖明显 | 工具链和服务方案成熟 |

线性复杂度不等于在所有硬件和长度下都更快；真实收益取决于 kernel、batch、状态维度和内存带宽。实际模型也常采用 attention–SSM 混合架构。

## 阅读与实验问题

- 增大上下文时，困惑度和“needle”类检索能力如何变化？
- 固定状态是否丢失需要精确回看的细节？
- selective scan 的训练吞吐和单 token 延迟分别如何？
- 与同参数量 Transformer 比较时，tokenizer、数据和训练预算是否一致？

参考：[Mamba: Linear-Time Sequence Modeling with Selective State Spaces](https://arxiv.org/abs/2312.00752)。
