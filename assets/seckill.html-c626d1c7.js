const e=JSON.parse(`{"key":"v-1c03b80a","path":"/se/design/system-design/seckill.html","title":"秒杀系统","lang":"en-US","frontmatter":{"description":"秒杀系统 数据库设计 商品信息表 commodity_info 库存信息表 stock_info 秒杀活动表 seckill_info 订单信息表 order_info 扣减库存 先读取，再扣减 会出现并发超卖问题","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/se/design/system-design/seckill.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"秒杀系统"}],["meta",{"property":"og:description","content":"秒杀系统 数据库设计 商品信息表 commodity_info 库存信息表 stock_info 秒杀活动表 seckill_info 订单信息表 order_info 扣减库存 先读取，再扣减 会出现并发超卖问题"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-08-21T10:17:45.000Z"}],["meta",{"property":"article:author","content":"David Liu"}],["meta",{"property":"article:modified_time","content":"2023-08-21T10:17:45.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"秒杀系统\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-08-21T10:17:45.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[{"level":2,"title":"数据库设计","slug":"数据库设计","link":"#数据库设计","children":[{"level":3,"title":"扣减库存","slug":"扣减库存","link":"#扣减库存","children":[]},{"level":3,"title":"库存扣减时机","slug":"库存扣减时机","link":"#库存扣减时机","children":[]},{"level":3,"title":"限购","slug":"限购","link":"#限购","children":[]},{"level":3,"title":"防止服务雪崩","slug":"防止服务雪崩","link":"#防止服务雪崩","children":[]},{"level":3,"title":"库存预热","slug":"库存预热","link":"#库存预热","children":[]}]},{"level":2,"title":"高性能","slug":"高性能","link":"#高性能","children":[{"level":3,"title":"热点数据缓存","slug":"热点数据缓存","link":"#热点数据缓存","children":[]},{"level":3,"title":"流量削峰","slug":"流量削峰","link":"#流量削峰","children":[]}]},{"level":2,"title":"高可用","slug":"高可用","link":"#高可用","children":[]}],"git":{"createdTime":1677504602000,"updatedTime":1692613065000,"contributors":[{"name":"davidliuk","email":"l729641074@163.com","commits":1},{"name":"liudawei47","email":"liudawei47@jd.com","commits":1},{"name":"刘大维","email":"davidliu@liudaweideMacBook-Pro.local","commits":1}]},"readingTime":{"minutes":0.84,"words":253},"filePathRelative":"se/design/system-design/seckill.md","localizedDate":"February 27, 2023","excerpt":"<h1> 秒杀系统</h1>\\n<h2> 数据库设计</h2>\\n<ul>\\n<li>\\n<p>商品信息表</p>\\n<p><code>commodity_info</code></p>\\n</li>\\n<li>\\n<p>库存信息表</p>\\n<p><code>stock_info</code></p>\\n</li>\\n<li>\\n<p>秒杀活动表</p>\\n<p><code>seckill_info</code></p>\\n</li>\\n<li>\\n<p>订单信息表</p>\\n<p><code>order_info</code></p>\\n</li>\\n</ul>\\n<h3> 扣减库存</h3>\\n<p>先读取，再扣减</p>\\n<p>会出现并发超卖问题</p>","autoDesc":true}`);export{e as data};
