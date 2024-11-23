import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,d as i,o as n}from"./app-CrF8c6p-.js";const d={};function s(r,e){return n(),a("div",null,e[0]||(e[0]=[i('<h1 id="高可用" tabindex="-1"><a class="header-anchor" href="#高可用"><span>高可用</span></a></h1><h2 id="单点-redis-的问题" tabindex="-1"><a class="header-anchor" href="#单点-redis-的问题"><span>单点 Redis 的问题</span></a></h2><h3 id="数据丢失问题" tabindex="-1"><a class="header-anchor" href="#数据丢失问题"><span>数据丢失问题</span></a></h3><p>=&gt; Redis 数据持久化</p><h3 id="并发能力问题" tabindex="-1"><a class="header-anchor" href="#并发能力问题"><span>并发能力问题</span></a></h3><p>=&gt; 搭建主从集群，实现读写分离（不然写的时候互斥，影响并发性能）</p><h3 id="故障恢复问题" tabindex="-1"><a class="header-anchor" href="#故障恢复问题"><span>故障恢复问题</span></a></h3><p>=&gt; 利用 Redis 哨兵，实现健康检测和自动恢复</p><h3 id="存储能力问题" tabindex="-1"><a class="header-anchor" href="#存储能力问题"><span>存储能力问题</span></a></h3><p>=&gt; 搭建分片集群，利用插槽机制实现动态扩容</p><p>单机 Redis 的单 key 访问量过大（比如100万），有什么解决方案吗？（不能做集群）</p><p>大访问量肯定本地缓存最实用</p><p>多级缓存 OpenResty Redis Caffeine</p>',13)]))}const o=t(d,[["render",s],["__file","index.html.vue"]]),c=JSON.parse(`{"path":"/cs/database/redis/availability/","title":"高可用","lang":"en-US","frontmatter":{"description":"高可用 单点 Redis 的问题 数据丢失问题 => Redis 数据持久化 并发能力问题 => 搭建主从集群，实现读写分离（不然写的时候互斥，影响并发性能） 故障恢复问题 => 利用 Redis 哨兵，实现健康检测和自动恢复 存储能力问题 => 搭建分片集群，利用插槽机制实现动态扩容 单机 Redis 的单 key 访问量过大（比如100万），有什么...","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/cs/database/redis/availability/"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"高可用"}],["meta",{"property":"og:description","content":"高可用 单点 Redis 的问题 数据丢失问题 => Redis 数据持久化 并发能力问题 => 搭建主从集群，实现读写分离（不然写的时候互斥，影响并发性能） 故障恢复问题 => 利用 Redis 哨兵，实现健康检测和自动恢复 存储能力问题 => 搭建分片集群，利用插槽机制实现动态扩容 单机 Redis 的单 key 访问量过大（比如100万），有什么..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-05-08T07:35:02.000Z"}],["meta",{"property":"article:modified_time","content":"2024-05-08T07:35:02.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"高可用\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-08T07:35:02.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[{"level":2,"title":"单点 Redis 的问题","slug":"单点-redis-的问题","link":"#单点-redis-的问题","children":[{"level":3,"title":"数据丢失问题","slug":"数据丢失问题","link":"#数据丢失问题","children":[]},{"level":3,"title":"并发能力问题","slug":"并发能力问题","link":"#并发能力问题","children":[]},{"level":3,"title":"故障恢复问题","slug":"故障恢复问题","link":"#故障恢复问题","children":[]},{"level":3,"title":"存储能力问题","slug":"存储能力问题","link":"#存储能力问题","children":[]}]}],"git":{"createdTime":1677504602000,"updatedTime":1715153702000,"contributors":[{"name":"刘大维","email":"davidliu@liudaweideMacBook-Pro.local","commits":2},{"name":"liudawei47","email":"liudawei47@jd.com","commits":1}]},"readingTime":{"minutes":0.49,"words":147},"filePathRelative":"cs/database/redis/availability/README.md","localizedDate":"February 27, 2023","excerpt":"\\n<h2>单点 Redis 的问题</h2>\\n<h3>数据丢失问题</h3>\\n<p>=&gt; Redis 数据持久化</p>\\n<h3>并发能力问题</h3>\\n<p>=&gt; 搭建主从集群，实现读写分离（不然写的时候互斥，影响并发性能）</p>\\n<h3>故障恢复问题</h3>\\n<p>=&gt; 利用 Redis 哨兵，实现健康检测和自动恢复</p>\\n<h3>存储能力问题</h3>\\n<p>=&gt; 搭建分片集群，利用插槽机制实现动态扩容</p>\\n<p>单机 Redis 的单 key 访问量过大（比如100万），有什么解决方案吗？（不能做集群）</p>\\n<p>大访问量肯定本地缓存最实用</p>","autoDesc":true}`);export{o as comp,c as data};
