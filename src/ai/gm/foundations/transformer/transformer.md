# Transformer

- Multi-Head Attention
- Self-Attention
- LayerNorm+Residual
- Position Encoding
- FFN (Feed-Forward Network)

| 组件                 | 作用                                        |
| -------------------- | ------------------------------------------- |
| Multi-Head Attention | 并行多个注意力头，捕捉不同语义关系          |
| Self-Attention       | 句子内部 token 之间互相关注                 |
| LayerNorm + Residual | 加快收敛、稳定训练                          |
| Position Encoding    | 提供 token 的位置信息（因为注意力是无序的） |
| Feed-Forward Network | 每个位置独立的非线性变换                    |

### 🔧 Decoder-only 的特点：

| 特性                           | 原因                               |
| ------------------------------ | ---------------------------------- |
| **仅用 Masked Self-Attention** | 防止看到未来信息（只看 $x_{）      |
| **无 Encoder 输入**            | 输入就是训练数据本身，无需外部序列 |
| **可逐词生成**                 | 非常适合 open-ended generation     |
