const e=JSON.parse(`{"key":"v-3f4a6a8c","path":"/cs/database/mysql/transaction/","title":"事务","lang":"en-US","frontmatter":{"description":"事务 事务定义 事务是一组操作的集合，它是一个不可分割的工作单位，事务会把所有的操作作为一个整体一起向系统提交或撤销操作请求，即这些操作要么同时成功，要么同时失败。 默认 MySQL 的事务是自动提交的，也就是说，当执行一条 DML 语句，MySQL 会立即隐式的提交事务。 事务操作 方法一 取消自动提 set @@autocommit = 0 -- 写操作 -- 操作 -- 提交事务 commit; -- 如果异常，则不要执行commit，要回滚事务 rollback;","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/cs/database/mysql/transaction/"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"事务"}],["meta",{"property":"og:description","content":"事务 事务定义 事务是一组操作的集合，它是一个不可分割的工作单位，事务会把所有的操作作为一个整体一起向系统提交或撤销操作请求，即这些操作要么同时成功，要么同时失败。 默认 MySQL 的事务是自动提交的，也就是说，当执行一条 DML 语句，MySQL 会立即隐式的提交事务。 事务操作 方法一 取消自动提 set @@autocommit = 0 -- 写操作 -- 操作 -- 提交事务 commit; -- 如果异常，则不要执行commit，要回滚事务 rollback;"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-04-06T03:47:09.000Z"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2023-04-06T03:47:09.000Z"}],["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://davidliuk.github.io/blog/blog/zh/cs/database/mysql/transaction/"}]]},"headers":[{"level":3,"title":"事务定义","slug":"事务定义","link":"#事务定义","children":[]},{"level":2,"title":"事务操作","slug":"事务操作","link":"#事务操作","children":[{"level":3,"title":"方法一","slug":"方法一","link":"#方法一","children":[]},{"level":3,"title":"方式二","slug":"方式二","link":"#方式二","children":[]}]},{"level":2,"title":"事物分类","slug":"事物分类","link":"#事物分类","children":[{"level":3,"title":"数据库角度","slug":"数据库角度","link":"#数据库角度","children":[]},{"level":3,"title":"Java 角度","slug":"java-角度","link":"#java-角度","children":[]},{"level":3,"title":"编程角度（Spring层面）","slug":"编程角度-spring层面","link":"#编程角度-spring层面","children":[]}]}],"git":{"createdTime":1672746435000,"updatedTime":1680752829000,"contributors":[{"name":"davidliuk","email":"l729641074@163.com","commits":3},{"name":"刘大维","email":"davidliu@liudaweideMacBook-Pro.local","commits":1}]},"readingTime":{"minutes":3.01,"words":904},"localizedDate":"January 3, 2023","filePathRelative":"cs/database/mysql/transaction/README.md","excerpt":"<h1> 事务</h1>\\n<h3> 事务定义</h3>\\n<p>事务是一组操作的集合，它是一个不可分割的工作单位，事务会把所有的操作作为一个整体一起向系统提交或撤销操作请求，即这些操作要么同时成功，要么同时失败。</p>\\n<p>默认 MySQL 的事务是自动提交的，也就是说，当执行一条 DML 语句，MySQL 会立即隐式的提交事务。</p>\\n<h2> 事务操作</h2>\\n<h3> 方法一</h3>\\n<p>取消自动提</p>\\n<div class=\\"language-sql line-numbers-mode\\" data-ext=\\"sql\\"><pre class=\\"language-sql\\"><code><span class=\\"token keyword\\">set</span> @<span class=\\"token variable\\">@autocommit</span> <span class=\\"token operator\\">=</span> <span class=\\"token number\\">0</span>\\n\\n<span class=\\"token comment\\">-- 写操作</span>\\n\\n<span class=\\"token comment\\">-- 操作</span>\\n\\n<span class=\\"token comment\\">-- 提交事务</span>\\n<span class=\\"token keyword\\">commit</span><span class=\\"token punctuation\\">;</span>\\n\\n<span class=\\"token comment\\">-- 如果异常，则不要执行commit，要回滚事务</span>\\n<span class=\\"token keyword\\">rollback</span><span class=\\"token punctuation\\">;</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{e as data};