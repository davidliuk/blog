import{_ as n,V as s,W as a,Z as p}from"./framework-e5d7a6b2.js";const t={},e=p(`<h1 id="分布式锁" tabindex="-1"><a class="header-anchor" href="#分布式锁" aria-hidden="true">#</a> 分布式锁</h1><p>满足分布式系统或集群模式下多进程可见并且互斥的锁。</p><ul><li>多进场可见</li><li>互斥</li><li>高可用</li><li>高性能</li><li>安全性</li><li>锁自身的特性：公平非公平等</li></ul><p>三种常见方式对比：</p><p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/截屏2023-02-08 11.12.18.png" alt="截屏2023-02-08 11.12.18" loading="lazy"></p><h2 id="redis-实现" tabindex="-1"><a class="header-anchor" href="#redis-实现" aria-hidden="true">#</a> Redis 实现</h2><h3 id="操作" tabindex="-1"><a class="header-anchor" href="#操作" aria-hidden="true">#</a> 操作</h3><h4 id="获取锁" tabindex="-1"><a class="header-anchor" href="#获取锁" aria-hidden="true">#</a> 获取锁</h4><div class="language-redis line-numbers-mode" data-ext="redis"><pre class="language-redis"><code># 添加锁，NX是互斥，EX是超时时间秒，PX是毫秒
SET lock thread1 EX 10 NX
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="释放锁" tabindex="-1"><a class="header-anchor" href="#释放锁" aria-hidden="true">#</a> 释放锁</h4><p>由于不是单一指令，需要借助 lua 脚本来保证原子性</p><blockquote><p>可以看到，解锁是有两个操作，这时就需要 Lua 脚本来保证解锁的原子性，因为 Redis 在执行 Lua 脚本时，可以以原子性的方式执行，保证了锁释放操作的原子性。</p></blockquote><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code><span class="token operator">//</span> 释放锁时，先比较 thread号 是否相等，避免锁的误释放
<span class="token keyword">if</span> redis<span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>get<span class="token punctuation">,</span>KEYS<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">==</span> ARGV<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token keyword">then</span>
    <span class="token keyword">return</span> redis<span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>del<span class="token punctuation">,</span>KEYS<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token keyword">else</span>
    <span class="token keyword">return</span> <span class="token number">0</span>
<span class="token keyword">end</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="缺点" tabindex="-1"><a class="header-anchor" href="#缺点" aria-hidden="true">#</a> 缺点</h3><ul><li><p>不可重入</p><p>同一个线程无法多次获取同一把锁</p><p>解决：</p><p>解决方案：用 hash 加锁，存线程 id 和重入次数，每次加锁前先判断是否是同一个线程，是的话就重入次数加一，不是的话就加锁。</p></li><li><p>不可重试</p><p>获取锁只尝试一次就返回 false</p></li><li><p>超时释放</p><p>如果超时释放的时候任务还未完成，会出现脏读等情况</p><p>解决方案：需要有超时续期机制，redisson 是 watchDog 机制</p></li><li><p>主从一致性问题</p><p>由于主从有延迟，可能有的在别的节点加锁，有的没有加索成功</p><p>解决方案：redlock 算法，向集群里面每一个节点都申请，如果成功一半以上，就认为是成功，否则失败（慢、消耗大，好处不如坏处多所以一般不用）</p></li><li><p>超时时间不好设置</p><p>。如果锁的超时时间设置过长，会影响性能，如果设置的超时时间过短会保护不到共享资源。比如在有些场景中，一个线程 A 获取到了锁之后，由于业务代码执行时间可能比较长，导致超过了锁的超时时间，自动失效，注意 A 线程没执行完，后续线程 B 又意外的持有了锁，意味着可以操作共享资源，那么两个线程之间的共享资源就没办法进行保护了。</p><ul><li><strong>那么如何合理设置超时时间呢？</strong> 我们可以基于续约的方式设置超时时间：先给锁设置一个超时时间，然后启动一个守护线程，让守护线程在一段时间后，重新设置这个锁的超时时间。实现方式就是：写一个守护线程，然后去判断锁的情况，当锁快失效的时候，再次进行续约加锁，当主线程执行完成后，销毁续约锁即可，不过这种方式实现起来相对复杂。</li></ul></li><li><p><strong>Redis 主从复制模式中的数据是异步复制的，这样导致分布式锁的不可靠性</strong>。如果在 Redis 主节点获取到锁后，在没有同步到其他节点时，Redis 主节点宕机了，此时新的 Redis 主节点依然可以获取锁，所以多个应用服务就可以同时获取到锁。</p><p>解决方案：RedLock</p></li></ul><h2 id="redisson-实现" tabindex="-1"><a class="header-anchor" href="#redisson-实现" aria-hidden="true">#</a> Redisson 实现</h2><p>redisson是使用java实现的操作redis的一个工具，redisson可以作为spring-data的底层实现，通过redisTemplate封装的api来使用，redisson利用redis中的hash数据结构来实现获取锁、锁重入和释放锁等。</p><p>redisson包含了各种分布式锁的实现其中包括了，可重入锁、公平锁、读写锁、联锁、红锁等。java中常用的锁redisson都有分布式的实现方案。</p><h3 id="可重入锁原理" tabindex="-1"><a class="header-anchor" href="#可重入锁原理" aria-hidden="true">#</a> 可重入锁原理</h3><p>redisson实现的可重入锁原理跟java中的ReentrantLock类似，通过redis的hash数据来获取锁和锁的可重入，redis的发布订阅消息实现了线程阻塞和重试获取锁。</p><h4 id="加锁" tabindex="-1"><a class="header-anchor" href="#加锁" aria-hidden="true">#</a> 加锁</h4><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code><span class="token comment">-- 判断rediskey是否存在，如果不存在则表示锁没有被其它线程获取</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>redis<span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token string">&#39;exists&#39;</span><span class="token punctuation">,</span> KEYS<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">then</span>
    <span class="token comment">-- 创建命名为order的hash数据，并且把线程id作为key，1作为value存入hash中</span>
    redis<span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token string">&#39;hincrby&#39;</span><span class="token punctuation">,</span> KEYS<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> ARGV<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">-- 重置redis过期时间</span>
    redis<span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token string">&#39;pexpire&#39;</span><span class="token punctuation">,</span> KEYS<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> ARGV<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">-- 返回nil在java中就是null</span>
    <span class="token keyword">return</span> <span class="token keyword">nil</span><span class="token punctuation">;</span>
<span class="token keyword">end</span>
<span class="token comment">-- 到这一步了则表示锁已经被获取了接下来判断获取锁的线程是否是当前线程</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>redis<span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token string">&#39;hexists&#39;</span><span class="token punctuation">,</span> KEYS<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> ARGV<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">then</span>
    <span class="token comment">-- 如果获取锁成功，代表获取锁次数的value+1</span>
    redis<span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token string">&#39;hincrby&#39;</span><span class="token punctuation">,</span> KEYS<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> ARGV<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">-- 重置redisKey的有效期</span>
    redis<span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token string">&#39;pexpire&#39;</span><span class="token punctuation">,</span> KEYS<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> ARGV<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token keyword">nil</span><span class="token punctuation">;</span>
<span class="token keyword">end</span>
<span class="token comment">-- 到了这一步则表示获取锁已经失败了，最后返回redisKey有效期的剩余时间</span>
<span class="token keyword">return</span> redis<span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token string">&#39;pttl&#39;</span><span class="token punctuation">,</span> KEYS<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="解锁" tabindex="-1"><a class="header-anchor" href="#解锁" aria-hidden="true">#</a> 解锁</h4><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code><span class="token comment">-- 检查锁是否是自己的</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>redis<span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token string">&#39;hexists&#39;</span><span class="token punctuation">,</span> KEYS<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> ARGV<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">then</span>
    <span class="token comment">-- 如果锁不是自己的直接返回nil</span>
    <span class="token keyword">return</span> <span class="token keyword">nil</span><span class="token punctuation">;</span>
<span class="token keyword">end</span>
<span class="token comment">-- 释放一次锁之后返回剩余的数量</span>
<span class="token keyword">local</span> counter <span class="token operator">=</span> redis<span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token string">&#39;hincrby&#39;</span><span class="token punctuation">,</span> KEYS<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> ARGV<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">-- 如果counter&gt;0表示锁还未被完全释放</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>counter <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">then</span>
    <span class="token comment">-- 重置锁的有效期</span>
    redis<span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token string">&#39;pexpire&#39;</span><span class="token punctuation">,</span> KEYS<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> ARGV<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token keyword">else</span>
    <span class="token comment">-- counter == 0 表示锁被完全释放删除redisKey</span>
    redis<span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token string">&#39;del&#39;</span><span class="token punctuation">,</span> KEYS<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">-- 发布消息给还在等待获取锁的线程</span>
    redis<span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token string">&#39;publish&#39;</span><span class="token punctuation">,</span> KEYS<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span> ARGV<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token keyword">end</span>
<span class="token keyword">return</span> <span class="token keyword">nil</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://cdn.jsdelivr.net/gh/davidliuk/images@master/blog/968.png" alt="img" loading="lazy"></p>`,25),c=[e];function o(l,i){return s(),a("div",null,c)}const r=n(t,[["render",o],["__file","distributed-lock.html.vue"]]);export{r as default};