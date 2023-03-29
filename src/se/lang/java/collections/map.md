# Map 接口

主要根据集合的特点来选用，比如我们需要根据键值获取到元素值时就选用 Map 接口下的集合，需 要排序时选择 TreeMap ,不需要排序时就选择 HashMap ,需要保证线程安全就选用 ConcurrentHashMap 。

当我们只需要存放元素值时，就选择实现Collection 接口的集合，需要保证元素唯一时选择实现 Set 接口的集合比如 TreeSet 或 HashSet，不需要就选择实现 List 接口的比如 ArrayList或 LinkedList ，然后再根据实现这些接口的集合的特点来选用。

## HashMap


capacity，factor

capacity是元素个数，factor只有构造的时候考虑（容量初始设置比capacity/factor大的第一个2^n），后面还是按3/4

### hash 扰动函数

HashMap 通过 key 的 hashCode 经过扰动函数处理过后得到 hash 值，然后通过 (n - 1) & hash 判断当前元素存放的位置 (这里的 n 指的是数组的⻓度)，如果当前位置存在元素的话，就判断该元素与要存入的元素的 hash 值以及 key 是否相同，如果相同的话，直接覆盖，不相同就通过拉链法解决冲突。

所谓扰动函数指的就是 HashMap 的 hash 方法。使用 hash 方法也就是扰动函数是为了防止一些实现 比较差的 hashCode() 方法 换句话说使用扰动函数之后可以减少碰撞。

```java
return (key == null) ? 0 : (h = key.hashCode()) ^ (h >>> 16);
```

相比于 JDK1.8 的 hash 方法 ，JDK 1.7 的 hash 方法的性能会稍差一点点，因为毕竟扰动了 4 次。

所谓 “拉链法” 就是:将链表和数组相结合。也就是说创建一个链表数组，数组中每一格就是一个链 表。若遇到哈希冲突，则将冲突的值加到链表中即可。

### Resize

- 1.8及以后，满3/4时就扩容
- 1.8以前，超3/4时扩容



扩容的时候，从后往前迁移

迁移的时候划分区间来迁移

进行扩容，会伴随着一次重新 hash 分配，并且会遍历 hash 表中所有的元素，是非常耗时的。在编写程序中，要尽量避免 resize。


### treeifyBin

当链表长度大于阈值（默认为 8）时，会首先调用 `treeifyBin()`方法。这个方法会根据 HashMap 数组来决定是否转换为红黑树。只有当数组长度大于或者等于 64 的情况下，才会执行转换红黑树操作，以减少搜索时间。否则，就是只是执行 `resize()` 方法对数组扩容。


### 遍历

 HashMap 4 大类遍历方式：
 - 迭代器
 - for
 - lambda
 - stream

 具体为 7 种遍历方法，除了 Stream 的并行循环，其他几种遍历方法的性能差别不大，但从简洁性和优雅性上来看，Lambda 和 Stream 无疑是最适合的遍历方式。

 除此之外我们还从「安全性」方面测试了 4 大类遍历结果，从安全性来讲，我们应该使用迭代器提供的 iterator.remove() 方法来进行删除，这种方式是安全的在遍历中删除集合的方式，或者使用 Stream 中的 filter 过滤掉要删除的数据再进行循环，也是安全的操作方式。

 我们不能在遍历中使用集合 map.remove() 来删除数据，这是非安全的操作方式，但我们可以使用迭代器的 iterator.remove() 的方法来删除数据，这是安全的删除集合的方式。同样的我们也可以使用 Lambda 中的 removeIf 来提前删除数据，或者是使用 Stream 中的 filter 过滤掉要删除的数据进行循环，这样都是安全的，当然我们也可以在 for 循环前删除数据在遍历也是线程安全的。

### 注意事项

### 对象作为key需要重写对象的hashcode和equals方法

先用hashcode放入node的位置，如果hash冲突，就是放入这个位置链表的末端（如果遍历的时候equals方法发现元素已经存在则不放）

判断相等的过程是：先判断两个对象的HashCode的值是否相等，若相等，再进行equals（）判断。若HashCode不相等，则判断两个对象不相等，直接加入到容器中，不再进行equals（）比较。

例如：

```java
import java.util.Objects;
class Student {
    private String name;
    public String getName(String name){
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public Student(String name) {
        this.name = name;
    }
    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) 
            return false;
        Student student = (Student) o;
        return Objects.equals(name, student.name);
    }
    @Override
    public int hashCode() {
        return Objects.hash(name);
    }
}
```





### Map使用数组作为key，存放的是其地址，无法重写hashcode等

所以一般不能把数组作为key，因为无法重写hashcode和equals

- TreeMap 底层使用红黑树，能够按照添加元素的顺序进行遍历，排序的方式有自然排序和定制排序。



### 红黑树

红黑树是一种特化的AVL树（平衡二叉树），都是在进行插入和删除操作时通过特定操作保持二叉查找树的平衡，从而保证较高的查找性能。 

它虽然是复杂的，但它的最坏情况运行时间也是非常良好的，并且在实践中是高效的： 它可以在O(log n)时间内做查找，插入和删除

- 性质1. 结点是红色或黑色。
- 性质2. 根结点是黑色。
- 性质3. 所有叶子都是黑色。（叶子是NIL结点）
- 性质4. 每个红色结点的两个子结点都是黑色。（从每个叶子到根的所有路径上不能有两个连续的红色结点）
- 性质5. 从任一结点到其每个叶子的所有路径都包含相同数目的黑色结点。



## TreeMap

### HashMap 和 TreeMap 区别

`TreeMap` 和`HashMap` 都继承自`AbstractMap` ，但是需要注意的是`TreeMap`它还实现了`NavigableMap`接口和`SortedMap`接口。

实现 `NavigableMap` 接口让 `TreeMap` 有了对集合内元素的搜索的能力。

实现`SortedMap`接口让 `TreeMap` 有了对集合中的元素根据键排序的能力。默认是按 key 的升序排序，不过我们也可以指定排序的比较器。

**相比于`HashMap`来说 `TreeMap` 主要多了对集合中的元素根据键排序的能力以及对集合内元素的搜索的能力，同时也提供了范围查找的可行性。**

