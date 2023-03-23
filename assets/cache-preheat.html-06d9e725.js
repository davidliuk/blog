const e=JSON.parse(`{"key":"v-3f5d7d5a","path":"/cs/database/redis/practice/problem/cache-preheat.html","title":"冷启动问题：缓存预热","lang":"en-US","frontmatter":{"description":"冷启动问题：缓存预热 问题分析 冷启动：服务刚刚启动时，Rdis中并没有缓存，如果所有商品数据都在第一次查询时添加缓存，可能会给数据库带来较大压力。 缓存预热：在实际开发中，我们可以利用大数据统计用户访问的热点数据，在项目启动时将这些热点数据提前查询并保存到Redis中。 缓存预热就是系统上线前后，将相关的缓存数据直接加载到缓存系统中去，而不依赖用户。这样就可以避免在用户请求的时候，先查询数据库，然后再将数据缓存的问题。用户直接查询事先被预热的缓存数据，这样可以避免那么系统上线初期，对于高并发的流量，都会访问到数据库中， 对数据库造成流量的压力。根据数据不同量级，可以有以下几种做法：","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/cs/database/redis/practice/problem/cache-preheat.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"冷启动问题：缓存预热"}],["meta",{"property":"og:description","content":"冷启动问题：缓存预热 问题分析 冷启动：服务刚刚启动时，Rdis中并没有缓存，如果所有商品数据都在第一次查询时添加缓存，可能会给数据库带来较大压力。 缓存预热：在实际开发中，我们可以利用大数据统计用户访问的热点数据，在项目启动时将这些热点数据提前查询并保存到Redis中。 缓存预热就是系统上线前后，将相关的缓存数据直接加载到缓存系统中去，而不依赖用户。这样就可以避免在用户请求的时候，先查询数据库，然后再将数据缓存的问题。用户直接查询事先被预热的缓存数据，这样可以避免那么系统上线初期，对于高并发的流量，都会访问到数据库中， 对数据库造成流量的压力。根据数据不同量级，可以有以下几种做法："}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-03-23T13:33:44.000Z"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2023-03-23T13:33:44.000Z"}],["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://davidliuk.github.io/blog/blog/zh/cs/database/redis/practice/problem/cache-preheat.html"}]]},"headers":[{"level":3,"title":"问题分析","slug":"问题分析","link":"#问题分析","children":[]},{"level":3,"title":"实现","slug":"实现","link":"#实现","children":[]}],"git":{"createdTime":1679578424000,"updatedTime":1679578424000,"contributors":[{"name":"davidliuk","email":"l729641074@163.com","commits":1}]},"readingTime":{"minutes":1.54,"words":463},"localizedDate":"March 23, 2023","filePathRelative":"cs/database/redis/practice/problem/cache-preheat.md","excerpt":"<h1> 冷启动问题：缓存预热</h1>\\n<h3> 问题分析</h3>\\n<p>冷启动：服务刚刚启动时，Rdis中并没有缓存，如果所有商品数据都在第一次查询时添加缓存，可能会给数据库带来较大压力。</p>\\n<p>缓存预热：在实际开发中，我们可以利用大数据统计用户访问的热点数据，在项目启动时将这些热点数据提前查询并保存到Redis中。</p>\\n<p>缓存预热就是系统上线前后，将相关的缓存数据直接加载到缓存系统中去，而不依赖用户。这样就可以避免在用户请求的时候，先查询数据库，然后再将数据缓存的问题。用户直接查询事先被预热的缓存数据，这样可以避免那么系统上线初期，对于高并发的流量，都会访问到数据库中， 对数据库造成流量的压力。根据数据不同量级，可以有以下几种做法：</p>","autoDesc":true}`);export{e as data};
