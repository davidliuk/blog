---
title: Data Systems
description: A database knowledge map organized by workload, data model, consistency, access path, and operations.
icon: database
---

# Data Systems

数据库选型从 workload 开始，而不是从产品名开始。先明确数据怎样被写入和读取、哪些约束必须成立、如何恢复，再决定关系模型、文档、键值、宽列或其他存储形式。

## The Five Questions

<div class="knowledge-flow" aria-label="Database design questions">
  <div class="knowledge-flow__item">
    <span class="knowledge-flow__index">01</span>
    <strong>Model</strong>
    <p>实体、关系和访问模式是什么？数据模型是否能直接表达它们？</p>
  </div>
  <div class="knowledge-flow__item">
    <span class="knowledge-flow__index">02</span>
    <strong>Access</strong>
    <p>查询怎样定位数据？索引、分区和缓存分别减少哪一部分成本？</p>
  </div>
  <div class="knowledge-flow__item">
    <span class="knowledge-flow__index">03</span>
    <strong>Correctness</strong>
    <p>事务边界在哪里？并发冲突、重复写入和部分失败如何处理？</p>
  </div>
  <div class="knowledge-flow__item">
    <span class="knowledge-flow__index">04</span>
    <strong>Scale</strong>
    <p>单机瓶颈是什么？复制、分片和批处理会引入哪些新约束？</p>
  </div>
</div>

## Knowledge Map

<div class="section-card-grid">
  <a class="section-card" href="./sql/">
    <span class="section-card__eyebrow">Query language</span>
    <h3>SQL</h3>
    <p>关系建模、查询表达、Schema 规范和 SQL 优化。</p>
  </a>
  <a class="section-card" href="./mysql/">
    <span class="section-card__eyebrow">Transactional store</span>
    <h3>MySQL</h3>
    <p>InnoDB、事务、索引、锁、日志、内存和高可用。</p>
  </a>
  <a class="section-card" href="./redis/">
    <span class="section-card__eyebrow">In-memory data system</span>
    <h3>Redis</h3>
    <p>数据结构、持久化、线程和内存模型、缓存模式与分布式协调。</p>
  </a>
  <a class="section-card" href="./mongodb/">
    <span class="section-card__eyebrow">Document store</span>
    <h3>MongoDB</h3>
    <p>文档模型、聚合、存储引擎、复制和分片。</p>
  </a>
  <a class="section-card" href="./hbase/">
    <span class="section-card__eyebrow">Wide-column store</span>
    <h3>HBase</h3>
    <p>面向大规模稀疏数据的行键设计、范围访问与分布式存储。</p>
  </a>
</div>

## OLTP and Analytics

| Workload | Optimizes for | Typical design |
| --- | --- | --- |
| OLTP | 高频小事务、低延迟点查、并发更新 | 规范化模型、精确索引、事务与副本 |
| OLAP | 大范围扫描、聚合、历史分析 | 列式布局、分区、并行执行、预计算 |
| Cache | 极低延迟与热点吸收 | 有限数据集、过期策略、回源与一致性 |
| Event / log | 顺序追加、回放和流式处理 | 分区日志、消费进度、保留策略 |

## Review a Database Design

1. 写出前三个读写路径及其频率，而不是只画实体关系图。
2. 对每个 invariant 指定由数据库、应用还是异步流程维护。
3. 估算索引、缓存和复制的写放大与存储成本。
4. 设计备份、恢复、迁移和回滚，不把高可用等同于数据安全。
5. 用真实数据分布验证热点、倾斜和最坏查询。
