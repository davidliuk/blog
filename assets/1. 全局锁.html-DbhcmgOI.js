import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,d as a,o as t}from"./app-ktFCNIob.js";const l={};function n(d,i){return t(),s("div",null,i[0]||(i[0]=[a('<h1 id="全局锁" tabindex="-1"><a class="header-anchor" href="#全局锁"><span>全局锁</span></a></h1><p>对整个数据库实例加锁，加锁以后整个实例处于只读状态，后续的 DML 写操作、DDL 语句，以及更新操作的事物提交语句都将被阻塞。</p><p>典型使用场景：全库的逻辑备份，对所有表进行锁定，从而获取一致性视图，保证数据的完整性。</p><h2 id="语法" tabindex="-1"><a class="header-anchor" href="#语法"><span>语法</span></a></h2><p>加锁语句：</p><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">flush tables </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">with</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> read</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> lock;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>释放锁：</p><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">unlock</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> tables;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>数据库备份</p><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">mysqldump</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -uroot</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -p1234</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> itcast</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &gt; </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">itcast.sql</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="特点" tabindex="-1"><a class="header-anchor" href="#特点"><span>特点</span></a></h2><p>数据库中加全局锁，是一个比较重的操作，存在以下问题：</p><ol><li>如果再主库上备份，那么在备份期间都不能执行更新，业务基本上就得停摆。</li><li>如果在从库上备份，那么在备份期间从库不能执行主库同步过来的二进制日志(binlog)，会导致主从延迟。</li></ol><h3 id="解决方案" tabindex="-1"><a class="header-anchor" href="#解决方案"><span>解决方案</span></a></h3><p>在 InnoDB 引擎中，可以在备份时加上参数<code>--single-transaction</code> 来完成不加锁的一致性备份，通过快照读实现的。</p><p>InnoDB 引擎支持的事务支持<strong>可重复读的隔离级别</strong>，那么在备份数据库之前先开启事务，会先创建 Read View，然后整个事务执行期间都在用这个 Read View，而且由于 MVCC 的支持，备份期间业务依然可以对数据进行更新操作。</p><p>因为在可重复读的隔离级别下，即使其他事务更新了表的数据，也不会影响备份数据库时的 Read View，这就是事务四大特性中的隔离性，这样备份期间备份的数据一直是在开启事务时的数据。</p><p>备份数据库的工具是 mysqldump，在使用 mysqldump 时加上 <code>–single-transaction</code> 参数的时候，就会在备份数据库之前先开启事务。这种方法只适用于支持「可重复读隔离级别的事务」的存储引擎。</p><p>InnoDB 存储引擎默认的事务隔离级别正是可重复读，因此可以采用这种方式来备份数据库。</p><p>对于 MyISAM 这种不支持事务的引擎，在备份数据库时就要使用全局锁的方法。</p>',20)]))}const p=e(l,[["render",n],["__file","1. 全局锁.html.vue"]]),o=JSON.parse(`{"path":"/cs/database/mysql/lock/1.%20%E5%85%A8%E5%B1%80%E9%94%81.html","title":"全局锁","lang":"en-US","frontmatter":{"description":"全局锁 对整个数据库实例加锁，加锁以后整个实例处于只读状态，后续的 DML 写操作、DDL 语句，以及更新操作的事物提交语句都将被阻塞。 典型使用场景：全库的逻辑备份，对所有表进行锁定，从而获取一致性视图，保证数据的完整性。 语法 加锁语句： 释放锁： 数据库备份 特点 数据库中加全局锁，是一个比较重的操作，存在以下问题： 如果再主库上备份，那么在备份...","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/cs/database/mysql/lock/1.%20%E5%85%A8%E5%B1%80%E9%94%81.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"全局锁"}],["meta",{"property":"og:description","content":"全局锁 对整个数据库实例加锁，加锁以后整个实例处于只读状态，后续的 DML 写操作、DDL 语句，以及更新操作的事物提交语句都将被阻塞。 典型使用场景：全库的逻辑备份，对所有表进行锁定，从而获取一致性视图，保证数据的完整性。 语法 加锁语句： 释放锁： 数据库备份 特点 数据库中加全局锁，是一个比较重的操作，存在以下问题： 如果再主库上备份，那么在备份..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-05-08T07:35:02.000Z"}],["meta",{"property":"article:modified_time","content":"2024-05-08T07:35:02.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"全局锁\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-08T07:35:02.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[{"level":2,"title":"语法","slug":"语法","link":"#语法","children":[]},{"level":2,"title":"特点","slug":"特点","link":"#特点","children":[{"level":3,"title":"解决方案","slug":"解决方案","link":"#解决方案","children":[]}]}],"git":{"createdTime":1672647518000,"updatedTime":1715153702000,"contributors":[{"name":"刘大维","email":"davidliu@liudaweideMacBook-Pro.local","commits":5},{"name":"davidliuk","email":"l729641074@163.com","commits":1}]},"readingTime":{"minutes":1.85,"words":554},"filePathRelative":"cs/database/mysql/lock/1. 全局锁.md","localizedDate":"January 2, 2023","excerpt":"\\n<p>对整个数据库实例加锁，加锁以后整个实例处于只读状态，后续的 DML 写操作、DDL 语句，以及更新操作的事物提交语句都将被阻塞。</p>\\n<p>典型使用场景：全库的逻辑备份，对所有表进行锁定，从而获取一致性视图，保证数据的完整性。</p>\\n<h2>语法</h2>\\n<p>加锁语句：</p>\\n<div class=\\"language-sql line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"sql\\" data-title=\\"sql\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">flush tables </span><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">with</span><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\"> read</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> lock;</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{p as comp,o as data};
