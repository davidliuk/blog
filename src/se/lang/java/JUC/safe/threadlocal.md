# ThreadLocal

解决线程安全问题的另一种思路，之前是共享资源加锁或 CAS 重试，现在是线程隔离各用各的。

作用：

- 实现资源对象的线程隔离，让每个线程各用各的资源对象，避免争用引发的线程安全问题
- 实现了线程内的资源共享

局部变量，可以线程隔离，但是不能跨方法

`Thread`类有一个类型为`ThreadLocal.ThreadLocalMap`的实例变量`threadLocals`，也就是说每个线程有一个自己的`ThreadLocalMap`。

`ThreadLocalMap`有自己的独立实现，可以简单地将它的`key`视作`ThreadLocal`，`value`为代码中放入的值（实际上`key`并不是`ThreadLocal`本身，而是它的一个**弱引用**）。

每个线程在往`ThreadLocal`里放值的时候，都会往自己的`ThreadLocalMap`里存，读也是以`ThreadLocal`作为引用，在自己的`map`里找对应的`key`，从而实现了**线程隔离**。

`ThreadLocalMap`有点类似`HashMap`的结构，只是`HashMap`是由**数组+链表**实现的，而`ThreadLocalMap`中并没有**链表**结构。

我们还要注意`Entry`， 它的`key`是`ThreadLocal<?> k` ，继承自`WeakReference`， 也就是我们常说的弱引用类型。

# 为什么 Map 的 key 要设置成弱引用呢？？

因为如果我们 ThreadLocalMap 中的 ThreadLocal 不设置成弱引用，设置成强引用的话，如果外界已经将所有引用 ThreadLocal 的地方设置为了 null(也就是不再使用了)，但是我们的 Map 里的 key 还指向[堆内存](https://so.csdn.net/so/search?q=堆内存&spm=1001.2101.3001.7020)里的 ThreadLocal 呢，而我们又不能直接操控 Map。

并且这个线程始终在运行(比如说线程池复用连接)，那么久而久之，堆内存里的 ThreadLocal 就无法被回收，造成`内存泄露`。

而设计成弱引用的话，在每次 GC 时，发现没有其他强引用指向 ThreadLocal 了，便会将其回收

概括说就是:在方法中新建一个线程本地对象，就有一个强引用指向它，在调用 set()后，线程的 ThreadLocaMap 对象里的 Entry 对象又有一个引用 k 指向它。如果后面这个引用 k 是强引用就会使方法执行完，栈帧中的强引用销毁了，对象还不能回收，造成严重的内存泄露。

**那为什么不设置成软引用呢？？我自己思考的话：应该就是让没有引用的尽快回收，而不用等到内存不够在回收**
