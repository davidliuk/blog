import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,d as i,o as n}from"./app-DIqbhby7.js";const r={};function l(o,e){return n(),a("div",null,e[0]||(e[0]=[i('<h1 id="点赞排行" tabindex="-1"><a class="header-anchor" href="#点赞排行"><span>点赞排行</span></a></h1><h2 id="点赞" tabindex="-1"><a class="header-anchor" href="#点赞"><span>点赞</span></a></h2><h3 id="一人一赞" tabindex="-1"><a class="header-anchor" href="#一人一赞"><span>一人一赞</span></a></h3><p>方案一：</p><ul><li>数据库建立联系集，点赞和取消都在数据库做 crud</li><li>缺点：太重</li></ul><p>方案二：</p><ul><li>Redis Set：集合并且唯一</li></ul><h3 id="点赞排行榜" tabindex="-1"><a class="header-anchor" href="#点赞排行榜"><span>点赞排行榜</span></a></h3><p>按照点赞的时间排序，展示点赞排行的前五名</p><p>SortedSet，</p><p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/截屏2023-02-10 23.06.43.png" alt="截屏2023-02-10 23.06.43" loading="lazy"></p><p>注意拿到 id 到数据库查询的时候，sql 写 in 的时候，他的结果又是无序的了，需要类似<code>order by field(id, 5, 2, 3)</code>这样写</p>',12)]))}const d=t(r,[["render",l],["__file","rate.html.vue"]]),s=JSON.parse(`{"path":"/cs/database/redis/practice/design/rate.html","title":"点赞排行","lang":"en-US","frontmatter":{"description":"点赞排行 点赞 一人一赞 方案一： 数据库建立联系集，点赞和取消都在数据库做 crud 缺点：太重 方案二： Redis Set：集合并且唯一 点赞排行榜 按照点赞的时间排序，展示点赞排行的前五名 SortedSet， 截屏2023-02-10 23.06.43 注意拿到 id 到数据库查询的时候，sql 写 in 的时候，他的结果又是无序的了，需要类...","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/cs/database/redis/practice/design/rate.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"点赞排行"}],["meta",{"property":"og:description","content":"点赞排行 点赞 一人一赞 方案一： 数据库建立联系集，点赞和取消都在数据库做 crud 缺点：太重 方案二： Redis Set：集合并且唯一 点赞排行榜 按照点赞的时间排序，展示点赞排行的前五名 SortedSet， 截屏2023-02-10 23.06.43 注意拿到 id 到数据库查询的时候，sql 写 in 的时候，他的结果又是无序的了，需要类..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/%E6%88%AA%E5%B1%8F2023-02-10%2023.06.43.png"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-03-29T11:46:59.000Z"}],["meta",{"property":"article:modified_time","content":"2023-03-29T11:46:59.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"点赞排行\\",\\"image\\":[\\"https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/%E6%88%AA%E5%B1%8F2023-02-10%2023.06.43.png\\"],\\"dateModified\\":\\"2023-03-29T11:46:59.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[{"level":2,"title":"点赞","slug":"点赞","link":"#点赞","children":[{"level":3,"title":"一人一赞","slug":"一人一赞","link":"#一人一赞","children":[]},{"level":3,"title":"点赞排行榜","slug":"点赞排行榜","link":"#点赞排行榜","children":[]}]}],"git":{"createdTime":1677504602000,"updatedTime":1680090419000,"contributors":[{"name":"davidliuk","email":"l729641074@163.com","commits":1}]},"readingTime":{"minutes":0.46,"words":137},"filePathRelative":"cs/database/redis/practice/design/rate.md","localizedDate":"February 27, 2023","excerpt":"\\n<h2>点赞</h2>\\n<h3>一人一赞</h3>\\n<p>方案一：</p>\\n<ul>\\n<li>数据库建立联系集，点赞和取消都在数据库做 crud</li>\\n<li>缺点：太重</li>\\n</ul>\\n<p>方案二：</p>\\n<ul>\\n<li>Redis Set：集合并且唯一</li>\\n</ul>\\n<h3>点赞排行榜</h3>\\n<p>按照点赞的时间排序，展示点赞排行的前五名</p>\\n<p>SortedSet，</p>\\n<p><img src=\\"https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/截屏2023-02-10 23.06.43.png\\" alt=\\"截屏2023-02-10 23.06.43\\" loading=\\"lazy\\"></p>","autoDesc":true}`);export{d as comp,s as data};
