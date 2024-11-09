# 系统设计

Scalability, Tradeoff

::: details 参考文档

[koala bear 博客](http://wsfdl.com/categories.html)

DDIA

:::

- scalability
- availability
- reliability
- performance

### Tradeoff

**Tradeoff** 是什么：权衡，面试官最看重

什么叫 SOA

RESTful vs RPC

什么是 Pull Model 和什么是 Push Model

数据存储系统有哪些，什么样的数据适合存在什么样的数据存储系统中

什么是异步任务和消息队列 (Message Queue)
什么是数据的可持久化 (Persistent)

什么是去标准化 (Denormalize)
什么是惊群效应 (Thundering Herd)
有哪些与 News Feed 类似的系统设计问题?

### 问题

设计 xx 系统

设计 xx 系统中的 xx 功能

访问限制系统：memcached

设计统计某事件历史发生次数：监控设计

### OOD vs SD

OOD 是微观设计，手把手 Coding

> 游戏设计、电梯设计就是 OOD

SD 是高屋建瓴宏观的设计：Backend design，数据库如何设计、xxx

### 评分标准

- 可行解 Work Solution 25% 
- 特定问题 Special Case 20% 
- 分析能力 Analysis 25% 
- 权衡 Tradeoff 15% 
- 知识储备 Knowledge Base 15%

## 分析法 4S

- Scenario 场景

  需要设计哪些功能，设计得多牛

  - Ask/ Features/ QPS/ DAU/ Interfaces

- Service 服务

  将大系统拆分为小服务

  - Split/ application/ module

- Storage 存储

  数据如何存储与访问

  - Schema/ Data/ SQL/ NoSQL/ File System

- Scale 升级
  解决缺陷，处理可能遇到的问题
  
  - Sharding/ Optimize/ Special Case

### Scenario 场景

问面试官 Scenario

推特系统中，最核心的是新鲜事系统

pull 模型、慢，用的时候现查

### Storage 存储



## 常见问题

设计推特

设计滴滴

设计短链

---

**软件开发的三高指标：高并发、高性能、高可用。**

高并发方面要求 QPS 大于 10万；

高性能方面要求请求延迟小于 100 ms；

高可用方面要高于 99.99%(4个9)

**高并发（High Concurrency）**：高并发指的是系统能够同时处理大量的用户请求或操作。在高并发环境下，系统需要有效地管理资源，如线程和数据库连接，以便同时服务于大量用户或执行大量任务，而不会降低性能或导致服务中断。

**高可用（High Availability）**：高可用性指的是系统能够持续不断地为用户提供服务，即使面临部分故障或维护操作。这通常通过冗余设计（如多服务器、负载均衡、故障转移等）实现，确保系统的关键部分在任何时候都有一个备份可以接管工作。

**高性能（High Performance）**：高性能涉及到系统响应用户请求的速度和处理数据的能力。这不仅包括快速响应用户的交互请求，还包括在后端处理大量数据时的效率。提升性能通常涉及到优化代码、使用高效的算法、以及合理地利用硬件资源。

---

代码复杂度：圈复杂度(Cyclomatic complexity)

---

## 阅读清单

[Spring Cloud 迁移至 K8s](https://juejin.cn/post/7282363816021000253)

项目是一个一个微服务组织起来的，大概业务类的服务有5个，公共服务有4个。设计到的改造主要集中在gateway, auth中，公共包的一些改造比较少，主要是将open-feign的访问改为通过url进行调用，而不是之前通过服务名来。

而在kubernetes中，我们使用Traefik2来代替gateway的功能，不知道traefik2的，可以去翻翻之前的文章。

同时对于授权,需要提供一个授权接口，配合traefik2使用，这样每一个请求都会进行授权的验证。

分布式锁：https://juejin.cn/post/7279346413915668535

幂等性：https://juejin.cn/post/7273024681631776829

Optional：https://juejin.cn/post/7267919941525585977

Spring Event坑：https://juejin.cn/post/7281159113882468371

CompletableFuture优化：https://juejin.cn/post/7280746526820679732

Arthas Trace优化接口：https://juejin.cn/post/7259320326898876477

OCR：Tess4J，https://juejin.cn/post/7288964017351573545

WebClient：https://juejin.cn/post/7294150742113304602

---

非常肝的人，一周1000行

一般的人一天50行代码

80%服用以前的代码，没有提升；20%新的有提升的

junior->senior: 3-5yoe

10000行代码5000行test，每一行代码都需要unit test测试

test coverage（每行都覆盖到，90%上）

---

git分支管理 https://juejin.cn/post/7352075703859150899
