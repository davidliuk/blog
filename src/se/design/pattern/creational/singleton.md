# Singleton

单例模式

原理
是一种创建型模式，一个类只允许创建一个实例对象，那这个类就是个单例类。

## 要点

1. 构造函数私有化，避免外部通过 new 创建实例；
2. 考虑对象创建时的线程安全问题；
3. 考虑是否支持延迟加载；
4. 考虑 getInstance()性能是否高（是否加锁）
5. 考虑序列化和反序列化是否会破坏单例
6. 考虑反射攻击单例

## 饿汉式

```java
public class Singleton {
    private static Singleton instance = new Singleton();
    
    private Singleton() {
        // 私有构造函数
    }
    
    public static Singleton getInstance() {
        return instance;
    }
}
```

## 懒汉式

Naive Method

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

### DCL

```java
public class Singleton {
    private static volatile Singleton instance;
    
    private Singleton() {
        // 私有构造函数
    }
    
    public static Singleton getInstance() {
        if (instance == null) {
            synchronized (Singleton.class) {
                if (instance == null) {
                    instance = new Singleton();
                }
            }
        }
        return instance;
    }
}
```

在上述代码中，使用了双重检查锁定（Double-Checked Locking）来确保线程安全。关键点如下：

- volatile 关键字用于保证可见性，确保多线程环境下对 instance 的正确访问。
- 在 getInstance() 方法中，首先检查 instance 是否已经被实例化，如果没有，则进入同步块。
- 在同步块内部，再次检查 instance 是否为 null，如果是，则创建一个新的实例。
- 使用双重检查的方式可以减少锁的竞争，提高性能。

### 枚举

**JDK 版本：**JDK1.5 起

**是否 Lazy 初始化：**否

**是否多线程安全：**是

**实现难度：**易

**描述：**这种实现方式还没有被广泛采用，但这是实现单例模式的最佳方法。它更简洁，自动支持序列化机制，绝对防止多次实例化。

这种方式是 Effective Java 作者 Josh Bloch 提倡的方式，它不仅能避免多线程同步问题，而且还自动支持序列化机制，防止反序列化重新创建新的对象，绝对防止多次实例化。不过，由于 JDK1.5 之后才加入 enum 特性，用这种方式写不免让人感觉生疏，在实际工作中，也很少用。

不能通过 reflection attack 来调用私有构造方法。

```java
public enum Singleton {      
    INSTANCE;      
    public void whateverMethod() {      
    } 
}
```

### 登记式/静态内部类

**是否 Lazy 初始化：**是

**是否多线程安全：**是

**实现难度：**一般

**描述：**这种方式能达到双检锁方式一样的功效，但实现更简单。对静态域使用延迟初始化，应使用这种方式而不是双检锁方式。这种方式只适用于静态域的情况，双检锁方式可在实例域需要延迟初始化时使用。

这种方式同样利用了 classloader 机制来保证初始化 instance 时只有一个线程，它跟第 3 种方式不同的是：第 3 种方式只要 Singleton 类被装载了，那么 instance 就会被实例化（没有达到 lazy loading 效果），而这种方式是 Singleton 类被装载了，instance 不一定被初始化。因为 SingletonHolder 类没有被主动使用，只有通过显式调用 getInstance 方法时，才会显式装载 SingletonHolder 类，从而实例化 instance。想象一下，如果实例化 instance 很消耗资源，所以想让它延迟加载，另外一方面，又不希望在 Singleton 类加载时就实例化，因为不能确保 Singleton 类还可能在其他的地方被主动使用从而被加载，那么这个时候实例化 instance 显然是不合适的。这个时候，这种方式相比第 3 种方式就显得很合理。

```java
public class Singleton {      
    private static class SingletonHolder {      
        private static final Singleton INSTANCE = new Singleton();      
    }      
    private Singleton (){}      
    public static final Singleton getInstance() {          
        return SingletonHolder.INSTANCE;      
    }   
}
```

**经验之谈：**一般情况下，不建议使用第 1 种和第 2 种懒汉方式，建议使用第 3 种饿汉方式。只有在要明确实现 lazy loading 效果时，才会使用第 5 种登记方式。如果涉及到反序列化创建对象时，可以尝试使用第 6 种枚举方式。如果有其他特殊的需求，可以考虑使用第 4 种双检锁方式。

::: tabs

@tab 饿汉式

@tab 懒汉式

@tab DCL 双重检测

@tab 静态内部类

@tab 枚举

:::

## 实现

### 饿汉式

`线程安全`

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

```java
public class IdGenerator {
    private AtomicLong id = new AtomicLong(0);
    private static volatile IdGenerator instance;
    private IdGenerator() {}
    public static synchronized IdGenerator getInstance() {
        if (localRef == null) {
            instance = localRef = new IdGenerator();
        }

        return localRef;
    }
    public long getId() {
        return id.incrementAndGet();
    }
}
```

懒汉式相对于饿汉式的优势是支持延迟加载。这种实现方式会导致**频繁加锁、释放锁**，以及并发度低等问题，频繁的调用会产生性能瓶颈。

### DCL

`线程安全`, `延迟加载`

双重检测实现方式既支持延迟加载、又支持高并发的单例实现方式。只要 instance 被创建之后，再调用 getInstance() 函数都不会进入到加锁逻辑中。所以这种方式解决了懒汉式并发度低的问题。

双重检测

- 外层if：实例只被创建一次，当实例已经被创建好就不要后续的加锁操作，直接返回

- 内层if：实例未被创建时，多个线程同时竞争锁，只有一个线程竞争成功并创建实例，其他竞争失败的线程就会阻塞等待，当第一线程释放锁后，这些竞争失败的线程就会继续竞争，但是实例已经创建好了，所以需要再次进行if判断

volatile

- 解决指令重排序，给 instance 成员变量加上 volatile 关键字
- `localRef`的作用是在已经初始化的情况下（即绝大多数情况下），减少读取 volatile 变量的次数（减少了一次），这样大概可以提升 40%的性能。

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
