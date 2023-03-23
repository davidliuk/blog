const e=JSON.parse(`{"key":"v-70059fca","path":"/cs/database/mysql/index/2.%20%E7%B4%A2%E5%BC%95%E5%88%86%E7%B1%BB.html","title":"索引分类","lang":"en-US","frontmatter":{"description":"索引分类 按「数据结构」分类： B+tree索引、Hash索引、Full-text索引。 BTree 索引：MySQL 里默认和最常用的索引类型。只有叶子节点存储 value，非叶子节点只有指针和 key。存储引擎 MyISAM 和 InnoDB 实现 BTree 索引都是使用 B+Tree，但二者实现方式不一样（前面已经介绍了）。 哈希索引：类似键值对的形式，一次即可定位。 RTree 索引：一般不会使用，仅支持 geometry 数据类型，优势在于范围查找，效率较低，通常使用搜索引擎如 ElasticSearch 代替。 全文索引：对文本的内容进行分词，进行搜索。目前只有 CHAR、VARCHAR ，TEXT 列上可以创建全文索引。一般不会使用，效率较低，通常使用搜索引擎如 ElasticSearch 代替。","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/cs/database/mysql/index/2.%20%E7%B4%A2%E5%BC%95%E5%88%86%E7%B1%BB.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"索引分类"}],["meta",{"property":"og:description","content":"索引分类 按「数据结构」分类： B+tree索引、Hash索引、Full-text索引。 BTree 索引：MySQL 里默认和最常用的索引类型。只有叶子节点存储 value，非叶子节点只有指针和 key。存储引擎 MyISAM 和 InnoDB 实现 BTree 索引都是使用 B+Tree，但二者实现方式不一样（前面已经介绍了）。 哈希索引：类似键值对的形式，一次即可定位。 RTree 索引：一般不会使用，仅支持 geometry 数据类型，优势在于范围查找，效率较低，通常使用搜索引擎如 ElasticSearch 代替。 全文索引：对文本的内容进行分词，进行搜索。目前只有 CHAR、VARCHAR ，TEXT 列上可以创建全文索引。一般不会使用，效率较低，通常使用搜索引擎如 ElasticSearch 代替。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-03-23T13:33:44.000Z"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2023-03-23T13:33:44.000Z"}],["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://davidliuk.github.io/blog/blog/zh/cs/database/mysql/index/2.%20%E7%B4%A2%E5%BC%95%E5%88%86%E7%B1%BB.html"}]]},"headers":[{"level":3,"title":"按「数据结构」分类：","slug":"按「数据结构」分类","link":"#按「数据结构」分类","children":[]},{"level":3,"title":"按「字段特性」分类：","slug":"按「字段特性」分类","link":"#按「字段特性」分类","children":[]},{"level":3,"title":"按「物理存储」分类：","slug":"按「物理存储」分类","link":"#按「物理存储」分类","children":[]}],"git":{"createdTime":1679321449000,"updatedTime":1679578424000,"contributors":[{"name":"davidliuk","email":"l729641074@163.com","commits":2}]},"readingTime":{"minutes":1.3,"words":391},"localizedDate":"March 20, 2023","filePathRelative":"cs/database/mysql/index/2. 索引分类.md","excerpt":"<h1> 索引分类</h1>\\n<h3> 按「数据结构」分类：</h3>\\n<p><strong>B+tree索引、Hash索引、Full-text索引</strong>。</p>\\n<ul>\\n<li>BTree 索引：MySQL 里默认和最常用的索引类型。只有叶子节点存储 value，非叶子节点只有指针和 key。存储引擎 MyISAM 和 InnoDB 实现 BTree 索引都是使用 B+Tree，但二者实现方式不一样（前面已经介绍了）。</li>\\n<li>哈希索引：类似键值对的形式，一次即可定位。</li>\\n<li>RTree 索引：一般不会使用，仅支持 geometry 数据类型，优势在于范围查找，效率较低，通常使用搜索引擎如 ElasticSearch 代替。</li>\\n<li>全文索引：对文本的内容进行分词，进行搜索。目前只有 <code>CHAR</code>、<code>VARCHAR</code> ，<code>TEXT</code> 列上可以创建全文索引。一般不会使用，效率较低，通常使用搜索引擎如 ElasticSearch 代替。</li>\\n</ul>","autoDesc":true}`);export{e as data};
