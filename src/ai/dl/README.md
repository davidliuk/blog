# Deep Learning

参考

- 李沐-动手学机器学习
- 李宏毅

Enc-Dec

编码器-解码器

- 编码器处理输入：将输入编程成中间表达形式（特征）
- 解码器生成输出：将中间表示解码成输出

![image-20250610093210662](https://raw.githubusercontent.com/davidliuk/images/master/image-20250610093210662.png)

Eg

CNN:

- 编码器：将输入编程成中间表达形式（特征）
- 解码器：将中间表示解码成输出

![image-20250610100427965](https://gcore.jsdelivr.net/gh/davidliuk/images@master/image-20250610100427965.png)

RNN

- 编码器：将文本表示成向量
- 解码器：向量表示成输出

![image-20250610100607564](https://gcore.jsdelivr.net/gh/davidliuk/images@master/image-20250610100607564.png)





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

