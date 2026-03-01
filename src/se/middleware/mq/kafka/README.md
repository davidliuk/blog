# Kafka

- **Producer & Consumer**: 生产者负责发送消息，消费者通过 **Consumer Group（消费组）** 实现负载均衡和容错。
- **Broker**: Kafka 实例。多个 Broker 组成一个 Cluster。
- **Topic & Partition**: Topic 是逻辑上的分类，Partition 是物理上的分区。**分区是 Kafka 并行度的最小单位**。
- **Replica（副本）**: 每个 Partition 有多个副本，分为 **Leader**（负责读写）和 **Follower**（只负责同步数据）。
- **Offset**: 消息在分区中的唯一序号，消费者通过 Offset 记录消费进度。

