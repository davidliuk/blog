# lock vs sychronized



## 语法层面

- synchronized是关键字，源码在jvm中，用c++实现
- Lock是接口，源码由jdk提供，用java语言实现
- 使用synchronized时，退出同步代码块锁会自动释放，而使用Lock时，需要手动调用unlock方法释放锁



## 功能层面

- 二者均属于悲观锁，都具备基本的互斥、同步、锁重入功能

  互斥：就是只有一个拿着锁

  同步：

  - synchronize：wait，notify
  - Lock：利用条件变量提供的：await，signal

  锁重入：是否可以对已经加上锁的对象加上第二道、第三道锁，到时候解锁也需要解多道

- Lock提供了许多synchronized不具备的功能，例如获取等待状态、公平锁、可打断、可超时、多条件变量

  公平锁：先来先得（吞吐量不如非公平的高），非公平锁：可以插队

  可打断、可超时：

- Lock有适合不同场景的实现，如ReentrantLock，ReentrantReadWriteLock

  



## 性能层面

- 在没有竞争时，synchronized做了很多优化，如偏向锁、轻量级锁，性能不错
- 在竞争激烈时，Lock的实现通常提供更好的性能

