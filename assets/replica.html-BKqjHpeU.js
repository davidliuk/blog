import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,d as n,o as i}from"./app-CrF8c6p-.js";const r={};function l(o,e){return i(),a("div",null,e[0]||(e[0]=[n('<h1 id="replication-主从复制" tabindex="-1"><a class="header-anchor" href="#replication-主从复制"><span>Replication 主从复制</span></a></h1><p>读写分离</p><h3 id="什么是读写分离" tabindex="-1"><a class="header-anchor" href="#什么是读写分离"><span>什么是读写分离？</span></a></h3><p><strong>读写分离主要是为了将对数据库的读写操作分散到不同的数据库节点上。</strong> 这样的话，就能够小幅提升写性能，大幅提升读性能。</p><h3 id="读写分离会带来什么问题-如何解决" tabindex="-1"><a class="header-anchor" href="#读写分离会带来什么问题-如何解决"><span>读写分离会带来什么问题？如何解决？</span></a></h3><p>读写分离对于提升数据库的并发非常有效，但同时也会引来一个问题：主库和从库的数据存在延迟，比如你写完主库之后，主库的数据同步到从库是需要时间的，这个时间差就导致了主库和从库的数据不一致性问题。这也就是我们经常说的 <strong>主从同步延迟</strong> 。</p><p>主从同步延迟问题的解决，没有特别好的一种方案（可能是我太菜了，欢迎评论区补充）。你可以根据自己的业务场景，参考一下下面几种解决办法。</p><p><strong>1.强制将读请求路由到主库处理。</strong></p><p>既然你从库的数据过期了，那我就直接从主库读取嘛！这种方案虽然会增加主库的压力，但是，实现起来比较简单，也是我了解到的使用最多的一种方式。</p><p>比如 <code>Sharding-JDBC</code> 就是采用的这种方案。通过使用 Sharding-JDBC 的 <code>HintManager</code> 分片键值管理器，我们可以强制使用主库。</p><p>对于这种方案，你可以将那些必须获取最新数据的读请求都交给主库处理。</p><p><strong>2.延迟读取。</strong></p><p>还有一些朋友肯定会想既然主从同步存在延迟，那我就在延迟之后读取啊，比如主从同步延迟 0.5s,那我就 1s 之后再读取数据。这样多方便啊！方便是方便，但是也很扯淡。</p><p>不过，如果你是这样设计业务流程就会好很多：对于一些对数据比较敏感的场景，你可以在完成写请求之后，避免立即进行请求操作。比如你支付成功之后，跳转到一个支付成功的页面，当你点击返回之后才返回自己的账户。</p><p>另外，<a href="https://time.geekbang.org/column/intro/100020801?code=ieY8HeRSlDsFbuRtggbBQGxdTh-1jMASqEIeqzHAKrI%3D" target="_blank" rel="noopener noreferrer">《MySQL 实战 45 讲》</a>这个专栏中的<a href="https://time.geekbang.org/column/article/77636" target="_blank" rel="noopener noreferrer">《读写分离有哪些坑？》</a>这篇文章还介绍了很多其他比较实际的解决办法，感兴趣的小伙伴可以自行研究一下。</p><h3 id="如何实现读写分离" tabindex="-1"><a class="header-anchor" href="#如何实现读写分离"><span>如何实现读写分离？</span></a></h3><p>不论是使用哪一种读写分离具体的实现方案，想要实现读写分离一般包含如下几步：</p><ol><li>部署多台数据库，选择其中的一台作为主数据库，其他的一台或者多台作为从数据库。</li><li>保证主数据库和从数据库之间的数据是实时同步的，这个过程也就是我们常说的<strong>主从复制</strong>。</li><li>系统将写请求交给主数据库处理，读请求交给从数据库处理。</li></ol><p>落实到项目本身的话，常用的方式有两种：</p><p><strong>1. 代理方式</strong></p><p>我们可以在应用和数据中间加了一个代理层。应用程序所有的数据请求都交给代理层处理，代理层负责分离读写请求，将它们路由到对应的数据库中。</p><p>提供类似功能的中间件有</p><ul><li><strong>MySQL Router</strong>（官方）、</li><li><strong>Atlas</strong>（基于 MySQL Proxy）、</li><li><strong>Maxscale</strong>、</li><li><strong>MyCat</strong>。</li></ul><p><strong>2. 组件方式</strong></p><p>在这种方式中，我们可以通过引入第三方组件来帮助我们读写请求。</p><p>这也是我比较推荐的一种方式。这种方式目前在各种互联网公司中用的最多的，相关的实际的案例也非常多。如果你要采用这种方式的话，推荐使用 <code>sharding-jdbc</code> ，直接引入 jar 包即可使用，非常方便。同时，也节省了很多运维的成本。</p><p>你可以在 shardingsphere 官方找到 <a href="https://shardingsphere.apache.org/document/legacy/3.x/document/cn/manual/sharding-jdbc/usage/read-write-splitting/" target="_blank" rel="noopener noreferrer">sharding-jdbc 关于读写分离的操作</a>。</p><h3 id="主从复制原理" tabindex="-1"><a class="header-anchor" href="#主从复制原理"><span>主从复制原理</span></a></h3><p>MySQL binlog(binary log 即二进制日志文件) 主要记录了 MySQL 数据库中数据的所有变化(数据库执行的所有 DDL 和 DML 语句)。因此，我们根据主库的 MySQL binlog 日志就能够将主库的数据同步到从库中。</p><p>更具体和详细的过程是这个样子的（图片来自于：<a href="https://www.toptal.com/mysql/mysql-master-slave-replication-tutorial" target="_blank" rel="noopener noreferrer">《MySQL Master-Slave Replication on the Same Machine》open in new window</a>）：</p><ol><li>主库将数据库中数据的变化写入到 binlog</li><li>从库连接主库</li><li>从库会创建一个 I/O 线程向主库请求更新的 binlog</li><li>主库会创建一个 binlog dump 线程来发送 binlog ，从库中的 I/O 线程负责接收</li><li>从库的 I/O 线程将接收的 binlog 写入到 relay log 中。</li><li>从库的 SQL 线程读取 relay log 同步数据本地（也就是再执行一遍 SQL ）。</li></ol><p>怎么样？看了我对主从复制这个过程的讲解，你应该搞明白了吧!</p><p>你一般看到 binlog 就要想到主从复制。当然，除了主从复制之外，binlog 还能帮助我们实现数据恢复。</p><p>🌈 拓展一下：</p><p>阿里开源的一个叫做 canal 的工具。这个工具可以帮助我们实现 MySQL 和其他数据源比如 Elasticsearch 或者另外一台 MySQL 数据库之间的数据同步。很显然，这个工具的底层原理肯定也是依赖 binlog。canal 的原理就是模拟 MySQL 主从复制的过程，解析 binlog 将数据同步到其他的数据源。</p><p>另外，像咱们常用的分布式缓存组件 Redis 也是通过主从复制实现的读写分离。</p><p>🌕 简单总结一下：</p><p><strong>MySQL 主从复制是依赖于 binlog 。另外，常见的一些同步 MySQL 数据到其他数据源的工具（比如 canal）的底层一般也是依赖 binlog 。</strong></p>',38)]))}const c=t(r,[["render",l],["__file","replica.html.vue"]]),g=JSON.parse(`{"path":"/cs/database/mysql/availability/replica.html","title":"Replication 主从复制","lang":"en-US","frontmatter":{"description":"Replication 主从复制 读写分离 什么是读写分离？ 读写分离主要是为了将对数据库的读写操作分散到不同的数据库节点上。 这样的话，就能够小幅提升写性能，大幅提升读性能。 读写分离会带来什么问题？如何解决？ 读写分离对于提升数据库的并发非常有效，但同时也会引来一个问题：主库和从库的数据存在延迟，比如你写完主库之后，主库的数据同步到从库是需要时间的...","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/cs/database/mysql/availability/replica.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"Replication 主从复制"}],["meta",{"property":"og:description","content":"Replication 主从复制 读写分离 什么是读写分离？ 读写分离主要是为了将对数据库的读写操作分散到不同的数据库节点上。 这样的话，就能够小幅提升写性能，大幅提升读性能。 读写分离会带来什么问题？如何解决？ 读写分离对于提升数据库的并发非常有效，但同时也会引来一个问题：主库和从库的数据存在延迟，比如你写完主库之后，主库的数据同步到从库是需要时间的..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-05-08T07:35:02.000Z"}],["meta",{"property":"article:modified_time","content":"2024-05-08T07:35:02.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Replication 主从复制\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-08T07:35:02.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[{"level":3,"title":"什么是读写分离？","slug":"什么是读写分离","link":"#什么是读写分离","children":[]},{"level":3,"title":"读写分离会带来什么问题？如何解决？","slug":"读写分离会带来什么问题-如何解决","link":"#读写分离会带来什么问题-如何解决","children":[]},{"level":3,"title":"如何实现读写分离？","slug":"如何实现读写分离","link":"#如何实现读写分离","children":[]},{"level":3,"title":"主从复制原理","slug":"主从复制原理","link":"#主从复制原理","children":[]}],"git":{"createdTime":1684318252000,"updatedTime":1715153702000,"contributors":[{"name":"刘大维","email":"davidliu@liudaweideMacBook-Pro.local","commits":1}]},"readingTime":{"minutes":4.99,"words":1498},"filePathRelative":"cs/database/mysql/availability/replica.md","localizedDate":"May 17, 2023","excerpt":"\\n<p>读写分离</p>\\n<h3>什么是读写分离？</h3>\\n<p><strong>读写分离主要是为了将对数据库的读写操作分散到不同的数据库节点上。</strong> 这样的话，就能够小幅提升写性能，大幅提升读性能。</p>\\n<h3>读写分离会带来什么问题？如何解决？</h3>\\n<p>读写分离对于提升数据库的并发非常有效，但同时也会引来一个问题：主库和从库的数据存在延迟，比如你写完主库之后，主库的数据同步到从库是需要时间的，这个时间差就导致了主库和从库的数据不一致性问题。这也就是我们经常说的 <strong>主从同步延迟</strong> 。</p>\\n<p>主从同步延迟问题的解决，没有特别好的一种方案（可能是我太菜了，欢迎评论区补充）。你可以根据自己的业务场景，参考一下下面几种解决办法。</p>","autoDesc":true}`);export{c as comp,g as data};
