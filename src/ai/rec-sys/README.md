---
title: Recommender Systems
description: Industrial recommendation systems from retrieval and ranking to metrics, experimentation, and cold start.
icon: thumbs-up
---

# Recommender Systems

推荐系统这部分按照工业链路来组织，而不是按算法名堆页面。核心问题始终是同一个: 在有限曝光位里，把“对用户有价值、对平台有收益、对系统可控”的内容排出来。

## Pipeline View

<div class="ai-card-grid">
  <a class="ai-card" href="./retrieval/">
    <span class="ai-card__eyebrow">Candidate generation</span>
    <h3>Retrieval</h3>
    <p>从海量内容里快速捞出一小撮候选，重点在召回通道和覆盖率。</p>
  </a>
  <a class="ai-card" href="./pre-ranking/">
    <span class="ai-card__eyebrow">Fast filtering</span>
    <h3>Pre-Ranking</h3>
    <p>用更轻的模型做候选压缩，为精排节省算力预算。</p>
  </a>
  <a class="ai-card" href="./ranking/">
    <span class="ai-card__eyebrow">Utility estimation</span>
    <h3>Ranking</h3>
    <p>用更强的模型预测点击、时长、转化等目标，并完成多目标融合。</p>
  </a>
  <a class="ai-card" href="./re-ranking/">
    <span class="ai-card__eyebrow">Page construction</span>
    <h3>Re-Ranking</h3>
    <p>控制多样性、规则约束、广告插入与整页体验，是离业务最近的一层。</p>
  </a>
  <a class="ai-card" href="./metrics/">
    <span class="ai-card__eyebrow">Measurement</span>
    <h3>Metrics</h3>
    <p>把 DAU、留存、时长、CTR 等指标放在同一张北极星图里理解。</p>
  </a>
  <a class="ai-card" href="./cold-start/">
    <span class="ai-card__eyebrow">New users and items</span>
    <h3>Cold Start</h3>
    <p>当用户或内容没有历史行为时，系统如何安全起步并尽快学到偏好。</p>
  </a>
</div>

## Suggested Reading Order

1. 先看 `Retrieval -> Ranking -> Re-Ranking`，建立完整漏斗心智模型。
2. 再回来看 `Pre-Ranking`，理解为什么线上系统必须做分层计算。
3. 最后看 `Metrics` 和 `Cold Start`，把建模目标与业务目标接起来。

## What This Section Focuses On

- 工业推荐链路，而不是纯学术 benchmark。
- 多目标优化和整页效率，而不是单一 CTR。
- 离线训练、在线实验、AB 测试这一整套闭环。
- 与搜索、广告、生成式模型的交叉点。

## High-Value Links

- [Retrieval Overview](./retrieval/)
- [DSSM](./retrieval/dssm/)
- [Deep Retrieval](./retrieval/path/deep-retrieval.md)
- [Ranking](./ranking/)
- [MMOE](./ranking/mmoe.md)
- [Video Ranking](./ranking/video.md)
- [Re-Ranking](./re-ranking/)
- [Metrics](./metrics/)
- [Cold Start Traffic](./cold-start/traffic.md)

## Adjacent Topics

- `Search` 和推荐共享 `retrieval + ranking` 的系统骨架，但 query 明确、用户意图表达方式不同。
- `LLM for Rec` 更像是在已有推荐链路上加入生成式建模，而不是彻底替代漏斗结构。

## The Feedback Loop

<div class="knowledge-flow knowledge-flow--ai">
  <div class="knowledge-flow__item">
    <span class="knowledge-flow__index">01</span>
    <strong>Observe</strong>
    <p>从曝光、点击、停留、转化和负反馈中构造学习信号。</p>
  </div>
  <div class="knowledge-flow__item">
    <span class="knowledge-flow__index">02</span>
    <strong>Predict</strong>
    <p>估计相关性、价值和风险，并处理多目标之间的冲突。</p>
  </div>
  <div class="knowledge-flow__item">
    <span class="knowledge-flow__index">03</span>
    <strong>Compose</strong>
    <p>在规则、多样性、预算和页面体验约束下生成最终结果。</p>
  </div>
  <div class="knowledge-flow__item">
    <span class="knowledge-flow__index">04</span>
    <strong>Experiment</strong>
    <p>通过离线诊断和在线实验验证长期用户与平台价值。</p>
  </div>
</div>

## Evaluate Each Stage

| 阶段 | 主要目标 | 常见指标 |
| --- | --- | --- |
| Retrieval | 覆盖潜在相关内容 | recall、coverage、freshness |
| Pre-Ranking | 低成本保留高价值候选 | recall loss、latency、FLOPs |
| Ranking | 准确估计多目标价值 | AUC、NDCG、calibration |
| Re-Ranking | 构建整体页面体验 | diversity、constraint satisfaction |
| Online | 验证真实长期价值 | CTR、CVR、retention、revenue |
