# Architectures

参考

- 李沐-动手学机器学习
- 李宏毅

## Enc-Dec Framework

编码器-解码器

- 编码器：
  - 处理输入，将输入编程成中间表达形式（特征）

- 解码器：
  - 生成输出，将中间表示解码成输出


![image-20250610093210662](https://raw.githubusercontent.com/davidliuk/images/master/image-20250610093210662.png)

### CNN

- 编码器：将输入编程成中间表达形式（特征）
- 解码器：将中间表示解码成输出

![image-20250610100427965](https://gcore.jsdelivr.net/gh/davidliuk/images@master/image-20250610100427965.png)

### RNN

- 编码器：将文本表示成向量
- 解码器：向量表示成输出

![image-20250610100607564](https://gcore.jsdelivr.net/gh/davidliuk/images@master/image-20250610100607564.png)

### LSTM

这是门控机制的**起源地**。它的目的是解决“梯度消失”问题，并赋予模型长期记忆能力。

- **典型结构:** **LSTM (Long Short-Term Memory)** 和 **GRU**。
- **应用原理:**
  - **遗忘门 (Forget Gate):** 决定上一时刻的记忆 $C_{t-1}$ 有多少需要保留。
  - **输入门 (Input Gate):** 决定当前的新输入 $X_t$ 有多少需要写入记忆。
  - **公式:** $C_t = f_t \cdot C_{t-1} + i_t \cdot \tilde{C}_t$
- **现状:** 虽然 Transformer 取代了 RNN，但 LSTM 的这种“门控记忆”思想最近在 **Mamba (SSM)** 架构中强势回归（见下文）。

### Code

```python
class Encoder(nn.Module):
  	def __init__(self, **kwargs):
    		super(Encoder, self).__init__(**kwargs)
        
    def forward(self, X, *args):
        return NotImplementedError
      
class Decoder(nn.Module):
  	def __init__(self, **kwargs):
    		super(Decoder, self).__init__(**kwargs)
        
    def init_state(self, enc_outputs, *args):
        return NotImplementedError
    
    def forward(self, X, *args):
        return NotImplementedError
      
class EncoderDecoder(nn.Module):
  	def __init__(self, encoder, decoder **kwargs):
    		super(Encoder, self).__init__(**kwargs)
        self.encoder = encoder
        self.decoder = decoder
        
    def forward(self, enc_X, dec_X, *args):
        enc_outputs = self.encoder(enc_X, *args)
        dec_state = self.decoder.init_state(enc_outputs, *args)
        return self.decoder(dec_X, dec_state)
```