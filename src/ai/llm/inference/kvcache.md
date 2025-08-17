# KV Cache

With KV Cache:

内存消耗(kv cache in memory):

2 \* batch \* context_length \* n_layers \* n_heads \* d_head \* Pa

Pa是精度

在一个向前传播中：

-0.5 MB/token of GPU memory
~14 GFLOPs/token of GPU compute

```python
·初始化每层的健和值缓存
num_1 ayers。96·假设Transformer有96层
key-cache【I】for-in range(num_1 ayers)】
value_cache [[for _in range(num_layers)]
for token in input_sequence:
for layer in range(nun_layers):
#计算当前标记在该层的键和伯
new_key conpute_key(layer.token)
new_value compute_value(layer.token)
#将新健和值添加到该摆的缓存中
key_cache[layer].append(new_key)
value_cache[layer].append(new_value)
意推理过程中的斯标记生成
for new_token in generate_sequence:
for
layer in range(nun_layers):
#计算当前时间步在该摆的Quey
query compute_query(layer.new_token)
#使用该层缓存的Key和Value以及当前的Query进行白注悬力计算
output attention(queryquery.keys key_cache[layer].values value_cache[layer])
#使用输出生成下一个绿记
next_token generate_next_token(output)
generate_sequence.append(next_token)
```

