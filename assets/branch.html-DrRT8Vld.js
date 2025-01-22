import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,d as a,o as n}from"./app-ktFCNIob.js";const l={};function t(p,i){return n(),s("div",null,i[0]||(i[0]=[a(`<h1 id="分支条件" tabindex="-1"><a class="header-anchor" href="#分支条件"><span>分支条件</span></a></h1><p>逻辑</p><ul><li><code>AND</code></li><li><code>OR</code></li></ul><h2 id="谓词" tabindex="-1"><a class="header-anchor" href="#谓词"><span>谓词</span></a></h2><p>谓词的返回值都是true, false, unknown, SQL是三值逻辑，所以有三种真值</p><p>查询结果只会包含WHERE子句里的判断结果为true的行！不包含判断结果为false和unknown的行。</p><h3 id="比较谓词" tabindex="-1"><a class="header-anchor" href="#比较谓词"><span>比较谓词</span></a></h3><p><code>&gt;,&lt;,&lt;&gt;,=,!=</code></p><p>BETWEEN(闭区间), LIKE, IN, IS NULL</p><p>谓词是一种特殊的函数，返回值是真值。</p><p>对NULL使用其他比较谓词（比如&gt;NULL），结果也都是unknown。</p><h3 id="空值检验" tabindex="-1"><a class="header-anchor" href="#空值检验"><span>空值检验</span></a></h3><ul><li><code>is null</code></li><li><code>is not null</code></li><li><code>Ifnull(a, b)</code></li></ul><p>MySQL 使用三值逻辑：TRUE, FALSE 和 UNKNOWN。任何与 NULL 值进行的比较都会与第三种值 UNKNOWN 做比较。这个“任何值”包括 NULL 本身</p><p>重点理解：</p><ul><li>NULL不是值，所以不能对其使用谓词，如果使用谓词，结果是unknown。</li><li>可以认为它只是一个没有值的标记,而比较谓词只适用于比较值。因此对非值的NULL使用比较谓词是没有意义的</li></ul><p>比较判断的返回值：成立为1，不成立为0</p><p>sum的时候不需要if，如果sum条件成立就是1，不成立就是0，所以直接写成round(sum(order_date=customer_pref_delivery_date)*100/count(1),2) immediate_percentage即可</p><h3 id="特殊谓词" tabindex="-1"><a class="header-anchor" href="#特殊谓词"><span>特殊谓词</span></a></h3><p><code>str like pat</code></p><p>通配符匹配</p><p><code>str REGEXP pat</code></p><p>正则表达式匹配</p><h2 id="分支语句" tabindex="-1"><a class="header-anchor" href="#分支语句"><span>分支语句</span></a></h2><h3 id="case" tabindex="-1"><a class="header-anchor" href="#case"><span><code>CASE</code></span></a></h3><p>写法一：</p><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">CASE</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> WHEN</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> condition1 </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">THEN</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> result1</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">     [WHEN condition2  THEN result2]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">     [...]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">     [ELSE result]</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> </span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">END</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> [AS alias_name]</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>写法二：</p><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">CASE</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> Expression</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">	WHEN</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> expression1 </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">THEN</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> Result1</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">	[WHEN expression2 THEN Result2]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">	[...]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">	[ELSE Result]</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">END</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> [AS alias_name]</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="if函数" tabindex="-1"><a class="header-anchor" href="#if函数"><span><code>IF</code>函数</span></a></h3><p>相当于三目运算符</p><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">IF</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(expr1, expr2, expr3)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>expr1是一个条件表达式，例如a&gt;b；</p><p>expr2是当条件表达式为真时返回的值；</p><p>expr3是当条件表达式为假时返回的值。</p><p><code>update salary set sex=IF(sex=&#39;f&#39;,&#39;m&#39;,&#39;f&#39;)</code></p>`,36)]))}const h=e(l,[["render",t],["__file","branch.html.vue"]]),c=JSON.parse(`{"path":"/cs/database/sql/basic/branch.html","title":"分支条件","lang":"en-US","frontmatter":{"description":"分支条件 逻辑 AND OR 谓词 谓词的返回值都是true, false, unknown, SQL是三值逻辑，所以有三种真值 查询结果只会包含WHERE子句里的判断结果为true的行！不包含判断结果为false和unknown的行。 比较谓词 >,<,<>,=,!= BETWEEN(闭区间), LIKE, IN, IS NULL 谓词是一种特殊的函...","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/cs/database/sql/basic/branch.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"分支条件"}],["meta",{"property":"og:description","content":"分支条件 逻辑 AND OR 谓词 谓词的返回值都是true, false, unknown, SQL是三值逻辑，所以有三种真值 查询结果只会包含WHERE子句里的判断结果为true的行！不包含判断结果为false和unknown的行。 比较谓词 >,<,<>,=,!= BETWEEN(闭区间), LIKE, IN, IS NULL 谓词是一种特殊的函..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-05-08T07:35:02.000Z"}],["meta",{"property":"article:modified_time","content":"2024-05-08T07:35:02.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"分支条件\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-08T07:35:02.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[{"level":2,"title":"谓词","slug":"谓词","link":"#谓词","children":[{"level":3,"title":"比较谓词","slug":"比较谓词","link":"#比较谓词","children":[]},{"level":3,"title":"空值检验","slug":"空值检验","link":"#空值检验","children":[]},{"level":3,"title":"特殊谓词","slug":"特殊谓词","link":"#特殊谓词","children":[]}]},{"level":2,"title":"分支语句","slug":"分支语句","link":"#分支语句","children":[{"level":3,"title":"CASE","slug":"case","link":"#case","children":[]},{"level":3,"title":"IF函数","slug":"if函数","link":"#if函数","children":[]}]}],"git":{"createdTime":1715153702000,"updatedTime":1715153702000,"contributors":[{"name":"刘大维","email":"davidliu@liudaweideMacBook-Pro.local","commits":1}]},"readingTime":{"minutes":1.45,"words":434},"filePathRelative":"cs/database/sql/basic/branch.md","localizedDate":"May 8, 2024","excerpt":"\\n<p>逻辑</p>\\n<ul>\\n<li><code>AND</code></li>\\n<li><code>OR</code></li>\\n</ul>\\n<h2>谓词</h2>\\n<p>谓词的返回值都是true, false, unknown, SQL是三值逻辑，所以有三种真值</p>\\n<p>查询结果只会包含WHERE子句里的判断结果为true的行！不包含判断结果为false和unknown的行。</p>\\n<h3>比较谓词</h3>\\n<p><code>&gt;,&lt;,&lt;&gt;,=,!=</code></p>\\n<p>BETWEEN(闭区间), LIKE, IN, IS NULL</p>\\n<p>谓词是一种特殊的函数，返回值是真值。</p>","autoDesc":true}`);export{h as comp,c as data};
