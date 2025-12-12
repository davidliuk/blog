# Pagination

Elasticsearch 主要提供了三种分页方式：

- from + size，
- scroll
- sort + search_after

### from + size 分页

from + size 分页机制类似于 SQL 中的 LIMIT 和 OFFSET，通过指定 from（起始偏移量）和 size（每页返回的记录数）来获取特定页的数据。

```http
GET /my-index/_search
{
  "query": {
	"match_all": {}
  },
  "from": 10,  // 跳过前 10 条记录
  "size": 20   // 返回接下来的 20 条记录
}
```

这种分页方式简单直观，适合在数据量较小或分页深度不大的场景下使用，例如只需要获取前几页数据的情况。

### scroll 分页

scroll 可以处理大量数据，并且在分页过程中保持数据一致性。适用于需要遍历大量数据（如全量导出）的场景。

初始化 scroll 请求，创建一个 scroll 上下文，保存当前查询的快照

```http
GET /my-index/_search?scroll=1m
{
  "query": {
    "match_all": {}
  },
  "size": 100  // 每次返回 100 条记录
}
```

使用返回的 scroll_id 获取下一页数据

```http
GET /_search/scroll
{
  "scroll": "1m",  // 指定 scroll 上下文的有效期
  "scroll_id": "DXF1ZXJ5QW5kRmV0Y2gBAAAAAAAAABZWMjJDZ3Z1RlEtOUc1T1pNZnVtUncAAAAAAAABF..."
}
```

scroll不适合实时分页：

- scroll 会在服务器上维持一个查询上下文，占用系统资源。如果有大量的并发 scroll 请求，或者 scroll 持续时间很长，会占用大量的内存和 CPU 资源
- 当你初始化一个 scroll 请求时，Elasticsearch 会创建一个当前搜索结果的快照。这个快照会保存所有匹配文档的状态，即使之后这些文档被更新或删除，scroll 返回的结果也不会改变。实时分页场景中，用户需要查看最新的数据。

### sort + search_after 分页

在 Elasticsearch 中，推荐的分页方式是 sort + search_after( 5.0 版本及之后的版本才有)，它在深度分页时比 from + size 更具性能优势，也比 scroll 更适合实时分页的场景。

search_after 的优势如下：

- 避免深度分页性能问题: 与 from + size 不同，search_after 不需要 Elasticsearch 计算和存储大量中间结果， 因此在深度分页时效率更高。
- 资源占用少: search_after 只需要记录上一页最后一条数据的排序值，相比 scroll 机制需要维护大量数据上下文，占用的资源更少。
- 稳定的排序结果: search_after 基于排序值定位下一页数据，保证了即使数据更新，分页结果的顺序依然稳定可靠。

此外，sort + search_after 可以与手动构建的 nextToken 分页逻辑结合使用，适用于需要跨数据库复用分页逻辑的场景。例如，在一个项目中，可能会有多个数据库的分页需求，通过手动构建 nextToken 分页条件，可以实现跨数据库的分页逻辑复用。

sort + search_after 工作原理如下：

1. 排序：利用 sort 参数对结果进行排序，确保分页结果的稳定性。为了进一步确保结果的唯一性，建议在排序字段中包含一个唯一标识符，例如 _id。
2. 定位下一页：
   - 使用 search_after 参数传递上一页最后一个结果的排序值，作为下一页查询的起点。
   - Elasticsearch 会根据 search_after 的值快速定位到上一页的结束位置，开始下一页的查询，避免了深度分页的性能瓶颈。

```http
GET /service_version_index/service_version_type/_search
{
  "size": 100,
  "sort": [
    {"gmt_modified": "desc"},
    {"score": "desc"},
    {"id": "desc"}
  ],
  "query": {
    ...
  }
}
```

下一页查询，使用上一页最后一个结果的排序值作为 search_after 的值

```http
GET /service_version_index/service_version_type/_search
{
  "size": 100,
  "sort": [
    {"gmt_modified": "desc"},
    {"score": "desc"},
    {"id": "desc"}
  ],
  "query": {
    ...
  },
  "search_after": [
    1614561419000,
    "6FxZJXgBE6QbUWetnarH"
  ]
}
```

