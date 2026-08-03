---
title: Unix
description: Unix and Linux notes covering shell composition, processes, filesystems, networking, security, and operations.
icon: terminal
---

# Unix

Unix 最重要的不是命令数量，而是组合模型：把小工具通过文本流、管道、文件和进程连接起来，并用统一的权限与资源模型管理系统。

## Mental Model

| Concept | Core question |
| --- | --- |
| Process | 谁创建它、拥有哪些资源、如何通信、怎样退出？ |
| File descriptor | 进程如何统一访问文件、终端、管道和 socket？ |
| Filesystem | 路径、挂载、权限、缓存和持久化怎样连接？ |
| Shell | expansion、quoting、redirection 和 pipeline 的执行顺序是什么？ |
| Network | 名称、地址、端口、路由、防火墙和服务分别在哪里生效？ |
| Service | 怎样启动、监控、限制资源、处理信号和安全关闭？ |

## Learning Path

1. [Basic System Administration](./basic/)：命令、账户、Shell、进程、文件系统、存储、网络与安全。
2. [Availability](./availability/)：冗余、故障检测、切换和恢复。
3. 用一个真实服务练习 systemd、日志、权限、端口和资源限制。
4. 制造磁盘满、进程失控、端口冲突、DNS 失败等故障并完成排查。

## Command-Line Reasoning

```shell
producer | filter | transform | consumer
```

- 管道连接前一个进程的标准输出与后一个进程的标准输入。
- `>`、`>>` 和 `<` 改变文件描述符的来源或目标。
- `&&` 表示前一个命令成功后再继续，不能替代显式错误处理。
- 自动化脚本应使用清晰的 quoting、退出码和可重复执行语义。

## Incident Checklist

1. 症状发生在哪台机器、哪个进程和哪个时间窗口？
2. CPU、内存、磁盘、网络或文件描述符是否饱和？
3. 最近发生了什么配置、发布、流量或依赖变化？
4. 日志中的错误是根因还是下游症状？
5. 当前动作是在止损、恢复，还是永久修复？
