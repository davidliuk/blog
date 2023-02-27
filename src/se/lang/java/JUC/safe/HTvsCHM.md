# HashTable vs ConcurrentHashMap



共同点



HashTable 与 ConcurrentHashMap 都是线程安全的Map集合

HashTable 并发度低，整个 HashTable 对应一把锁，只能有一个线程操作它

1.8之前 ConcurrentHashMap 使用了 Segment + 数组 + 链表，每个 Segment 对应一把锁，如果多个线程访问不同的 Segment，则不会冲突

1.8开始 ConcurrentHashMap 将数组的每个头节点作为锁（这个时候结构也是数组加链表或红黑树），如果多个线程访问的头节点不同，则不会冲突。

