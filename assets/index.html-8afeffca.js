import{_ as e,V as a,W as r,Z as o}from"./framework-e5d7a6b2.js";const n={},d=o('<h1 id="索引" tabindex="-1"><a class="header-anchor" href="#索引" aria-hidden="true">#</a> 索引</h1><p>索引的定义：</p><p>索引是帮助MySQL高效获取数据的数据结构（有序）。</p><p><strong>索引是一种用于快速查询和检索数据的数据结构，其本质可以看成是一种排序好的数据结构。</strong></p><h3 id="b-树-b-树" tabindex="-1"><a class="header-anchor" href="#b-树-b-树" aria-hidden="true">#</a> B 树&amp; B+树</h3><p>B 树也称 B-树,全称为 <strong>多路平衡查找树</strong> ，B+ 树是 B 树的一种变体。B 树和 B+树中的 B 是 <code>Balanced</code> （平衡）的意思。</p><p>目前大部分数据库系统及文件系统都采用 B-Tree 或其变种 B+Tree 作为索引结构。</p><p><strong>B 树&amp; B+树两者有何异同呢？</strong></p><ul><li>B 树的所有节点既存放键(key) 也存放 数据(data)，而 B+树只有叶子节点存放 key 和 data，其他内节点只存放 key。</li><li>B 树的叶子节点都是独立的;B+树的叶子节点有一条引用链指向与它相邻的叶子节点。</li><li>B 树的检索的过程相当于对范围内的每个节点的关键字做二分查找，可能还没有到达叶子节点，检索就结束了。而 B+树的检索效率就很稳定了，任何查找都是从根节点到叶子节点的过程，叶子节点的顺序检索很明显。</li></ul><p>在 MySQL 中，MyISAM 引擎和 InnoDB 引擎都是使用 B+Tree 作为索引结构，但是，两者的实现方式不太一样。（下面的内容整理自《Java 工程师修炼之道》）</p><h2 id="索引类型" tabindex="-1"><a class="header-anchor" href="#索引类型" aria-hidden="true">#</a> 索引类型</h2><h3 id="按照数据结构维度划分" tabindex="-1"><a class="header-anchor" href="#按照数据结构维度划分" aria-hidden="true">#</a> 按照数据结构维度划分：</h3><ol><li><p>BTree 索引：MySQL 里默认和最常用的索引类型。只有叶子节点存储 value，非叶子节点只有指针和 key。存储引擎 MyISAM 和 InnoDB 实现 BTree 索引都是使用 B+Tree，但二者实现方式不一样（前面已经介绍了）。</p></li><li><p>Hash 哈希索引：类似键值对的形式，一次即可定位。</p></li><li><p>RTree 索引：一般不会使用，仅支持 geometry 数据类型，优势在于范围查找，效率较低，通常使用搜索引擎如 ElasticSearch 代替。</p></li><li><p>Full-text 全文索引：对文本的内容进行分词，进行搜索。目前只有 <code>CHAR</code>、<code>VARCHAR</code> ，<code>TEXT</code> 列上可以创建全文索引。一般不会使用，效率较低，通常使用搜索引擎如 ElasticSearch 代替。</p></li></ol><h3 id="按照底层存储方式角度划分" tabindex="-1"><a class="header-anchor" href="#按照底层存储方式角度划分" aria-hidden="true">#</a> 按照底层存储方式角度划分：</h3><ul><li><p>聚簇索引（聚集索引）：索引结构和数据<strong>一起存放</strong>的索引，InnoDB 中的主键索引就属于聚簇索引。</p></li><li><p>非聚簇索引（非聚集索引）：索引结构和数据分开存放的索引，二级索引(辅助索引)就属于非聚簇索引。</p><p>MySQL 的 MyISAM 引擎，不管主键还是非主键，使用的都是非聚簇索引。</p><p><em>MyISAM</em>会为表<em>的主键</em>单独创建一个索引,只不过在索引的叶子节点中存储<em>的不是</em>完整的用户记录,而是<em>主键</em>值和行号的组合。也就是先通过索引找到对应的行号,再通过行号去找对应的记录。</p></li></ul><h2 id="覆盖索引和联合索引" tabindex="-1"><a class="header-anchor" href="#覆盖索引和联合索引" aria-hidden="true">#</a> 覆盖索引和联合索引</h2><h3 id="覆盖索引" tabindex="-1"><a class="header-anchor" href="#覆盖索引" aria-hidden="true">#</a> 覆盖索引</h3><p>如果一个索引包含（或者说覆盖）所有需要查询的字段的值，我们就称之为“覆盖索引”。我们知道在 InnoDB 存储引擎中，如果不是主键索引，叶子节点存储的是主键+列值。最终还是要“回表”，也就是要通过主键再查找一次。这样就会比较慢；覆盖索引就是把要查询出的列和索引是对应的，不做回表操作！</p><p><strong>覆盖索引即需要查询的字段正好是索引的字段，那么直接根据该索引，就可以查到数据了，而无需回表查询。</strong></p><blockquote><p>如主键索引，如果一条 SQL 需要查询主键，那么正好根据主键索引就可以查到主键。</p><p>再如普通索引，如果一条 SQL 需要查询 name，name 字段正好有索引， 那么直接根据这个索引就可以查到数据，也无需回表。</p></blockquote><p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/20210420165341868.png" alt="覆盖索引" loading="lazy"></p><h3 id="联合索引" tabindex="-1"><a class="header-anchor" href="#联合索引" aria-hidden="true">#</a> 联合索引</h3><p>使用表中的多个字段创建索引，就是 <strong>联合索引</strong>，也叫 <strong>组合索引</strong> 或 <strong>复合索引</strong>。</p><h3 id="最左前缀匹配原则" tabindex="-1"><a class="header-anchor" href="#最左前缀匹配原则" aria-hidden="true">#</a> 最左前缀匹配原则</h3><p>最左前缀匹配原则指的是，在使用联合索引时，<strong>MySQL</strong> 会根据联合索引中的字段顺序，从左到右依次到查询条件中去匹配，如果查询条件中存在与联合索引中最左侧字段相匹配的字段，则就会使用该字段过滤一批数据，直至联合索引中全部字段匹配完成，或者在执行过程中遇到范围查询（如 <strong><code>&gt;</code></strong>、<strong><code>&lt;</code></strong>）才会停止匹配。对于 <strong><code>&gt;=</code></strong>、<strong><code>&lt;=</code></strong>、<strong><code>BETWEEN</code></strong>、<strong><code>like</code></strong> 前缀匹配的范围查询，并不会停止匹配。所以，我们在使用联合索引时，可以将区分度高的字段放在最左边，这也可以过滤更多数据。</p><p><code>between</code>在MySQL中是左闭右闭，故不会索引失效</p><h3 id="索引下推" tabindex="-1"><a class="header-anchor" href="#索引下推" aria-hidden="true">#</a> 索引下推</h3><p><strong>索引下推（Index Condition Pushdown）</strong> 是 <strong>MySQL 5.6</strong> 版本中提供的一项索引优化功能，可以在非聚簇索引遍历过程中，对索引中包含的字段先做判断，过滤掉不符合条件的记录，减少回表次数。</p><p>（即使不符合最左前缀匹配原则，也会用后面的内容，如<code>(A, B, C)</code></p><h2 id="索引失效" tabindex="-1"><a class="header-anchor" href="#索引失效" aria-hidden="true">#</a> 索引失效</h2><p>索引失效也是慢查询的主要原因之一，常见的导致索引失效的情况有下面这些：</p><ul><li>使用 <code>SELECT *</code> 进行查询;</li><li>创建了组合索引，但查询条件未准守最左匹配原则;</li><li>在索引列上进行计算、函数、类型转换等操作;</li><li>以 <code>%</code> 开头的 LIKE 查询比如 <code>like &#39;%abc&#39;</code>;</li><li>查询条件中使用 or，且 or 的前后条件中有一个列没有索引，涉及的索引都不会被使用到;</li><li>发生隐式转换</li></ul>',32),i=[d];function t(c,h){return a(),r("div",null,i)}const l=e(n,[["render",t],["__file","index.html.vue"]]);export{l as default};
