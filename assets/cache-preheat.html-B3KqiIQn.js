import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,d as i,o as p}from"./app-D4ZvIHfO.js";const r={};function o(l,e){return p(),a("div",null,e[0]||(e[0]=[i('<h1 id="冷启动问题-缓存预热" tabindex="-1"><a class="header-anchor" href="#冷启动问题-缓存预热"><span>冷启动问题：缓存预热</span></a></h1><h3 id="问题分析" tabindex="-1"><a class="header-anchor" href="#问题分析"><span>问题分析</span></a></h3><p>冷启动：服务刚刚启动时，Redis 中并没有缓存，如果所有商品数据都在第一次查询时添加缓存，可能会给数据库带来较大压力。</p><p>缓存预热：在实际开发中，我们可以利用大数据统计用户访问的热点数据，在项目启动时将这些热点数据提前查询并保存到 Redis 中。</p><p>缓存预热就是系统上线前后，将相关的缓存数据直接加载到缓存系统中去，而不依赖用户。这样就可以避免在用户请求的时候，先查询数据库，然后再将数据缓存的问题。用户直接查询事先被预热的缓存数据，这样可以避免那么系统上线初期，对于高并发的流量，都会访问到数据库中， 对数据库造成流量的压力。根据数据不同量级，可以有以下几种做法：</p><h3 id="实现" tabindex="-1"><a class="header-anchor" href="#实现"><span>实现</span></a></h3><ul><li><p>数据量不大：项目启动的时候自动进行加载。</p><p>InitialazingBean</p><p>afterPropertiesSet</p></li><li><p>数据量较大：后台定时刷新缓存。</p><p>Spring Scheduler</p></li><li><p>数据量极大：只针对热点数据进行预加载缓存操作。</p><p>RabbitMQ 消费者监听</p></li></ul><p>我们数据量较少，可以在启动时将所有数据都放入缓存中。</p><ul><li>数据量太大的话，无法将所有数据放入 redis 中：耗费时间过长或 redis 根本无法容纳下所有的数据；</li><li>需要根据当天的具体访问情况，实时统计出访问频率较高的热数据；</li><li>将访问频率较高的热数据写入 redis 中，肯定数据也比较多， 我们也得多个服务并行读取数据去写，并行的分布式缓存预热。</li></ul><h3 id="后台更新缓存" tabindex="-1"><a class="header-anchor" href="#后台更新缓存"><span>后台更新缓存</span></a></h3><p>业务线程不再负责更新缓存，缓存也不设置有效期，而是<strong>让缓存“永久有效”，并将更新缓存的工作交由后台线程定时更新</strong>。</p><p>事实上，缓存数据不设置有效期，并不是意味着数据一直能在内存里，因为<strong>当系统内存紧张的时候，有些缓存数据会被“淘汰”</strong>，而在缓存被“淘汰”到下一次后台定时更新缓存的这段时间内，业务线程读取缓存失败就返回空值，业务的视角就以为是数据丢失了。</p><p>解决上面的问题的方式有两种。</p><p>第一种方式，后台线程不仅负责定时更新缓存，而且也负责<strong>频繁地检测缓存是否有效</strong>，检测到缓存失效了，原因可能是系统紧张而被淘汰的，于是就要马上从数据库读取数据，并更新到缓存。</p><p>这种方式的检测时间间隔不能太长，太长也导致用户获取的数据是一个空值而不是真正的数据，所以检测的间隔最好是毫秒级的，但是总归是有个间隔时间，用户体验一般。</p><p>第二种方式，在业务线程发现缓存数据失效后（缓存数据被淘汰），<strong>通过消息队列发送一条消息通知后台线程更新缓存</strong>，后台线程收到消息后，在更新缓存前可以判断缓存是否存在，存在就不执行更新缓存操作；不存在就读取数据库数据，并将数据加载到缓存。这种方式相比第一种方式缓存的更新会更及时，用户体验也比较好。</p><p>在业务刚上线的时候，我们最好提前把数据缓起来，而不是等待用户访问才来触发缓存构建，这就是所谓的<strong>缓存预热</strong>，后台更新缓存的机制刚好也适合干这个事情。</p><hr><p><strong>缓存预热如何实现？</strong></p><p>常见的缓存预热方式有两种：</p><ol><li>使用定时任务，比如 xxl-job，来定时触发缓存预热的逻辑，将数据库中的热点数据查询出来并存入缓存中。</li><li>使用消息队列，比如 Kafka，来异步地进行缓存预热，将数据库中的热点数据的主键或者 ID 发送到消息队列中，然后由缓存服务消费消息队列中的数据，根据主键或者 ID 查询数据库并更新缓存。</li></ol>',21)]))}const c=t(r,[["render",o],["__file","cache-preheat.html.vue"]]),d=JSON.parse(`{"path":"/cs/database/redis/practice/problem/cache-preheat.html","title":"冷启动问题：缓存预热","lang":"en-US","frontmatter":{"description":"冷启动问题：缓存预热 问题分析 冷启动：服务刚刚启动时，Redis 中并没有缓存，如果所有商品数据都在第一次查询时添加缓存，可能会给数据库带来较大压力。 缓存预热：在实际开发中，我们可以利用大数据统计用户访问的热点数据，在项目启动时将这些热点数据提前查询并保存到 Redis 中。 缓存预热就是系统上线前后，将相关的缓存数据直接加载到缓存系统中去，而不依...","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/cs/database/redis/practice/problem/cache-preheat.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"冷启动问题：缓存预热"}],["meta",{"property":"og:description","content":"冷启动问题：缓存预热 问题分析 冷启动：服务刚刚启动时，Redis 中并没有缓存，如果所有商品数据都在第一次查询时添加缓存，可能会给数据库带来较大压力。 缓存预热：在实际开发中，我们可以利用大数据统计用户访问的热点数据，在项目启动时将这些热点数据提前查询并保存到 Redis 中。 缓存预热就是系统上线前后，将相关的缓存数据直接加载到缓存系统中去，而不依..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-05-08T07:35:02.000Z"}],["meta",{"property":"article:modified_time","content":"2024-05-08T07:35:02.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"冷启动问题：缓存预热\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-08T07:35:02.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[{"level":3,"title":"问题分析","slug":"问题分析","link":"#问题分析","children":[]},{"level":3,"title":"实现","slug":"实现","link":"#实现","children":[]},{"level":3,"title":"后台更新缓存","slug":"后台更新缓存","link":"#后台更新缓存","children":[]}],"git":{"createdTime":1679321449000,"updatedTime":1715153702000,"contributors":[{"name":"davidliuk","email":"l729641074@163.com","commits":3},{"name":"刘大维","email":"davidliu@liudaweideMacBook-Pro.local","commits":3}]},"readingTime":{"minutes":3.75,"words":1124},"filePathRelative":"cs/database/redis/practice/problem/cache-preheat.md","localizedDate":"March 20, 2023","excerpt":"\\n<h3>问题分析</h3>\\n<p>冷启动：服务刚刚启动时，Redis 中并没有缓存，如果所有商品数据都在第一次查询时添加缓存，可能会给数据库带来较大压力。</p>\\n<p>缓存预热：在实际开发中，我们可以利用大数据统计用户访问的热点数据，在项目启动时将这些热点数据提前查询并保存到 Redis 中。</p>\\n<p>缓存预热就是系统上线前后，将相关的缓存数据直接加载到缓存系统中去，而不依赖用户。这样就可以避免在用户请求的时候，先查询数据库，然后再将数据缓存的问题。用户直接查询事先被预热的缓存数据，这样可以避免那么系统上线初期，对于高并发的流量，都会访问到数据库中， 对数据库造成流量的压力。根据数据不同量级，可以有以下几种做法：</p>","autoDesc":true}`);export{c as comp,d as data};
