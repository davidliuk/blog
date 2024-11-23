import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as i,d as p,o as a}from"./app-CrF8c6p-.js";const n={};function o(c,e){return a(),i("div",null,e[0]||(e[0]=[p('<h1 id="签到" tabindex="-1"><a class="header-anchor" href="#签到"><span>签到</span></a></h1><h2 id="bitmap-用法" tabindex="-1"><a class="header-anchor" href="#bitmap-用法"><span>BitMap 用法</span></a></h2><p>必要性：签到如果存在数据库表中，耗费内存，数据库压力大</p><p>每一个 bit 位对应当月的每一天，形成映射变细。用 0 和 1 标示业务状态。这种思路就称为位图（BitMap），这样一个月只需要 31 位，2 个字节</p><p>布隆过滤器底层是 BitMap</p><p>Redis 中 String 底层就是 BitMap，因此最大上限是 512M，2^32 个 bit 位</p><p>默认就是 0，故只有要设为 1 的才需要 set</p><ul><li><p><code>SETBIT</code></p></li><li><p><code>GETBIT</code></p></li><li><p><code>BITCOUNT</code></p></li><li><p><code>BITFIELD</code></p></li></ul><p>后面的不太常用了</p><ul><li><p><code>BITFIELD_RO</code></p></li><li><p><code>BITOP</code></p></li><li><p><code>BITPOS</code></p></li></ul><p>Spring 里面，封装在 ValueOperations 里面了，和 string 封装在了一起</p>',11)]))}const l=t(n,[["render",o],["__file","sign.html.vue"]]),s=JSON.parse(`{"path":"/cs/database/redis/practice/design/sign.html","title":"签到","lang":"en-US","frontmatter":{"description":"签到 BitMap 用法 必要性：签到如果存在数据库表中，耗费内存，数据库压力大 每一个 bit 位对应当月的每一天，形成映射变细。用 0 和 1 标示业务状态。这种思路就称为位图（BitMap），这样一个月只需要 31 位，2 个字节 布隆过滤器底层是 BitMap Redis 中 String 底层就是 BitMap，因此最大上限是 512M，2^...","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/cs/database/redis/practice/design/sign.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"签到"}],["meta",{"property":"og:description","content":"签到 BitMap 用法 必要性：签到如果存在数据库表中，耗费内存，数据库压力大 每一个 bit 位对应当月的每一天，形成映射变细。用 0 和 1 标示业务状态。这种思路就称为位图（BitMap），这样一个月只需要 31 位，2 个字节 布隆过滤器底层是 BitMap Redis 中 String 底层就是 BitMap，因此最大上限是 512M，2^..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-03-29T11:46:59.000Z"}],["meta",{"property":"article:modified_time","content":"2023-03-29T11:46:59.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"签到\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-03-29T11:46:59.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[{"level":2,"title":"BitMap 用法","slug":"bitmap-用法","link":"#bitmap-用法","children":[]}],"git":{"createdTime":1680090419000,"updatedTime":1680090419000,"contributors":[{"name":"davidliuk","email":"l729641074@163.com","commits":1}]},"readingTime":{"minutes":0.54,"words":162},"filePathRelative":"cs/database/redis/practice/design/sign.md","localizedDate":"March 29, 2023","excerpt":"\\n<h2>BitMap 用法</h2>\\n<p>必要性：签到如果存在数据库表中，耗费内存，数据库压力大</p>\\n<p>每一个 bit 位对应当月的每一天，形成映射变细。用 0 和 1 标示业务状态。这种思路就称为位图（BitMap），这样一个月只需要 31 位，2 个字节</p>\\n<p>布隆过滤器底层是 BitMap</p>\\n<p>Redis 中 String 底层就是 BitMap，因此最大上限是 512M，2^32 个 bit 位</p>\\n<p>默认就是 0，故只有要设为 1 的才需要 set</p>\\n<ul>\\n<li>\\n<p><code>SETBIT</code></p>\\n</li>\\n<li>\\n<p><code>GETBIT</code></p>\\n</li>\\n<li>\\n<p><code>BITCOUNT</code></p>\\n</li>\\n<li>\\n<p><code>BITFIELD</code></p>\\n</li>\\n</ul>","autoDesc":true}`);export{l as comp,s as data};
