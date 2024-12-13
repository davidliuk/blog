import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,d as e,o as n}from"./app-DIqbhby7.js";const l={};function t(h,s){return n(),a("div",null,s[0]||(s[0]=[e(`<h1 id="子查询" tabindex="-1"><a class="header-anchor" href="#子查询"><span>子查询</span></a></h1><p><a href="https://blog.csdn.net/qq_38643434/article/details/81490053" target="_blank" rel="noopener noreferrer">select子查询</a></p><p>子查询放在 select 里面，如果返回值</p><p>子查询的特质：子查询数据出虚表嵌套查询虚表，如果查询不到会返回null</p><h2 id="cte" tabindex="-1"><a class="header-anchor" href="#cte"><span>CTE</span></a></h2><p>WITH 语句通常被称为通用表表达式（Common Table Expressions）即 CTEs。</p><p>WITH 语句作为一个辅助语句依附于主语句，WITH语句和主语句都可以是SELECT，INSERT，UPDATE，DELETE中的任何一种语句。</p><ul><li>A special type of subquery that is declared ahead of your main query.（在主查询之前声明。）</li><li>Named and referenced later in FROM statement.（在FROM语句中按名称引用它，就像它是数据库中的任何其他表一样。）</li></ul><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">WITH</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">cte_name1</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">[(column1, column2, ...)]</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> AS</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  CTE_query_definition),</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">     ...</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">cte_name2 </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">AS</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  CTE_query_definition)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">Main query</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注：可以同时定义1个或多个cte，做法是用逗号&#39;,&#39;隔开，最后一个cte后不跟&#39;,&#39;。</p><p><code>WITH</code> 关键字用于定义一个公共表表达式（CTE）或者临时命名结果集（可以视为一个临时表）。</p><p><code>temp_category</code> 是临时表的名称。</p><p><code>(category)</code> 是临时表的列名。</p><p><code>AS</code> 关键字之后是子查询，用于定义临时表的内容。在你的例子中，使用 <code>UNION ALL</code> 连接了多个 <code>SELECT</code> 查询，每个查询返回一个不同的字符串值。</p><h3 id="优点" tabindex="-1"><a class="header-anchor" href="#优点"><span>优点</span></a></h3><ul><li><p>Exceted once（仅执行一次，然后存储在内存中，可以提高执行效率）</p><ul><li>CTE is then stored in memory</li><li>Improves query performance</li></ul></li><li><p>Improving organization of long &amp; complex queries（提升复杂查询的可阅读性、可维护性）</p></li><li><p>Referencing other CTEs（可引用其他的CTE）</p></li><li><p>Referencing itself (SELF JOIN) （可自引用）</p></li></ul><h2 id="子查询-1" tabindex="-1"><a class="header-anchor" href="#子查询-1"><span>子查询</span></a></h2><ul><li>单行单列</li><li>多行单列</li><li>多行多列</li></ul><p><a href="https://www.yiibai.com/sql/sql-subquery.html" target="_blank" rel="noopener noreferrer">https://www.yiibai.com/sql/sql-subquery.html</a></p><p><strong>带有IN或NOT IN运算符的SQL子查询</strong></p><p>在前面的示例中，已经了解了子查询如何与<code>IN</code>运算符一起使用。 以下示例使用带有<code>NOT IN</code>运算符的子查询来查找未找到位置ID为<code>1700</code>的所有员工：</p><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">SELECT</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    employee_id, first_name, last_name</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">FROM</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    employees</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">WHERE</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    department_id </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">NOT</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> IN</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">SELECT</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">            department_id</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        FROM</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">            departments</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        WHERE</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">            location_id </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1700</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">ORDER BY</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> first_name , last_name;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>带有比较运算符的SQL子查询</strong></p><p>以下语法说明了子查询如何与比较运算符一起使用：</p><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">comparison_operator (subquery)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>比较运算符是这些运算符之一：</p><ul><li>等于(<code>=</code>)</li><li>大于(<code>&gt;</code>)</li><li>小于(<code>&lt;</code>)</li><li>大于或等于(<code>&gt;=</code>)</li><li>小于等于(<code>&lt;=</code>)</li><li>不相等(<code>!=</code>)或(<code>&lt;&gt;</code>)</li></ul><p>以下示例查找薪水最高的员工：</p><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">SELECT</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    employee_id, first_name, last_name, salary</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">FROM</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    employees</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">WHERE</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    salary </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">SELECT</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> </span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">            MAX</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(salary)</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        FROM</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">            employees)</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">ORDER BY</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> first_name, last_name;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>带有EXISTS或NOT EXISTS运算符的SQL子查询</strong></p><p><code>EXISTS</code>运算符检查子查询返回的行是否存在。 如果子查询包含任何行，则返回<code>true</code>。 否则，它返回<code>false</code>。</p><p><code>EXISTS</code>运算符的语法如下：</p><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">EXISTSE  (subquery)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><code>NOT EXISTS</code>运算符与<code>EXISTS</code>运算符相反。</p><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">NOT</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> EXISTS</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (subquery)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>以下示例查找至少有一名员工的薪水大于<code>10000</code>的所有部门：</p><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">SELECT</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    department_name</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">FROM</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    departments d</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">WHERE</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    EXISTS</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">( </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">SELECT</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> </span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">            1</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        FROM</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">            employees e</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        WHERE</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">            salary </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&gt;</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 10000</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">                AND</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> e</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">department_id</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> d</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">department_id</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">ORDER BY</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> department_name;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>2.4. 带有ALL运算符的SQL子查询</strong><br> 子查询与<code>ALL</code>运算符一起使用时的语法如下：</p><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">comparison_operator ALL (subquery)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>如果<code>x</code>大于子查询返回的每个值，则以下条件的计算结果为<code>true</code>。</p><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">x </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&gt;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> ALL (subquery)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>假设子查询返回三个值：<code>1</code>,<code>2</code>和<code>3</code>。 如果<code>x</code>大于<code>3</code>，则以下条件的计算结果为<code>true</code>。</p><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">x </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&gt;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> ALL (</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">3</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>以下查询使用<a href="http://www.yiibai.com/sql/sql-group-by.html" target="_blank" rel="noopener noreferrer">GROUP BY</a>子句和<a href="http://www.yiibai.com/sql-aggregate-functions/sql/sql-min.html" target="_blank" rel="noopener noreferrer">MIN()</a>函数按部门查找最低工资：</p><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">SELECT</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    employee_id, first_name, last_name, salary</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">FROM</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    employees</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">WHERE</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    salary </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&gt;=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> ALL (</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">SELECT</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> </span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">            MIN</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(salary)</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        FROM</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">            employees</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        GROUP BY</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> department_id)</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">ORDER BY</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> first_name , last_name;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>带有ANY运算符的SQL子查询</strong><br> 以下是带有<code>ANY</code>运算符的子查询的语法：</p><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">comparison_operator ANY (subquery)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>例如，如果<code>x</code>大于子查询返回的任何值，则以下条件的计算结果为<code>true</code>。 因此，如果<code>x</code>大于<code>1</code>，则条件<code>x&gt; SOME(1,2,3)</code>的计算结果为<code>true</code>。</p><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">x </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&gt;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> ANY (subquery)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>请注意，<code>SOME</code>运算符是<code>ANY</code>运算符的同义词，因此可以互换使用它们。</p><p>以下查询查找薪水大于或等于每个部门的最高薪水的所有员工。</p><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">SELECT</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    employee_id, first_name, last_name, salary</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">FROM</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    employees</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">WHERE</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    salary </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&gt;=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> SOME (</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">SELECT</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> </span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">            MAX</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(salary)</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        FROM</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">            employees</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        GROUP BY</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> department_id);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>FROM子句中的SQL子查询</strong></p><p>可以在<code>SELECT</code>语句的<code>FROM</code>子句中使用子查询，如下所示：</p><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">SELECT</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    *</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">FROM</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    (subquery) </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">AS</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> table_name</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在此语法中，<strong>表别名是必需的</strong>，因为<code>FROM</code>子句中的所有表都必须具有名称。<br> 请注意，<code>FROM</code>子句中指定的子查询在MySQL中称为派生表，在Oracle中称为内联视图。</p><p>以下语句返回每个部门的平均工资：</p><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">SELECT</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> </span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">    AVG</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(salary) average_salary</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">FROM</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    employees</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">GROUP BY</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> department_id;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>SELECT子句中的SQL子查询</strong></p><p>可以在<code>SELECT</code>子句中使用表达式的任何位置使用子查询。 以下示例查找所有员工的工资，平均工资以及每个员工的工资与平均工资之间的差值。</p><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">SELECT</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    employee_id,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    first_name,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    last_name,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    salary,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    (</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">SELECT</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> </span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">            ROUND</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">AVG</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(salary), </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        FROM</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">            employees) average_salary,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    salary - (</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">SELECT</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> </span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">            ROUND</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">AVG</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(salary), </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        FROM</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">            employees) difference</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">FROM</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    employees</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">ORDER BY</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> first_name , last_name;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,61)]))}const r=i(l,[["render",t],["__file","subquery.html.vue"]]),k=JSON.parse(`{"path":"/cs/database/sql/basic/subquery.html","title":"子查询","lang":"en-US","frontmatter":{"description":"子查询 select子查询 子查询放在 select 里面，如果返回值 子查询的特质：子查询数据出虚表嵌套查询虚表，如果查询不到会返回null CTE WITH 语句通常被称为通用表表达式（Common Table Expressions）即 CTEs。 WITH 语句作为一个辅助语句依附于主语句，WITH语句和主语句都可以是SELECT，INSERT...","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/cs/database/sql/basic/subquery.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"子查询"}],["meta",{"property":"og:description","content":"子查询 select子查询 子查询放在 select 里面，如果返回值 子查询的特质：子查询数据出虚表嵌套查询虚表，如果查询不到会返回null CTE WITH 语句通常被称为通用表表达式（Common Table Expressions）即 CTEs。 WITH 语句作为一个辅助语句依附于主语句，WITH语句和主语句都可以是SELECT，INSERT..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-12-04T01:12:06.000Z"}],["meta",{"property":"article:modified_time","content":"2024-12-04T01:12:06.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"子查询\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-12-04T01:12:06.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[{"level":2,"title":"CTE","slug":"cte","link":"#cte","children":[{"level":3,"title":"优点","slug":"优点","link":"#优点","children":[]}]},{"level":2,"title":"子查询","slug":"子查询-1","link":"#子查询-1","children":[]}],"git":{"createdTime":1679321449000,"updatedTime":1733274726000,"contributors":[{"name":"刘大维","email":"davidliu@liudaweideMacBook-Pro.local","commits":2},{"name":"davidliuk","email":"l729641074@163.com","commits":1},{"name":"刘大维","email":"davidliu@liudaweideMacBook-Pro-3.local","commits":1}]},"readingTime":{"minutes":4.19,"words":1256},"filePathRelative":"cs/database/sql/basic/subquery.md","localizedDate":"March 20, 2023","excerpt":"\\n<p><a href=\\"https://blog.csdn.net/qq_38643434/article/details/81490053\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">select子查询</a></p>\\n<p>子查询放在 select 里面，如果返回值</p>\\n<p>子查询的特质：子查询数据出虚表嵌套查询虚表，如果查询不到会返回null</p>\\n<h2>CTE</h2>\\n<p>WITH 语句通常被称为通用表表达式（Common Table Expressions）即 CTEs。</p>\\n<p>WITH 语句作为一个辅助语句依附于主语句，WITH语句和主语句都可以是SELECT，INSERT，UPDATE，DELETE中的任何一种语句。</p>","autoDesc":true}`);export{r as comp,k as data};
