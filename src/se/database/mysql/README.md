---
title: MySQL
description: MySQL notes organized around transactions, access paths, storage, concurrency, recovery, and operations.
icon: table
---

# MySQL

理解 MySQL 的主线是：一条 SQL 如何经过优化器选择访问路径，由 InnoDB 读取或修改页面，在并发控制下维护事务语义，并通过日志完成恢复和复制。

## Knowledge Map

| Area | Question | Notes |
| --- | --- | --- |
| [Transaction](./transaction/) | 一组操作怎样原子提交，并在并发下保持可见性规则？ | ACID、隔离级别、MVCC |
| [Index](./index/) | 数据怎样被定位，为什么某个索引能或不能使用？ | B+ Tree、联合索引、覆盖索引 |
| [Engine](./engine/) | 表、页、行和索引在 InnoDB 中怎样组织？ | 架构、存储引擎 |
| [Lock](./lock/) | 冲突怎样被串行化，死锁怎样产生？ | 表锁、行锁、间隙锁 |
| [Log](./log/) | 崩溃恢复、回滚和复制分别依赖什么日志？ | redo、undo、binlog |
| [Memory](./memory/) | 哪些 I/O 被 Buffer Pool 吸收？ | 缓存页、脏页、刷盘 |
| [Availability](./availability/) | 节点故障后怎样保持服务与数据？ | 复制、切换、分片 |
| [Operations](./devops/) | 配置、容量、慢查询和变更怎样管理？ | 配置与运维 |

## Explain One Query

1. SQL 语义与返回数据量是什么？
2. 候选索引有哪些，选择性与回表成本如何？
3. `EXPLAIN` 展示的访问方法、扫描行数和额外操作是什么？
4. 事务隔离和锁范围会不会影响并发请求？
5. 数据增长或分布变化后，当前计划是否仍然成立？

## Failure-Oriented Checklist

- 事务失败时，哪些操作会回滚，哪些外部副作用不会？
- 重试是否可能产生重复写入？
- 长事务是否阻碍清理、复制或锁等待？
- Schema 变更能否与新旧应用版本兼容？
- 备份是否真正做过恢复演练？
