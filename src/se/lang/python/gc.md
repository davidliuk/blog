# Garbage Collection

GC要做的有 2 件事，

1. 找到内存中无用的垃圾对象资源
2. 清除找到的这些垃圾对象，释放内存给其他对象使用。

Python GC主要使用引用计数（reference counting）来跟踪和回收垃圾。在引用计数的基础上，通过“标记-清除”（mark and sweep）解决容器对象可能产生的循环引用问题，通过“分代回收”（generation collection）以空间换时间的方法提高垃圾回收效率。

#### 引用计数

每一个对象在源码中的结构体表示如下：

```c
typedef struct_object {
 int ob_refcnt;
 struct_typeobject *ob_type;
} PyObject;
```

PyObject 是每个对象必有的内容，其中ob_refcnt就是做为引用计数。当一个对象有新的引用时，它的ob_refcnt就会增加，当引用它的对象被删除，它的ob_refcnt就会减少。引用计数为0时，该对象立即被回收，对象占用的内存空间将被释放。

优点:

- 简单
- 实时性，一旦没有引用，内存就直接释放了。不用像其他机制等到特定时机。

缺点:

- 需要额外的空间维护引用计数。
- 不能解决对象的循环引用。(主要缺点)

#### 标记-清除

标记清除主要是解决循环引用问题。

标记清除算法是一种基于追踪回收（tracing GC）技术实现的垃圾回收算法。

它分为两个阶段：

1. 标记阶段，GC 会把所有的 活动对象 打上标记
2. 把那些没有标记的对象 非活动对象 进行回收。

那么 GC 又是如何判断哪些是活动对象哪些是非活动对象的呢？

对象之间通过引用（指针）连在一起，构成一个有向图，对象构成这个有向图的节点，而引用关系构成这个有向图的边。

1. 根对象就是全局变量、调用栈、寄存器。
2. 从根对象（root object）出发，沿着有向边遍历对象，可达的（reachable）对象标记为活动对象，不可达的对象就是要被清除的非活动对象。

#### 分代技术

分代回收是一种以空间换时间的操作方式。同时，分代回收是建立在标记清除技术基础之上。

Python 将内存根据对象的存活时间划分为不同的集合，每个集合称为一个代，Python 将内存分为了 3“代”，分别为年轻代（第 0 代）、中年代（第 1 代）、老年代（第 2 代），他们对应的是 3 个链表，它们的垃圾收集频率与对象的存活时间的增大而减小。

新创建的对象都会分配在年轻代，年轻代链表的总数达到上限时，Python 垃圾收集机制就会被触发，把那些可以被回收的对象回收掉，而那些不会回收的对象就会被移到中年代去，依此类推，老年代中的对象是存活时间最久的对象，甚至是存活于整个系统的生命周期内。