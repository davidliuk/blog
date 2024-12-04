import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,d as n,o as l}from"./app-D4ZvIHfO.js";const e={};function h(t,i){return l(),a("div",null,i[0]||(i[0]=[n('<h1 id="性能分析" tabindex="-1"><a class="header-anchor" href="#性能分析"><span>性能分析</span></a></h1><p>索引优化</p><h2 id="常用分析" tabindex="-1"><a class="header-anchor" href="#常用分析"><span>常用分析</span></a></h2><h3 id="sql-执行频率" tabindex="-1"><a class="header-anchor" href="#sql-执行频率"><span>SQL 执行频率</span></a></h3><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">show </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">[global | session]</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> status</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> like</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;Com_______&#39;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>可以查出来 sql 的执行频率，来确认数据库中哪个用的最多</p><h3 id="慢查询日志" tabindex="-1"><a class="header-anchor" href="#慢查询日志"><span>慢查询日志</span></a></h3><p>可以定位执行效率低的 SQL</p><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"># 开启慢查询日志功能</span></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">SET</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> GLOBAL</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> slow_query_log </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;ON&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"># 慢查询日志存放位置</span></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">SET</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> GLOBAL</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> slow_query_log_file </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;/var/lib/mysql/ranking-list-slow.log&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"># 无论是否超时，未被索引的记录也会记录下来。</span></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">SET</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> GLOBAL</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> log_queries_not_using_indexes </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;ON&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"># 慢查询阈值（秒），</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">SQL</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> 执行超过这个阈值将被记录在日志中。</span></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">SET</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> SESSION</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> long_query_time </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"># 慢查询仅记录扫描行数大于此参数的 </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">SQL</span></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">SET</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> SESSION</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> min_examined_row_limit </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 100</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里对日志中的信息如下：</p><ul><li>Time ：被日志记录的代码在服务器上的运行时间。</li><li>User@Host：谁执行的这段代码。</li><li>Query_time：这段代码运行时长。</li><li>Lock_time：执行这段代码时，锁定了多久。</li><li>Rows_sent：慢查询返回的记录。</li><li>Rows_examined：慢查询扫描过的行数。</li></ul><h3 id="profile-详情" tabindex="-1"><a class="header-anchor" href="#profile-详情"><span>profile 详情</span></a></h3><p>可以看到所有 sql 时间耗费在哪</p><blockquote><p>现在已经弃用了，未来可能删除，用 performance schema 替代</p></blockquote><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">select</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> @@have_profiling # 查看当前 MySQL是否支持profiling</span></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">select</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> @@profiling</span></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">set</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> @@profiling </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> # </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">set</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> profiling </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>show profiles;</code>可以展示当前 Session 下所有 SQL 语句的简要的信息包括 Query_ID（SQL 语句的 ID 编号） 和 Duration（耗时）。</li><li><code>SHOW PROFILE FOR QUERY {Query_ID}</code> 分析一条语句耗时细节，具体语法如下：</li></ul><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">SHOW </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">PROFILE</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> [type [, type]</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> ... ]</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">    [FOR QUERY n]</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">    [LIMIT row_count [OFFSET offset]</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">]</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">type</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: {</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    ALL</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  | </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">BLOCK</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> IO</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  | CONTEXT SWITCHES</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  | CPU</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  | IPC</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  | MEMORY</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  | </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">PAGE</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> FAULTS</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  | SOURCE</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  | SWAPS</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="explain-执行计划" tabindex="-1"><a class="header-anchor" href="#explain-执行计划"><span>explain 执行计划</span></a></h2><p><strong>执行计划</strong> 是指一条 SQL 语句在经过 <strong>MySQL 查询优化器</strong> 优化会后，具体的执行方式。</p><p>执行计划通常用于 SQL 性能分析、优化等场景。通过 <code>EXPLAIN</code> 的结果，可以了解到如数据表的查询顺序、数据查询操作的操作类型、哪些索引可以被命中、哪些索引实际会命中、每个数据表有多少行记录被查询等信息。具体字段介绍如下：</p><h3 id="type-重要" tabindex="-1"><a class="header-anchor" href="#type-重要"><span>type（重要）</span></a></h3><p>查询执行的类型，描述了查询是如何执行的。所有值的顺序从最优到最差排序为：</p><p>system &gt; const &gt; eq_ref &gt; ref &gt; fulltext &gt; ref_or_null &gt; index_merge &gt; unique_subquery &gt; index_subquery &gt; range &gt; index &gt; ALL</p><p>常见的几种类型具体含义如下：</p><ul><li><strong>system</strong>：如果表使用的引擎对于表行数统计是精确的（如：MyISAM），且表中只有一行记录的情况下，访问方法是 system ，是 const 的一种特例。</li><li><strong>const</strong>：表中最多只有一行匹配的记录，一次查询就可以找到，常用于使用<strong>主键或唯一索引</strong>的所有字段作为查询条件。</li><li><strong>eq_ref</strong>：唯一索引扫描，当连表查询时，前一张表的行在当前这张表中只有一行与之对应。是除了 system 与 const 之外最好的 join 方式，常用于使用<strong>主键或唯一索引</strong>的所有字段作为连表条件。</li><li><strong>ref</strong>：非唯一索引扫描，使用普通索引作为查询条件，查询结果可能找到多个符合条件的行。</li><li><strong>index_merge</strong>：当查询条件使用了多个索引时，表示开启了 Index Merge 优化，此时执行计划中的 key 列列出了使用到的索引。</li><li><strong>range</strong>：对索引列进行范围查询，执行计划中的 key 列表示哪个索引被使用了。</li><li><strong>index</strong>：全索引扫描查询<strong>遍历</strong>了整棵索引树，索引一般在内存中，速度更快。</li><li><strong>ALL</strong>：全表扫描。</li></ul><h3 id="key-重要" tabindex="-1"><a class="header-anchor" href="#key-重要"><span>key（重要）</span></a></h3><p>key 列表示 MySQL 实际使用到的索引。如果为 NULL，则表示未用到索引。</p><h3 id="extra-重要" tabindex="-1"><a class="header-anchor" href="#extra-重要"><span>Extra（重要）</span></a></h3><p>这列包含了 MySQL 解析查询的额外信息，通过这些信息，可以更准确的理解 MySQL 到底是如何执行查询的。常见的值如下：</p><ul><li><strong>Using filesort</strong>：在排序时使用了外部的索引排序，没有用到表内索引进行排序。</li><li><strong>Using temporary</strong>：MySQL 需要创建临时表来存储查询的结果，常见于 ORDER BY 和 GROUP BY。</li><li><strong>Using index</strong>：表明查询使用了覆盖索引，不用回表，查询效率非常高。</li><li><strong>Using index condition</strong>：表示查询优化器选择使用了索引条件下推这个特性。</li><li><strong>Using where</strong>：表明查询使用了 WHERE 子句进行条件过滤。一般在没有使用到索引的时候会出现。</li><li><strong>Using join buffer (Block Nested Loop)</strong>：连表查询的方式，表示当被驱动表的没有使用索引的时候，MySQL 会先将驱动表读出来放到 join buffer 中，再遍历被驱动表与驱动表进行查询。</li></ul><p>这里提醒下，当 Extra 列包含 Using filesort 或 Using temporary 时，MySQL 的性能可能会存在问题，需要尽可能避免。</p><h2 id="性能优化方法" tabindex="-1"><a class="header-anchor" href="#性能优化方法"><span>性能优化方法</span></a></h2><h3 id="避免使用-select" tabindex="-1"><a class="header-anchor" href="#避免使用-select"><span>避免使用 <code>SELECT *</code></span></a></h3><ul><li><p>SELECT * 会消耗更多的 CPU。</p></li><li><p>SELECT * 无用字段增加网络带宽资源消耗，增加数据传输时间，尤其是大字段（如 varchar、blob、text）。</p></li><li><p>SELECT * 无法使用 MySQL 优化器覆盖索引的优化</p><p>基于 MySQL 优化器的“覆盖索引”策略效率极高，业界极为推荐的查询优化方式</p></li><li><p>SELECT &lt;字段列表&gt; 可减少表结构变更带来的影响。</p></li></ul><h3 id="分页优化" tabindex="-1"><a class="header-anchor" href="#分页优化"><span>分页优化</span></a></h3><p>普通的分页在数据量小的时候耗费时间还是比较短的。如果数据量变大，达到百万甚至是千万级别，普通的分页耗费的时间就非常长了。</p><p>优化超多分页场景可以利用：</p><ul><li>延迟关联</li><li>子查询</li></ul><p>子查询：</p><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">SELECT</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> `score`</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">`name`</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> FROM</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> `cus_order`</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> WHERE</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> id </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&gt;=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">SELECT</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> id </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">FROM</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> `cus_order`</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> LIMIT</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1000000</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">LIMIT</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 10</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>我们先查询出 limit 第一个参数对应的主键值，再根据这个主键值再去过滤并 limit，这样效率会更快。</p><p>不过，子查询的结果会产生一张新表，会影响性能，应该尽量避免大量使用子查询。</p><p>延迟查询：</p><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">SELECT</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> `score`</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">`name`</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> FROM</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> `cus_order`</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> a, (</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">SELECT</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> id </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">from</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> `cus_order`</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> ORDER BY</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> `score`</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> DESC</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> LIMIT</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1000000</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">10</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) b </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">where</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> a</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">id</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> b</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">id</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="尽量避免多表做-join" tabindex="-1"><a class="header-anchor" href="#尽量避免多表做-join"><span>尽量避免多表做 join</span></a></h3><p>阿里巴巴《Java 开发手册》中有这样一段描述：</p><p>【强制】超过三个表禁止 join。需要 join 的字段，数据类型保持绝对一致;多表关联查询时，保证被关联 的字段需要有索引。</p><p>join 的效率比较低，主要原因是因为其使用嵌套循环（Nested Loop）来实现关联查询，三种不同的实现效率都不是很高：</p><ul><li>Simple Nested-Loop Join ：没有进过优化，直接使用笛卡尔积实现 join，逐行遍历/全表扫描，效率最低。</li><li>Block Nested-Loop Join ：利用 JOIN BUFFER 进行优化，性能受到 JOIN BUFFER 大小的影响，相比于 Simple Nested-Loop Join 性能有所提升。不过，如果两个表的数据过大的话，无论如何优化，Block Nested-Loop Join 对性能的提升都非常有限。</li><li>Index Nested-Loop Join ：在必要的字段上增加索引，使 join 的过程中可以使用到这个索引，这样可以让 Block Nested-Loop Join 转换为 Index Nested-Loop Join，性能得到进一步提升。</li></ul><p>实际业务场景避免多表 join 常见的做法有两种：</p><ol><li>单表查询后在内存中自己做关联 ：对数据库做单表查询，再根据查询结果进行二次查询，以此类推，最后再进行关联。</li><li>数据冗余，把一些重要的数据在表中做冗余，尽可能地避免关联查询。很笨的一种做法，表结构比较稳定的情况下才会考虑这种做法。进行冗余设计之前，思考一下自己的表结构设计的是否有问题。</li></ol><h3 id="批量操作" tabindex="-1"><a class="header-anchor" href="#批量操作"><span>批量操作</span></a></h3><p>对于数据库中的数据更新，如果能使用批量操作就要尽量使用，减少请求数据库的次数，提高性能。</p><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"># 反例</span></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">INSERT INTO</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> `cus_order`</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">`id`</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">`score`</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">`name`</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">VALUES</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">426547</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;user1&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">INSERT INTO</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> `cus_order`</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">`id`</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">`score`</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">`name`</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">VALUES</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">33</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;user2&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">INSERT INTO</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> `cus_order`</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">`id`</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">`score`</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">`name`</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">VALUES</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">293854</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;user3&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"># 正例</span></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">INSERT into</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> `cus_order`</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">`id`</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">`score`</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">`name`</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">values</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">426547</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;user1&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">),(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">33</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;user2&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">),(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">293854</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;user3&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="尽量用-union-all-代替-union" tabindex="-1"><a class="header-anchor" href="#尽量用-union-all-代替-union"><span>尽量用 UNION ALL 代替 UNION</span></a></h3><p>UNION 会把两个结果集的所有数据放到临时表中后再进行去重操作，更耗时，更消耗 CPU 资源。</p><p>UNION ALL 不会再对结果集进行去重操作，获取到的数据包含重复的项。</p><p>不过，如果实际业务场景中不允许产生重复数据的话，还是可以使用 UNION。</p><h3 id="正确使用索引" tabindex="-1"><a class="header-anchor" href="#正确使用索引"><span>正确使用索引</span></a></h3><h4 id="选择合适的字段创建索引" tabindex="-1"><a class="header-anchor" href="#选择合适的字段创建索引"><span>选择合适的字段创建索引</span></a></h4><ul><li>不为 NULL 的字段 ：索引字段的数据应该尽量不为 NULL，因为对于数据为 NULL 的字段，数据库较难优化。如果字段频繁被查询，但又避免不了为 NULL，建议使用 0,1,true,false 这样语义较为清晰的短值或短字符作为替代。</li><li>被频繁查询的字段 ：我们创建索引的字段应该是查询操作非常频繁的字段。</li><li>被作为条件查询的字段 ：被作为 WHERE 条件查询的字段，应该被考虑建立索引。</li><li>频繁需要排序的字段 ：索引已经排序，这样查询可以利用索引的排序，加快排序查询时间。</li><li>被经常频繁用于连接的字段 ：经常用于连接的字段可能是一些外键列，对于外键列并不一定要建立外键，只是说该列涉及到表与表的关系。对于频繁被连接查询的字段，可以考虑建立索引，提高多表连接查询的效率。</li></ul><h4 id="被频繁更新的字段应该慎重建立索引" tabindex="-1"><a class="header-anchor" href="#被频繁更新的字段应该慎重建立索引"><span>被频繁更新的字段应该慎重建立索引</span></a></h4><p>虽然索引能带来查询上的效率，但是维护索引的成本也是不小的。 如果一个字段不被经常查询，反而被经常修改，那么就更不应该在这种字段上建立索引了。</p><h4 id="尽可能的考虑建立联合索引而不是单列索引" tabindex="-1"><a class="header-anchor" href="#尽可能的考虑建立联合索引而不是单列索引"><span>尽可能的考虑建立联合索引而不是单列索引</span></a></h4><p>因为索引是需要占用磁盘空间的，可以简单理解为每个索引都对应着一颗 B+树。如果一个表的字段过多，索引过多，那么当这个表的数据达到一个体量后，索引占用的空间也是很多的，且修改索引时，耗费的时间也是较多的。如果是联合索引，多个字段在一个索引上，那么将会节约很大磁盘空间，且修改数据的操作效率也会提升。</p><h4 id="注意避免冗余索引" tabindex="-1"><a class="header-anchor" href="#注意避免冗余索引"><span>注意避免冗余索引</span></a></h4><p>冗余索引指的是索引的功能相同，能够命中索引(a, b)就肯定能命中索引(a) ，那么索引(a)就是冗余索引。如（name,city ）和（name ）这两个索引就是冗余索引，能够命中前者的查询肯定是能够命中后者的 在大多数情况下，都应该尽量扩展已有的索引而不是创建新索引。</p><h4 id="考虑在字符串类型的字段上使用前缀索引代替普通索引" tabindex="-1"><a class="header-anchor" href="#考虑在字符串类型的字段上使用前缀索引代替普通索引"><span>考虑在字符串类型的字段上使用前缀索引代替普通索引</span></a></h4><p>前缀索引仅限于字符串类型，较普通索引会占用更小的空间，所以可以考虑使用前缀索引带替普通索引。</p><h4 id="避免索引失效" tabindex="-1"><a class="header-anchor" href="#避免索引失效"><span>避免索引失效</span></a></h4><p>索引失效也是慢查询的主要原因之一，常见的导致索引失效的情况有下面这些：</p><h4 id="删除长期未使用的索引" tabindex="-1"><a class="header-anchor" href="#删除长期未使用的索引"><span>删除长期未使用的索引</span></a></h4><p>删除长期未使用的索引，不用的索引的存在会造成不必要的性能损耗 MySQL 5.7 可以通过查询 sys 库的 schema_unused_indexes 视图来查询哪些索引从未被使用</p><h4 id="尽量使用覆盖索引来进行查询" tabindex="-1"><a class="header-anchor" href="#尽量使用覆盖索引来进行查询"><span>尽量使用覆盖索引来进行查询</span></a></h4>',74)]))}const r=s(e,[["render",h],["__file","3. 性能分析.html.vue"]]),d=JSON.parse(`{"path":"/cs/database/mysql/index/3.%20%E6%80%A7%E8%83%BD%E5%88%86%E6%9E%90.html","title":"性能分析","lang":"en-US","frontmatter":{"description":"性能分析 索引优化 常用分析 SQL 执行频率 可以查出来 sql 的执行频率，来确认数据库中哪个用的最多 慢查询日志 可以定位执行效率低的 SQL 这里对日志中的信息如下： Time ：被日志记录的代码在服务器上的运行时间。 User@Host：谁执行的这段代码。 Query_time：这段代码运行时长。 Lock_time：执行这段代码时，锁定了多...","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/cs/database/mysql/index/3.%20%E6%80%A7%E8%83%BD%E5%88%86%E6%9E%90.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"性能分析"}],["meta",{"property":"og:description","content":"性能分析 索引优化 常用分析 SQL 执行频率 可以查出来 sql 的执行频率，来确认数据库中哪个用的最多 慢查询日志 可以定位执行效率低的 SQL 这里对日志中的信息如下： Time ：被日志记录的代码在服务器上的运行时间。 User@Host：谁执行的这段代码。 Query_time：这段代码运行时长。 Lock_time：执行这段代码时，锁定了多..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-05-08T07:35:02.000Z"}],["meta",{"property":"article:modified_time","content":"2024-05-08T07:35:02.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"性能分析\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-08T07:35:02.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[{"level":2,"title":"常用分析","slug":"常用分析","link":"#常用分析","children":[{"level":3,"title":"SQL 执行频率","slug":"sql-执行频率","link":"#sql-执行频率","children":[]},{"level":3,"title":"慢查询日志","slug":"慢查询日志","link":"#慢查询日志","children":[]},{"level":3,"title":"profile 详情","slug":"profile-详情","link":"#profile-详情","children":[]}]},{"level":2,"title":"explain 执行计划","slug":"explain-执行计划","link":"#explain-执行计划","children":[{"level":3,"title":"type（重要）","slug":"type-重要","link":"#type-重要","children":[]},{"level":3,"title":"key（重要）","slug":"key-重要","link":"#key-重要","children":[]},{"level":3,"title":"Extra（重要）","slug":"extra-重要","link":"#extra-重要","children":[]}]},{"level":2,"title":"性能优化方法","slug":"性能优化方法","link":"#性能优化方法","children":[{"level":3,"title":"避免使用 SELECT *","slug":"避免使用-select","link":"#避免使用-select","children":[]},{"level":3,"title":"分页优化","slug":"分页优化","link":"#分页优化","children":[]},{"level":3,"title":"尽量避免多表做 join","slug":"尽量避免多表做-join","link":"#尽量避免多表做-join","children":[]},{"level":3,"title":"批量操作","slug":"批量操作","link":"#批量操作","children":[]},{"level":3,"title":"尽量用 UNION ALL 代替 UNION","slug":"尽量用-union-all-代替-union","link":"#尽量用-union-all-代替-union","children":[]},{"level":3,"title":"正确使用索引","slug":"正确使用索引","link":"#正确使用索引","children":[]}]}],"git":{"createdTime":1672746435000,"updatedTime":1715153702000,"contributors":[{"name":"davidliuk","email":"l729641074@163.com","commits":4},{"name":"刘大维","email":"davidliu@liudaweideMacBook-Pro.local","commits":3}]},"readingTime":{"minutes":9.76,"words":2927},"filePathRelative":"cs/database/mysql/index/3. 性能分析.md","localizedDate":"January 3, 2023","excerpt":"\\n<p>索引优化</p>\\n<h2>常用分析</h2>\\n<h3>SQL 执行频率</h3>\\n<div class=\\"language-sql line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"sql\\" data-title=\\"sql\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">show </span><span style=\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\">[global | session]</span><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\"> status</span><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\"> like</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> 'Com_______'</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{r as comp,d as data};
