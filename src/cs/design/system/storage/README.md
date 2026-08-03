---
title: Storage Systems
description: System-design storage decisions across access patterns, consistency, indexing, partitioning, replication, and lifecycle.
icon: hard-drive
---

# Storage Systems

存储设计从数据访问和 correctness requirement 出发。产品名称只是实现选择；真正需要解释的是数据模型、读写路径、一致性、容量、恢复和演进。

## Decision Sequence

1. 写出核心 entity、invariant 和 ownership。
2. 列出最重要的 read/write path、频率和 latency target。
3. 选择 primary data model，再设计 secondary index 和 cache。
4. 明确 transaction boundary 与 consistency expectation。
5. 估算容量、增长、partition key 和 replication factor。
6. 设计 migration、backup、restore、retention 和 deletion。

## SQL and NoSQL

- [SQL](./SQL.md)：关系、约束、事务和灵活查询。
- [NoSQL](./NoSQL.md)：针对特定访问模式、规模或分布式约束的模型。

| Workload signal | Likely direction | Verify |
| --- | --- | --- |
| 多实体 invariant、ad hoc query | Relational | transaction contention、index cost |
| 以 key 为中心的低延迟访问 | Key-value | value size、hot key、conditional write |
| 灵活嵌套对象 | Document | duplication、update boundary、index growth |
| 高吞吐顺序追加 | Log / wide-column | partition skew、retention、read pattern |
| 搜索与相关性 | Inverted index | freshness、reindex、source of truth |

## Scale Mechanisms

- **Index** 换取读性能，但增加写放大与存储。
- **Cache** 降低 latency 和主库负载，但引入 freshness 问题。
- **Replica** 提高读容量和可用性，但带来 replication lag。
- **Partition** 扩展数据与吞吐，但让跨分区操作更昂贵。
- **Materialized view** 预计算读取结果，但需要更新和重建机制。

更深入的数据库实现笔记见 [Data Systems](/se/database/)。
