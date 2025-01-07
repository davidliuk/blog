# 接口设计

网站系统，API设计与短网址Web System,API, Design Tiny URL

·网站系统的基本构成
·API设计问题
·什么是RestAPI

实战真题：

a.What happend if you visit www.google.com?
b.How to design tiny url?
c.如何设计News Feed API
d.如何设计mention功能
e.如何做翻页Pagination

关键词：Web,Consistent Hashing,Memcached,Tiny url..



## Rest API

你要获取的数据是什么，你的路径就是什么开头的

- 每个URL代表某类数据/资源
- HTTP的四个动作，代表数据的增删改查
- 所有筛选条件，创建参数，放到HTTP的参数里面

转账API

`POST /api/transaction/?from=1&to=2&money=500`

## Design News Feed API

设计前后端的交互接口

- 什么是API，Web API请求格式

  `GET api.domain.com/newsfeed/`

  `GET domain.com/api/newsfeed/`

- 返回内容格式

  Structured Data：json或xml，主要是json

  xml主要在android的代码中用于记录一些格式化数据

- 设计Pagination

  - `page=1`, 

    优点：可以跳转到第x页

    缺点：如果有新的数据插入，则翻页的时候可能看到上一页的内容，刷新比较难受

  - `max_id=xxx`, cursor 法，信息流变化快的

    没有max_id表示第一页

    有max_id找所有id<=max_id的最顶上的20个（时间倒叙排列）

    - 如何判断有没有下一页，如果避免额外再查一次来判断是否终点
      - Next_max_id，每次多找一个数据，把这个数据的id作为next_max_id

- 设计Mentions的数据格式，可以点进人家的主页里面

## Mentions 数据格式

预防 Javascript injection attack

mobile和web不能共享

url可能改动

推荐方法：

自定义链接结构

如：`<user username="a">Hello World</user>`让Web和Mobile分别对该格式进行解析

## 短链接系统

1. 提问：分析功能
2. 画图：

### Scenario

Long Url和Short Url之间必须是一一对应嘛？short只对应一个long，但是一个long可能多个也可能一个short，但是对应一个short比较省空间

Short Url长时间是否需要释放：觉得最好不要释放

QPS新浪微博

DAU 100M

QPS 100M*0.1/86400 =100

Peek Write QPS=100*2=200

Read QPS 100M*0.1/86400 =100

Peak Read QPS=2k，一台SSD的MySQL完全可以搞定

Storage

100M*0.1=10M

长度100算，1G

1T硬盘用3年

### Service

GET 301

POST 200

### Strorage 🌟

1. Select
2. Schema

SQL or NoSQL

Transaction? 不需要。NoSQL+1

丰富SQL Query？不需要。NoSQL+1

是否偷懒？TinyURL写起来不复杂，NoSQL+1

QPS高不？不，SQL+1

Scalability？不高，SQL+1

**Sequential ID**？取决于你用的算法

- SQL有auto- increment的Sequential ID
- NoSQL的ID并不是Sequential的

算法1:hash Function（不可行）

Long Url的MD5的后6位

优点：快

缺点：难以设计不冲突的hash

算法2: 随机生成ShortURL+数据库去重

优点：简单

缺点：生产网址越多，之后生产越慢

**算法3: 进制转换 Base62**

将6位的short url看作62进制数（0-9, a-z, A-Z)

每个short URL对应到一个整数

该整数对应数据库表的Primay Key

6位，570亿

优点：效率高，稳定

缺点：依赖全局的自增ID，可以被暴力枚举，但是这个没啥事，不是什么机密数据



Schema

`ID`, `long URL`

Index，支持反向查找

### Scale

reduce response time

1. Cache Aside

   Memcached: long to short, short to long

2. 利用地理位置提速

   1. 不同地区不同web server

      memcached分区，db共享，服务器之间可以做链路优化，比较快

   2. DNS解析不同地区

how to scale

- cache不够
- 写操作变多

Vertical Sharding: 不行，就两个字段

Horizontal Sharding

- ID/short URL做sharding key
  - long to short查询的时候只能广播给N台数据库查询
  - 为什么long to short？避免重复的时候会查，
  - 如果不需要去重则这种方案可行
- Long URL做sharding key
  - short to long 查询的时候，只能广播N台
  - 但是这个short to long是最常用需求

多台机器如何维护全局自增ID

- 方案一：一台数据库专门用来做自增ID服务
  - 不存储真实数据，为避免Single Point failure，需要master slave
- 方案二：zookeeper

---

custom url
