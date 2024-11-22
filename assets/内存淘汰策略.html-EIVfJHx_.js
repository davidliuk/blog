import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as t,d as o,o as l}from"./app-B6s9NXTg.js";const s={};function a(r,e){return l(),t("div",null,e[0]||(e[0]=[o('<h1 id="内存淘汰策略" tabindex="-1"><a class="header-anchor" href="#内存淘汰策略"><span>内存淘汰策略</span></a></h1><p>在主线程进行的</p><p>前面说的过期删除策略，是删除已过期的 key，而当 Redis 的运行内存已经超过 Redis 设置的最大内存之后，则会使用内存淘汰策略删除符合条件的 key，以此来保障 Redis 高效的运行。</p><h3 id="设置最大内存" tabindex="-1"><a class="header-anchor" href="#设置最大内存"><span>设置最大内存</span></a></h3><p>在配置文件 redis.conf 中，可以通过参数 <code>maxmemory &lt;bytes&gt;</code> 来设定最大运行内存，只有在 Redis 的运行内存达到了我们设置的最大运行内存，才会触发内存淘汰策略。 不同位数的操作系统，maxmemory 的默认值是不同的：</p><ul><li>在 64 位操作系统中，maxmemory 的默认值是 0，表示没有内存大小限制，那么不管用户存放多少数据到 Redis 中，Redis 也不会对可用内存进行检查，直到 Redis 实例因内存不足而崩溃也无作为。</li><li>在 32 位操作系统中，maxmemory 的默认值是 3G，因为 32 位的机器最大只支持 4GB 的内存，而系统本身就需要一定的内存资源来支持运行，所以 32 位操作系统限制最大 3 GB 的可用内存是非常合理的，这样可以避免因为内存不足而导致 Redis 实例崩溃。</li></ul><h3 id="设置内存淘汰策略" tabindex="-1"><a class="header-anchor" href="#设置内存淘汰策略"><span>设置内存淘汰策略</span></a></h3><p>可以使用 <code>config get maxmemory-policy</code> 命令，来查看当前 Redis 的内存淘汰策略，命令如下：</p><p>设置内存淘汰策略有两种方法：</p><ul><li>方式一：通过“<code>config set maxmemory-policy &lt;策略&gt;</code>”命令设置。它的优点是设置之后立即生效，不需要重启 Redis 服务，缺点是重启 Redis 之后，设置就会失效。</li><li>方式二：通过修改 Redis 配置文件修改，设置“<code>maxmemory-policy &lt;策略&gt;</code>”，它的优点是重启 Redis 服务后配置不会丢失，缺点是必须重启 Redis 服务，设置才能生效。</li></ul><h3 id="内存淘汰策略-1" tabindex="-1"><a class="header-anchor" href="#内存淘汰策略-1"><span>内存淘汰策略</span></a></h3><h4 id="不进行数据淘汰的策略" tabindex="-1"><a class="header-anchor" href="#不进行数据淘汰的策略"><span>不进行数据淘汰的策略</span></a></h4><p><strong>noeviction</strong>（Redis3.0 之后，默认的内存淘汰策略） ：它表示当运行内存超过最大设置内存时，不淘汰任何数据，这时如果有新的数据写入，则会触发 OOM，但是如果没用数据写入的话，只是单纯的查询或者删除操作的话，还是可以正常工作。</p><h4 id="进行数据淘汰的策略" tabindex="-1"><a class="header-anchor" href="#进行数据淘汰的策略"><span>进行数据淘汰的策略</span></a></h4><p>可以细分为两类策略：</p><ul><li>在设置了过期时间的数据中进行淘汰</li><li>在所有数据范围内进行淘汰</li></ul><p>在设置了过期时间的数据中进行淘汰：</p><ul><li><strong>volatile-ttl</strong>：优先淘汰更早过期的键值。</li><li><strong>volatile-random</strong>：随机淘汰设置了过期时间的任意键值；</li><li><strong>volatile-lru</strong>（Redis3.0 之前，默认的内存淘汰策略）：淘汰所有设置了过期时间的键值中，最久未使用的键值；</li><li><strong>volatile-lfu</strong>（Redis 4.0 后新增的内存淘汰策略）：淘汰所有设置了过期时间的键值中，最少使用的键值；</li></ul><p>在所有数据范围内进行淘汰，除了 ttl 那种以为的三种策略均有：</p><ul><li><strong>allkeys-random</strong>：随机淘汰任意键值;</li><li><strong>allkeys-lru</strong>：淘汰整个键值中最久未使用的键值；</li><li><strong>allkeys-lfu</strong>（Redis 4.0 新增的淘汰策略）：淘汰整个键值中最少使用的键值。</li></ul><p>Redis 实现的是一种<strong>近似 LRU 算法</strong>，目的是为了更好的节约内存，它的<strong>实现方式是在 Redis 的对象结构体中添加一个额外的字段，用于记录此数据的最后一次访问时间</strong>。</p><p>当 Redis 进行内存淘汰时，会使用<strong>随机采样的方式来淘汰数据</strong>，它是随机取 5 个值（此值可配置），然后<strong>淘汰最久没有使用的那个</strong>。</p><p>Redis 实现的 LRU 算法的优点：</p><ul><li>不用为所有的数据维护一个大链表，节省了空间占用；</li><li>不用在每次数据访问时都移动链表项，提升了缓存的性能；</li></ul><p>但是 LRU 算法有一个问题，<strong>无法解决缓存污染问题</strong>，比如应用一次读取了大量的数据，而这些数据只会被读取这一次，那么这些数据会留存在 Redis 缓存中很长一段时间，造成缓存污染。（其实也可以使用 LRU-k，一般使用 LRU-2 就可以）</p><p>因此，在 Redis 4.0 之后引入了 LFU 算法来解决这个问题。</p><p>LFU 全称是 Least Frequently Used 翻译为<strong>最近最不常用</strong>，LFU 算法是根据数据访问次数来淘汰数据的，它的核心思想是“如果数据过去被访问多次，那么将来被访问的频率也更高”。</p><p>所以， LFU 算法会记录每个数据的访问次数。当一个数据被再次访问时，就会增加该数据的访问次数。这样就解决了偶尔被访问一次之后，数据留存在缓存中很长一段时间的问题，相比于 LRU 算法也更合理一些。</p>',28)]))}const p=i(s,[["render",a],["__file","内存淘汰策略.html.vue"]]),m=JSON.parse(`{"path":"/cs/database/redis/principal/memory-model/%E5%86%85%E5%AD%98%E6%B7%98%E6%B1%B0%E7%AD%96%E7%95%A5.html","title":"内存淘汰策略","lang":"en-US","frontmatter":{"description":"内存淘汰策略 在主线程进行的 前面说的过期删除策略，是删除已过期的 key，而当 Redis 的运行内存已经超过 Redis 设置的最大内存之后，则会使用内存淘汰策略删除符合条件的 key，以此来保障 Redis 高效的运行。 设置最大内存 在配置文件 redis.conf 中，可以通过参数 maxmemory <bytes> 来设定最大运行内存，只有...","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/cs/database/redis/principal/memory-model/%E5%86%85%E5%AD%98%E6%B7%98%E6%B1%B0%E7%AD%96%E7%95%A5.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"内存淘汰策略"}],["meta",{"property":"og:description","content":"内存淘汰策略 在主线程进行的 前面说的过期删除策略，是删除已过期的 key，而当 Redis 的运行内存已经超过 Redis 设置的最大内存之后，则会使用内存淘汰策略删除符合条件的 key，以此来保障 Redis 高效的运行。 设置最大内存 在配置文件 redis.conf 中，可以通过参数 maxmemory <bytes> 来设定最大运行内存，只有..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-05-08T07:35:02.000Z"}],["meta",{"property":"article:modified_time","content":"2024-05-08T07:35:02.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"内存淘汰策略\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-08T07:35:02.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[{"level":3,"title":"设置最大内存","slug":"设置最大内存","link":"#设置最大内存","children":[]},{"level":3,"title":"设置内存淘汰策略","slug":"设置内存淘汰策略","link":"#设置内存淘汰策略","children":[]},{"level":3,"title":"内存淘汰策略","slug":"内存淘汰策略-1","link":"#内存淘汰策略-1","children":[]}],"git":{"createdTime":1678024743000,"updatedTime":1715153702000,"contributors":[{"name":"davidliuk","email":"l729641074@163.com","commits":2},{"name":"刘大维","email":"davidliu@liudaweideMacBook-Pro.local","commits":1}]},"readingTime":{"minutes":4.2,"words":1259},"filePathRelative":"cs/database/redis/principal/memory-model/内存淘汰策略.md","localizedDate":"March 5, 2023","excerpt":"\\n<p>在主线程进行的</p>\\n<p>前面说的过期删除策略，是删除已过期的 key，而当 Redis 的运行内存已经超过 Redis 设置的最大内存之后，则会使用内存淘汰策略删除符合条件的 key，以此来保障 Redis 高效的运行。</p>\\n<h3>设置最大内存</h3>\\n<p>在配置文件 redis.conf 中，可以通过参数 <code>maxmemory &lt;bytes&gt;</code> 来设定最大运行内存，只有在 Redis 的运行内存达到了我们设置的最大运行内存，才会触发内存淘汰策略。 不同位数的操作系统，maxmemory 的默认值是不同的：</p>\\n<ul>\\n<li>在 64 位操作系统中，maxmemory 的默认值是 0，表示没有内存大小限制，那么不管用户存放多少数据到 Redis 中，Redis 也不会对可用内存进行检查，直到 Redis 实例因内存不足而崩溃也无作为。</li>\\n<li>在 32 位操作系统中，maxmemory 的默认值是 3G，因为 32 位的机器最大只支持 4GB 的内存，而系统本身就需要一定的内存资源来支持运行，所以 32 位操作系统限制最大 3 GB 的可用内存是非常合理的，这样可以避免因为内存不足而导致 Redis 实例崩溃。</li>\\n</ul>","autoDesc":true}`);export{p as comp,m as data};
