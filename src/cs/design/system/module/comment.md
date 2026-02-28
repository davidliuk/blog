# Comment 评论

- API 设计
- 数据模型
- 索引
- NoSQL
- 全文索引
- CDN
- 异步
- 动态缓存
- _GDPR_
- _Content Moderation_
- _机器学习应用_

应该先问面试官什么?

- 功能
- RPS
- Latency 要求
- Scope

## Scenario 场景

只有三个功能

- 发文字评论
- 显示单一评论
- 删除评论
- 显示评论列表

RPS

- Read: 1000 RPS
- Write: 100 RPS

Latency要求：

- 读写 p99 latency below 500 ms (为什么不规定Max和Average? Latency和Response time区别？) 

Scope

- 注意评论区可以有很多个 (我们把评论区叫做context) 
- 不需要设计用户登陆系统
- 不需要设计前端和UI

### API

| 功能     | 发评论    | 查评论         | 删评论         | 看评论区       |
| -------- | --------- | -------------- | -------------- | -------------- |
| Method   | POST      | GET            | DELETE         | GET            |
| URL      | /comments | /comments/:cid | /comments/:cid | /:ctx/comments |
| Auth     | Yes       | No             | Yes            | No             |
| Request  |           |                |                |                |
| Response |           |                |                |                |

#### 面试官刁难 1：Parameter Location

为什么把id放在URL path里, 而不是作为一个Request Parameter？

为什么要  `GET /comments/<cid>`

而不是 `GET /comments?id=<cid>`

- YouTube的URL就是Parameter: https://www.youtube.com/watch?v=fxrkhf17fUO
- Bilibili的URL就是URL path: https://www.bilibili.com/video/BV1ez4y1174H

> 建议在路径里面，因为这样不需要做无效URL的redirect，比如没传请求参数时，https://www.youtube.com/watch 会被 redirect 到 https://www.youtube.com/

#### Pagination

gRPC 可以建立前后端的长链接

## Storage

- Read: 1000 RPS
- Write: 100 RPS
- Latency p99 below 500ms
- 说明高并发, 首选NoSQL



考题：一年数据量是多少？

- 每小时评论数：100*3600 = 360K
- 每年评论数：360K* 24 *365 = 3.15M
- 假设每条评论  10个字, 一个字一个 Byte
- 一年评论数据量：3.15 M * 10 B = 31.5 MB

时间用 epoch time

- 客户端时间？
- 服务器时间？
- NTP
  - timel.google.com
  - time.cloudflare.com
  - build your own

### 点赞
