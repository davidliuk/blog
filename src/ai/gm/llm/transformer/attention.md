# Attention

$$
Attention(Q,K,V)=softmax(\frac{QK^T}{\sqrt d_k})V
$$

Softmax 就是归一化

d_k是向量维度：为了解决梯度消失问题

- Transformer 512
- GPT1 768
- GPT3 dk=12288
- LLaMA 3 16k

<iframe src="//player.bilibili.com/player.html?isOutside=true&aid=984730595&bvid=BV1dt4y1J7ov&cid=809491199&p=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>

重点：真正有价值的是V，最后的输出是V中每个元素的加权求和

自注意力机制

目标：信息聚合

自注意力机制引入可训练参数，给QKV矩阵分布做不同的线性变换

目的：帮你更好的去获取重点
$$
Attention(Q,K,V)=softmax(\frac{W_QX(W_KX)^T}{\sqrt d_k})W_VX
$$
每个transformer块里的Attention的三个线性变换里有1.5亿\*3个参数

每个block等于一次信息聚合

GPT3是96个block

最后一层的最后一个token是最后的结果

LLaMA3是126层

- 2017年的Transformer:6层，512
- 2018年的GPT:12层，765
- 2019年的GPT-2:48层，1600
- 2020年的GPT-3:96层，12288
- 2023年的GPT-4:120层
- 2024年的Lama3:126层，16384

模型变大：层数变多，向量变长

层多的时候，向量长度也需要相应变长

## MHA

有没有可能引入多组Wq、Wk、Wv，同时进行多组Self Attention的聚合计算，最后再整合

特征提取

12288->128，需要分96个头（GPT3这么分的）

每层最后结果是96个头的结果

1. 首位相接拼接起来，
2. 输入进入神经网络W_o进行融合

想尽一切办法理解相关信息

## Masked Attention

计算注意力的时候只计算自己和自己之前的，不能看之后的

Decoder-only架构：

- Masked Attention
- FFN

Embedding 6亿参数

GPT3的1750亿参数

---

MQA (Multi-Query Attention): 所有头共享一个KV （和单头注意力差不多了）

GQA (Grouped-Query Attention): 几个头一组共享一个KV

![image-20250629002714853](https://gcore.jsdelivr.net/gh/davidliuk/images@master/image-20250629002714853.png)

![image-20250629122529035](https://gcore.jsdelivr.net/gh/davidliuk/images@master/image-20250629122529035.png)

## MLA

$$
attention=
softmax(\frac{QK^T}{\sqrt d})V\\
softmax(\frac{XW^Q(C^{KV}W^{UK})^T}{\sqrt d})V\\
softmax(\frac{XW^QW^{UK}{C^{KV}}^T}{\sqrt d})V\\
softmax(\frac{XW^{QUK}{C^{KV}}^T}{\sqrt d})V
$$

合并矩阵，可以提前融合矩阵，规避解压隐特征带来的额外计算

WVK和W融合
WUv和W°融合

$W_{DQ}$: 压缩Q

$W_{DKV}$: 压缩KV

$W^{UQ}$

$W^{UK}$

$W^{UV}$

## MTP

只在训练时使用，用来加速训练，因为推理的时候用vllm可以自动分batch处理多用户同时访问，不必mtp