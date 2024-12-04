import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as t,d as a,o as p}from"./app-D4ZvIHfO.js";const n={};function o(d,e){return p(),t("div",null,e[0]||(e[0]=[a('<h1 id="持久化策略" tabindex="-1"><a class="header-anchor" href="#持久化策略"><span>持久化策略</span></a></h1><p>RDB 通过 <code>bgsvae</code> 子进程来做。</p><p>使用缓存的时候，我们经常需要对内存中的数据进行持久化也就是将内存中的数据写入到硬盘中。大部分原因是为了之后重用数据（比如重启机器、机器故障之后恢复数据），或者是为了做数据同步（比如集群的主从节点通过 RDB 文件同步数据）。</p><p>Redis 不同于 Memcached 的很重要一点就是，Redis 支持持久化，支持 3 种方式:</p><ul><li><p>快照（snapshotting，RDB）</p></li><li><p>只追加文件（append-only file, AOF）</p></li><li><p>RDB 和 AOF 的混合持久化（Redis 4.0 新增）</p><p>由于 RDB 和 AOF 各有优势，Redis 4.0 开始支持 RDB 和 AOF 的混合持久化（默认关闭，可以通过配置项 <code>aof-use-rdb-preamble</code> 开启）。</p><p>混合持久化：AOF 重写的时候就直接把 RDB 的内容写到 AOF 文件开头。</p><p>好处：可以结合 RDB 和 AOF 的优点, 快速加载同时避免丢失过多的数据。</p><p>缺点： AOF 里面的 RDB 部分是压缩格式不再是 AOF 格式，可读性较差。</p></li></ul><h2 id="对比" tabindex="-1"><a class="header-anchor" href="#对比"><span>对比</span></a></h2><p><strong>RDB 比 AOF 优秀的地方</strong>：</p><ul><li>RDB 文件存储的内容是经过压缩的二进制数据， 保存着某个时间点的数据集，文件很小，适合做数据的备份，灾难恢复。AOF 文件存储的是每一次写命令，类似于 MySQL 的 binlog 日志，通常会比 RDB 文件大很多。当 AOF 变得太大时，Redis 能够在后台自动重写 AOF。新的 AOF 文件和原有的 AOF 文件所保存的数据库状态一样，但体积更小。不过， Redis 7.0 版本之前，如果在重写期间有写入命令，AOF 可能会使用大量内存，重写期间到达的所有写入命令都会写入磁盘两次。</li><li>使用 RDB 文件恢复数据，直接解析还原数据即可，不需要一条一条地执行命令，速度非常快。而 AOF 则需要依次执行每个写命令，速度非常慢。与 AOF 相比，恢复大数据集的时候，RDB 速度更快。</li></ul><p><strong>AOF 比 RDB 优秀的地方</strong>：</p><ul><li>RDB 的数据安全性不如 AOF，没有办法实时或者秒级持久化数据。生成 RDB 文件的过程是比较繁重的， 虽然 <code>BGSAVE</code> 子进程写入 RDB 文件的工作不会阻塞主线程，但会对机器的 CPU 资源和内存资源产生影响，严重的情况下甚至会直接把 Redis 服务干宕机。AOF 支持秒级数据丢失（取决 fsync 策略，如果是 everysec，最多丢失 1 秒的数据），仅仅是追加命令到 AOF 文件，操作轻量。</li><li>RDB 文件是以特定的二进制格式保存的，并且在 Redis 版本演进中有多个版本的 RDB，所以存在老版本的 Redis 服务不兼容新版本的 RDB 格式的问题。</li><li>AOF 以一种易于理解和解析的格式包含所有操作的日志。你可以轻松地导出 AOF 文件进行分析，你也可以直接操作 AOF 文件来解决一些问题。比如，如果执行<code>FLUSHALL</code> 命令意外地刷新了所有内容后，只要 AOF 文件没有被重写，删除最新命令并重启即可恢复之前的状态。</li></ul><p><strong>综上</strong>：</p><ul><li>Redis 保存的数据丢失一些也没什么影响的话，可以选择使用 RDB。</li><li>不建议单独使用 AOF，因为时不时地创建一个 RDB 快照可以进行数据库备份、更快的重启以及解决 AOF 引擎错误。</li><li>如果保存的数据要求安全性比较高的话，建议同时开启 RDB 和 AOF 持久化或者开启 RDB 和 AOF 混合持久化。</li></ul>',12)]))}const r=i(n,[["render",o],["__file","index.html.vue"]]),c=JSON.parse(`{"path":"/cs/database/redis/persistency/","title":"持久化策略","lang":"en-US","frontmatter":{"description":"持久化策略 RDB 通过 bgsvae 子进程来做。 使用缓存的时候，我们经常需要对内存中的数据进行持久化也就是将内存中的数据写入到硬盘中。大部分原因是为了之后重用数据（比如重启机器、机器故障之后恢复数据），或者是为了做数据同步（比如集群的主从节点通过 RDB 文件同步数据）。 Redis 不同于 Memcached 的很重要一点就是，Redis 支持...","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/cs/database/redis/persistency/"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"持久化策略"}],["meta",{"property":"og:description","content":"持久化策略 RDB 通过 bgsvae 子进程来做。 使用缓存的时候，我们经常需要对内存中的数据进行持久化也就是将内存中的数据写入到硬盘中。大部分原因是为了之后重用数据（比如重启机器、机器故障之后恢复数据），或者是为了做数据同步（比如集群的主从节点通过 RDB 文件同步数据）。 Redis 不同于 Memcached 的很重要一点就是，Redis 支持..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-05-08T07:35:02.000Z"}],["meta",{"property":"article:modified_time","content":"2024-05-08T07:35:02.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"持久化策略\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-08T07:35:02.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[{"level":2,"title":"对比","slug":"对比","link":"#对比","children":[]}],"git":{"createdTime":1677504602000,"updatedTime":1715153702000,"contributors":[{"name":"刘大维","email":"davidliu@liudaweideMacBook-Pro.local","commits":3},{"name":"davidliuk","email":"l729641074@163.com","commits":1}]},"readingTime":{"minutes":3.2,"words":959},"filePathRelative":"cs/database/redis/persistency/README.md","localizedDate":"February 27, 2023","excerpt":"\\n<p>RDB 通过 <code>bgsvae</code> 子进程来做。</p>\\n<p>使用缓存的时候，我们经常需要对内存中的数据进行持久化也就是将内存中的数据写入到硬盘中。大部分原因是为了之后重用数据（比如重启机器、机器故障之后恢复数据），或者是为了做数据同步（比如集群的主从节点通过 RDB 文件同步数据）。</p>\\n<p>Redis 不同于 Memcached 的很重要一点就是，Redis 支持持久化，支持 3 种方式:</p>\\n<ul>\\n<li>\\n<p>快照（snapshotting，RDB）</p>\\n</li>\\n<li>\\n<p>只追加文件（append-only file, AOF）</p>\\n</li>\\n<li>\\n<p>RDB 和 AOF 的混合持久化（Redis 4.0 新增）</p>\\n<p>由于 RDB 和 AOF 各有优势，Redis 4.0 开始支持 RDB 和 AOF 的混合持久化（默认关闭，可以通过配置项 <code>aof-use-rdb-preamble</code> 开启）。</p>\\n<p>混合持久化：AOF 重写的时候就直接把 RDB 的内容写到 AOF 文件开头。</p>\\n<p>好处：可以结合 RDB 和 AOF 的优点, 快速加载同时避免丢失过多的数据。</p>\\n<p>缺点： AOF 里面的 RDB 部分是压缩格式不再是 AOF 格式，可读性较差。</p>\\n</li>\\n</ul>","autoDesc":true}`);export{r as comp,c as data};
