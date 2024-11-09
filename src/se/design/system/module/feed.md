# 新鲜事系统

Pull vs Push



Cassandra 如何存储 NewsFeed

Ask before design

No more no less

Work solution first

Analysis is important than solution



## 拓展问题



### 果取关问题

是不是明星不能在线动态计算，要离线计算

 • 为User增加一个is_superstar的属性
 • 一个用户被标记为superstar之后，就不能再被取消标记

 • 如何实现 follow 与 unfollow?

• Follow一个用户之后，异步地将他的Timeline合并到你的NewsFeed中 
• Merge timeline into news feed asynchronously.

• Unfollow一个用户之后，异步地将他发的Tweets从你的NewsFeed中移除 
• Pick out tweets from news feed asynchronously.

• 为什么需要异步 Async?
• 因为这个过程一点都不快呀

• 异步的好处?
• 用户迅速得到反馈，似乎马上就follow/unfollow成功了

• 异步的坏处?
• Unfollow之后刷新NewsFeed，发现好像他的信息还在 
• 不过最终还是会被删掉的

### 如何存储 likes?

如何在 News Feed 中同时得到每个帖子被点赞、评论和转发的次数?

Normalize vs Denormalize

冗余字段

### 惊群现象 Thundering Herd

什么是惊群?

我们通常会使用缓存来作为数据库的“挡箭牌”，优化一些经常读取的数据的访问速度。即，在访问这些 数据时，会先看看是否在缓存中，如果在，就直接读取缓存中的数据，如果不在，就从数据库中读取 之后，写入缓存并返回。

那么在高并发的情况下，如果一条非常热的数据，因为缓存过期或者被淘汰算法淘汰等原因，被踢出 缓存之后，会导致短时间内(<1s)，大量的数据请求会出现缓存穿透 (Cache miss)，因为数据从 DB 回填到 Cache 需要时间。从而这些请求都会去访问数据库，导致数据库处理不过来而崩溃，从而影响到其他数据的访问而导致整个网站崩溃。