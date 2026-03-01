# Sample

题目 1: 多选题

### 题目 2：竞态条件 (Race Condition)

**Suppose you have the following functions:**

```
float X=2, Y=4;

void a() {          void b() {          void c() {
  tmp1 = X;           tmp1 = Y;      print("X="+X);
  tmp2 = Y;           tmp2 = X;      print("Y="+Y);
  X = tmp1 + 1;       X = tmp1;         }
  Y = tmp2 - 1;       Y = tmp2;
}                   }
```

*(注：代码 `b()` 的逻辑实质是交换 X 和 Y)*

**(a) Bob invokes a() and b() *at least once* each, possibly from different threads. Which of the following outputs are possible once c() is invoked?**

- X=2, Y=4
- X=3, Y=3
- X=8, Y=8
- X=2.5, Y=5
- X=-4, Y=-6

------

#### **【正确答案与解析】**

**(1) X=2, Y=4 —— 【Yes】**

- **理由**：这是初始状态。因为函数被调用“至少一次”，我们可以通过多次交替调用使状态回到原点。
- **路径示例**：执行一次 `a()` 变成 $(3,3)$，再执行一次 `b()` 还是 $(3,3)$。接着再执行一次 `a()` 变成 $(4,2)$，最后执行一次 `b()`，`X` 和 `Y` 交换，变回 $(2,4)$。

**(2) X=3, Y=3 —— 【Yes】**

- **理由**：这是最标准的串行执行结果。
- **路径示例**：线程 1 执行完整个 `a()`，此时 $X=3, Y=3$。然后无论 `b()` 怎么交换，结果依然是 $X=3, Y=3$。

**(3) X=8, Y=8 —— 【Yes】**

- **理由**：在多线程无锁环境下，**总和 $X+Y=6$ 的约束会被打破**。
- **原理**：通过“丢失更新”或“交错读取”，我们可以让 $X+Y$ 的总和增加或减少。
  - 例如：`b()` 读取了 $Y=4$，然后 `a()` 运行并把 $X$ 增加到 3。接着 `b()` 继续运行，用它之前读到的旧值把 $X$ 改写成 4。此时 sum 变成了 $4+3=7$。
  - 只要总和可以改变，且函数可以被多次调用，理论上可以累加到任何整数值，包括 $X=8, Y=8$。

**(4) X=2.5, Y=5 —— 【No】**

- **理由**：虽然 `X` 和 `Y` 是 `float` 类型，但代码中所有的操作（$+1, -1$）和初始值（$2, 4$）都是**整数**。
- **结论**：在没有除法或浮点数加法的情况下，变量的值永远只能是整数，不可能出现 `.5`。

**(5) X=-4, Y=-6 —— 【Yes】**

- **理由**：同理于选项 (3)。
- **原理**：既然竞态条件可以让总和增加，它也同样可以让总和减少（例如 `a()` 的减法操作被多次成功执行，而加法操作被覆盖丢失）。通过多次循环这种错误的状态，可以达到负数。

#### 变：only once

1. 串行执行结果 (Baseline)

这是最容易想到的两种情况：

- **先执行 `a()`，后执行 `b()`**：
  1. `a()` 执行：$X: 2 \to 3$, $Y: 4 \to 3$
  2. `b()` 执行：交换 $X$ 和 $Y$，结果依然是 **$X=3, Y=3$**。
- **先执行 `b()`，后执行 `a()`**：
  1. `b()` 执行：交换 $X$ 和 $Y$，$X=4, Y=2$。
  2. `a()` 执行：$X: 4 \to 5$, $Y: 2 \to 1$。结果是 **$X=5, Y=1$**。

2. 竞态条件下的交错执行 (Interleaving)

当两个线程并行时，由于 `X` 和 `Y` 是全局变量，可能会发生以下几种“覆盖”情况（假设 `tmp` 变量是线程私有的）：

- **情况 A：`b()` 的写入被 `a()` 部分覆盖**
  - `b()` 读取了初始值并准备写入 $X=4, Y=2$。
  - 但在 `b()` 写入之前，`a()` 已经完成了所有工作并把 $X$ 设为了 3。
  - 接着 `b()` 写入了 $X=4$。此时 $X$ 变成了 4。
  - 如果此时 `a()` 的 $Y$ 写入发生在 `b()` 的 $Y$ 写入之后，最终结果可能是 **$X=4, Y=3$**。
- **情况 B：`a()` 的写入被 `b()` 部分覆盖**
  - `a()` 准备写入 $X=3$。
  - `b()` 抢先读到了旧的 $Y=4$，写入了 $X=4$。
  - 随后 `a()` 写入了 $X=3$。
  - 结果可能是 **$X=3, Y=2$**。

