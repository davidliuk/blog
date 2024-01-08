# 集合

Java 集合的架构如下

![Java 集合框架概览](https://cdn.jsdelivr.net/gh/davidliuk/images@master/blog/java-collection-hierarchy.png)

![截屏2023-03-16 21.15.43](https://cdn.jsdelivr.net/gh/davidliuk/images@master/blog/%E6%88%AA%E5%B1%8F2023-03-16%2021.15.43.png)

内容大概分为如下三个部分：

- Collaction 接口
- Map 接口
- 集合线程安全

## 性质

### comparable 和 Comparator 的区别

- comparable 接口实际上是出自 java.lang 包 它有一个 compareTo(Object obj)方法用 来排序
- comparator 接口实际上是出自 java.util 包它有一个 compare(Object obj1, Object obj2) 方法用来排序

一般我们需要对一个集合使用自定义排序时，我们就要重写 compareTo() 方法或 compare() 方法， 当我们需要对某一个集合实现两种排序方式，比如一个 song 对象中的歌名和歌手名分别采用一种排序 方法的话，我们可以重写 compareTo()方法和使用自制的 Comparator 方法或者以两个 Comparator 来实现歌名排序和歌星名排序，第二种代表我们只能使用两个参数版的 Collections.sort() .

### 无序性和不可重复性

1. 什么是无序性?无序性不等于随机性，无序性是指存储的数据在底层数组中并非按照数组索引的顺序添加 ，而是根据数据的哈希值决定的。
2. 什么是不可重复性?不可重复性是指添加的元素按照 equals()判断时 ，返回 false，需要同时重写 equals()方法和 HashCode()方法。

## 异常

### 快速失败(fail-fast)?

快速失败(fail-fast) 是 Java 集合的一种错误检测机制。在使用迭代器对集合进行遍历的时候，我们 在多线程下操作非安全失败(fail-safe)的集合类可能就会触发 fail-fast 机制，导致抛出 ConcurrentModificationException 异常。 另外，在单线程下，如果在遍历过程中对集合对象 的内容进行了修改的话也会触发 fail-fast 机制。

> 注:增强 for 循环也是借助迭代器进行遍历。

举个例子:多线程下，如果线程 1 正在对集合进行遍历，此时线程 2 对集合进行修改(增加、删除、 修改)，或者线程 1 在遍历过程中对集合进行修改，都会导致线程 1 抛出 ConcurrentModificationException 异常。为什么呢?

每当迭代器使用 hashNext() / next() 遍历下一个元素之前，都会检测 modCount 变量是否为 expectedModCount 值，是的话就返回遍历;否则抛出异常，终止遍历。

如果我们在集合被遍历期间对其进行修改的话，就会改变 modCount 的值，进而导致 modCount ≠ expectedModCount ，进而抛出 ConcurrentModificationException 异常。

> 注:通过 Iterator 的方法修改集合的话会修改到 expectedModCount 的值，所以不会抛出异常。

### 安全失败(fail-safe)

什么是安全失败(fail-safe)呢? 明白了快速失败(fail-fast)之后，安全失败(fail-safe)我们就很好理解了。

采用安全失败机制的集合容器，在遍历时不是直接在集合内容上访问的，而是先复制原有集合内容，在拷⻉的集合上进行遍历。所以，在遍历过程中对原集合所作的修改并不能被迭代器检测到，故不会抛 ConcurrentModificationException 异常。

## null

不允许加入null的集合

- 排序集合：TreeMap、TreeSet

  这些集合在默认的排序行为下不接受`null`键或元素，因为它们需要对元素进行比较，而`null`通常无法与其他对象进行比较。

  但是，如果提供了自定义的比较器，并且该比较器能够处理`null`，则`TreeSet`和`TreeMap`可能会接受`null`。

- 集合工厂：**Java 9及更高版本中的方法创建的集合**：

  - `List.of()`
  - `Set.of()`
  - `Map.of()` 和 `Map.ofEntries()`
  - 这些工厂方法创建的集合是不可变的，并且不接受`null`元素。

- **`ConcurrentHashMap`**：

  - 不接受`null`作为键（key）或值（value）。
  - 在并发环境中使用时，以防止某些操作的歧义。

- **`CopyOnWriteArrayList`和`CopyOnWriteArraySet`**：

  - 这些线程安全的集合类不接受`null`元素。
  - 主要用于替代`ArrayList`和`HashSet`，以避免并发修改异常。

- **`PriorityQueue`, `ArrayDeque`**

  `ArrayDeque` 实现了 `Deque` 接口，而 `Deque` 的 API 使用 `null` 来表示特殊的返回值（例如，当队列为空时，`poll` 方法返回 `null`）。

  因此，为了避免歧义，`ArrayDeque` 和其他一些 `Deque` 实现不允许插入 `null`。

  PriorityQueue 同理，但是 LinkedList 继承的 Queue 可以
