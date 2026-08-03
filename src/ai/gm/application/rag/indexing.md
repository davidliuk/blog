# RAG Indexing and Chunking

Indexing 把原始知识源转换为可检索 unit。Chunk boundary 决定 retrieval 的 recall、context completeness、citation granularity 和 update cost。

## Ingestion Contract

| Stage | Preserve |
| --- | --- |
| Parse | heading、table、list、code、page、link |
| Normalize | encoding、whitespace、boilerplate、language |
| Segment | semantic boundary、overlap、parent relation |
| Enrich | title、author、time、ACL、entity、source |
| Embed | model version、dimension、normalization |
| Publish | document / chunk ID、index version、tombstone |

## Chunk Strategies

- Fixed token window：简单稳定，但可能切断语义。
- Structure-aware：按 heading、paragraph、table 或 code block。
- Semantic segmentation：按 topic change 切分，成本更高。
- Parent–child：检索小 chunk，返回较完整 parent context。
- Multi-representation：同一内容保存原文、summary、question 或 entity view。

## Choose Chunk Size

小 chunk 提高定位精度，却可能失去上下文；大 chunk 保留完整语义，但候选更少、噪声和 token cost 更高。应使用真实 query 通过 retrieval / answer evaluation 选择。

## Updates

稳定 document ID 和 chunk ID 支持增量更新。删除需要传播到 lexical index、vector index、cache 和 generated summary；只新增新版本会让旧知识继续被检索。

## Quality Checks

- parse completeness；
- duplicated / empty chunk；
- broken table 或 code；
- metadata / ACL propagation；
- embedding drift；
- stale / deleted document；
- index coverage 按来源和语言分片。
