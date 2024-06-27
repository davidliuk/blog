# Replication 主从复制

主从复制、读写分离

## 是什么

主负责写，从负责读

redis 读多写少，所以这样比较有效

就是主从复制，master以写为主，Slave以读为主

当master数据变化的时候，自动将新的数据异步同步到其它slave数据库

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
- `slaveof no one` 不做从库  （自立为王

## 工作流程

1. slave 启动，同步初请

  - slave 启动成功连接到master后会发送一个sync命令
  - slave 首次全新连接 master，一次完全同步（全量复制）将被自动执行，slave自身原有数据会被master数据覆盖清空

2. 首次连接，全量复制

  - master节点收到`sync`命令后会开始在`BGSAVE`后台保存快照（即RDB持久化，主从复制时会触发RDB)，同时收集所有接收到的用于修改数据集命令缓存起来，master节点执行RDB持久化完后，master将rdb快照文件和所有缓存的命令发送到所有slave。以完成一次完全同步
  - slave服务在接收到数据库文件数据后，将其存盘并加载到内存中，从而完成复制初始化。

3. 心跳持续，保持通信

  `repl-ping-replica-period 10`每10s发一次心跳包

4. 进入平稳，增量复制

  Master继续将新的所有收集到的修改命令自动依次传给slave,完成同步

5. 从机下线，重连续传

  master会检查backlog里面的offset，master和slave都会保存一个复制的offset还有一个masterId，offset是保存在backlog中的。Master只会把已经复制的offset后面的数据复制给Slave，类似断点续传

## 复制原理

- Redis2.8 之前的 SYNC 方案
- Redis2.8 PSYNC 方案
- Redis4.0 PSYNC2.0 方案

master 为每一个slave单独开辟一块 replication buffer（复制缓存区)来记录RDB文件生成后master收到的所有写命令。

replication buffer 可以通过下面这些参数来控制，超过指定的阈值后，master就会强制断开对应slave的连接。

### SYNC 方案

通过BGSAVE操作属于重量级操作，会对机器的CPU资源和内存资源产生影响。在生产环境中，我们应该尽量避免在master实例上频繁执行BGSAVE命令。

除了上面这个问题之外，Redis在2.8版本之前主从复制还存在下面这些迫切需要解决的问题：

- slave加载RDB的过程中不能对外提供读服务。
- slave和master断开连接之后，slave重新连上master需要重新进行全量同步。

### PSYNC

Redis2.8版本SYNC命令被PSYNC取代，PSYNC格式如下（相比较于SYNC命令，多了两个参数)

```sh
PSYNC replicationid offset
```

PSYNC解决了slave和master断开连接之后需要重新进行全量同步的问题。不过，部分情况（比如slave突然宕机或者被重启）重连之后依然需要进行全量同步。

具体是怎么解决的呢？原理其实也很简单，slave会记录master的运行id（也就是runid）和自己的复制进度/偏移量（slave_repl_offset)。

每个Redis节点启动时都有一个40字节随机字符串作为运行id,你可以通过info server命令查看runid的值。

master也会记录自己写入缓冲区的偏移量（(master_repl_offset),如果runid匹配的话，通过slave_repl_offset和master._repl_offset就可以确认slave缺少的数据是否在缓冲区中以及缺少的具体是哪一部分的数据。

master如何通过复制偏移量找到slave缺少的数据从而避免全量复制呢？

master通过一个环形的复制积压缓冲区(repl_backlog_buffer)来记录从生成RDB文件开始收到的所有写命令。一个master中只有一个复制积压缓冲区，master所有的slave共用。

### PSYNC 2.0



## 缺点

复制延迟，信号衰减

matser 挂了怎么办

- 默认情况下，不会在slave节点中自动重选一个master
- 那每次都要人工干预？希望可以无人值守自动更换

如果master宕机的话，从slave中选出一台作为master即可实现故障转移(Failover).。

类似于MySQL的读写分离，这其实就是一种典型的多副本/备份的思想，经常被用在高可用架构上。
