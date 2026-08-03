# Long Context

Long context 同时是 architecture、training data、position method、inference memory 和 evaluation 问题。支持更长输入长度不等于模型能可靠使用其中所有信息。

## Bottlenecks

| Layer | Challenge |
| --- | --- |
| Attention | 标准 attention 的时间与 memory 随 sequence length 快速增长 |
| Position | 训练长度外的位置泛化与相对关系 |
| Data | 缺少真正需要跨长距离整合的高质量样本 |
| Optimization | 长 sequence 降低 batch size，增加 instability 与成本 |
| Inference | KV cache 随 layer、token、head dimension 增长 |
| Evaluation | needle retrieval 不代表多证据整合和长程 reasoning |

## Strategies

- Position interpolation / scaling 扩展已有 positional encoding。
- Window、block、sparse 或 linear attention 限制 pairwise interaction。
- KV compression、eviction 或 retrieval 控制 inference memory。
- Chunk / recurrent memory 在窗口之间传播状态。
- RAG 把外部 corpus 先检索成较短、相关的 context。

## Context Engineering

1. 把最重要 instruction、evidence 和 output contract 放在清晰位置。
2. 删除重复、低可信或与当前决策无关的内容。
3. 保留来源与结构，不把不同文档拼成无边界文本。
4. 多证据任务显式要求比较、冲突处理和引用。
5. 超长输入前先判断 retrieval、summary 或 state 是否更合适。

## Evaluate Effective Context

- information position 与 document length；
- single retrieval 与 multi-hop synthesis；
- conflicting evidence；
- distractor robustness；
- citation / attribution；
- latency、memory 和 cost。

Context window 是 capacity 上限；effective context 取决于模型、任务和组织方式。
