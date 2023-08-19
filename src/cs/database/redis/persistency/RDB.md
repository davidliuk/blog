# RDB

Rediscover Database Backup file，数据备份文件，数据快照。

### 使用方式

```sh
redis-cli
save # 主进程执行RDB，阻塞所有命令，停机时实际上会自动执行一次，一般是宕机时使用
bgsave # 子进程执行RDB，避免主进程受到影响
```

### 配置参数

在redis.conf中可以找到

```conf
# 保存触发事件和门槛
save 900 1
save 300 10
save 60 1000
# save "" 禁用RDB
# 是否压缩，不建议开启，压缩会消耗CPU，磁盘的话不值钱
rdbcompression yes
# RDB文件名称
dbfilename dump.rdb
# 文件保存路径
dir ./
```

一般设置为60秒尽量减少宕机时数据丢失，但是还是可能会丢失；为什么不能太小，因为写一遍比较耗时

解决方案：AOF来补充



### 原理

bgsave开始时会fork主进程得到子进程，子进程会把页表拷贝一份（非常快，不需要拷贝原始数据）

由于linux的写时复制（Copy on write）技术：有多个调用者（callers）同时请求相同资源（如内存或磁盘上的数据存储），他们会共同获取相同的指针指向相同的资源，直到某个调用者试图修改资源的内容时，系统才会真正复制一份专用副本（private copy）给该调用者，而其他调用者所见到的最初的资源仍然保持不变。

可以防止脏读等情况发生，但是也可能出现内存占用变多的情况（因为主进程写的时候会复制新的内容出来，如果写的很多，额外内存占用就多）

为了防止新写入的数据被fork子进程记录，

![截屏2023-02-16 20.22.39](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/%E6%88%AA%E5%B1%8F2023-02-16%2020.22.39.png)



RDB方式bgsave的基本流程？

- fok主进程得到一个子进程，共享内存空间
- 子进程读取内存数据并写入新的RDB文件
- 用新RDB文件替换I旧的RDB文件。

RDB会在什么时候执行？Save 60 1000代表什么含义？

- 默认是服务停止时。
- 代表60秒内至少执行1000次修改则触发RDB

RDB的缺点？

- RDB执行间隔时间长，两次RDB之间写入数据有丢失的风险
- fork子进程、压缩、写出RDB文件都比较耗时