# 扩展

Interviewer: How to scale?

当访问量越来越大以后，如何让你的系统 Scale? 

How to scale system ≈ How to scale database

## 拆分 Sharding

数据拆分 Sharding

纵向拆分 Vertical Sharding 

横向拆分 Horizontal Sharding

### 纵向切分 Vertical Sharding

User Table 放一台数据库 Friendship Table 放一台数据库 Message Table 放一台数据库

• 比如你的 User Table 里有如下信息 

• email
• username
• password
• nickname // 昵称 
• avatar // 头像

• 我们知道 email / username / password 不会经常变动

• 而 nickname, avatar 相对来说变动频率更高

• 可以把他们拆分为两个表 User Table 和 UserProfile Table • UserProfile 中用一个 user_id 的 foreign key 指向 User
 • 然后再分别放在两台机器上
 • 这样如果 UserProfile Table 挂了，就不影响 User 正常的登陆

### 横向拆分 Horizontal Sharding

### Consistent Hashing

缺陷1 数据分布不均匀

因为算法是“将数据最多的相邻两台机器均匀分为三台” 

比如，3台机器变4台机器时，无法做到4台机器均匀分布

缺陷2 迁移压力大

新机器的数据只从两台老机器上获取 导致这两台老机器负载过大

虚拟节点 Virtual Node

### ID

User Table Sharding 之后，多台数据库无法维护全局的自增**ID**怎么办？

手动创建一个 UUID 来作为用户的 user_id

创建用户时还没有用户的 user_id，如何知道该去哪个数据库创建呢?

• Web Server 负责创建用户的 user_id，如用 UUID 来作为 user_id

• 创建之后根据 consistent_hash(user_id) 的结果来获得所在的实体数据库信息

如果 User Table 没有 sharding 之前已经采用了自增ID该怎么办?

- UUID 通常是一个字符串，自增 id 是一个整数，并不兼容
- 单独用一个 UserIdService 负责创建用户的 ID，每次有新用户需要创建时，问这个 Service 要一个新的ID。这个 Service 是全局共享的，专门负责创建 UserId。负责记录当前 UserId 的最大值是多少了，然后每次 +1 即可。这个 Service 会负责加锁来保证数据操作的原子性(Atomic)
- 因为创建用户不是一个很大的 QPS，因此这个做法问题不大

## 复制 Replica

Backup

- 一般是周期性的，比如每天晚上进行一次备份
- 当数据丢失的时候，通常只能恢复到之前的某个时间点
- Backup 不用作在线的数据服务，不分摊读

Replica

- 是实时的， 在数据写入的时候，就会以复制品的形式存为多份
- 当数据丢失的时候，可以马上通过其他的复制品恢复
- Replica 用作在线的数据服务，分摊读