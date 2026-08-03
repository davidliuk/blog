# Embedding

Embedding 把离散 token ID 映射为连续向量，是词表与 Transformer 隐空间之间的接口。若词表大小为 $V$、隐藏维度为 $d$，输入矩阵为 $E\in\mathbb R^{V\times d}$：

$$
x_t=E[\operatorname{token}_t]
$$

## 输入、位置与类型

进入第一层的表示通常由 token embedding 与位置信息组成。绝对位置可直接相加；RoPE 等相对位置方法则作用于 attention 的 query/key，而不是修改 token embedding。部分 encoder 模型还加入 segment/type embedding。

## Output Head 与 Weight Tying

语言模型把隐藏状态投影回词表：

$$
p(y_t\mid y_{<t})=\operatorname{softmax}(W_{\mathrm{out}}h_t)
$$

Weight tying 令 $W_{\mathrm{out}}=E^\top$，减少约 $Vd$ 参数，并让输入、输出共享词汇几何。是否共享取决于架构、词表和训练稳定性，并非所有模型都采用。

## 因子分解

当词表很大时，可把 $E$ 分解为较小词向量与投影矩阵：

$$
E\approx E_1E_2,\quad
E_1\in\mathbb R^{V\times r},\
E_2\in\mathbb R^{r\times d}
$$

$r\ll d$ 时能降低参数量。它与 MLA 不同：MLA 压缩的是 attention 中的 key/value 表示和缓存，不是 token embedding 表本身。

## 多模态接口

视觉或音频编码器先产生连续特征，再由 projector 映射到 LLM 隐藏维度。维度匹配只是第一步，还需通过对齐或 instruction tuning 让这些向量获得语言模型可利用的语义。

## 诊断

- tokenizer 是否造成领域词过度切分；
- embedding norm 是否出现异常 token 或训练漂移；
- 新增 token 是否与 output head、checkpoint 一起扩容；
- padding、special token 和 loss mask 是否一致；
- 混合精度与量化是否影响高频/低频 token。

Embedding 层很简单，但它把 tokenizer、词表版本、模型权重和多模态接口绑定在一起，是 checkpoint 兼容性的重要边界。
