# ThreadLocal

解决线程安全问题的另一种思路，之前是共享资源加锁或 CAS 重试，现在是线程隔离各用各的。

作用：

- 实现资源对象的线程隔离，让每个线程各用各的资源对象，避免争用引发的线程安全问题
- 实现了线程内的资源共享

局部变量：可以线程隔离，但是不能跨方法。ThreadLocal 主要解决的就是这个跨方法的问题

## 线程关联的原理

ThreadLocal 并不是一个独立的存在, 它与 Thread 类是存在耦合的, java.lang.Thread 类针对 ThreadLocal 提供了如下支持：

```go
ThreadLocal.ThreadLocalMap threadLocals = null;
```

`Thread`类有一个类型为`ThreadLocal.ThreadLocalMap`的实例变量`threadLocals`，也就是说每个线程有一个自己的`ThreadLocalMap`。

`ThreadLocalMap`有自己的独立实现，可以简单地将它的`key`视作`ThreadLocal`，`value`为代码中放入的值（`key`并不是`ThreadLocal`本身，而是它的**弱引用**）。

每个线程在往`ThreadLocal`里放值的时候，都会往自己的`ThreadLocalMap`里存，读也是以`ThreadLocal`作为引用，在自己的`map`里找对应的`key`，从而实现了**线程隔离**。

`ThreadLocalMap`有点类似`HashMap`的结构，只是`HashMap`是由**数组+链表**实现的，而`ThreadLocalMap`中并没有**链表**结构，采用线性探测法解决hash冲突。

我们还要注意`Entry`， 它的`key`是`ThreadLocal<?> k` ，继承自`WeakReference`， 也就是我们常说的弱引用类型。

## ThreadLocalMap

