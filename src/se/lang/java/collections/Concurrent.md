# 并发容器

Vector, Stack, HashTable 都是全局锁，每个方法都在同一个锁上同步

- **`ConcurrentHashMap`** : 线程安全的 `HashMap`，`ConcurrentHashMap`并不是将每个方法都在同一个锁上同步并使得每次只能有一个线程访问容器，而是使用一种粒度更细的加锁机制—**分段锁**来实现更大程度的共享。1.8以后是每个 Node 一把锁
- **`ConcurrentSkipListMap`** : 跳表的实现。这是一个 Map，使用跳表的数据结构进行快速查找。
- **`ConcurrentSkipListSet`** : 跳表的实现。这是一个 Set，使用跳表的数据结构进行快速查找。
- **`ConcurrentLinkedQueue`** : 高效的并发队列，使用链表实现。可以看做一个线程安全的 `LinkedList`，这是一个非阻塞队列。
- **`BlockingQueue`** : 这是一个接口，JDK 内部通过链表、数组等方式实现了这个接口。表示阻塞队列，非常适合用于作为数据共享的通道。
- **`CopyOnWriteArrayList`** : 线程安全的 `List`，在读多写少的场合性能非常好，远远好于 `Vector`。
- **`CopyOnWriteArraySet`** : 线程安全的 `Set`，在读多写少的场合性能非常好。

## Map

### ConcurrentHashMap

#### Java 8

对 Node 加锁

![Java8 ConcurrentHashMap 存储结构](https://oss.javaguide.cn/github/javaguide/java/collection/java8_concurrenthashmap.png)

Java8 的 ConcurrentHashMap 相对于 Java7 来说变化较大，不再是之前的 **Segment 数组 + HashEntry 数组 + 链表**，而是 **Node 数组 + 链表 / 红黑树**。当冲突链表达到一定长度时，链表会转换成红黑树。

##### initTable

从源码中可以发现 `ConcurrentHashMap` 的初始化是通过**自旋和 CAS** 操作完成的。里面需要注意的是变量 `sizeCtl` ，它的值决定着当前的初始化状态。

1. -1 说明正在初始化
2. -N 说明有 N-1 个线程正在进行扩容
3. 0 表示 table 初始化大小，如果 table 没有初始化
4. \>0 表示 table 扩容的阈值，如果 table 已经初始化。

#### Java 7

对段加锁

![Java7 ConcurrentHashMap 存储结构](https://oss.javaguide.cn/github/javaguide/java/collection/java7_concurrenthashmap.png)

Java7 中 `ConcurrentHashMap` 使用的分段锁，也就是每一个 Segment 上同时只有一个线程可以操作，每一个 `Segment` 都是一个类似 `HashMap` 数组的结构 hashEntry，它可以扩容，它的冲突会转化为链表。但是 `Segment` 的个数一但初始化就不能改变。

`Segment` 继承了 `ReentrantLock`，所以 `Segment` 是一种可重入锁，扮演锁的角色。`HashEntry` 用于存储键值对数据。

一个 `ConcurrentHashMap` 里包含一个 `Segment` 数组，`Segment` 的个数一旦**初始化就不能改变**。 `Segment` 数组的大小默认是 16，也就是说默认可以同时支持 16 个线程并发写。

`Segment` 的结构和 `HashMap` 类似，是一种数组和链表结构，一个 `Segment` 包含一个 `HashEntry` 数组，每个 `HashEntry` 是一个链表结构的元素，每个 `Segment` 守护着一个 `HashEntry` 数组里的元素，当对 `HashEntry` 数组的数据进行修改时，必须首先获得对应的 `Segment` 的锁。也就是说，对同一 `Segment` 的并发写入会被阻塞，不同 `Segment` 的写入是可以并发执行的。

#### HashTable vs ConcurrentHashMap

共同点：HashTable 与 ConcurrentHashMap 都是线程安全的 Map 集合

不同点：

- HashTable 并发度低，整个 HashTable 对应一把锁，只能有一个线程操作它
- 1.8 之前 ConcurrentHashMap 使用了 Segment + 数组 + 链表，每个 Segment 对应一把锁，如果多个线程访问不同的 Segment，则不会冲突

- 1.8 开始 ConcurrentHashMap 将数组的每个头节点作为锁（这个时候结构也是数组加链表或红黑树），如果多个线程访问的头节点不同，则不会冲突。

#### 使用场景

ConcurrentHashMap 是 Java 中线程安全的哈希表实现，常用于以下场景：

1. 高并发场景：ConcurrentHashMap 支持高并发的读写操作，可以在多线程环境下保证数据的一致性和线程安全性。

2. 缓存场景：ConcurrentHashMap 可以用于缓存数据，提高数据的访问速度和响应速度。

3. 分布式场景：ConcurrentHashMap 可以用于分布式环境下的数据共享和同步，例如多个节点之间共享数据、同步数据等。

4. 数据统计场景：ConcurrentHashMap 可以用于数据统计，例如统计网站的访问量、用户的在线时长等。

总的来说，ConcurrentHashMap 适用于多线程环境下的高并发场景，可以用于缓存、分布式、数据统计等场景。需要注意的是，ConcurrentHashMap 虽然是线程安全的，但是在使用时需要注意一些细节，例如避免死锁、避免竞争等问题。

### ConcurrentSkipListMap

### 线程安全的使用

使用 Colletcions 这个工具类 sync 方法类创建个线程安全的 set.

`Set<String> synSet = Collections.synchronizedSet(new HashSet<>())`

实现比较粗暴，就是在每个方法前加 synchronized

## Collection

### Set

`ConcurrentSkipListSet`

**`CopyOnWriteArraySet`**

### List

#### CopyOnWriteArrayList

#### ConcurrentLinkedQueue

### BlockingQueue

- `ArrayBlockingQueue`、
- `LinkedBlockingQueue`、
- `PriorityBlockingQueue`

blocked queue 双向链表

waiting queue 单向链表，0-多个

在等待队列里面的线程获取锁是有顺序的，外面的线程就是无序的可以直接插队先执行

tryLock(时间)这种会尊从创建锁的时候的公平非公平

无参的 tryLock，不管创建的锁是什么样，他都是非公平执行

#### 条件变量 Condition

然后就会进入等待队列

- notEmpty
- notFull

Lock 唤醒 waiting queue 的线程时，会放入 block queue 的尾部

synchronized 唤醒 waiting queue 的线程时，到 blockde queue 中优先级更高一些
