# 并发容器



- **`ConcurrentHashMap`** : 线程安全的 `HashMap`
- **`CopyOnWriteArrayList`** : 线程安全的 `List`，在读多写少的场合性能非常好，远远好于 `Vector`。
- **`ConcurrentLinkedQueue`** : 高效的并发队列，使用链表实现。可以看做一个线程安全的 `LinkedList`，这是一个非阻塞队列。
- **`BlockingQueue`** : 这是一个接口，JDK 内部通过链表、数组等方式实现了这个接口。表示阻塞队列，非常适合用于作为数据共享的通道。
- **`ConcurrentSkipListMap`** : 跳表的实现。这是一个 Map，使用跳表的数据结构进行快速查找。



## Map

### ConcurrentHashMap

#### Java 8

对Node加锁。

Java8 的 ConcurrentHashMap 相对于 Java7 来说变化比较大，不再是之前的 **Segment 数组 + HashEntry 数组 + 链表**，而是 **Node 数组 + 链表 / 红黑树**。当冲突链表达到一定长度时，链表会转换成红黑树。



##### initTable

从源码中可以发现 `ConcurrentHashMap` 的初始化是通过**自旋和 CAS** 操作完成的。里面需要注意的是变量 `sizeCtl` ，它的值决定着当前的初始化状态。

1. -1 说明正在初始化
2. -N 说明有N-1个线程正在进行扩容
3. 0 表示 table 初始化大小，如果 table 没有初始化
4. \>0 表示 table 扩容的阈值，如果 table 已经初始化。



#### Java 7

Java7 中 `ConcurrentHashMap` 使用的分段锁，也就是每一个 Segment 上同时只有一个线程可以操作，每一个 `Segment` 都是一个类似 `HashMap` 数组的结构，它可以扩容，它的冲突会转化为链表。但是 `Segment` 的个数一但初始化就不能改变。



#### HashTable vs ConcurrentHashMap

共同点：HashTable 与 ConcurrentHashMap 都是线程安全的Map集合

不同点：

- HashTable 并发度低，整个 HashTable 对应一把锁，只能有一个线程操作它
- 1.8之前 ConcurrentHashMap 使用了 Segment + 数组 + 链表，每个 Segment 对应一把锁，如果多个线程访问不同的 Segment，则不会冲突

- 1.8开始 ConcurrentHashMap 将数组的每个头节点作为锁（这个时候结构也是数组加链表或红黑树），如果多个线程访问的头节点不同，则不会冲突。





### ConcurrentSkipListMap





### 线程安全的使用

使用Colletcions这个工具类syn方法类创建个线程安全的set.

`Set<String> synSet = Collections.synchronizedSet(new HashSet<>())`
