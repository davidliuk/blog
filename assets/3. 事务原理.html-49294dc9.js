const e=JSON.parse(`{"key":"v-840effd6","path":"/cs/database/mysql/engine/innodb-principle/3.%20%E4%BA%8B%E5%8A%A1%E5%8E%9F%E7%90%86.html","title":"事务原理","lang":"en-US","frontmatter":{"description":"事务原理 事务性质 redo log 保证：持久性：事务一旦提交或回滚，他对数据库中数据的改变就是永久的。 物理日志：存操作的指令 该日志文件由两部分组成：","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/cs/database/mysql/engine/innodb-principle/3.%20%E4%BA%8B%E5%8A%A1%E5%8E%9F%E7%90%86.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"事务原理"}],["meta",{"property":"og:description","content":"事务原理 事务性质 redo log 保证：持久性：事务一旦提交或回滚，他对数据库中数据的改变就是永久的。 物理日志：存操作的指令 该日志文件由两部分组成："}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-05-17T10:10:52.000Z"}],["meta",{"property":"article:author","content":"David Liu"}],["meta",{"property":"article:modified_time","content":"2023-05-17T10:10:52.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"事务原理\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-05-17T10:10:52.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[{"level":2,"title":"redo log","slug":"redo-log","link":"#redo-log","children":[]},{"level":2,"title":"undo log","slug":"undo-log","link":"#undo-log","children":[]},{"level":2,"title":"MVCC","slug":"mvcc","link":"#mvcc","children":[{"level":3,"title":"概念","slug":"概念","link":"#概念","children":[]},{"level":3,"title":"隐藏字段","slug":"隐藏字段","link":"#隐藏字段","children":[]},{"level":3,"title":"undo log","slug":"undo-log-1","link":"#undo-log-1","children":[]},{"level":3,"title":"Read View","slug":"read-view","link":"#read-view","children":[]},{"level":3,"title":"未解决的幻读情况","slug":"未解决的幻读情况","link":"#未解决的幻读情况","children":[]}]},{"level":2,"title":"一致性保证","slug":"一致性保证","link":"#一致性保证","children":[{"level":3,"title":"CAP 和 ACID 中的一致性","slug":"cap-和-acid-中的一致性","link":"#cap-和-acid-中的一致性","children":[]}]}],"git":{"createdTime":1672746435000,"updatedTime":1684318252000,"contributors":[{"name":"davidliuk","email":"l729641074@163.com","commits":5},{"name":"刘大维","email":"davidliu@liudaweideMacBook-Pro.local","commits":4}]},"readingTime":{"minutes":9.41,"words":2822},"filePathRelative":"cs/database/mysql/engine/innodb-principle/3. 事务原理.md","localizedDate":"January 3, 2023","excerpt":"<h1> 事务原理</h1>\\n<p>事务性质</p>\\n<p><img src=\\"https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/截屏2023-02-24 23.15.51.png\\" alt=\\"截屏2023-02-24 23.15.51\\" loading=\\"lazy\\"></p>\\n<h2> redo log</h2>\\n<p>保证：<strong>持久性</strong>：事务一旦提交或回滚，他对数据库中数据的改变就是永久的。</p>\\n<p>物理日志：存操作的指令</p>\\n<p>该日志文件由两部分组成：</p>","autoDesc":true}`);export{e as data};
