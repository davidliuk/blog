# Kafka Availability

Kafka 通过分区副本维持数据冗余，并在 leader 故障时完成角色切换。

## Notes

- [Replication](./replication.md)
- [Failover](./failover.md)

可用性分析应同时考虑 ISR、确认级别、最小同步副本、选举与消费者恢复。
