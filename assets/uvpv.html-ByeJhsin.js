import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as i,b as a,o}from"./app-B3ooTv29.js";const l={};function r(n,e){return o(),i("div",null,e[0]||(e[0]=[a('<h1 id="uv" tabindex="-1"><a class="header-anchor" href="#uv"><span>UV</span></a></h1><h3 id="uv-pv-概念" tabindex="-1"><a class="header-anchor" href="#uv-pv-概念"><span>UV/PV 概念</span></a></h3><ul><li>UV：全称 Unique Visitor,也叫独立访客量，是指通过互联网访问、浏览这个网页的自然人。1 天内同一个用户多次访问该网站，只记录 1 次。</li><li>PV：全称 Page View,也叫页面访问量或点击量，用户每访问网站的一个页面，记录 1 次 PV,用户多次打开页面，则记录多次 PV。往往用来衡量网站的流量。</li></ul><h2 id="hyperloglog" tabindex="-1"><a class="header-anchor" href="#hyperloglog"><span>HyperLogLog</span></a></h2><p>基于 LogLog 派生的概率算法，用于确定非常大的集合的基数，而不需要存储其所有值。</p><p>相同元素进去永远只有一次</p><p>单个 HLL 的内存永远小于 16kb，误差 0.81%，1w 人误差也就 80 人，不影响</p><h3 id="操作" tabindex="-1"><a class="header-anchor" href="#操作"><span>操作</span></a></h3><ul><li><p><code>PFADD</code>，加入一个元素（重复则不会改变原有内容）</p></li><li><p><code>PFCOUNT</code>，返回目前所有的元素数量</p></li><li><p><code>PFMERGE</code>，可以把多个 HLL 合并，如想计算一个月/年的 UV，可以合并这个月每天的 HLL，而且非常节省内存</p></li></ul><h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用"><span>使用</span></a></h2>',10)]))}const s=t(l,[["render",r],["__file","uvpv.html.vue"]]),d=JSON.parse(`{"path":"/cs/database/redis/practice/design/uvpv.html","title":"UV","lang":"en-US","frontmatter":{"description":"UV UV/PV 概念 UV：全称 Unique Visitor,也叫独立访客量，是指通过互联网访问、浏览这个网页的自然人。1 天内同一个用户多次访问该网站，只记录 1 次。 PV：全称 Page View,也叫页面访问量或点击量，用户每访问网站的一个页面，记录 1 次 PV,用户多次打开页面，则记录多次 PV。往往用来衡量网站的流量。 HyperLo...","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/cs/database/redis/practice/design/uvpv.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"UV"}],["meta",{"property":"og:description","content":"UV UV/PV 概念 UV：全称 Unique Visitor,也叫独立访客量，是指通过互联网访问、浏览这个网页的自然人。1 天内同一个用户多次访问该网站，只记录 1 次。 PV：全称 Page View,也叫页面访问量或点击量，用户每访问网站的一个页面，记录 1 次 PV,用户多次打开页面，则记录多次 PV。往往用来衡量网站的流量。 HyperLo..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-03-29T11:46:59.000Z"}],["meta",{"property":"article:modified_time","content":"2023-03-29T11:46:59.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"UV\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-03-29T11:46:59.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[{"level":3,"title":"UV/PV 概念","slug":"uv-pv-概念","link":"#uv-pv-概念","children":[]},{"level":2,"title":"HyperLogLog","slug":"hyperloglog","link":"#hyperloglog","children":[{"level":3,"title":"操作","slug":"操作","link":"#操作","children":[]}]},{"level":2,"title":"使用","slug":"使用","link":"#使用","children":[]}],"git":{"createdTime":1680090419000,"updatedTime":1680090419000,"contributors":[{"name":"davidliuk","email":"l729641074@163.com","commits":1}]},"readingTime":{"minutes":0.86,"words":257},"filePathRelative":"cs/database/redis/practice/design/uvpv.md","localizedDate":"March 29, 2023","excerpt":"\\n<h3>UV/PV 概念</h3>\\n<ul>\\n<li>UV：全称 Unique Visitor,也叫独立访客量，是指通过互联网访问、浏览这个网页的自然人。1 天内同一个用户多次访问该网站，只记录 1 次。</li>\\n<li>PV：全称 Page View,也叫页面访问量或点击量，用户每访问网站的一个页面，记录 1 次 PV,用户多次打开页面，则记录多次 PV。往往用来衡量网站的流量。</li>\\n</ul>\\n<h2>HyperLogLog</h2>\\n<p>基于 LogLog 派生的概率算法，用于确定非常大的集合的基数，而不需要存储其所有值。</p>\\n<p>相同元素进去永远只有一次</p>\\n<p>单个 HLL 的内存永远小于 16kb，误差 0.81%，1w 人误差也就 80 人，不影响</p>","autoDesc":true}`);export{s as comp,d as data};
