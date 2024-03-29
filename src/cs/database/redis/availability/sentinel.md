# Sentinel：故障转移

哨兵：自动故障转移 Failover

## 是什么

吹哨人巡查监控后台 master.主机是否故障，如果故障了根据投票数自动将某一个从库转换为新主库，继续对外服务

无人值守的运维机制

## 干什么

- 主从监控：监控主从 redis)库运行是否正常
- 消息通知：哨兵可以将故障转移的结果发送给客户端
- 故障转移：如果 Master 异常，则会进行主从切换，将其中一个 Slave 作为新 Master
- 配置中心：客户端通过连接哨兵来获得当前 Redis 服务的主节点地址

## 原理

三个哨兵监控一主二从，正常运行中

- SDOWN 主管下线，
- ODOWN 客观下线，需要一定数量的 sentinel,.多个哨兵达成一致意见才能认为一个 master 客观上已经宕掉
- 选举出领导者哨兵
  - 当主节点被判断客观下线以后，各个哨兵节点会进行协商先选举出一个领导者哨兵节点（兵王）并由该领导者节点，也即被选举出的兵王进行 failover(故障迁移)
  - 哨兵领导者，兵王如何选出来的？Raft 算法
- 由兵王选出来新的 master
  - 步骤：
    - 新主登基：
      - redis,conf 文件中，优先级 slave-priority:或者 replica-priority 最高的从节点（数字越小优先级越高）
      - 复制偏移位置 offset?最大的从节点
      - 最小 Run ID 的从节点，字典顺序，ASCII 码
    - **群臣臣服**
      - 执行 slaveof no one 命令让选出来的从节点成为新的主节点，并通过 slaveoft 命令让其他节点成为其从节点
      - Sentinel leader 会对选举出的新 master 执行 slaveof no one 操作，将其提升为 master 节点
      - Sentinel leader 向其它 slave 发送命令，让剩余的 slave 成为新的 master 节点的 slave
    - 旧主拜服
      - 将之前已下线的老 masteri 设置为新选出的新 master 的从节点，当老 masteri 重新上线后，它会成为新 master 的 slave
      - Sentinel leader?会让原来的 master 降级为 slave 并恢复正常工作。

完全由 sentinel 自己独立完成，无需人工干预

## 使用建议

- 哨兵节点的数量应为多个，哨兵本身应该集群，保证高可用

- 哨兵节点的数量应该是奇数

  为什么？

- 各个哨兵节点的配置应一致

- 如果哨兵节点部署在 Docker 等容器里面，尤其要注意端口的正确映射

- 哨兵集群+主从复制，并不能保证数据零丢失（故引出集群）

  选举切换流程至少 5-10 秒钟，造成数据丢失

主从+哨兵少用了，一般就是直接上集群
