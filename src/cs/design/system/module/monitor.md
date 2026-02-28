# Monitor 监控

Interviewer: Design Datadog (Monitor System)

## Scenario

- 对于用户对于某个链接的每次访问，记录为一次访问
- 可以查询某个链接的被访问次数
- 知道总共多少次访问
- 知道最近的x小时/x天/x月/x年的访问曲线图
- 假设 Tiny URL 的读请求约 2k 的QPS

## Service

自身为一个独立的Application，无法更细分

## Storage

- 基本全是写操作，读操作很少
- 需要持久化存储（没memcached什么事儿了）
- SQL or NoSQL or File System?
  - 其实都可以，业界的一些系统比如 Graphite 用的是文件系统存储
  - 这里我们假设用NoSQL存储吧
- 用NoSQL的话，key 就是 tiny url 的 short_key，value是这个key的所有访问记录的统计数据
  - 你可能会奇怪为什么value可以存下一个key的所有访问数据（比如1整年）
- 我们来看看value的结构
- 核心点是：
  - 今天的数据，我们以分钟为单位存储
  - 昨天的数据，可能就以 5分钟为单位存储
  - 上个月的数据，可能就以 1小时为单位存储
  - 去年的数据，就以周为单位存储
  - …
  - 用户的查询操作通常是查询某个时刻到当前时刻的曲线图
  - 也就意味着，对于去年的数据，你没有必要一分 钟一分钟的进行保存
- 多级Bucket的思路，是不是和Rate Limiter如出一辙！