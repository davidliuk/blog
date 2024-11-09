# 阅读清单

[Spring Cloud 迁移至 K8s](https://juejin.cn/post/7282363816021000253?utm_source=gold_browser_extension)

项目是一个一个微服务组织起来的，大概业务类的服务有5个,公共服务有4个。 设计到的改造主要集中在gateway, auth中，公共包的一些改造比较少，主要是将open-feign的访问改为通过url进行调用，而不是之前通过服务名来。

而在kubernetes中，我们使用Traefik2来代替gateway的功能，不知道traefik2的，可以去翻翻之前的文章。

同时对于授权,需要提供一个授权接口，配合traefik2使用，这样每一个请求都会进行授权的验证。

分布式锁：https://juejin.cn/post/7279346413915668535?utm_source=gold_browser_extension

幂等性：https://juejin.cn/post/7273024681631776829?utm_source=gold_browser_extension

Optional：https://juejin.cn/post/7267919941525585977?utm_source=gold_browser_extension

Spring Event坑：https://juejin.cn/post/7281159113882468371?utm_source=gold_browser_extension

CompletableFuture优化：https://juejin.cn/post/7280746526820679732

Arthas Trace优化接口：https://juejin.cn/post/7259320326898876477?utm_source=gold_browser_extension

OCR：Tess4J，https://juejin.cn/post/7288964017351573545?utm_source=gold_browser_extension

WebClient：https://juejin.cn/post/7294150742113304602?utm_source=gold_browser_extension