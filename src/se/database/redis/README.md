---
title: Redis
description: Redis notes covering data structures, commands, memory, persistence, availability, and production patterns.
icon: memory
---

# Redis

Redis 的优势来自内存访问与专门数据结构，但生产设计必须同时回答：数据为什么适合放入 Redis、丢失或过期是否可接受、与真实数据源如何保持一致，以及热点和内存上限怎样处理。

## Knowledge Map

| Area | Focus |
| --- | --- |
| [Data Structures](./principal/data-structure/) | String、Hash、List、Set、Sorted Set 的内部结构和复杂度 |
| [Commands](./commands/) | 命令语义、批量操作、阻塞风险和原子性 |
| [Memory Model](./principal/memory-model/) | 过期删除、淘汰策略、对象与内存预算 |
| [Thread Model](./principal/thread-%20model/) | 事件循环、I/O 和命令执行路径 |
| [Persistence](./persistency/) | RDB、AOF、恢复时间与数据损失窗口 |
| [Availability](./availability/) | 主从、Sentinel、Cluster 和故障切换 |
| [Clients](./clients/) | 连接池、超时、重试和客户端行为 |
| [Production Patterns](./practice/) | 缓存、分布式锁、计数、Feed 与热点治理 |

## Choose the Data Structure

| Need | Candidate | Watch for |
| --- | --- | --- |
| 简单值、计数、位操作 | String / Bitmap | 大对象、过期与覆盖语义 |
| 对象部分字段读写 | Hash | 小对象编码与字段数量 |
| 队列或有限序列 | List / Stream | 消费确认、积压和保留 |
| 去重、交并差 | Set | 基数和全量集合运算 |
| 排行、时间线、范围查询 | Sorted Set | score 设计和高基数内存 |

## Cache Design Checklist

1. Cache miss、penetration、breakdown 和 avalanche 分别怎样处理？
2. 更新数据库后，缓存删除或刷新在哪个时机发生？
3. TTL 是否加入随机性，热点 key 是否会同时失效？
4. big key、hot key 和慢命令怎样被观测？
5. Redis 不可用时，系统是降级、限流还是直接失败？
