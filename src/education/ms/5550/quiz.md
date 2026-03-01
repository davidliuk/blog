### Internet Basics

| **目的地关系**                 | **通告内容**                                        |
| ------------------------------ | --------------------------------------------------- |
| **通告给客户 (To Customer)**   | **所有前缀** (Self + Customers + Peers + Providers) |
| **通告给对等体 (To Peer)**     | **Self + Customers**                                |
| **通告给供应商 (To Provider)** | **Self + Customers**                                |

![image-20260217144530297](https://gcore.jsdelivr.net/gh/davidliuk/images@master/blog/image-20260217144530297.png)

- Consider Network 3 and its customer, Network 2. Which path (s) does Network 2 announce to Network 3？
  - **A, B, C**
  - 通告给 **Provider（供应商）** 时，AS 必须通告 **自己拥有的前缀** 以及 **从客户处学到的前缀**。
    - Network 2 自己拥有前缀 **C**。
    - Network 2 从其客户 Network 1 处学到了 **A, B**。
    - 因此，它会将 A, B, C 全部告诉 Network 3。
- Consider Network l and its provider, Network 2.Which path (s) does Network 2 announce to Network1! 
  - C,D,E,F
  - 通告给 **Customer（客户）** 时，AS 会通告 **它知道的所有最优路径**（包括来自供应商、对等体和其他客户的路径）。
    - **C** 是自己拥有的。
    - **D** 来自供应商 Net 3。
    - **E** 来自对等体 Net 5。
    - **F** 来自供应商 Net 3（Net 3 从其对等体 Net 4 处学到并传给客户 Net 2）。
- Consider Network 5 and its peer, Network 2. Which path (s) does Network 5 announce to Network 2？
  - E
  - 通告给 **Peer（对等体）** 时，只通告 **自己拥有的前缀** 和 **从客户处学到的前缀**。
    - Network 5 自己拥有 **E**。
    - Network 5 在这个拓扑中没有客户（Net 3 是它的供应商），因此只通告 E。
- Consider Network 3 and its custom r, Network 2. Which path (s) does Network 3 announce to Network 2？
  - D,E,F
  - 同样遵循“通告给客户 = 告知一切”的逻辑。
    - **D** 是自己拥有的。
    - **F** 来自对等体 Net 4。
    - **E** 来自其另一个客户 Net 5。
    - （注：Net 3 通常不会把从 Net 2 学到的 A, B 再传回给 Net 2，因为这会造成路由环路或冗余）。

### Scalability

2/3 of an algorithm can be parallelized, and, with N CPUs, you can get a speedup of N for that part. How many CPUs do you need to speed up the overall algorithm by a factor of 2?

4 CPUS

75% of an algorithm can be parallelized, and the maximum speedup for this part is unlimited (assuming you have enough CPUs) . What is the highest speedup for the overall algorithm you can possibly achieve with parallelization？

4x

60% of an algorithm can be parallelized, and the maximum speedup for the parallelizable part is 6x. What is the maximum speedup for the entire algorithm？

**2**

可并行部分 $f = 60\% = 0.6$，串行部分 $1-f = 0.4$。并行部分的加速比 $S_{parallel} = 6$。

**公式**：$S_{overall} = \frac{1}{(1-f) + \frac{f}{S_{parallel}}}$

### DNS

Which of the following is not a real DNS record?

1. CNAME
2. AAAA
3. **HTTP**
4. MX (your response)

How many servers are handling requests for the root zone on the Internet today?

1. 1
2. 13

3. 27

4. **Much more than 27**

What kind of namespace does DNS have?

1. Flat
2. **Hierarchical (your response)**
3. Two-level (domain+subdomain)
4. Attribute-based

Which machine(s) _always_ know the mapping from a domain foo.com to the corresponding IPv4 address?

1. The local client
2. The name server for bar.com
3. **The authoritative name server for foo.com (your response)**
4. The client's local DNS server
5. The root name servers