![img](https://javaguide.cn/assets/2-hR3eDVPI.png)

`Thread`类有一个类型为`ThreadLocal.ThreadLocalMap`的实例变量`threadLocals`，也就是说每个线程有一个自己的`ThreadLocalMap`。

`ThreadLocalMap`有自己的独立实现，可以简单地将它的`key`视作`ThreadLocal`，`value`为代码中放入的值（实际上`key`并不是`ThreadLocal`本身，而是它的一个**弱引用**）。

每个线程在往`ThreadLocal`里放值的时候，都会往自己的`ThreadLocalMap`里存，读也是以`ThreadLocal`作为引用，在自己的`map`里找对应的`key`，从而实现了**线程隔离**。

`ThreadLocalMap`有点类似`HashMap`的结构，只是`HashMap`是由**数组+链表**实现的，而`ThreadLocalMap`中并没有**链表**结构。

我们还要注意`Entry`， 它的`key`是`ThreadLocal<?> k` ，继承自`WeakReference`， 也就是我们常说的弱引用类型。

### Hash 算法

```java
int i = key.threadLocalHashCode & (len-1);
```

HASH_INCREMENT是黄金分割数，作为hash增量，hash非常均匀

```java
public class ThreadLocal<T> {
    private final int threadLocalHashCode = nextHashCode();

    private static AtomicInteger nextHashCode = new AtomicInteger();

    private static final int HASH_INCREMENT = 0x61c88647;

    private static int nextHashCode() {
        return nextHashCode.getAndAdd(HASH_INCREMENT);
    }

    static class ThreadLocalMap {
        ThreadLocalMap(ThreadLocal<?> firstKey, Object firstValue) {
            table = new Entry[INITIAL_CAPACITY];
            int i = firstKey.threadLocalHashCode & (INITIAL_CAPACITY - 1);

            table[i] = new Entry(firstKey, firstValue);
            size = 1;
            setThreshold(INITIAL_CAPACITY);
        }
    }
}
```

### Hash 冲突

> **注明：** 下面所有示例图中，**绿色块**`Entry`代表**正常数据**，**灰色块**代表`Entry`的`key`值为`null`，**已被垃圾回收**。**白色块**表示`Entry`为`null`。

虽然`ThreadLocalMap`中使用了**黄金分割数**来作为`hash`计算因子，大大减少了`Hash`冲突的概率，但是仍然会存在冲突。

`HashMap`中解决冲突的方法是在数组上构造一个**链表**结构，冲突的数据挂载到链表上，如果链表长度超过一定数量则会转化成**红黑树**。

而 `ThreadLocalMap` 中并没有链表结构，所以这里不能使用 `HashMap` 解决冲突的方式了。

![img](https://javaguide.cn/assets/7-FQtSgoo3.png)

## 为什么 Map 的 key 要设置成弱引用呢？

因为如果我们 ThreadLocalMap 中的 ThreadLocal 不设置成弱引用，设置成强引用的话，如果外界已经将所有引用 ThreadLocal 的地方设置为了 null(也就是不再使用了)，但是我们的 Map 里的 key 还指向堆内存里的 ThreadLocal 呢，而我们又不能直接操控 Map。

并且这个线程始终在运行(比如说线程池复用连接)，那么久而久之，堆内存里的 ThreadLocal 就无法被回收，造成**内存泄露**。

而设计成弱引用的话，在每次 GC 时，发现没有其他强引用指向 ThreadLocal 了，便会将其回收。

概括说就是：在方法中新建一个线程本地对象，就有一个强引用指向它，在调用 set()后，线程的 ThreadLocaMap 对象里的 Entry 对象又有一个引用 key 指向它。如果后面这个引用 key 是强引用就会使方法执行完，栈帧中的强引用销毁了，对象还不能回收，造成严重的内存泄露。

那为什么不设置成软引用呢？

让没有引用的尽快被回收，而不用等到内存不够再回收

## 内存泄漏

**ThreadLocal** 在 **ThreadLocalMap** 中是被 Entry 中的 Key 弱引用的，因此如果 ThreadLocal 没有外部强引用来引用它，那么 ThreadLocal 会在下次 JVM 垃圾收集时被回收。这个时候就会出现 Entry 中 Key 已经被回收，出现一个 null Key 的情况，这样称为key过期。

外部读取 ThreadLocalMap 中的元素是无法通过 null Key 来找到 Value 的。因此如果当前线程的生命周期很长，一直存在，那么其内部的 ThreadLocalMap 对象也一直生存下来，这些 null key 就存在一条强引用链的关系一直存在：Thread --> ThreadLocalMap-->Entry-->Value，这条强引用链会导致 Entry 不会回收，Value 也不会回收，但 Entry 中的 Key 却已经被回收的情况，造成内存泄漏。

JDK 中存在一些措施来保证 ThreadLocal 尽量不会内存泄漏：在 ThreadLocal 的 get()、set()、remove()方法调用的时候会清除掉线程 ThreadLocalMap 中所有 Entry 中 Key 为 null 的 Value，并将整个 Entry 设置为 null，利于下次内存

由于**ThreadLocalMap**的 key 是弱引用，而 Value 是强引用。这就导致了一个问题，ThreadLocal 在没有外部对象强引用时，发生 GC 时弱引用 Key 会被回收，而 Value 不会回收，如果创建 ThreadLocal 的线程一直持续运行，那么这个 Entry 对象中的 value 就有可能一直得不到回收，发生内存泄露。

## 线程池脏读问题

ThreadLocal 是利用独占资源的方式，来解决线程安全问题，那如果我们确实需要有资源在线程之间共享，应该怎么办呢？这时，我们可能就需要用到线程安全的容器了。

上个例子说明，**ThreadLocal 用不好也会产生副作用**，线程复用会产生**脏数据**。由于线程池会重用 Thread 对象，那么与 Thread 绑定的类的静态属性 ThreadLocal 变量也会被重用。如果在实现的线程 run() 方法体中不显式地调用于线程相关的 ThreadLocal 信息，那么倘若下一个线程不调用 set() 设置初始值，就可能 get 到重用的线程信息，包括 ThreadLocal 所关联的线程对象的 value 值。tomcat底层用的线程池。

### 解决方案

> Threadlocal与线程池一起使用，如何避免脏读问题，就是说因为线程池里面的线程重复使用，上一个任务set到threadlocal里面的值下一个任务用这同一个线程可能错误的读到。如何避免这样的情况发生
>
> 在使用ThreadLocal和线程池一起时，为了避免脏读问题，可以在每次任务执行完毕后，显式地调用ThreadLocal的remove方法来清除ThreadLocal中的数据。这样可以确保下一个任务使用的线程不会读取到上一个任务设置的值。
>
> 以下是一个示例代码，演示如何在Java中使用ThreadLocal和线程池，并在任务执行完毕后清除ThreadLocal中的数据：
>
> ```java
> import java.util.concurrent.ExecutorService;
> import java.util.concurrent.Executors;
> 
> public class ThreadLocalExample {
>     private static ThreadLocal<String> threadLocal = new ThreadLocal<>();
> 
>     public static void main(String[] args) {
>         ExecutorService executor = Executors.newFixedThreadPool(5);
> 
>         for (int i = 0; i < 10; i++) {
>             int taskId = i;
>             executor.submit(() -> {
>                 threadLocal.set("Value for task " + taskId);
>                 System.out.println("Task " + taskId + " - ThreadLocal value: " + threadLocal.get());
> 
>                 // 清除ThreadLocal中的数据
>                 threadLocal.remove();
>             });
>         }
> 
>         executor.shutdown();
>     }
> }
> ```
>
> 在上面的示例中，每个任务执行完毕后都会调用`threadLocal.remove()`来清除ThreadLocal中的数据，以确保下一个任务不会读取到错误的值。

1. 在每个线程执行中，往 ThreadLocal 对象设置值后，执行完核心逻辑代码，最后对 ThreadLocal 对象进行清理（remove方法）。
2. 或者任务执行之前先remove thread local值，再执行内容。

优化后的代码如下：  ThreadLocal 线程内共享变量，要注意每次set后，在不需要使用到该key的时候，一定要remove清理掉，否则不仅是造成内存泄露，还可能导致脏数据的产生，从而出现一些奇怪的错误。

## 线程间变量传递

### 变量传递

但对于使用线程池等会池化复用线程的执行组件的情况，线程由线程池创建好，并且线程是池化起来反复使用的；这时父子线程关系的`ThreadLocal`值传递已经没有意义，应用需要的实际上是把 **任务提交给线程池时**的`ThreadLocal`值传递到 **任务执行时**。

- 父线程给子线程传递值。
- 保证线程池中传递值

ThreadLocal 中变量的作用域是当前线程，使用线程池后会因跨线程导致数据不能传递，如果业务中使用了 ThreadLocal，需要额外处理这种场景。

#### InheritableThreadLocal

InheritableThreadLocal 是在父子线程中自动传递参数，在线程池场景中不适用。

#### 手动处理

在提交任务前把 ThreadLocal 中的值取出来，在线程池执行时再 set 到线程池中线程的 ThreadLocal 中，并且在 finally 中清理数据。

缺点是每个线程池都要处理一遍，如果对上下文不熟悉，有漏传的风险。

#### TransmittableThreadLocal

原理是通过 javaagent 自动处理 ThreadLocal 跨线程池传参，对业务开发者无感知，也是推荐的方案。

### 问题描述

首先看一个最简单场景，也是一个错误的例子。

```java
void testThreadLocal(){
    ThreadLocal<Object> threadLocal = new ThreadLocal<>();
    threadLocal.set("not ok");
    new Thread(()->{
        System.out.println(threadLocal.get());
    }).start();
}
```

java中的 threadlocal，是绑定在线程上的。你在一个线程中set的值，在另外一个线程是拿不到的。

上面的输出是:

```
null
```

我们使用`ThreadLocal`的时候，在异步场景下是无法给子线程共享父线程中创建的线程副本数据的。

### InheritableThreadLocal

JDK 有一个`InheritableThreadLocal`类，我们来看一个例子：

```java
public class InheritableThreadLocalDemo {
    public static void main(String[] args) {
        ThreadLocal<String> threadLocal = new ThreadLocal<>();
        ThreadLocal<String> inheritableThreadLocal = new InheritableThreadLocal<>();
        ThreadLocal.set("父类数据:threadLocal");
        inheritableThreadLocal.set("父类数据:inheritableThreadLocal");

        new Thread(() -> {
            System.out.println("子线程获取父类ThreadLocal：" + threadLocal.get());
            System.out.println("子线程获取父类inheritableThreadLocal数据：" + inheritableThreadLocal.get());
        }).start();
    }
}
```

打印结果：

- 子线程获取父类 ThreadLocal：null
- 子线程获取父类 inheritableThreadLocal：父类数据: inheritableThreadLocal

实现原理是子线程是通过在父线程中通过调用`new Thread()`方法来创建子线程，`Thread#init`方法在`Thread`的构造方法中被调用。在`init`方法中拷贝父线程数据到子线程中：

### TransmittableThreadLocal

`InheritableThreadLocal`仍然有缺陷，一般我们做异步化处理都是使用的线程池，而`InheritableThreadLocal`是在`new Thread`中的`init()`方法给赋值的，而线程池是线程复用的逻辑，所以无法正常的父子传值。

阿里巴巴的`TransmittableThreadLocal`组件就可以解决这个问题。

## MDC

MDC（Mapped Diagnostic Context，映射调试上下文）是 Slf4J, log4j 和 logback 提供的一种方便在多线程条件下记录日志的功能，也可以说是一种轻量级的日志跟踪工具。

1. get()方法是用来获取ThreadLocal在当前线程中保存的变量副本
2. set()用来设置当前线程中变量的副本
3. remove()用来移除当前线程中变量的副本
4. initialValue()是一个protected方法，一般是用来在使用时进行重写的

## 使用场景

ThreadLocal的主要作用是在多线程环境中为每个线程维护一个独立的变量副本，这些变量对于线程来说是私有的，相互之间不可见。通常情况下，ThreadLocal在跨方法传递值时确实是一种常见的应用场景，但并不是唯一的应用场景。以下是一些常见的使用案例和最佳实践：

1. **跨方法传递值**：当需要在线程之间传递值，而不希望将这些值作为参数传递给每个方法时，ThreadLocal 是一个合适的选择。这种情况下，每个线程可以通过ThreadLocal 获取自己的值，而不需要在每个方法中显式传递参数。
2. **数据库连接管理**：在多线程的数据库应用中，可以使用ThreadLocal管理数据库连接。每个线程从 ThreadLocal 中获取自己的数据库连接，确保线程安全而且高效地使用数据库连接。
3. **用户身份信息传递**：在 Web 应用程序中，可以将用户身份信息（比如用户ID、用户名等）存储在ThreadLocal中，以便在应用程序的不同层中访问这些信息，而无需在每个方法中显式传递用户身份信息。
4. **线程上下文信息存储**：在框架或库中，可以使用ThreadLocal存储线程的上下文信息，例如请求ID、会话ID等，以便在整个处理链路中访问这些信息。
5. **避免传递大量参数**：当需要传递大量参数，且这些参数在同一个线程的多个方法中需要使用时，可以考虑使用ThreadLocal来避免传递大量参数。

虽然ThreadLocal提供了一种方便的方式来共享线程范围内的数据，但是需要谨慎使用，以避免引发内存泄漏或脏数据的问题。特别是在使用线程池或者在应用程序中的某些处理链路中使用ThreadLocal时，需要确保在合适的时候清理ThreadLocal的值，避免对内存造成不必要的负担。
