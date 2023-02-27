# ReentrantReadWriteLock





悲观锁：每次操作前都加锁

乐观锁：版本号机制





### 行锁、表锁

行锁会发生死锁，表锁不会



### 读锁、写锁

写锁：独占锁

读锁：共享锁

都会产生死锁

读锁死锁的场景：

![截屏2023-02-02 21.57.01](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/%E6%88%AA%E5%B1%8F2023-02-02%2021.57.01.png)

写锁死锁的场景：

![截屏2023-02-02 22.00.01](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/%E6%88%AA%E5%B1%8F2023-02-02%2022.00.01.png)



读的时候不能些，写的时候可以读



## 锁降级



获取写锁 -> 获取读锁 -> 释放写锁 -> 释放读锁



