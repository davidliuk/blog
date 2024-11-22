import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,d as e,o as n}from"./app-UiaY2OnX.js";const h={};function l(t,s){return n(),a("div",null,s[0]||(s[0]=[e(`<h1 id="排序" tabindex="-1"><a class="header-anchor" href="#排序"><span>排序</span></a></h1><p><code>order by</code>后面可以根多个字段及其升降序，默认采用升序的策略进行排序。</p><p>对字符串用默认的升降序排序得到的是按字典序排列的结果</p><h2 id="默认排序" tabindex="-1"><a class="header-anchor" href="#默认排序"><span>默认排序</span></a></h2><h3 id="升序" tabindex="-1"><a class="header-anchor" href="#升序"><span>升序</span></a></h3><p><code>order by id asc</code></p><h3 id="降序" tabindex="-1"><a class="header-anchor" href="#降序"><span>降序</span></a></h3><p><code>order by id desc</code></p><h2 id="自定排序" tabindex="-1"><a class="header-anchor" href="#自定排序"><span>自定排序</span></a></h2><p>利用<code>field()</code>函数，来指定排序顺序</p><p><code>order by field(id, 5, 2, 3)</code></p><p>下面是一段示例，SQL语句与对应的Mybatis映射。</p><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">SELECT</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> * </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">FROM</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> project_case </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">where</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">case_id </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">in</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">119</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">113</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">117</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">order by</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> field(case_id, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">119</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">113</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">117</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>mapper</p><div class="language-xml line-numbers-mode" data-highlighter="shiki" data-ext="xml" data-title="xml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">select</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> id</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;selectSortedProjectCaseByIds&quot;</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> parameterType</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;String&quot;</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> resultMap</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;ProjectCaseResult&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    SELECT * FROM project_case where</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    case_id in</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    &lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">foreach</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> collection</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;caseIdList&quot;</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> item</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;caseId&quot;</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> open</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;(&quot;</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> close</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;)&quot;</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> separator</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;,&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        #{caseId}</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    &lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">foreach</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    order by field</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    &lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">foreach</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> collection</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;caseIdList&quot;</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> item</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;caseId&quot;</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> open</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;(case_id,&quot;</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> close</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;)&quot;</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> separator</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;,&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        #{caseId}</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    &lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">foreach</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">select</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>java</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">List</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&lt;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">ProjectCase</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&gt;</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> selectSortedProjectCaseByIds</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">@</span><span style="--shiki-light:#A626A4;--shiki-dark:#E5C07B;">Param</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;caseIdList&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">) </span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">List</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&lt;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">Integer</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&gt;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> caseIdList)</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="字符串排序" tabindex="-1"><a class="header-anchor" href="#字符串排序"><span>字符串排序</span></a></h2><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">SELECT</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> * </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">FROM</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> \`tasks\`</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> order by</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> FIELD(</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">state</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;ready&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;failure&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;success&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">), execute_time </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">desc</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ol><li><p><code>cast( 要排序的字段名 as integer)</code> ，注意 integer 小写</p><p>整数和小数都可以处理</p></li><li><p><code>to_number(要排序的字段名) </code></p></li><li><p><code>order by to_number(regexp_substr(salary,&#39;[0-9]*[0-9]&#39;,1)) desc</code>，regexp_substr 为截取方法，1为起始位置</p></li></ol><p>其中，正则表达式函数</p><p><code>REGEXP_SUBSTR(srcstr, pattern, position, occurrence, modifier)</code></p><ul><li><p>srcstr：需要进行正则处理的字符串</p></li><li><p>pattern：进行匹配的正则表达式</p></li><li><p>position ：起始位置，从第几个字符开始正则表达式匹配（默认为1）</p></li><li><p>occurrence ：标识第几个匹配组，默认为1</p></li><li><p>modifier ：模式（&#39;i&#39;不区分大小写进行检索；&#39;c&#39;区分大小写进行检索。默认为&#39;c&#39;。）</p></li></ul><h2 id="排序窗口函数" tabindex="-1"><a class="header-anchor" href="#排序窗口函数"><span>排序窗口函数</span></a></h2><h3 id="rank-over" tabindex="-1"><a class="header-anchor" href="#rank-over"><span>rank() over</span></a></h3><p>作用：查出指定条件后的进行排名，条件相同排名相同，排名间断不连续。</p><p>说明：例如学生排名，使用这个函数，成绩相同的两名是并列，下一位同学空出所占的名次。即：1 1 3 4 5 5 7</p><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">select</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> a</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">Score</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> as</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> Score,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">select</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> count</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">b</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">Score</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) + </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> from</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> Scores b </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">where</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> b</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">Score</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> &gt;</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> a</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">Score</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">as</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> Rank</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">from</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> Scores a</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">order by</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> a</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">Score</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> DESC</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="dense-rank-over" tabindex="-1"><a class="header-anchor" href="#dense-rank-over"><span>dense_rank() over</span></a></h3><p>作用：查出指定条件后的进行排名，条件相同排名相同，排名连续。</p><p>说明：和 rank() over 的作用相同，区别在于 dense_rank() over 排名是密集连续的。例如学生排名，使用这个函数，成绩相同的两名是并列，下一位同学接着下一个名次。即：1 1 2 3 4 5 5 6</p><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">select</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> a</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">Score</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> as</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> Score,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">select</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> count</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">distinct</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> b</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">Score</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">from</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> Scores b </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">where</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> b</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">Score</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> &gt;=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> a</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">Score</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">as</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> Rank</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">from</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> Scores a</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">order by</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> a</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">Score</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> DESC</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="row-number-over" tabindex="-1"><a class="header-anchor" href="#row-number-over"><span>row_number() over</span></a></h3><p>作用：查出指定条件后的进行排名，条件相同排名也不相同，排名连续。</p><p>说明：这个函数不需要考虑是否并列，即使根据条件查询出来的数值相同也会进行连续排序。即：1 2 3 4 5 6</p><h3 id="ntile-group-num-over" tabindex="-1"><a class="header-anchor" href="#ntile-group-num-over"><span>ntile(\${group_num}) over</span></a></h3><p>Ntile() 将所有记录分成group_num个组，每组序号一样</p><p>用于做分位数，如4分位数，可以把数组排序后分成4个部分，每个部分的序号相同</p><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">select</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> *, </span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">ntile</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">OVER</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">order by</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> number</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> ) </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">as</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> row_num</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">from</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> num</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用小提示" tabindex="-1"><a class="header-anchor" href="#使用小提示"><span>使用小提示</span></a></h3><p>dense_rank() over 后面跟排序的依据的列，下面是用了一个排序好的列(order by score desc)。</p><p>注意：如果select中有一列是用rank()这类函数，其他的列都会按着他这列规定好的顺序排。</p><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">select</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> score, </span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">dense_rank</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">() </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">over</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">order by</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> score </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">desc</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">as</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;rank&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  #这个rank之所以要加引号，因为rank本身是个函数，直接写rank会报错</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">from</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> scores;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div>`,43)]))}const r=i(h,[["render",l],["__file","sort.html.vue"]]),d=JSON.parse('{"path":"/cs/database/sql/basic/sort.html","title":"排序","lang":"en-US","frontmatter":{"description":"排序 order by后面可以根多个字段及其升降序，默认采用升序的策略进行排序。 对字符串用默认的升降序排序得到的是按字典序排列的结果 默认排序 升序 order by id asc 降序 order by id desc 自定排序 利用field()函数，来指定排序顺序 order by field(id, 5, 2, 3) 下面是一段示例，SQL语...","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/cs/database/sql/basic/sort.html"}],["meta",{"property":"og:site_name","content":"David\'s Blog"}],["meta",{"property":"og:title","content":"排序"}],["meta",{"property":"og:description","content":"排序 order by后面可以根多个字段及其升降序，默认采用升序的策略进行排序。 对字符串用默认的升降序排序得到的是按字典序排列的结果 默认排序 升序 order by id asc 降序 order by id desc 自定排序 利用field()函数，来指定排序顺序 order by field(id, 5, 2, 3) 下面是一段示例，SQL语..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-05-08T07:35:02.000Z"}],["meta",{"property":"article:modified_time","content":"2024-05-08T07:35:02.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"排序\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-08T07:35:02.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[{"level":2,"title":"默认排序","slug":"默认排序","link":"#默认排序","children":[{"level":3,"title":"升序","slug":"升序","link":"#升序","children":[]},{"level":3,"title":"降序","slug":"降序","link":"#降序","children":[]}]},{"level":2,"title":"自定排序","slug":"自定排序","link":"#自定排序","children":[]},{"level":2,"title":"字符串排序","slug":"字符串排序","link":"#字符串排序","children":[]},{"level":2,"title":"排序窗口函数","slug":"排序窗口函数","link":"#排序窗口函数","children":[{"level":3,"title":"rank() over","slug":"rank-over","link":"#rank-over","children":[]},{"level":3,"title":"dense_rank() over","slug":"dense-rank-over","link":"#dense-rank-over","children":[]},{"level":3,"title":"row_number() over","slug":"row-number-over","link":"#row-number-over","children":[]},{"level":3,"title":"ntile(${group_num}) over","slug":"ntile-group-num-over","link":"#ntile-group-num-over","children":[]},{"level":3,"title":"使用小提示","slug":"使用小提示","link":"#使用小提示","children":[]}]}],"git":{"createdTime":1679321449000,"updatedTime":1715153702000,"contributors":[{"name":"davidliuk","email":"l729641074@163.com","commits":1},{"name":"刘大维","email":"davidliu@liudaweideMacBook-Pro.local","commits":1}]},"readingTime":{"minutes":2.77,"words":832},"filePathRelative":"cs/database/sql/basic/sort.md","localizedDate":"March 20, 2023","excerpt":"\\n<p><code>order by</code>后面可以根多个字段及其升降序，默认采用升序的策略进行排序。</p>\\n<p>对字符串用默认的升降序排序得到的是按字典序排列的结果</p>\\n<h2>默认排序</h2>\\n<h3>升序</h3>\\n<p><code>order by id asc</code></p>\\n<h3>降序</h3>\\n<p><code>order by id desc</code></p>\\n<h2>自定排序</h2>\\n<p>利用<code>field()</code>函数，来指定排序顺序</p>\\n<p><code>order by field(id, 5, 2, 3)</code></p>","autoDesc":true}');export{r as comp,d as data};
