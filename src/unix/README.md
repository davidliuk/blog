# 企业级服务器系统导论



## 课程章程

1. Linux、Unix用法

   主要是Linux（相对没有含金量，但是比较重要）

2. 运维硬件的角度

   1. 给很多的脚本
   2. 冗余、故障转移（冗余节点对故障节点的接管）
   
3. Docker容器

4. Kubernetes



Linux

讲生产环节下的Linux环境下的东西



一般用GNU：bash



上班有用，不上班不太有用，学了很快就忘了



理论性和思维性，掌握Linux的思维、计算机的思想

Devops、Kubernetes



prefork多线程怎么选择模式



教材：Unix and linux system administration handbook



Unix-base或VM player



## 分数构成

平时作业 50%

> 非常简单的，一次作业，平时上课学的东西，上课做的东西截图截一截

大作业： 50% 报告



mainframe，追求极高的availablility，最强的机器

1000多w一台，电费、网费也很贵



钢厂、银行用mainframe



阿里巴巴民企唯一一个院士：wangjian



互联网在Unix上发展的



availablility

平均两个failure之间的时间，

shell编程



### UNIX 常见分支

- System V，贝尔实验室的正统的Unix，init
- BSD，
- POSIX，ieee指定的标准



Linux kernel 单核

微核、单核

> 工程上用最简单的

GNU ：

GPL：



Scientific Linux

SuSe：华晨宝马用的（德国的）



企业级就用CentOS

人工智能深度学习主要用的Ubuntu



涉及到UNIX的电影

bladerunner：cyberpunk鼻祖

gods in the shell：



UNIX指令哲学

单一职责原则：任何一个UNIX命令都叫做一个软件工具，都是标准输入输出，所以可以串联，需要用到“管道”：`|`用来连接两个命令，eg

```shell
cat /usr/include/stdio.h | grep #endif | wc -l
```

标准输出重定向指令：后面+`> 文件名`

标准输入重定向指令：后面+`< 文件名`（sort有点bug）

