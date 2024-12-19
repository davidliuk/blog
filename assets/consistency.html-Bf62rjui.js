import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,d as e,o as l}from"./app-PqS9YW_3.js";const n={};function t(p,i){return l(),a("div",null,i[0]||(i[0]=[e(`<h1 id="双写一致性" tabindex="-1"><a class="header-anchor" href="#双写一致性"><span>双写一致性</span></a></h1><p>缓存更新策略</p><p><a href="https://juejin.cn/post/6964531365643550751" target="_blank" rel="noopener noreferrer">方案讲解</a></p><p><a href="https://cloud.tencent.com/developer/article/1926259" target="_blank" rel="noopener noreferrer">https://cloud.tencent.com/developer/article/1926259</a></p><h2 id="概览" tabindex="-1"><a class="header-anchor" href="#概览"><span>概览</span></a></h2><table><thead><tr><th></th><th>内存淘汰</th><th>超时剔除</th><th>主动更新</th></tr></thead><tbody><tr><td>说明</td><td>不用自己维护，利用 Redis 内存淘汰机制，内存不足时自动淘汰部分数据。下次查询时更新缓存。</td><td>给缓存数据添加 TTL 时间，到期后自动删除缓存。下次查询时更新缓存。</td><td>编写业务逻辑，再修改数据库的同时，更新缓存</td></tr><tr><td>一致性</td><td>差</td><td>一般</td><td>好</td></tr><tr><td>维护成本</td><td>无</td><td>低</td><td>高</td></tr></tbody></table><p>业务场景：</p><ul><li><p>低一致性需求：</p><p>使用内存淘汰机制。例如店铺类型等查询。</p></li><li><p>高一致性需求：</p><p>主动更新，并以超时剔除作为兜底方案。例如店铺详情查询的缓存。</p></li></ul><h2 id="主动更新策略" tabindex="-1"><a class="header-anchor" href="#主动更新策略"><span>主动更新策略</span></a></h2><h3 id="cache-aside-pattern-旁路缓存" tabindex="-1"><a class="header-anchor" href="#cache-aside-pattern-旁路缓存"><span>Cache Aside Pattern 旁路缓存</span></a></h3><p>最常用 ✅</p><p>由缓存的调用者，在更新数据库的同时更新缓存。需要开发者自己编码，但是可控性很高</p><h4 id="需要考虑的问题" tabindex="-1"><a class="header-anchor" href="#需要考虑的问题"><span>需要考虑的问题</span></a></h4><ol><li><p>删除缓存还是更新缓存？</p><ul><li><p>更新缓存 ❌</p><p>每次更新数据库都更新缓存，无效读写多 ，且会不一致</p><p>多线程坏境下，A、B两个线程有快行慢有并行</p><ul><li><p>先更新数据库、再更新缓存</p><p><img src="https://cdn.jsdelivr.net/gh/davidliuk/images@master/blog/8febac10b14bed16cb96d1d944cd08da.png" alt="图片" loading="lazy"></p><p>异常情况</p><ol><li>redis更新失败，脏数据</li><li>redis回写乱序，写入覆盖，脏数据</li></ol></li><li><p>先更新缓存、再更新数据库</p><p>不推荐：业务上一般把mysql作为底单数据库，保证最后解释</p><p><img src="https://cdn.jsdelivr.net/gh/davidliuk/images@master/blog/454a8228a6549176ad7e0484fba3c92b.png" alt="图片" loading="lazy"></p></li></ul></li><li><p>删除缓存：更新数据库时，让缓存失效，查询时再更新缓存🉑</p></li></ul></li><li><p>如何保证缓存与数据库操作的同时成功或失败？</p><ul><li>单体系统，将缓存与数据库操作放在一个事务</li><li>分布式系统，利用 TCC 等分布式事务方案</li><li>重试机制</li></ul></li><li><p>先操作缓存还是先操作数据库？<strong><em>多线程并发访问</em></strong></p><ul><li><p>先删除缓存，再操作数据库 ❌</p><p><img src="https://cdn.jsdelivr.net/gh/davidliuk/images@master/blog/cc208c2931b4e889d1a58cb655537767.png" alt="图片" loading="lazy"></p><p>问题如上</p><p>解决方案：延迟双删策略</p><p>还有缺陷：可能因为缓存确实而数据库击穿</p></li><li><p>先操作数据库，再删除缓存 ✅</p><p>微软Azure和阿里巴巴都采用这种策略</p><p><img src="https://cdn.jsdelivr.net/gh/davidliuk/images@master/blog/1cc7401143e79383ead96582ac11b615.png" alt="图片" loading="lazy"></p><p>一致性问题，操作数据库比操作 redis<strong>慢得多</strong>，所以先操作数据库出现一致性问题的概率更小</p><p>唯一的异常情况：假如缓存删除失败或者来不及，导致请求再次访问redisl时缓存命中，读取到的是缓存旧值</p></li></ul><p>且即使删除操作失败了，也有过期时间可以作为保障兜底（即使删除操作失败了，超时以后也可以删除）</p><p>缓存删除失败的方案：<strong>异步操作缓存</strong></p><p><strong>重试机制</strong></p><p>我们可以引入<strong>消息队列</strong>，将第二个操作（删除缓存）要操作的数据加入到消息队列，由消费者来操作数据。</p><ul><li>如果应用<strong>删除缓存失败</strong>，可以从消息队列中重新读取数据，然后再次删除缓存，这个就是<strong>重试机制</strong>。当然，如果重试超过的一定次数，还是没有成功，我们就需要向业务层发送报错信息了。</li><li>如果<strong>删除缓存成功</strong>，就要把数据从消息队列中移除，避免重复操作，否则就继续重试。</li></ul><p>举个例子，来说明重试机制的过程。</p><p><strong>订阅 MySQL binlog 再操作缓存</strong></p><p>Canal</p><p><img src="https://cdn.jsdelivr.net/gh/davidliuk/images@master/blog/a4440f0d572612e0832b903e4a62bd2b.png" alt="图片" loading="lazy"></p><p>步骤</p><ol><li>更新数据库数据</li><li>数据库会将操作信息写入binlog日志当中</li><li>订阅程序提取出所需要的数据以及key</li><li>另起一段非业务代码，获得该信息</li><li>尝试别除饭存操作，发现刷除失殿</li><li>将这些信息发送至消息队列</li><li>重新从消息队列中获得该数据，重试操作。</li></ol></li></ol><p><img src="https://cdn.jsdelivr.net/gh/davidliuk/images@master/blog/截屏2024-05-24 下午10.35.55.png" alt="截屏2024-05-24 下午10.35.55" loading="lazy"></p><p>缺点：</p><ol><li><p>首次请求数据一定不在 cache 的问题</p><p>解决办法：可以将热点数据可以提前放入 cache 中。</p></li><li><p>写操作比较频繁的话导致 cache 中的数据会被频繁被删除，会影响缓存命中率。</p><p>解决办法：</p></li></ol><p>要求数据库和缓存数据强一致场景：更新 db 的时候同样更新 cache,不过我们需要加一个锁/分布式锁来保证更新 cache 的时候不存在线程安全问题。</p><p>允许数据库和缓存数据短暂不一致的场景：更新 db 的时候同样更新 cache，但是给缓存加一个比较短的过期时间，这样的话就可以保证即使数据不一致的话影响也比较小。</p><h3 id="read-write-through-pattern-读写穿透" tabindex="-1"><a class="header-anchor" href="#read-write-through-pattern-读写穿透"><span>Read/Write Through Pattern 读写穿透</span></a></h3><p>方案是由某种第三方服务提供，但是这样的服务很少</p><p>Read-Through Pattern 实际只是在 Cache-Aside Pattern 之上进行了封装。在 Cache-Aside Pattern 下，发生读请求的时候，如果 cache 中不存在对应的数据，是由客户端自己负责把数据写入 cache,而 Read Through Pattern 则是 cache 服务自己来写入缓存的，这对客户端是透明的。</p><p>和 Cache Aside Pattern 一样，Read-Through Pattern 也有首次请求数据一定不再 cache 的问题，对于热点数据可以提前放入缓存中。</p><h3 id="write-behind-caching-pattern-写回-异步缓存写入" tabindex="-1"><a class="header-anchor" href="#write-behind-caching-pattern-写回-异步缓存写入"><span>Write Behind Caching Pattern 写回/异步缓存写入</span></a></h3><p>调用者只操作缓存，由其他线程异步的将缓存数据持久化道数据库，保证最终一致性</p><p>一致性和可靠性都存在一定的问题。</p><p>Write Behind Pattern 和 Read/Write Through Pattern 很相似，两者都是由 cache 服务来负责 cache 和 db 的读写。</p><p>但是，两个又有很大的不同：Read/Write Through 是同步更新 cache 和 db，而 Write Behind 则是只更新缓存，不直接更新 db,而是改为异步批量的方式来更新 db。</p><p>很明显，这种方式对数据一致性带来了更大的挑战，比如 cache 数据可能还没异步更新 db 的话，cache 服务可能就就挂掉了。</p><p>这种策略在我们平时开发过程中也非常非常少见，但是不代表它的应用场景少，比如消息队列中消息的异步写入磁盘、MySQL 的 Innodb Buffer Pool 机制都用到了这种策略。</p><p>Write Behind Pattern 下 db 的写性能非常高，非常适合一些数据经常变化又对数据一致性要求没那么高的场景，比如浏览量、点赞量。</p><hr><p>MESI 协议是一个基于失效的缓存一致性协议，是支持写回（write-back）缓存的最常用协议。也称作伊利诺伊协议 (Illinois protocol，因为是在伊利诺伊大学厄巴纳-香槟分校被发明的[1])。与写直达（write through）缓存相比，回写缓冲能节约大量带宽。总是有“脏”（dirty）状态表示缓存中的数据与主存中不同。MESI 协议要求在缓存不命中（miss）且数据块在另一个缓存时，允许缓存到缓存的数据复制。与 MSI 协议相比，MESI 协议减少了主存的事务数量。这极大改善了性能。[2]</p><h3 id="缓存延时双删" tabindex="-1"><a class="header-anchor" href="#缓存延时双删"><span>缓存延时双删</span></a></h3><ol><li>延时双删用比较简洁的方式实现 mysql 和 redis 数据最终一致性，但它不是强一致。</li><li>延时，是因为 mysql 和 redis 主从节点数据同步不是实时的，所以需要等待一段时间，去增强它们的数据一致性。</li><li><code>延时</code> 是指当前请求逻辑处理延时，而不是当前线程或进程睡眠延时。</li><li>mysql 和 redis 数据一致性是一个复杂的课题，通常是多种策略同时使用，例如：延时双删、redis 过期淘汰、通过路由策略串行处理同类型数据、分布式锁等等。</li></ol><p>有些小伙伴可能会说，不一定要先操作数据库呀，采用缓存延时双删策略就好啦？什么是延时双删呢？</p><ul><li>第一次删除为了删除脏读，也有可能提前实现前面操作的最终一致。</li><li>第二次删除为了最终一致。</li></ul><p>为什么要延时呢？因为 mysql 和 redis 主从节点数据不是实时同步的，同步数据需要时间。</p><p>数据工作的大致流程：</p><ol><li>服务节点删除 redis 主库数据。</li><li>服务节点修改 mysql 主库数据。</li><li>服务节点使得当前业务处理 <code>等待一段时间</code>，等 redis 和 mysql 主从节点数据同步成功。</li><li>服务节点从 redis 主库删除数据。</li><li>当前或其它服务节点读取 redis 从库数据，发现 redis 从库没有数据，从 mysql 从库读取数据，并写入 redis 主库。</li></ol><p>高性能系统当然是越快越好，所以延时双删的 “延时” 不见得有多好，但是在读多写少的应用场景中，也算是性能和功能的折中处理。</p><p>很多时候，数据不一致是因为多个节点并行读写共享数据导致。如果某些特定业务只落在某个进程某个线程上独立 <code>串行</code> 处理，那问题处理是否会更好呢？</p><p>缺点</p><ol><li>延时双删，有等待环节，如果系统要求低延时，这种场景就不合适了。</li><li>延时双删，不适合“秒杀”这种频繁修改数据和要求数据强一致的场景。</li><li>延时双删，延时时间是一个预估值，不能确保 mysql 和 redis 数据在这个时间段内都实时同步或持久化成功了。</li></ol><h3 id="删除缓存重试机制" tabindex="-1"><a class="header-anchor" href="#删除缓存重试机制"><span>删除缓存重试机制</span></a></h3><p><a href="https://zhuanlan.zhihu.com/p/467410359" target="_blank" rel="noopener noreferrer">参考</a></p><p>不管是延时双删还是 Cache-Aside 的先操作数据库再删除缓存，如果第二步的删除缓存失败呢，删除失败会导致脏数据</p><blockquote><p>删除失败就多删除几次，保证删除缓存成功。所以引入删除缓存重试机制</p></blockquote><ul><li>写请求更新数据库</li><li>缓存因为某些原因，删除失败</li><li>把删除失败的 key 放到消息队列</li><li>消费消息队列的消息，获取要删除的 key</li><li>重试删除缓存操作</li></ul><p>读取 binlog 异步删除缓存</p><p>重试删除缓存机制还可以，就是会造成好多业务代码入侵。其实，还可以通过数据库的 binlog 来异步淘汰 key。</p><hr><p>双写一致性，你先动缓存redisi还是数据库mysql哪一个？why?<br> 延时双删你做过吗？会有哪些问题？<br> 有这么一种情况，微服务查询 redis 无 mysql 有，为保证数据双写一致性回写redis你需要注意什么？双检加锁策略你了解过吗？如何尽量避免缓存击穿？<br> redis和mysql双写100%会出纰漏，做不到强一致性，你如何保证最终一致性？</p><h3 id="双检加锁策略-double-check-lock-dcl" tabindex="-1"><a class="header-anchor" href="#双检加锁策略-double-check-lock-dcl"><span>双检加锁策略 Double-check lock (DCL)</span></a></h3><p>有这么一种情况，微服务查询redis无mysq有，为保证数据双写一致性回写redis你需要注意什么？双检加锁策略你了解过吗？如何尽量避免缓存击穿？</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">String</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> get</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">String</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> key) {</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">	String</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> value </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> redis</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">get</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(key);</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    if</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> (value </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">!=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> null</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">) {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        return</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> value</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">    }</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    synchronized</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> (</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">UserService</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">class</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">) {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">        value </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> redis</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">get</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(key);</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        if</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> (value </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">!=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> null</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">) {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">            return</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> value</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">        }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">        value </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> dao</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">get</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(key);</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">        redis</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">setnx</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(key, value, time);</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">		return</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> value</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">String</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> get</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">String</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> key) {</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">	String</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> value </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> redis</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">get</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(key);</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    if</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> (value </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">==</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> null</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">) {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        synchronized</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> (</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">UserService</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">class</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">) {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">            value </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> redis</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">get</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(key);</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">            if</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> (value </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">==</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> null</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">) {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">                value </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> dao</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">get</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(key);</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">                redis</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">setnx</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(key, value, time);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">            }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">        }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">    }</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    return</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> value</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="延时双删" tabindex="-1"><a class="header-anchor" href="#延时双删"><span>延时双删</span></a></h3><p>先删缓存，再更新数据库</p><h4 id="这个时间怎么确定呢" tabindex="-1"><a class="header-anchor" href="#这个时间怎么确定呢"><span>这个时间怎么确定呢？</span></a></h4><p>第一种方法，</p><p>在业务程序运行的时候，统计下线程读数据和写级存的操作时问，自行评估自己的项口的读数据业务逻圳的耗时，以此为基璃来进行估算，然后写数据的休眠时问则在读数据业务逻辑的耗时基偏上加百毫秒即可，</p><p>这么做的目的，就是确保读请求结果，写请求可以剩除读请求造成的饺存脏数据。</p><p>第二种方法：</p><p>新启动一个后台监程序。比如后面要讲解的WatchDog监控程序，会加时</p><h4 id="降低吞吐量怎么办" tabindex="-1"><a class="header-anchor" href="#降低吞吐量怎么办"><span>降低吞吐量怎么办？</span></a></h4><p>completable future</p><h3 id="最终一致性" tabindex="-1"><a class="header-anchor" href="#最终一致性"><span>最终一致性</span></a></h3><p>与数据库保持一直，一定要考虑binlog</p><p>canal</p><p>我想mysql有记录改动了（有增删改写操作)，立刻同步反应到redis？？？该如何做？</p>`,70)]))}const d=s(n,[["render",t],["__file","consistency.html.vue"]]),k=JSON.parse(`{"path":"/cs/database/redis/practice/problem/consistency.html","title":"双写一致性","lang":"en-US","frontmatter":{"description":"双写一致性 缓存更新策略 方案讲解 https://cloud.tencent.com/developer/article/1926259 概览 业务场景： 低一致性需求： 使用内存淘汰机制。例如店铺类型等查询。 高一致性需求： 主动更新，并以超时剔除作为兜底方案。例如店铺详情查询的缓存。 主动更新策略 Cache Aside Pattern 旁路缓存...","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/cs/database/redis/practice/problem/consistency.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"双写一致性"}],["meta",{"property":"og:description","content":"双写一致性 缓存更新策略 方案讲解 https://cloud.tencent.com/developer/article/1926259 概览 业务场景： 低一致性需求： 使用内存淘汰机制。例如店铺类型等查询。 高一致性需求： 主动更新，并以超时剔除作为兜底方案。例如店铺详情查询的缓存。 主动更新策略 Cache Aside Pattern 旁路缓存..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/davidliuk/images@master/blog/8febac10b14bed16cb96d1d944cd08da.png"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-06-27T01:21:47.000Z"}],["meta",{"property":"article:modified_time","content":"2024-06-27T01:21:47.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"双写一致性\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/davidliuk/images@master/blog/8febac10b14bed16cb96d1d944cd08da.png\\",\\"https://cdn.jsdelivr.net/gh/davidliuk/images@master/blog/454a8228a6549176ad7e0484fba3c92b.png\\",\\"https://cdn.jsdelivr.net/gh/davidliuk/images@master/blog/cc208c2931b4e889d1a58cb655537767.png\\",\\"https://cdn.jsdelivr.net/gh/davidliuk/images@master/blog/1cc7401143e79383ead96582ac11b615.png\\",\\"https://cdn.jsdelivr.net/gh/davidliuk/images@master/blog/a4440f0d572612e0832b903e4a62bd2b.png\\",\\"https://cdn.jsdelivr.net/gh/davidliuk/images@master/blog/%E6%88%AA%E5%B1%8F2024-05-24%20%E4%B8%8B%E5%8D%8810.35.55.png\\"],\\"dateModified\\":\\"2024-06-27T01:21:47.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[{"level":2,"title":"概览","slug":"概览","link":"#概览","children":[]},{"level":2,"title":"主动更新策略","slug":"主动更新策略","link":"#主动更新策略","children":[{"level":3,"title":"Cache Aside Pattern 旁路缓存","slug":"cache-aside-pattern-旁路缓存","link":"#cache-aside-pattern-旁路缓存","children":[]},{"level":3,"title":"Read/Write Through Pattern 读写穿透","slug":"read-write-through-pattern-读写穿透","link":"#read-write-through-pattern-读写穿透","children":[]},{"level":3,"title":"Write Behind Caching Pattern 写回/异步缓存写入","slug":"write-behind-caching-pattern-写回-异步缓存写入","link":"#write-behind-caching-pattern-写回-异步缓存写入","children":[]},{"level":3,"title":"缓存延时双删","slug":"缓存延时双删","link":"#缓存延时双删","children":[]},{"level":3,"title":"删除缓存重试机制","slug":"删除缓存重试机制","link":"#删除缓存重试机制","children":[]},{"level":3,"title":"双检加锁策略 Double-check lock (DCL)","slug":"双检加锁策略-double-check-lock-dcl","link":"#双检加锁策略-double-check-lock-dcl","children":[]},{"level":3,"title":"延时双删","slug":"延时双删","link":"#延时双删","children":[]},{"level":3,"title":"最终一致性","slug":"最终一致性","link":"#最终一致性","children":[]}]}],"git":{"createdTime":1715153702000,"updatedTime":1719451307000,"contributors":[{"name":"刘大维","email":"davidliu@liudaweideMacBook-Pro.local","commits":2}]},"readingTime":{"minutes":10.49,"words":3147},"filePathRelative":"cs/database/redis/practice/problem/consistency.md","localizedDate":"May 8, 2024","excerpt":"\\n<p>缓存更新策略</p>\\n<p><a href=\\"https://juejin.cn/post/6964531365643550751\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">方案讲解</a></p>\\n<p><a href=\\"https://cloud.tencent.com/developer/article/1926259\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://cloud.tencent.com/developer/article/1926259</a></p>\\n<h2>概览</h2>","autoDesc":true}`);export{d as comp,k as data};
