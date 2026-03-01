# Replication

副本机制

Kafka 每一个 Partition 都有多个副本。

- **Leader 副本**：处理所有读写请求。
- **Follower 副本**：只负责从 Leader 同步数据，不对外提供服务（在 Kafka 2.4+ 之后，Follower 可以在某些场景下提供读服务以缓解压力）。
- **ISR (In-Sync Replicas)**：这是容错的关键。ISR 维护了一组“跟得上 Leader”的副本列表。如果 Leader 宕机，新 Leader 必须从 ISR 中选举产生。

### 1. 为什么 Kafka 不让所有副本都参与读写？

- **一致性复杂**：如果所有副本都能写，维护分布式一致性（如 Paxos/Raft）的开销会极大，降低吞吐量。
- **简化逻辑**：Master-Slave 模型结构简单，通过分区（Partition）已经实现了水平扩展。

### 2. 如果 ISR 为空了怎么办？（Unclean Leader Election）

如果 ISR 里所有副本都挂了，Kafka 有一个配置 `unclean.leader.election.enable`：

- **false (默认)**：不选举。分区不可用，直到 ISR 副本恢复。保证数据安全，牺牲可用性。
- **true**：允许从 OSR（不同步的副本）中选 Leader。保证可用性，但会发生数据丢失。