import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,d as n,o as l}from"./app-PqS9YW_3.js";const t={};function e(h,i){return l(),a("div",null,i[0]||(i[0]=[n(`<h1 id="pagination" tabindex="-1"><a class="header-anchor" href="#pagination"><span>Pagination</span></a></h1><h3 id="深度分页" tabindex="-1"><a class="header-anchor" href="#深度分页"><span>深度分页</span></a></h3><p>MySQL并不是跳过offset行，而是取offset+N行，然后返回放弃前offset行，返回N行，那当offset特别大的时候，效率就非常的低下，要么控制返回的总页数，要么对超过特定阈值的页数进行SQL改写。</p><p>查询偏移量过大的场景我们称为深度分页，这会导致查询性能较低，例如：</p><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"># MySQL 在无法利用索引的情况下跳过1000000条记录后，再获取10条记录</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">SELECT</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> * </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">FROM</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> t_order </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">ORDER BY</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> id </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">LIMIT</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1000000</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">10</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="mysql-深度分页优化" tabindex="-1"><a class="header-anchor" href="#mysql-深度分页优化"><span>MySQL 深度分页优化</span></a></h2><p>这里以 MySQL 数据库为例介绍一下如何优化深度分页。</p><h3 id="范围查询" tabindex="-1"><a class="header-anchor" href="#范围查询"><span>范围查询</span></a></h3><p>当可以保证 ID 的连续性时，根据 ID 范围进行分页是比较好的解决方案：</p><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"># 查询指定 ID 范围的数据</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">SELECT</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> * </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">FROM</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> t_order </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">WHERE</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> id </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&gt;</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 100000</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> AND</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> id </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&lt;=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 100010</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> ORDER BY</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> id</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"># 也可以通过记录上次查询结果的最后一条记录的ID进行下一页的查询：</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">SELECT</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> * </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">FROM</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> t_order </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">WHERE</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> id </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&gt;</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 100000</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> LIMIT</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 10</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这种基于 ID 范围的深度分页优化方式存在很大限制：</p><ol><li><strong>ID 连续性要求高</strong>: 实际项目中，数据库自增 ID 往往因为各种原因（例如删除数据、事务回滚等）导致 ID 不连续，难以保证连续性。</li><li><strong>排序问题</strong>: 如果查询需要按照其他字段（例如创建时间、更新时间等）排序，而不是按照 ID 排序，那么这种方法就不再适用。</li><li><strong>并发场景</strong>: 在高并发场景下，单纯依赖记录上次查询的最后一条记录的 ID 进行分页，容易出现数据重复或遗漏的问题。</li></ol><h3 id="子查询" tabindex="-1"><a class="header-anchor" href="#子查询"><span>子查询</span></a></h3><p>我们先查询出 limit 第一个参数对应的主键值，再根据这个主键值再去过滤并 limit，这样效率会更快一些。</p><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"># 通过子查询来获取 id 的起始值，把 </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">limit</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1000000</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> 的条件转移到子查询</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">SELECT</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> * </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">FROM</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> t_order </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">WHERE</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> id </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&gt;=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">SELECT</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> id </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">FROM</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> t_order </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">limit</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1000000</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">LIMIT</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 10</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>工作原理</strong>:</p><ol><li>子查询 <code>(SELECT id FROM t_order LIMIT 1000000, 1)</code> 会利用主键索引快速定位到第 1000001 条记录，并返回其 ID 值。</li><li>主查询 <code>SELECT * FROM t_order WHERE id &gt;= ... LIMIT 10</code> 将子查询返回的起始 ID 作为过滤条件，使用 <code>id &gt;=</code> 获取从该 ID 开始的后续 10 条记录。</li></ol><p>不过，子查询的结果会产生一张新表，会影响性能，应该尽量避免大量使用子查询。并且，这种方法只适用于 ID 是正序的。在复杂分页场景，往往需要通过过滤条件，筛选到符合条件的 ID，此时的 ID 是离散且不连续的。</p><p>当然，我们也可以利用子查询先去获取目标分页的 ID 集合，然后再根据 ID 集合获取内容，但这种写法非常繁琐，不如使用 INNER JOIN 延迟关联。</p><h3 id="延迟关联" tabindex="-1"><a class="header-anchor" href="#延迟关联"><span>延迟关联</span></a></h3><p>延迟关联与子查询的优化思路类似，都是通过将 <code>LIMIT</code> 操作转移到主键索引树上，减少回表次数。相比直接使用子查询，延迟关联通过 <code>INNER JOIN</code> 将子查询结果集成到主查询中，避免了子查询可能产生的临时表。在执行 <code>INNER JOIN</code> 时，MySQL 优化器能够利用索引进行高效的连接操作（如索引扫描或其他优化策略），因此在深度分页场景下，性能通常优于直接使用子查询。</p><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">-- 使用 INNER JOIN 进行延迟关联</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">SELECT</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> t1.*</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">FROM</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> t_order t1</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">INNER JOIN</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">SELECT</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> id </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">FROM</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> t_order </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">LIMIT</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1000000</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">10</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) t2 </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">ON</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> t1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">id</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> t2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">id</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>除了使用 INNER JOIN 之外，还可以使用逗号连接子查询。</p><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">-- 使用逗号进行延迟关联</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">SELECT</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> t1.* </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">FROM</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> t_order t1,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">SELECT</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> id </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">FROM</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> t_order </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">limit</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1000000</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">10</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) t2</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">WHERE</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> t1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">id</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> t2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">id</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">SELECT</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> a.* </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">FROM</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> 表1 a, (</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">select</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> id </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">from</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> 表1 </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">where</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> 条件 </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">LIMIT</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 100000</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">20</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> ) b </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">where</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> a</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">id</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">b</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">id</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong>注意</strong>: 虽然逗号连接子查询也能实现类似的效果，但为了代码可读性和可维护性，建议使用更规范的 <code>INNER JOIN</code> 语法。</p><p><strong>工作原理</strong>:</p><ol><li>子查询 <code>(SELECT id FROM t_order LIMIT 1000000, 10)</code> 利用主键索引快速定位目标分页的 10 条记录的 ID。</li><li>通过 <code>INNER JOIN</code> 将子查询结果与主表 <code>t_order</code> 关联，获取完整的记录数据。</li></ol><h3 id="覆盖索引" tabindex="-1"><a class="header-anchor" href="#覆盖索引"><span>覆盖索引</span></a></h3><p>索引中已经包含了所有需要获取的字段的查询方式称为覆盖索引。</p><p><strong>覆盖索引的好处：</strong></p><ul><li><strong>避免 InnoDB 表进行索引的二次查询，也就是回表操作:</strong> InnoDB 是以聚集索引的顺序来存储的，对于 InnoDB 来说，二级索引在叶子节点中所保存的是行的主键信息，如果是用二级索引查询数据的话，在查找到相应的键值后，还要通过主键进行二次查询才能获取我们真实所需要的数据。而在覆盖索引中，二级索引的键值中可以获取所有的数据，避免了对主键的二次查询（回表），减少了 IO 操作，提升了查询效率。</li><li><strong>可以把随机 IO 变成顺序 IO 加快查询效率:</strong> 由于覆盖索引是按键值的顺序存储的，对于 IO 密集型的范围查找来说，对比随机从磁盘读取每一行的数据 IO 要少的多，因此利用覆盖索引在访问时也可以把磁盘的随机读取的 IO 转变成索引查找的顺序 IO。</li></ul><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"># 如果只需要查询 id, code, </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">type</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> 这三列，可建立 code 和 </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">type</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> 的覆盖索引</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">SELECT</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> id, code, </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">type</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> FROM</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> t_order</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">ORDER BY</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> code</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">LIMIT</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1000000</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">10</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>⚠️注意</strong>:</p><ul><li>当查询的结果集占表的总行数的很大一部分时，MySQL 查询优化器可能选择放弃使用索引，自动转换为全表扫描。</li><li>虽然可以使用 <code>FORCE INDEX</code> 强制查询优化器走索引，但这种方式可能会导致查询优化器无法选择更优的执行计划，效果并不总是理想。</li></ul>`,35)]))}const d=s(t,[["render",e],["__file","pagination.html.vue"]]),r=JSON.parse(`{"path":"/cs/database/sql/optimisation/pagination.html","title":"Pagination","lang":"en-US","frontmatter":{"description":"Pagination 深度分页 MySQL并不是跳过offset行，而是取offset+N行，然后返回放弃前offset行，返回N行，那当offset特别大的时候，效率就非常的低下，要么控制返回的总页数，要么对超过特定阈值的页数进行SQL改写。 查询偏移量过大的场景我们称为深度分页，这会导致查询性能较低，例如： MySQL 深度分页优化 这里以 MyS...","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/cs/database/sql/optimisation/pagination.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"Pagination"}],["meta",{"property":"og:description","content":"Pagination 深度分页 MySQL并不是跳过offset行，而是取offset+N行，然后返回放弃前offset行，返回N行，那当offset特别大的时候，效率就非常的低下，要么控制返回的总页数，要么对超过特定阈值的页数进行SQL改写。 查询偏移量过大的场景我们称为深度分页，这会导致查询性能较低，例如： MySQL 深度分页优化 这里以 MyS..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-11-22T03:06:21.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-22T03:06:21.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Pagination\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-22T03:06:21.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[{"level":3,"title":"深度分页","slug":"深度分页","link":"#深度分页","children":[]},{"level":2,"title":"MySQL 深度分页优化","slug":"mysql-深度分页优化","link":"#mysql-深度分页优化","children":[{"level":3,"title":"范围查询","slug":"范围查询","link":"#范围查询","children":[]},{"level":3,"title":"子查询","slug":"子查询","link":"#子查询","children":[]},{"level":3,"title":"延迟关联","slug":"延迟关联","link":"#延迟关联","children":[]},{"level":3,"title":"覆盖索引","slug":"覆盖索引","link":"#覆盖索引","children":[]}]}],"git":{"createdTime":1732244781000,"updatedTime":1732244781000,"contributors":[{"name":"David Liu","email":"liudawei@seas.upenn.edu","commits":1}]},"readingTime":{"minutes":5.1,"words":1531},"filePathRelative":"cs/database/sql/optimisation/pagination.md","localizedDate":"November 22, 2024","excerpt":"\\n<h3>深度分页</h3>\\n<p>MySQL并不是跳过offset行，而是取offset+N行，然后返回放弃前offset行，返回N行，那当offset特别大的时候，效率就非常的低下，要么控制返回的总页数，要么对超过特定阈值的页数进行SQL改写。</p>\\n<p>查询偏移量过大的场景我们称为深度分页，这会导致查询性能较低，例如：</p>\\n<div class=\\"language-sql line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"sql\\" data-title=\\"sql\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"># MySQL 在无法利用索引的情况下跳过1000000条记录后，再获取10条记录</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">SELECT</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> * </span><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">FROM</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> t_order </span><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">ORDER BY</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> id </span><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">LIMIT</span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\"> 1000000</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">, </span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\">10</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{d as comp,r as data};
