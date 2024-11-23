import{_ as l}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as e,d as s,o as n}from"./app-CrF8c6p-.js";const a={};function t(p,i){return n(),e("div",null,i[0]||(i[0]=[s(`<h1 id="体系结构" tabindex="-1"><a class="header-anchor" href="#体系结构"><span>体系结构</span></a></h1><p><img src="https://cdn.jsdelivr.net/gh/davidliuk/images@master/blog/mysql查询流程.png" alt="查询语句执行流程" loading="lazy"></p><ul><li><p>Server 层</p><ol><li><p>连接层：连接器</p><p>连接、授权认证</p><blockquote><p>连接超上限：Too many connections</p><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">SHOW VARIABLES </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">LIKE</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;%max_connections%&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">; </span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">set</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> GLOBAL</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> max_connections</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">500</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div></blockquote></li><li><p>服务层</p><ol><li>查询缓存（MySQL 8 移除，5.7 建议关闭）</li><li>解析器/分析器</li><li>优化器/查询优化器</li><li>执行器</li></ol></li></ol></li><li><p>存储引擎层</p><ol><li><p>引擎层</p><p>可插拔存储引擎</p><p>实现：内存、索引和存储管理</p></li><li><p>存储层</p><ul><li>系统文件</li><li>文件和日志</li></ul></li></ol></li></ul><hr><p><img src="https://oss.javaguide.cn/javaguide/13526879-3037b144ed09eb88.png" alt="img" loading="lazy"></p><h2 id="执行过程" tabindex="-1"><a class="header-anchor" href="#执行过程"><span>执行过程</span></a></h2><p>执行一条 SQL 查询语句，期间发生了什么？</p><ol><li><p>连接器：建立连接，管理连接、校验用户身份；</p></li><li><p>查询缓存：查询语句如果命中查询缓存则直接返回，否则继续往下执行。</p><p>MySQL 8.0 已删除该模块；</p></li><li><p>解析 SQL，通过解析器对 SQL 查询语句进行词法分析、语法分析，然后构建语法树，方便后续模块读取表名、字段、语句类型；</p></li><li><p>执行 SQL：</p></li><li><p>预处理阶段：</p><ul><li>检查表或字段是否存在；</li><li>将 <code>select *</code> 中的 <code>*</code> 符号扩展为表上的所有列。</li></ul></li><li><p>优化阶段：基于查询成本考虑， 选择索引，产生查询成本最小的执行计划；</p></li><li><p>执行阶段：根据执行计划执行 SQL 查询语句，从存储引擎读取记录并返回；</p></li></ol><h2 id="查询过程" tabindex="-1"><a class="header-anchor" href="#查询过程"><span>查询过程</span></a></h2><ul><li><p>查询语句的执行流程如下：</p><p>权限校验（如果命中缓存）---&gt;查询缓存---&gt;分析器---&gt;优化器---&gt;权限校验---&gt;执行器---&gt;引擎</p></li><li><p>更新语句执行流程如下：</p><p>分析器----&gt;权限校验----&gt;执行器---&gt;引擎---redo log(prepare 状态)---&gt;binlog---&gt;redo log(commit 状态)</p></li></ul><p>权限校验的时机</p><ul><li><p>连接器</p></li><li><p>命中缓存时</p></li><li><p>执行器、优化器完毕后</p><p>如果没有权限就会返回错误信息，如果有权限就会调用数据库引擎接口，返回引擎的执行结果。</p></li></ul><p>更新语句涉及的两阶段提交</p><p>如果采用 redo log 两阶段提交的方式就不一样了，写完 binlog 后，然后再提交 redo log 就会防止出现上述的问题，从而保证了数据的一致性。</p><p>那么问题来了，有没有一个极端的情况呢？</p><p>假设 redo log 处于预提交状态，binlog 也已经写完了，这个时候发生了异常重启会怎么样呢？ 这个就要依赖于 MySQL 的处理机制了，MySQL 的处理过程如下：</p><ul><li>判断 redo log 是否完整，如果判断是完整的，就立即提交。</li><li>如果 redo log 只是预提交但不是 commit 状态，这个时候就会去判断 binlog 是否完整，如果完整就提交 redo log, 不完整就回滚事务。</li></ul><p>这样就解决了数据一致性的问题。</p>`,18)]))}const r=l(a,[["render",t],["__file","1. 体系结构.html.vue"]]),h=JSON.parse(`{"path":"/cs/database/mysql/engine/1.%20%E4%BD%93%E7%B3%BB%E7%BB%93%E6%9E%84.html","title":"体系结构","lang":"en-US","frontmatter":{"description":"体系结构 查询语句执行流程 Server 层 连接层：连接器 连接、授权认证 连接超上限：Too many connections 服务层 查询缓存（MySQL 8 移除，5.7 建议关闭） 解析器/分析器 优化器/查询优化器 执行器 存储引擎层 引擎层 可插拔存储引擎 实现：内存、索引和存储管理 存储层 系统文件 文件和日志 img 执行过程 执行一...","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/cs/database/mysql/engine/1.%20%E4%BD%93%E7%B3%BB%E7%BB%93%E6%9E%84.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"体系结构"}],["meta",{"property":"og:description","content":"体系结构 查询语句执行流程 Server 层 连接层：连接器 连接、授权认证 连接超上限：Too many connections 服务层 查询缓存（MySQL 8 移除，5.7 建议关闭） 解析器/分析器 优化器/查询优化器 执行器 存储引擎层 引擎层 可插拔存储引擎 实现：内存、索引和存储管理 存储层 系统文件 文件和日志 img 执行过程 执行一..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/davidliuk/images@master/blog/mysql%E6%9F%A5%E8%AF%A2%E6%B5%81%E7%A8%8B.png"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-05-08T07:35:02.000Z"}],["meta",{"property":"article:modified_time","content":"2024-05-08T07:35:02.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"体系结构\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/davidliuk/images@master/blog/mysql%E6%9F%A5%E8%AF%A2%E6%B5%81%E7%A8%8B.png\\",\\"https://oss.javaguide.cn/javaguide/13526879-3037b144ed09eb88.png\\"],\\"dateModified\\":\\"2024-05-08T07:35:02.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[{"level":2,"title":"执行过程","slug":"执行过程","link":"#执行过程","children":[]},{"level":2,"title":"查询过程","slug":"查询过程","link":"#查询过程","children":[]}],"git":{"createdTime":1669446166000,"updatedTime":1715153702000,"contributors":[{"name":"刘大维","email":"davidliu@liudaweideMacBook-Pro.local","commits":5},{"name":"davidliuk","email":"l729641074@163.com","commits":4}]},"readingTime":{"minutes":2.4,"words":719},"filePathRelative":"cs/database/mysql/engine/1. 体系结构.md","localizedDate":"November 26, 2022","excerpt":"\\n<p><img src=\\"https://cdn.jsdelivr.net/gh/davidliuk/images@master/blog/mysql查询流程.png\\" alt=\\"查询语句执行流程\\" loading=\\"lazy\\"></p>\\n<ul>\\n<li>\\n<p>Server 层</p>\\n<ol>\\n<li>\\n<p>连接层：连接器</p>\\n<p>连接、授权认证</p>\\n<blockquote>\\n<p>连接超上限：Too many connections</p>\\n<div class=\\"language-sql line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"sql\\" data-title=\\"sql\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">SHOW VARIABLES </span><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">LIKE</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> '%max_connections%'</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">; </span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">set</span><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\"> GLOBAL</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> max_connections</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#56B6C2\\">=</span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\">500</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">;</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div></blockquote>\\n</li>\\n<li>\\n<p>服务层</p>\\n<ol>\\n<li>查询缓存（MySQL 8 移除，5.7 建议关闭）</li>\\n<li>解析器/分析器</li>\\n<li>优化器/查询优化器</li>\\n<li>执行器</li>\\n</ol>\\n</li>\\n</ol>\\n</li>\\n<li>\\n<p>存储引擎层</p>\\n<ol>\\n<li>\\n<p>引擎层</p>\\n<p>可插拔存储引擎</p>\\n<p>实现：内存、索引和存储管理</p>\\n</li>\\n<li>\\n<p>存储层</p>\\n<ul>\\n<li>系统文件</li>\\n<li>文件和日志</li>\\n</ul>\\n</li>\\n</ol>\\n</li>\\n</ul>","autoDesc":true}`);export{r as comp,h as data};
