const e=JSON.parse(`{"key":"v-1668525e","path":"/cs/database/redis/principal/thread-%20model/%E7%BA%BF%E7%A8%8B%E6%A8%A1%E5%9E%8B.html","title":"线程模型","lang":"en-US","frontmatter":{"description":"线程模型 Redis 是单线程吗？ Redis 单线程指的是「接收客户端请求-&gt;解析请求 -&gt;进行数据读写等操作-&gt;发送数据给客户端」这个过程是由一个线程（主线程）来完成的，这也是我们常说 Redis 是单线程的原因。 但是，Redis 程序并不是单线程的，Redis 在启动的时候，是会启动后台线程（BIO）的：（Background IO） Redis 在 2.6 版本，会启动 2 个后台线程，分别处理关闭文件、AOF 刷盘这两个任务； Redis 在 4.0 版本之后，新增了一个新的后台线程，用来异步释放 Redis 内存，也就是 lazyfree 线程。例如执行 unlink key / flushdb async / flushall async 等命令，会把这些删除操作交给后台线程来执行，好处是不会导致 Redis 主线程卡顿。因此，当我们要删除一个大 key 的时候，不要使用 del 命令删除，因为 del 是在主线程处理的，这样会导致 Redis 主线程卡顿，因此我们应该使用 unlink 命令来异步删除大key。","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/cs/database/redis/principal/thread-%20model/%E7%BA%BF%E7%A8%8B%E6%A8%A1%E5%9E%8B.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"线程模型"}],["meta",{"property":"og:description","content":"线程模型 Redis 是单线程吗？ Redis 单线程指的是「接收客户端请求-&gt;解析请求 -&gt;进行数据读写等操作-&gt;发送数据给客户端」这个过程是由一个线程（主线程）来完成的，这也是我们常说 Redis 是单线程的原因。 但是，Redis 程序并不是单线程的，Redis 在启动的时候，是会启动后台线程（BIO）的：（Background IO） Redis 在 2.6 版本，会启动 2 个后台线程，分别处理关闭文件、AOF 刷盘这两个任务； Redis 在 4.0 版本之后，新增了一个新的后台线程，用来异步释放 Redis 内存，也就是 lazyfree 线程。例如执行 unlink key / flushdb async / flushall async 等命令，会把这些删除操作交给后台线程来执行，好处是不会导致 Redis 主线程卡顿。因此，当我们要删除一个大 key 的时候，不要使用 del 命令删除，因为 del 是在主线程处理的，这样会导致 Redis 主线程卡顿，因此我们应该使用 unlink 命令来异步删除大key。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-03-23T13:33:44.000Z"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2023-03-23T13:33:44.000Z"}],["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://davidliuk.github.io/blog/blog/zh/cs/database/redis/principal/thread-%20model/%E7%BA%BF%E7%A8%8B%E6%A8%A1%E5%9E%8B.html"}]]},"headers":[{"level":3,"title":"Redis 是单线程吗？","slug":"redis-是单线程吗","link":"#redis-是单线程吗","children":[]},{"level":3,"title":"Redis 单线程模型了解吗？","slug":"redis-单线程模型了解吗","link":"#redis-单线程模型了解吗","children":[]},{"level":3,"title":"Redis6.0 之前为什么不使用多线程？","slug":"redis6-0-之前为什么不使用多线程","link":"#redis6-0-之前为什么不使用多线程","children":[]},{"level":3,"title":"Redis 6.0 之后为什么引入了多线程？","slug":"redis-6-0-之后为什么引入了多线程","link":"#redis-6-0-之后为什么引入了多线程","children":[]}],"git":{"createdTime":1679578424000,"updatedTime":1679578424000,"contributors":[{"name":"davidliuk","email":"l729641074@163.com","commits":1}]},"readingTime":{"minutes":6.25,"words":1874},"localizedDate":"March 23, 2023","filePathRelative":"cs/database/redis/principal/thread- model/线程模型.md","excerpt":"<h1> 线程模型</h1>\\n<h3> Redis 是单线程吗？</h3>\\n<p><strong>Redis 单线程指的是「接收客户端请求-&gt;解析请求 -&gt;进行数据读写等操作-&gt;发送数据给客户端」这个过程是由一个线程（主线程）来完成的</strong>，这也是我们常说 Redis 是单线程的原因。</p>\\n<p>但是，<strong>Redis 程序并不是单线程的</strong>，Redis 在启动的时候，是会<strong>启动后台线程</strong>（BIO）的：（Background IO）</p>\\n<ul>\\n<li><strong>Redis 在 2.6 版本</strong>，会启动 2 个后台线程，分别处理关闭文件、AOF 刷盘这两个任务；</li>\\n<li><strong>Redis 在 4.0 版本之后</strong>，新增了一个新的后台线程，用来异步释放 Redis 内存，也就是 lazyfree 线程。例如执行 unlink key / flushdb async / flushall async 等命令，会把这些删除操作交给后台线程来执行，好处是不会导致 Redis 主线程卡顿。因此，当我们要删除一个大 key 的时候，不要使用 del 命令删除，因为 del 是在主线程处理的，这样会导致 Redis 主线程卡顿，因此我们应该使用 unlink 命令来异步删除大key。</li>\\n</ul>","autoDesc":true}`);export{e as data};
