# CAP

> [Reference](https://zhuanlan.zhihu.com/p/618127949)

分布式一致性协议

一是因为这两个分布式基础理论是学习分布式知识的必备前置基础，二是因为很多面试官自己比较熟悉这两个理论（方便提问）。我们非常有必要将这两个理论搞懂，并且能够用自己的理解给别人讲出来。

## Consistency Level 一致性级别

- 强一致性 Strong/Strict Consistency

  强一致性协议（共识算法 Consensus）：这些协议的目标是实现 **线性一致性（Linearizability）**，即整个集群看起来像只有一台机器在工作。

  保证系统改变提交以后立即改变集群的状态。

  - Paxos (Basic Paxos)

  - Multi-Paxos

    - Raft

    - ZAB (Zookeeper Atomic Broadcast)
  
- 弱一致性 Weak Consistency

  即最终一致性，系统不保证改变提交以后立即改变集群的状态，但是随着时间的推移最终状态是一致的。

  - Gossip
  - Redis Cluster, Cassandra, Consul, DNS 系统

> **业界比较推崇是最终一致性级别，但是某些对数据一致要求十分严格的场景比如银行转账还是要保证强一致性。**

### Strict Consistency 强一致性

- Sequential Consistency 顺序一致性
- linearizability consistency 线性一致性

#### Paxos

Paxos 由 Leslie Lamport 提出，以“晦涩难懂”著称。它是所有共识算法的基石。

- **核心角色**：Proposer（提议者）、Acceptor（接受者）、Learner（学习者）。
- **工作流程（Basic Paxos）**：
  1. **Prepare 阶段**：Proposer 带着编号 $N$ 向 Acceptors 发起请求。
  2. **Promise 阶段**：Acceptors 承诺不再接受编号小于 $N$ 的提议。
  3. **Accept 阶段**：Proposer 收到多数派回复后，发送正式提议。
  4. **Accepted 阶段**：多数派接受，达成共识。
- **缺点**：Basic Paxos 只能对一个值达成共识；Multi-Paxos 虽能连续达成共识，但实现细节极其复杂。

consensus共识在实现机制上属于复制状态机(Replicated State Machine)的范畴，复制状态机是一种很有效的[容错技术](https://zhida.zhihu.com/search?content_id=225493013&content_type=Article&match_order=1&q=容错技术&zd_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJ6aGlkYV9zZXJ2ZXIiLCJleHAiOjE3NjY3MjY2MjksInEiOiLlrrnplJnmioDmnK8iLCJ6aGlkYV9zb3VyY2UiOiJlbnRpdHkiLCJjb250ZW50X2lkIjoyMjU0OTMwMTMsImNvbnRlbnRfdHlwZSI6IkFydGljbGUiLCJtYXRjaF9vcmRlciI6MSwiemRfdG9rZW4iOm51bGx9.SqT4pN1wFo4UOEGa2Z6aYiurOpUMpc5fJ0rfmdqf0S8&zhida_source=entity)，基于复制日志来实现，每个 Server 存储着一份包含[命令序列](https://zhida.zhihu.com/search?content_id=225493013&content_type=Article&match_order=1&q=命令序列&zd_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJ6aGlkYV9zZXJ2ZXIiLCJleHAiOjE3NjY3MjY2MjksInEiOiLlkb3ku6Tluo_liJciLCJ6aGlkYV9zb3VyY2UiOiJlbnRpdHkiLCJjb250ZW50X2lkIjoyMjU0OTMwMTMsImNvbnRlbnRfdHlwZSI6IkFydGljbGUiLCJtYXRjaF9vcmRlciI6MSwiemRfdG9rZW4iOm51bGx9.59K1fi7y0-gBlcdvOnlxpQ7ZMrPKHSgYYBWLHhA1BTo&zhida_source=entity)的日志文件，状态机会按顺序执行这些命令。因为日志中的命令和顺序都相同，因此所有节点会得到相同的数据。

因此保证系统一致性就简化为保证操作日志的一致，这种复制日志的方式被大量运用，如 GSF、HDFS、ZooKeeper和 [etcd](https://zhida.zhihu.com/search?content_id=225493013&content_type=Article&match_order=1&q=etcd&zd_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJ6aGlkYV9zZXJ2ZXIiLCJleHAiOjE3NjY3MjY2MjksInEiOiJldGNkIiwiemhpZGFfc291cmNlIjoiZW50aXR5IiwiY29udGVudF9pZCI6MjI1NDkzMDEzLCJjb250ZW50X3R5cGUiOiJBcnRpY2xlIiwibWF0Y2hfb3JkZXIiOjEsInpkX3Rva2VuIjpudWxsfQ.f89PTzgvbLg_5At28u3ueWf-9YYXDZ2VaeeEf7kLOWE&zhida_source=entity) 都是这种机制。

#### Raft

Raft 是目前工业界应用最广的协议（如 ETCD, TiDB, Kafka KRaft）。它将 Paxos 拆解为三个子问题：

- **Leader Election（领导选举）**：心跳机制触发，票高者得。
- **Log Replication（日志复制）**：Leader 接收请求，写入日志并广播，收到多数派 ACK 后提交（Commit）。
- **Safety（安全性）**：确保只有拥有最新日志的节点才能成为 Leader。
- **优点**：强序性、逻辑清晰，非常易于实现和调试。

#### ZAP

- **两种模式**：
  - **崩溃恢复**：Leader 挂了，选新 Leader。
  - **消息广播**：类似二阶段提交（2PC），但只需要多数派响应即可提交。
- **与 Raft 区别**：ZAB 更加依赖于全局递增的事务 ID (ZXID)，设计上更倾向于主备模式。

### Weak Consistency 弱一致性

- Causual consistency 因果一致性
- Eventual Consistency 最终一致性

#### Gossip

## CAP 理论

CAP 理论/定理起源于 2000 年，由加州大学伯克利分校的 Eric Brewer 教授在分布式计算原理研讨会（PODC）上提出，因此 CAP 定理又被称作 布鲁尔定理（Brewer’s theorem）2 年后，麻省理工学院的 Seth Gilbert 和 Nancy Lynch 发表了布鲁尔猜想的证明，CAP 理论正式成为分布式领域的定理。

### 简介

Any distributed data store can provide only two of the following three guarantees:

CAP 定理（CAP theorem）指出对于一个分布式系统来说，当涉及读写操作时，只能同时满足以下三点中的两个：

- **一致性（Consistency）**：所有节点访问同一份最新的数据副本
- **可用性（Availability）**：非故障的节点在合理的时间内返回合理的响应（不是错误或者超时的响应）。
- **分区容错性（Partition Tolerance）**：分布式系统出现网络分区的时候，仍然能够对外提供服务。

**网络分区**：分布式系统中，多个节点之间的网络本来是连通的，但是因为某些故障（比如部分节点宕机或网络出问题）某些节点之间不连通了，整个网络就分成了几块区域。

- 取消操作，从而降低可用性，但确保一致性
- 继续操作，从而提供可用性，但存在不一致的风险。请注意，这并不一定意味着系统对用户具有高可用性。

### 不是“3 选 2”

当发生网络分区的时候，如果我们要继续服务，那么强一致性和可用性只能 2 选 1。也就是说当网络分区之后 P 是前提，决定了 P 之后才有 C 和 A 的选择。也就是说分区容错性（Partition tolerance）我们是必须要实现的。

> 简而言之就是：CAP 理论中分区容错性 P 是一定要满足的，在此基础上，只能满足可用性 A 或者一致性 C。

因此，**分布式系统理论上不可能选择 CA 架构，只能选择 CP 或者 AP 架构。** 比如

- ZooKeeper、HBase 就是 CP 架构
- Cassandra、Eureka 就是 AP 架构
- Nacos 支持 CP 架构也支持 AP 架构

**为啥不可能选择 CA 架构呢？** 举个例子：若系统出现“分区”，系统中的某个节点在进行写操作。为了保证 C， 必须要禁止其他节点的读写操作，这就和 A 发生冲突了。如果为了保证 A，其他节点的读写操作正常的话，那就和 C 发生冲突了。

**选择 CP 还是 AP 的关键在于当前的业务场景，没有定论，比如对于需要确保强一致性的场景如银行一般会选择保证 CP 。**

另外，需要补充说明的一点是：**如果网络分区正常的话（系统在绝大部分时候所处的状态），也就说不需要保证 P 的时候，C 和 A 能够同时保证。**

## BASE 理论

BASE 理论起源于 2008 年， 由 eBay 的架构师 Dan Pritchett 在 ACM 上发表。

### 简介

**BASE** 是 **Basically Available（基本可用）**、**Soft-state（软状态）** 和 **Eventually Consistent（最终一致性）** 三个短语的缩写。BASE 理论是对 CAP 中一致性 C 和可用性 A 权衡的结果，其来源于对大规模互联网系统分布式实践的总结，是基于 CAP 定理逐步演化而来的，它大大降低了我们对系统的要求。

### 核心思想

即使无法做到强一致性，但每个应用都可以根据自身业务特点，采用适当的方式来使系统达到最终一致性。

> 牺牲数据的强一致性来满足系统的高可用性，系统中一部分数据不可用或者不一致时，仍需要保持系统整体“主要可用”。

**BASE 理论本质上是对 CAP 的延伸和补充，是对 CAP 中 AP 方案的一个补充。**

CAP 理论这节我们也说过了：

> 如果系统没有发生“分区”的话，节点间的网络连接通信正常的话，也就不存在 P 了。这个时候，我们就可以同时保证 C 和 A 了。因此，**如果系统发生“分区”，我们要考虑选择 CP 还是 AP。如果系统没有发生“分区”的话，我们要思考如何保证 CA **

因此，AP 方案只是在系统发生分区的时候放弃一致性，而不是永远放弃一致性。在分区故障恢复后，系统应该达到最终一致性。这一点其实就是 BASE 理论延伸的地方。

那实现最终一致性的具体方式是什么呢?

- **读时修复** : 在读取数据时，检测数据的不一致，进行修复。比如 Cassandra 的 Read Repair 实现，具体来说，在向 Cassandra 系统查询数据的时候，如果检测到不同节点的副本数据不一致，系统就自动修复数据。
- **写时修复** : 在写入数据，检测数据的不一致时，进行修复。比如 Cassandra 的 Hinted Handoff 实现。具体来说，Cassandra 集群的节点之间远程写数据的时候，如果写失败 就将数据缓存下来，然后定时重传，修复数据的不一致性。
- **异步修复** : 这个是最常用的方式，通过定时对账检测副本数据的一致性，并修复。

比较推荐 **写时修复**，这种方式对性能消耗比较低。

纯粹的 Gossip 协议在实践中可能存在信息冗余的问题，即已接收到某一信息的节点在后续的传播中可能会收到相同的信息。为了避免这种冗余和提高通信效率，这些系统通常会对 Gossip 协议进行优化，例如在节点间记录已知信息的状态，避免重复传播已知的更新。即便如此，Gossip 协议仍然是在大规模分布式系统中实现高可用性和强一致性的有效手段，其高效性体现在只需局部通信即可逐渐达成全局一致性，同时具备良好的扩展性和容错性。
