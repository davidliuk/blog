# Framework

- Megatron
- DeepSpeed

## Megatron-LM：算力巅峰的并行专家

Megatron-LM 是由 **NVIDIA** 开发的深度学习训练框架，专门针对 Transformer 架构进行大规模并行优化。它的核心优势在于**张量并行（Tensor Parallelism）**。

- **核心机制：张量并行 (TP)**
  - 它将模型每一层的权重矩阵“切开”，分布在不同的 GPU 上。
  - 通过这种方式，原本单块显卡装不下的超大权重层，可以由多块显卡协同计算。
- **流水线并行 (PP)：** 将模型的不同层（Layers）分给不同的 GPU 顺序处理，像工厂流水线一样工作。
- **垂直整合：** 针对 NVIDIA GPU 硬件底层做了深度优化（如算子融合、通信重叠），在训练效率（MFU）上通常是业界的标杆。

------

## DeepSpeed：显存管理的魔术师

DeepSpeed 是由 **Microsoft** 开发的开源库，它最出名的地方在于极大地降低了训练门槛，让普通实验室甚至个人也能跑起庞大的模型。

### ZeRO (Zero Redundancy Optimizer) 技术

这是 DeepSpeed 的灵魂。ZeRO 解决了数据并行中冗余的内存开销，分为三个阶段：

1. **ZeRO-1：** 划分优化器状态（Optimizer States）。
2. **ZeRO-2：** 进一步划分梯度（Gradients）。
3. **ZeRO-3：** 彻底划分参数（Parameters），模型权重只在需要计算时才通过通信获取。

### 其他黑科技

- **Offload 技术：** 当 GPU 显存实在不够时，DeepSpeed 可以把显存中的数据暂时挪到 **CPU 内存** 甚至 **NVMe 硬盘** 上，实现“以计算时间换空间”。

