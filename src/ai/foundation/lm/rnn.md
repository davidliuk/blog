# RNN

## RNN

$h_t=\phi(W_{hh}h_{t-1}+W_{hx}x_{t-1}+h_h)$

$o_t=\phi(W_{ho}h_t+b_o)$

- 迭代中计算这T个时间步上的梯度, 在反向传播过程中产生长度为O (T) 的矩阵乘法链, 导致数值不稳定

- 梯度裁剪能有效预防梯度爆炸

  - 如果梯度长度超过6, 那么拖影回长度0
    $$
    \boldsymbol g\leftarrow\min(1,\frac{\theta}{\|\boldsymbol{g}\|})\boldsymbol g
    $$
    

- 循环神经网络的输出取决于当下输入和前一吋间的隐变量
- 应用到语言模型中时, 循环神经网络根据当前词预测下一次时刻词
- 通常使用困惑度来衡量语言模型的好坏



```java
import torch
import torch.nn as nn

class MinimalRNN(nn.Module):
    def __init__(self, input_size, hidden_size, output_size):
        super(MinimalRNN, self).__init__()
        self.hidden_size = hidden_size
        
        # 将输入与上一个隐藏状态拼接后映射到新的隐藏状态
        self.i2h = nn.Linear(input_size + hidden_size, hidden_size)
        # 将隐藏状态映射到输出
        self.h2o = nn.Linear(hidden_size, output_size)
        self.tanh = nn.Tanh()

    def forward(self, input_seq, hidden=None):
        # input_seq shape: (seq_len, batch_size, input_size)
        seq_len, batch_size, _ = input_seq.size()
        
        if hidden is None:
            hidden = torch.zeros(batch_size, self.hidden_size).to(input_seq.device)

        # 手动遍历时间步（RNN 的核心循环）
        for t in range(seq_len):
            combined = torch.cat((input_seq[t], hidden), dim=1)
            hidden = self.tanh(self.i2h(combined))
            
        output = self.h2o(hidden)
        return output, hidden

# 快速测试
model = MinimalRNN(input_size=10, hidden_size=20, output_size=5)
x = torch.randn(7, 3, 10) # 序列长度为 7, batch 为 3
out, h = model(x)
print(f"Output shape: {out.shape}") # (3, 5)
```

## GRU

> 门控循环单元

Gated

- 不是每个观察值都是同等重要
- 积只记住相关的观察需要：
  - 能关注的机制 (更新门) 
  - 能遗忘的机制 (重置门) 

![image-20251220233301183](https://raw.githubusercontent.com/davidliuk/images/master/blogimage-20251220233301183.png)
$$
R_t=\sigma(X_tW_{xr})
$$
