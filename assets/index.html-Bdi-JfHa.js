import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as n,d as a,o}from"./app-CrF8c6p-.js";const l={};function i(r,e){return o(),n("div",null,e[0]||(e[0]=[a('<h1 id="索引" tabindex="-1"><a class="header-anchor" href="#索引"><span>索引</span></a></h1><p>索引：<strong>用于快速查询和检索数据的数据结构，其本质可以看成是一种排序好的数据结构。</strong></p><h3 id="b-树-b-树" tabindex="-1"><a class="header-anchor" href="#b-树-b-树"><span>B 树 &amp; B+树</span></a></h3><p>B 树也称 B-树,全称为 <strong>多路平衡查找树</strong> ，B+ 树是 B 树的一种变体。B 树和 B+树中的 B 是 <code>Balanced</code> （平衡）的意思。</p><p>目前大部分数据库系统及文件系统都采用 B-Tree 或其变种 B+Tree 作为索引结构。</p><p><strong>B 树&amp; B+树两者有何异同呢？</strong></p><ul><li>B 树的所有节点既存放键(key) 也存放 数据(data)，而 B+树只有叶子节点存放 key 和 data，其他内节点只存放 key。</li><li>B 树的叶子节点都是独立的;B+树的叶子节点有一条引用链指向与它相邻的叶子节点。</li><li>B 树的检索的过程相当于对范围内的每个节点的关键字做二分查找，可能还没有到达叶子节点，检索就结束了。而 B+树的检索效率就很稳定了，任何查找都是从根节点到叶子节点的过程，叶子节点的顺序检索很明显。</li></ul><p>在 MySQL 中，MyISAM 引擎和 InnoDB 引擎都是使用 B+Tree 作为索引结构，但是，两者的实现方式不太一样。（下面的内容整理自《Java 工程师修炼之道》）</p><h2 id="索引类型" tabindex="-1"><a class="header-anchor" href="#索引类型"><span>索引类型</span></a></h2><h3 id="按照数据结构角度划分" tabindex="-1"><a class="header-anchor" href="#按照数据结构角度划分"><span>按照数据结构角度划分</span></a></h3><ol><li><p>BTree 索引：MySQL 里默认和最常用的索引类型。只有叶子节点存储 value，非叶子节点只有指针和 key。存储引擎 MyISAM 和 InnoDB 实现 BTree 索引都是使用 B+Tree，但二者实现方式不一样（前面已经介绍了）。</p></li><li><p>Hash 哈希索引：类似键值对的形式，一次即可定位。</p></li><li><p>RTree 索引：一般不会使用，仅支持 geometry 数据类型，优势在于范围查找，效率较低，通常使用搜索引擎如 ElasticSearch 代替。</p></li><li><p>Full-text 全文索引：对文本的内容进行分词，进行搜索。目前只有 <code>CHAR</code>、<code>VARCHAR</code> ，<code>TEXT</code> 列上可以创建全文索引。一般不会使用，效率较低，通常使用搜索引擎如 ElasticSearch 代替。</p></li></ol><h3 id="按照存储方式角度划分" tabindex="-1"><a class="header-anchor" href="#按照存储方式角度划分"><span>按照存储方式角度划分</span></a></h3><ul><li><p>聚簇索引（聚集索引）：索引结构和数据<strong>一起存放</strong>的索引</p><p>InnoDB 中的主键索引就属于聚簇索引。</p></li><li><p>非聚簇索引（非聚集索引）：索引结构和数据分开存放的索引</p><p>二级索引(辅助索引)就是非聚簇索引。</p></li></ul><p>MyISAM 引擎，不管主键还是非主键，使用的都是非聚簇索引。</p><p>MyISAM 会为表的<strong>主键</strong>单独创建一个索引，只不过在索引的叶子节点中存储<em>的不是</em>完整的用户记录，而是<strong>主键值和行号</strong>的组合。也就是先通过索引找到对应的行号,再通过行号去找对应的记录。</p><h2 id="联合索引和覆盖索引" tabindex="-1"><a class="header-anchor" href="#联合索引和覆盖索引"><span>联合索引和覆盖索引</span></a></h2><h3 id="联合索引" tabindex="-1"><a class="header-anchor" href="#联合索引"><span>联合索引</span></a></h3><p>使用表中的多个字段创建索引，就是 <strong>联合索引</strong>，也叫 <strong>组合索引</strong> 或 <strong>复合索引</strong>。</p><h3 id="覆盖索引" tabindex="-1"><a class="header-anchor" href="#覆盖索引"><span>覆盖索引</span></a></h3><p>如果一个索引包含（覆盖）所有需要查询的字段的值，我们就称之为“覆盖索引”。我们知道在 InnoDB 存储引擎中，如果不是主键索引，叶子节点存储的是主键+列值。最终还是要“回表”，也就是要通过主键再查找一次。这样就会比较慢；覆盖索引就是把要查询出的列和索引是对应的，不做回表操作！</p><p><strong>覆盖索引即需要查询的字段正好是索引的字段，那么直接根据该索引，就可以查到数据了，而无需回表查询。</strong></p><blockquote><p>如主键索引，如果一条 SQL 需查询主键，那正好根据主键索引就可以查到主键。</p><p>如普通索引，如果一条 SQL 需查询 name，name 字段正好有索引， 那么直接根据这个索引就可以查到数据，也无需回表。</p></blockquote><p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/20210420165341868.png" alt="覆盖索引" loading="lazy"></p><h3 id="最左前缀匹配原则" tabindex="-1"><a class="header-anchor" href="#最左前缀匹配原则"><span>最左前缀匹配原则</span></a></h3><p>最左前缀匹配原则指的是，在使用联合索引时，<strong>MySQL</strong> 会根据联合索引中的字段顺序，从左到右依次到查询条件中去匹配，如果查询条件中存在与联合索引中最左侧字段相匹配的字段，则就会使用该字段过滤一批数据，直至联合索引中全部字段匹配完成，或者在执行过程中遇到范围查询（如 <strong><code>&gt;</code></strong>、<strong><code>&lt;</code></strong>）才会停止匹配。</p><p>对于 <strong><code>&gt;=</code></strong>、<strong><code>&lt;=</code></strong>、<strong><code>BETWEEN</code></strong>、<strong><code>like</code></strong> 前缀匹配 的范围查询，并不会停止匹配。所以，我们在使用联合索引时，可以将区分度高的字段放在最左边，这也可以过滤更多数据。</p><p><code>between</code>在 MySQL 中是左闭右闭，故不会索引失效。</p><h3 id="索引下推" tabindex="-1"><a class="header-anchor" href="#索引下推"><span>索引下推</span></a></h3><p><strong>索引下推（Index Condition Pushdown）</strong> 是 <strong>MySQL 5.6</strong> 版本中提供的一项索引优化功能，可以在非聚簇索引遍历过程中，对索引中包含的字段先做判断，过滤掉不符合条件的记录，<strong>减少回表次数</strong>。</p><p>（即使不符合最左前缀匹配原则，也会用后面的内容，如<code>(A, B, C)</code></p><h2 id="索引失效" tabindex="-1"><a class="header-anchor" href="#索引失效"><span>索引失效</span></a></h2><p>索引失效也是慢查询的主要原因之一，常见的导致索引失效的情况有下面这些：</p><ul><li>创建了组合索引，但查询条件未准守最左匹配原则;</li><li>发生隐式转换</li><li>在索引列上进行计算、函数、类型转换等操作;</li><li>以 <code>%</code> 开头的 LIKE 查询比如 <code>like &#39;%abc&#39;</code>;</li><li>查询条件中使用 or，且 or 的前后条件中有一个列没有索引，涉及的索引都不会被使用到;</li></ul><p><code>SELECT *</code> 不会直接导致索引失效（如果不走索引大概率是因为 where 查询范围过大导致的），但它可能会带来一些其他的性能问题比如造成网络传输和数据处理的浪费、无法使用索引覆盖;</p>',34)]))}const d=t(l,[["render",i],["__file","index.html.vue"]]),c=JSON.parse(`{"path":"/cs/database/mysql/index/","title":"索引","lang":"en-US","frontmatter":{"description":"索引 索引：用于快速查询和检索数据的数据结构，其本质可以看成是一种排序好的数据结构。 B 树 & B+树 B 树也称 B-树,全称为 多路平衡查找树 ，B+ 树是 B 树的一种变体。B 树和 B+树中的 B 是 Balanced （平衡）的意思。 目前大部分数据库系统及文件系统都采用 B-Tree 或其变种 B+Tree 作为索引结构。 B 树& B+...","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/cs/database/mysql/index/"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"索引"}],["meta",{"property":"og:description","content":"索引 索引：用于快速查询和检索数据的数据结构，其本质可以看成是一种排序好的数据结构。 B 树 & B+树 B 树也称 B-树,全称为 多路平衡查找树 ，B+ 树是 B 树的一种变体。B 树和 B+树中的 B 是 Balanced （平衡）的意思。 目前大部分数据库系统及文件系统都采用 B-Tree 或其变种 B+Tree 作为索引结构。 B 树& B+..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/20210420165341868.png"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-05-08T07:35:02.000Z"}],["meta",{"property":"article:modified_time","content":"2024-05-08T07:35:02.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"索引\\",\\"image\\":[\\"https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/20210420165341868.png\\"],\\"dateModified\\":\\"2024-05-08T07:35:02.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[{"level":3,"title":"B 树 & B+树","slug":"b-树-b-树","link":"#b-树-b-树","children":[]},{"level":2,"title":"索引类型","slug":"索引类型","link":"#索引类型","children":[{"level":3,"title":"按照数据结构角度划分","slug":"按照数据结构角度划分","link":"#按照数据结构角度划分","children":[]},{"level":3,"title":"按照存储方式角度划分","slug":"按照存储方式角度划分","link":"#按照存储方式角度划分","children":[]}]},{"level":2,"title":"联合索引和覆盖索引","slug":"联合索引和覆盖索引","link":"#联合索引和覆盖索引","children":[{"level":3,"title":"联合索引","slug":"联合索引","link":"#联合索引","children":[]},{"level":3,"title":"覆盖索引","slug":"覆盖索引","link":"#覆盖索引","children":[]},{"level":3,"title":"最左前缀匹配原则","slug":"最左前缀匹配原则","link":"#最左前缀匹配原则","children":[]},{"level":3,"title":"索引下推","slug":"索引下推","link":"#索引下推","children":[]}]},{"level":2,"title":"索引失效","slug":"索引失效","link":"#索引失效","children":[]}],"git":{"createdTime":1672746435000,"updatedTime":1715153702000,"contributors":[{"name":"刘大维","email":"davidliu@liudaweideMacBook-Pro.local","commits":4},{"name":"davidliuk","email":"l729641074@163.com","commits":1}]},"readingTime":{"minutes":5.09,"words":1528},"filePathRelative":"cs/database/mysql/index/README.md","localizedDate":"January 3, 2023","excerpt":"\\n<p>索引：<strong>用于快速查询和检索数据的数据结构，其本质可以看成是一种排序好的数据结构。</strong></p>\\n<h3>B 树 &amp; B+树</h3>\\n<p>B 树也称 B-树,全称为 <strong>多路平衡查找树</strong> ，B+ 树是 B 树的一种变体。B 树和 B+树中的 B 是 <code>Balanced</code> （平衡）的意思。</p>\\n<p>目前大部分数据库系统及文件系统都采用 B-Tree 或其变种 B+Tree 作为索引结构。</p>\\n<p><strong>B 树&amp; B+树两者有何异同呢？</strong></p>\\n<ul>\\n<li>B 树的所有节点既存放键(key) 也存放 数据(data)，而 B+树只有叶子节点存放 key 和 data，其他内节点只存放 key。</li>\\n<li>B 树的叶子节点都是独立的;B+树的叶子节点有一条引用链指向与它相邻的叶子节点。</li>\\n<li>B 树的检索的过程相当于对范围内的每个节点的关键字做二分查找，可能还没有到达叶子节点，检索就结束了。而 B+树的检索效率就很稳定了，任何查找都是从根节点到叶子节点的过程，叶子节点的顺序检索很明显。</li>\\n</ul>","autoDesc":true}`);export{d as comp,c as data};
