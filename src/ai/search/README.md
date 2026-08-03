---
title: Search Systems
description: Search architecture from query understanding and indexing to retrieval, ranking, and evaluation.
icon: magnifying-glass
---

# Search Systems

搜索是一个从显式 query 出发的决策系统。它与推荐共享 retrieval + ranking 的骨架，但需要更强地处理词项匹配、意图理解、相关性和结果可解释性。

<div class="ai-hero">
  <p class="ai-eyebrow">Intent → Candidates → Relevance → Results</p>
  <h2>Turn a short query into a ranked set of useful results.</h2>
  <p>完整链路包括 query understanding、indexing、retrieval、ranking、result composition 和 evaluation。</p>
</div>

## System Map

<div class="ai-card-grid">
  <div class="ai-card">
    <span class="ai-card__eyebrow">Intent</span>
    <h3>Query Understanding</h3>
    <p>分词、纠错、改写、suggestion 和实体理解，减少用户表达与索引之间的落差。</p>
  </div>
  <div class="ai-card">
    <span class="ai-card__eyebrow">Storage</span>
    <h3>Indexing</h3>
    <p>倒排索引、向量索引和增量更新决定候选能否被快速找到。</p>
  </div>
  <a class="ai-card" href="../rec-sys/retrieval/">
    <span class="ai-card__eyebrow">Candidates</span>
    <h3>Retrieval</h3>
    <p>词项、语义和规则路径共同保证相关性、覆盖与时效性。</p>
  </a>
  <a class="ai-card" href="../rec-sys/ranking/">
    <span class="ai-card__eyebrow">Ordering</span>
    <h3>Ranking</h3>
    <p>融合文本相关性、质量、时效、个性化和业务约束。</p>
  </a>
</div>

## Search vs Recommendation

| 维度 | Search | Recommendation |
| --- | --- | --- |
| 意图来源 | 显式 query | 历史行为与上下文 |
| 候选基础 | 索引与 query match | 多路召回与用户表示 |
| 主要目标 | relevance + satisfaction | long-term utility + engagement |
| 失败感知 | 用户通常立即发现不相关 | 反馈可能延迟且更隐式 |
| 探索需求 | 相对较低，但仍需处理长尾 | 常需要探索新内容和新兴趣 |

## Reading Path

1. 先理解 [Recommender Retrieval](../rec-sys/retrieval/) 与 [Ranking](../rec-sys/ranking/) 的通用框架。
2. 对照 [Computer Networks](../../cs/core/network/) 和 [System Design](../../cs/design/system/) 理解索引服务的延迟与可用性约束。
3. 用 query reformulation、hybrid retrieval 和 learning-to-rank 补上搜索特有部分。
