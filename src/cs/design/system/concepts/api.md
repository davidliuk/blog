# API Design 接口设计

API 设计关注的是系统如何把能力暴露给调用方，而不是只盯着某一个接口格式。

## 先想清楚什么是 API

- 每个 URL / Endpoint 代表一类资源或能力。
- HTTP 方法表达增删改查。
- 筛选条件、分页参数、排序条件放在请求参数中。

示例：

`POST /api/transaction/?from=1&to=2&money=500`

## 常见题型

1. What happened if you visit `www.google.com`?
2. How to design tiny url?
3. 如何设计 News Feed API
4. 如何设计 mention 功能
5. 如何做分页 Pagination

## News Feed API

设计信息流接口时，通常要先回答三个问题：

1. 路径怎么设计
2. 返回格式是什么
3. 分页如何做

常见接口形式：

- `GET /api/newsfeed/`
- `GET /api/newsfeed/?max_id=123`

### 返回格式

- 结构化数据一般使用 JSON
- XML 现在更多出现在历史系统或特定平台配置里

### Pagination

#### page 模式

- `page=1`
- 优点：支持快速跳转到第 x 页
- 缺点：数据变化快时容易重复或漏看

#### cursor 模式

- `max_id=xxx`
- 没有 `max_id` 表示第一页
- 查找 `id <= max_id` 的下一批数据
- 每次多拿一条，作为 `next_max_id`

信息流、聊天记录这类变化很快的接口，更适合 cursor 分页。

## Mentions 数据格式

如果内容里要支持点击用户名、话题或实体，不建议直接把前端展示结构和存储结构绑死。

推荐思路：

- 返回结构化字段
- 或使用可解析的自定义标记结构

例如：

`<user username="a">Hello World</user>`

这样 Web 和 Mobile 可以分别解析，不必依赖脆弱的字符串替换。

## 为什么 Web API 重要

- System Design 很多时候本质上是 Backend Design
- Backend Design 很多时候最终会落实成 Web Backend Design

理解一次完整请求链路时，至少要知道：

- DNS
- HTTP / HTTPS
- Domain
- IP Address
- URL
- Web Server
- HTTP Server
- Web Application
