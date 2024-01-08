# Collection 接口

## List 接口

- Vector，List 接口旧的实现，是线程安全的，方法前都
- ArrayList
- LinkedList

（Stack 是继承自 Vector 的类，但是一般不推荐使用，ArrayDeque 更快）

### ArrayList

#### 初始容量

如果是无参构造，初始容量是 0，加入第一个元素的时候会扩容成 10。

#### 扩容机制

当装满的时候，会扩容数组大小为 1.5 倍。

### Vector

`Vector` 是 `List` 的古老实现类，底层使用`Object[]` 存储，线程安全的。

## Queue/Deque 接口

## Set 接口

### 比较 HashSet、LinkedHashSet 和 TreeSet 三者的异同

- HashSet 是 Set 接口的主要实现类 ，HashSet 的底层是 HashMap，线程不安全的，可以存储 null 值;
- LinkedHashSet 是 HashSet 的子类，能够按照添加的顺序遍历;
- TreeSet 底层使用红黑树，能够按照添加元素的顺序进行遍历，排序的方式有自然排序和定制排序。

## Collection 与 [] 转换

### 基本类型数组

在Java中，将`int[]`数组和`ArrayList<Integer>`之间进行转换是一种常见的操作。以下是这两种数据结构之间转换的一些优雅的方法：

#### `int[]` 转 `ArrayList<Integer>`

由于`int[]`是基本类型数组，你不能直接使用`Arrays.asList()`，因为它会将整个数组作为一个元素。你需要手动遍历数组并逐个添加元素：

```java
int[] array = { 1, 2, 3, 4, 5 };
ArrayList<Integer> arrayList = new ArrayList<>();
for (int i : array) {
    arrayList.add(i);
}
```

或者使用 Java 8 的流（Streams）：

```java
int[] array = { 1, 2, 3, 4, 5 };
ArrayList<Integer> arrayList = Arrays.stream(array).boxed().collect(Collectors.toCollection(ArrayList::new));
```

#### `ArrayList<Integer>` 转 `int[]`

将`ArrayList<Integer>`转换为`int[]`时，可以使用循环或者Java 8流：

```java
ArrayList<Integer> arrayList = new ArrayList<>(Arrays.asList(1, 2, 3, 4, 5));
int[] array = new int[arrayList.size()];
for (int i = 0; i < arrayList.size(); i++) {
    array[i] = arrayList.get(i);
}
```

使用 Java 8 流：

```java
ArrayList<Integer> arrayList = new ArrayList<>(Arrays.asList(1, 2, 3, 4, 5));
int[] array = arrayList.stream().mapToInt(i -> i).toArray();
```

在这两种情况下，使用 Java 8 流可以提供更简洁的代码，但是在处理非常大的数据集时，手动循环可能会有更好的性能。

### 对象数组

将`String[]`数组和`ArrayList<String>`之间进行转换是一个相对简单且常见的操作。以下是一些优雅的方法来实现这两种类型之间的转换：

#### `String[]` 转 `ArrayList<String>`

由于`String[]`是对象数组，你可以直接使用`Arrays.asList()`，然后构造一个新的`ArrayList`：

```java
String[] array = {"Apple", "Banana", "Cherry"};
List<String> arrayList = new ArrayList<>(Arrays.asList(array));
```

这种方法简洁且直接。

####  `ArrayList<String>` 转 `String[]`

要将`ArrayList<String>`转换为`String[]`，你可以使用`ArrayList`的`toArray()`方法：

```java
List<String> arrayList = new ArrayList<>(Arrays.asList("Apple", "Banana", "Cherry"));
String[] array = arrayList.toArray(new String[0]);
```

在这里，`new String[0]`是作为数组类型的模板，确保`toArray()`方法返回`String[]`类型的数组。Java 8及以上版本中，使用`new String[0]`比指定确切大小的数组更高效，因为内部实现会自动调整数组的大小。
