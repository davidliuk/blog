# Replication：主从复制

架构图

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

- info replication 可以查看复制节点的主从关系和
- replicaof 主库IP 主库端口 （主从复制
- slaveof 主库IP 主库端口 （改换门庭
- slaveof no one 不做从库  （自立为王

## 复制原理/工作流程

- slave启动，同步初请

  - slave启动成功连接到master后会发送一个sync命令
  - slave首次全新连接master,一次完全同步（全量复制）将被自动执行，slave自身原有数据会被master数据覆盖清

- 首次连接，全量复制

  - master节点收到sync命令后会开始在后台保存快照（即RDB持久化，主从复制时会触发RDB),同时收集所有接收到的用于修改数据集命令缓存起来，master节点执行RDB持久化完后，master将rdb快照文件和所有缓存的命令发送到所有slave,以完成一次完全同步
  - 而slave服务在接收到数据库文件数据后，将其存盘并加载到内存中，从而完成复制初始化

- 心跳持续，保持通信

  `repl-ping-replica-period 10`每10s发一次心跳包

- 进入平稳，增量复制

  Master继续将新的所有收集到的修改命令自动依次传给slave,完成同步

- 从机下线，重连续传

  master会检查backlog里面的offset，master和slave都会保存一个复制的offset还有一个masterId，offset是保存在backlog中的。Master只会把已经复制的offset后面的数据复制给Slave，类似断点续传

## 缺点

复制延迟，信号衰减

matser挂了怎么办

- 默认情况下，不会在slave节点中自动重选一个master
- 那每次都要人工干预？希望可以无人值守自动更换