### 题目 3：网络路由与 BGP (Network Routing)

**Context:**

... customer of network 1; Network 4 is a customer of network 3; and Network 5 is a customer of Network 2. Each network has a single IP prefix: Networks 1,2,3,4,5 have prefix A,B,C,D,E, respectively.

**(a) In the following table, indicate which prefix(es) each network advertises:**

| **Net** | **To 1** | **To 2** | **To 3** | **To 4** | **To 5** |
| ------- | -------- | -------- | -------- | -------- | -------- |
| 1       |          | __       | __       |          |          |
| 2       | ______   |          |          |          | ______   |
| 3       | ______   |          |          | ______   |          |
| 4       |          |          | __       |          |          |
| 5       |          | ______   |          |          |          |

**(b) Suppose the link between networks 3 and 4 breaks. Which entries change, and how?**

**(c) Alice is connected to network 5 and Bob is connected to network 4. Will they still be able to... [text cut off, implied: communicate]?**

------

#### **【正确答案与解析】**

这是一个基于 **BGP 路由策略 (Valley-Free Routing)** 的经典填空题。

**核心规则回顾：**

1. **发给 Provider (供应商):** 只通告 **自己** 和 **自己 Customer (客户)** 的路由。（不通告从其他 Provider 学来的）。
2. **发给 Customer (客户):** 通告 **所有** 路由（自己的 + 从 Provider 学来的 + 从其他 Customer 学来的）。
3. **Split Horizon (水平分割):** 通常不会把从对方学来的路由再发回给对方（例如，不会把 E 发回给 Net 5）。

**修正后的完整表格答案**

根据拓扑结构：

- **Net 1** 是顶级 Provider (Prefix A)。
- **Net 2** (Prefix B) 和 **Net 3** (Prefix C) 是 Net 1 的客户。
- **Net 5** (Prefix E) 是 Net 2 的客户。
- **Net 4** (Prefix D) 是 Net 3 的客户。

| **Net** | **To 1 (发给 Provider)** | **To 2 (发给 Customer)** | **To 3 (发给 Customer)** | **To 4 (发给 Customer)** | **To 5 (发给 Customer)** |
| ------- | ------------------------ | ------------------------ | ------------------------ | ------------------------ | ------------------------ |
| **1**   | —                        | **A, C, D**              | **A, B, E**              | —                        | —                        |
| **2**   | **B, E**                 | —                        | —                        | —                        | **A, B, C, D**           |
| **3**   | **C, D**                 | —                        | —                        | **A, B, C, E**           | —                        |
| **4**   | —                        | —                        | **D**                    | —                        | —                        |
| **5**   | —                        | **E**                    | —                        | —                        | —                        |

------

### 

1. **Row 1 (Net 1):**
   - **To 2:** Net 1 是 Net 2 的 Provider。它发送**所有知道的路由**（除了从 2 学来的）。
     - 包括：自己的 (A) + 从 Net 3 学来的 (C, D)。
     - **答案：A, C, D**
   - **To 3:** Net 1 是 Net 3 的 Provider。它发送**所有知道的路由**（除了从 3 学来的）。
     - 包括：自己的 (A) + 从 Net 2 学来的 (B, E)。
     - **答案：A, B, E**
2. **Row 2 (Net 2):**
   - **To 1:** Net 2 是 Net 1 的 Customer。它**只发送自己和下级客户**的路由。
     - 包括：自己的 (B) + 客户 Net 5 的 (E)。
     - **答案：B, E**
   - **To 5:** Net 2 是 Net 5 的 Provider。它发送**所有知道的路由**。
     - 包括：自己的 (B) + 从 Provider 1 学来的所有 (A, C, D)。
     - **答案：A, B, C, D**
3. **Row 3 (Net 3):**
   - **To 1:** Net 3 是 Net 1 的 Customer。它**只发送自己和下级客户**的路由。
     - 包括：自己的 (C) + 客户 Net 4 的 (D)。
     - **答案：C, D**
   - **To 4:** Net 3 是 Net 4 的 Provider。它发送**所有知道的路由**。
     - 包括：自己的 (C) + 从 Provider 1 学来的所有 (A, B, E)。
     - **答案：A, B, C, E**
4. **Row 4 (Net 4):**
   - **To 3:** Net 4 是 Net 3 的 Customer。它只发送自己的路由（因为它没有下级客户）。
     - **答案：D**
5. **Row 5 (Net 5):**
   - **To 2:** Net 5 是 Net 2 的 Customer。它只发送自己的路由（因为它没有下级客户）。
     - **答案：E**



