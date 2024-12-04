import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as e,d as a,o as l}from"./app-CybQbXIt.js";const n={};function t(h,i){return l(),e("div",null,i[0]||(i[0]=[a('<h1 id="使用原则" tabindex="-1"><a class="header-anchor" href="#使用原则"><span>使用原则</span></a></h1><h2 id="最左前缀法则" tabindex="-1"><a class="header-anchor" href="#最左前缀法则"><span>最左前缀法则</span></a></h2><p>联合索引，要遵守最左前缀法则。最左前缀法则指的是查询从索引的最左列开始，并且不跳过索引中的列。如果跳跃某一列，索引将部分失效(后面的字段索引失效)。</p><p>最左前缀匹配原则指的是，在使用<strong>联合索引</strong>时，<strong>MySQL</strong> 会根据联合索引中的字段顺序，从左到右依次到查询条件中去匹配，如果查询条件中存在与联合索引中最左侧字段相匹配的字段，则就会使用该字段过滤一批数据，直至联合索引中全部字段匹配完成，或者在执行过程中遇到范围查询（如 <strong><code>&gt;</code></strong>、<strong><code>&lt;</code></strong>）才会停止匹配。对于 <strong><code>&gt;=</code></strong>、<strong><code>&lt;=</code></strong>、<strong><code>BETWEEN</code></strong>、<strong><code>like</code></strong> 前缀匹配的范围查询，并不会停止匹配。所以，我们在使用联合索引时，可以将区分度高的字段放在最左边，这也可以过滤更多数据。</p><p>最左边的列必须存在，否则不走索引（索引不生效）</p><blockquote><p>右边缺省不影响，可以索引的右边部分失效只用左边匹配的索引</p></blockquote><p>InnoDB 索引的最左前缀匹配原则是指，在使用联合索引/复合索引时，只有从索引的最左侧开始的一段连续的索引列才会被用于查询和排序，而不能跳过这些列的任何一部分。这个原则的存在是因为 InnoDB 存储引擎使用 B+树来实现索引，而 B+树的特性决定了只有从根节点到叶子节点的路径上的所有节点才会被用于查询和排序，因此只有最左侧的索引列才能被用于查询和排序。</p><p>举个例子，假设有一个复合索引包含两个列（A,B），如果要查询 A=1 且 B=2 的记录，那么这个查询可以使用这个索引，因为 A 是最左侧的索引列，但如果要查询 B=2 的记录，那么这个查询就不能使用这个索引，因为 B 不是最左侧的索引列。</p><p>需要注意的是，最左前缀匹配原则只适用于复合索引，对于单列索引没有这个限制。</p><h3 id="范围查询" tabindex="-1"><a class="header-anchor" href="#范围查询"><span>范围查询</span></a></h3><p>范围查询（&gt;, &lt;）右边的列的部分索引失效</p><blockquote><p><code>&gt;=</code>, <code>&lt;=</code>不会导致索引失效，所以尽量使用这两个</p></blockquote><h3 id="模糊查询" tabindex="-1"><a class="header-anchor" href="#模糊查询"><span>模糊查询</span></a></h3><p>如果仅仅是尾部模糊查询，索引不会失效，如果头部模糊查询，索引失效</p><ul><li><code>A%</code> 可以</li><li><code>%A</code> 不行</li></ul><h3 id="隐式转换" tabindex="-1"><a class="header-anchor" href="#隐式转换"><span>隐式转换</span></a></h3><p>eg. 比较的值是纯数字的字符串但是未加单引号，不会走索引。</p><h3 id="索引下推" tabindex="-1"><a class="header-anchor" href="#索引下推"><span>索引下推</span></a></h3><p><strong>索引下推（Index Condition Pushdown）</strong> 是 <strong>MySQL 5.6</strong> 版本中提供的一项索引优化功能，可以在非聚簇索引遍历过程中，对索引中包含的字段先做判断，过滤掉不符合条件的记录，减少回表次数。</p><p>操作流程：</p><ol><li>MySQL 的 server 层首先调用存储引擎定位到第一个以 j 开头的 username。</li><li>找到记录后，存储引擎并不急着回表，而是继续判断这条记录的 age 是否等于 99，如果 age=99，再去回表，如果 age 不等于 99，就不去回表了，直接继续读取下一条记录。</li><li>存储引擎将读取到的数据行返回给 server 层，此时如果还有其他非索引的查询条件，server 层再去继续过滤，在我们上面的案例中，此时没有其他查询条件了。假设 server 层还有其他的过滤条件，并且这个过滤条件把刚刚查到的记录过滤掉了，那么就会通过记录的 next_record 属性读取下一条记录，然后重复第二步。</li></ol><p><strong>这就是索引下推（<code>index condition pushdown</code>，ICP），有效的减少了回表次数，提高了查询效率。</strong></p><h2 id="索引失效" tabindex="-1"><a class="header-anchor" href="#索引失效"><span>索引失效</span></a></h2><h3 id="索引列运算" tabindex="-1"><a class="header-anchor" href="#索引列运算"><span>索引列运算</span></a></h3><p>不要在索引列上进行运算操作，索引将失效。不能进行的运算包括：</p><ul><li>表达式</li><li>函数调用</li></ul><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">explain </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">select</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> * </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">from</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> tb_user </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">where</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> substring</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(phone,</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">10</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;15&#39;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">explain </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">select</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> * </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">from</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> tb_user </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">where</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> id + </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 5</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="索引列隐式转换" tabindex="-1"><a class="header-anchor" href="#索引列隐式转换"><span>索引列隐式转换</span></a></h3><p>MySQL 隐式转换规则：<strong>在遇到字符串和数字比较的时候，会自动把字符串转为数字，然后再进行比较</strong>。</p><p>如果索引字段是字符串类型存数字序列，查询的时候用的整数去匹配的就会发生隐式转换，会将字符串转化为整数进行比较，从而发生索引失效（因为相当于对索引列进行了 CAST 函数），例如：</p><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">explain </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">select</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> * </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">from</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> tb_user </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">where</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> phone </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 15000000000</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>但是如果索引字段是整型类型，查询条件中的输入参数即使字符串，是不会导致索引失效，还是可以走索引扫描。</p><p>例如，num1是int，num2是varchar</p><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">SELECT</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> * </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">FROM</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> `test1`</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> WHERE</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> num1 </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 10000</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">SELECT</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> * </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">FROM</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> `test1`</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> WHERE</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> num1 </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;10000&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">3</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">SELECT</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> * </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">FROM</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> `test1`</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> WHERE</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> num2 </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 10000</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">4</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">SELECT</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> * </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">FROM</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> `test1`</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> WHERE</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> num2 </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;10000&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>124 会走索引，3不会，因为3发生了索引列的隐式转换。</p><p>隐式转换：</p><ol><li>当操作符<strong>左右两边的数据类型不一致</strong>时，会发生<strong>隐式转换</strong>。</li><li>当 where 查询操作符<strong>左边为数值类型</strong>时发生了隐式转换，那么对效率影响不大，但还是不推荐这么做。</li><li>当 where 查询操作符<strong>左边为字符类型</strong>时发生了隐式转换，那么会导致索引失效，造成全表扫描效率极低。</li><li>字符串转换为数值类型时， <ul><li>非数字开头的字符串会转化为<code>0</code>，</li><li>以数字开头的字符串会截取从第一个字符到第一个非数字内容为止的值为转化结果。</li></ul></li></ol><h3 id="模糊查询-1" tabindex="-1"><a class="header-anchor" href="#模糊查询-1"><span>模糊查询</span></a></h3><p>如果仅仅是尾部模糊查询，索引不会失效，如果头部模糊查询，索引失效</p><ul><li><code>A%</code> 可以索引</li><li><code>%A</code> 不能索引</li></ul><h3 id="or-连接的条件" tabindex="-1"><a class="header-anchor" href="#or-连接的条件"><span>or 连接的条件</span></a></h3><p>用 or 分割开的条件，如果 or 前的条件中的列有索引，而后面的列中没有索引，那么涉及的索引都不会被用到。</p><blockquote><p>都有索引就可以生效</p></blockquote><h3 id="非最左匹配" tabindex="-1"><a class="header-anchor" href="#非最左匹配"><span>非最左匹配</span></a></h3><p>对主键字段建立的索引叫做聚簇索引，对普通字段建立的索引叫做二级索引。</p><p>那么<strong>多个普通字段组合在一起创建的索引就叫做联合索引</strong>，也叫组合索引。</p><p>创建联合索引时，我们需要注意创建时的顺序问题，因为联合索引 (a, b, c) 和 (c, b, a) 在使用的时候会存在差别。</p><p>联合索引要能正确使用需要遵循<strong>最左匹配原则</strong>，也就是按照最左优先的方式进行索引的匹配。</p><p>比如，如果创建了一个 <code>(a, b, c)</code> 联合索引，如果查询条件是以下这几种，就可以匹配上联合索引：</p><ul><li>where a=1；</li><li>where a=1 and b=2 and c=3；</li><li>where a=1 and b=2；</li></ul><p>需要注意的是，因为有查询优化器，所以 a 字段在 where 子句的顺序并不重要。</p><h3 id="数据分布影响" tabindex="-1"><a class="header-anchor" href="#数据分布影响"><span>数据分布影响</span></a></h3><ul><li>Index Dive：执行前优化器就率先访问索引来计算需要扫描的索引记录数量的方式</li><li>数据估算，如果太多的话，会根据统计数据去估算记录条数，计算一个模糊的值</li></ul><p>最终要得到一个需要扫描的二级索引记录条数，如果这个条数占整个记录条数的比例特别大，那么就趋向于使用全表扫描执行查询，否则趋向于使用这个索引执行查询。</p><p>如果 MySQL 评估使用索引比全表更慢，则不使用索引。根据代价（优化器自动评估）</p><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">select</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> * </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">from</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> tb_user </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">where</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> phone </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&gt;=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;150000000&#39;</span></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">select</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> * </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">from</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> tb_user </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">where</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> phone </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&gt;=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;150000015&#39;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>成本。当然，关于如何定量的计算使用某个索引执行查询的成本比较复杂，我们在小册中花了很大的篇幅来唠叨了。不过因为篇幅有限，我们在这里只准备定性的分析一下。对于使用二级索引进行查询来说，成本组成主要有两个方面：</p><ul><li><p>读取二级索引记录的成本</p></li><li><p>回表操作，也就是到聚簇索引中找到完整的用户记录的操作所付出的成本。</p></li></ul><p>要扫描的二级索引记录条数越多，那么需要执行的回表操作的次数也就越多，达到了某个比例时，使用二级索引执行查询的成本也就超过了全表扫描的成本（举一个极端的例子，比方说要扫描的全部的二级索引记录，那就要对每条记录执行一遍回表操作，自然不如直接扫描聚簇索引来的快）。</p><p>所以MySQL优化器在真正执行查询之前，对于每个可能使用到的索引来说，都会预先计算一下需要扫描的二级索引记录的数量，比方说对于下边这个查询：</p><p>在 MySQL 中使用<code>IS NULL</code>、<code>IS NOT NULL</code>、<code>!=</code>还能走索引吗？</p><p>走不走索引，只取决于一个因素，那就是成本。</p><p>我们知道，MySQL 中有一个叫做优化器的东西，他会对每一条查询 sql 做成本分析，然后根据分析结果选择是否使用索引或者全表扫描。</p><p>如果使用二级索引的成本更低，MySQL 就会倾向于使用二级索引。</p><p>如果使用二级索引扫描的行数占比过高，导致需要频繁的回表，MySQL 经过计算之后觉得走二级索引的代价太大了，就会使用全表扫描。</p><p>NOT IN操作不会使用索引将进行全表扫描。NOT IN可以NOT EXISTS代替</p><p>优化器会分析出此查询只需要查找key1值为NULL的记录，然后访问一下二级索引idx_key1，看一下值为NULL的记录有多少（如果符合条件的二级索引记录数量较少，那么统计结果是精确的，如果太多的话，会采用一定的手段计算一个模糊的值，当然算法也比较麻烦，我们就不展开说了，小册里有说），这种在查询真正执行前优化器就率先访问索引来计算需要扫描的索引记录数量的方式称之为index dive。当然，对于某些查询，比方说WHERE子句中有IN条件，并且IN条件中包含许多参数的话，比方说这样：</p><h3 id="注意" tabindex="-1"><a class="header-anchor" href="#注意"><span>注意</span></a></h3><p>如果查询的字段符合覆盖索引，即使出现了上面的情况无法走索引，也不会扫描聚簇索引（全表扫描），而且扫描二级索引树，执行计划里面type是index</p><h2 id="sql-提示" tabindex="-1"><a class="header-anchor" href="#sql-提示"><span>SQL 提示</span></a></h2><p>SQL 提示，是优化数据库的一个重要手段，简单来说，就是在 SQL 语句中加入一些人为的提示来达到优化操作的目的。</p><p>use index：建议用哪个索引</p><p><code>explain select * from tb_user use(idx_user_pro) where profession=&#39;1&#39;</code></p><p>ignore index：忽略哪个索引</p><p><code>explain select * from tb_user ignore(idx_user_pro)</code></p><p>Force index：必须用这个索引</p><h2 id="覆盖索引" tabindex="-1"><a class="header-anchor" href="#覆盖索引"><span>覆盖索引</span></a></h2><p><strong>Covering Index</strong></p><p>尽量使用覆盖索引（查询使用了索引，并且需要返回的列，在该索引中已经全部能够找到），可以减少回表查询，提高效率。</p><blockquote><p>减少<code>select *</code>。这样容易产生回表查询</p></blockquote><p>执行计划分析：</p><ul><li><code>using index condition</code>：查找使用了索引，但是需要回表查询数据</li><li><code>using where; using index</code>：查找使用了索引，并且是覆盖索引，（需要的数据都在索引列中能找到，所以不需要回表查询数据）</li></ul><p>例题：</p><p>eg. 优化如下 SQL，<code>select id, name, password from table where name = &#39;li&#39;</code>，如何建立索引效率最高</p><p>建立联合索引：(name, password)</p><h2 id="前缀索引" tabindex="-1"><a class="header-anchor" href="#前缀索引"><span>前缀索引</span></a></h2><p>当字段类型为字符串(varchar,text 等)时，有时候需要索引很长的字符串，这会让索引变得很大，查询时，浪费大量的磁盘 O,影响查询效率。此时可以只将字符串的一部分前缀，建立索引，这样可以大大节约索引空间，从而提高索引效率。</p><p>语法：</p><p><code>create index idx_xxx on table_name(column(n))</code></p><p>长度：</p><p>找区分度比较好的字符前缀个数即可，尽量短</p><p>前缀索引顾名思义就是使用某个字段中字符串的前几个字符建立索引，那我们为什么需要使用前缀来建立索引呢？</p><p>使用前缀索引是为了减小索引字段大小，可以增加一个索引页中存储的索引值，有效提高索引的查询速度。在一些大字符串的字段作为索引时，使用前缀索引可以帮助我们减小索引项的大小。</p><p>不过，前缀索引有一定的局限性，例如：</p><ul><li>order by 就无法使用前缀索引；</li><li>无法把前缀索引用作覆盖索引；</li></ul><h2 id="单列索引与联合索引" tabindex="-1"><a class="header-anchor" href="#单列索引与联合索引"><span>单列索引与联合索引</span></a></h2><ul><li>单列索引：即一个索引只包含单个列：</li><li>联合素引：即一个索引包含了多个列。</li></ul><p>在业务场景中，如果存在多个查询条件，考虑针对于查询字段建立素引时，建议建立联合索引，而非单列索引。</p><h2 id="索引优化方法" tabindex="-1"><a class="header-anchor" href="#索引优化方法"><span>索引优化方法</span></a></h2><p>尽量覆盖索引</p><h2 id="设计原则" tabindex="-1"><a class="header-anchor" href="#设计原则"><span>设计原则</span></a></h2><ol><li>针对于数据量较大，且查询比较频繁的表建立索引。</li><li>针对于常作为查询条件(where)、排序(order by)、分组(group by)操作的字段建立索引。</li><li>尽量选择区分度高的列作为索引，尽量建立<strong>唯一索引</strong>，区分度越高，使用索引的效率越高。</li><li>如果是字符串类型的字段，字段的长度较长，可以针对于字段的特点，建立前缀索引。</li><li>尽量使用联合索引，减少单列索引，查询时，联合索引很多时候可以覆盖索引，节省存储空间，避免回表，提高查询效率。</li><li>要控制索引的数量，索引并不是多多益善，索引越多，维护索引结构的代价也就越大，会影响增删改的效率。</li><li>如果索引列不能存储 NULL 值，请在创建表时使用 NOT NULL 约束它。当优化器知道每列是否包含 NULL 值时，它可以更好地确定哪个索引最有效地用于查询。</li></ol>',102)]))}const d=s(n,[["render",t],["__file","4. 使用规则.html.vue"]]),k=JSON.parse(`{"path":"/cs/database/mysql/index/4.%20%E4%BD%BF%E7%94%A8%E8%A7%84%E5%88%99.html","title":"使用原则","lang":"en-US","frontmatter":{"description":"使用原则 最左前缀法则 联合索引，要遵守最左前缀法则。最左前缀法则指的是查询从索引的最左列开始，并且不跳过索引中的列。如果跳跃某一列，索引将部分失效(后面的字段索引失效)。 最左前缀匹配原则指的是，在使用联合索引时，MySQL 会根据联合索引中的字段顺序，从左到右依次到查询条件中去匹配，如果查询条件中存在与联合索引中最左侧字段相匹配的字段，则就会使用该...","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/cs/database/mysql/index/4.%20%E4%BD%BF%E7%94%A8%E8%A7%84%E5%88%99.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"使用原则"}],["meta",{"property":"og:description","content":"使用原则 最左前缀法则 联合索引，要遵守最左前缀法则。最左前缀法则指的是查询从索引的最左列开始，并且不跳过索引中的列。如果跳跃某一列，索引将部分失效(后面的字段索引失效)。 最左前缀匹配原则指的是，在使用联合索引时，MySQL 会根据联合索引中的字段顺序，从左到右依次到查询条件中去匹配，如果查询条件中存在与联合索引中最左侧字段相匹配的字段，则就会使用该..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-05-08T07:35:02.000Z"}],["meta",{"property":"article:modified_time","content":"2024-05-08T07:35:02.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"使用原则\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-08T07:35:02.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[{"level":2,"title":"最左前缀法则","slug":"最左前缀法则","link":"#最左前缀法则","children":[{"level":3,"title":"范围查询","slug":"范围查询","link":"#范围查询","children":[]},{"level":3,"title":"模糊查询","slug":"模糊查询","link":"#模糊查询","children":[]},{"level":3,"title":"隐式转换","slug":"隐式转换","link":"#隐式转换","children":[]},{"level":3,"title":"索引下推","slug":"索引下推","link":"#索引下推","children":[]}]},{"level":2,"title":"索引失效","slug":"索引失效","link":"#索引失效","children":[{"level":3,"title":"索引列运算","slug":"索引列运算","link":"#索引列运算","children":[]},{"level":3,"title":"索引列隐式转换","slug":"索引列隐式转换","link":"#索引列隐式转换","children":[]},{"level":3,"title":"模糊查询","slug":"模糊查询-1","link":"#模糊查询-1","children":[]},{"level":3,"title":"or 连接的条件","slug":"or-连接的条件","link":"#or-连接的条件","children":[]},{"level":3,"title":"非最左匹配","slug":"非最左匹配","link":"#非最左匹配","children":[]},{"level":3,"title":"数据分布影响","slug":"数据分布影响","link":"#数据分布影响","children":[]},{"level":3,"title":"注意","slug":"注意","link":"#注意","children":[]}]},{"level":2,"title":"SQL 提示","slug":"sql-提示","link":"#sql-提示","children":[]},{"level":2,"title":"覆盖索引","slug":"覆盖索引","link":"#覆盖索引","children":[]},{"level":2,"title":"前缀索引","slug":"前缀索引","link":"#前缀索引","children":[]},{"level":2,"title":"单列索引与联合索引","slug":"单列索引与联合索引","link":"#单列索引与联合索引","children":[]},{"level":2,"title":"索引优化方法","slug":"索引优化方法","link":"#索引优化方法","children":[]},{"level":2,"title":"设计原则","slug":"设计原则","link":"#设计原则","children":[]}],"git":{"createdTime":1672746435000,"updatedTime":1715153702000,"contributors":[{"name":"刘大维","email":"davidliu@liudaweideMacBook-Pro.local","commits":5},{"name":"davidliuk","email":"l729641074@163.com","commits":3}]},"readingTime":{"minutes":12.32,"words":3696},"filePathRelative":"cs/database/mysql/index/4. 使用规则.md","localizedDate":"January 3, 2023","excerpt":"\\n<h2>最左前缀法则</h2>\\n<p>联合索引，要遵守最左前缀法则。最左前缀法则指的是查询从索引的最左列开始，并且不跳过索引中的列。如果跳跃某一列，索引将部分失效(后面的字段索引失效)。</p>\\n<p>最左前缀匹配原则指的是，在使用<strong>联合索引</strong>时，<strong>MySQL</strong> 会根据联合索引中的字段顺序，从左到右依次到查询条件中去匹配，如果查询条件中存在与联合索引中最左侧字段相匹配的字段，则就会使用该字段过滤一批数据，直至联合索引中全部字段匹配完成，或者在执行过程中遇到范围查询（如 <strong><code>&gt;</code></strong>、<strong><code>&lt;</code></strong>）才会停止匹配。对于 <strong><code>&gt;=</code></strong>、<strong><code>&lt;=</code></strong>、<strong><code>BETWEEN</code></strong>、<strong><code>like</code></strong> 前缀匹配的范围查询，并不会停止匹配。所以，我们在使用联合索引时，可以将区分度高的字段放在最左边，这也可以过滤更多数据。</p>","autoDesc":true}`);export{d as comp,k as data};
