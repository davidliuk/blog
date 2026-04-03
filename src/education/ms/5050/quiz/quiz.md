# Quiz

## Processes

#### What does the program output?

![Screenshot 2026-01-22 at 9.08.28 AM.png](https://activity-images.polleverywhere.com/xhiE32cZqwvxZzoCzKdQVMzUowjj5ZboV6m3HEA1F2wA4JY2iNSoFAJU7Q1gzDyA.png)

- 1 then 0, or 0 then 1
- **1 then 1, or 2 then 0**
- 1 then 2, or 2 then 1
- 0 then 2, or 1 then 1
- Outputs many lines and does not terminate
- ---

##### 情况 A：竞争读取（1 then 1）

1. 父进程写入 1 字节，子进程写入 1 字节。此时管道内存有 **2 字节**。
2. 父进程执行 `read`，读取了 **1 字节**，打印 `1`。
3. 子进程执行 `read`，读取了剩下的 **1 字节**，打印 `1`。

- **输出：1 then 1**（顺序可能相反）。

##### 情况 B：一个进程抢先读取全部（2 then 0）

1. 父进程和子进程都完成了写入。此时管道内存有 **2 字节**。
2. 父进程（或子进程）率先执行 `read`。由于管道里有 2 字节，且 `buf` 大小为 10，`read` 会**一次性读完所有数据**。此时 `n = 2`，打印 `2`。
3. 另一个进程随后执行 `read`。此时管道已空，且由于两个进程都已经执行了 `close(fds[1])`，管道的写端引用计数降为 0。`read` 发现没有写端了，直接返回 `0` (EOF)。打印 `0`。

- **输出：2 then 0**（或 0 then 2）。

## Communication

#### Quiz 1: Which is the most likely cause?

1. a) TCP stalled due to full receiver buffer
2. b) Improper server-side session handling
3. **c) Asymmetric IP routing (different paths from/to the server)**
4. d) DNS naming resolution failure

**解析：** 这是一个非常经典的复杂网络问题。非对称路由（去程和回程路径不同）会导致防火墙状态检测失败、延迟波动或 TCP 性能下降。你的选择是准确的。

#### Quiz 2: Which approach to use?

1. a) Force all clients to use the same CPU architecture
2. b) Use TCP to ensure reliable communication
3. **c) Serialize multi-byte fields into network byte order before transmission&nbsp;and deserialize at receiver**
4. d) Use smaller packet sizes

**解析：** 非常正确。因为不同的 CPU 架构（如 x86 和 ARM）可能使用不同的字节序（大端或小端），如果不统一转换成**网络字节序（Network Byte Order，通常是大端）**，接收方解析出的数字就会变成乱码。

#### Quiz 3: Which is NOT the difference between stream vs. datagram sockets?

1. a) Data is sent as messages in datagram sockets, and as a stream of bytes in stream sockets
2. b) Message delivery is reliable with stream sockets, but not with datagram sockets
3. c) Port numbers are supported for stream sockets, but not for datagram sockets (your response)
4. d) Stream sockets ensures in-order data delivery, datagram sockets do not

**解析：** 完全正确。**端口号（Port numbers）**是传输层（Transport Layer）的概念，无论是面向连接的 TCP（Stream）还是无连接的 UDP（Datagram），都必须使用端口号来区分不同的应用程序进程。

#### Which is not a layer of the OSI model?

1. Session
2. Presentation
3. Datalink
4. **Logical**

**解析：** 正确。OSI 七层模型包括：物理层、数据链路层（Datalink）、网络层、传输层、会话层（Session）、表示层（Presentation）和应用层。并没有所谓的“逻辑层”。

#### With little-endian encoding, which comes first?

1. The lowest-order byte (your response)
2. The highest-order byte
3. The byte in the middle
4. A random byte

**解析：** 正确。在 **小端序（Little-endian）** 中，数据的“小端”（低位字节）存储在内存的低地址端。例如，`0x1234` 会被存储为 `34 12`。

#### Which are best use cases for stream socket?

1. Streaming live video over the Internet
2. **Accessing your Path@Penn**
3. **Transferring large files**
4. Looking up a name in a directory

---

**Stream Sockets** 胜在“稳”和“准”，适用于：

1. **文件传输** (FTP)
2. **电子邮件** (SMTP/IMAP)
3. **远程登录** (SSH)
4. **网页浏览** (HTTP/HTTPS)

### RPC

#### Differences between an RPC and a local function call?

1. (a) RPCs require extra parameters to identify the server.
2. **b) RPCs typically have higher latency.**
3. c) RPCs can only support functions with call-by-value semantics.
4. d) RPCs can fail whereas local functions do not.
5. e) I don't know

**为什么选 c？** 在本地调用中，我们可以传递**指针（Pointer）\**或\**引用（Reference）**，因为父子函数共享同一个内存地址空间。但在 RPC 中，客户端和服务器运行在不同的机器上，内存是不共享的。因此，RPC 必须将参数序列化并拷贝一份发给服务端（即 **Call-by-value**）。

**关于其他选项：**

- **b) 和 d)** 其实也是正确的描述（RPC 延迟更高，且可能因为网络问题失败），但在分布式系统理论中，**语义（Semantics）**上的限制（如无法传递内存指针）通常被认为是最本质的区别。

