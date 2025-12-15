# Unix

::: details Syllabus: Introduction to Enterprise Server Systems

## 课程介绍

1. Linux、Unix 用法

   主要是 Linux（相对没有含金量，但是比较重要）

2. 运维硬件的角度

   1. 给很多的脚本
   2. 冗余、故障转移（冗余节点对故障节点的接管）

3. Docker 容器

4. Kubernetes

### Linux

讲生产环节下的 Linux 环境下的东西

一般用 GNU：bash

上班有用，不上班不太有用，学了很快就忘了

理论性和思维性，掌握 Linux 的思维、计算机的思想

### Devops、Kubernetes

prefork 多线程怎么选择模式

教材：Unix and linux system administration handbook

Unix-base 或 VM player

### 分数构成

- 平时作业 50%

  > 非常简单的，一次作业，平时上课学的东西，上课做的东西截图截一截

- 大作业： 50%

  报告，配置一个 Kubernetes 项目

:::

企业级服务器

- 传统 Mainframe
  - Mainframe，追求极高的 availablility，最强的机器
  - 1000 多 w 一台，电费、网费也很贵
  - 钢厂、银行用 mainframe

- 现代 Unix
  - 互联网在 Unix 上发展的
  - availablility，平均两个 failure 之间的时间
  - 阿里巴巴民企唯一一个院士：*王坚*

### UNIX 常见分支

- System V，贝尔实验室的正统的 Unix，init
- BSD，
- POSIX，ieee 指定的标准

Linux kernel 单核

微核、单核

> 工程上用最简单的单核

GNU ：

GPL：

Scientific Linux

SuSe：华晨宝马用的（德国的）

企业级就用 CentOS

人工智能、深度学习主要用的 Ubuntu

涉及到 UNIX 的电影

bladerunner: cyberpunk 鼻祖

gods in the shell：

### UNIX 指令哲学

单一职责原则：任何一个 UNIX 命令都叫做一个软件工具，都是标准输入输出，所以可以串联，需要用到“管道”：`|`用来连接两个命令，eg

```shell
cat /usr/include/stdio.h | grep "#endif" | wc -l
```

标准输出重定向指令：后面+`> 文件名`

标准输入重定向指令：后面+`< 文件名`

命令集合：command1 && command2

该形式将两个命令连接起来，只有当 command1 执行成功时，才会执行 command2。这样可以实现条件执行。

例如，make && make install 表示只有在 make 命令执行成功后，才会执行 make install 命令。
