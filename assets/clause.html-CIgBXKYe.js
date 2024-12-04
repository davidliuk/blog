import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as l,d as s,o as a}from"./app-D4ZvIHfO.js";const o={};function t(d,e){return a(),l("div",null,e[0]||(e[0]=[s(`<h1 id="子句" tabindex="-1"><a class="header-anchor" href="#子句"><span>子句</span></a></h1><h3 id="书写顺序" tabindex="-1"><a class="header-anchor" href="#书写顺序"><span>书写顺序</span></a></h3><ol><li><code>WITH</code></li><li><code>SELECT</code>, <code>DISTINCT</code></li><li><code>FROM</code></li><li><code>JOIN</code>, <code>ON</code>, <code>USING</code></li><li><code>WHERE</code></li><li><code>GROUP BY</code></li><li><code>HAVING</code></li><li><code>ORDER BY</code></li><li><code>LIMIT</code></li></ol><blockquote><p>注意：必须按照 (1) - (9) 的顺序编写子句。</p></blockquote><p><a href="https://blog.csdn.net/siaok/article/details/129762384" target="_blank" rel="noopener noreferrer">https://blog.csdn.net/siaok/article/details/129762384</a></p><h3 id="执行顺序" tabindex="-1"><a class="header-anchor" href="#执行顺序"><span>执行顺序</span></a></h3><ol><li><p><code>WITH</code></p></li><li><p><code>FROM</code></p></li><li><p><code>ON</code></p></li><li><p><code>JOIN</code></p></li><li><p><code>WHERE</code></p></li><li><p><code>GROUP BY</code></p><p><code>(CUBE|ROLLUP)</code></p></li><li><p><code>HAVING</code></p></li><li><p><code>SELECT</code></p></li><li><p><code>DISTINCT</code></p></li><li><p><code>ORDER BY</code></p></li><li><p><code>LIMIT</code></p></li></ol><h3 id="from" tabindex="-1"><a class="header-anchor" href="#from"><span>FROM</span></a></h3><p>后面跟表，<strong>表示从某个表中筛选数据</strong></p><h3 id="on" tabindex="-1"><a class="header-anchor" href="#on"><span>ON</span></a></h3><ol><li>on 必须配合join使用</li><li>on 后面只写关联条件</li></ol><p>所谓关联条件是<strong>两个表的关联字段的关系</strong>，或者是一些筛选条件</p><p><strong>有n张表关联，就有n-1个关联条件</strong></p><blockquote><p>两张表关联，就有1个关联条件</p><p>三张表关联，就有2个关联条件</p></blockquote><h3 id="where" tabindex="-1"><a class="header-anchor" href="#where"><span>WHERE</span></a></h3><p>在查询结果中筛选</p><h3 id="group-by" tabindex="-1"><a class="header-anchor" href="#group-by"><span>GROUP BY</span></a></h3><p><code>WITHROLLUP</code>：加在 group by 后面，在 group 分组字段的基础上再进行统计数据。</p><p><strong>HAVING 与 WHERE</strong></p><p>在通过<code>GROUP BY</code>子句将行汇总到分组之前，<code>WHERE</code>子句将条件应用于各个行。 但是，<code>HAVING</code>子句在将行分组到组之后将条件应用于组。</p><p>因此，需要注意的是，在<code>GROUP BY</code>子句之前应用<code>WHERE</code>子句之后应用<code>HAVING</code>子句。</p><h3 id="limit" tabindex="-1"><a class="header-anchor" href="#limit"><span>LIMIT</span></a></h3><p>一个参数：返回前几个</p><p>两个参数</p><ol><li>返回几个</li><li>跳过几个</li></ol><p>limit m,n</p><p>n：表示最多该页显示几行<br> m：表示从第几行开始取记录，第一个行的索引是0<br> m = (page-1)×n, page表示第几页</p><p>select 参数 from 表格 where 条件 limit N offset M</p><ol><li><code>Limit N</code></li></ol><p>查询table_A中前 50 条数据（按gen_key倒序排列）</p><p><code>select * from table_A order by gen_key desc limit 50</code></p><ol start="2"><li><code>Limit N,M</code>, <code>Limit M offest N</code></li></ol><p>跳过前 N 条也就是说从 N+1 开始的前 M 条</p><p>offset N：跳过N条记录（必须组合使用，单独没有用）</p><p>查询 table_A 中第 11 条到 13 条数据</p><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">select</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> * </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">from</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> table_A </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">order by</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> gen_key </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">desc</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> limit</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 3</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">10</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">select</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> * </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">from</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> table_A </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">order by</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> gen_key </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">desc</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> limit</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 10</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> OFFSET </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">3</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>去除前3条记录后取出前10</p>`,37)]))}const p=i(o,[["render",t],["__file","clause.html.vue"]]),r=JSON.parse(`{"path":"/cs/database/sql/basic/clause.html","title":"子句","lang":"en-US","frontmatter":{"description":"子句 书写顺序 WITH SELECT, DISTINCT FROM JOIN, ON, USING WHERE GROUP BY HAVING ORDER BY LIMIT 注意：必须按照 (1) - (9) 的顺序编写子句。 https://blog.csdn.net/siaok/article/details/129762384 执行顺序 WIT...","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/cs/database/sql/basic/clause.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"子句"}],["meta",{"property":"og:description","content":"子句 书写顺序 WITH SELECT, DISTINCT FROM JOIN, ON, USING WHERE GROUP BY HAVING ORDER BY LIMIT 注意：必须按照 (1) - (9) 的顺序编写子句。 https://blog.csdn.net/siaok/article/details/129762384 执行顺序 WIT..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-12-04T01:12:06.000Z"}],["meta",{"property":"article:modified_time","content":"2024-12-04T01:12:06.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"子句\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-12-04T01:12:06.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[{"level":3,"title":"书写顺序","slug":"书写顺序","link":"#书写顺序","children":[]},{"level":3,"title":"执行顺序","slug":"执行顺序","link":"#执行顺序","children":[]},{"level":3,"title":"FROM","slug":"from","link":"#from","children":[]},{"level":3,"title":"ON","slug":"on","link":"#on","children":[]},{"level":3,"title":"WHERE","slug":"where","link":"#where","children":[]},{"level":3,"title":"GROUP BY","slug":"group-by","link":"#group-by","children":[]},{"level":3,"title":"LIMIT","slug":"limit","link":"#limit","children":[]}],"git":{"createdTime":1715153702000,"updatedTime":1733274726000,"contributors":[{"name":"刘大维","email":"davidliu@liudaweideMacBook-Pro-3.local","commits":1},{"name":"刘大维","email":"davidliu@liudaweideMacBook-Pro.local","commits":1}]},"readingTime":{"minutes":1.65,"words":494},"filePathRelative":"cs/database/sql/basic/clause.md","localizedDate":"May 8, 2024","excerpt":"\\n<h3>书写顺序</h3>\\n<ol>\\n<li><code>WITH</code></li>\\n<li><code>SELECT</code>, <code>DISTINCT</code></li>\\n<li><code>FROM</code></li>\\n<li><code>JOIN</code>,  <code>ON</code>, <code>USING</code></li>\\n<li><code>WHERE</code></li>\\n<li><code>GROUP BY</code></li>\\n<li><code>HAVING</code></li>\\n<li><code>ORDER BY</code></li>\\n<li><code>LIMIT</code></li>\\n</ol>","autoDesc":true}`);export{p as comp,r as data};
