# Rate Limiter

How to limit requests?

> 如何限制访问次数？比如 1 小时之类不能重置 >5 次密码

RateLimiter 访问限制器

- Rate limiter
- 网站必用工具

- 比如一分钟来自同一个邮箱的密码输入错误不能超过5次，一天不超过10次

- 一些Open source的资源

  - Ruby: https://github.com/ejfinneran/ratelimit
  - Django: https://github.com/jsocol/django-ratelimit
  - 建议:有空读一读源码

- Rate Limiter 已经是一个小型的系统设计问题
  - 我们同样可以用 4S 分析法进行分析!

## Scenario 场景

- 根据网络请求的特征进行限制（feature的选取）
  - IP (未登录时的行为）, User（登录后的行为）, Email（注册，登录，激活）
- 系统需要做到怎样的程度
  - 如果在某个时间段内超过了一定数目，就拒 绝该请求，返回 4xx 错误
  - 2/s, 5/m, 10/h, 100/d
  - 无需做到最近30秒，最近21分钟这样的限制。粒度太 细意义不大

## Service 服务

本身就是一个最小的 Application 了，无法再细分

## Storage 存储

- 需要记录(log)某个特征（feature）在哪个时刻（time）做了什么事情（event）
- 该数据信息最多保留一天（对于 rate=5/m 的限制，那么一次log在一分钟以后已经没有存在的意义了）
- 必须是可以高效存取的结构（本来就是为了限制对数据库的读写太多，所以自己的效率必须高与数据库）
- 所以使用 Memcached 作为存储结构（数据无需持久化）

### 算法描述

用 event+feature+timestamp 作为 memcached 的key

- 记录一次访问：

  - 代码：memcached.increament(key, ttl=60s)
  - 解释：将对应bucket的访问次数+1，设置60秒后失效

- 查询是否超过限制

  - 代码：

    ```java
    for t in 0~59 do
    	key = event+feature+(current_timestamp-t)
    	sum += memcached.get(key, default=0)
    ```

  - Check sum is in limitation

  - 解释：把最近1分钟的访问记录加和

## Scale

问：对于一天来说，有86400秒，检查一次就要 86k 的 cache 访问，如何优化？

**分级存储**

- 之前限制以1分钟为单位的时候，每个bucket的大小是1秒，一次查询最多60次读
- 现在限制以1天为单位的时候，每个bucket以小时为单位存储，一次查询最多24次读
- 同理如果以小时为单位，那么每个bucket设置为1分钟，一次查询最多60次读

问：上述的方法中存在误差，如何解决误差？

- 首先这个误差其实不用解决，访问限制器不需要做到 绝对精确。
- 其次如果真要解决的 话，可以将每次log的信息分别存入3级的bucket（秒，分钟，小时）
- 在获得最近1天的访问次数时，比如当前时刻是23:30:33，加总如下的几项：
  - 在秒的bucket里加和 23:30:00 ~ 23:30:33（计34次查询）
  - 在分的bucket里加和 23:00 ~ 23:29（计30次查询）
  - 在时的bucket里加和 00 ~ 22（计23次查询）
  - 在秒的bucket里加和昨天 23:30:34 ~ 23:30:59 （计26次查询）
  - 在分的bucket里加和昨天 23:31 ~ 23:59（计29次查询）
  - 总计耗费 34 + 30 + 23 + 26 + 29 = 142 次cache查询，可以接受