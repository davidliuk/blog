import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as i,d as a,o as l}from"./app-UiaY2OnX.js";const o={};function t(r,e){return l(),i("div",null,e[0]||(e[0]=[a('<h1 id="storage-engine-存储引擎" tabindex="-1"><a class="header-anchor" href="#storage-engine-存储引擎"><span>Storage Engine 存储引擎</span></a></h1><h2 id="innodb" tabindex="-1"><a class="header-anchor" href="#innodb"><span>InnoDB</span></a></h2><p>兼顾高可靠性和高性能的通用存储引擎</p><p>MySQL5.5 后默认 InnoDB</p><h3 id="特点" tabindex="-1"><a class="header-anchor" href="#特点"><span>特点</span></a></h3><ol><li>DML 操作遵循 ACID，支持事务</li><li>行级锁，提高并发访问性能</li><li>支持外键 foreign key 约束，保证数据的完整性和正确性</li></ol><h3 id="文件" tabindex="-1"><a class="header-anchor" href="#文件"><span>文件</span></a></h3><ul><li><p><code>.frm</code>: <strong>表结构</strong>会保存在这个文件。在 MySQL 中建立一张表都会生成一个.frm 文件，该文件是用来保存每个表的元数据信息的，主要包含表结构定义。</p></li><li><p><code>.ibd</code>: 文件名是表名，innoDB 引擎的每张表都会对应这样一个表空间文件，存储该表的表结构（frm、sdi）、数据和索引</p><p>ibd 是二进制文件，无法直接打开，可以输入指令 ibd2sdi 得到可查看的 JSON</p></li></ul><h3 id="逻辑存储结构" tabindex="-1"><a class="header-anchor" href="#逻辑存储结构"><span>逻辑存储结构</span></a></h3><img src="https://cdn.jsdelivr.net/gh/davidliuk/images@master/blog/表空间结构.drawio.png" alt="img" style="zoom:50%;"><ul><li>表空间 Tablespace</li><li>段 Segment</li><li>区 Extent</li><li>页 Page</li><li>行 Row</li></ul><h2 id="其他引擎及选择" tabindex="-1"><a class="header-anchor" href="#其他引擎及选择"><span>其他引擎及选择</span></a></h2><h3 id="myisam" tabindex="-1"><a class="header-anchor" href="#myisam"><span>MyISAM</span></a></h3><p>MyISAM 是 MySQL 早期的默认存储引擎</p><h4 id="特点-1" tabindex="-1"><a class="header-anchor" href="#特点-1"><span>特点</span></a></h4><ul><li>不支持事务，不支持外键</li><li>支持表锁，不支持行锁</li><li>访问速度快</li></ul><h4 id="文件-1" tabindex="-1"><a class="header-anchor" href="#文件-1"><span>文件</span></a></h4><ul><li><code>.sdi</code> 表结构</li><li><code>.myd</code> 存放数据</li><li><code>.myi</code> 存放索引，MyISAM没有聚簇索引，数据与索引是分开的</li></ul><h3 id="memory" tabindex="-1"><a class="header-anchor" href="#memory"><span>Memory</span></a></h3><p>Memory 引擎的表数据时存储在内存中的，由于受到硬件问题、或断电问题的影响，只能将这些表作为临时表或缓存使用。</p><h4 id="特点-2" tabindex="-1"><a class="header-anchor" href="#特点-2"><span>特点</span></a></h4><ul><li>内存存放</li><li>hash 索引（默认）</li></ul><h4 id="文件-2" tabindex="-1"><a class="header-anchor" href="#文件-2"><span>文件</span></a></h4><ul><li><code>.sdi</code>: 存储结构信息</li></ul><h2 id="对比" tabindex="-1"><a class="header-anchor" href="#对比"><span>对比</span></a></h2><p><img src="https://cdn.jsdelivr.net/gh/davidliuk/images@master/blog/comparison-of-common-mysql-storage-engines.png" alt="常见的几种 MySQL 存储引擎对比" loading="lazy"></p><p>这两种用的比较少，因为使用 MyISAM 的场景被 MongoDB 取代，Memory 的场景被 Redis 取代。</p><p><strong>总结</strong>：</p><ul><li><p>InnoDB 支持行级别的锁粒度，MyISAM 不支持，只支持表级别的锁粒度。</p></li><li><p>MyISAM 不提供事务支持。InnoDB 提供事务支持，实现了 SQL 标准定义了四个隔离级别。</p></li><li><p>MyISAM 不支持外键，而 InnoDB 支持。</p></li><li><p>MyISAM 不支持 MVCC，而 InnoDB 支持。</p></li><li><p>虽然 MyISAM 引擎和 InnoDB 引擎都是使用 B+Tree 作为索引结构，但是两者的实现方式不太一样。</p><p>InnoDB的B+树主键索引的叶子节点就是数据文件，辅助索引的叶子节点是主键的值；而MyISAM的B+树主键索引和辅助索引的叶子节点都是数据文件的地址指针。</p></li><li><p>MyISAM 不支持数据库异常崩溃后的安全恢复，而 InnoDB 支持。</p></li><li><p>InnoDB 的性能比 MyISAM 更强大。</p></li></ul><h3 id="应用" tabindex="-1"><a class="header-anchor" href="#应用"><span>应用</span></a></h3><p>核心数据 InnoDB</p><p>非核心数据可以 MyISAM，如足迹啥的，其实这种可以用 Mongo DB 代替</p>',32)]))}const p=n(o,[["render",t],["__file","2. 存储引擎.html.vue"]]),c=JSON.parse(`{"path":"/cs/database/mysql/engine/2.%20%E5%AD%98%E5%82%A8%E5%BC%95%E6%93%8E.html","title":"Storage Engine 存储引擎","lang":"en-US","frontmatter":{"description":"Storage Engine 存储引擎 InnoDB 兼顾高可靠性和高性能的通用存储引擎 MySQL5.5 后默认 InnoDB 特点 DML 操作遵循 ACID，支持事务 行级锁，提高并发访问性能 支持外键 foreign key 约束，保证数据的完整性和正确性 文件 .frm: 表结构会保存在这个文件。在 MySQL 中建立一张表都会生成一个.fr...","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/cs/database/mysql/engine/2.%20%E5%AD%98%E5%82%A8%E5%BC%95%E6%93%8E.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"Storage Engine 存储引擎"}],["meta",{"property":"og:description","content":"Storage Engine 存储引擎 InnoDB 兼顾高可靠性和高性能的通用存储引擎 MySQL5.5 后默认 InnoDB 特点 DML 操作遵循 ACID，支持事务 行级锁，提高并发访问性能 支持外键 foreign key 约束，保证数据的完整性和正确性 文件 .frm: 表结构会保存在这个文件。在 MySQL 中建立一张表都会生成一个.fr..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/davidliuk/images@master/blog/comparison-of-common-mysql-storage-engines.png"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-05-08T07:35:02.000Z"}],["meta",{"property":"article:modified_time","content":"2024-05-08T07:35:02.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Storage Engine 存储引擎\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/davidliuk/images@master/blog/comparison-of-common-mysql-storage-engines.png\\"],\\"dateModified\\":\\"2024-05-08T07:35:02.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[{"level":2,"title":"InnoDB","slug":"innodb","link":"#innodb","children":[{"level":3,"title":"特点","slug":"特点","link":"#特点","children":[]},{"level":3,"title":"文件","slug":"文件","link":"#文件","children":[]},{"level":3,"title":"逻辑存储结构","slug":"逻辑存储结构","link":"#逻辑存储结构","children":[]}]},{"level":2,"title":"其他引擎及选择","slug":"其他引擎及选择","link":"#其他引擎及选择","children":[{"level":3,"title":"MyISAM","slug":"myisam","link":"#myisam","children":[]},{"level":3,"title":"Memory","slug":"memory","link":"#memory","children":[]}]},{"level":2,"title":"对比","slug":"对比","link":"#对比","children":[{"level":3,"title":"应用","slug":"应用","link":"#应用","children":[]}]}],"git":{"createdTime":1680752829000,"updatedTime":1715153702000,"contributors":[{"name":"刘大维","email":"davidliu@liudaweideMacBook-Pro.local","commits":3},{"name":"davidliuk","email":"l729641074@163.com","commits":1}]},"readingTime":{"minutes":2.24,"words":673},"filePathRelative":"cs/database/mysql/engine/2. 存储引擎.md","localizedDate":"April 6, 2023","excerpt":"\\n<h2>InnoDB</h2>\\n<p>兼顾高可靠性和高性能的通用存储引擎</p>\\n<p>MySQL5.5 后默认 InnoDB</p>\\n<h3>特点</h3>\\n<ol>\\n<li>DML 操作遵循 ACID，支持事务</li>\\n<li>行级锁，提高并发访问性能</li>\\n<li>支持外键 foreign key 约束，保证数据的完整性和正确性</li>\\n</ol>\\n<h3>文件</h3>\\n<ul>\\n<li>\\n<p><code>.frm</code>: <strong>表结构</strong>会保存在这个文件。在 MySQL 中建立一张表都会生成一个.frm 文件，该文件是用来保存每个表的元数据信息的，主要包含表结构定义。</p>\\n</li>\\n<li>\\n<p><code>.ibd</code>: 文件名是表名，innoDB 引擎的每张表都会对应这样一个表空间文件，存储该表的表结构（frm、sdi）、数据和索引</p>\\n<p>ibd 是二进制文件，无法直接打开，可以输入指令 ibd2sdi 得到可查看的 JSON</p>\\n</li>\\n</ul>","autoDesc":true}`);export{p as comp,c as data};
