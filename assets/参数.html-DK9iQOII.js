import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,d as a,o as t}from"./app-DIqbhby7.js";const l={};function n(d,e){return t(),s("div",null,e[0]||(e[0]=[a('<h1 id="参数" tabindex="-1"><a class="header-anchor" href="#参数"><span>参数</span></a></h1><h2 id="占位符" tabindex="-1"><a class="header-anchor" href="#占位符"><span>占位符</span></a></h2><ul><li><p><code>${}</code>是 Properties 文件中的变量占位符，它可以用于标签属性值和 sql 内部，属于<strong>静态文本替换</strong>，比如${driver}会被静态替换为<code>com.mysql.jdbc. Driver</code>。</p><p>字符串拼接</p></li><li><p><code>#{}</code>是 sql 的参数占位符，MyBatis 会将 sql 中的<code>#{}</code>替换为? 号，在 sql 执行前会使用 PreparedStatement 的参数设置方法，按序给 sql 的? 号占位符设置参数值，比如 ps.setInt(0, parameterValue)，<code>#{item.name}</code> 的取值方式为使用反射从参数对象中获取 item 对象的 name 属性值，相当于 <code>param.getItem().getName()</code>。</p></li></ul><p>在 MyBatis 中，<code>#{}</code>和<code>${}</code>都是用于 SQL 语句中的占位符，但它们的使用方式和含义是不同的。</p><p><code>#{}</code>是预编译的占位符，它会将传入的参数进行预编译处理，防止 SQL 注入攻击。在 SQL 语句中，<code>#{}</code>用于表示一个占位符，例如：</p><div class="language-xml line-numbers-mode" data-highlighter="shiki" data-ext="xml" data-title="xml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">select</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> id</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;getUserById&quot;</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> resultType</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;User&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  SELECT * FROM users WHERE id = #{id}</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">select</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里的<code>#{id}</code>表示一个预编译的占位符，MyBatis 会将传入的<code>id</code>参数进行预编译处理，然后将其替换到 SQL 语句中。</p><p><code>${}</code>是字符串拼接的占位符，它不会对传入的参数进行预编译处理，存在 SQL 注入攻击的风险。在 SQL 语句中，<code>${}</code>用于表示一个占位符，例如：</p><div class="language-xml line-numbers-mode" data-highlighter="shiki" data-ext="xml" data-title="xml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">select</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> id</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;getUserByName&quot;</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> resultType</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;User&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  SELECT * FROM users WHERE name = &#39;${name}&#39;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">select</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里的<code>${name}</code>表示一个字符串拼接的占位符，MyBatis 会将传入的<code>name</code>参数直接拼接到 SQL 语句中，存在 SQL 注入攻击的风险。</p><p>总之，<code>#{}</code>和<code>${}</code>都是用于 SQL 语句中的占位符，但它们的使用方式和含义是不同的。<code>#{}</code>是预编译的占位符，用于防止 SQL 注入攻击，而<code>${}</code>是字符串拼接的占位符，存在 SQL 注入攻击的风险。在使用 MyBatis 时，应该尽量使用<code>#{}</code>来防止 SQL 注入攻击。</p>',11)]))}const p=i(l,[["render",n],["__file","参数.html.vue"]]),c=JSON.parse('{"path":"/se/lang/java/framework/orm/mybatis/%E5%8F%82%E6%95%B0.html","title":"参数","lang":"en-US","frontmatter":{"description":"参数 占位符 ${}是 Properties 文件中的变量占位符，它可以用于标签属性值和 sql 内部，属于静态文本替换，比如${driver}会被静态替换为com.mysql.jdbc. Driver。 字符串拼接 #{}是 sql 的参数占位符，MyBatis 会将 sql 中的#{}替换为? 号，在 sql 执行前会使用 PreparedStat...","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/se/lang/java/framework/orm/mybatis/%E5%8F%82%E6%95%B0.html"}],["meta",{"property":"og:site_name","content":"David\'s Blog"}],["meta",{"property":"og:title","content":"参数"}],["meta",{"property":"og:description","content":"参数 占位符 ${}是 Properties 文件中的变量占位符，它可以用于标签属性值和 sql 内部，属于静态文本替换，比如${driver}会被静态替换为com.mysql.jdbc. Driver。 字符串拼接 #{}是 sql 的参数占位符，MyBatis 会将 sql 中的#{}替换为? 号，在 sql 执行前会使用 PreparedStat..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-11-09T18:37:53.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-09T18:37:53.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"参数\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-09T18:37:53.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[{"level":2,"title":"占位符","slug":"占位符","link":"#占位符","children":[]}],"git":{"createdTime":1669446166000,"updatedTime":1731177473000,"contributors":[{"name":"刘大维","email":"davidliu@liudaweideMacBook-Pro-3.local","commits":1}]},"readingTime":{"minutes":1.56,"words":469},"filePathRelative":"se/lang/java/framework/orm/mybatis/参数.md","localizedDate":"November 26, 2022","excerpt":"\\n<h2>占位符</h2>\\n<ul>\\n<li>\\n<p><code>${}</code>是 Properties 文件中的变量占位符，它可以用于标签属性值和 sql 内部，属于<strong>静态文本替换</strong>，比如${driver}会被静态替换为<code>com.mysql.jdbc. Driver</code>。</p>\\n<p>字符串拼接</p>\\n</li>\\n<li>\\n<p><code>#{}</code>是 sql 的参数占位符，MyBatis 会将 sql 中的<code>#{}</code>替换为? 号，在 sql 执行前会使用 PreparedStatement 的参数设置方法，按序给 sql 的? 号占位符设置参数值，比如 ps.setInt(0, parameterValue)，<code>#{item.name}</code> 的取值方式为使用反射从参数对象中获取 item 对象的 name 属性值，相当于 <code>param.getItem().getName()</code>。</p>\\n</li>\\n</ul>","autoDesc":true}');export{p as comp,c as data};
