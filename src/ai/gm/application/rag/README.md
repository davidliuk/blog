---
title: Retrieval-Augmented Generation
description: RAG systems from ingestion and indexing to retrieval, reranking, context construction, generation, citation, and evaluation.
icon: book-open
---

# Retrieval-Augmented Generation

RAG 把 parametric model 与可更新、可引用的外部知识连接起来。它不是“向量库 + prompt”，而是一条需要独立评估每个阶段的数据与检索系统。

## Pipeline

<div class="knowledge-flow" aria-label="RAG pipeline">
  <div class="knowledge-flow__item">
    <span class="knowledge-flow__index">01</span>
    <strong>Index</strong>
    <p>解析、切分、清洗、去重、metadata、embedding 和更新。</p>
  </div>
  <div class="knowledge-flow__item">
    <span class="knowledge-flow__index">02</span>
    <strong>Retrieve</strong>
    <p>Query understanding、lexical / dense / hybrid recall 和 filter。</p>
  </div>
  <div class="knowledge-flow__item">
    <span class="knowledge-flow__index">03</span>
    <strong>Rerank</strong>
    <p>用更强相关性模型压缩 candidate，并处理 diversity 与 authority。</p>
  </div>
  <div class="knowledge-flow__item">
    <span class="knowledge-flow__index">04</span>
    <strong>Generate</strong>
    <p>组织证据、处理冲突、生成答案并建立 citation attribution。</p>
  </div>
</div>

## Knowledge Map

- [Indexing & Chunking](./indexing.md)
- [Retrieval & Reranking](./retrieval.md)
- [RAG Evaluation](./evaluation.md)

## Lexical and Dense Retrieval

| Method | Strength | Weakness |
| --- | --- | --- |
| BM25 / lexical | exact term、ID、rare word、可解释 | 同义表达与语义泛化有限 |
| Dense embedding | semantic similarity、paraphrase | exact constraint、更新和 domain shift |
| Hybrid | 同时覆盖 exact 与 semantic | fusion、latency 和调参更复杂 |
| Reranker | 更细粒度 query–document relevance | candidate 数与 online cost |

## Context Construction

- 保留 document title、section、timestamp、authority 和 access scope。
- 去重近似内容，避免相同证据占满 context。
- 多文档冲突时显式呈现来源与时间，不自动拼成单一事实。
- 按 answer need 排序，不只按 embedding score。
- Citation 绑定具体 claim 与 passage，而不是在答案末尾列文档。

## Failure Taxonomy

```text
source missing
  → indexing failure
  → retrieval miss
  → reranking drop
  → context loss
  → generation misuse
  → citation mismatch
```

只有先定位 failure stage，才能决定改 chunk、embedding、query rewrite、reranker 还是 prompt。

## Security

Retrieved content 是不可信数据，不拥有指令 authority。应用需要 document ACL、tenant isolation、prompt-injection defense、PII control 和 citation audit。

## Reference

- [Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks](https://arxiv.org/abs/2005.11401)
