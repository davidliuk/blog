# Replication 主从复制

> 主从复制、读写分离

## 是什么

- 主负责写
- 从负责读

redis 读多写少，所以这样比较有效

当 master 数据变化的时候，自动将新的数据异步同步到其它 slave 数据库

## 能干嘛

- 读写分离
- 容灾恢复
- 数据备份
- 水平扩容支持高并发

## 使用

配从库不配主库

权限细节，重要

基本操作命令

### 命令

- `info replication` 可以查看复制节点的主从关系
- `replicaof 主库IP 主库端口` （主从复制
- `slaveof 主库IP 主库端口` （改换门庭
- `slaveof no one` 不做从库 （自立为王

## 工作流程

1. slave 启动，同步初请

   - slave 启动成功连接到 master 后会发送一个 sync 命令

   - slave 首次全新连接 master，一次完全同步（全量复制）将被自动执行，slave 自身原有数据会被 master 数据覆盖清空


2. 首次连接，全量复制

   - master 节点收到`sync`命令后会开始在`BGSAVE`后台保存快照（即 RDB 持久化，主从复制时会触发 RDB)，同时收集所有接收到的用于修改数据集命令缓存起来，master 节点执行 RDB 持久化完后，master 将 rdb 快照文件和所有缓存的命令发送到所有 slave。以完成一次完全同步

   - slave 服务在接收到数据库文件数据后，将其存盘并加载到内存中，从而完成复制初始化。


3. 心跳持续，保持通信
   - `repl-ping-replica-period 10`每 10s 发一次心跳包

4. 进入平稳，增量复制
   - Master 继续将新的所有收集到的修改命令自动依次传给 slave,完成同步

5. 从机下线，重连续传
   - master 会检查 backlog 里面的 offset，master 和 slave 都会保存一个复制的 offset 还有一个 masterId，offset 是保存在 backlog 中的。Master 只会把已经复制的 offset 后面的数据复制给 Slave，类似断点续传

## 复制原理

- Redis2.8 之前的 SYNC 方案
- Redis2.8 PSYNC 方案
- Redis4.0 PSYNC2.0 方案

master 为每一个 slave 单独开辟一块 replication buffer（复制缓存区)来记录 RDB 文件生成后 master 收到的所有写命令。

replication buffer 可以通过下面这些参数来控制，超过指定的阈值后，master 就会强制断开对应 slave 的连接。

### SYNC

通过 BGSAVE 操作属于重量级操作，会对机器的 CPU 资源和内存资源产生影响。在生产环境中，我们应该尽量避免在 master 实例上频繁执行 BGSAVE 命令。

除了上面这个问题之外，Redis 在 2.8 版本之前主从复制还存在下面这些迫切需要解决的问题：

- slave 加载 RDB 的过程中不能对外提供读服务。
- slave 和 master 断开连接之后，slave 重新连上 master 需要重新进行全量同步。

### PSYNC

Redis2.8 版本 SYNC 命令被 PSYNC 取代，PSYNC 格式如下（相比较于 SYNC 命令，多了两个参数)

```sh
PSYNC replicationid offset
```

PSYNC 解决了 slave 和 master 断开连接之后需要重新进行全量同步的问题。不过，部分情况（比如 slave 突然宕机或者被重启）重连之后依然需要进行全量同步。

具体是怎么解决的呢？原理其实也很简单，slave 会记录 master 的运行 id（也就是 runid）和自己的复制进度/偏移量（slave_repl_offset)。

每个 Redis 节点启动时都有一个 40 字节随机字符串作为运行 id,你可以通过 info server 命令查看 runid 的值。

master 也会记录自己写入缓冲区的偏移量（(master_repl_offset),如果 runid 匹配的话，通过 slave_repl_offset 和 master.\_repl_offset 就可以确认 slave 缺少的数据是否在缓冲区中以及缺少的具体是哪一部分的数据。

master 如何通过复制偏移量找到 slave 缺少的数据从而避免全量复制呢？

master 通过一个环形的复制积压缓冲区(repl_backlog_buffer)来记录从生成 RDB 文件开始收到的所有写命令。一个 master 中只有一个复制积压缓冲区，master 所有的 slave 共用。

### PSYNC 2.0

## 缺点

复制延迟，信号衰减

matser 挂了怎么办

- 默认情况下，不会在 slave 节点中自动重选一个 master
- 那每次都要人工干预？希望可以无人值守自动更换

如果 master 宕机的话，从 slave 中选出一台作为 master 即可实现故障转移(Failover).。

类似于 MySQL 的读写分离，这其实就是一种典型的多副本/备份的思想，经常被用在高可用架构上。
