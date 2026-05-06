# Non-crash Fault Tolerance

The Byzantine Generals problem

Impossibility results

Solutions

## Byzantine Fault Model

在之前的课程（如 Paxos）中，系统通常假设节点只会发生崩溃故障（Crash faults）。而拜占庭故障模型允许节点发生**任意形式的偏离协议的行为**。

- **恶意行为**：故障节点不仅可能宕机，还可以发送额外消息、压下本该发送的消息、篡改本地数据、甚至互相合谋。
- **模棱两可（Equivocate）**：这是拜占庭节点最危险的能力之一，即它们可以“两面三刀”，向不同的节点发送不同的消息（例如告诉 A “攻击”，告诉 B “撤退”），从而误导正常节点得出不同的结论。
- **模型约束**：为了使系统设计成为可能，必须对故障进行限制，通常假设在任何给定时间内，系统中最多有 *f* 个节点是拜占庭节点。

## The Byzantine Generals Problem