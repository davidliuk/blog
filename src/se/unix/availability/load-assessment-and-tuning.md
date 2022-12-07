# load assessment and tuning



sar：发现瓶颈在哪，cpu还是io



### When CPU load is high

Top & sar

Ps 看 CPU time

strace 看系统调用



### When I/O load is high



swap 内存不够



数据库I/O多



### prefork





### 多进程 & 多线程

多进程隔离性更好，一个进程挂了不影响别人



多线程，一个线程挂了整个进程都挂了





epoll

nginx和redis都是这个，高性能，多路复用



copy on write多进程多线程没有本质区别

但是上下文切换很大区别



使用work可能提高上下文切换的





现代计算机硬盘瓶颈：IO

1. 硬盘传输慢

   固态快很多

2. 网络传输慢





Hadoop访问硬盘，spark全放内存里，所以spark快很多





内存死亡

很难避免

然后进程死亡可以把所有内存还给系统，就没事了



### Worker mode



多进场多线程



优化：

