

> JDK追求的是通用性，而Netty则专注于高并发和网络通信。

我们可以通过几个具体的例子来看看它们在实现上的区别。

### 1. ThreadLocal )实现

JDK的ThreadLocal采用的是[非波拉契散列法](https://www.zhihu.com/search?q=非波拉契散列法&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra={"sourceType"%3A"answer"%2C"sourceId"%3A3508007258})和开放寻址。这种设计可以保证在大多数情况下，数据在内存中的分布更均匀，减少了碰撞的可能性。但在高并发场景下，这种实现还是有点力不从心。

而Netty的FastThreadLocal则采取了数组下标递增的方式。这么做的好处是，完全避免了哈希碰撞，也不需要rehash操作，因此在高并发情况下性能更好。

例如：

我们在一个高并发的[交易系统](https://www.zhihu.com/search?q=交易系统&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra={"sourceType"%3A"answer"%2C"sourceId"%3A3508007258})中，原来用的是JDK的ThreadLocal，结果频繁的碰撞导致性能瓶颈。换成Netty的FastThreadLocal后，性能瓶颈问题得到了很大缓解，系统吞吐量也显著提升。

### 2. 堆外内存释放机制

JDK提供的[DirectByteBuffer](https://www.zhihu.com/search?q=DirectByteBuffer&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra={"sourceType"%3A"answer"%2C"sourceId"%3A3508007258})会在初始化时默认开启Cleaner，这样在DirectByteBuffer被GC时，Cleaner会自动调用[clean()](https://www.zhihu.com/search?q=clean()&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra={"sourceType"%3A"answer"%2C"sourceId"%3A3508007258})方法清理堆外内存，避免[内存泄漏](https://www.zhihu.com/search?q=内存泄漏&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra={"sourceType"%3A"answer"%2C"sourceId"%3A3508007258})。

> 不过，这种机制也带来了额外的性能开销。

Netty为了提升性能，引入了No Cleaner策略，通过retain/release手动管理内存释放。

这种方式虽然提高了性能，但也增加了内存泄漏的风险。

> 值得注意的是，[Netty 5](https://www.zhihu.com/search?q=Netty 5&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra={"sourceType"%3A"answer"%2C"sourceId"%3A3508007258})已经将No Cleaner策略默认关闭，需要通过指定[JVM](https://www.zhihu.com/search?q=JVM&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra={"sourceType"%3A"answer"%2C"sourceId"%3A3508007258})启动参数来开启。

例如： 之前我们在一个需要频繁分配和释放内存的项目中，使用JDK的DirectByteBuffer导致了大量的GC和性能开销。改用Netty的No Cleaner策略后，GC次数减少了，性能也提升了。

不过，我们也遇到了内存泄漏的问题，最后还是在代码中仔细管理了内存的分配和释放。

### 3. 线程池实现

JDK的线程池用的是[BlockingQueue](https://www.zhihu.com/search?q=BlockingQueue&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra={"sourceType"%3A"answer"%2C"sourceId"%3A3508007258})来保存任务队列，线程从这个队列获取任务时会产生锁竞争，进而降低性能。

Netty则通过每个[channel](https://www.zhihu.com/search?q=channel&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra={"sourceType"%3A"answer"%2C"sourceId"%3A3508007258})固定绑定一个IO线程（[NioEventLoop](https://www.zhihu.com/search?q=NioEventLoop&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra={"sourceType"%3A"answer"%2C"sourceId"%3A3508007258})），这个线程会处理该channel上的所有IO任务，从而避免了线程池级别的任务竞争。另外，为了解决IO线程内部的任务队列竞争，Netty使用了[JCTools](https://www.zhihu.com/search?q=JCTools&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra={"sourceType"%3A"answer"%2C"sourceId"%3A3508007258})提供的MpscQueue（多生产者单消费者队列），利用[CAS](https://www.zhihu.com/search?q=CAS&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra={"sourceType"%3A"answer"%2C"sourceId"%3A3508007258})操作避免了JDK中BlockingQueue的锁竞争。

### 4. 网络传输性能

JDK的NIO和Netty在网络传输性能上的差异也很明显。

JDK的NIO虽然引入了[非阻塞I/O](https://www.zhihu.com/search?q=非阻塞I%2FO&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra={"sourceType"%3A"answer"%2C"sourceId"%3A3508007258})，但在处理大数据量传输时，其[零拷贝](https://www.zhihu.com/search?q=零拷贝&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra={"sourceType"%3A"answer"%2C"sourceId"%3A3508007258})机制（FileChannel.[transferTo](https://www.zhihu.com/search?q=transferTo&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra={"sourceType"%3A"answer"%2C"sourceId"%3A3508007258})）在实际应用中往往并不理想。

其实现过程中可能会涉及多次用户态到[内核态](https://www.zhihu.com/search?q=内核态&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra={"sourceType"%3A"answer"%2C"sourceId"%3A3508007258})的切换，导致性能不如预期。

Netty在这方面进行了大量优化。它提供了高效的零拷贝技术，如直接缓冲区和[CompositeByteBuf](https://www.zhihu.com/search?q=CompositeByteBuf&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra={"sourceType"%3A"answer"%2C"sourceId"%3A3508007258})，使得在处理大数据量传输时，减少了内存复制操作，显著提高了传输性能。

**例如**： 在一个需要处理大文件传输的系统中，最初我们使用JDK的FileChannel.transferTo方法，结果发现传输速度并不理想，CPU使用率也较高。改用Netty的零拷贝机制后，传输速度明显提升，CPU占用率也大幅降低。

### 5. 消息编解码

JDK的NIO提供了基本的ByteBuffer操作，但在实际开发中，消息的编解码往往比较繁琐，需要开发者自己处理字节的读写和[协议解析](https://www.zhihu.com/search?q=协议解析&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra={"sourceType"%3A"answer"%2C"sourceId"%3A3508007258})。

Netty提供了丰富的编解码器，如ProtobufEncoder/Decoder、[HttpObjectDecoder](https://www.zhihu.com/search?q=HttpObjectDecoder&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra={"sourceType"%3A"answer"%2C"sourceId"%3A3508007258})等，使得开发者可以方便地处理各种协议的编解码。这些编解码器不仅功能强大，而且性能也经过了精心优化。

### 6. 连接管理

JDK的NIO在处理大量短连接时表现不佳，频繁的连接创建和销毁会带来很大的性能开销，尤其是当连接数达到几千甚至几万时，系统的性能会急剧下降。

Netty通过优化连接管理，提高了系统的吞吐量。它支持[连接池](https://www.zhihu.com/search?q=连接池&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra={"sourceType"%3A"answer"%2C"sourceId"%3A3508007258})和长连接，可以有效减少连接创建和销毁的开销，提高了连接处理效率。

### 7. 事件驱动模型

JDK的NIO提供了基本的事件驱动机制，但其Selector的实现比较低效，在高并发场景下，Selector的性能往往无法满足需求。

Netty的[事件驱动模型](https://www.zhihu.com/search?q=事件驱动模型&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra={"sourceType"%3A"answer"%2C"sourceId"%3A3508007258})通过NioEventLoop优化了事件处理机制，减少了不必要的系统调用和上下文切换，提高了事件处理的效率。同时，Netty还支持多种事件类型和优先级调度，灵活性更高。

### 8. 安全性和稳定性

JDK在[网络编程](https://www.zhihu.com/search?q=网络编程&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra={"sourceType"%3A"answer"%2C"sourceId"%3A3508007258})中的安全性和稳定性方面虽然有一定保障，但其默认实现往往不够灵活，不能满足复杂场景下的需求。

Netty在安全性方面提供了更丰富的支持

例如，Netty内置了对SSL/[TLS](https://www.zhihu.com/search?q=TLS&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra={"sourceType"%3A"answer"%2C"sourceId"%3A3508007258})的支持，并且可以通过[SSLContextBuilder](https://www.zhihu.com/search?q=SSLContextBuilder&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra={"sourceType"%3A"answer"%2C"sourceId"%3A3508007258})等工具方便地配置安全参数。

此外，Netty的错误处理机制也更为完善，能够更好地应对各种异常情况，提升了系统的稳定性。

**例如**： 在一个需要高安全性的支付系统中，我们最初使用JDK的SSL实现，但配置和管理比较复杂，性能也不够理想。改用Netty的SSL支持后，配置变得更加简便，安全性和性能也都有了明显提升。

### 总结

总的来说，Netty认为JDK的许多实现不够高效，主要是因为Netty在高并发、网络通信等场景下进行了大量专门的优化。

这些优化不仅提升了性能，还简化了开发过程，使得开发者可以更专注于业务逻辑。

对于需要处理高并发和大数据量传输的应用，Netty无疑是一个更好的选择。