根据你的记忆和对 BGP 经典题型的分析，这道题的原貌应该是一道考察 **Valley-Free 路由原则** 和 **对等关系 (Peering)** 的综合网络题。

以下是基于 **Net 2 和 Net 3 为 Peer** 这一新条件总结的题干、问题及答案。

**题目原貌还原**

**题干背景**

- **层级结构**：Network 2 和 Network 3 是 Network 1 的**客户 (Customers)**；Network 2 和 Network 3 互为**对等体 (Peers)**。
- **延伸结构**：Network 4 是 Network 3 的客户；Network 5 是 Network 2 的客户。
- **前缀分配**：Network 1, 2, 3, 4, 5 分别拥有 IP 前缀 A, B, C, D, E。

**核心路由规则** (Gao-Rexford Rules)

1. **向供应商 (Provider) 通告**：仅通告**自己**和**自己的客户**的前缀。
2. **向客户 (Customer) 通告**：通告**所有已知**的前缀（自己的 + 供应商的 + 对等体的 + 客户的）。
3. **向对等体 (Peer) 通告**：仅通告**自己**和**自己的客户**的前缀（不转发来自供应商或其他对等体的流量）。

**(a) 路由表填空：各网络通告的前缀**

在此条件下，Net 2 和 Net 3 之间的 Peer 关系决定了它们不会互相转发来自 Net 1 的路由。

| **Net** | **To 1 (Prov)** | **To 2 (Peer)** | **To 3 (Peer)** | **To 4 (Cust)** | **To 5 (Cust)** |
| ------- | --------------- | --------------- | --------------- | --------------- | --------------- |
| **1**   | N/A             | **A, C, D**     | **A, B, E**     | N/A             | N/A             |
| **2**   | **B, E**        | N/A             | **B, E**        | N/A             | **A, B, C, D**  |
| **3**   | **C, D**        | **C, D**        | N/A             | **A, B, C, E**  | N/A             |
| **4**   | N/A             | N/A             | **D**           | N/A             | N/A             |
| **5**   | N/A             | **E**           | N/A             | N/A             | N/A             |

- **解析重点**：
  - **Net 2 To 3 (Peer)**：Net 2 只会把自己的 (B) 和客户的 (E) 告诉对等体。它**不会**把从 Net 1 学到的 A, C, D 告诉 Net 3。
  - **Net 3 To 2 (Peer)**：同理，Net 3 只通告 C, D。
  - **Net 2 To 5 (Cust)**：作为 Provider，Net 2 会把全网路由（A, B, C, D）都告诉自己的客户。

(b) 如果 Net 3 和 Net 4 之间的链路断开，哪些条目会改变？

- **消失的前缀**：由于 Net 4 只有 Net 3 这一个供应商，链路断开后，前缀 **D** 会从全网路由表中消失。
- **具体变化**：
  1. **Net 3 To 1**：变为 **C** (删除 D)。
  2. **Net 3 To 2**：变为 **C** (删除 D)。
  3. **Net 1 To 2**：变为 **A, C** (删除 D)。
  4. **Net 2 To 5**：变为 **A, B, C** (删除 D)。

(c) 连接到 Net 5 的 Alice 和连接到 Net 4 的 Bob 还能通信吗？

- **结论**：**不能 (No)**。
- **理由**：
  - **物理中断**：Net 4 与其唯一的上游节点 Net 3 断开，处于孤立状态。
  - **路由不可达**：全网其他节点的路由表中均不再含有前缀 D，因此 Alice 发出的数据包在 Net 2 处就会因为找不到目标路由而被丢弃。

------

**复习建议**：

这道题最核心的考点就是 **“Peer 不会帮它的 Peer 转发来自 Provider 的流量”**。如果下次考试拓扑图变了，只要记住这个“省钱原则”（不免费帮对等体转发付费流量），表格就不会填错。



------

### **题目 4：死锁与并发 (Deadlock)**

**Consider the following program:**

```
int a=2, b=5
lock X, Y, Z

void a() {       void b() {       void c() {       void d() {
  LOCK(X)          LOCK(X)          LOCK(Y)          LOCK(Z)
  LOCK(Y)          LOCK(Y)          LOCK(X)          a = 0;
  a += b;          b += 5;          b -= a;          UNLOCK(Z)
  UNLOCK(Y)        UNLOCK(X)        UNLOCK(X)      }
  UNLOCK(X)        UNLOCK(Y)        UNLOCK(Y)
}                }                }
```

**(a) Under which of the following conditions can this system deadlock?**

