# Tiny URL 短链系统

1. 提问：分析功能/需求/QPS/存储容量 - Scenario
2. 画图：根据分析结果设计“可行解” - Service+Storage
3. 进化：研究可能遇到的问题，优化系统 - Scale

## Scenario

根据 Short URL 还原 Long URL，并跳转

![image-20251229203206902](/Users/david/Library/Application Support/typora-user-images/image-20251229203206902.png)

确认问题：

- Long Url 和 Short Url 之间必须是一一对应嘛？
  - 一个 short 只对应一个 long；一个 long 可能多个也可能一个 short，如果只对应一个 short 比较省空间

- Short Url 长时间是否需要释放
  - 最好不要释放（bitly 会释放）

### QPS

新浪微博

1. DAU 100M

2. QPS 100M\*0.1/86400 =100

3. Peek Write QPS=100\*2=200

4. Read QPS 100M\*0.1/86400 =100

5. Peak Read QPS=2k，一台 SSD 支持的 MySQL 完全可以搞定

6. Storage

   1. 100M\*0.1=10M
   2. 长度 100 算，1G

   3. 1T 硬盘用 3 年

## Service

只有一个 Service：URL Service

逻辑块聚类与接口设计

- TinyUrl只有一个UrlService
  - 本身就是一个小Appkication
  - 无需关心其他的
- 函数设计
  - `UrlService.encode(long_url)`
  - `UrlService.decode(short_url)`
- 访问端口设计
  - GET /<short_url> 
    - return a Http redirect response 301
  - POST /data/shorten/ 200
    - Data = `{url: http://xxxx}`
    - Return short url

## Strorage 🌟

数据如何存储与访问

- 第一步：Select 选存储结构
- 第二步：Schema 细化数据表

### SQL or NoSQL

- 是否需要支持 Transaction？- 不需要。NoSQL +1
  - NoSQL不支持Transaction
- 是否需要丰富的 SQL Query？ - 不需要。NoSQL +1
  - NoSQL的SQL Query不是太丰富
  - 也有一些NoSQL的数据库提供简单的SQL Query支持
- 是否想偷懒？ - Tiny URL 需要写的代码并不复杂。NoSQL+1
  - 大多数 Web Framework 与 SQL 数据库兼容得很好
  - 用SQL比用NoSQL少写很多代码
- 对QPS的要求有多高？- 经计算, 2k QPS并不高, 而且2k读可以用Cache, 写很少。SQL +1
  - NoSQL 的性能更高
- 对Scalability的要求有多高？- 存储和QPS要求都不高, 单机都可以搞定。SQL+1
  - SQL 需要码农自己写代码来 Scale
  - 还记得Db那节课中怎么做 Sharding,Replica 的么？
  - NoSQL 这些都帮你做了

- **Sequential ID**？取决于你用的算法

  - SQL 有 auto-increment 的 Sequential ID

  - NoSQL 的 ID 并不是 Sequential 的


### 算法

#### 算法 1: hash Function（不可行）

比如取 Long Url 的 MD5 的最后 6 位

- 优点：快

- 缺点：难以设计不冲突的 hash


#### 算法 2: 随机生成 ShortURL + 数据库去重

随机一个6 位的 ShortURL，如果没有被用过，就绑定到该 LongURL

![image-20251229205848309](/Users/david/Library/Application Support/typora-user-images/image-20251229205848309.png)

##### 伪代码

```java
public String longToShort (String url) ｛
    while Ctrue) ｛
        String ShortURL = randomShortURLO;
        if (!database.filter(shortURL=shortURL) .exists())｛
        	database.create(shortURL=shortURL, longURL=urL);
        return shortURL;
    ｝
｝
```

##### 评价

- 优点：实现简单
- 缺点：生成短网址的速度随着短网址越来越多变得越来越慢

##### Schema

需要根据 Long 查询 Short, 也需要根据 Short 查询 Long。

**SQL**

表结构如下：

- shortKey
- longUrl

并且需要对 shortKey 和 longURL 分别建索引 (index) 。

**NoSQL**

需要建立两张表 (大多数 NoSQL 不支持多重索引 Mult-index) 

以 Cassandra 为例子

- 第一张表：根据 Long 查询 Short
  - row_key=longURL, column_key=ShortURL, value=null or timestamp
- 第二张表：根据 Short 查询 Long
  - row_key=shortURL, column_key=LongURL, value=null or timestamp

#### **算法 3: 进制转换 Base62**

> 新浪采用的方法

- Base 62
  - 将 6 位的 short url 看作 62 进制数（0-9, a-z, A-Z)
  - 每个 short URL 对应到一个整数

  - 该整数对应数据库表的 Primay Key

- 6 位
  - 5 位：9亿
  - 6 位：570 亿
  - 7 位：35000 亿

![image-20251229210012414](/Users/david/Library/Application Support/typora-user-images/image-20251229210012414.png)

##### 伪代码

```java
int shortURLtoID (String shortURL) ｛
    int id = 0；
    for Cint i = 0; i < shortURL.LengthO； +ti) ｛
	    id = id * 62 + toBase6Z (shortURL.charAt(i));
    ｝
    return id；
｝
String idToShortURLCint id) ｛
    String chars = "0123456789abcdefghijklmnopqrstuwwxyzABCDEFGHIJKLMNOPORSTUVWXYZ";
    String short_url = "";
    while (id > 0)｛
	    short_url = chars.charAt (id % 62) + short_url；
	    id = id / 62;
    ｝
    while (short_url.Length () < 6) ｛
	    short_url = "0" + short_url;
    ｝
    return short_url;
｝
```

##### 评价

