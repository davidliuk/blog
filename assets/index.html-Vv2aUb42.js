import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as d,d as a,o as e}from"./app-CybQbXIt.js";const i={};function n(r,t){return e(),d("div",null,t[0]||(t[0]=[a(`<h1 id="sql" tabindex="-1"><a class="header-anchor" href="#sql"><span>SQL</span></a></h1><p><a href="https://www.w3schools.com/sql/sql_case.asp" target="_blank" rel="noopener noreferrer">https://www.w3schools.com/sql/sql_case.asp</a></p><p>练习SQL可以在<a href="https://sqlpad.io/playground/" target="_blank" rel="noopener noreferrer">网站</a>使用，有现成的一些经典表、数据和代码执行器。</p><p><strong>SQL</strong> 和 <strong>pandas</strong> 是数据分析和处理领域中的两大重要工具，各有优势和局限性。以下是对它们的详细对比：</p><hr><h3 id="_1-数据类型" tabindex="-1"><a class="header-anchor" href="#_1-数据类型"><span><strong>1. 数据类型</strong></span></a></h3><table><thead><tr><th>特性</th><th>SQL</th><th>pandas</th></tr></thead><tbody><tr><td><strong>数据来源</strong></td><td>主要操作关系型数据库中的表。</td><td>主要操作内存中的 <code>DataFrame</code>。</td></tr><tr><td><strong>数据存储</strong></td><td>数据通常存储在磁盘（数据库文件）。</td><td>数据存储在内存中（但可以从文件或数据库读取）。</td></tr><tr><td><strong>数据结构</strong></td><td>表（行和列的二维结构）。</td><td><code>DataFrame</code>（类似于表）、<code>Series</code>（类似于列）。</td></tr></tbody></table><hr><h3 id="_2-基本操作" tabindex="-1"><a class="header-anchor" href="#_2-基本操作"><span><strong>2. 基本操作</strong></span></a></h3><table><thead><tr><th>操作类型</th><th>SQL</th><th>pandas</th></tr></thead><tbody><tr><td><strong>查询</strong></td><td>使用 <code>SELECT</code> 语句查询表中的数据。</td><td>使用 <code>df.loc[]</code> 或 <code>df.query()</code> 进行查询。</td></tr><tr><td><strong>过滤</strong></td><td>使用 <code>WHERE</code> 子句进行条件过滤。</td><td>通过布尔索引或 <code>.query()</code> 实现。</td></tr><tr><td><strong>排序</strong></td><td>使用 <code>ORDER BY</code> 对结果排序。</td><td>使用 <code>df.sort_values()</code>。</td></tr><tr><td><strong>聚合</strong></td><td>使用聚合函数（如 <code>COUNT()</code>、<code>SUM()</code>）。</td><td>使用 <code>groupby().agg()</code>。</td></tr><tr><td><strong>分组</strong></td><td>使用 <code>GROUP BY</code> 语句。</td><td>使用 <code>df.groupby()</code>。</td></tr><tr><td><strong>连接</strong></td><td>使用 <code>JOIN</code> 合并多张表。</td><td>使用 <code>pd.merge()</code>。</td></tr><tr><td><strong>更新</strong></td><td>使用 <code>UPDATE</code> 修改表中的数据。</td><td>直接对 <code>DataFrame</code> 修改值，例如 <code>df.loc[]</code>。</td></tr><tr><td><strong>删除</strong></td><td>使用 <code>DELETE</code> 删除表中的行。</td><td>使用 <code>df.drop()</code> 删除行或列。</td></tr></tbody></table><hr><h3 id="_3-语言与接口" tabindex="-1"><a class="header-anchor" href="#_3-语言与接口"><span><strong>3. 语言与接口</strong></span></a></h3><table><thead><tr><th>特性</th><th>SQL</th><th>pandas</th></tr></thead><tbody><tr><td><strong>语言</strong></td><td>专门的查询语言（如 SQL 标准、MySQL、PostgreSQL）。</td><td>Python 的数据操作库。</td></tr><tr><td><strong>语法</strong></td><td>声明式，代码更接近自然语言。</td><td>编程式，需要熟悉 Python 和 pandas API。</td></tr><tr><td><strong>灵活性</strong></td><td>专注于数据库操作，主要用于 CRUD。</td><td>适合复杂的数据分析和操作流程。</td></tr></tbody></table><hr><h3 id="_4-性能" tabindex="-1"><a class="header-anchor" href="#_4-性能"><span><strong>4. 性能</strong></span></a></h3><table><thead><tr><th>特性</th><th>SQL</th><th>pandas</th></tr></thead><tbody><tr><td><strong>大数据处理</strong></td><td>设计用于处理大规模数据（TB 级别）。</td><td>适合中小规模数据处理（GB 级别），可结合 Dask 处理更大数据。</td></tr><tr><td><strong>索引优化</strong></td><td>数据库支持索引，可以大幅提升查询性能。</td><td>pandas 也支持索引，但依赖内存，性能不如数据库。</td></tr><tr><td><strong>并发性</strong></td><td>支持多用户并发操作。</td><td>主要用于单用户操作，适合个人数据分析任务。</td></tr></tbody></table><hr><h3 id="_5-聚合与分组" tabindex="-1"><a class="header-anchor" href="#_5-聚合与分组"><span><strong>5. 聚合与分组</strong></span></a></h3><table><thead><tr><th>特性</th><th>SQL</th><th>pandas</th></tr></thead><tbody><tr><td><strong>单列聚合</strong></td><td>使用 <code>SELECT SUM(column) FROM table</code>。</td><td>使用 <code>df[&#39;column&#39;].sum()</code>。</td></tr><tr><td><strong>分组聚合</strong></td><td>使用 <code>GROUP BY column</code>。</td><td>使用 <code>df.groupby(&#39;column&#39;).agg() 或 transform()</code>。</td></tr><tr><td><strong>自定义聚合</strong></td><td>较麻烦，需要编写存储过程或扩展函数。</td><td>非常灵活，支持自定义函数直接传递给 <code>agg()</code>。</td></tr></tbody></table><hr><h3 id="_6-合并数据" tabindex="-1"><a class="header-anchor" href="#_6-合并数据"><span><strong>6. 合并数据</strong></span></a></h3><table><thead><tr><th>特性</th><th>SQL</th><th>pandas</th></tr></thead><tbody><tr><td><strong>连接方式</strong></td><td>使用 <code>JOIN</code>（INNER、LEFT、RIGHT、FULL OUTER）。</td><td>使用 <code>pd.merge()</code>（支持同样的连接方式）。</td></tr><tr><td><strong>多表连接</strong></td><td>支持复杂的多表连接操作。</td><td>需要多次 <code>merge</code> 实现。</td></tr><tr><td><strong>跨表操作</strong></td><td>支持子查询和视图。</td><td>可通过合并后的 <code>DataFrame</code> 实现类似效果。</td></tr></tbody></table><hr><h3 id="_7-数据清洗" tabindex="-1"><a class="header-anchor" href="#_7-数据清洗"><span><strong>7. 数据清洗</strong></span></a></h3><table><thead><tr><th>特性</th><th>SQL</th><th>pandas</th></tr></thead><tbody><tr><td><strong>缺失值处理</strong></td><td>使用 <code>NULL</code> 和函数（如 <code>COALESCE()</code>）。</td><td>使用 <code>df.fillna()</code>、<code>df.dropna()</code>。</td></tr><tr><td><strong>列操作</strong></td><td>使用 <code>ALTER TABLE</code> 添加或删除列。</td><td>直接操作 <code>DataFrame</code> 列（如 <code>df[&#39;new_col&#39;] = ...</code>）。</td></tr><tr><td><strong>字符串操作</strong></td><td>依赖字符串函数（如 <code>SUBSTRING()</code>、<code>CONCAT()</code>）。</td><td>使用 <code>df[&#39;col&#39;].str</code> 的方法，例如 <code>str.contains()</code>。</td></tr><tr><td><strong>日期操作</strong></td><td>依赖日期函数（如 <code>DATEADD()</code>、<code>DATEDIFF()</code>）。</td><td>使用 pandas 的 <code>pd.to_datetime()</code> 和日期处理方法。</td></tr></tbody></table><hr><h3 id="_8-使用场景" tabindex="-1"><a class="header-anchor" href="#_8-使用场景"><span><strong>8. 使用场景</strong></span></a></h3><table><thead><tr><th>场景</th><th>SQL</th><th>pandas</th></tr></thead><tbody><tr><td><strong>大规模数据存储与操作</strong></td><td>SQL 是关系型数据库管理的核心工具，适合大数据分析。</td><td>适合中小规模数据操作，更灵活处理细节。</td></tr><tr><td><strong>数据清洗与预处理</strong></td><td>支持简单的数据清洗和转换。</td><td>功能强大，适合复杂的清洗任务。</td></tr><tr><td><strong>复杂分析与建模</strong></td><td>主要侧重数据的聚合和查询，不擅长建模和复杂分析。</td><td>内置许多分析工具，能与机器学习框架无缝集成。</td></tr></tbody></table><hr><h3 id="_9-结合使用" tabindex="-1"><a class="header-anchor" href="#_9-结合使用"><span><strong>9. 结合使用</strong></span></a></h3><p>在现代数据工作流中，SQL 和 pandas 常常结合使用：</p><ol><li><strong>SQL</strong>：用于从数据库提取数据，完成基础的过滤、分组和聚合。</li><li><strong>pandas</strong>：用于提取后的数据处理、清洗、分析和可视化。</li></ol><p>例如：</p><div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> pandas </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">as</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> pd</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> sqlalchemy</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 从 SQL 数据库提取数据</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">engine </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> sqlalchemy.</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF;">create_engine</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;mysql+pymysql://user:password@host/dbname&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">query </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;SELECT * FROM table WHERE column &gt; 100&quot;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">df </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> pd.</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF;">read_sql</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(query, engine)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 使用 pandas 处理提取的数据</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">df[</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;new_col&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">] </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> df[</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;existing_col&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">] </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">*</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 2</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">result </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> df.</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF;">groupby</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;group_col&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">).</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF;">agg</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">({</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;new_col&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;sum&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">})</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">print</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(result)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="总结" tabindex="-1"><a class="header-anchor" href="#总结"><span><strong>总结</strong></span></a></h3><table><thead><tr><th>对比点</th><th>SQL</th><th>pandas</th></tr></thead><tbody><tr><td><strong>擅长领域</strong></td><td>数据库查询与管理、大规模数据处理</td><td>数据分析、清洗与建模</td></tr><tr><td><strong>适用数据规模</strong></td><td>TB 级别及以上</td><td>GB 级别或更小</td></tr><tr><td><strong>执行位置</strong></td><td>数据存储于数据库</td><td>数据加载到内存</td></tr><tr><td><strong>扩展性</strong></td><td>通过存储过程、触发器扩展</td><td>结合 Python 库灵活扩展</td></tr></tbody></table><p>根据任务需求选择工具，或结合两者以实现高效工作流！</p>`,38)]))}const h=s(i,[["render",n],["__file","index.html.vue"]]),p=JSON.parse(`{"path":"/cs/database/sql/","title":"SQL","lang":"en-US","frontmatter":{"description":"SQL https://www.w3schools.com/sql/sql_case.asp 练习SQL可以在网站使用，有现成的一些经典表、数据和代码执行器。 SQL 和 pandas 是数据分析和处理领域中的两大重要工具，各有优势和局限性。以下是对它们的详细对比： 1. 数据类型 2. 基本操作 3. 语言与接口 4. 性能 5. 聚合与分组 6. ...","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/cs/database/sql/"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"SQL"}],["meta",{"property":"og:description","content":"SQL https://www.w3schools.com/sql/sql_case.asp 练习SQL可以在网站使用，有现成的一些经典表、数据和代码执行器。 SQL 和 pandas 是数据分析和处理领域中的两大重要工具，各有优势和局限性。以下是对它们的详细对比： 1. 数据类型 2. 基本操作 3. 语言与接口 4. 性能 5. 聚合与分组 6. ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-12-04T01:12:06.000Z"}],["meta",{"property":"article:modified_time","content":"2024-12-04T01:12:06.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"SQL\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-12-04T01:12:06.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[{"level":3,"title":"1. 数据类型","slug":"_1-数据类型","link":"#_1-数据类型","children":[]},{"level":3,"title":"2. 基本操作","slug":"_2-基本操作","link":"#_2-基本操作","children":[]},{"level":3,"title":"3. 语言与接口","slug":"_3-语言与接口","link":"#_3-语言与接口","children":[]},{"level":3,"title":"4. 性能","slug":"_4-性能","link":"#_4-性能","children":[]},{"level":3,"title":"5. 聚合与分组","slug":"_5-聚合与分组","link":"#_5-聚合与分组","children":[]},{"level":3,"title":"6. 合并数据","slug":"_6-合并数据","link":"#_6-合并数据","children":[]},{"level":3,"title":"7. 数据清洗","slug":"_7-数据清洗","link":"#_7-数据清洗","children":[]},{"level":3,"title":"8. 使用场景","slug":"_8-使用场景","link":"#_8-使用场景","children":[]},{"level":3,"title":"9. 结合使用","slug":"_9-结合使用","link":"#_9-结合使用","children":[]},{"level":3,"title":"总结","slug":"总结","link":"#总结","children":[]}],"git":{"createdTime":1670083932000,"updatedTime":1733274726000,"contributors":[{"name":"DavidLiu","email":"l729641074@163.com","commits":1},{"name":"davidliuk","email":"l729641074@163.com","commits":1},{"name":"刘大维","email":"davidliu@liudaweideMacBook-Pro-3.local","commits":1},{"name":"刘大维","email":"davidliu@liudaweideMacBook-Pro.local","commits":1}]},"readingTime":{"minutes":3.89,"words":1168},"filePathRelative":"cs/database/sql/README.md","localizedDate":"December 3, 2022","excerpt":"\\n<p><a href=\\"https://www.w3schools.com/sql/sql_case.asp\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://www.w3schools.com/sql/sql_case.asp</a></p>\\n<p>练习SQL可以在<a href=\\"https://sqlpad.io/playground/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">网站</a>使用，有现成的一些经典表、数据和代码执行器。</p>\\n<p><strong>SQL</strong> 和 <strong>pandas</strong> 是数据分析和处理领域中的两大重要工具，各有优势和局限性。以下是对它们的详细对比：</p>","autoDesc":true}`);export{h as comp,p as data};
