# Transformer Model Families

Transformer 是计算骨架，模型家族由 attention mask、训练目标、输入输出形式和数据共同决定。

## Architecture Families

| Family | Information flow | Typical objective | Good fit |
| --- | --- | --- | --- |
| Encoder-only | token 可双向读取上下文 | masked / replaced token modeling | 表征、分类、检索、token labeling |
| Decoder-only | 只能读取当前位置之前的 token | next-token prediction | 生成、in-context learning、tool use |
| Encoder-decoder | encoder 双向理解，decoder 自回归生成 | conditional generation | 翻译、摘要、结构化转换 |

## Compare a Model

1. Tokenization 和输入 representation 是什么？
2. Attention mask 允许哪些 token 互相读取？
3. 训练 objective 与下游使用方式是否一致？
4. Position、context length 和 generation constraint 怎样处理？
5. 参数量之外，训练 token、data mixture 和 inference cost 是什么？

## Notes

- [BERT](./bert.md)：encoder-only 表征与 masked language modeling。

模型名称会快速增加；上面的比较轴比记忆版本列表更稳定。
