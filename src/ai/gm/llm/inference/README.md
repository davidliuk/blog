# Inference

## 推理过程

- Prefill

  - 根据输入Tokens生成第一个输出Token（A），通过一次Forward就可L以完成

  - 在Forward中，输入Tokens间可以并行执行，因此执行效率很高

- Decoding:
  - 从生成第一个Token后，采用自回归一次生成一个Token，直到生成StopToken结束
  - 设输出共N x Token，Decoding阶段需要执行N-1次Forward，只能串行执行，效率很低
  - 在生成过程中，需要关注Token越来越多，计算量也会适当增大

KV Cache

- 把每个 token 在过Transformer 时乘以Wk，Wv,这俩参数矩阵的结果缓存下来，训l练的时候不需要保存
- 推理解码生成时采用自回归auto-regressive方式，即每次生成一个token，都要依赖之前token的结果
- 如果每生成一个 token 时候乘以 Wk，W, 这俩参数矩阵要对所有 token 都算一遍，代价非常大，所以缓存起来就叫KVCache

KV Cache:Decode

从上述过程中，可以发现KV cache推理时特点：

1. 随着prompt数量变多和序列变长，KV cache也变大，对GPU显存造成压力
2. 由于输出的序列长度无法预先知道，所以很难提前为KV cache量身定制存储空间

## 瓶颈分析

LLM推理Prefill&Decoding阶段Roofline Model近似如下，其中：

1. 三角Prefill：设Batch size=l,Sequence Length越大计算强度越大，通常属于Compute Bound
2. 原型Decoding：Batch size越大，计算强度越大，理论性能峰值越大，通常属于Memory Bound