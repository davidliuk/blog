# ThreadLocal

解决线程安全问题的另一种思路，之前是共享资源加锁或 CAS 重试，现在是线程隔离各用各的。

作用：

- 实现资源对象的线程隔离，让每个线程各用各的资源对象，避免争用引发的线程安全问题
- 实现了线程内的资源共享

局部变量：可以线程隔离，但是不能跨方法。Thread Local主要解决的就是这个跨方法的问题

## 线程关联的原理

ThreadLocal 并不是一个独立的存在, 它与 Thread 类是存在耦合的, java.lang.Thread 类针对 ThreadLocal 提供了如下支持：

```go
/* ThreadLocal values pertaining to this thread. This map is maintained
 * by the ThreadLocal class. 
 */
ThreadLocal.ThreadLocalMap threadLocals = null;
```

`Thread`类有一个类型为`ThreadLocal.ThreadLocalMap`的实例变量`threadLocals`，也就是说每个线程有一个自己的`ThreadLocalMap`。

`ThreadLocalMap`有自己的独立实现，可以简单地将它的`key`视作`ThreadLocal`，`value`为代码中放入的值（实际上`key`并不是`ThreadLocal`本身，而是它的一个**弱引用**）。

每个线程在往`ThreadLocal`里放值的时候，都会往自己的`ThreadLocalMap`里存，读也是以`ThreadLocal`作为引用，在自己的`map`里找对应的`key`，从而实现了**线程隔离**。

`ThreadLocalMap`有点类似`HashMap`的结构，只是`HashMap`是由**数组+链表**实现的，而`ThreadLocalMap`中并没有**链表**结构。

我们还要注意`Entry`， 它的`key`是`ThreadLocal<?> k` ，继承自`WeakReference`， 也就是我们常说的弱引用类型。

## 为什么 Map 的 key 要设置成弱引用呢？

因为如果我们 ThreadLocalMap 中的 ThreadLocal 不设置成弱引用，设置成强引用的话，如果外界已经将所有引用 ThreadLocal 的地方设置为了 null(也就是不再使用了)，但是我们的 Map 里的 key 还指向堆内存里的 ThreadLocal 呢，而我们又不能直接操控 Map。

并且这个线程始终在运行(比如说线程池复用连接)，那么久而久之，堆内存里的 ThreadLocal 就无法被回收，造成`内存泄露`。

而设计成弱引用的话，在每次 GC 时，发现没有其他强引用指向 ThreadLocal 了，便会将其回收。

概括说就是：在方法中新建一个线程本地对象，就有一个强引用指向它，在调用 set()后，线程的 ThreadLocaMap 对象里的 Entry 对象又有一个引用 k 指向它。如果后面这个引用 k 是强引用就会使方法执行完，栈帧中的强引用销毁了，对象还不能回收，造成严重的内存泄露。

那为什么不设置成软引用呢？

让没有引用的尽快被回收，而不用等到内存不够再回收

## 内存泄漏

**ThreadLocal** 在 **ThreadLocalMap** 中是以一个弱引用身份被Entry中的Key引用的，因此如果ThreadLocal没有外部强引用来引用它，那么ThreadLocal会在下次JVM垃圾收集时被回收。这个时候就会出现Entry中Key已经被回收，出现一个null Key的情况，外部读取ThreadLocalMap中的元素是无法通过null Key来找到Value的。因此如果当前线程的生命周期很长，一直存在，那么其内部的ThreadLocalMap对象也一直生存下来，这些null key就存在一条强引用链的关系一直存在：Thread --> ThreadLocalMap-->Entry-->Value，这条强引用链会导致Entry不会回收，Value也不会回收，但Entry中的Key却已经被回收的情况，造成内存泄漏。

但是JVM团队已经考虑到这样的情况，并做了一些措施来保证ThreadLocal尽量不会内存泄漏：在ThreadLocal的get()、set()、remove()方法调用的时候会清除掉线程ThreadLocalMap中所有Entry中Key为null的Value，并将整个Entry设置为null，利于下次内存

由于**ThreadLocalMap**的key是弱引用，而Value是强引用。这就导致了一个问题，ThreadLocal在没有外部对象强引用时，发生GC时弱引用Key会被回收，而Value不会回收，如果创建ThreadLocal的线程一直持续运行，那么这个Entry对象中的value就有可能一直得不到回收，发生内存泄露。

## 线程池脏读问题

ThreadLocal 是利用独占资源的方式，来解决线程安全问题，那如果我们确实需要有资源在线程之间共享，应该怎么办呢？这时，我们可能就需要用到线程安全的容器了。

上个例子说明，**ThreadLocal用不好也会产生副作用**，线程复用会产生脏数据。由于线程 池会重用Thread对象，那么与Thread绑定的类的静态属性ThreadLocal变量也会被重用。如果在实现的线程run()方法体中不显式地调用于线程相关的ThreadLocal信息，那么倘若下一个线程不调用set()设置初始值，就可能get到重用的线程信息，包括ThreadLocal所关联的线程对象的value值。

解决方案也很简单，在每个线程执行中，往ThreadLocal对象设置值后，执行完核心逻辑代码，最后对ThreadLocal对象进行清理。优化后的代码如下：

## 父子线程间共享

我们使用`ThreadLocal`的时候，在异步场景下是无法给子线程共享父线程中创建的线程副本数据的。

为了解决这个问题，JDK 中还有一个`InheritableThreadLocal`类，我们来看一个例子：

```java
public class InheritableThreadLocalDemo {
    public static void main(String[] args) {
        ThreadLocal<String> threadLocal = new ThreadLocal<>();
        ThreadLocal<String> inheritableThreadLocal = new InheritableThreadLocal<>();
        ThreadLocal.set("父类数据:threadLocal");
        inheritableThreadLocal.set("父类数据:inheritableThreadLocal");

        new Thread(() -> {
            System.out.println("子线程获取父类ThreadLocal数据：" + threadLocal.get());
            System.out.println("子线程获取父类inheritableThreadLocal数据：" + inheritableThreadLocal.get());
        }).start();
    }
}
```

打印结果：

- 子线程获取父类ThreadLocal数据：null
- 子线程获取父类inheritableThreadLocal数据：父类数据:inheritableThreadLocal

实现原理是子线程是通过在父线程中通过调用`new Thread()`方法来创建子线程，`Thread#init`方法在`Thread`的构造方法中被调用。在`init`方法中拷贝父线程数据到子线程中：

但`InheritableThreadLocal`仍然有缺陷，一般我们做异步化处理都是使用的线程池，而`InheritableThreadLocal`是在`new Thread`中的`init()`方法给赋值的，而线程池是线程复用的逻辑，所以这里会存在问题。

解决问题方案：阿里巴巴的`TransmittableThreadLocal`组件就可以解决这个问题。