# 秒杀系统



## 数据库设计

- 商品信息表

  `commodity_info`

- 库存信息表

  `stock_info`

- 秒杀活动表

  `seckill_info`

- 订单信息表

  `order_info`

### 扣减库存

先读取，再扣减

会出现并发超卖问题

方案一：

解决问题可以利用事务，select 的时候加入一个 for update，可以加行锁

```sql
select stock FROM
```

但是影响性能

方案二：

修改的时候加判断 stock>0

解决超卖了，但是并发量不行

MySQL，1000 单点 QPS，Redis 单点 10wQPS

通过 Redis 判断并扣减库存

利用 lua 脚本保证原子性（解决 CAS 问题）

### 库存扣减时机

下单时立即减库存

先下单，不减库存。实际支付成功后减库存。

**下单后锁定库存，支付成功后，减库存**

延迟队列

### 限购

### 防止服务雪崩

熔断

### 库存预热

主要考虑两点

- 高性能
- 高可用

## 高性能

### 热点数据缓存

### 流量削峰

- 消息队列
- 回答问题/验证码

## 高可用
