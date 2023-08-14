const t=JSON.parse(`{"key":"v-f40c5306","path":"/cs/database/redis/practice/design/sign.html","title":"签到","lang":"en-US","frontmatter":{"description":"签到 BitMap 用法 必要性：签到如果存在数据库表中，耗费内存，数据库压力大 每一个 bit 位对应当月的每一天，形成映射变细。用 0 和 1 标示业务状态。这种思路就称为位图（BitMap），这样一个月只需要 31 位，2 个字节 布隆过滤器底层是 BitMap Redis 中 String 底层就是 BitMap，因此最大上限是 512M，2^32 个 bit 位 默认就是 0，故只有要设为 1 的才需要 set SETBIT GETBIT BITCOUNT BITFIELD","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/cs/database/redis/practice/design/sign.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"签到"}],["meta",{"property":"og:description","content":"签到 BitMap 用法 必要性：签到如果存在数据库表中，耗费内存，数据库压力大 每一个 bit 位对应当月的每一天，形成映射变细。用 0 和 1 标示业务状态。这种思路就称为位图（BitMap），这样一个月只需要 31 位，2 个字节 布隆过滤器底层是 BitMap Redis 中 String 底层就是 BitMap，因此最大上限是 512M，2^32 个 bit 位 默认就是 0，故只有要设为 1 的才需要 set SETBIT GETBIT BITCOUNT BITFIELD"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-03-29T11:46:59.000Z"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2023-03-29T11:46:59.000Z"}],["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://davidliuk.github.io/blog/blog/zh/cs/database/redis/practice/design/sign.html"}]]},"headers":[{"level":2,"title":"BitMap 用法","slug":"bitmap-用法","link":"#bitmap-用法","children":[]}],"git":{"createdTime":1680090419000,"updatedTime":1680090419000,"contributors":[{"name":"davidliuk","email":"l729641074@163.com","commits":1}]},"readingTime":{"minutes":0.54,"words":162},"localizedDate":"March 29, 2023","filePathRelative":"cs/database/redis/practice/design/sign.md","excerpt":"<h1> 签到</h1>\\n<h2> BitMap 用法</h2>\\n<p>必要性：签到如果存在数据库表中，耗费内存，数据库压力大</p>\\n<p>每一个 bit 位对应当月的每一天，形成映射变细。用 0 和 1 标示业务状态。这种思路就称为位图（BitMap），这样一个月只需要 31 位，2 个字节</p>\\n<p>布隆过滤器底层是 BitMap</p>\\n<p>Redis 中 String 底层就是 BitMap，因此最大上限是 512M，2^32 个 bit 位</p>\\n<p>默认就是 0，故只有要设为 1 的才需要 set</p>\\n<ul>\\n<li>\\n<p><code>SETBIT</code></p>\\n</li>\\n<li>\\n<p><code>GETBIT</code></p>\\n</li>\\n<li>\\n<p><code>BITCOUNT</code></p>\\n</li>\\n<li>\\n<p><code>BITFIELD</code></p>\\n</li>\\n</ul>","autoDesc":true}`);export{t as data};