---
title: Systems Foundations
description: Operating systems and computer networks for understanding backend runtime behavior.
icon: microchip
---

# Systems Foundations

这部分解释代码之下的运行机制：操作系统管理单机资源，计算机网络把多个运行实例连接成服务。它们共同决定延迟、吞吐、隔离和故障的真实边界。

<div class="section-card-grid">
  <a class="section-card" href="./os/">
    <span class="section-card__eyebrow">Inside one machine</span>
    <h3>Operating Systems</h3>
    <p>进程、线程、调度、内存、文件、设备、I/O、缓存与内核边界。</p>
  </a>
  <a class="section-card" href="./network/">
    <span class="section-card__eyebrow">Across machines</span>
    <h3>Computer Networks</h3>
    <p>IP、TCP、QUIC、HTTP、RPC、DNS、代理和内容分发。</p>
  </a>
</div>

## Backend Reading Path

1. [Process & Scheduling](./os/process/)：理解并发执行和上下文切换。
2. [Memory](./os/memory/)：理解虚拟内存、缓存和数据访问成本。
3. [I/O](./os/io/)：理解阻塞、异步和设备交互。
4. [TCP](./network/transport/TCP.md)：理解可靠字节流、重传和拥塞。
5. [HTTP](./network/application/http/)：理解请求语义、连接复用和版本演进。

## Questions to Carry into System Design

- 一个请求在哪里排队、阻塞和切换上下文？
- 数据复制发生在用户态、内核态、网络还是存储层？
- 超时、重试和背压在每一层如何交互？
- 平均延迟正常时，p99 为什么仍然可能恶化？

下一步可进入 [System Design](../design/system/)，把运行机制映射到服务架构。
