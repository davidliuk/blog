---
title: System Design
description: A practical system design framework covering requirements, capacity, APIs, data, reliability, security, and evolution.
icon: sitemap
---

# System Design

系统设计是在明确约束下构造一个可工作的方案，并解释为什么这个方案比替代方案更适合当前阶段。答案的价值来自推理链，而不是关键词数量。

<div class="section-hero">
  <p class="section-eyebrow">Requirements → Capacity → Interface → Data → Reliability</p>
  <h2>Start with a working system, then evolve it against evidence.</h2>
  <p>先形成端到端主路径，再根据真实瓶颈增加缓存、分区、异步、复制和降级。</p>
</div>

## The Design Process

<div class="knowledge-flow">
  <div class="knowledge-flow__item">
    <span class="knowledge-flow__index">01</span>
    <strong>Scope</strong>
    <p>明确核心功能、用户、SLO、约束和不在范围内的需求。</p>
  </div>
  <div class="knowledge-flow__item">
    <span class="knowledge-flow__index">02</span>
    <strong>Estimate</strong>
    <p>估算 QPS、存储、读写比、带宽和峰值，找出主导约束。</p>
  </div>
  <div class="knowledge-flow__item">
    <span class="knowledge-flow__index">03</span>
    <strong>Design</strong>
    <p>定义 API、数据模型、组件、关键路径和一个可工作的基线方案。</p>
  </div>
  <div class="knowledge-flow__item">
    <span class="knowledge-flow__index">04</span>
    <strong>Stress</strong>
    <p>沿容量、热点、故障、安全和一致性逐一寻找方案边界。</p>
  </div>
  <div class="knowledge-flow__item">
    <span class="knowledge-flow__index">05</span>
    <strong>Evolve</strong>
    <p>针对最重要瓶颈加入扩展机制，并说明成本、监控和回滚。</p>
  </div>
</div>

## Knowledge Map

<div class="section-card-grid">
  <a class="section-card" href="./concepts/">
    <span class="section-card__eyebrow">Vocabulary</span>
    <h3>Core Concepts</h3>
    <p>API、技术栈、定时任务、版本和通用架构语言。</p>
  </a>
  <a class="section-card" href="./module/">
    <span class="section-card__eyebrow">Building blocks</span>
    <h3>Reusable Modules</h3>
    <p>限流、Feed、搜索、评论、监控、文件与短链等模块。</p>
  </a>
  <a class="section-card" href="./storage/">
    <span class="section-card__eyebrow">State</span>
    <h3>Storage</h3>
    <p>SQL、NoSQL、索引、分区、缓存和数据访问模式。</p>
  </a>
  <a class="section-card" href="./availability/">
    <span class="section-card__eyebrow">Failure</span>
    <h3>Availability</h3>
    <p>扩展、CAP、故障检测、隔离、降级与恢复。</p>
  </a>
  <a class="section-card" href="./distributed/">
    <span class="section-card__eyebrow">Coordination</span>
    <h3>Distributed Systems</h3>
    <p>事务、一致性、复制与部分失败下的协调问题。</p>
  </a>
  <a class="section-card" href="./security/">
    <span class="section-card__eyebrow">Trust</span>
    <h3>Security</h3>
    <p>认证、授权、加密和系统边界中的信任模型。</p>
  </a>
  <a class="section-card" href="./realtime/">
    <span class="section-card__eyebrow">Live delivery</span>
    <h3>Realtime</h3>
    <p>长连接、推送、轮询和事件驱动通信。</p>
  </a>
  <a class="section-card" href="./projects/">
    <span class="section-card__eyebrow">End to end</span>
    <h3>Case Studies</h3>
    <p>把需求、数据、服务和扩展策略放进完整系统案例。</p>
  </a>
</div>

## Baseline Before Scale

先画出最小端到端路径：

`Client → API → Service → Primary Storage`

只有在明确瓶颈后再加入：

- cache：减少重复读取，但引入失效与一致性问题；
- queue：隔离峰值和异步工作，但引入延迟、重复与顺序问题；
- replica：提升读取和可用性，但引入复制延迟；
- shard：扩展容量，但引入路由、再平衡和跨分片操作；
- CDN：靠近用户分发静态或可缓存内容，但引入刷新和边缘一致性。

## Tradeoff Checklist

| 维度 | 必须解释 |
| --- | --- |
| Reliability | 失败如何检测、重试、隔离、降级和恢复 |
| Scalability | 哪个资源先成为瓶颈，如何水平扩展 |
| Consistency | 哪些不变量必须强一致，哪些允许延迟 |
| Latency | 主路径上有哪些网络、排队和存储成本 |
| Security | 信任边界、身份、权限和敏感数据 |
| Operability | 监控、发布、容量管理和事故响应 |
| Cost | 复杂度和资源成本是否与当前规模匹配 |

## Interview Rule

Ask before design. Work solution first. Scale one bottleneck at a time. Every added component should solve a named problem and introduce an acknowledged cost.
