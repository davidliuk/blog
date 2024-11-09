import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,b as l,o as i}from"./app-B3ooTv29.js";const n={};function o(r,e){return i(),a("div",null,e[0]||(e[0]=[l('<h1 id="索引分类" tabindex="-1"><a class="header-anchor" href="#索引分类"><span>索引分类</span></a></h1><h3 id="按「数据结构」分类" tabindex="-1"><a class="header-anchor" href="#按「数据结构」分类"><span>按「数据结构」分类</span></a></h3><p><strong>B+tree 索引、Hash 索引、Full-text 索引</strong>。</p><ul><li>BTree 索引：MySQL 里默认和最常用的索引类型。只有叶子节点存储 value，非叶子节点只有指针和 key。存储引擎 MyISAM 和 InnoDB 实现 BTree 索引都是使用 B+Tree，但二者实现方式不一样（前面已经介绍了）。</li><li>Hash 哈希索引：类似键值对的形式，一次即可定位。一般使用 Redis代替</li><li>RTree 索引：一般不会使用，仅支持 geometry 数据类型，优势在于范围查找，效率较低，通常使用搜索引擎如 ElasticSearch 代替。</li><li>Full-Text 全文索引：对文本的内容进行分词，进行搜索。目前只有 <code>CHAR</code>、<code>VARCHAR</code> ，<code>TEXT</code> 列上可以创建全文索引。一般不会使用，效率较低，通常使用搜索引擎如 ElasticSearch 代替。</li></ul><h3 id="按「应用维度」分类" tabindex="-1"><a class="header-anchor" href="#按「应用维度」分类"><span>按「应用维度」分类</span></a></h3><p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/截屏2022-07-28 21.28.51.png" alt="截屏2022-07-28 21.28.51" loading="lazy"></p><ul><li>主键索引：加速查询 + 列值唯一（不可以有 NULL）+ 表中只有一个。</li><li>普通索引：仅加速查询。</li><li>唯一索引：加速查询 + 列值唯一（可以有 NULL）。</li><li>覆盖索引：一个索引包含（或者说覆盖）所有需要查询的字段的值。</li><li>联合索引：多列值组成一个索引，专门用于组合搜索，其效率大于索引合并。</li><li>全文索引：对文本的内容进行分词，进行搜索。目前只有 CHAR、VARCHAR ，TEXT 列上可以创建全文索引。一般不会使用，效率较低，通常使用搜索引擎如 ElasticSearch 代替。</li></ul><h3 id="按「物理存储」分类" tabindex="-1"><a class="header-anchor" href="#按「物理存储」分类"><span>按「物理存储」分类</span></a></h3><p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/截屏2022-07-28 21.31.43.png" alt="截屏2022-07-28 21.31.43" loading="lazy"></p><ul><li><p>聚集索引：聚集索引叶子结点存一行的数据（行数据）</p><ul><li>InnoDB 中主键索引就是聚集索引（MyISAM 中没有聚簇索引）</li><li>如果不存在主键，则使用第一个 UNIQUE 索引作为聚集索引</li><li>如果没有 UNIQUE，就隐藏生成一个 row id 作为聚集索引（隐藏字段）</li></ul></li><li><p>非聚簇索引：只存 id，查到 id 后到聚集索引中”回表查询“</p><ul><li>又称辅助索引、非聚集索引、二级索引</li></ul></li></ul><p>根据聚集索引查的效率最高，因为无需“回表”操作</p>',11)]))}const d=t(n,[["render",o],["__file","2. 索引分类.html.vue"]]),p=JSON.parse(`{"path":"/cs/database/mysql/index/2.%20%E7%B4%A2%E5%BC%95%E5%88%86%E7%B1%BB.html","title":"索引分类","lang":"en-US","frontmatter":{"description":"索引分类 按「数据结构」分类 B+tree 索引、Hash 索引、Full-text 索引。 BTree 索引：MySQL 里默认和最常用的索引类型。只有叶子节点存储 value，非叶子节点只有指针和 key。存储引擎 MyISAM 和 InnoDB 实现 BTree 索引都是使用 B+Tree，但二者实现方式不一样（前面已经介绍了）。 Hash 哈希...","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/cs/database/mysql/index/2.%20%E7%B4%A2%E5%BC%95%E5%88%86%E7%B1%BB.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"索引分类"}],["meta",{"property":"og:description","content":"索引分类 按「数据结构」分类 B+tree 索引、Hash 索引、Full-text 索引。 BTree 索引：MySQL 里默认和最常用的索引类型。只有叶子节点存储 value，非叶子节点只有指针和 key。存储引擎 MyISAM 和 InnoDB 实现 BTree 索引都是使用 B+Tree，但二者实现方式不一样（前面已经介绍了）。 Hash 哈希..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/%E6%88%AA%E5%B1%8F2022-07-28%2021.28.51.png"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-05-08T07:35:02.000Z"}],["meta",{"property":"article:modified_time","content":"2024-05-08T07:35:02.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"索引分类\\",\\"image\\":[\\"https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/%E6%88%AA%E5%B1%8F2022-07-28%2021.28.51.png\\",\\"https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/%E6%88%AA%E5%B1%8F2022-07-28%2021.31.43.png\\"],\\"dateModified\\":\\"2024-05-08T07:35:02.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[{"level":3,"title":"按「数据结构」分类","slug":"按「数据结构」分类","link":"#按「数据结构」分类","children":[]},{"level":3,"title":"按「应用维度」分类","slug":"按「应用维度」分类","link":"#按「应用维度」分类","children":[]},{"level":3,"title":"按「物理存储」分类","slug":"按「物理存储」分类","link":"#按「物理存储」分类","children":[]}],"git":{"createdTime":1672746435000,"updatedTime":1715153702000,"contributors":[{"name":"davidliuk","email":"l729641074@163.com","commits":3},{"name":"刘大维","email":"davidliu@liudaweideMacBook-Pro.local","commits":3}]},"readingTime":{"minutes":1.93,"words":578},"filePathRelative":"cs/database/mysql/index/2. 索引分类.md","localizedDate":"January 3, 2023","excerpt":"\\n<h3>按「数据结构」分类</h3>\\n<p><strong>B+tree 索引、Hash 索引、Full-text 索引</strong>。</p>\\n<ul>\\n<li>BTree 索引：MySQL 里默认和最常用的索引类型。只有叶子节点存储 value，非叶子节点只有指针和 key。存储引擎 MyISAM 和 InnoDB 实现 BTree 索引都是使用 B+Tree，但二者实现方式不一样（前面已经介绍了）。</li>\\n<li>Hash 哈希索引：类似键值对的形式，一次即可定位。一般使用 Redis代替</li>\\n<li>RTree 索引：一般不会使用，仅支持 geometry 数据类型，优势在于范围查找，效率较低，通常使用搜索引擎如 ElasticSearch 代替。</li>\\n<li>Full-Text 全文索引：对文本的内容进行分词，进行搜索。目前只有 <code>CHAR</code>、<code>VARCHAR</code> ，<code>TEXT</code> 列上可以创建全文索引。一般不会使用，效率较低，通常使用搜索引擎如 ElasticSearch 代替。</li>\\n</ul>","autoDesc":true}`);export{d as comp,p as data};
