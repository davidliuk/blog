# Positional Encoding

|              | 优势                 | 劣势                                                 |
| ------------ | -------------------- | ---------------------------------------------------- |
| 绝对位置编码 | 计算速度较快         | 文字间相对位置信息不明显<br />推理窗口受训练长度限制 |
| 相对位置编码 | 可学习文字间相对信息 | 计算量增大<br />无法使用KV Cache                     |

## Sinusoidal
正余弦位置编码 Sine Cosine Embedding Positions

最早的就是：`Input=Embedding+Position`

## RoPE

$attention(q,k)=q\cdot k=qk^T$ 没有位置信息

$qR(m)\cdot kR(n)=qR(m)R(n)^Tk^T=qR(m-n)k^T$ 带有相对位置信息

维度两两一组进行旋转

- 不再在词向量（字典查找表）中加入位置信息
- 通过旋转矩阵对向量(Q、K)进行角度旋转
- 长度不变、角度相同=dot product不变！

## ALiBi

Attention with Linear Bias

线性偏置项位置编码

上下文推理窗口长度

外推