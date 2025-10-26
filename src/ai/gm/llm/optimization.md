# Optimization

Auto-Regression: KV-Cache

| 优化项                                | 解释                                                         | 带来的好处                                  |
| ------------------------------------- | ------------------------------------------------------------ | ------------------------------------------- |
| **Flash Attention**                   | 利用 CUDA kernel 优化 Softmax-attention 的矩阵乘法，减少内存读写 | 更快、更省内存，适用于长序列                |
| **Rotary Positional Encoding (RoPE)** | 替代传统位置编码，兼容 KV 缓存并支持无限延展                 | 提升泛化能力                                |
| **Quantization (INT8, FP8, etc.)**    | 用低精度浮点数代替 FP16/FP32                                 | 节省显存，提升吞吐量                        |
| **LoRA / QLoRA**                      | 微调时只训练小矩阵，冻结大部分参数                           | 更轻量、高效微调                            |
| **Weight Tying / Sharing**            | Embedding 和输出层共享参数                                   | 降低模型大小                                |
| **Prefix Caching / Prefill**          | 将一段提示（prompt）预编码并缓存                             | Chat 场景中节省大量计算（典型如长系统提示） |

## 推理

- 量化
- 缓存
  - KV Cache

- 剪枝
  - Token Pruning
  - Model Pruning
    - To prune, or not to prune, Google

### Token Pruning

好处，无需训练

dart=https://github.com/ZichenWen1/DART