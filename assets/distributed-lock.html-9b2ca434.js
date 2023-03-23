import{_ as a,V as n,W as s,a0 as e}from"./framework-705b829b.js";const i={},p=e(`<h1 id="分布式锁" tabindex="-1"><a class="header-anchor" href="#分布式锁" aria-hidden="true">#</a> 分布式锁</h1><p>满足分布式系统或集群模式下多进程可见并且互斥的锁。</p><ul><li>多进场可见</li><li>互斥</li><li>高可用</li><li>高性能</li><li>安全性</li><li>锁自身的特性：公平非公平等</li></ul><p>三种常见方式对比：</p><p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/截屏2023-02-08 11.12.18.png" alt="截屏2023-02-08 11.12.18" loading="lazy"></p><h2 id="redis-实现" tabindex="-1"><a class="header-anchor" href="#redis-实现" aria-hidden="true">#</a> Redis 实现</h2><h3 id="操作" tabindex="-1"><a class="header-anchor" href="#操作" aria-hidden="true">#</a> 操作</h3><h4 id="获取锁" tabindex="-1"><a class="header-anchor" href="#获取锁" aria-hidden="true">#</a> 获取锁</h4><div class="language-redis line-numbers-mode" data-ext="redis"><pre class="language-redis"><code># 添加锁，NX是互斥，EX是超时时间
SET lock thread1 EX 10 NX
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="释放锁" tabindex="-1"><a class="header-anchor" href="#释放锁" aria-hidden="true">#</a> 释放锁</h4><p>由于不是单一指令，需要借助lua脚本来保证原子性</p><blockquote><p>可以看到，解锁是有两个操作，这时就需要 Lua 脚本来保证解锁的原子性，因为 Redis 在执行 Lua 脚本时，可以以原子性的方式执行，保证了锁释放操作的原子性。</p></blockquote><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code><span class="token operator">//</span> 释放锁时，先比较 thread号 是否相等，避免锁的误释放
<span class="token keyword">if</span> redis<span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token string">&quot;get&quot;</span><span class="token punctuation">,</span>KEYS<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">==</span> ARGV<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token keyword">then</span>
    <span class="token keyword">return</span> redis<span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token string">&quot;del&quot;</span><span class="token punctuation">,</span>KEYS<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token keyword">else</span>
    <span class="token keyword">return</span> <span class="token number">0</span>
<span class="token keyword">end</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="缺点" tabindex="-1"><a class="header-anchor" href="#缺点" aria-hidden="true">#</a> 缺点</h3><ul><li><p>不可重入</p><p>同一个线程无法多次获取同一把锁</p><p>解决：</p><p>为每个锁关联⼀个请求计数器和⼀个占有它的线程。当计数为0，认为锁未被占有。就加锁解锁都用lua了</p><p>线程请求⼀个未被占有的锁时，JVM将记录锁的占有者，并将请求计数器置1。</p><p>若同⼀线程再请求该锁，计数将递增 每次占⽤线程退出同步块，计数器值将递减。直到计数器为0, 锁被释放 ⽗类和⼦类的锁的重⼊：⼦类重写⽗类的 synchonized ⽅法，然后调⽤⽗类中的⽅法，此时若没有重⼊锁，这段代码将死锁。</p></li><li><p>不可重试</p><p>获取锁只尝试一次就返回false</p></li><li><p>超时释放</p><p>如果超时释放的时候任务还未完成，会出现脏读等情况</p><p>解决方案：需要有超时续期机制，redisson是watchDog机制</p></li><li><p>主从一致性问题</p><p>由于主从有延迟，可能有的在别的节点加锁，有的没有加索成功</p><p>解决方案：redlock算法，向集群里面每一个节点都申请，如果成功一半以上，就认为是成功，否则失败（慢、消耗大，好处不如坏处多所以一般不用）</p></li><li><p>超时时间不好设置</p><p>。如果锁的超时时间设置过长，会影响性能，如果设置的超时时间过短会保护不到共享资源。比如在有些场景中，一个线程 A 获取到了锁之后，由于业务代码执行时间可能比较长，导致超过了锁的超时时间，自动失效，注意 A 线程没执行完，后续线程 B 又意外的持有了锁，意味着可以操作共享资源，那么两个线程之间的共享资源就没办法进行保护了。</p><ul><li><strong>那么如何合理设置超时时间呢？</strong> 我们可以基于续约的方式设置超时时间：先给锁设置一个超时时间，然后启动一个守护线程，让守护线程在一段时间后，重新设置这个锁的超时时间。实现方式就是：写一个守护线程，然后去判断锁的情况，当锁快失效的时候，再次进行续约加锁，当主线程执行完成后，销毁续约锁即可，不过这种方式实现起来相对复杂。</li></ul></li><li><p><strong>Redis 主从复制模式中的数据是异步复制的，这样导致分布式锁的不可靠性</strong>。如果在 Redis 主节点获取到锁后，在没有同步到其他节点时，Redis 主节点宕机了，此时新的 Redis 主节点依然可以获取锁，所以多个应用服务就可以同时获取到锁。</p></li></ul>`,15),l=[p];function t(c,o){return n(),s("div",null,l)}const r=a(i,[["render",t],["__file","distributed-lock.html.vue"]]);export{r as default};
