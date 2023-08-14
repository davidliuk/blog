const e=JSON.parse(`{"key":"v-df376572","path":"/cs/database/redis/practice/problem/cache-problem.html","title":"缓存问题：穿透、击穿、雪崩","lang":"en-US","frontmatter":{"description":"缓存问题：穿透、击穿、雪崩 缓存穿透 Pass Through 概念 客户端请求的数据在缓存中和数据库中都不存在，这样缓存永远不会生效，这些请求都会打到数据库。 被动方案 缓存空对象 优点：实现简单，维护方便 缺点： 额外的内存消耗（不过可以通过 TTL 来缓解） 可能造成短期的不一致 布隆过滤 优点：内存占用比较少，没有多余 key 缺点： 实现复杂（hash + bitmap + 概率实现的） 存在误判可能 说不存在一定不存在，但是说存在的时候也有一定概率是不存在的","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/cs/database/redis/practice/problem/cache-problem.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"缓存问题：穿透、击穿、雪崩"}],["meta",{"property":"og:description","content":"缓存问题：穿透、击穿、雪崩 缓存穿透 Pass Through 概念 客户端请求的数据在缓存中和数据库中都不存在，这样缓存永远不会生效，这些请求都会打到数据库。 被动方案 缓存空对象 优点：实现简单，维护方便 缺点： 额外的内存消耗（不过可以通过 TTL 来缓解） 可能造成短期的不一致 布隆过滤 优点：内存占用比较少，没有多余 key 缺点： 实现复杂（hash + bitmap + 概率实现的） 存在误判可能 说不存在一定不存在，但是说存在的时候也有一定概率是不存在的"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-05-17T10:10:52.000Z"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2023-05-17T10:10:52.000Z"}],["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://davidliuk.github.io/blog/blog/zh/cs/database/redis/practice/problem/cache-problem.html"}]]},"headers":[{"level":2,"title":"缓存穿透","slug":"缓存穿透","link":"#缓存穿透","children":[{"level":3,"title":"概念","slug":"概念","link":"#概念","children":[]},{"level":3,"title":"被动方案","slug":"被动方案","link":"#被动方案","children":[]},{"level":3,"title":"主动方案","slug":"主动方案","link":"#主动方案","children":[]}]},{"level":2,"title":"缓存雪崩","slug":"缓存雪崩","link":"#缓存雪崩","children":[{"level":3,"title":"概念","slug":"概念-1","link":"#概念-1","children":[]},{"level":3,"title":"解决方案","slug":"解决方案","link":"#解决方案","children":[]}]},{"level":2,"title":"缓存击穿/热点 key 问题","slug":"缓存击穿-热点-key-问题","link":"#缓存击穿-热点-key-问题","children":[{"level":3,"title":"概念","slug":"概念-2","link":"#概念-2","children":[]},{"level":3,"title":"解决方案","slug":"解决方案-1","link":"#解决方案-1","children":[]}]}],"git":{"createdTime":1679578424000,"updatedTime":1684318252000,"contributors":[{"name":"davidliuk","email":"l729641074@163.com","commits":3},{"name":"刘大维","email":"davidliu@liudaweideMacBook-Pro.local","commits":1}]},"readingTime":{"minutes":4.78,"words":1434},"localizedDate":"March 23, 2023","filePathRelative":"cs/database/redis/practice/problem/cache-problem.md","excerpt":"<h1> 缓存问题：穿透、击穿、雪崩</h1>\\n<p><img src=\\"https://cdn.jsdelivr.net/gh/davidliuk/images@master/blog/061e2c04e0ebca3425dd75dd035b6b7b.png\\" alt=\\"图片\\" loading=\\"lazy\\"></p>\\n<h2> 缓存穿透</h2>\\n<p>Pass Through</p>\\n<h3> 概念</h3>\\n<p>客户端请求的数据在缓存中和数据库中都不存在，这样缓存永远不会生效，这些请求都会打到数据库。</p>\\n<h3> 被动方案</h3>\\n<ul>\\n<li>\\n<p>缓存空对象</p>\\n<ul>\\n<li>优点：实现简单，维护方便</li>\\n<li>缺点：\\n<ul>\\n<li>额外的内存消耗（不过可以通过 TTL 来缓解）</li>\\n<li>可能造成短期的不一致</li>\\n</ul>\\n</li>\\n</ul>\\n</li>\\n<li>\\n<p>布隆过滤</p>\\n<ul>\\n<li>\\n<p>优点：内存占用比较少，没有多余 key</p>\\n</li>\\n<li>\\n<p>缺点：</p>\\n<ul>\\n<li>\\n<p>实现复杂（hash + bitmap + 概率实现的）</p>\\n</li>\\n<li>\\n<p>存在误判可能</p>\\n<p>说不存在一定不存在，但是说存在的时候也有一定概率是不存在的</p>\\n</li>\\n</ul>\\n</li>\\n</ul>\\n</li>\\n</ul>","autoDesc":true}`);export{e as data};