# System Design

Scalability, Tradeoff

::: details 参考文档

[koala bear 博客](http://wsfdl.com/categories.html)

DDIA (Designing Data-Intensive Application)

:::

- Reliability
- Scalability
- Maintainability

### Tradeoff

- **Tradeoff** 是什么：权衡，面试官最看重
- 什么叫 SOA (Service-Oriented Architecture)
- 什么是 Pull Model 和什么是 Push Model
- 数据存储系统有哪些，什么样的数据适合存在什么样的数据存储系统中
- 什么是异步任务和消息队列 (Message Queue)
- 什么是数据的可持久化 (Persistent)
- 什么是去标准化 (Denormalize)
- 什么是惊群效应 (Thundering Herd)
- 有哪些与 News Feed 类似的系统设计问题?
- RESTful vs RPC

### 问题形式

- 设计 xx 系统
  - 设计微博 Design Twitter
  - 设计人人 Design Facebook
  - 设计滴滴 Design Uber
  - 设计微信 Design Whatsapp
  - 设计点评
  - 设计短链系统
  - 设计 NoSQL 数据库
- 设计 xx 系统中的 xx 功能
  - 设计一个功能实现对用户访问频率的限制
    - memcached
  - 设计一个功能实现统计某个具体事件历史发生次数：
    - 监控设计
  - 设计删除一个 Tweet 的功能
  - 设计邮件系统中将所有邮件标记为可读的功能

### OOD vs SD

#### 形式上

OOD 是微观设计，手把手 Coding

- 游戏设计
- 电梯设计

SD 是高屋建瓴宏观的设计，Backend design

- 短网址系统设计
- 新鲜事系统设计

#### 知识点上

- OOD: Class, Object, Method, Inheritance, Interface
- SD: Database, Schema, SQL, NoSQL, File System, Distributed System, Latency, Scalability, Master Slave, Load Balancer, Web Server, Message Queue, Sharing, Consistent Hashing, QPS, ...

### 评分标准

> 避免只讲关键词

- 可行解 Work Solution 25%
- 特定问题 Special Case 20%

  - 通常作为完成可行解之后的 followup

- 分析能力 Analysis 25%

  - 讨论情况，什么情况考虑，什么情况不考虑

- 权衡 Tradeoff 15%

  - 什么情况下 A 好，什么情况下 B 好

- 知识储备 Knowledge Base 15%

## 4S 分析法

Work Solution, NOT Perfect Solution

- Scenario 场景：需要设计哪些功能，设计得多牛

  - Ask/ Features/ QPS/ DAU/ Interfaces(APIs)

- Service 服务：将大系统拆分为小服务

  - Split/ Application/ Module / Service

- Storage 存储：数据如何存储与访问

  - Schema/ Data/ SQL/ NoSQL/ File System (S3)

- Scale 升级：解决缺陷，处理可能遇到的问题

  - Sharding/ Optimize/ Special Case

### Scenario 场景

需要设计哪些功能，设计得多牛

- Ask 问面试官

  - 需要承受多大的访问量
    - DAU
    - MAU ~ 2 \* DAU
  - 需要设计哪些功能（也可以自己想）
    1. Enumerate: 把系统的功能一个个罗列出来
    2. Sort: 选出核心功能
       1. Post a tweet
       2. Feed

- Analysis & Predict 分析

  > 重要的是**计算过程**，而不是计算结果

  - 并发用户 Concurrent User
    - 日活跃 \* 每个用户平均请求次数 / 一天多少秒 =
    - 峰值 Peak = Average Concurrent User \* 3
    - 快速增长 Fast Growing
  - 读频率 Read QPS
  - 写频率 Write QPS

分析出 QPS 有什么用？

- QPS = 100
  - 用你的笔记本做 Web 服务器即可
- QPS = 1k
  - 一台好一点的 服务器
  - 需要考虑 Single Point Failure
- QPS = 1m
  - 需要 1000 台 Web 服务器的集群
  - 需要考虑如何 Maintainance (Avalability)

QPS 和 Web Server / Database 之间的关系

- 一台 Web Server 约承受量是 1k 的 QPS
- 一台 SQL Database 约承受量是 1k 的 QPS（如果 JOIN 和 INDEX query 比较多的话，这个值会更小）
- 一台 NoSQL Database (Redis) 约 1M 的 QPS

### Service 服务

SOA (Service-Oriented Architecture) 微服务化

将大系统拆分为小服务

1. Step 1: Replay

- 重新过一遍每个需求, 为每个需求添加一个服务

2. Step 2: Merge

- 归并相同的服务

什么是服务 Service？

- 可以认为是逻辑处理的整合
- 对于同一类问题的逻辑处理归并在一个 Service 中
- 把整个 System 细分为若干个小的 Service

### Storage 存储 🌟

数据如何存储与访问

1. Step 1: Select

   - 为每个 Application/Service 选择合适的存储结构

2. Step 2: Schema
   - 细化数据表结构

---

- 数据库系统 Database

  - 关系型数据库 SQL Database

    - 用户信息 User Table

      > 查询复杂，需要索引

  - 非关系型数据库 NoSQL Database

    - 推文 Tweets

      > 增加速度比用户增加快得多，需要可拓展性，

    - 社交图谱 Social Graph (followers)

- 文件系统 File System

  - 图片、视频 Media Files

- 缓存系统 Cache

  - 不支持数据持久化 Nonpersistent
  - 效率高, 内存级访问速度

### Scale 扩展

How to Scale？系统如何优化与维护

1. Optimize 优化
2. Maintenance 维护

---

- Step 1: Optimize
  - 解决设计缺陷 Solve Problems
    - Pull vs Push
  - 更多功能设计 More Features
    - Like, Follow & Unfollow, Ads
  - 一些特殊情况 Special Cases
    - 鹿晗关晓彤搞挂微博, 僵尸粉
- Step 2: Maintenance
  - 鲁棒性 Robust
    - 如果有一台服务器/数据库挂了怎么办
  - 扩展性 Scalability
    - 如果有流量暴增, 如何扩展

## 常见问题

设计推特

设计滴滴

设计短链

---

**软件开发的三高指标：高并发、高性能、高可用。**

高并发方面要求 QPS 大于 10 万；

高性能方面要求请求延迟小于 100 ms；

高可用方面要高于 99.99%(4 个 9)

**高并发（High Concurrency）**：高并发指的是系统能够同时处理大量的用户请求或操作。在高并发环境下，系统需要有效地管理资源，如线程和数据库连接，以便同时服务于大量用户或执行大量任务，而不会降低性能或导致服务中断。

**高可用（High Availability）**：高可用性指的是系统能够持续不断地为用户提供服务，即使面临部分故障或维护操作。这通常通过冗余设计（如多服务器、负载均衡、故障转移等）实现，确保系统的关键部分在任何时候都有一个备份可以接管工作。

**高性能（High Performance）**：高性能涉及到系统响应用户请求的速度和处理数据的能力。这不仅包括快速响应用户的交互请求，还包括在后端处理大量数据时的效率。提升性能通常涉及到优化代码、使用高效的算法、以及合理地利用硬件资源。

---

代码复杂度：圈复杂度(Cyclomatic complexity)

---

非常肝的人，一周 1000 行

一般的人一天 50 行代码

80%复用以前的代码，没有提升；20%新的有提升的

junior->senior: 3-5yoe

10000 行代码 5000 行 test，每一行代码都需要 unit test 测试

test coverage（每行都覆盖到，90%上）

---

git 分支管理 https://juejin.cn/post/7352075703859150899

---

- Ask before design
  - 问清楚再动手设计
  - 不要一上来就冲着一个巨牛的方案去设计
  - 切忌不要做关键词大师
- No more no less
  - 不要总想着设计最牛的系统
  - 要设计够用的系统
- Work solution first
  - 先设计一个基本能工作的系统, 然后再逐步优化
  - Done is better than perfect! — Mark Zuckerberg
- Analysis is important than solution
  - 系统设计没有标准答案
  - 记住答案是没用的
  - 通过分析过程展示知识储备
  - 权衡各种设计方式的利弊
