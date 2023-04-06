import{_ as a,V as i,W as e,Z as l}from"./framework-e5d7a6b2.js";const r={},h=l('<h1 id="缓存问题-穿透、击穿、雪崩" tabindex="-1"><a class="header-anchor" href="#缓存问题-穿透、击穿、雪崩" aria-hidden="true">#</a> 缓存问题：穿透、击穿、雪崩</h1><p><img src="https://cdn.jsdelivr.net/gh/davidliuk/images@master/blog/061e2c04e0ebca3425dd75dd035b6b7b.png" alt="图片" loading="lazy"></p><h2 id="缓存穿透" tabindex="-1"><a class="header-anchor" href="#缓存穿透" aria-hidden="true">#</a> 缓存穿透</h2><p>Pass Through</p><h3 id="概念" tabindex="-1"><a class="header-anchor" href="#概念" aria-hidden="true">#</a> 概念</h3><p>客户端请求的数据在缓存中和数据库中都不存在，这样缓存永远不会生效，这些请求都会打到数据库。</p><h3 id="被动方案" tabindex="-1"><a class="header-anchor" href="#被动方案" aria-hidden="true">#</a> 被动方案</h3><ul><li><p>缓存空对象</p><ul><li>优点：实现简单，维护方便</li><li>缺点： <ul><li>额外的内存消耗（不过可以通过 TTL 来缓解）</li><li>可能造成短期的不一致</li></ul></li></ul></li><li><p>布隆过滤</p><ul><li><p>优点：内存占用比较少，没有多余 key</p></li><li><p>缺点：</p><ul><li><p>实现复杂（hash + bitmap + 概率实现的）</p></li><li><p>存在误判可能</p><p>说不存在一定不存在，但是说存在的时候也有一定概率是不存在的</p></li></ul></li></ul></li></ul><p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/image-20221207214912970.png" alt="image-20221207214912970" loading="lazy"></p><h3 id="主动方案" tabindex="-1"><a class="header-anchor" href="#主动方案" aria-hidden="true">#</a> 主动方案</h3><ul><li>增强 id 的复杂度，避免被猜测 id 规律，来渗透数据库</li><li>做好数据的基础格式校验（如长度，雪花算法）</li><li>加强用户权限校验</li><li>做好热点参数的限流 （spring cloud sentinel）</li></ul><p>当有大量恶意请求访问不存在的数据的时候，也会发生缓存穿透，因此在 API 入口处我们要判断求请求参数是否合理，请求参数是否含有非法值、请求字段是否存在，如果判断出是恶意请求就直接返回错误，避免进一步访问缓存和数据库。</p><h2 id="缓存雪崩" tabindex="-1"><a class="header-anchor" href="#缓存雪崩" aria-hidden="true">#</a> 缓存雪崩</h2><h3 id="概念-1" tabindex="-1"><a class="header-anchor" href="#概念-1" aria-hidden="true">#</a> 概念</h3><p>同一时段大量的缓存 key <strong>同时失效</strong>或者 <strong>Redis 服务宕机</strong>，导致大量请求到达数据库，带来巨大压力。</p><p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/image-20221207221534423.png" alt="image-20221207221534423" loading="lazy"></p><h3 id="解决方案" tabindex="-1"><a class="header-anchor" href="#解决方案" aria-hidden="true">#</a> 解决方案</h3><h4 id="大量-key-同时过期" tabindex="-1"><a class="header-anchor" href="#大量-key-同时过期" aria-hidden="true">#</a> 大量 key 同时过期</h4><ul><li><p>给不同的 key 的 TTL 添加随机值</p></li><li><p>后台更新缓存</p><p>业务线程不再负责更新缓存，缓存也不设置有效期，而是<strong>让缓存“永久有效”，并将更新缓存的工作交由后台线程定时更新</strong>。</p><p>事实上，缓存数据不设置有效期，并不是意味着数据一直能在内存里，因为<strong>当系统内存紧张的时候，有些缓存数据会被“淘汰”</strong>，而在缓存被“淘汰”到下一次后台定时更新缓存的这段时间内，业务线程读取缓存失败就返回空值，业务的视角就以为是数据丢失了。</p></li></ul><h4 id="redis-故障宕机" tabindex="-1"><a class="header-anchor" href="#redis-故障宕机" aria-hidden="true">#</a> Redis 故障宕机</h4><ul><li><p>利用 Redis 集群提高服务的可用性（高级篇：哨兵等）</p><p>服务熔断或请求限流机制是缓存雪崩发生后的应对方案，我们最好通过<strong>主从节点的方式构建 Redis 缓存高可靠集群</strong>。</p><p>如果 Redis 缓存的主节点故障宕机，从节点可以切换成为主节点，继续提供缓存服务，避免了由于 Redis 故障宕机而导致的缓存雪崩问题。</p></li><li><p>给缓存业务添加降级限流策略（Spring Cloud 课里面）</p><p>为了减少对业务的影响，我们可以启用<strong>请求限流</strong>机制，<strong>只将少部分请求发送到数据库进行处理，再多的请求就在入口直接拒绝服务</strong>，等到 Redis 恢复正常并把缓存预热完后，再解除请求限流的机制。</p></li><li><p>给业务添加多级缓存（Spring Cloud 课里面）</p><ul><li>浏览器可以添加缓存（静态数据）</li><li>Nginx 缓存</li><li>JVM 缓存</li></ul></li></ul><h2 id="缓存击穿" tabindex="-1"><a class="header-anchor" href="#缓存击穿" aria-hidden="true">#</a> 缓存击穿</h2><h3 id="概念-2" tabindex="-1"><a class="header-anchor" href="#概念-2" aria-hidden="true">#</a> 概念</h3><p>又称<strong>热点 key 问题</strong>，就是一个被高并发访问并且缓存重建业务较复杂（耗时较长）的 key 突然失效了，无数的请求访问会在瞬间给数据库带来巨大的冲击。</p><p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/image-20221207222348234.png" alt="image-20221207222348234" loading="lazy"></p><h3 id="解决方案-1" tabindex="-1"><a class="header-anchor" href="#解决方案-1" aria-hidden="true">#</a> 解决方案</h3><ul><li><p>互斥锁</p><p>互斥锁方案，保证同一时间只有一个业务线程更新缓存，未能获取互斥锁的请求，要么等待锁释放后重新读取缓存，要么就返回空值或者默认值。</p><p>缺点：性能比较差，好多别的线程在旁边自旋等待</p></li><li><p>逻辑过期，推荐！</p><p>热点 key 在活动的时候，设计逻辑过期</p></li><li><p>不给热点数据设置过期时间，由后台异步更新缓存，或者在热点数据准备要过期前，提前通知后台线程更新缓存以及重新设置过期时间；</p></li></ul><p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/image-20221207225116155.png" alt="image-20221207225116155" loading="lazy"></p><p>双重判断锁</p>',29),d=[h];function n(p,s){return i(),e("div",null,d)}const c=a(r,[["render",n],["__file","cache-problem.html.vue"]]);export{c as default};
