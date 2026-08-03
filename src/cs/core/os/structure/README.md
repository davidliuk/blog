---
title: Computer System Structure
description: Hardware and operating-system structure from CPU execution and caches to memory and devices.
icon: microchip
---

# Computer System Structure

应用性能最终落在 CPU 指令、缓存、内存和设备 I/O 上。操作系统通过进程、虚拟内存、文件和驱动把这些硬件资源抽象成可共享、可保护的接口。

## Execution Path

```text
program
  → system call / runtime
  → kernel scheduler and virtual memory
  → CPU cores and cache hierarchy
  → memory controller or device
```

## Layers

| Layer | Provides | Typical cost |
| --- | --- | --- |
| CPU core | 指令执行、寄存器、流水线 | branch、dependency、context switch |
| Cache | 低延迟数据副本 | miss、coherence、false sharing |
| Main memory | 大容量易失存储 | latency、bandwidth、NUMA distance |
| Device / storage | 网络、磁盘和外设 | queue、interrupt、DMA、I/O wait |
| Kernel | 隔离、调度和统一资源接口 | syscall、copy、lock、scheduling |

## Notes

- [Cache Hierarchy](./cache.md)

## Performance Reasoning

1. 先判断工作是 compute-bound、memory-bound 还是 I/O-bound。
2. 吞吐下降不一定代表 CPU 满；排队可能发生在锁、内存或设备。
3. 平均延迟会隐藏 cache miss、page fault 和 I/O tail。
4. 优化必须连接 workload、访问局部性和实际硬件，不只看算法复杂度。
