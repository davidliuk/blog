# Collection 接口

## List 接口

- Vector，List 接口旧的实现，是线程安全的，方法前都
- ArrayList
- LinkedList

（Stack是继承自Vector的类，但是一般不推荐使用，ArrayDeque更快）

### ArrayList

#### 初始容量

如果是无参构造，初始容量是0，加入第一个元素的时候会扩容成10。

#### 扩容机制

当装满的时候，会扩容数组大小为1.5倍。



## Set 接口

### 比较 HashSet、LinkedHashSet 和 TreeSet 三者的异同

- HashSet 是 Set 接口的主要实现类 ，HashSet 的底层是 HashMap，线程不安全的，可以存储 null 值;
- LinkedHashSet 是 HashSet 的子类，能够按照添加的顺序遍历;
- TreeSet 底层使用红黑树，能够按照添加元素的顺序进行遍历，排序的方式有自然排序和定制排序。