#### To reduce overhead, Alice's program first calls an asyn RPC to a server, then waits until the server returns a result using another asyn RPC. Does it achieve her goal?

1. Yes
2. **No**
3. Unsure

#### Select the correct reason and fix.

1. Memory leaks due to retries; clearing memory.
2. **Thread exhaustion; reject new retry requests**
3. Head of line blocking; increase worker pool size
4. Deadlock; use semaphore

Alice 的设计实际上引入了经典的 **“双重等待”** 或 **“回调地狱”** 问题。

1. **资源开销：** 即使使用了异步调用，如果 Alice 的程序在“等待服务器返回结果”期间仍然占用着某些关键资源（如线程池中的 Worker Thread 或网络连接），当请求量增大时，会导致**线程耗尽（Thread Exhaustion）**。
2. **重试机制的副作用：** 在分布式环境中，如果 RPC 超时触发了自动重试，而原本的请求其实还在处理中，系统就会堆积大量重复请求，进一步恶化线程耗尽的情况。
3. **修复建议：** 应该引入**拒绝服务（Backpressure）**机制，或者改用真正的**事件驱动（Event-driven）**架构（例如使用 `Promises` 或 `Futures`），确保在等待期间不阻塞工作线程。

## Naming

#### Select all correct statements

1. **In asynchronous systems, flooding guarantees a request will reach all nodes in the network if there is no network partition**
   1. 只要网络没有分区（Partition），洪泛算法（Flooding）最终会覆盖所有连通的节点。

2. **In iterative DNS naming resolution, the root servers retain no state of the client requests**
   1. 迭代查询中，根服务器只负责返回下一级服务器的地址，它是无状态的。

3. Anycast DNS guarantees globally consistent answers
4. DNSSEC can defend against DDoS attacks
5. In P2P network, a new node can join the system without knowledge of an existing node in the network
6. **DNSSEC provides authenticity but not confidentiality.**
   1. 它使用数字签名保证数据没被篡改（真实性），但并不对查询内容加密（非机密性）。

7. In Akamai, small TTL is used to improve latency


## Clock synchronization

#### NTP Review: How to fix the offset spike?

1. **Synchronize more frequently**
2. Increase response timeout
3. Use NTP multicast to reduce overhead
4. Use NTP manycast to find a closer server

**解析：** NTP 的漂移（Drift）是随时间累积的。如果同步频率太低，两次校准之间的偏移量（Offset）会变得很大。通过增加同步频率，可以使时钟时刻保持在较小的误差范围内，从而平滑 Offset 的突跳。

#### In a distributed system that assigns Lamport clock L(e) and Vector clock V(e) to events. Select all true statements.

1. If L(a) < L(b), then a --> b
   1. 这是 Lamport 时钟最经典的陷阱。Lamport 时钟满足 **$a \to b \implies L(a) < L(b)$**，但**反向不成立**。如果 $L(a) < L(b)$，它们可能具有因果关系，也可能是并发（Concurrent）的。

2. **If V(a) < V(b), then a --> b**
   1. 向量时钟（Vector Clock）的强大之处就在于它是**充分必要条件**。$V(a) < V(b)$ 意味着 $a$ 确实在因果上先于 $b$。

3. If L(a) < L(b), then V(a) < V(b)
   1. “不可比”意味着事件是**并发（Concurrent）**的。在分布式系统中，并发意味着它们之间没有因果关系，并不代表它们在物理时钟上的时刻完全相同。

4. If V(a) and V(b) are incomparable, events a and b are guaranteed to take place at the same physical time
   1. “不可比”意味着事件是**并发（Concurrent）**的。在分布式系统中，并发意味着它们之间没有因果关系，并不代表它们在物理时钟上的时刻完全相同。

5. If V(a) < V(b), then a occurs before b in real time
6. **Logical clocks track ordering among events whereas physical clock tracks physical time**
   1. 这是两者的定义区别。

7. It is always strictly better to use Vector clock than Lamport clock because Vector clock captures causality whereas Lamport clock does not
   1. 并不总是“更好”。向量时钟的存储和传输开销是 $O(N)$（$N$ 是节点数），而 Lamport 时钟只需一个整数。在不需要追踪精确因果关系的场景下，Lamport 更高效。

## Group communication

####  Select all correct statements

1. Total ordering implies FIFO ordering but not causal
   1. 全序（Total Ordering）只保证所有接收者以**相同的顺序**接收消息，但这个顺序不一定符合发送者的发送顺序（FIFO）或因果顺序（Causal）。

2. FIFO ordering implies causal ordering
   1. 两个不同发送者发送的消息可能具有因果关系，但 FIFO 只能保证同一个发送者的消息顺序。

3. **Causal ordering implies FIFO ordering**
   1. 因果序是 FIFO 的超集。如果 $a$ 发生在 $b$ 之前（同一个人发送），那么 $a \to b$，因果序必须保证 $a$ 在 $b$ 之前交付。

4. If a sender multicasts m1 before m2, total ordering guarantees m1 is delivered before m2
   1. 理由同第一条。全序可能让所有人都先收到 $m2$ 再收到 $m1$（只要大家都一致就行）。



