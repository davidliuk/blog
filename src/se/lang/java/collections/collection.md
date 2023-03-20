# Collection 接口

## List 接口

- ArrayList
- Vector
- LinkedList

## Set 接口

### comparable 和 Comparator 的区别

 - comparable 接口实际上是出自java.lang包 它有一个 compareTo(Object obj)方法用 来排序
 - comparator接口实际上是出自 java.util 包它有一个compare(Object obj1, Object obj2) 方法用来排序

 一般我们需要对一个集合使用自定义排序时，我们就要重写 compareTo() 方法或 compare() 方法， 当我们需要对某一个集合实现两种排序方式，比如一个 song 对象中的歌名和歌手名分别采用一种排序 方法的话，我们可以重写compareTo()方法和使用自制的Comparator方法或者以两个 Comparator 来实现歌名排序和歌星名排序，第二种代表我们只能使用两个参数版的 Collections.sort() .

### 无序性和不可重复性

1. 什么是无序性?无序性不等于随机性，无序性是指存储的数据在底层数组中并非按照数组索引的顺序添加 ，而是根据数据的哈希值决定的。
2. 什么是不可重复性?不可重复性是指添加的元素按照 equals()判断时 ，返回 false，需要同时重写 equals()方法和 HashCode()方法。

### 比较 HashSet、LinkedHashSet 和 TreeSet 三者的异同

- HashSet 是 Set 接口的主要实现类 ，HashSet 的底层是 HashMap，线程不安全的，可以存储 null 值;
- LinkedHashSet 是 HashSet 的子类，能够按照添加的顺序遍历;
- TreeSet 底层使用红黑树，能够按照添加元素的顺序进行遍历，排序的方式有自然排序和定制排序。