- a(), b(), c() are called from a single thread
- a(), b(), c(), and d() are called from a single thread
- One thread repeatedly calls a(), another repeatedly calls b()
- Two threads repeatedly call a() or b()
- Three threads repeatedly call a(), b(), or c()

------

#### **【正确答案与解析】**

- **正确选项：** **Three threads repeatedly call a(), b(), or c()**
- **解析：**
  - `a()` 和 `b()` 的加锁顺序相同（先 X 后 Y），它们之间不会死锁。
  - `c()` 的加锁顺序相反（先 Y 后 X）。
  - 只有当一个线程执行 `a` (或 `b`)，另一个线程执行 `c` 时，才会出现“持有 X 等 Y”和“持有 Y 等 X”的死锁环路。因此必须包含 `c` 的选项才是对的。

------

### 题目 7：Web 服务器安全场景

**Question 7 (10 points)**

Bob operates fancyequipment.com, a web site that sells pricey power tools. To save money, Bob has installed his web server (a very old, slow machine) and his single DNS server in the basement of his company. They are connected to the Internet using a single 1Mbps DSL connection.

**(a) One day, Bob trips over the power cable for the DNS server. The plug falls out, but Bob doesn't notice it right away. Describe what would happen to the web server's workload.**

**(b) Alice, Bob's competitor, is jealous of Bob's success. She wants to reduce the number of customers that can buy things on Bob's web site. What damage can she do with her laptop, assuming Bob is careful [about security and Alice is not able to hack any of his servers]?**

**(c) Bob buys a fancy, powerful new web server and installs it in his basement. Does this prevent Alice's attacks? If so, how? If not, why not?**

**(d) Bob moves the web server and the DNS server to a well-provisioned commercial data center. Can Alice still reduce the number of customers that Bob's web site gets (assuming some criminal energy)? If so, how? If not, why not?**

**(e) What technical solution could Bob use to reliably prevent damage from Alice's attacks?**

------

#### **【正确答案与解析】**

**(a) DNS 断电后，web server 的负载变化？**

**负载降为零。** 客户端访问网站首先需要 DNS 解析将域名转换为 IP 地址。DNS 服务器断电后，所有新的解析请求均失败（注意：已缓存 DNS 记录的用户在 TTL 过期前仍可访问，但 TTL 到期后同样失去访问能力）。因此短时间内负载骤降，最终归零。

**(b) Alice 用笔记本能造成什么破坏？**

**带宽洪泛 DoS 攻击。** Bob 的 DSL 接入带宽仅有 1Mbps，这是极小的瓶颈。Alice 用一台普通笔记本即可发送大量 UDP/ICMP 或 TCP SYN 数据包，将 1Mbps 的上行/下行带宽完全占满，导致合法用户的请求无法到达服务器，实际上无需任何服务器漏洞。

**(c) Bob 换了一台强力新服务器，能防御 Alice 的攻击吗？**

**不能。** 瓶颈不在服务器处理能力，而在 1Mbps 的 DSL 链路本身。无论服务器性能多强，入口带宽被打满后，所有合法流量仍然无法通过。这是网络层的限制，不是计算层的问题。

**(d) Bob 将服务迁移到商业数据中心，Alice 还能减少用户访问吗？**

**可以，但需要更大规模的攻击手段。** 商业数据中心拥有 GB 级甚至 TB 级带宽，单台笔记本无法打满。但题目明确指出"假设 Alice 有一定的犯罪手段（some criminal energy）"，这意味着她可以：

- **租用僵尸网络（Botnet）** 发动大规模 DDoS 攻击，通过数千台受控主机同时发送流量压垮数据中心带宽
- **发动应用层攻击（HTTP Flood）**，用海量合法格式的 HTTP 请求耗尽服务器资源

因此答案是：**仍然可以，手段是 DDoS 攻击。**

**(e) Bob 能用什么技术方案可靠地防御？**

**使用 CDN + DDoS 防护服务（如 Cloudflare、Akamai）。** 具体原理：

- CDN 将流量分散到全球数百个边缘节点，攻击流量被稀释，没有单一入口可以被打满
- DDoS 防护服务在流量进入源站前进行清洗，识别并丢弃恶意流量，只将合法请求转发给 Bob 的服务器
- 同时建议为 DNS 也使用托管 DNS 服务（如 Cloudflare DNS、Route 53），避免单点故障

---

## Sample

### Question 1

单项选择题

### Question 2

给几段无锁的操作全局变量的代码，同时执行，问变量可能的结果

- 

### Question 3

BGP

indicate prefix each network advertises

### Question 4

给几段加锁的函数，分析怎么执行会死锁

### Question 7

DNS



(f) assume bob can't afford your solution from e, what else can/should he do
