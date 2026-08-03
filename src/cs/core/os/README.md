---
title: Operating Systems
description: Operating system foundations covering processes, scheduling, memory, files, I/O, caching, and kernel boundaries.
icon: server
---

# Operating Systems

操作系统把 CPU、内存、设备和持久化资源抽象成进程、地址空间、文件与 I/O 接口。理解这些抽象，才能解释并发、延迟、资源耗尽和隔离问题。

<div class="section-card-grid">
  <a class="section-card" href="./process/">
    <span class="section-card__eyebrow">Execution</span>
    <h3>Process & Scheduling</h3>
    <p>进程、线程、上下文切换、调度和进程间通信。</p>
  </a>
  <a class="section-card" href="./memory/">
    <span class="section-card__eyebrow">Address space</span>
    <h3>Memory</h3>
    <p>虚拟内存、分页、分配、局部性和内存层级。</p>
  </a>
  <a class="section-card" href="./io/">
    <span class="section-card__eyebrow">Data movement</span>
    <h3>I/O & Devices</h3>
    <p>阻塞、非阻塞、异步 I/O、DMA 和设备交互模式。</p>
  </a>
  <a class="section-card" href="./file/">
    <span class="section-card__eyebrow">Persistence</span>
    <h3>File Systems</h3>
    <p>文件抽象、目录、缓存、持久化和访问语义。</p>
  </a>
  <a class="section-card" href="./kernel/">
    <span class="section-card__eyebrow">Protection</span>
    <h3>Kernel Boundary</h3>
    <p>用户态、内核态、系统调用、中断与保护机制。</p>
  </a>
  <a class="section-card" href="./structure/">
    <span class="section-card__eyebrow">Performance</span>
    <h3>Cache & Structure</h3>
    <p>缓存层级与数据布局如何影响真实访问成本。</p>
  </a>
</div>

## Trace One Request

一个服务请求通常会经历：

1. 网卡接收数据并触发内核网络栈；
2. socket 缓冲区保存数据，线程被唤醒或事件循环收到通知；
3. 调度器分配 CPU，应用读取并解析请求；
4. 访问缓存、内存、文件或其他设备；
5. 响应沿相反路径写回网络。

性能分析时要确定时间花在**运行、排队、等待 I/O、缺页、锁竞争**还是**上下文切换**。

## Core Invariants

- 进程拥有隔离的虚拟地址空间，线程共享进程资源。
- 并发不等于并行；执行能力受 CPU 核数、调度与等待状态共同限制。
- 系统调用跨越用户态和内核态边界，但“系统调用多”不自动等于性能差。
- 缓存改善平均访问成本，却引入一致性、淘汰和尾延迟问题。
