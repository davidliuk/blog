import{_ as e,V as l,W as n,a0 as s}from"./framework-705b829b.js";const a={},i=s(`<h1 id="过期删除策略" tabindex="-1"><a class="header-anchor" href="#过期删除策略" aria-hidden="true">#</a> 过期删除策略</h1><p>在主线程进行的，Redis4.0以后如果是删除大key会到辅助的线程中异步删除。</p><h3 id="设置过期时间" tabindex="-1"><a class="header-anchor" href="#设置过期时间" aria-hidden="true">#</a> 设置过期时间</h3><p>先说一下对 key 设置过期时间的命令。 设置 key 过期时间的命令一共有 4 个：</p><ul><li><code>expire &lt;key&gt; &lt;n&gt;</code>：设置 key 在 n 秒后过期，比如 expire key 100 表示设置 key 在 100 秒后过期；</li><li><code>pexpire &lt;key&gt; &lt;n&gt;</code>：设置 key 在 n 毫秒后过期，比如 pexpire key2 100000 表示设置 key2 在 100000 毫秒（100 秒）后过期。</li><li><code>expireat &lt;key&gt; &lt;n&gt;</code>：设置 key 在某个时间戳（精确到秒）之后过期，比如 expireat key3 1655654400 表示 key3 在时间戳 1655654400 后过期（精确到秒）；</li><li><code>pexpireat &lt;key&gt; &lt;n&gt;</code>：设置 key 在某个时间戳（精确到毫秒）之后过期，比如 pexpireat key4 1655654400000 表示 key4 在时间戳 1655654400000 后过期（精确到毫秒）</li></ul><p>在设置字符串时，可以同时对 key 设置过期时间，共有 3 种命令：</p><ul><li><code>set &lt;key&gt; &lt;value&gt; ex &lt;n&gt;</code> ：设置键值对的时候，同时指定过期时间（精确到秒）；</li><li><code>set &lt;key&gt; &lt;value&gt; px &lt;n&gt;</code> ：设置键值对的时候，同时指定过期时间（精确到毫秒）；</li><li><code>setex &lt;key&gt; &lt;n&gt; &lt;valule&gt;</code> ：设置键值对的时候，同时指定过期时间（精确到秒）。</li></ul><p>如果你想查看某个 key 剩余的存活时间，可以使用 <code>TTL &lt;key&gt;</code> 命令。</p><h3 id="过期字典" tabindex="-1"><a class="header-anchor" href="#过期字典" aria-hidden="true">#</a> 过期字典</h3><p>每当我们对一个 key 设置了过期时间时，Redis 会把该 key 带上过期时间存储到一个<strong>过期字典</strong>（expires dict）中，也就是说「过期字典」保存了数据库中所有 key 的过期时间。</p><p>过期字典数据结构结构如下：</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">typedef</span> <span class="token keyword">struct</span> <span class="token class-name">redisDb</span> <span class="token punctuation">{</span>
    dict <span class="token operator">*</span>dict<span class="token punctuation">;</span>    <span class="token comment">/* 数据库键空间，存放着所有的键值对 */</span>
    dict <span class="token operator">*</span>expires<span class="token punctuation">;</span> <span class="token comment">/* 键的过期时间 */</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token punctuation">}</span> redisDb<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>过期字典的 key 是一个指针，指向某个键对象；</li><li>过期字典的 value 是一个 long long 类型的整数，这个整数保存了 key 的过期时间；</li></ul><p>字典实际上是哈希表，哈希表的最大好处就是让我们可以用 O(1) 的时间复杂度来快速查找。当我们查询一个 key 时，Redis 首先检查该 key 是否存在于过期字典中：</p><ul><li><p>如果不在，则正常读取键值；</p></li><li><p>如果存在，则会获取该 key 的过期时间，然后与当前系统时间进行比对，如果比系统时间大，那就没有过期，否则判定该 key 已过期。</p></li><li><p>惰性删除；</p></li><li><p>定期删除；</p></li></ul><h2 id="惰性删除" tabindex="-1"><a class="header-anchor" href="#惰性删除" aria-hidden="true">#</a> 惰性删除</h2><p>惰性删除策略的做法是，<strong>不主动删除过期键，每次从数据库访问 key 时，都检测 key 是否过期，如果过期则删除该 key。</strong></p><p>Redis 在访问或者修改 key 之前，都会调用 expireIfNeeded 函数对其进行检查，检查 key 是否过期：</p><ul><li>如果过期，则删除该 key，至于选择异步删除，还是选择同步删除，根据 <code>lazyfree_lazy_expire</code> 参数配置决定（Redis 4.0 版本开始提供参数），然后返回 null 客户端；</li><li>如果没有过期，不做任何处理，然后返回正常的键值对给客户端；</li></ul><p>惰性删除策略的<strong>优点</strong>：</p><ul><li>因为每次访问时，才会检查 key 是否过期，所以此策略只会使用很少的系统资源，因此，惰性删除策略对 CPU 时间最友好。</li></ul><p>惰性删除策略的<strong>缺点</strong>：</p><ul><li>如果一个 key 已经过期，而这个 key 又仍然保留在数据库中，那么只要这个过期 key 一直没有被访问，它所占用的内存就不会释放，造成了一定的内存空间浪费。所以，惰性删除策略对内存不友好。</li></ul><h2 id="定期删除" tabindex="-1"><a class="header-anchor" href="#定期删除" aria-hidden="true">#</a> 定期删除</h2><p>定期删除策略的做法：<strong>每隔一段时间「随机」从数据库中取出一定数量的 key 进行检查，并删除其中的过期 key。</strong></p><p><em>1、这个间隔检查的时间是多长呢？</em></p><p>在 Redis 中，默认每秒进行 10 次过期检查一次数据库，此配置可通过 Redis 的配置文件 redis.conf 进行配置，配置键为 hz 它的默认值是 hz 10。</p><p>特别强调下，每次检查数据库并不是遍历过期字典中的所有 key，而是从数据库中随机抽取一定数量的 key 进行过期检查。</p><p><em>2、随机抽查的数量是多少呢？</em></p><p>我查了下源码，定期删除的实现在 expire.c 文件下的 <code>activeExpireCycle</code> 函数中，其中随机抽查的数量由 <code>ACTIVE_EXPIRE_CYCLE_LOOKUPS_PER_LOOP</code> 定义的，它是写死在代码中的，数值是 20。</p><p>定期删除的流程：</p><ol><li>从过期字典中随机抽取 20 个 key；</li><li>检查这 20 个 key 是否过期，并删除已过期的 key；</li><li>如果本轮检查的已过期 key 的数量，超过 5 个（20/4），也就是「已过期 key 的数量」占比「随机抽取 key 的数量」大于 25%，则继续重复步骤 1；如果已过期的 key 比例小于 25%，则停止继续删除过期 key，然后等待下一轮再检查。</li></ol><p>那 Redis 为了保证定期删除不会出现循环过度，导致线程卡死现象，为此增加了定期删除循环流程的时间上限，默认不会超过 25ms。</p><img src="https://cdn.jsdelivr.net/gh/davidliuk/images@master/blog/定时删除流程-20230302090521384.jpg" alt="img" style="zoom:33%;"><p>定期删除策略的<strong>优点</strong>：</p><ul><li>通过限制删除操作执行的时长和频率，来减少删除操作对 CPU 的影响，同时也能删除一部分过期的数据减少了过期键对空间的无效占用。</li></ul><p>定期删除策略的<strong>缺点</strong>：</p><ul><li>内存清理方面没有定时删除效果好，同时没有惰性删除使用的系统资源少。</li><li>难以确定删除操作执行的时长和频率。如果执行的太频繁，定期删除策略变得和定时删除策略一样，对 CPU 不友好；如果执行的太少，那又和惰性删除一样了，过期 key 占用的内存不会及时得到释放。</li></ul>`,38),t=[i];function p(c,o){return l(),n("div",null,t)}const r=e(a,[["render",p],["__file","过期删除策略.html.vue"]]);export{r as default};
