const e=JSON.parse(`{"key":"v-2060c73c","path":"/cs/database/mysql/lock/3.%20%E8%A1%8C%E7%BA%A7%E9%94%81.html","title":"行级锁","lang":"en-US","frontmatter":{"description":"行级锁 操作锁住对应的行数据，锁定粒度最小，发生锁冲突的概率最低 在 Innodb 存储引擎中，会用一个特殊的记录来标识最后一条记录，该特殊的记录的名字叫 supremum pseudo-record ， 查看目前加的锁 select object_schema, object_name, index_name, lock_type, lock_mode, lock_data from performance_schema.data_locks select * from performance_schema.data_locks","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/cs/database/mysql/lock/3.%20%E8%A1%8C%E7%BA%A7%E9%94%81.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"行级锁"}],["meta",{"property":"og:description","content":"行级锁 操作锁住对应的行数据，锁定粒度最小，发生锁冲突的概率最低 在 Innodb 存储引擎中，会用一个特殊的记录来标识最后一条记录，该特殊的记录的名字叫 supremum pseudo-record ， 查看目前加的锁 select object_schema, object_name, index_name, lock_type, lock_mode, lock_data from performance_schema.data_locks select * from performance_schema.data_locks"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-04-11T10:23:43.000Z"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2023-04-11T10:23:43.000Z"}],["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://davidliuk.github.io/blog/blog/zh/cs/database/mysql/lock/3.%20%E8%A1%8C%E7%BA%A7%E9%94%81.html"}]]},"headers":[{"level":2,"title":"行级锁分类","slug":"行级锁分类","link":"#行级锁分类","children":[{"level":3,"title":"行锁","slug":"行锁","link":"#行锁","children":[]},{"level":3,"title":"间隙锁","slug":"间隙锁","link":"#间隙锁","children":[]},{"level":3,"title":"临键锁","slug":"临键锁","link":"#临键锁","children":[]},{"level":3,"title":"隐式锁","slug":"隐式锁","link":"#隐式锁","children":[]},{"level":3,"title":"插入意向锁","slug":"插入意向锁","link":"#插入意向锁","children":[]}]},{"level":2,"title":"加锁过程","slug":"加锁过程","link":"#加锁过程","children":[{"level":3,"title":"加锁/解锁时机","slug":"加锁-解锁时机","link":"#加锁-解锁时机","children":[]},{"level":3,"title":"唯一索引（主键索引）","slug":"唯一索引-主键索引","link":"#唯一索引-主键索引","children":[]},{"level":3,"title":"非唯一索引加锁","slug":"非唯一索引加锁","link":"#非唯一索引加锁","children":[]},{"level":3,"title":"insert 语句加锁","slug":"insert-语句加锁","link":"#insert-语句加锁","children":[]},{"level":3,"title":"没有加索引","slug":"没有加索引","link":"#没有加索引","children":[]}]},{"level":2,"title":"死锁分析","slug":"死锁分析","link":"#死锁分析","children":[{"level":3,"title":"产生条件","slug":"产生条件","link":"#产生条件","children":[]},{"level":3,"title":"解决方案","slug":"解决方案","link":"#解决方案","children":[]}]}],"git":{"createdTime":1672647518000,"updatedTime":1681208623000,"contributors":[{"name":"刘大维","email":"davidliu@liudaweideMacBook-Pro.local","commits":5},{"name":"davidliuk","email":"l729641074@163.com","commits":4}]},"readingTime":{"minutes":11.91,"words":3573},"localizedDate":"January 2, 2023","filePathRelative":"cs/database/mysql/lock/3. 行级锁.md","excerpt":"<h1> 行级锁</h1>\\n<p>操作锁住对应的行数据，锁定粒度最小，发生锁冲突的概率最低</p>\\n<p>在 Innodb 存储引擎中，会用一个特殊的记录来标识最后一条记录，该特殊的记录的名字叫 supremum pseudo-record ，</p>\\n<p>查看目前加的锁</p>\\n<div class=\\"language-sql line-numbers-mode\\" data-ext=\\"sql\\"><pre class=\\"language-sql\\"><code><span class=\\"token keyword\\">select</span> object_schema<span class=\\"token punctuation\\">,</span> object_name<span class=\\"token punctuation\\">,</span> index_name<span class=\\"token punctuation\\">,</span> lock_type<span class=\\"token punctuation\\">,</span> lock_mode<span class=\\"token punctuation\\">,</span> lock_data <span class=\\"token keyword\\">from</span> performance_schema<span class=\\"token punctuation\\">.</span>data_locks\\n\\n<span class=\\"token keyword\\">select</span> <span class=\\"token operator\\">*</span> <span class=\\"token keyword\\">from</span> performance_schema<span class=\\"token punctuation\\">.</span>data_locks\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{e as data};
