---
title: Object-Relational Mapping
description: ORM concepts covering identity, relationships, loading, transactions, query behavior, and performance.
icon: table-list
---

# Object-Relational Mapping

ORM 在对象模型和关系模型之间建立映射，减少重复的数据访问代码，但不会消除 SQL、事务和数据库成本。最危险的问题往往来自“看起来像普通对象访问，实际触发远程 I/O”。

## Mapping Questions

| Object side | Relational side | Risk |
| --- | --- | --- |
| Object identity | Primary key | equals/hashCode 与持久化身份不一致 |
| Reference | Foreign key | 级联、空值和生命周期不清 |
| Collection | One-to-many relation | N+1、笛卡尔积和超大集合 |
| Inheritance | Table strategy | 查询复杂、稀疏字段或重复数据 |
| Object graph | Join / multiple queries | 加载范围不可预测 |

## Query Lifecycle

1. 调用方表达查询和 projection。
2. ORM 生成 SQL 并绑定参数。
3. 数据库选择执行计划。
4. 结果被映射、缓存或附着到 persistence context。
5. 事务提交时，dirty checking 可能产生额外更新。

## Common Failure Modes

- **N+1**：遍历对象集合时为每个元素再次查询。
- **Over-fetching**：加载完整对象图，只使用少数字段。
- **Hidden flush**：查询或提交前自动同步大量修改。
- **Detached state**：对象离开事务后仍被当作受管理实体。
- **Long transaction**：把网络调用和用户交互放入数据库事务。

## Notes

- [MyBatis](./mybatis/)：显式控制 SQL 与结果映射。
- [Common Problems](./常见问题.md)

当查询对性能、锁或返回形状高度敏感时，显式 SQL、projection 或专用 read model 通常比透明对象导航更清晰。
