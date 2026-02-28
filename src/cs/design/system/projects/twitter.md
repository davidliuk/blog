# Twitter

sns

- Tech Stack: Python,Django,MySQL,HBase,Redis, Memcached, RabbitMQ, Amazon S3
- Used push model to fanout news feeds.
- Used Redis and Memcached to reduce db queries for tables which has lot reads and less writes.
- Used Key-value store HBase to split db queries or tables which has less reads and lot writes.
- Used denormalization to store the number of comments likes in order to reduce db queries.
- Used Message Queue to deliver asynchronized tasks to reduce response time.
- The whole project resulted in 10000 lines of code changes,cost over 3 months.

---

技术栈：Python,Django,MySQL,HBase,Redis,Memcached,RabbitMQ,Amazon S3
使用推(Push)模型实现写扩散机制的新鲜事(news feeds)
使用 Memcached 和 Redis 缓存数据，优化读多写少的数据库表单
使用 Key-value Store-HBase 存储写多读少的数据库表单
使用冗余存储技术（Denormalization）记录评论数和点赞数，减少数据库查询次数
使用 Message Queue 传递异步任务，降低响应时间
涉及的代码更改 10000+行，耗时 3 个月

从 0->1->N 搭建起一个工业级标准的信息流系统后端

- Python、Django、Celery (异步任务)
- Redis、Memcached、Message Queue
- MySQL、HBase
- AWS / Aliyun Cloud Service (S3, Relational DB、Hbase、Load Balancer)
- Rest APl、Serialization、Denormalization

通过每次 100-200 行代码的 Git Commit 让你分步骤的了解一个可以达到工业化标准的项目是如何搭建起来的

硅谷顶尖大厂高级工程师，拥有丰富的亿级用户开发经验

通过一个项目从 P5/E3 的难度级别做到 P8/E5 的难度级别，逐步深入，真正能够实现一个工业级要求的项目

50 个 commit

---

推拉模式
异步任务
消息队列
冗余存储
Pull vs Push
Async Task
Message Queue
Denormalization

---

一个 Web 系统中为什么需要异步任务？

- 有一些任务无法在用户请求的阶段完成（一般用户的耐心是 1 秒以内)

- 有一些任务需要进行失败重试（比如和第三方 API 进行沟通的任务)
- 有一些需要周期性执行的定时任务

说说看我们平时遇到的哪些需求是需要通过异步实现的？

- 发邮件

- 注册账号
- 在 LintCode 上提交代码评测发送提醒邮件/短信
- 红包超时未领取之后自动撤回

---

一个异步任务的执行离不开消息队列，因为异步任务的信息会被作为数据放在消息队列中，等着执行者(worker)来取走进行执行。

消息队列是一种中间件(Middleware)啥是中间件？大概可以理解为系统中汇总传递信息的组件。
消息队列可以控制任务的优先级，可以分配不同的队列让不同的执行者机器执行不同的任务。
消息队列可以确保一个任务只被一个执行者拿到避免重复执行。

---

冗余存储

标准存储：比如，点赞人数，本来是通过从 like table 表 select（tweet id 带索引）

- 优点：标准化，最准确。

- 缺点：炒鸡慢，会增加 O(N) 个 SQL Queries(对于某一页的 Tweets, 每个都得来这么一句查询)

一定要避免的事情（for 循环里面 sql，n pass sql query）

冗余存储：一些冗余字段，记录点赞数，点赞的时候就给 count +1/-1

https://www.lintcode.com/collection/194/

---

热门 Social App 的模型

- Facebook Pull
- Instagram Push Pull
- Twitter -Pull
- 朋友圈？

误区

- 不坚定想法，摇摆不定
- 不能表现出 Tradeoff 的能力
- 无法解决特定的问题
- 猜猜微信朋友圈用的是什么模型？

---

HBase: strong friends, newsfeed
