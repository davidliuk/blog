### SQL

数据库选择原则1

大部分的情况, 用SQL也好, 用NOSQL也好, 都是可以的

数据库选择原则2

需要支持 Transaction 的话不能选 NoSQL

数据库选择原则3

- 你想在什么地方偷懒很大程度决定了选什么数据库
- SQL：结构化数据, 自由创建索引
- NoSQL：分布式, Auto-scale, Replica

数据库选择原则4

一般一个网站会同时用多种数据库系统
不同的表单放在不同的数据库里

User Table 存在哪儿？

- 大部分公司选择了 SQL
- 原因：信任度, Multi-lndex

Friendship 存在哪儿？

- 大部分公司选择了 NoSQL
- 原因：数据结构简单, 都是 key-value 的查询/存储需求
- NoSQL效率更高

- 

---

附录：扩展阅读

- Dynamo DB - 理解分布式数据库 (NoSQL) 的原理
  - http://bit.ly/1mDsOYh ［Hard］ ［Paper］
- Scaling Memcache at Facebook - 妈妈再也不担心我的 Memcache
  - http://bit.ly/1UIpbGE ［Hard］ ［Paper］
- Coach Base Architecture
  - http://horicky.blogspot.in/2012/07/couchbase-architecture.html
- Least Frequently Used Cache (LFU)
  - http://dhruvbird.com/lfu.pdf

附录：NoSQL, 也就是所谓的分布式数据库

- 分布式数据库解决的问题
  - Scalability
- 分布式数据库还没解决很好的问题
  - Query language
  - Secondary index
  - ACID transactions
  - Trust and confidence

---

系统设计最核心的内容就是数据库设计, 没有掌握数据库基础知识点的话就无法更好地进行系统设计。

设计原则

- 充分体现系统的需求
  - 数据库是为应用服务的, 
    好的数据库设计应该首先
    能满足应用系统的业务需
    求, 能够准确表达数据间
    关系。
- 提高数据的查询效率
  - 通过合理表结构, 安排物
    理存储分区、增加索引等
    方式、提高数据库的读取
    速度、提高查询效率
- 能够保证数据的准确性和一致性
  - 通过外键、非空、限制、
    唯一索引、事务等保证数
    据的健壮
- 有好的扩展性
  - 好的数据库设计在必要时
    应能根据需求进行数据结
    构扩展

## Index 索引

### 主键最佳实践

不要使用过长字段作主键, 如很长的字符串 (这边最好能举个例子)。

辅助索引引用了主键, 如果主键太长, 那么辅助索引会变得很大。

不要使用非单调的字段作为主键, 如随机的字符串、随机的数字。

非单调的主键使得在插入新数据时, 数据库文件为了维持B+树的特性而频繁的分裂调整

> 单调递增的整数是个好选择, 最好和业务无关。

索引的代价：

1. 索引文件本身消耗空间
2. 插入、更新、删除数据时, 维护索引结构, 添加负担
3. MySQL 自身运行时也要消耗资源维持索引

哪些列不要建索引：
1. 不太会查询到的列
2. 本身没有顺序, 或者特别长的列。如, 「地址」。
3. 表记录比较少, 就不用建索引了, 直接全表扫描。如, 「班级同学」表。
4. 选择性低，即重复率高, 可枚举的列。如「性别」。

选择性

- Selectivity = Cardinality / T
- Cardinality: 不重复的索引值数量
- T: 表中数据条数
- Selectivity 约趋近于 1, 索引价值越大

## Transaction 事务