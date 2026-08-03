# MongoDB Aggregation

Aggregation pipeline 把文档依次传过多个 stage，每个 stage 完成过滤、投影、分组、连接、排序或重塑。

## Pipeline Reasoning

```text
source → filter → project → transform → group/join → sort/limit → result
```

- 尽早 `$match`，减少后续 stage 处理的数据量。
- 尽早 `$project` 只在确实减少大字段和内存时有价值。
- `$group`、`$sort`、`$lookup` 可能成为 blocking 或高内存 stage。
- 索引能支持 pipeline 开始处的过滤与排序，但不能自动优化所有中间结果。

## Review Checklist

1. 输入文档数、平均大小和最坏基数是多少？
2. 哪些 stage 会扩大数组或连接结果？
3. 查询是否能在进入 pipeline 前使用合适索引？
4. 分片环境下哪些工作在 shard 执行，哪些需要汇总？
5. 结果是在线请求、批处理还是可物化的预计算？

复杂 pipeline 应保留样例数据、执行计划和边界规模，避免只验证小数据正确性。
