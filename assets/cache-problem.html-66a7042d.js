import{_ as a,V as i,W as e,a0 as l}from"./framework-705b829b.js";const h={},r=l('<h1 id="缓存问题-穿透、击穿、雪崩" tabindex="-1"><a class="header-anchor" href="#缓存问题-穿透、击穿、雪崩" aria-hidden="true">#</a> 缓存问题：穿透、击穿、雪崩</h1><h2 id="缓存穿透" tabindex="-1"><a class="header-anchor" href="#缓存穿透" aria-hidden="true">#</a> 缓存穿透</h2><p>Pass Through</p><h3 id="概念" tabindex="-1"><a class="header-anchor" href="#概念" aria-hidden="true">#</a> 概念：</h3><p>客户端请求的数据在缓存中和数据库中都不存在，这样缓存永远不会生效，这些请求都会打到数据库。</p><h3 id="被动方案" tabindex="-1"><a class="header-anchor" href="#被动方案" aria-hidden="true">#</a> 被动方案</h3><ul><li>缓存空对象 <ul><li>优点：实现简单，维护方便</li><li>缺点： <ul><li>额外的内存消耗（不过可以通过TTL来缓解）</li><li>可能造成短期的不一致</li></ul></li></ul></li><li>布隆过滤 <ul><li>优点：内存占用比较少，没有多余key</li><li>缺点： <ul><li>实现复杂（hash + bitmap + 概率实现的）</li><li>存在误判可能（说不存在一定不存在，但是说存在的时候也有一定概率是不存在的）</li></ul></li></ul></li></ul><p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/image-20221207214912970.png" alt="image-20221207214912970" loading="lazy"></p><h3 id="主动方案" tabindex="-1"><a class="header-anchor" href="#主动方案" aria-hidden="true">#</a> 主动方案</h3><ul><li>增强id的复杂度，避免被猜测id规律，来渗透数据库</li><li>做好数据的基础格式校验（如长度，雪花算法）</li><li>加强用户权限校验</li><li>做好热点参数的限流 （spring cloud sentinel）</li></ul><h2 id="缓存雪崩" tabindex="-1"><a class="header-anchor" href="#缓存雪崩" aria-hidden="true">#</a> 缓存雪崩</h2><h3 id="概念-1" tabindex="-1"><a class="header-anchor" href="#概念-1" aria-hidden="true">#</a> 概念</h3><p>同一时段大量的缓存key同时失效或者Redis服务宕机，导致大量请求到达数据库，带来巨大压力。</p><p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/image-20221207221534423.png" alt="image-20221207221534423" loading="lazy"></p><h3 id="解决方案" tabindex="-1"><a class="header-anchor" href="#解决方案" aria-hidden="true">#</a> 解决方案</h3><ul><li>给不同的key的TTL添加随机值</li><li>利用Redis集群提高服务的可用性（高级篇：哨兵等）</li><li>给缓存业务添加降级限流策略（Spring Cloud课里面）</li><li>给业务添加多级缓存（Spring Cloud课里面） <ul><li>浏览器可以添加缓存（静态数据）</li><li>Nginx缓存</li><li>JVM缓存</li></ul></li></ul><h2 id="缓存击穿" tabindex="-1"><a class="header-anchor" href="#缓存击穿" aria-hidden="true">#</a> 缓存击穿</h2><h3 id="概念-2" tabindex="-1"><a class="header-anchor" href="#概念-2" aria-hidden="true">#</a> 概念</h3><p>又称<strong>热点key问题</strong>，就是一个被高并发访问并且缓存重建业务较复杂（耗时较长）的key突然失效了，无数的请求访问会在瞬间给数据库带来巨大的冲击。</p><p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/image-20221207222348234.png" alt="image-20221207222348234" loading="lazy"></p><h3 id="解决方案-1" tabindex="-1"><a class="header-anchor" href="#解决方案-1" aria-hidden="true">#</a> 解决方案</h3><ul><li><p>互斥锁</p><p>性能比较差，好多别的线程在旁边自旋等待</p></li><li><p>逻辑过期，推荐！</p><p>热点key在活动的时候，设计逻辑过期</p></li></ul><p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/image-20221207225116155.png" alt="image-20221207225116155" loading="lazy"></p><p>双重判断锁</p>',24),d=[r];function n(c,t){return i(),e("div",null,d)}const u=a(h,[["render",n],["__file","cache-problem.html.vue"]]);export{u as default};
