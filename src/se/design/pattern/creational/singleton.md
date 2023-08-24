# singleton

::: tabs

@tab 饿汉式

哈哈

哦哦哦

@tab 懒汉式

@tab DCL 双重检测

@tab 静态内部类

@tab 枚举

:::

原理
是一种创建型模式，一个类只允许创建一个实例对象，那这个类就是个单例类。

## 要点

1. 构造函数私有化，避免外部通过 new 创建实例；
2. 考虑对象创建时的线程安全问题；
3. 考虑是否支持延迟加载；
4. 考虑 getInstance()性能是否高（是否加锁）
5. 考虑序列化和反序列化是否会破坏单例
6. 考虑反射攻击单例

## 实现

### 饿汉式

`线程安全`, ``

饿汉式的实现方式，在类加载期间，就已经将 instance 静态实例初始化好了，所以 instance 实例的创建是线程安全的。不过这样的实现不支持延迟加载实例。

```java
public class IdGenerator {
    private AtomicLong id = new AtomicLong(0);
    private static final IdGenerator instance = new IdGenerator();
    private IdGenerator() {}
    public static IdGenerator getInstance() {
        return instance;
    }
    public long getId() {
        return id.incrementAndGet();
    }
}
```

### 懒汉式

`延迟加载`

懒汉式相对于饿汉式的优势是支持延迟加载。这种实现方式会导致频繁加锁、释放锁，以及并发度低等问题，频繁的调用会产生性能瓶颈。

### DCL

`线程安全`, `延迟加载`

双重检测实现方式既支持延迟加载、又支持高并发的单例实现方式。只要 instance 被创建之后，再调用 getInstance() 函数都不会进入到加锁逻辑中。所以这种方式解决了懒汉式并发度低的问题。

- 解决指令重排序，给 instance 成员变量加上 volatile 关键字
- `localRef`的作用是在已经初始化的情况下（即绝大多数情况下），减少读取 volatile 变量的次数为 1 词，这样大概可以提升 40%的性能。

```java
public class IdGenerator {
    private AtomicLong id = new AtomicLong(0);
    private static volatile IdGenerator instance;
    private IdGenerator() {}
    public static IdGenerator getInstance() {
        IdGenerator localRef = instance;
        if (localRef == null) {
            synchronized(IdGenerator.class) {
                if (localRef == null) {
                    instance = localRef = new IdGenerator();
                }
            }
        }
        return localRef;
    }
    public long getId() {
        return id.incrementAndGet();
    }
}
```

### 静态内部类

`线程安全`, `延迟加载`

利用 Java 的静态内部类来实现单例。这种实现方式，既支持延迟加载，也支持高并发，instance 的唯一性，创建过程的线程安全性，都由 JVM 保证。实现起来比双重检测简单。

### 枚举

`线程安全`, `序列化安全`

最简单的实现方式，基于枚举类型的单例实现。这种实现方式通过 Java 枚举类型本身的特性，保证了实例创建的线程安全性和实例的唯一性。还可解决序列化和反序列化生成新的实例。

应用场景

从业务概念上，有些数据在系统中应该保存一份，就比较适合设计为单例类。比如，系统的配置信息类，除此之外，还可以使用单例解决资源访问冲突的问题（分布式锁和并发队列亦可解决）。

存在问题

- 单例对 OOP 特性支持不友好；
- 单例会隐藏类之间的依赖关系；
- 单例对代码扩展性不友好；
- 单例对代码的可测试性不友好；
- 单例不支持有参数的构造函数。

替代方案

静态方法(不推荐)、工厂模式、Spring IOC 容器
