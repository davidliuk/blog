# MySQL Availability

MySQL 高可用需要区分三件事：复制数据、检测故障、把流量安全切换到新节点。Replica 存在不代表系统已经能自动恢复。

## Replication Path

```text
primary commit
  → replication log
  → replica receive / apply
  → replica visible state
```

复制延迟意味着 replica read 可能看不到刚提交的数据。需要按业务语义选择 primary read、read-after-write routing 或接受 eventual consistency。

## Failover Questions

1. 怎样判断 primary 真正不可用，而不是短暂网络隔离？
2. 哪个 replica 数据最新，允许损失多少已确认事务？
3. 怎样防止旧 primary 恢复后继续接受写入？
4. 应用、DNS、proxy 或 service discovery 多久完成切换？
5. 故障后如何重新建立 replication topology？

## Scaling

- **Replica** 主要提供冗余和部分读扩展。
- **Sharding** 把数据与写入分散到多个 primary，但增加路由、跨分片事务、热点和迁移复杂度。
- **Backup** 保护误删除和逻辑损坏；replication 不能替代 backup。

高可用结论需要定期 failover 与 restore 演练，而不是只检查配置存在。
