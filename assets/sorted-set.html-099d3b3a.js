const e=JSON.parse(`{"key":"v-26bb2f82","path":"/cs/database/redis/commands/sorted-set.html","title":"Sorted Set","lang":"en-US","frontmatter":{"description":"Sorted Set 类似 Java TreeSet，都排序了，不过 Java 是红黑树实现的，这里的是跳表+Hash 每一个元素带有一个 score 特性： 可排序 元素不重复 查询速度快 因为 SortedSet 的可排序特征，经常被用来实现排行榜这样的功能。 常见命令 zadd zrem zscore 获取指定元素的 score 值 zrank 获取指定元素的排名 zcard 获取元素个数 zcount zincrby 让指定元素自增 zrange key min max 按照 score 升序排序后，获取指定排名范围内的元素 zrevrange key min max 按照 score 降序排序后，获取指定排名范围内的元素 zrangebyscore key min max 按照 score 排序后，获取指定 score 范围内的元素 zdiff , zinter, zunion 求差集、交集、并集","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/cs/database/redis/commands/sorted-set.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"Sorted Set"}],["meta",{"property":"og:description","content":"Sorted Set 类似 Java TreeSet，都排序了，不过 Java 是红黑树实现的，这里的是跳表+Hash 每一个元素带有一个 score 特性： 可排序 元素不重复 查询速度快 因为 SortedSet 的可排序特征，经常被用来实现排行榜这样的功能。 常见命令 zadd zrem zscore 获取指定元素的 score 值 zrank 获取指定元素的排名 zcard 获取元素个数 zcount zincrby 让指定元素自增 zrange key min max 按照 score 升序排序后，获取指定排名范围内的元素 zrevrange key min max 按照 score 降序排序后，获取指定排名范围内的元素 zrangebyscore key min max 按照 score 排序后，获取指定 score 范围内的元素 zdiff , zinter, zunion 求差集、交集、并集"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-03-23T13:33:44.000Z"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2023-03-23T13:33:44.000Z"}],["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://davidliuk.github.io/blog/blog/zh/cs/database/redis/commands/sorted-set.html"}]]},"headers":[{"level":2,"title":"常见命令","slug":"常见命令","link":"#常见命令","children":[]}],"git":{"createdTime":1670083932000,"updatedTime":1679578424000,"contributors":[{"name":"DavidLiu","email":"l729641074@163.com","commits":1},{"name":"davidliuk","email":"l729641074@163.com","commits":1}]},"readingTime":{"minutes":0.66,"words":198},"localizedDate":"December 3, 2022","filePathRelative":"cs/database/redis/commands/sorted-set.md","excerpt":"<h1> Sorted Set</h1>\\n<p>类似 Java TreeSet，都排序了，不过 Java 是红黑树实现的，这里的是跳表+Hash</p>\\n<p>每一个元素带有一个 score</p>\\n<p>特性：</p>\\n<ul>\\n<li>可排序</li>\\n<li>元素不重复</li>\\n<li>查询速度快</li>\\n</ul>\\n<p>因为 SortedSet 的可排序特征，经常被用来实现排行榜这样的功能。</p>\\n<h2> 常见命令</h2>\\n<ul>\\n<li>\\n<p><code>zadd</code></p>\\n</li>\\n<li>\\n<p><code>zrem</code></p>\\n</li>\\n<li>\\n<p><code>zscore</code> 获取指定元素的 score 值</p>\\n</li>\\n<li>\\n<p><code>zrank</code> 获取指定元素的排名</p>\\n</li>\\n<li>\\n<p><code>zcard</code> 获取元素个数</p>\\n</li>\\n<li>\\n<p><code>zcount</code></p>\\n</li>\\n<li>\\n<p><code>zincrby</code> 让指定元素自增</p>\\n</li>\\n<li>\\n<p><code>zrange</code> key min max 按照 score 升序排序后，获取指定排名范围内的元素</p>\\n</li>\\n<li>\\n<p><code>zrevrange</code> key min max 按照 score 降序排序后，获取指定排名范围内的元素</p>\\n</li>\\n<li>\\n<p><code>zrangebyscore</code> key min max 按照 score 排序后，获取指定 score 范围内的元素</p>\\n</li>\\n<li>\\n<p><code>zdiff</code> , zinter, zunion 求差集、交集、并集</p>\\n</li>\\n</ul>","autoDesc":true}`);export{e as data};
