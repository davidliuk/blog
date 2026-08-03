---
title: HBase
description: HBase design through row keys, regions, access patterns, write paths, and hotspot avoidance.
icon: table-columns
---

# HBase

HBase 适合大规模、稀疏、按 row key 或范围访问的数据。Schema 设计的核心不是 column 名，而是 row key 如何把查询和数据分布映射到 region。

## Row Key Design

一个有效 row key 同时考虑：

- 主要读取是否能通过完整 key 或连续 range 完成；
- 写入是否均匀分散，避免时间递增 key 形成单 region 热点；
- key 长度是否放大内存、索引和网络成本；
- 相关数据是否需要按前缀 colocate；
- salt、hash prefix 或 reverse timestamp 是否破坏所需 range scan。

## Read and Write Path

```text
write → WAL + memstore → flush → HFile → compaction
read  → block cache / memstore / HFiles
```

Compaction、region split 和 hotspot 会直接影响 tail latency。

## Review Checklist

1. 前三个 query pattern 能否由 row key 直接支持？
2. 峰值写入在 region 之间怎样分布？
3. version、TTL 和删除语义是否符合 retention？
4. scan 范围和返回数据量是否有上限？
5. bulk load、backup、repair 和 schema evolution 怎样执行？
