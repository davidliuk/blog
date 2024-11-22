# 多级缓存

1. 一级缓存：Caffeine是一个一个高性能的 Java 缓存库；使用 Window TinyLfu 回收策略，提供了一个近乎最佳的命中率。
2. 二级缓存：Redis 是一高性能、高可用的 key-value 数据库，支持多种数据类型，支持集群，和应用服务器分开部署易于横向扩展。

in-memory cache

日常开发中，基本上每个项目中都会使用到Redis、MongoDB等缓存中间件，它能够很好的作为分布式缓存组件提供多个服务间的缓存，但是还是需要网络开销，增加时耗。

除了分布式缓存，其实还有一种缓存 - 本地缓存：直接从本地内存中读取，没有网络开销，在某些场景比远程缓存更合适。Guava cache、ehcache、Caffeine是目前比较流行的本地缓存组件，但Caffeine号称是本地缓存绝对的王者。

Caffeine 是一个基于 Java8 开发的提供了近乎最佳命中率的高性能的缓存库。缓存和 ConcurrentMap 有点相似，但还是有所区别，最根本的区别是 ConcurrentMap 将会持有所有加入到缓存当中的元素，直到它们被从缓存当中手动移除。

Caffeine 的底层使用了 ConcurrentHashMap，支持按照一定的规则或者自定义的规则使缓存的数据过期，然后销毁。在 Spring5 (springboot 2.x) 后，Spring 官方放弃了 Guava，而使用了性能更优秀的 Caffeine 作为默认缓存组件。

![img](https://img-blog.csdnimg.cn/14b2973946d84c0c8ac1daaa277966d6.jpg?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5q-P5aSp6YO96KaB6L-b5q2l5LiA54K554K5,size_14,color_FFFFFF,t_70,g_se,x_16)

查询：Caffeine 作为一级缓存，Redis 作为二级缓存，对于指定的高热key，

1. 优先访问一级缓存，
2. 没有再去访问二级缓存，
3. 再没有去执行接口更新删除：通过redis订阅topic，通知所有节点去删除本地缓存和redis缓存

优点：提高缓存速度，减少网络io 缺点：多节点下缓存的维护与同步成本增加，对于会更新的key，不可靠性加大（难以保证一致性）

---

**具体的缓存时间可以根据自己业务数据的更新频率来确定 ，原则上：本地缓存的时长要比redis更短一些，因为redis中的数据我们通常会采用同步机制来更新， 而本地缓存因为在各台web服务内部，所以时间上不要太长！**

## 实现

> [参考](https://juejin.cn/post/7264236820724482104)

Spring 本来就提供了Cache的支持，最核心的就是实现Cache和CacheManager接口。但是Spring Cache存在以下问题：

- Spring Cache 仅支持单一的缓存来源，即：只能选择 Redis 实现或者 Caffeine 实现，并不能同时使用。

  可以Spring Cache 本地缓存（注解自动），Spring Data Redis 二级缓存（手动）

- 数据一致性：各层缓存之间的数据一致性问题，如应用层缓存和分布式缓存之前的数据一致性问题。

由此我们可以通过重新实现 Cache 和 CacheManager 接口，整合redis和caffeine，从而实现多级缓存。在讲实现原理之前先看看多级缓存调用逻辑图：

双写一致性：先更新二级缓存再删除一级缓存

![img](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c8206e5fa0e342ddafd8ae9d2cd2d83a~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp)