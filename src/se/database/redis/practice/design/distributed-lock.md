# Distributed Lock 分布式锁

满足分布式系统或集群模式下多进程可见并且互斥的锁。

- 多进程可见
- 互斥
- 高可用
- 高性能
- 安全性
- 锁自身的特性：
  - 公平、非公平等


## SET NX

### 操作

#### 获取锁

```redis
# 添加锁，NX是互斥，EX是超时时间秒，PX是毫秒
SET lock thread1 EX 10 NX
```

#### 释放锁

由于不是单一指令，需要借助 lua 脚本来保证原子性

> 可以看到，解锁是有两个操作，这时就需要 Lua 脚本来保证解锁的原子性，因为 Redis 在执行 Lua 脚本时，可以以原子性的方式执行，保证了锁释放操作的原子性。

```lua
// 释放锁时，先比较 thread号 是否相等，避免锁的误释放
if redis.call(get,KEYS[1]) == ARGV[1] then
    return redis.call(del,KEYS[1])
else
    return 0
end
```

### 缺点

- **不可重入**

  同一个线程无法多次获取同一把锁

  解决方案：用 hash 加锁，存线程 id 和重入次数，每次加锁前先 lua 脚本判断是否是同一个线程，是的话就重入次数加一，不是的话就加锁。

- **不可重试**

  获取锁只尝试一次就返回 false

- **锁提前过期**

  如果业务逻辑执行时间超过了 `EXPIRE` 时间，锁会自动释放，导致多个线程同时进入临界区。

  > 如果锁的超时时间设置过长，会影响性能；如果过短，超时释放的时候任务还未完成，会出现脏读的情况。

  比如在有些场景中，一个线程 A 获取到了锁之后，由于业务代码执行时间可能比较长，导致超过了锁的超时时间，自动失效，注意 A 线程没执行完，后续线程 B 又意外的持有了锁，可以操作共享资源，那么两个线程之间的共享资源就没办法进行保护了。

  解决方案：基于**续约**的方式设置超时时间，先给锁设置一个超时时间，然后启动一个守护线程，让守护线程在一段时间后，重新设置这个锁的超时时间。（Redisson 中 WatchDog 机制）

  实现方式：写一个守护线程，去判断锁的情况，当锁快失效的时候，再次进行续约加锁，当主线程执行完成后，销毁续约锁即可，不过这种方式实现起来相对复杂。

- **主从一致性问题**

  由于主从有延迟，可能有的在别的节点加锁，有的没有加索成功

  **Redis 主从复制模式中的数据是异步复制的，这样导致分布式锁的不可靠性**。如果在 Redis 主节点获取到锁后，在没有同步到其他节点时，Redis 主节点宕机了，此时新的 Redis 主节点依然可以获取锁，所以多个应用服务就可以同时获取到锁。

  解决方案：

  1. **Redlock** 算法，向集群里面每一个节点都申请，如果成功一半以上，就认为是成功，否则失败

     缺点：慢、消耗大、且仍不是强一致性，好处不如坏处多所以一般不用，Redisson里面也标记 deprecated 了

  2. **Etcd** 基于 Raft 协议，保证强一致性

## Redisson

Redisson 是使用 java 实现的操作 redis 的一个工具，Redisson 可以作为 spring-data 的底层实现，通过 redisTemplate 封装的 api 来使用，Redisson 利用 redis 中的 hash 数据结构来实现获取锁、锁重入和释放锁等。

Redisson 包含了各种分布式锁的实现其中包括了，可重入锁、公平锁、读写锁、联锁、红锁等。java 中常用的锁 Redisson 都有分布式的实现方案。

### 可重入锁机制 (Lua)

Redisson 实现的可重入锁原理跟 java 中的 ReentrantLock 类似，通过 redis 的 hash 数据来获取锁和锁的可重入，redis 的发布订阅消息实现了线程阻塞和重试获取锁。

#### 加锁

Redisson 加锁并不是简单的 `SET key value NX`，而是使用了一段复杂的 Lua 脚本。

- **原子性**：Redis 执行 Lua 脚本是原子的，保证了“判断锁是否存在”、“记录所有者”、“设置过期时间”这三步一气呵成。
- **Hash 结构数据**：Redisson 的锁在 Redis 中是以 **Hash** 数据结构存储的。
  - **Key**: 锁的名字。
  - **Field**: `UUID + ThreadID`（唯一标识当前线程）。
  - **Value**: 锁的重入次数（Integer）。

```lua
-- 判断rediskey是否存在，如果不存在则表示锁没有被其它线程获取
if (redis.call('exists', KEYS[1]) == 0) then
    -- 创建命名为order的hash数据，并且把线程id作为key，1作为value存入hash中
    redis.call('hincrby', KEYS[1], ARGV[2], 1);
    -- 重置redis过期时间
    redis.call('pexpire', KEYS[1], ARGV[1]);
    -- 返回nil在java中就是null
    return nil;
end
-- 到这一步了则表示锁已经被获取了接下来判断获取锁的线程是否是当前线程
if (redis.call('hexists', KEYS[1], ARGV[2]) == 1) then
    -- 如果获取锁成功，代表获取锁次数的value+1
    redis.call('hincrby', KEYS[1], ARGV[2], 1);
    -- 重置redisKey的有效期
    redis.call('pexpire', KEYS[1], ARGV[1]);
    return nil;
end
-- 到了这一步则表示获取锁已经失败了，最后返回redisKey有效期的剩余时间
return redis.call('pttl', KEYS[1]);
```

#### 解锁

```lua
-- 检查锁是否是自己的
if (redis.call('hexists', KEYS[1], ARGV[3]) == 0) then
    -- 如果锁不是自己的直接返回nil
    return nil;
end
-- 释放一次锁之后返回剩余的数量
local counter = redis.call('hincrby', KEYS[1], ARGV[3], -1);
-- 如果counter>0表示锁还未被完全释放
if (counter > 0) then
    -- 重置锁的有效期
    redis.call('pexpire', KEYS[1], ARGV[2]);
    return 0;
else
    -- counter == 0 表示锁被完全释放删除redisKey
    redis.call('del', KEYS[1]);
    -- 发布消息给还在等待获取锁的线程
    redis.call('publish', KEYS[2], ARGV[1]);
    return 1;
end
return nil;
```

### 看门狗机制 (Watch Dog)

这是 Redisson 解决“业务没执行完，锁就过期了”这一经典问题的方案。

- **默认生存时间**：如果不指定 `leaseTime`，默认是 30 秒。
- **自动续期**：只要客户端还持有锁，Redisson 内部会启动一个后台定时任务（Timeout），每隔 **10 秒**（InternalLockLeaseTime / 3）检查一次。如果业务还在跑，就自动把锁的过期时间重置回 30 秒。
- **防止死锁**：如果客户端宕机了，看门狗也随之消失，锁到期后会自动释放。

![img](https://cdn.jsdelivr.net/gh/davidliuk/images@master/blog/968.png)
