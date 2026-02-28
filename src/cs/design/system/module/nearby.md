# Location Based Service



## Scale

### DB Sharding

目的1：分摊流量

目的2：Avoid Single Point Failure

#### 传统做法：按照前4位 Geohash

数据怎么查询就怎么拆分

查询是按照 4-6位的 geohash

那么拆分就可以按照 4位的 geohash 来 sharding

#### Uber 的做法：按城市 Sharding

难点1：如何定义城市？

难点2：如何根据位置信息知道用户在哪个城市？

> 为什么不能按照其他的比如 user_id 来 sharding？

##### Geo Fence

- 用多边形代表城市的范围
- • 问题本质：求一个点是否在多边形内
  - • 计算几何问题
- • 城市的数目：500个
- • 乘客站在两个城市的边界上怎么办？
  - • 找到乘客周围的2-3个城市
  - • 这些城市不能隔太远以至于车太远
  - • 汇总多个城市的查询结果
  - • 这种情况下司机的记录在存哪个城市关系不大

### Interviewer: How to check rider is in Airport?

同样可以用Geo Fence

类似机场这样的区域有上万个，直接O(N)查询太慢

分为两级Fence查询，先找到城市，再在城市中查询Airport Fence

Read More: http://ubr.to/20qK4F4