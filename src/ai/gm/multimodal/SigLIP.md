# SigLIP

Sigmoid Loss for Language Image Pre-Training

SigLIP 最核心的贡献是：把 CLIP 的 softmax InfoNCE（多分类交叉熵）换成了逐对（pairwise）的 sigmoid 二元交叉熵损失，由此解决了 CLIP 在工业与大规模训练中长期存在的一系列瓶颈。

1. 解决 CLIP 对“大 batch-size 强依赖”的问题
2. 解决 CLIP |B|×|B| 全矩阵相似度导致的“内存爆炸”问题
3. 解决 CLIP 在分布式训练中的 all-gather 通信瓶颈问题
4. 解决 CLIP 的负样本过强影响（hard negatives）的优化不稳定问题

sigLIP 模型的作者旨在改进 CLIP 中损失矩阵计算所涉及的巨大计算开销。
在 CLIP 中, 使用的是基于 Softmax 的损失函数, 它需要比较每个嵌入向量的整行或整列 (即需要一个全局视
图) 。
与此不同, SigLIP 仅通过使用基于 Sigmoid的损失函数, 实现了只比较每一对单独的嵌入对。这种方法避免了
对当前批次数据的全局依赖, 从而降低了计算复杂度。



CLIP 使用 softmax InfoNCE
• 每个样本的损失都依赖于整个 batch 中的所有样本 (正样本＋所有负样本) 。
• 数学结构决定了：batch 越大 一 对比学习信号越强一 性能越好。
问题：没有大算力就训练不出好模型。
SigLIP 使用独立 sigmoid loss
• 每个 image-text 对只做 独立的二元分类 (match / not match) 。
• 没有 softmax 竞争关系, 不再依赖全局 batch 的 normalization。
带来的改变：
• 在相同算力下, 小 batch 就能学到好的跨模态对齐
• 大大降低了训练门槛, 使跨模态预训练更“平民化”

## SigLIP-2