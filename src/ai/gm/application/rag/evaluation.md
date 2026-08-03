# RAG Evaluation

RAG evaluation 必须把 retrieval 与 generation 分开。最终答案错误可能来自 corpus、index、retriever、reranker、context builder 或 generator。

## Evaluation Layers

| Layer | Metric / evidence |
| --- | --- |
| Corpus | source coverage、freshness、authority、ACL |
| Index | parse quality、chunk completeness、update latency |
| Retrieval | Recall@k、MRR/NDCG、evidence coverage |
| Context | precision、deduplication、conflict、token budget |
| Answer | correctness、groundedness、completeness、citation |
| System | latency、cost、availability、tenant isolation |

## Build Test Cases

每个 case 包含 query、expected evidence、answer requirement、forbidden claim 和 metadata filter。只保存 reference answer 无法诊断 retrieval failure。

## Groundedness

Grounded answer 的每个可验证 claim 都能被提供 evidence 支持。它不等于事实绝对正确：source 本身可能过旧、错误或互相冲突。

## Citation Evaluation

- Citation entailment：source 是否支持对应 claim。
- Citation completeness：关键 claim 是否都有来源。
- Citation quality：来源是否权威、最新且允许访问。
- Citation placement：引用是否绑定具体 claim，而非模糊文档列表。

## Counterfactual Tests

- 删除关键文档，系统是否表达缺少证据？
- 加入矛盾文档，是否识别冲突与时间？
- 注入无关高相似内容，是否保持选择性？
- 文档包含恶意 instruction 时，是否仍当作数据？
- ACL 改变后，旧 cache / index 是否停止返回内容？
