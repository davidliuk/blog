const e=JSON.parse(`{"key":"v-0df9788a","path":"/cs/database/mysql/engine/2.%20%E5%AD%98%E5%82%A8%E5%BC%95%E6%93%8E.html","title":"存储引擎","lang":"en-US","frontmatter":{"description":"存储引擎 InnoDB 兼顾高可靠性和高性能的通用存储引擎 MySQL5.5 后默认 InnoDB 特点 DML 操作遵循 ACID，支持事务 行级锁，提高并发访问性能 支持外键 foreign key 约束，保证数据的完整性和正确性 文件 .frm: 表结构会保存在这个文件。在 MySQL 中建立一张表都会生成一个.frm 文件，该文件是用来保存每个表的元数据信息的，主要包含表结构定义。 .ibd: xxx 是表名，innoDB 引擎的每张表都会对应这样一个表空间文件，存储该表的表结构（frm、sdi）、数据和索引 ibd 是二进制文件，无法直接打开，但是可以输入指令 ibd2sdi 得到可查看的 JSON","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/cs/database/mysql/engine/2.%20%E5%AD%98%E5%82%A8%E5%BC%95%E6%93%8E.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"存储引擎"}],["meta",{"property":"og:description","content":"存储引擎 InnoDB 兼顾高可靠性和高性能的通用存储引擎 MySQL5.5 后默认 InnoDB 特点 DML 操作遵循 ACID，支持事务 行级锁，提高并发访问性能 支持外键 foreign key 约束，保证数据的完整性和正确性 文件 .frm: 表结构会保存在这个文件。在 MySQL 中建立一张表都会生成一个.frm 文件，该文件是用来保存每个表的元数据信息的，主要包含表结构定义。 .ibd: xxx 是表名，innoDB 引擎的每张表都会对应这样一个表空间文件，存储该表的表结构（frm、sdi）、数据和索引 ibd 是二进制文件，无法直接打开，但是可以输入指令 ibd2sdi 得到可查看的 JSON"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-06-08T07:41:54.000Z"}],["meta",{"property":"article:author","content":"David Liu"}],["meta",{"property":"article:modified_time","content":"2023-06-08T07:41:54.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"存储引擎\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-06-08T07:41:54.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[{"level":2,"title":"InnoDB","slug":"innodb","link":"#innodb","children":[{"level":3,"title":"特点","slug":"特点","link":"#特点","children":[]},{"level":3,"title":"文件","slug":"文件","link":"#文件","children":[]},{"level":3,"title":"逻辑存储结构","slug":"逻辑存储结构","link":"#逻辑存储结构","children":[]}]},{"level":2,"title":"其他引擎及选择","slug":"其他引擎及选择","link":"#其他引擎及选择","children":[{"level":3,"title":"MyISAM","slug":"myisam","link":"#myisam","children":[]},{"level":3,"title":"Memory","slug":"memory","link":"#memory","children":[]}]},{"level":2,"title":"对比","slug":"对比","link":"#对比","children":[{"level":3,"title":"应用","slug":"应用","link":"#应用","children":[]}]}],"git":{"createdTime":1680752829000,"updatedTime":1686210114000,"contributors":[{"name":"刘大维","email":"davidliu@liudaweideMacBook-Pro.local","commits":2},{"name":"davidliuk","email":"l729641074@163.com","commits":1}]},"readingTime":{"minutes":2.27,"words":680},"filePathRelative":"cs/database/mysql/engine/2. 存储引擎.md","localizedDate":"April 6, 2023","excerpt":"<h1> 存储引擎</h1>\\n<h2> InnoDB</h2>\\n<p>兼顾高可靠性和高性能的通用存储引擎</p>\\n<p>MySQL5.5 后默认 InnoDB</p>\\n<h3> 特点</h3>\\n<ol>\\n<li>DML 操作遵循 ACID，支持事务</li>\\n<li>行级锁，提高并发访问性能</li>\\n<li>支持外键 foreign key 约束，保证数据的完整性和正确性</li>\\n</ol>\\n<h3> 文件</h3>\\n<ul>\\n<li>\\n<p><code>.frm</code>: <strong>表结构</strong>会保存在这个文件。在 MySQL 中建立一张表都会生成一个.frm 文件，该文件是用来保存每个表的元数据信息的，主要包含表结构定义。</p>\\n</li>\\n<li>\\n<p><code>.ibd</code>: xxx 是表名，innoDB 引擎的每张表都会对应这样一个表空间文件，存储该表的表结构（frm、sdi）、数据和索引</p>\\n<p>ibd 是二进制文件，无法直接打开，但是可以输入指令 ibd2sdi 得到可查看的 JSON</p>\\n</li>\\n</ul>","autoDesc":true}`);export{e as data};
