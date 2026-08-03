---
title: Kafka
description: Kafka fundamentals covering partitions, replication, consumer groups, delivery semantics, and production design.
icon: envelopes-bulk
---

# Kafka

Kafka 可以理解为一个**分区、复制、可保留的追加日志**。生产者把记录写入 partition，Broker 持久化并复制，消费者按 offset 独立推进读取进度。

## Core Model

| Concept | Responsibility | Design consequence |
| --- | --- | --- |
| Topic | 事件流的逻辑边界 | 命名、Schema 和保留策略需要稳定 |
| Partition | 顺序、并行和存储的基本单位 | 只保证分区内顺序；key 决定数据分布 |
| Replica | 分区的冗余副本 | 增加可用性，也增加写入与网络成本 |
| Producer | 选择分区并批量发送 | ack、retry 和 idempotence 影响语义 |
| Consumer group | 在组内分配 partition | 并行度受 partition 数量限制 |
| Offset | 消费者在日志中的位置 | 提交时机决定重复或丢失窗口 |

## Delivery Semantics

- **At-most-once**：先提交进度再处理，失败可能丢失。
- **At-least-once**：处理成功后提交，失败重试可能重复。
- **Effectively-once**：通过幂等写入、唯一键、事务或状态机，让重复不改变最终结果。

“Exactly once” 必须说明边界：Kafka 内部事务不能自动覆盖任意外部数据库、HTTP 调用或其他副作用。

## Producer Path

1. 定义 event contract、key 和分区策略。
2. 批量、压缩和 linger 在吞吐与延迟之间取舍。
3. 配置确认、重试和超时，并确保重试不会破坏顺序或幂等。
4. 监控失败率、请求延迟、batch 大小和分区倾斜。

## Consumer Path

1. 拉取记录并建立有界的本地处理并发。
2. 在副作用完成后推进 offset。
3. 为重试设置退避、上限与死信出口。
4. Rebalance 时停止接收、完成或放弃在途任务，再安全交接。
5. 监控 lag 的绝对值、增长速度和最老消息年龄。

## Reliability

- [Replication & Failover](./availability/)
- [Common Problems](./problem.md)

## Design Checklist

- 需要全局顺序还是 key 内顺序？
- 峰值吞吐与单条消息大小是多少？
- 消费者停机多久后仍需从历史恢复？
- Schema 怎样兼容演进？
- 毒消息、重复消息、积压和下游不可用怎样处理？
