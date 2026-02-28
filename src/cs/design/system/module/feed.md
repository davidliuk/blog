# Feed 新鲜事

## Scenario 场景

- Twitter，朋友圈，微博

Pull vs Push

推特系统中，最核心的是新鲜事系统

pull 模型、慢，用的时候现查

Cassandra 如何存储 NewsFeed

Ask before design

No more no less

Work solution first

Analysis is important than solution

## Service 服务

- User Service
- Tweet Service
  - Post a tweet
  - News Feed
- Media Service
  - Upload Image
  - Upload Video
- Friendship Service
  - Follow
  - Unfollow
  - Block

## Storage 存储

读扩散、写扩散

### Pull Model

- 算法
  - 在用户查看News Feed时, 获取每个好友的前100条Tweets, 合并出前100条News Feed
    - K路归并算法 Merge K Sorted Arrays
- 复杂度分析
  - News Feed => 假如有N个关注对象, 则为N次DB Reads的时间+K路归并时间 (可忽略) 
    - 为什么K路归并的时间可以忽略？
  - Post a tweet => 1次DB Write的时间

同步任务，需要等都查好

### Push Model

- 算法
  - 为每个用户建一个List存储他的News Feed信息
  - 用户发一个Tweet之后, 将该推文逐个推送到每个用户的News Feed List中
    - 关键词：**Fanout**
  - 用户需要查看News Feed, 只需要从该News Feed List中读取最新的100条即可
- 复杂度分析
  - News Feed => 1次DB Read
  - Post a tweet => N个粉丝, 需要N次DB Writes
    - 好处是可以用异步任务在后台执行, 无需用户等待

Feed Table

|            |             |
| ---------- | ----------- |
| id         | integer     |
| owner id   | Foreign Key |
| tweet_id   | Foreign Key |
| created_at | timestamp   |

Key Points

- Denormalise: Created_at 可以用来加索引，加速排序，减少查询
  - owner_id, created_at建立联合索引

![image-20251229183329493](/Users/david/Library/Application Support/typora-user-images/image-20251229183329493.png)



热吗Social App的模型

- Facebook - Pull
- Instagram - Push + Pull
- Twitter - Pull
- 朋友圈 - Push + Pull (Ads)

误区

- 不坚定想法, 摇摆不定
- 不能表现出Tradeoff的能力
- 无法解决特定的问题

## Scale 拓展

### 解决 Pull 的缺陷

- 最慢的部分发生在用户读请求时 (需要耗费用户等待时间) 
  - 在 DB 访问之前加入 Cache
  - Cache 每个用户的 Timeline
    - N 次 DB 请求 -> N 次 Cache 请求 (N是你关注的好友个数) 
    - Trade off: Cache 所有的？Cache最近的 1000/200 条？
  - Cache 每个用户的 News Feed
    - 没有 Cache News Feed 的用户：归并N个用户最近的100条Tweets, 然后取出结果的前100条
    - 有 Cache News Feed 的用户：归并 N 个用户的在某个时间戳之后的所有Tweets

对比 MySQL 和 Memcached 的 QPS

- Memcached QPS / MySQL QPS ~ 100~1000

### 解决 Push 的缺陷

- 浪费更多的存储空间 Disk
  - 与Pull模型将News Feed存在内存 (Memory) 中相比
  - Push模型将News Feed存在硬盘 (Disk) 里完全不是个事儿
  - Disk is cheap
- 不活跃用户 Inactive Users
  - 粉丝排序 Rank followers by weight (for example, last login time) 
- 粉丝数目 followers >>关注数目 following
  - Lady Gaga问题
  - 无解？完全切换回Pull？
  - Trade off: Pull + Push vs Pull

#### Lady Gaga

- 粉丝 Followers 80 M
  - Justin Bieber 95 M on Instagram
  - 谢娜 100M on Weibo
- Push 的挑战
  - Fanout 的过程可能需要几个小时! 
- 面试时错误的回答方案
  - 既然 Push 不行, 那我们就切换到 Pull 吧! 
    - 说起来好容易啊! 
- 正确的思路
  - 尝试在现有的模型下做**最小的改动**来优化
    - 比如多加几台用于做Push 任务的机器, Problem Solved! 
  - 对长期的增长进行估计, 并评估是否值得转换整个模型

Push 结合 Pull 的优化方案

- 普通的用户仍然 Push
- 将Lady Gaga 这类的用户, 标记为明星用户
- 对于明星用户, 不 Push 到用户的 News Feed 中
- 当用户需要的时候, 来明星用户的 Timeline 里取, 并合并到 News Feed 里

#### 如何定义明星/*果取关*问题

是不是明星不能在线动态计算，要离线计算

 为User增加一个is_superstar的属性
 一个用户被标记为superstar之后，就不能再被取消标记

 如何实现 follow 与 unfollow?

Follow一个用户之后，异步地将他的Timeline合并到你的NewsFeed中 
Merge timeline into news feed asynchronously.

Unfollow一个用户之后，异步地将他发的Tweets从你的NewsFeed中移除 
Pick out tweets from news feed asynchronously.

为什么需要异步 Async?
因为这个过程一点都不快呀

异步的好处?
用户迅速得到反馈，似乎马上就follow/unfollow成功了

异步的坏处?
Unfollow之后刷新NewsFeed，发现好像他的信息还在 
不过最终还是会被删掉的

### 如何存储 likes?

如何在 News Feed 中同时得到每个帖子被点赞、评论和转发的次数?

Normalize vs Denormalize

冗余字段

### 惊群现象 Thundering Herd

什么是惊群?

我们通常会使用缓存来作为数据库的“挡箭牌”，优化一些经常读取的数据的访问速度。即，在访问这些 数据时，会先看看是否在缓存中，如果在，就直接读取缓存中的数据，如果不在，就从数据库中读取 之后，写入缓存并返回。

那么在高并发的情况下，如果一条非常热的数据，因为缓存过期或者被淘汰算法淘汰等原因，被踢出 缓存之后，会导致短时间内(<1s)，大量的数据请求会出现缓存穿透 (Cache miss)，因为数据从 DB 回填到 Cache 需要时间。从而这些请求都会去访问数据库，导致数据库处理不过来而崩溃，从而影响到其他数据的访问而导致整个网站崩溃。

---

- 为什么既然大家都用Pull, 我们仍然要学习Push？
  - 系统设计不是选择一个最好的方案
  - 而是选择一个最合适的方案
  - 如果你没有很大的流量, Push是最经济最省力的做法
- 系统设计面试也并不是期望你答出最优的解决方法, 而是从你的分析当中判断你对系统的理解和知识储备。



- 什么时候用 Push？
  - 资源少
  - 想偷懒, 少写代码
  - 实时性要求不高
  - 用户发帖比较少
  - 双向好友关系, 没有明星问题 (比如朋友圈) ~
- 什么时候用 Pull？
  - 资源充足
  - 实时性要求高
  - 用户发帖很多
  - 单向好友关系, 有明星问题