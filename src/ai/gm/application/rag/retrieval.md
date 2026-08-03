# RAG Retrieval and Reranking

Retrieval 的目标不是返回“看起来相似的文本”，而是在有限 candidate budget 中覆盖回答问题所需的证据。

## Query Pipeline

```text
user request
  → intent / entity / constraint
  → rewrite or decompose
  → lexical + dense + structured retrieval
  → fusion
  → rerank
  → diversify / filter
```

## Query Transformation

- Rewrite 消除代词、补全上下文，但可能改变原意。
- Expansion 增加 synonym、entity 和 identifier。
- Decomposition 把 multi-hop 问题拆成多个 evidence need。
- Hypothetical answer 可改善语义方向，也可能引入 hallucinated bias。

所有 transformation 都应保存原 query，并可独立评估。

## Fusion

Lexical 与 dense score 不一定可直接比较。Rank fusion 使用排序位置组合 candidate，score normalization 则需要稳定校准。Fusion 后仍要去重和保留来源多样性。

## Reranking

Cross-encoder 或 LLM reranker 联合读取 query 与 document，通常比独立 embedding 更精确，但成本随 candidate 数增长。

## Multi-Hop Retrieval

一次检索可能找不到连接证据。Iterative retrieval 根据已有 evidence 产生下一 query，但需要控制循环、错误传播和 cost。

## Metrics

- Recall@k：所需证据是否进入 candidate。
- MRR / NDCG：相关证据是否靠前。
- Context precision：送入生成模型的内容有多少真正相关。
- Coverage：回答所需的不同 evidence 是否都出现。
- Latency / cost：按 query 类型和 candidate 数分片。
