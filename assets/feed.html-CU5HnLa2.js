import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as t,d as n,o}from"./app-DIqbhby7.js";const r={};function i(a,e){return o(),t("div",null,e[0]||(e[0]=[n('<h1 id="新鲜事系统" tabindex="-1"><a class="header-anchor" href="#新鲜事系统"><span>新鲜事系统</span></a></h1><p>Pull vs Push</p><p>Cassandra 如何存储 NewsFeed</p><p>Ask before design</p><p>No more no less</p><p>Work solution first</p><p>Analysis is important than solution</p><h2 id="拓展问题" tabindex="-1"><a class="header-anchor" href="#拓展问题"><span>拓展问题</span></a></h2><h3 id="果取关问题" tabindex="-1"><a class="header-anchor" href="#果取关问题"><span>果取关问题</span></a></h3><p>是不是明星不能在线动态计算，要离线计算</p><p>• 为User增加一个is_superstar的属性<br> • 一个用户被标记为superstar之后，就不能再被取消标记</p><p>• 如何实现 follow 与 unfollow?</p><p>• Follow一个用户之后，异步地将他的Timeline合并到你的NewsFeed中<br> • Merge timeline into news feed asynchronously.</p><p>• Unfollow一个用户之后，异步地将他发的Tweets从你的NewsFeed中移除<br> • Pick out tweets from news feed asynchronously.</p><p>• 为什么需要异步 Async?<br> • 因为这个过程一点都不快呀</p><p>• 异步的好处?<br> • 用户迅速得到反馈，似乎马上就follow/unfollow成功了</p><p>• 异步的坏处?<br> • Unfollow之后刷新NewsFeed，发现好像他的信息还在<br> • 不过最终还是会被删掉的</p><h3 id="如何存储-likes" tabindex="-1"><a class="header-anchor" href="#如何存储-likes"><span>如何存储 likes?</span></a></h3><p>如何在 News Feed 中同时得到每个帖子被点赞、评论和转发的次数?</p><p>Normalize vs Denormalize</p><p>冗余字段</p><h3 id="惊群现象-thundering-herd" tabindex="-1"><a class="header-anchor" href="#惊群现象-thundering-herd"><span>惊群现象 Thundering Herd</span></a></h3><p>什么是惊群?</p><p>我们通常会使用缓存来作为数据库的“挡箭牌”，优化一些经常读取的数据的访问速度。即，在访问这些 数据时，会先看看是否在缓存中，如果在，就直接读取缓存中的数据，如果不在，就从数据库中读取 之后，写入缓存并返回。</p><p>那么在高并发的情况下，如果一条非常热的数据，因为缓存过期或者被淘汰算法淘汰等原因，被踢出 缓存之后，会导致短时间内(&lt;1s)，大量的数据请求会出现缓存穿透 (Cache miss)，因为数据从 DB 回填到 Cache 需要时间。从而这些请求都会去访问数据库，导致数据库处理不过来而崩溃，从而影响到其他数据的访问而导致整个网站崩溃。</p>',25)]))}const d=s(r,[["render",i],["__file","feed.html.vue"]]),h=JSON.parse(`{"path":"/se/design/system/module/feed.html","title":"新鲜事系统","lang":"en-US","frontmatter":{"description":"新鲜事系统 Pull vs Push Cassandra 如何存储 NewsFeed Ask before design No more no less Work solution first Analysis is important than solution 拓展问题 果取关问题 是不是明星不能在线动态计算，要离线计算 • 为User增加一个is...","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/se/design/system/module/feed.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"新鲜事系统"}],["meta",{"property":"og:description","content":"新鲜事系统 Pull vs Push Cassandra 如何存储 NewsFeed Ask before design No more no less Work solution first Analysis is important than solution 拓展问题 果取关问题 是不是明星不能在线动态计算，要离线计算 • 为User增加一个is..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-06-27T01:21:47.000Z"}],["meta",{"property":"article:modified_time","content":"2024-06-27T01:21:47.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"新鲜事系统\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-06-27T01:21:47.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[{"level":2,"title":"拓展问题","slug":"拓展问题","link":"#拓展问题","children":[{"level":3,"title":"果取关问题","slug":"果取关问题","link":"#果取关问题","children":[]},{"level":3,"title":"如何存储 likes?","slug":"如何存储-likes","link":"#如何存储-likes","children":[]},{"level":3,"title":"惊群现象 Thundering Herd","slug":"惊群现象-thundering-herd","link":"#惊群现象-thundering-herd","children":[]}]}],"git":{"createdTime":1719451307000,"updatedTime":1719451307000,"contributors":[{"name":"刘大维","email":"davidliu@liudaweideMacBook-Pro.local","commits":1}]},"readingTime":{"minutes":1.64,"words":491},"filePathRelative":"se/design/system/module/feed.md","localizedDate":"June 27, 2024","excerpt":"\\n<p>Pull vs Push</p>\\n<p>Cassandra 如何存储 NewsFeed</p>\\n<p>Ask before design</p>\\n<p>No more no less</p>\\n<p>Work solution first</p>\\n<p>Analysis is important than solution</p>\\n<h2>拓展问题</h2>\\n<h3>果取关问题</h3>\\n<p>是不是明星不能在线动态计算，要离线计算</p>\\n<p>• 为User增加一个is_superstar的属性<br>\\n• 一个用户被标记为superstar之后，就不能再被取消标记</p>\\n<p>• 如何实现 follow 与 unfollow?</p>","autoDesc":true}`);export{d as comp,h as data};
