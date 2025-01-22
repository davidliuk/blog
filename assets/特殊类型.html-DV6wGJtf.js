import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,d as s,o as t}from"./app-ktFCNIob.js";const l={};function n(d,e){return t(),a("div",null,e[0]||(e[0]=[s('<h1 id="特殊类型" tabindex="-1"><a class="header-anchor" href="#特殊类型"><span>特殊类型</span></a></h1><h2 id="bitmap" tabindex="-1"><a class="header-anchor" href="#bitmap"><span>Bitmap</span></a></h2><p>底层 String 类型是会保存为二进制的字节数组</p><h3 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍"><span>介绍</span></a></h3><p>Bitmap 存储的是连续的二进制数字（0 和 1），通过 Bitmap, 只需要一个 bit 位来表示某个元素对应的值或者状态，key 就是对应元素本身 。我们知道 8 个 bit 可以组成一个 byte，所以 Bitmap 本身会极大的节省储存空间。</p><p>你可以将 Bitmap 看作是一个存储二进制数字（0 和 1）的数组，数组中每个元素的下标叫做 offset（偏移量）。</p><h3 id="命令" tabindex="-1"><a class="header-anchor" href="#命令"><span>命令</span></a></h3><ul><li><code>SETBIT</code></li><li><code>GETBIT</code></li><li><code>BITCOUNT</code></li><li><code>BITOP</code></li><li><code>BITPOS</code></li></ul><h3 id="原理" tabindex="-1"><a class="header-anchor" href="#原理"><span>原理</span></a></h3><p>Bitmap 本身是用 String 类型作为底层数据结构实现的一种统计二值状态的数据类型。</p><p>String 类型是会保存为二进制的字节数组，所以，Redis 就把字节数组的每个 bit 位利用起来，用来表示一个元素的二值状态，你可以把 Bitmap 看作是一个 bit 数组。</p><h3 id="应用" tabindex="-1"><a class="header-anchor" href="#应用"><span>应用</span></a></h3><p><strong>需要保存状态信息（0/1 即可表示）的场景</strong></p><p>举例 ：用户签到情况、活跃用户情况、用户行为统计（比如是否点赞过某个视频）。</p><h5 id="判断用户登陆态" tabindex="-1"><a class="header-anchor" href="#判断用户登陆态"><span>判断用户登陆态</span></a></h5><p>Bitmap 提供了 <code>GETBIT、SETBIT</code> 操作，通过一个偏移值 offset 对 bit 数组的 offset 位置的 bit 位进行读写操作，需要注意的是 offset 从 0 开始。</p><p>只需要一个 key = login_status 表示存储用户登陆状态集合数据， 将用户 ID 作为 offset，在线就设置为 1，下线设置 0。通过 <code>GETBIT</code>判断对应的用户是否在线。 5000 万用户只需要 6 MB 的空间。</p><h2 id="hyperloglog" tabindex="-1"><a class="header-anchor" href="#hyperloglog"><span>HyperLogLog</span></a></h2><p>HyperLogLog 的实现涉及到很多数学问题，太费脑子了，我也没有搞懂，如果你想了解一下，课下可以看看这个：<a href="https://en.wikipedia.org/wiki/HyperLogLog" target="_blank" rel="noopener noreferrer">HyperLogLog (opens new window)</a>。</p><h3 id="命令-1" tabindex="-1"><a class="header-anchor" href="#命令-1"><span>命令</span></a></h3><ul><li><code>PFADD</code></li><li><code>PFCOUNT</code></li><li><code>PFMERGE</code></li></ul><h3 id="应用-1" tabindex="-1"><a class="header-anchor" href="#应用-1"><span>应用</span></a></h3><p><strong>数量量巨大（百万、千万级别以上）的计数场景</strong></p><ul><li>举例 ：热门网站每日/每周/每月访问 ip 数统计、热门帖子 uv 统计、</li></ul><h2 id="geo" tabindex="-1"><a class="header-anchor" href="#geo"><span>GEO</span></a></h2><p>Geospatial index（地理空间索引，简称 GEO），基于 Sorted Set 实现。</p><p>Redis GEO 是 Redis 3.2 版本新增的数据类型，主要用于存储地理位置信息，并对存储的信息进行操作。</p><h3 id="原理-1" tabindex="-1"><a class="header-anchor" href="#原理-1"><span>原理</span></a></h3><p>GEO 底层数据结构直接使用了 Sorted Set 集合类型。</p><p>GEO 类型使用 GeoHash 编码方法实现了经纬度到 Sorted Set 中元素权重分数的转换，这其中的两个关键机制就是「对二维地图做区间划分」和「对区间进行编码」。一组经纬度落在某个区间后，就用区间的编码值来表示，并把编码值作为 Sorted Set 元素的权重分数。</p><p>这样一来，我们就可以把经纬度保存到 Sorted Set 中，利用 Sorted Set 提供的“按权重进行有序范围查找”的特性，实现 LBS 服务中频繁使用的“搜索附近”的需求。</p><h4 id="geohash" tabindex="-1"><a class="header-anchor" href="#geohash"><span>GEOHash</span></a></h4><p>Redis 的 GEOHash 是一种基于经纬度的地理位置索引算法，它将地球表面的经纬度坐标转换为一个字符串，这个字符串可以用于快速地计算两个地理位置之间的距离和排序。</p><p>GEOHash 算法的原理是将地球表面的经纬度坐标转换为一个二进制编码，然后将这个编码转换为一个字符串。具体来说，GEOHash 算法将地球表面的经度和纬度分别划分为若干个区间，然后将每个区间编码为一个二进制位，最终将所有二进制位拼接起来，得到一个二进制编码。这个二进制编码可以转换为一个字符串，这个字符串就是 GEOHash 算法的输出结果。</p><p>在 Redis 中，GEOHash 算法被用于实现地理位置索引，具体来说，Redis 将每个地理位置转换为一个 GEOHash 字符串，并将这个字符串作为键，将地理位置的信息作为值存储在哈希表中。这样，就可以通过 GEOHash 字符串快速地查找附近的地理位置，计算两个地理位置之间的距离等。</p><p>GEOHash 算法的优点是计算简单、存储空间小、查询速度快，但是也存在一些缺点，例如精度不高、距离计算不准确等。为了解决这些问题，可以采用一些改进的算法，例如 GeoHash+、GeoHash+、GeoMesa 等。</p><p>GEO 类型使用 GeoHash 编码方法实现了经纬度到 Sorted Set 中元素权重分数的转换，这其中的两个关键机制就是「对二维地图做区间划分」和「对区间进行编码」。一组经纬度落在某个区间后，就用区间的编码值来表示，并把编码值作为 Sorted Set 元素的权重分数。</p><p>当将空间划分为四块时候，编码的顺序分别是左下角00，左上角01，右下脚10，右上角11，也就是类似于Z的曲线。当我们递归的将各个块分解成更小的子块时可以标识更小的空间范围（如上图二中所示），如从0000开始到1111结束编码的顺序是自相似的（分形），每一个子快也形成Z曲线，这种类型的曲线被称为Peano空间填充曲线</p><p>Geohash 通过将节点数据编码转换成一维数据，（base 32 和 base 36） 会将落到网格中的二进制数据编码成字符串，再使用B树索引快速查找出需要的数据。</p><p><em><strong>2. 注意点</strong></em></p><p>我们已经知道现有的 GeoHash 算法使用的是 Peano 空间填充曲线，这种曲线<strong>会产生突变</strong>，造成了编码虽然相似但距离可能相差很大的问题，因此在查询附近餐馆时候，首先筛选GeoHash编码**「相似的POI(point of interest)点」**，然后进行实际距离计算。</p><p><em><strong>3. 使用心得</strong></em></p><p>GeoHash 只是空间索引的一种方式，特别适合点数据，而对**「线、面数据采用R树索引」**更有优势（可为什么需要空间索引）。</p><p>GeoHash值可以区分精度，位数越多，精度越高，表达的地理位置越精细；如一位的GeoHash值把地球划分为32个矩形，8位的geohash值把地球划分为32^8个小矩形</p><p>适合根据某个经纬度坐标position计算出GeoHash值，然后和数据库中精度更高的GeoHash值做前缀比较</p><h3 id="命令-2" tabindex="-1"><a class="header-anchor" href="#命令-2"><span>命令</span></a></h3><ul><li><code>GEOADD</code></li><li><code>GEOPOS</code></li><li><code>GEODIST</code></li><li><code>GEORADIUS</code></li></ul><p>Redis的GEO结构是一种用于存储地理位置信息的数据结构，它可以将经纬度坐标和其他相关信息存储在一个有序集合中。以下是一些常用的GEO指令及其用法：</p><ol><li><code>GEOADD</code>：将一个或多个成员添加到指定的GEO集合中。</li></ol><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>GEOADD {{key}} {{longitude}} {{latitude}} {{member}} [{{longitude}} {{latitude}} {{member}} ...]</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>示例：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>GEOADD cities 13.361389 38.115556 &quot;Rome&quot; 15.087269 37.502669 &quot;Athens&quot; -122.419416 37.774929 &quot;San Francisco&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ol start="2"><li><code>GEODIST</code>：计算两个成员之间的距离。</li></ol><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>GEODIST {{key}} {{member1}} {{member2}} [m|km|ft|mi]</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>示例：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>GEODIST cities Rome Athens km</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ol start="3"><li><code>GEOHASH</code>：获取一个或多个成员的geohash值。</li></ol><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>GEOHASH {{key}} {{member}} [{{member}} ...]</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>示例：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>GEOHASH cities Rome Athens</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ol start="4"><li><code>GEOPOS</code>：获取一个或多个成员的经纬度坐标。</li></ol><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>GEOPOS {{key}} {{member}} [{{member}} ...]</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>示例：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>GEOPOS cities Rome Athens</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ol start="5"><li><code>GEORADIUS</code>：获取指定坐标范围内的成员。</li></ol><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>GEORADIUS {{key}} {{longitude}} {{latitude}} {{radius}} [m|km|ft|mi] [WITHCOORD] [WITHDIST] [ASC|DESC] [COUNT {{count}}]</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>示例：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>GEORADIUS cities 15.087269 37.502669 200 km WITHDIST</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ol start="6"><li><code>GEORADIUSBYMEMBER</code>：获取指定成员范围内的成员。</li></ol><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>GEORADIUSBYMEMBER {{key}} {{member}} {{radius}} [m|km|ft|mi] [WITHCOORD] [WITHDIST] [ASC|DESC] [COUNT {{count}}]</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>示例：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>GEORADIUSBYMEMBER cities Rome 200 km WITHCOORD</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>以上是一些常用的GEO指令及其用法，更多指令可以参考Redis官方文档。</p><h3 id="应用-2" tabindex="-1"><a class="header-anchor" href="#应用-2"><span>应用</span></a></h3><p><strong>需要管理使用地理空间数据的场景</strong></p><ul><li>举例：附近的人，滴滴叫车。</li><li>在日常生活中，我们越来越依赖搜索“附近的餐馆”、在打车软件上叫车，这些都离不开基于位置信息服务（Location-Based Service，LBS）的应用。LBS 应用访问的数据是和人或物关联的一组经纬度信息，而且要能查询相邻的经纬度范围，GEO 就非常适合应用在 LBS 服务的场景中。</li></ul><h2 id="stream" tabindex="-1"><a class="header-anchor" href="#stream"><span>Stream</span></a></h2><p>Redis Stream 是 Redis 5.0 版本新增加的数据类型，Redis 专门为消息队列设计的数据类型。</p><p>在 Redis 5.0 Stream 没出来之前，消息队列的实现方式都有着各自的缺陷，例如：</p><ul><li>发布订阅模式，不能持久化也就无法可靠的保存消息，并且对于离线重连的客户端不能读取历史消息的缺陷；</li><li>List 实现消息队列的方式不能重复消费，一个消息消费完就会被删除，而且生产者需要自行实现全局唯一 ID。</li></ul><p>基于以上问题，Redis 5.0 便推出了 Stream 类型也是此版本最重要的功能，用于完美地实现消息队列，它支持消息的持久化、支持自动生成全局唯一 ID、支持 ack 确认消息的模式、支持消费组模式等，让消息队列更加的稳定和可靠。</p><p>底层使用 listpack 实现</p>',82)]))}const h=i(l,[["render",n],["__file","特殊类型.html.vue"]]),p=JSON.parse(`{"path":"/cs/database/redis/principal/data-structure/%E7%89%B9%E6%AE%8A%E7%B1%BB%E5%9E%8B.html","title":"特殊类型","lang":"en-US","frontmatter":{"description":"特殊类型 Bitmap 底层 String 类型是会保存为二进制的字节数组 介绍 Bitmap 存储的是连续的二进制数字（0 和 1），通过 Bitmap, 只需要一个 bit 位来表示某个元素对应的值或者状态，key 就是对应元素本身 。我们知道 8 个 bit 可以组成一个 byte，所以 Bitmap 本身会极大的节省储存空间。 你可以将 Bit...","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/cs/database/redis/principal/data-structure/%E7%89%B9%E6%AE%8A%E7%B1%BB%E5%9E%8B.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"特殊类型"}],["meta",{"property":"og:description","content":"特殊类型 Bitmap 底层 String 类型是会保存为二进制的字节数组 介绍 Bitmap 存储的是连续的二进制数字（0 和 1），通过 Bitmap, 只需要一个 bit 位来表示某个元素对应的值或者状态，key 就是对应元素本身 。我们知道 8 个 bit 可以组成一个 byte，所以 Bitmap 本身会极大的节省储存空间。 你可以将 Bit..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-06-27T01:21:47.000Z"}],["meta",{"property":"article:modified_time","content":"2024-06-27T01:21:47.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"特殊类型\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-06-27T01:21:47.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[{"level":2,"title":"Bitmap","slug":"bitmap","link":"#bitmap","children":[{"level":3,"title":"介绍","slug":"介绍","link":"#介绍","children":[]},{"level":3,"title":"命令","slug":"命令","link":"#命令","children":[]},{"level":3,"title":"原理","slug":"原理","link":"#原理","children":[]},{"level":3,"title":"应用","slug":"应用","link":"#应用","children":[]}]},{"level":2,"title":"HyperLogLog","slug":"hyperloglog","link":"#hyperloglog","children":[{"level":3,"title":"命令","slug":"命令-1","link":"#命令-1","children":[]},{"level":3,"title":"应用","slug":"应用-1","link":"#应用-1","children":[]}]},{"level":2,"title":"GEO","slug":"geo","link":"#geo","children":[{"level":3,"title":"原理","slug":"原理-1","link":"#原理-1","children":[]},{"level":3,"title":"命令","slug":"命令-2","link":"#命令-2","children":[]},{"level":3,"title":"应用","slug":"应用-2","link":"#应用-2","children":[]}]},{"level":2,"title":"Stream","slug":"stream","link":"#stream","children":[]}],"git":{"createdTime":1677504602000,"updatedTime":1719451307000,"contributors":[{"name":"刘大维","email":"davidliu@liudaweideMacBook-Pro.local","commits":5},{"name":"davidliuk","email":"l729641074@163.com","commits":2}]},"readingTime":{"minutes":7.72,"words":2315},"filePathRelative":"cs/database/redis/principal/data-structure/特殊类型.md","localizedDate":"February 27, 2023","excerpt":"\\n<h2>Bitmap</h2>\\n<p>底层 String 类型是会保存为二进制的字节数组</p>\\n<h3>介绍</h3>\\n<p>Bitmap 存储的是连续的二进制数字（0 和 1），通过 Bitmap, 只需要一个 bit 位来表示某个元素对应的值或者状态，key 就是对应元素本身 。我们知道 8 个 bit 可以组成一个 byte，所以 Bitmap 本身会极大的节省储存空间。</p>\\n<p>你可以将 Bitmap 看作是一个存储二进制数字（0 和 1）的数组，数组中每个元素的下标叫做 offset（偏移量）。</p>\\n<h3>命令</h3>\\n<ul>\\n<li><code>SETBIT</code></li>\\n<li><code>GETBIT</code></li>\\n<li><code>BITCOUNT</code></li>\\n<li><code>BITOP</code></li>\\n<li><code>BITPOS</code></li>\\n</ul>","autoDesc":true}`);export{h as comp,p as data};
