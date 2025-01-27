# volatile

## 可见性

在 Java 中，`volatile` 关键字可以保证变量的可见性，如果我们将变量声明为 **`volatile`** ，这就指示 JVM，这个变量是共享且不稳定的，每次使用它都到主存中进行读取，每次更新他都会刷回主存。

当一个变量被声明为`volatile`时，它的值的修改会立即被写入到主内存中，并且其他线程可以立即看到这个变量的最新值。

### 过程

1. 线程 A 将工作内存的 data 更改后，强制将 data 值刷回主内存
2. 如果线程 B 的工作内存中有 data 变量的缓存时，会强制让这个 data 变量缓存失效
3. 当线程 B 需要读取 data 变量的值时，先从工作内存中读，发现已经过期，就会从主内存中加载 data 变量的最新值了

### 解决问题

JIT 有的时候会优化，对执行过多的重点语句，有些就从物理内存中抽出来弄成一个局部的了，这样就会造成后续对这个变量改变对这句话不可见，如果给这个变量加 volatile，就不会被优化，可以保证可见性。

### 注意事项

- `volatile` 修饰引用类型，`volatile`只能保证对象引用的可见性，并不能保证对象引用指向的对象的可见性，即如果改变对象的属性，并不具有可见性。

## 有序性

有序性：写变量，一定要让 volatile 变量在最下面；读变量，一定在最上面

内存屏障：

- 对 volatile 变量写操作之前有向上的内存屏障，防止前面的语句越过屏障
- 对 volatile 变量读操作之后有向下的内存屏障，防止后面的语句越过屏障
