# Distributed File System 分布式文件系统

Design Distributed File System

了解分布式文件系统后可以做什么？

1. Google，Microsoft面试可能会考到.
2. 学习经典系统，对其他系统设计也有帮助。比如如何处理failure和recovery.

Hadoop Distributed File System VS. Google File System (GFS) 

## Scenario

> 需要设计哪些功能

- 需求1
  - 用户写入一个文件， 用户读取一个文件.
  - 支持多大的文件？
    - 越大越好？ 比如 >1000T
- 需求2
  - 多台机器存储这些文件
  - 支持多少台机器？
    - 越多越好？

## Service

Client + Server

- Peer 2 Peer
  - Advantage
  - 一台机器挂了还可以工作
  - Disadvantage
  - 多台机器需要经常通信保持他们数据一致
- Master Slave
  - Advantage
  - Simple Design
  - 数据很容易保持一致
  - Disadvantage
  - 单master要挂
- Final Decision
  - Master + Slave
  - 单master挂了重启就是。挂的概率在0.1%

## Storage

> 数据如何存储

- 大文件存在哪？
  - • 内存？硬盘？
- • 怎么存在文件系统里面呢？
  - • 怎么设计GFS？