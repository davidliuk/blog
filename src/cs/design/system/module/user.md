# User 用户

设计用户系统

## Scenario 场景

- Scenario 场景
  - 注册、登录、查询、用户信息修改
    - 哪个需求量最大？
  - 支持 100M DAU
  - 注册, 登录, 信息修改QPS约
    - 100M *0.1/86400 ~ 100
    - 0.1 = 平均每个用户每天登录+注册+信息修改
    - Peak = 100*3=300
  - 查询的QPS约
    - 100M*100 / 86400 ~ 100K
    - 100= 平均每个用户每天与查询用户信息相关的操作次数 (查看好友, 发信息, 更新消息主页) 
    - Peak = 100k * 3= 300k
- Service 服务
  - 一个 AuthenticationService 负责登录注册
  - 一个 UserService 负责用户信息存储与查询
  - 一个 FriendshipService 负责好友关系存储
- Storage 存储
  - MySQL / PosgreSQL 等SQL 数据库的性能
    - 约 1k QPS 这个级别
  - MongoDB / Cassandra 等硬盘型NoSQL 数据库的性能
    - 约10k QPS 这个级别
  - Redis / Memcached 等内存型NoSQL 数据库的性能
    - 100k ~1m QPS这个级别
  - 以上数据根据机器性能和硬盘数量及硬盘读写速度会有区别

思考：

- 注册, 登录, 信息修改, 300 QPS, 适合什么数据存储系统？
- 用户信息查询适合什么数据存储系统？

实现功能包括注册、登录、用户信息查询

好友关系存储

## Service 服务

用户系统特点：

读非常多，写非常少，一个读多写少的系统，一定要使用 Cache 进行优化

- Authentication Service 负责登录注册
- User Service 负责用户信息存储与查询
- Friendship Service 负责好友关系存储

User SQL

Friendship Cassandra

### Authentication Service

登陆系统

Session、Cookie

Session Table

- Session Token
- User ID，可能加密
- expire at, lazy deleting

单端登陆和多端登陆区别

- 单端加一个device token字段做判断

Session数据存储系统

- 如果用户不太多的话，memcached
- 多，数据库，加cache和索引

### Friendship Service

#### 单向好友关系

例子：Twitter、Instagram、微博

- 存在 SQL 数据库时
  - 查询x所有的关注对象：
    - `select * from friendship where from_user_id=x`
  - 查询x所有的粉丝：
    - `select* from friendship where to_user_id=x`
- 存在 NoSQL 数据库时
- 见拓展练习1

#### 双向好友关系

例子：微信, Facebook, WhatsApp

1. 方案1：存储为一条数据
   - `select * from friendship where smaller_user_id = x or bigger_user_id=x`
   - 问：为什么需要区分 smaller / bigger？
   - SQL 可以按照这种方案
   - NoSQL 很多不支持 Multi-index 不能使用这种方案
2. 方案2：存储为两条数据
   - `select* from friendship where from_user_id=x`
   - NoSQL 和 SQL 都可以按照这种方案
   - 一致性 Transaction
3. 问：两种方案哪种更好？
   - 存储两条更好：牺牲空间，查询更快
     - 上一个他的or其实性能差，约等于执行两次，disk is cheap



用户不等，在线服务sql不能复杂

DS、DA处理离线数据可能用到复杂sql



- 读多写少

  - Cache Aside
    - 一致性问题：ttl

- 写多读少

  - Cache Through

  - Sharding



## 拓展练习

### 拓展练习1: NoSQL 存单向好友关系

> Q

使用 Cassandra 存储单向好友关系, 支持如下操作：

1. 查询某个人的关注列表
2. 查询某个人的粉丝列表
3. 查询 A是否关注了B

请设计出需要哪些表单和对应的表单结构

> A

需要两张表单, 一张存粉丝, 一张存关注

#### Redis

- key = user_id
- value = set of friend_user_id (粉丝表里就是粉丝id, 关注表里就是关注的用户id) 
- 查A 是否关注了B：使用 Redis 的SISMEMBER 操作查询A关注的人里有没有B

#### Cassandra

- row_key =user_id
- column_key = friend_user_id (粉丝表里就是粉丝id, 关注表里就是关注的用户id) 
- value =其他你想同时存储的东西, 如关注时间
- 查A是否关注了B: 在关注表中查询 row_key=A, column_key=B 的数据是否存在

### 拓展练习2: NoSQL 存储 User

如果使用不支持 Multi-index 的 NoSQL 存储 User
如何同时支持按照 email, username, phone, id 来检索用户？

分别建立不同维度作为 key的存储

- User 相关的所有数据都存在 UserTable 里
  - Redis: key =user_id, value = 用户信息
  - Cassandra：
    - row_key = user_id
    - column_key =任何你想放的信息
    - value = 其他用户信息
- 其他再同时创建多张表单, 用作 index
  - Redis: key = erhail / phone / username, value =user_id
  - Cassandra：
    - row_key = email / phone / username
    - column_key =任何你想放的信息
    - value = 其他用户信息

### 拓展练习3: 共同好友

共同好友 (Mutual Friends) 是社交网站上常见的功能
请设计这个功能：列出 A 和 B 之间的共同好友

获得 A 和B 的共同好友
基本流程：

1. 获得A的好友列表
2. 获得B的好友列表
3. 求交集

总共两次数据库的 key-value 查询

优化：使用缓存存储用户的好友列表一两次数据库查询变两次缓存查询

### 拓展练习4: Linkedln 六度关系

LinkedIn 上有一个功能是显示你和某人之间的几度关系 (通过多少个朋友能认识) 
请设计这个功能
问：可以使用宽度优先搜索 (BFS) 算法么？

细化场景 Scenario：

- 查询你和某些人 (不超过10个) 之间的六度关系
- 用户数量级＞100M
- 平均好友数 1000个
- 期望的 DB Query 次数常数级 (<20次 Query) 

---

- A<->B: A和B之间是一度关系
- A<->B<->C: A和C之间是两度关系
- A<->B<->C<->D: A和D之间是三度关系
- 切入点：>3度关系是没有现实意义的, 对于超过三度的关系, 直接显示 3度+

方法：

> 离线计算

- 提前算好所有的一度和二度关系并存储在 NoSQL 里
  - 一度表：key=user_id, value=所有一度关系 (直接好友) 
  - 二度表：key=user_id, value=所有二度关系 (间接好友) 
- 查询我的所有一度和二度关系得到我的直接和间接好友集合 set1 (两次 key-value Query) 
- 对于给定的不超过10个需要查询关系距离的用户列表查询他们的一度关系, 得到 set2 (10次Query) 
- 在 set1 和 set2 中求交集, 根据交集结果推导这10个人和我的关系距离

---

- Session
- Cookie
- Cassandra
