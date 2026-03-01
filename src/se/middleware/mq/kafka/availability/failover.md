# Failover

当一个 Broker 宕机时，Kafka 是如何处理的？

1. **控制器 (Controller) 检测**：集群中有一个特殊的 Broker 叫 Controller，它通过 ZooKeeper（或 KRaft）监控所有 Broker 的存活状态。
2. **触发选举**：Controller 发现 Leader 副本所在的 Broker 挂了，会从该分区的 ISR 列表中选出一个新的 Leader。
3. **元数据更新**：Controller 将新的 Leader 信息通知给所有 Broker，并更新集群元数据。
4. **客户端更新**：生产者和消费者在下次请求时会获取到最新的元数据，从而将请求发往新的 Leader。

## 脑裂 (Split Brain) 问题怎么解决？

Kafka 引入了 **Controller Epoch**（纪元/版本号）。当新的 Controller 被选出时，Epoch 会增加。旧的 Controller 发出的命令如果携带旧的 Epoch，会被其他 Broker 拒绝，从而防止两个 Controller 同时下达矛盾指令。

| **特性**       | **ZooKeeper 模式**                        | **KRaft 模式**                                               |
| -------------- | ----------------------------------------- | ------------------------------------------------------------ |
| **元数据存储** | 存储在外部的 ZooKeeper 集群中。           | 存储在 Kafka 内部的一个特殊的元数据主题（Metadata Topic）中。 |
| **集群角色**   | Broker + ZooKeeper。                      | Broker + Controller（控制器节点）。                          |
| **选举算法**   | 依赖 ZooKeeper 的 Zab 协议。              | 使用 Kafka 改进版的 **Raft 协议**（即 KRaft）。              |
| **元数据更新** | Controller 监听 ZK，然后推送到各 Broker。 | 采用事件流驱动，Broker 从元数据日志中拉取更新。              |

### 2. 核心区别深度分析

#### ① 元数据管理的效率（核心痛点）

- **ZooKeeper 模式**：元数据存储在 ZK。当 Controller 切换或分区状态变化时，Controller 需要从 ZK 读取所有元数据，再通过 RPC 同步给集群中成百上千个 Broker。这会导致“写放大”和同步延迟，限制了分区上限。
- **KRaft 模式**：元数据以**日志（Log）\**的形式存在。Controller 节点组成一个 Raft 组。所有的元数据变更都是一条条 Log。Broker 就像消费普通消息一样“消费”这些元数据日志。这意味着元数据同步变成了\**异步、流式**的，速度极快。

#### ② 扩展性（Scalability）

- **ZooKeeper 模式**：由于 ZK 的性能瓶颈和 Controller 同步元数据的压力，一个 Kafka 集群通常建议分区数不超过 **20 万**个。
- **KRaft 模式**：理论上支持 **百万级** 甚至更高的分区数量。这对于超大规模的云原生环境和多租户场景至关重要。

#### ③ 故障恢复时间（MTTR）

- **ZooKeeper 模式**：当旧的 Controller 挂掉，新的 Controller 选出后，必须先从 ZK 加载完整的集群元数据（状态重建）。在分区极多时，这个过程可能耗时几分钟，期间整个集群无法进行分区创建、Leader 切换等操作。
- **KRaft 模式**：新的 Controller 已经实时同步了所有的元数据日志，状态是“热备份”的。一旦触发选举，新 Leader 几乎可以**瞬间上线**，大大缩短了不可用时间。

#### ④ 运维复杂度

- **ZooKeeper 模式**：你需要维护两套分布式系统（Kafka + ZooKeeper）。它们有不同的配置、日志、安全协议和监控指标。
- **KRaft 模式**：**只管理 Kafka 即可**。你可以让某些节点既当 Broker 又当 Controller（适合小规模），或者物理隔离。运维成本显著降低。

------

### 3. KRaft 模式下的控制器选举 (Raft 协议)

在 KRaft 模式下，一部分 Broker 会被指定为 **Controllers**。

- 它们之间通过 Raft 协议选出一个 **Active Controller（主控）**。
- 其他的 Controllers 作为副本（Followers），同步元数据日志。
- 这种模式避免了 ZK 模式下的“脑裂”问题，因为 Raft 协议本身就是强一致性的保证。

------

### 4. 为什么 Kafka 一定要抛弃 ZooKeeper？

1. **性能瓶颈**：ZK 是一个通用的协调服务，并不适合存储大量的元数据。
2. **不一致风险**：Kafka 本身的数据一致性（ISR）和 ZK 的一致性是两套逻辑，容易出现状态不一致（例如 ZK 里说 A 是 Leader，但 Broker 还没收到通知）。
3. **云原生趋势**：在 Kubernetes 上部署 ZK 非常繁琐。去掉 ZK 后，Kafka 变成了一个更轻量、单一的二进制文件。

------

### 5. 总结：该选哪个？

- **老旧项目/极度稳定需求**：如果你还在使用 2.x 版本，且现有的 ZooKeeper 集群运行稳定，没有分区过多的压力，可以继续保留。
- **新项目/高性能需求**：**强烈建议使用 KRaft 模式**（Kafka 3.3+）。它代表了 Kafka 的未来，且配置更简单，分区扩展性更强。

**面试官可能会问：** “KRaft 模式下，如果元数据日志损坏了怎么办？” **答：** KRaft 通过 Raft 协议的多副本机制（通常 3 或 5 个 Controller 节点）保证元数据的可靠性。只要多数派存活，元数据就是安全的，且支持快照（Snapshot）机制防止日志过大。