import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as l,d as a,o as n}from"./app-DtA_0glx.js";const p={};function t(s,e){return n(),l("div",null,e[0]||(e[0]=[a('<h1 id="缓存问题-穿透、击穿、雪崩" tabindex="-1"><a class="header-anchor" href="#缓存问题-穿透、击穿、雪崩"><span>缓存问题：穿透、击穿、雪崩</span></a></h1><p><img src="https://cdn.jsdelivr.net/gh/davidliuk/images@master/blog/061e2c04e0ebca3425dd75dd035b6b7b.png" alt="图片" loading="lazy"></p><h2 id="缓存穿透" tabindex="-1"><a class="header-anchor" href="#缓存穿透"><span>缓存穿透</span></a></h2><p>Pass Through</p><h3 id="概念" tabindex="-1"><a class="header-anchor" href="#概念"><span>概念</span></a></h3><p>客户端请求的数据在缓存中和数据库中<strong>都不存在</strong>，这样缓存永远不会生效，这些请求都会打到数据库。</p><h3 id="被动方案" tabindex="-1"><a class="header-anchor" href="#被动方案"><span>被动方案</span></a></h3><ul><li><p>缓存空对象</p><ul><li>优点：实现简单，维护方便</li><li>缺点： <ul><li>额外的内存消耗（不过可以通过 TTL 来缓解）</li><li>可能造成短期的不一致</li></ul></li></ul></li><li><p>布隆过滤</p><ul><li><p>优点：内存占用比较少，没有多余 key</p></li><li><p>缺点：</p><ul><li><p>实现复杂（hash + bitmap + 概率实现的）</p></li><li><p>存在误判可能（假阳性</p><p>说不存在一定不存在，但是说存在的时候也有一定概率是不存在的</p></li></ul></li></ul></li><li><p>接口限流</p><p>根据用户或者 IP 对接口进行限流，对于异常频繁的访问行为，还可以采取黑名单机制，例如将异常 IP 列入黑名单。</p></li></ul><h3 id="主动方案" tabindex="-1"><a class="header-anchor" href="#主动方案"><span>主动方案</span></a></h3><ul><li>增强 id 的复杂度，避免被猜测 id 规律，来渗透数据库</li><li>做好数据的基础格式校验（如长度，雪花算法）</li><li>加强用户权限校验</li><li>做好热点参数的限流 （spring cloud sentinel）</li></ul><p>当有大量恶意请求访问不存在的数据的时候，也会发生缓存穿透，因此在 API 入口处我们要判断求请求参数是否合理，请求参数是否含有非法值、请求字段是否存在，如果判断出是恶意请求就直接返回错误，避免进一步访问缓存和数据库。</p><h2 id="缓存雪崩" tabindex="-1"><a class="header-anchor" href="#缓存雪崩"><span>缓存雪崩</span></a></h2><h3 id="概念-1" tabindex="-1"><a class="header-anchor" href="#概念-1"><span>概念</span></a></h3><p>同一时段大量的缓存 key <strong>同时失效</strong>或者 <strong>Redis 服务宕机</strong>，导致大量请求到达数据库，带来巨大压力。</p><p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/image-20221207221534423.png" alt="image-20221207221534423" loading="lazy"></p><h3 id="解决方案" tabindex="-1"><a class="header-anchor" href="#解决方案"><span>解决方案</span></a></h3><h4 id="大量-key-同时过期" tabindex="-1"><a class="header-anchor" href="#大量-key-同时过期"><span>大量 key 同时过期</span></a></h4><ul><li><p>给不同的 key 的 TTL 添加随机值</p></li><li><p>后台更新缓存</p><p>业务线程不再负责更新缓存，缓存也不设置有效期，而是<strong>让缓存“永久有效”，并将更新缓存的工作交由后台线程定时更新</strong>。</p><p>事实上，缓存数据不设置有效期，并不是意味着数据一直能在内存里，因为<strong>当系统内存紧张的时候，有些缓存数据会被“淘汰”</strong>，而在缓存被“淘汰”到下一次后台定时更新缓存的这段时间内，业务线程读取缓存失败就返回空值，业务的视角就以为是数据丢失了。</p></li></ul><h4 id="redis-故障宕机" tabindex="-1"><a class="header-anchor" href="#redis-故障宕机"><span>Redis 故障宕机</span></a></h4><ul><li><p>利用 Redis 集群提高服务的可用性</p><p>服务熔断或请求限流机制是缓存雪崩发生后的应对方案，我们最好通过<strong>主从节点的方式构建 Redis 缓存高可靠集群</strong>。</p><p>如果 Redis 缓存的主节点故障宕机，从节点可以切换成为主节点，继续提供缓存服务，避免了由于 Redis 故障宕机而导致的缓存雪崩问题。</p></li><li><p>给缓存业务添加降级限流策略</p><p>为了减少对业务的影响，我们可以启用<strong>请求限流</strong>机制，<strong>只将少部分请求发送到数据库进行处理，再多的请求就在入口直接拒绝服务</strong>，等到 Redis 恢复正常并把缓存预热完后，再解除请求限流的机制。</p></li><li><p>给业务添加多级缓存</p><ul><li><p>浏览器可以添加缓存（静态数据）</p></li><li><p>Nginx 缓存</p></li><li><p>JVM 缓存（本地缓存）</p><p>Caffeine</p></li></ul></li></ul><h2 id="缓存击穿-热点-key-问题" tabindex="-1"><a class="header-anchor" href="#缓存击穿-热点-key-问题"><span>缓存击穿/热点 key 问题</span></a></h2><h3 id="概念-2" tabindex="-1"><a class="header-anchor" href="#概念-2"><span>概念</span></a></h3><p>又称<strong>热点 key 问题</strong>，就是一个被高并发访问并且缓存重建业务较复杂（耗时较长）的 key 突然失效了，无数的请求访问会在瞬间给数据库带来巨大的冲击。</p><p>可以发现缓存击穿跟缓存雪崩很相似，可以认为缓存击穿是缓存雪崩的一个子集。</p><p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/image-20221207222348234.png" alt="image-20221207222348234" loading="lazy"></p><h3 id="解决方案-1" tabindex="-1"><a class="header-anchor" href="#解决方案-1"><span>解决方案</span></a></h3><ul><li><p>逻辑过期，推荐！</p><p>热点 key 在活动的时候，设计逻辑过期</p></li><li><p>互斥锁</p><p>互斥锁方案，保证同一时间只有一个业务线程更新缓存，未能获取互斥锁的请求，要么等待锁释放后重新读取缓存，要么就返回空值或者默认值。</p><p>缺点：性能比较差，好多别的线程在旁边自旋等待</p></li><li><p>不给热点数据设置过期时间，由后台异步更新缓存，或者在热点数据准备要过期前，提前通知后台线程更新缓存以及重新设置过期时间；</p></li><li><p>针对热点数据提前预热，将其存入缓存中并设置合理的过期时间比如秒杀场景下的数据在秒杀结束之前不过期。</p></li></ul><p>热Key问题可能会带来以下影响：</p><ul><li>网络拥塞。如果一个Key占用的空间很大，或者请求的命令很复杂，那么每次访问都会消耗大量的网络带宽，可能导致机器或局域网的流量被打满，影响其他服务的通信。</li><li>响应时间上升、超时阻塞。由于Redis是单线程的，如果一个Key的操作耗时较长，那么就会占用Redis的CPU时间，导致其他请求等待或超时。</li><li>过期删除阻塞。如果一个Key设置了过期时间，当过期时这个Key会被删除。如果这个Key很大或者很热，那么删除操作可能会阻塞Redis的服务。</li><li>主从同步中断。如果一个Key很大或者很热，在主库上进行操作可能会造成主从复制的延迟或中断，影响数据的一致性和可用性。</li><li>缓存穿透。如果一个Key很热，在Redis上失效或者被删除后，那么所有的请求都会直接打到后端数据库上，可能导致数据库压力过大或者崩溃。</li></ul>',29)]))}const h=i(p,[["render",t],["__file","cache-problem.html.vue"]]),o=JSON.parse(`{"path":"/cs/database/redis/practice/problem/cache-problem.html","title":"缓存问题：穿透、击穿、雪崩","lang":"en-US","frontmatter":{"description":"缓存问题：穿透、击穿、雪崩 图片 缓存穿透 Pass Through 概念 客户端请求的数据在缓存中和数据库中都不存在，这样缓存永远不会生效，这些请求都会打到数据库。 被动方案 缓存空对象 优点：实现简单，维护方便 缺点： 额外的内存消耗（不过可以通过 TTL 来缓解） 可能造成短期的不一致 布隆过滤 优点：内存占用比较少，没有多余 key 缺点： 实...","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/cs/database/redis/practice/problem/cache-problem.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"缓存问题：穿透、击穿、雪崩"}],["meta",{"property":"og:description","content":"缓存问题：穿透、击穿、雪崩 图片 缓存穿透 Pass Through 概念 客户端请求的数据在缓存中和数据库中都不存在，这样缓存永远不会生效，这些请求都会打到数据库。 被动方案 缓存空对象 优点：实现简单，维护方便 缺点： 额外的内存消耗（不过可以通过 TTL 来缓解） 可能造成短期的不一致 布隆过滤 优点：内存占用比较少，没有多余 key 缺点： 实..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/davidliuk/images@master/blog/061e2c04e0ebca3425dd75dd035b6b7b.png"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-05-08T07:35:02.000Z"}],["meta",{"property":"article:modified_time","content":"2024-05-08T07:35:02.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"缓存问题：穿透、击穿、雪崩\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/davidliuk/images@master/blog/061e2c04e0ebca3425dd75dd035b6b7b.png\\",\\"https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/image-20221207221534423.png\\",\\"https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/image-20221207222348234.png\\"],\\"dateModified\\":\\"2024-05-08T07:35:02.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[{"level":2,"title":"缓存穿透","slug":"缓存穿透","link":"#缓存穿透","children":[{"level":3,"title":"概念","slug":"概念","link":"#概念","children":[]},{"level":3,"title":"被动方案","slug":"被动方案","link":"#被动方案","children":[]},{"level":3,"title":"主动方案","slug":"主动方案","link":"#主动方案","children":[]}]},{"level":2,"title":"缓存雪崩","slug":"缓存雪崩","link":"#缓存雪崩","children":[{"level":3,"title":"概念","slug":"概念-1","link":"#概念-1","children":[]},{"level":3,"title":"解决方案","slug":"解决方案","link":"#解决方案","children":[]}]},{"level":2,"title":"缓存击穿/热点 key 问题","slug":"缓存击穿-热点-key-问题","link":"#缓存击穿-热点-key-问题","children":[{"level":3,"title":"概念","slug":"概念-2","link":"#概念-2","children":[]},{"level":3,"title":"解决方案","slug":"解决方案-1","link":"#解决方案-1","children":[]}]}],"git":{"createdTime":1672229303000,"updatedTime":1715153702000,"contributors":[{"name":"davidliuk","email":"l729641074@163.com","commits":3},{"name":"刘大维","email":"davidliu@liudaweideMacBook-Pro.local","commits":2}]},"readingTime":{"minutes":4.96,"words":1488},"filePathRelative":"cs/database/redis/practice/problem/cache-problem.md","localizedDate":"December 28, 2022","excerpt":"\\n<p><img src=\\"https://cdn.jsdelivr.net/gh/davidliuk/images@master/blog/061e2c04e0ebca3425dd75dd035b6b7b.png\\" alt=\\"图片\\" loading=\\"lazy\\"></p>\\n<h2>缓存穿透</h2>\\n<p>Pass Through</p>\\n<h3>概念</h3>\\n<p>客户端请求的数据在缓存中和数据库中<strong>都不存在</strong>，这样缓存永远不会生效，这些请求都会打到数据库。</p>\\n<h3>被动方案</h3>\\n<ul>\\n<li>\\n<p>缓存空对象</p>\\n<ul>\\n<li>优点：实现简单，维护方便</li>\\n<li>缺点：\\n<ul>\\n<li>额外的内存消耗（不过可以通过 TTL 来缓解）</li>\\n<li>可能造成短期的不一致</li>\\n</ul>\\n</li>\\n</ul>\\n</li>\\n<li>\\n<p>布隆过滤</p>\\n<ul>\\n<li>\\n<p>优点：内存占用比较少，没有多余 key</p>\\n</li>\\n<li>\\n<p>缺点：</p>\\n<ul>\\n<li>\\n<p>实现复杂（hash + bitmap + 概率实现的）</p>\\n</li>\\n<li>\\n<p>存在误判可能（假阳性</p>\\n<p>说不存在一定不存在，但是说存在的时候也有一定概率是不存在的</p>\\n</li>\\n</ul>\\n</li>\\n</ul>\\n</li>\\n<li>\\n<p>接口限流</p>\\n<p>根据用户或者 IP 对接口进行限流，对于异常频繁的访问行为，还可以采取黑名单机制，例如将异常 IP 列入黑名单。</p>\\n</li>\\n</ul>","autoDesc":true}`);export{h as comp,o as data};
