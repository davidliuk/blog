---
title: Distributed Coordination
description: Distributed-system coordination through time, failure, consistency, idempotency, and transaction patterns.
icon: network-wired
---

# Distributed Coordination

分布式系统的困难来自三个事实：节点只能看到局部状态，消息存在延迟或丢失，进程会在任意时刻失败。因此“调用成功”与“操作是否发生”经常不是同一个问题。

## Fundamental Questions

| Dimension | Ask |
| --- | --- |
| Time | 是否依赖精确时钟或全局先后关系？ |
| Failure | 超时代表失败、仍在执行，还是响应丢失？ |
| Identity | 重试怎样识别为同一个 logical operation？ |
| Consistency | 哪些不变量必须同步维护，哪些允许延迟收敛？ |
| Recovery | 节点重启后从日志、快照还是外部状态恢复？ |

## Transaction Patterns

| Pattern | Strength | Cost |
| --- | --- | --- |
| Local transaction | 单一数据库内强原子性 | 边界有限 |
| Outbox / inbox | 连接数据库状态与可靠事件 | 异步、重复与清理 |
| Saga | 长流程的局部事务与补偿 | 中间状态可见、补偿不等于回滚 |
| Two-phase commit | 多参与方协调提交 | blocking、协调器和可用性成本 |
| Reconciliation | 周期比较并修复状态 | 收敛延迟和额外运营流程 |

## Notes

- [Distributed Transactions](./dtp.md)

## Design Checklist

- 为写操作提供 idempotency key 或唯一业务约束。
- timeout、retry 和 backoff 在整条调用链上共同预算。
- event 包含稳定 ID、schema version 和发生时间语义。
- workflow 状态可查询、可恢复，并允许人工干预。
- 对账与修复是核心能力，不是异常发生后的临时脚本。
