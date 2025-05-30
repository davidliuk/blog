# 线程池

[Java 线程池进阶*服务重启线程池如何保证不丢失任务*一头狒狒的博客-CSDN 博客](https://blog.csdn.net/ch98000/article/details/126727000)

## 好处

池化技术：线程池、数据库连接池、Http 连接池等等都是对这个思想的应用。池化技术的思想主要是为了减少每次获取资源的消耗，提高对资源的利用率。

**线程池**提供了一种限制和管理资源（包括执行一个任务）的方式。 每个**线程池**还维护一些基本统计信息，例如已完成任务的数量。

这里借用《Java 并发编程的艺术》提到的来说一下**使用线程池的好处**：

- **降低资源消耗**。通过重复利用已创建的线程降低线程创建和销毁造成的消耗。创建一个线程 1M 内存
- **提高响应速度**。当任务到达时，任务可以不需要等到线程创建就能立即执行。
- **提高线程的可管理性**。线程是稀缺资源，如果无限制的创建，不仅会消耗系统资源，还会降低系统的稳定性，使用线程池可以进行统一的分配，调优和监控。

## 核心参数

### 核心概念

线程

- 核心线程：运行完任务以后仍保留在线程池当中
- 救急线程：运行完任务以后不保留被抛弃

### 初始参数

1. corePoolSize 核心线程数目

   - 最多**保留**的线程数，可以为 0

2. maximumPoolSize 最大线程数目

   - 核心线程 + 救急线程

3. keepAliveTime 生存时间

   针对救急线程，执行完成以后存留的时间的数值，如 20，30 等

4. unit 时间单位

   针对救急线程，执行完成以后存留的时间的单位，如秒、毫秒等

5. workQueue 任务队列上限

   阻塞队列，`ArrayBlockingQueue(100)`

6. threadFactory 线程工厂（optional）

   如可以用来设置线程命名规则、注册统一异常处理器

7. handler 拒绝策略（optional）

   四种，线程池、等待队列、救急线程都满的时候，如何处理

   - AbortPolicy，抛出 `RejectedExecutionException`来拒绝新任务的处理。
   - CallerRunsPolicy，调用者自己去运行这个任务，这种策略会降低对于新任务提交速度，影响程序的整体性能。如果您的应用程序可以承受此延迟并且你要求任何一个任务请求都要被执行的话，你可以选择这个策略。
   - DiscardPolicy，新加入的丢弃掉，直接丢弃掉。
   - DiscardOldestPolicy，把任务队列中等待最久的（最先加入队列的）丢弃掉，然后新任务加入进来。

```java
private static final int CORE_POOL_SIZE = 5;
private static final int MAX_POOL_SIZE = 10;
private static final int QUEUE_CAPACITY = 100;
private static final Long KEEP_ALIVE_TIME = 1L;

//使用阿里巴巴推荐的创建线程池的方式
//通过ThreadPoolExecutor构造函数自定义参数创建
ThreadPoolExecutor executor = new ThreadPoolExecutor(
        CORE_POOL_SIZE,
        MAX_POOL_SIZE,
        KEEP_ALIVE_TIME,
        TimeUnit.SECONDS,
        new ArrayBlockingQueue<>(QUEUE_CAPACITY),
        new ThreadPoolExecutor.CallerRunsPolicy());
```

## 执行流程

核心线程都在忙的时候，放入任务队列，任务队列也满的时候，进入救急线程

1. 如果当前有空闲线程，则直接执行
1. 如果当前运行的线程数小于核心线程数，那么就会新建一个线程来执行任务。
1. 如果当前运行的线程数等于或大于核心线程数，但是小于最大线程数，那么就把该任务放入到任务队列里等待执行。
1. 如果向任务队列投放任务失败（任务队列已经满了），但是当前运行的线程数是小于最大线程数的，就新建一个救急线程来执行任务。
1. 如果当前运行的线程数已经等同于最大线程数了，超出最大线程数，当前任务会被拒绝，饱和策略会调用`RejectedExecutionHandler.rejectedExecution()`方法。

![img](https://cdn.jsdelivr.net/gh/davidliuk/images@master/blog/04c18c80cc564de68c18a9e9bf73f965.png)

## 内置线程池

### FixedThreadPool

新创建的 `FixedThreadPool` 的 `corePoolSize` 和 `maximumPoolSize` 都被设置为 `nThreads`，这个 `nThreads` 参数是我们使用的时候自己传递的。

即使 `maximumPoolSize` 的值比 `corePoolSize` 大，也至多只会创建 `corePoolSize` 个线程。这是因为`FixedThreadPool` 使用的是容量为 `Integer.MAX_VALUE` 的 `LinkedBlockingQueue`（无界队列），队列永远不会被放满。

#### 为什么不推荐使用`FixedThreadPool`？

`FixedThreadPool` 使用无界队列 `LinkedBlockingQueue`（队列的容量为 Integer.MAX_VALUE）作为线程池的工作队列会对线程池带来如下影响 ：

1. 当线程池中的线程数达到 `corePoolSize` 后，新任务将在无界队列中等待，因此线程池中的线程数不会超过 `corePoolSize`；
2. 由于使用无界队列时 `maximumPoolSize` 将是一个无效参数，因为不可能存在任务队列满的情况。所以，通过创建 `FixedThreadPool`的源码可以看出创建的 `FixedThreadPool` 的 `corePoolSize` 和 `maximumPoolSize` 被设置为同一个值。
3. 由于 1 和 2，使用无界队列时 `keepAliveTime` 将是一个无效参数；
4. 运行中的 `FixedThreadPool`（未执行 `shutdown()`或 `shutdownNow()`）不会拒绝任务，在任务比较多的时候会导致 OOM（内存溢出）。

### SingleThreadExecutor

`SingleThreadExecutor` 是只有一个线程的线程池。下面看看**SingleThreadExecutor 的实现：**

#### 为什么不推荐使用`SingleThreadExecutor`？

`SingleThreadExecutor` 和 `FixedThreadPool` 一样，使用的都是容量为 `Integer.MAX_VALUE` 的 `LinkedBlockingQueue`（无界队列）作为线程池的工作队列。`SingleThreadExecutor` 使用无界队列作为线程池的工作队列会对线程池带来的影响与 `FixedThreadPool` 相同。说简单点，就是可能会导致 OOM。

### CachedThreadPool

`CachedThreadPool` 是一个会根据需要创建新线程的线程池。下面通过源码来看看 `CachedThreadPool` 的实现：

`CachedThreadPool` 的`corePoolSize` 被设置为空（0），`maximumPoolSize`被设置为 `Integer.MAX.VALUE`，即它是无界的，这也就意味着如果主线程提交任务的速度高于 `maximumPool` 中线程处理任务的速度时，`CachedThreadPool`会不断创建新的线程。极端情况下，这样会导致耗尽 cpu 和内存资源。

#### 为什么不推荐使用`CachedThreadPool`？

`CachedThreadPool` 使用的是同步队列 `SynchronousQueue`, 允许创建的线程数量为 `Integer.MAX_VALUE` ，可能会创建大量线程，从而导致 OOM。

### ScheduledThreadPool

`ScheduledThreadPool` 用来在给定的延迟后运行任务或者定期执行任务。这个在实际项目中基本不会被用到，也不推荐使用，大家只需要简单了解一下即可。

`ScheduledThreadPool` 是通过 `ScheduledThreadPoolExecutor` 创建的，使用的`DelayedWorkQueue`（延迟阻塞队列）作为线程池的任务队列。

`DelayedWorkQueue` 的内部元素并不是按照放入的时间排序，而是会按照延迟的时间长短对任务进行排序，内部采用的是“堆”的数据结构，可以保证每次出队的任务都是当前队列中执行时间最靠前的。`DelayedWorkQueue` 添加元素满了之后会自动扩容原来容量的 1/2，即永远不会阻塞，最大扩容可达 `Integer.MAX_VALUE`，所以最多只能创建核心线程数的线程。

`ScheduledThreadPoolExecutor` 继承了 `ThreadPoolExecutor`，所以创建 `ScheduledThreadExecutor` 本质也是创建一个 `ThreadPoolExecutor` 线程池，只是传入的参数不相同。

## 阻塞队列

### 什么是阻塞队列

阻塞队列：从定义上来说是队列的一种，那么肯定是一个先进先出（FIFO）的数据结构。与普通队列不同的是，它支持两个附加操作，即阻塞添加和阻塞删除方法。

- 阻塞添加`put`：当阻塞队列是满时，往队列里添加元素的操作将被阻塞。
- 阻塞移除`take`：当阻塞队列是空时，从队列中获取元素/删除元素的操作将被阻塞。

| 方法 | 抛出异常  | 返回结果不抛异常 | 阻塞   | 阻塞特定时间         |
| ---- | --------- | ---------------- | ------ | -------------------- |
| 入队 | add(e)    | offer(e)         | put(e) | offer(e, time, unit) |
| 出队 | remove()  | poll()           | take() | poll(time, unit)     |
| 队首 | element() | peek()           | 不支持 | 不支持               |

### 线程池常用的阻塞队列总结

新任务来的时候会先判断当前运行的线程数量是否达到核心线程数，如果达到的话，新任务就会被存放在队列中。

为什么用阻塞队列：简单的一个场景，消费者一端不一定是时时提交任务就能马上执行，可能有很多因素，比如计算或者 IO 等资源没办法马上就位，所以有等待，但是任务队列也不一定就无限大，所以才有了阻塞队列，在任务池已满且队列已经有很多任务时，需要阻塞等待。

不同的线程池会选用不同的阻塞队列，我们可以结合内置线程池来分析。

- 容量为 `Integer.MAX_VALUE` 的 `LinkedBlockingQueue`（无界队列）：`FixedThreadPool` 和 `SingleThreadExector` 。由于队列永远不会被放满，因此`FixedThreadPool`最多只能创建核心线程数的线程。
- `SynchronousQueue`（同步队列） ：`CachedThreadPool` 。`SynchronousQueue` 没有容量，不存储元素，目的是保证对于提交的任务，如果有空闲线程，则使用空闲线程来处理；否则新建一个线程来处理任务。也就是说，`CachedThreadPool` 的最大线程数是 `Integer.MAX_VALUE` ，可以理解为线程数是可以无限扩展的，可能会创建大量线程，从而导致 OOM。
- `DelayedWorkQueue`（延迟阻塞队列）：`ScheduledThreadPool` 和 `SingleThreadScheduledExecutor` 。`DelayedWorkQueue` 的内部元素并不是按照放入的时间排序，而是会按照延迟的时间长短对任务进行排序，内部采用的是“堆”的数据结构，可以保证每次出队的任务都是当前队列中执行时间最靠前的。`DelayedWorkQueue` 添加元素满了之后会自动扩容原来容量的 1/2，即永远不会阻塞，最大扩容可达 `Integer.MAX_VALUE`，所以最多只能创建核心线程数的线程。

### 原理

```java
public E take() throws InterruptedException {
    final ReentrantLock lock = this.lock;
    lock.lockInterruptibly();
    try {
        while (count == 0)
            notEmpty.await();
        return dequeue();
    } finally {
        lock.unlock();
    }
}
```

```java
public void put(E e) throws InterruptedException {
    checkNotNull(e);
    final ReentrantLock lock = this.lock;
    lock.lockInterruptibly();
    try {
        while (count == items.length)
            notFull.await();
        enqueue(e);
    } finally {
        lock.unlock();
    }
}
```

是否有界

阻塞队列还有一个非常重要的属性，那就是容量的大小，分为有界和无界两种。无界队列意味着里面可以容纳非常多的元素，例如 LinkedBlockingQueue 的上限是 Integer.MAX_VALUE，是非常大的一个数，可以近似认为是无限容量，因为我们几乎无法把这个容量装满。但是有的阻塞队列是有界的，例如 ArrayBlockingQueue 如果容量满了，也不会扩容，所以一旦满了就无法再往里放数据了。

能否扩容

因为有时我们并不能在初始的时候很好的准确估计队列的大小，因为业务可能有高峰期、低谷期。如果一开始就固定一个容量，可能无法应对所有的情况，也是不合适的，有可能需要动态扩容。如果我们需要动态扩容的话，那么就不能选择 ArrayBlockingQueue ，因为它的容量在创建时就确定了，无法扩容。相反，PriorityBlockingQueue 即使在指定了初始容量之后，后续如果有需要，也可以自动扩容。所以我们可以根据是否需要扩容来选取合适的队列。

内存结构

我们分析过 ArrayBlockingQueue 的源码，看到了它的内部结构是“数组”的形式。和它不同的是，LinkedBlockingQueue 的内部是用链表实现的，所以这里就需要我们考虑到，ArrayBlockingQueue 没有链表所需要的“节点”，空间利用率更高。所以如果我们对性能有要求可以从内存的结构角度去考虑这个问题。

性能

比如 LinkedBlockingQueue 由于拥有两把锁，它的操作粒度更细，在并发程度高的时候，相对于只有一把锁的 ArrayBlockingQueue 性能会更好。另外，SynchronousQueue 性能往往优于其他实现，因为它只需要“直接传递”，而不需要存储的过程。如果我们的场景需要直接传递的话，可以优先考虑 SynchronousQueue。

### 常见阻塞队列

BlockingQueue 接口的实现类都被放在了 juc 包中，它们的区别主要体现在存储结构上或对元素操作上的不同，但是对于 take 与 put 操作的原理，却是类似的：

| 队列                                                                      | 描述                                                           |
| ------------------------------------------------------------------------- | -------------------------------------------------------------- |
| [ArrayBlockingQueue](https://www.cnblogs.com/interdrp/p/17029346.html)    | 基于数组结构实现的一个有界阻塞队列                             |
| [LinkedBlockingQueue](https://www.cnblogs.com/interdrp/p/17029343.html)   | 基于链表结构实现的一个无界阻塞队列，指定容量为有界阻塞队列     |
| [PriorityBlockingQueue](https://www.cnblogs.com/interdrp/p/17029347.html) | 支持按优先级排序的无界阻塞队列                                 |
| [DelayQueue](https://www.cnblogs.com/interdrp/p/17029348.html)            | 基于优先级队列（PriorityBlockingQueue）实现的无界阻塞队列      |
| [SynchronousQueue](https://www.cnblogs.com/interdrp/p/17029349.html)      | 不存储元素的阻塞队列                                           |
| LinkedTransferQueue                                                       | 基于链表结构实现的一个无界阻塞队列                             |
| [LinkedBlockingDeque](https://www.cnblogs.com/interdrp/p/17029344.html)   | 基于链表结构实现的一个无界双端阻塞队列，指定容量为有界阻塞队列 |

## 问题

### 重启

如果线程池设置阻塞队列，队列长度一万，任务多、队列满，线程池一直在工作，如果重启应用，可能会出现以下后果：

1. 任务丢失：如果线程池中存在未处理的任务，重启应用可能会导致这些任务丢失，从而影响应用的正常运行。

2. 线程池资源占用过高：如果线程池一直在工作，可能会占用大量的 CPU 和内存资源，导致应用重启过程中其他模块的性能下降。

3. 应用启动时间过长：如果线程池中存在大量的任务，重启应用可能会导致应用启动时间过长，从而影响用户体验。

为了避免以上问题，可以采取以下措施：

1. 提前关闭线程池：在应用重启前，可以提前关闭线程池，避免任务丢失和线程池资源占用过高的问题。

2. 等待任务处理完成：在应用重启前，可以等待线程池中的任务处理完成，避免任务丢失的问题。

3. 调整线程池参数：可以根据实际情况调整线程池的参数，例如增加线程池的大小、减小队列的长度等，从而避免线程池资源占用过高和任务积压的问题。

4. 限流：可以通过限制每个请求的处理时间和并发数，避免请求的积压和堆积，从而保证应用重启过程中的稳定性。

总的来说，线程池设置阻塞队列，队列长度一万，任务多、队列满，线程池一直在工作，如果重启应用，可能会出现一些问题，需要根据实际情况采取相应的措施进行解决。

## 使用进阶

### 线程池的创建

需要手动通过 ThreadPoolExecutor 创建，使用者要非常明确业务场景并定制线程池，避免误用可能导致的问题。

以下是阿里巴巴 Java 开发手册中的描述：

![img](https://cdn.jsdelivr.net/gh/davidliuk/images@master/blog/1661796d7ccf38c17bbd4547a0ff8691.png)

ThreadFactory：推荐使用 guava 中的 ThreadFactoryBuilder 创建：

```scss
new ThreadFactoryBuilder().setNameFormat("name-%d").build();
```

### 阻塞队列在线程池中的使用

很多同学一看到阻塞队列就自然的认为出入队列都是阻塞的，使用的阻塞队列也就没必要关心拒绝策略了，其实不然，阻塞队列在任务提交和任务获取阶段使用了不同的策略。

- 任务提交阶段：调用的阻塞队列的 offer 方法，这个方法是**非阻塞**的，如果插入队列失败会直接返回 false，并触发拒绝策略；

- 获取任务阶段：使用的是 take 方法，此方法时阻塞的；


### 保证提交阶段任务不丢失

**CallerRunsPolicy 拒绝策略**

ThreadPoolExecutor.CallerRunsPolicy：由提交任务的线程处理

这种是最简单的策略，但需要注意的是如果任务耗时较长，会阻塞提交任务的线程，可能会成为系统瓶颈。

**自定义拒绝策略**

既然 Java 线程默认使用的是 offer 提交任务，那我们可以自定义拒绝策略在任务提交失败时改为 put 阻塞提交。

缺点也是会阻塞提交线程，不过相比 CallerRunsPolicy 策略更能发挥多线程的优势。

```coffeescript
RejectedExecutionHandler executionHandler = (r, executor) -> {
    try {
        executor.getQueue().put(r);
    } catch (InterruptedException e) {
        Thread.currentThread().interrupt();
        throw new RejectedExecutionException("Producer thread interrupted", e);
    }
};
```

**配合 MQ 保证任务不丢失**

使用默认的 ThreadPoolExecutor.AbortPolicy 策略，如果抛出 RejectedExecutionException 异常则返回给 MQ 消费失败，MQ 会保证自动重试。

### 保证未执行完成的任务不丢失

当服务停止的时候，线程池中队列和活跃线程中未执行完成的任务可能会造成数据丢失，首先说下结论：无论采取任何策略，在 Java 层都不能 100%保证不丢，比如机器突然断电的情况。我们还是可以采取一定的措施尽量避免任务丢失。

#### 线程池关闭

线程池关闭有两个方法：

- `shutdown()`：线程池拒接收新提交的任务，同时等待线程池里的任务执行完毕后关闭线程池。
- `shutdownNow()`：线程池拒绝接收新提交的任务，同时立马关闭线程池，线程池里的任务不再执行，并抛出 InterruptedException 异常。

#### 注册关闭钩子

使用以下方法注册 JVM 进程关闭钩子，在钩子方法中执行线程池关闭、未处理完成的任务持久化保存等。

```scss
Runtime.getRuntime().addShutdownHook()
```

> 钩子方法在使用 kill -9 杀死进程时不会执行，一般的杀进程的方式是先执行 kill，等待一段时间，如果进程还没杀死，再执行 kill -9。

要保证队列中的任务不丢失，需要将消费队列中的数据，发送到外部 MQ 中；

保证未执行完成的任务不丢失，需要在抛出 InterruptedException 异常后，将任务参数保证到 MQ 中；

注意：

1. 尽量不要把未完成的任务保存到本地磁盘，尤其是在经常扩缩容的弹性集群里；
2. 捕获 InterruptedException 异常后，不要做重试等耗时操作；
3. 需要监控任务都发送到 MQ 中的时间，以便调整 kill -9 强制执行前的等待时间。

#### 使用 MQ 保证任务必须执行完成

通过上面介绍的两种方式，可以处理大部分正常停止服务丢数据的任务。不过对于极端情况下，比如断电、断网等，需要严格保证任务不丢失的场景还是不能满足业务需要，这种情况下就需要依赖 MQ。

方案是：使用线程池的 submit 方法提交任务，通过 future 获取到任务执行完成再返回给 MQ 消费完成。在 MQ 中如何保证数据不丢失是另外一个复杂的话题了，这里不再深入探讨。

注意：如果采用这种方案，需要保证处理任务的**幂等性**，在操作步骤比较多的时候，复杂性也会很高。

### 异常处理

异常感知的方式

- `execute()`：抛异常会被提交任务线程感知；
- `submit()`：抛异常不会被提交任务线程感知，在 `Future.get()` 执行时被感知；

#### 统一处理方案 1：异步任务里统一 catch

在线程池的执行逻辑最外层，包装 try、catch，处理所有异常。

缺点是：

1) 所有的不同任务都要 try catch，增加了代码量。
2) 不存在 checked exception 的地方也需要都 try catch 起来，代码丑陋。

#### 统一处理方案 2：覆写统一异常处理方法

此方案有两种常用实现：

1) 自定义线程池，继承 ThreadPoolExecutor 并覆写其 afterExecute 方法；
2) 创建线程池时自定义 ThreadFactory，在实现里手动创建线程池，并调用 Thread.setUncaughtExceptionHandler 注册统一异常处理器。

#### 统一处理方案 3：Future

任务提交都使用 submit，并在 Future.get() 时捕获所有异常。
