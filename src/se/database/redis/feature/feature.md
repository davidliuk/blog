# 新特性



## Redis 7

- Redis Function

  用来部分取代 lua 脚本

  EVALSHA
  更低开销
  RDB,AOF均可持久化支持自动加载
  主从切换不丢失

- Client-eviction

- Multi-part AOF

  变成三个文件

- ACL

- listpack 替代 ziplist

- 底层性能优化