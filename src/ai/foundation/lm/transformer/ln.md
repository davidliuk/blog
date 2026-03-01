# Layer Norm

从稳定性到极致效率

Layer Norm 保证了深层网络的训练不会崩溃。

- **位置演进**：**Post-LN** (原始 Transformer，不稳定) $\rightarrow$ **Pre-LN** (主流，如 GPT-3，极稳)。
- **算法演进 (RMSNorm)**：Llama、Gemma 和 DeepSeek 的标配。它去除了“减均值”的操作，只进行缩放。
  - **公式**：$\bar{a}_i = \frac{a_i}{\sqrt{\frac{1}{n} \sum a_j^2 + \epsilon}} \cdot g_i$
  - **优点**：计算更简单，在 FP8/FP16 训练下比普通 LayerNorm 更稳定。

### 实现

```python
class RMSNorm(torch.nn.Module):

    def __init__(
        self,
        dim: int,
        eps: float = 1e-6,
        add_unit_offset: bool = True,
    ):
        super().__init__()
        self.eps = eps
        self.add_unit_offset = add_unit_offset
        self.weight = nn.Parameter(torch.zeros(dim))

    def _norm(self, x):
        return x * torch.rsqrt(x.pow(2).mean(-1, keepdim=True) + self.eps)

    def forward(self, x):
        x = self._norm(x.float()).type_as(x)
        if self.add_unit_offset:
            output = x * (1 + self.weight)
        else:
            output = x * self.weight
        return output
```

Gemma这里的实现多了一个参数add_unit_offset（为权重加1），这个是原论文里没有的，LLaMA的实现中也不包含这个设置。