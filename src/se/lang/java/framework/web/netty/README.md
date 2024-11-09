# Netty

Netty基于NIO(NIO是一种同步非阻塞的I/O模型，在Java1.4中引入了NIO),使用Netty可以极大地简化TCP和UDP套接字服务器等网络编程，并且性能以及安全性等很多方面都非常优秀。

大部分框架底层涉及到网络通信的部分都是基于Netty来做的，比如说Spring Cloud生态系统中的网关Spring Cloud Gateway。我们平常经常接触的Dubbo、RocketMQ、Elasticsearch、gRPC、Spark等等热门开源项目都用到了Netty。

### Bytebuf

字节容器

网络通信最终都是通过字节流进行传输的。ByteBuf就是Netty提供的一个字节容器，其内部是一个字节数组。当我们通过Netty传输数据的时候，就是通过ByteBuf进行的。我们可以将ByteBuf看作是Netty对Java NIO提供了ByteBuffer字节容器的封装和抽象。

有很多小伙伴可能就要问了：为什么不直接使用Java NIO提供的ByteBuffer呢？

因为ByteBuffer这个类使用起来过于复杂和繁琐。

### Bootstrap和ServerBootstrap(启动引导类)

### Channel（网络操作抽象类）

Channel 接口是 Netty 对网络操作抽象类。通过 Channel 我们可以进行 I/O 操作。

一旦客户端成功连接服务端，就会新建一个 Channel 同该用户端进行绑定，示例代码如下：

```Java
//  通过 Bootstrap 的 connect 方法连接到服务端
public Channel doConnect(InetSocketAddress inetSocketAddress) {
    CompletableFuture<Channel> completableFuture = new CompletableFuture<>();
    bootstrap.connect(inetSocketAddress).addListener((ChannelFutureListener) future -> {
        if (future.isSuccess()) {
            completableFuture.complete(future.channel());
        } else {
            throw new IllegalStateException();
        }
    });
    return completableFuture.get();
}
```

比较常用的Channel接口实现类是 ：

- 
NioServerSocketChannel（服务端）
- 
NioSocketChannel（客户端）

这两个 Channel 可以和 BIO 编程模型中的ServerSocket以及Socket两个概念对应上。


### EventLoop（事件循环）

EventLoop 介绍

这么说吧！EventLoop（事件循环）接口可以说是 Netty 中最核心的概念了！

《Netty 实战》这本书是这样介绍它的：

EventLoop 定义了 Netty 的核心抽象，用于处理连接的生命周期中所发生的事件。

是不是很难理解？说实话，我学习 Netty 的时候看到这句话是没太能理解的。

说白了，EventLoop 的主要作用实际就是责监听网络事件并调用事件处理器进行相关 I/O 操作（读写）的处理。

Channel 和 EventLoop 的关系

那 Channel 和 EventLoop 直接有啥联系呢？

Channel 为 Netty 网络操作(读写等操作)抽象类，EventLoop 负责处理注册到其上的Channel 的 I/O 操作，两者配合进行 I/O 操作。

EventloopGroup 和 EventLoop 的关系

EventLoopGroup 包含多个 EventLoop（每一个 EventLoop 通常内部包含一个线程），它管理着所有的 EventLoop 的生命周期。

并且，EventLoop 处理的 I/O 事件都将在它专有的 Thread 上被处理，即 Thread 和 EventLoop 属于 1 : 1 的关系，从而保证线程安全。

下图是 Netty NIO 模型对应的 EventLoop 模型。通过这个图应该可以将EventloopGroup、EventLoop、 Channel三者联系起来。

### 零拷贝

零复制（英语：Zero-copy；也译零拷贝）技术是指计算机执行操作时，CPU 不需要先将数据从某处内存复制到另一个特定区域。这种技术通常用于通过网络传输文件时节省 CPU 周期和内存带宽。

在 OS 层面上的 Zero-copy 通常指避免在 用户态(User-space) 与 内核态(Kernel-space) 之间来回拷贝数据。而在 Netty 层面 ，零拷贝主要体现在对于数据操作的优化。

Netty 中的零拷贝体现在以下几个方面：

1. 通过 FileRegion 包装的`FileChannel#tranferTo()` 实现文件传输, 可以直接将文件缓冲区的数据发送到目标 Channel, 避免了传统通过循环 write 方式导致的内存拷贝问题。这个调用了操作系统底层的sendFile（如果不行就换mmap或普通传）
2. 堆外内存，避免 JVM 堆内存到堆外内存的数据拷贝。
3. 使用 Netty 提供的 CompositeByteBuf 类, 可以将多个ByteBuf 合并为一个逻辑上的 ByteBuf, 避免了各个 ByteBuf 之间的拷贝。
4. 通过 Unpooled.wrappedBuffer 可以将 byte 数组包装成 ByteBuf 对象，包装过程中不会产生内存拷贝。
5. ByteBuf 支持 slice 操作, 因此可以将 ByteBuf 分解为多个共享同一个存储区域的 ByteBuf, 避免了内存的拷贝。