- 优点：效率高，稳定
- 缺点：依赖全局的自增 ID
  - 可以被暴力枚举，但是这个没啥事，不是什么机密数据

##### Schema

因为需要用到自增ID (Sequential ID) , 因此只能选择使用 SQL 型数据库。

表单结构如下，shortURL 可以不存储在表单里, 因为可以根据id来进行换算

- ID
- long URL

Index，支持反向查找

## Scale

### Performance

How to reduce response time?

#### Cache Aside

读多写少 Memcached: 

- long to short
- short to long

![image-20251229210235922](/Users/david/Library/Application Support/typora-user-images/image-20251229210235922.png)

#### 利用地理位置信息提速

- 优化服务器访问速度
  - 不同的地区, 使用不同的 Web 服务器
  - 通过DNS解析不同地区的用户到不同的服务器
- 优化数据访问速度
  - 使用Centralized MySQL+Distributed Memcached
  - 一个MySQL配多个Memcached, Memcached跨地区分布

![image-20251229210450454](/Users/david/Library/Application Support/typora-user-images/image-20251229210450454.png)

### Cluster

how to scale?

> 假如我们一开始估算错了, 一台MySQL搞不定了，或者用户翻 10 倍

- 什么时候需要多台数据库服务器？
  - Cache 资源不够
  - 写操作越来越多
  - 越来越多的请求无法通过 Cache 满足
- 增加多台数据库服务器可以优化什么？
  - 解决“存不下”的问题—— Storage的角度
  - 解决“忙不过”的问题——QPS的角度
  - Tiny URL 主要是什么问题？

>  如何将数据分配到多台机器？

#### Sharding

- Vertical Sharding: 不行，就两个字段

- Horizontal Sharding

  - ID/Short URL 做 sharding key
    - long to short 查询的时候只能广播给 N 台数据库查询
    - 为什么 long to short？避免重复的时候会查，
    - **如果不需要去重则这种方案可行**

  - Long URL 做 sharding key
    - short to long 查询的时候，只能广播 N 台
      - 但是这个 short to long 是最常用需求


> 用什么做 Sharding Key？

- 如果一个 Long 可以对应多个 Short：
  - 使用Cache 缓存所有的 Long to Short
  - 在为一个 Long Url 创建 Short Url 的时候, 如果 cache miss 则去直接创建新的 short url 即可
- 如果一个 Long 只能对应一个 Short：
  - 如果使用随机生成 Short Url 的算法
    - 两张表单, 一张存储Long to Short, 一张存储 Short to Long
    - 每个映射关系存两份，则可以同时支持 long to short 和 short to long 的查询
  - 如果使用 base62的进制转换法
    - 这里有一个很严重的问题是, 多台机器之间如何维护一个全局自增的 ID？
    - 一般关系型数据库只支持在一台机器上实现这台机器上全局自增的 ID

#### 全局自增 ID

多台机器如何维护全局自增 ID

如何获得在N台服务器中全局共享的一个自增ID是一个难点

- 方案一：专门用一台数据库来做自增ID服务
  - 该数据库不存储真实数据, 也不负责其他查询
  - 为了避免单点失效 (Single Point Failure) 可能需要多台数据库
- 方案二：Zookeeper
  - 但是使用全局自增ID的方法并不是解决 Tiny URL 的最佳方法
  - 有兴趣的同学可以阅读一下拓展资料：http://bit.ly/1RCyPsy

---

基于 base62 的方法下的 Sharding key 策略

- 使用 Hash (long_url) % 62 作为 Sharding key
- 并将 Hash (long_url) % 62 直接放到 short url 里
- 如果原来的 short key 是AB1234的话, 现在的 short key 是
  - hash (long_url) % 62+AB1234
  - 如果 hash (long_url) % 62 =0那就是 0AB1234
- 这样我们就可以同时通过 short_url 和 long_url 得到 Sharding Key
- 缺点：数据库的机器数目不能超过62

机器小与 62 台时，用 consistency hashing

### Multi Region

- 上图的架构中, 还存在优化空间的地方是——
  - •网站服务器 (Web Server) 与 数据库服务器 (Database) 之间的通信
  - • 中心化的服务器集群 (Centralized DB set) 与 跨地域的 Web Server 之间通信较慢
    - • 比如中国的服务器需要访问美国的数据库
- 那么何不让中国的服务器访问中国的数据库？
  - •如果数据是重复写到中国的数据库, 那么如何解决一致性问题？
    - •很难解决
- 想一想用户习惯
  - •中国的用户访问时, 会被DNS分配中国的服务器
  - •中国的用户访问的网站一般都是中国的网站
  - •所以我们可以按照网站的地域信息进行 Sharding
    - •如何获得网站的地域信息？只需要将用户比较常访问的网站弄一张表就好了
  - •中国的用户访问美国的网站怎么办？
    - •那就让中国的服务器访问美国的数据好了, 反正也不会慢多少
    - •中国访问中国是主流需求, 优化系统就是要优化主要的需求

![image-20251229212327026](/Users/david/Library/Application Support/typora-user-images/image-20251229212327026.png)

## 拓展

### 实现 Custom URL

#### 基于 Base62 的方法

- URL Table 增加一个 Column ***不可行***
  - •因为大部分数据这一项都是空的
  - • 会浪费存储空间 (即使是空也会有空间耗费) 
- 新建一张表存储自定义URL
  - • CustomURLTable
- 创新自定义短链接
  - • 在CustomURLTable中查询和插入
- 根据长链接创建普通短链接
  - • 先查询CustomURLTable是否存在
  - •再在URLTable中查询和插入

#### 基于随机生成

无需做任何改动, 直接把 custom url 当 short url 创建就可以了! 

完全兼容! 
