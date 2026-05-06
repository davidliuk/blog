# Fault Tolerance

## Distributed commit

### Atomicity

Either all parts of the transaction are completed, or none of them is!

This is one of the four classical ACID properties from databases

- Atomicity, 
- Consistency, 
- Isolation, 
- Durability

### One-phase commit

We elect one node as the coordinator; the others are subordinates

The coordinator tells all the subordinates whether to finalize their part of the transaction (commit), or whether to undo it (abort)

The subordinates do what they are told, and then acknowledge

#### Problem

1. Subordinate cannot independently abort the transaction
2. Coordinator might crash before subordinate receives the message; partial results are lost

### Two-phase commit (2PC)

#### Round

1. Voting
   - Coordinator sends prepare message to each subordinate
   - Each subordinate responds with yes if it is able to commit its part of the transaction, otherwise with no
     - • If the subordinate needs locks to commit, it needs to acquire them before responding with yes (why?)
2. Decision
   - Coordinator sends commit or abort to each subordinate
   - Each subordinate responds with an ack

#### Logging

为了防止节点在协议执行中途崩溃导致状态丢失，2PC 严重依赖写入持久化存储（如磁盘或 NVRAM）的本地日志（Local log）。2PC 要求每次发送消息表明决策前，必须先将该决定强制记录到日志中，其详细步骤如下：

1. 下属节点收到 prepare 后，会先强制写入一条 prepare 或 abort 日志，然后再向协调者发送 yes 或 no 的投票
2. 协调者收集完投票后，会先强制写入一条 commit 或 abort 的全局决策日志，然后再将这个决定发送给下属节点
3. 下属节点收到决策后，强制写入对应的 commit 或 abort 日志，执行操作，并向协调者回复 ack
4. 协调者在收到所有下属节点的 ack 后，会写入一条 end 日志，标志整个分布式事务的生命周期彻底结束

#### Recovery

当一个节点崩溃并重新启动后，它只需检查自己的本地日志，就能决定下一步的动作：

- 如果日志中有 commit 或 abort 记录，但没有 end 记录：说明全局决策已下达，节点只需重新执行（redo）或撤销（undo）其对应的事务操作即可。如果该节点是协调者，它需要继续向下属节点重发 commit/abort 消息，直到收到所有的 ack 为止
- 如果日志中只有 prepare 记录，没有后续的 commit/abort：说明该下属节点投了 yes，但在接收到最终决策前崩溃了。此时它必须反复联系协调者查询事务状态，得知结果后再写入相应的决策日志并执行，最后写入 end 日志
- 如果日志中连 prepare 记录都没有：说明该节点在投票前就崩溃了。因为它尚未作出任何承诺，所以它可以安全地单方面中止并撤销该事务。如果它是协调者，它会通知下属节点一起中止

#### Problem

**The Blocking Problem**

- 尽管 2PC 解决了基本的分布式原子性问题，但它有一个非常严重的缺陷——在面对协调者崩溃时可能会导致整个系统阻塞。
  当一个下属节点投出 yes 票后，它实际上就把最终的命运交给了协调者
- 如果恰好在这个时候协调者崩溃了（或者由于网络链路故障导致失联），这个下属节点将既不能提交也不能中止，必须一直阻塞（Blocked）等待协调者恢复
- 在此期间，事务所占用的资源（如数据库锁）也无法释放，会严重影响系统性能
- 即使下属节点之间相互认识并尝试沟通，只要大家都没有收到过协调者的最终决定，且大家当时都投了 yes，它们仍然无法安全地推进事务，只能集体陷入阻塞

### Three-phase commit (3PC)

1. 第一阶段：投票（Phase 1: Voting）
   1. 协调者向所有的下属节点发送 `PREPARE` 消息。
   2. 每个下属节点评估自身情况后，回复 `YES` 或 `NO` 的选票。
2. 第二阶段：预提交（Phase 2: Precommit）
   - 如果协调者在第一阶段收到了至少一个 `NO`，它会退回到类似 2PC 的逻辑，直接发送 `ABORT` 消息。
   - 如果所有的选票都是 `YES`，协调者不会立刻让大家提交，而是向至少 *k* **个下属节点**发送 `PRECOMMIT` 消息。**参数** *k* **的精妙设计**：*k* 是一个系统可调参数。假设系统最多允许 *f* 个节点同时故障，那么只要设置 *k*>*f*，就能确保一件事：即使有节点崩溃，剩下的存活节点中也至少有一个人知道预提交的决定，或者那些崩溃的节点根本还没来得及收到最终提交的指令。
   - 收到 `PRECOMMIT` 的下属节点需要回复一个 `ACK` 确认。
3. 第三阶段：正式提交（Phase 3: Commit）
   - 一旦协调者成功收集到了 *k* 个 `ACK` 确认，它才会向每个下属节点发送正式的 `COMMIT` 消息。
   - 下属节点收到 `COMMIT` 后真正执行操作，并回复 `ACK`。

## Logging and recovery

### Centralized checkpointing



### Chandy-Lamport algorithm