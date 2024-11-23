import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as t,d,o as a}from"./app-CrF8c6p-.js";const l={};function o(r,e){return a(),t("div",null,e[0]||(e[0]=[d('<h1 id="三剑客" tabindex="-1"><a class="header-anchor" href="#三剑客"><span>三剑客</span></a></h1><blockquote><p>The Three Musketeers</p></blockquote><p>Linux 三剑客：grep、sed、awk</p><h2 id="grep" tabindex="-1"><a class="header-anchor" href="#grep"><span>grep</span></a></h2><p>Global Regular Expression Print</p><ul><li><code>-o</code>选项表示只输出匹配到的内容，而不是整行；</li><li><code>-E</code>选项表示使用扩展的正则表达式；</li><li><code>\\b</code>表示单词边界，用于确保匹配的是完整的IP地址；</li><li><code>[0-9]{1,3}</code>表示匹配1到3位数字；</li><li><code>.</code>表示匹配点号</li></ul><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">grep</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -oE</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;\\b([0-9]{1,3}\\.){3}[0-9]{1,3}\\b&quot;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> logfile</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="regular-expressions-正则表达式" tabindex="-1"><a class="header-anchor" href="#regular-expressions-正则表达式"><span>REGULAR EXPRESSIONS 正则表达式</span></a></h3><h4 id="括号表达式" tabindex="-1"><a class="header-anchor" href="#括号表达式"><span>括号表达式</span></a></h4><p>括号表达式：[], ()</p><h4 id="字符类" tabindex="-1"><a class="header-anchor" href="#字符类"><span>字符类</span></a></h4><p>POSIX 字符类</p><ul><li><code>[:alnum:]</code>：匹配任意字母和数字字符。</li><li><code>[:alpha:]</code>：匹配任意字母字符。</li><li><code>[:blank:]</code>：匹配空格和制表符（Tab）字符。</li><li><code>[:cntrl:]</code>：匹配控制字符。</li><li><code>[:digit:]</code>：匹配任意数字字符。</li><li><code>[:graph:]</code>：匹配可打印字符，不包括空格。</li><li><code>[:lower:]</code>：匹配任意小写字母字符。</li><li><code>[:print:]</code>：匹配可打印字符，包括空格。</li><li><code>[:punct:]</code>：匹配标点符号和其他特殊字符。</li><li><code>[:space:]</code>：匹配空白字符，包括空格、制表符、换行符等。</li><li><code>[:upper:]</code>：匹配任意大写字母字符。</li><li><code>[:xdigit:]</code>：匹配十六进制数字字符。</li></ul><h4 id="repetition" tabindex="-1"><a class="header-anchor" href="#repetition"><span>Repetition</span></a></h4><table><thead><tr><th>符号</th><th>说明</th></tr></thead><tbody><tr><td><code>?</code></td><td>前面的项是可选的，最多匹配一次。</td></tr><tr><td><code>*</code></td><td>前面的项将被匹配零次或多次。</td></tr><tr><td><code>+</code></td><td>前面的项将被匹配一次或多次。</td></tr><tr><td><code>{n}</code></td><td>前面的项恰好匹配 n 次。</td></tr><tr><td><code>{n,}</code></td><td>前面的项匹配 n 次或更多次。</td></tr><tr><td><code>{,m}</code></td><td>前面的项最多匹配 m 次。这是 GNU <strong>扩展</strong>。</td></tr><tr><td><code>{n,m}</code></td><td>前面的项至少匹配 n 次，但不超过 m 次。</td></tr></tbody></table><h2 id="sed" tabindex="-1"><a class="header-anchor" href="#sed"><span>sed</span></a></h2><p>Stream Editor</p><ul><li><code>s</code>: 替换</li><li><code>d</code>: 删除</li><li><code>i</code>: 插入</li></ul><h2 id="awk" tabindex="-1"><a class="header-anchor" href="#awk"><span>awk</span></a></h2><p>awk 是三位创始人名字的简称</p><p><code>pattern { action }</code></p><p>gawk</p><p>awk是一行一行地处理文本文件，运行流程是：</p><ol><li><p>先运行BEGIN后的{Action}，相当于表头</p></li><li><p>再运行{Action}中的文件处理主体命令</p></li><li><p>最后运行END后的{Action}中的命令</p></li><li><p>有几个经常用到的awk常量：NF是当前行的field字段数；NR是正在处理的当前行数。</p></li></ol>',24)]))}const c=i(l,[["render",o],["__file","1.3 three musketeers.html.vue"]]),p=JSON.parse(`{"path":"/se/devops/unix/basic/1.3%20three%20musketeers.html","title":"三剑客","lang":"en-US","frontmatter":{"description":"三剑客 The Three Musketeers Linux 三剑客：grep、sed、awk grep Global Regular Expression Print -o选项表示只输出匹配到的内容，而不是整行； -E选项表示使用扩展的正则表达式； \\\\b表示单词边界，用于确保匹配的是完整的IP地址； [0-9]{1,3}表示匹配1到3位数字； .表示...","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/se/devops/unix/basic/1.3%20three%20musketeers.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"三剑客"}],["meta",{"property":"og:description","content":"三剑客 The Three Musketeers Linux 三剑客：grep、sed、awk grep Global Regular Expression Print -o选项表示只输出匹配到的内容，而不是整行； -E选项表示使用扩展的正则表达式； \\\\b表示单词边界，用于确保匹配的是完整的IP地址； [0-9]{1,3}表示匹配1到3位数字； .表示..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-05-08T07:35:02.000Z"}],["meta",{"property":"article:modified_time","content":"2024-05-08T07:35:02.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"三剑客\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-08T07:35:02.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[{"level":2,"title":"grep","slug":"grep","link":"#grep","children":[{"level":3,"title":"REGULAR EXPRESSIONS 正则表达式","slug":"regular-expressions-正则表达式","link":"#regular-expressions-正则表达式","children":[]}]},{"level":2,"title":"sed","slug":"sed","link":"#sed","children":[]},{"level":2,"title":"awk","slug":"awk","link":"#awk","children":[]}],"git":{"createdTime":1694772553000,"updatedTime":1715153702000,"contributors":[{"name":"liudawei47","email":"liudawei47@jd.com","commits":2},{"name":"davidliu","email":"liudawei47@jd.com","commits":1},{"name":"刘大维","email":"davidliu@liudaweideMacBook-Pro.local","commits":1}]},"readingTime":{"minutes":1.65,"words":496},"filePathRelative":"se/devops/unix/basic/1.3 three musketeers.md","localizedDate":"September 15, 2023","excerpt":"\\n<blockquote>\\n<p>The Three Musketeers</p>\\n</blockquote>\\n<p>Linux 三剑客：grep、sed、awk</p>\\n<h2>grep</h2>\\n<p>Global Regular Expression Print</p>\\n<ul>\\n<li><code>-o</code>选项表示只输出匹配到的内容，而不是整行；</li>\\n<li><code>-E</code>选项表示使用扩展的正则表达式；</li>\\n<li><code>\\\\b</code>表示单词边界，用于确保匹配的是完整的IP地址；</li>\\n<li><code>[0-9]{1,3}</code>表示匹配1到3位数字；</li>\\n<li><code>.</code>表示匹配点号</li>\\n</ul>","autoDesc":true}`);export{c as comp,p as data};
