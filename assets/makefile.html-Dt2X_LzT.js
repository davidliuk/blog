import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,d as s,o as l}from"./app-C8HRrJwL.js";const t={};function n(r,e){return l(),a("div",null,e[0]||(e[0]=[s(`<h1 id="makefile" tabindex="-1"><a class="header-anchor" href="#makefile"><span>Makefile</span></a></h1><h2 id="makefile-的规则" tabindex="-1"><a class="header-anchor" href="#makefile-的规则"><span>makefile 的规则</span></a></h2><p>在讲述这个 makefile 之前，还是让我们先来粗略地看一看 makefile 的规则。</p><div class="language-makefile line-numbers-mode" data-highlighter="shiki" data-ext="makefile" data-title="makefile" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">target</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> ...</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> :</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> prerequisites ...</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">    recipe</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">    ...</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">    ...</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>target：可以是一个 object file（目标文件），也可以是一个可执行文件，还可以是一个标签（label）/伪目标。</p><p>prerequisites：生成该 target 所依赖的文件和/或 target。</p><p>recipe：该 target 要执行的命令（任意的 shell 命令）。</p><p>这是一个文件的依赖关系，也就是说，target 这一个或多个的目标文件依赖于 prerequisites 中的文件，其生成规则定义在 command 中。说白一点就是说:</p><p>prerequisites 中如果有一个以上的文件比 target 文件要新的话，recipe 所定义的命令就会被执行。<br> 这就是 makefile 的规则，也就是 makefile 中最核心的内容。</p><p>说到底，makefile 的东西就是这样一点，好像我的这篇文档也该结束了。呵呵。还不尽然，这是 makefile 的主线和核心，但要写好一个 makefile 还不够，我会在后面一点一点地结合我的工作经验给你慢慢道来。内容还多着呢。</p><h2 id="makefile-的命令" tabindex="-1"><a class="header-anchor" href="#makefile-的命令"><span>makefile 的命令</span></a></h2><p>makefile 中的命令，也就是我们前面讲过的“recipe”部分，其实就是一些 Shell 命令，makefile 会一行一行地执行这些命令。因为命令过多，所以 make 提供了一个续行符（\\）,来让我们的命令可以分行书写，make 会将其连接起来，当作一个完整的命令。例如：</p><h2 id="makefile-条件判断" tabindex="-1"><a class="header-anchor" href="#makefile-条件判断"><span>makefile 条件判断</span></a></h2><p>makefile 中的条件判断主要有三种方式，分别是：</p><ol><li>条件表达式</li><li>makefile 中的函数</li><li>makefile 中的运算符</li></ol>`,15)]))}const d=i(t,[["render",n],["__file","makefile.html.vue"]]),h=JSON.parse(`{"path":"/se/devops/cicd/makefile.html","title":"Makefile","lang":"en-US","frontmatter":{"description":"Makefile makefile 的规则 在讲述这个 makefile 之前，还是让我们先来粗略地看一看 makefile 的规则。 target：可以是一个 object file（目标文件），也可以是一个可执行文件，还可以是一个标签（label）/伪目标。 prerequisites：生成该 target 所依赖的文件和/或 target。 re...","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/se/devops/cicd/makefile.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"Makefile"}],["meta",{"property":"og:description","content":"Makefile makefile 的规则 在讲述这个 makefile 之前，还是让我们先来粗略地看一看 makefile 的规则。 target：可以是一个 object file（目标文件），也可以是一个可执行文件，还可以是一个标签（label）/伪目标。 prerequisites：生成该 target 所依赖的文件和/或 target。 re..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-08-21T10:17:45.000Z"}],["meta",{"property":"article:modified_time","content":"2023-08-21T10:17:45.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Makefile\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-08-21T10:17:45.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[{"level":2,"title":"makefile 的规则","slug":"makefile-的规则","link":"#makefile-的规则","children":[]},{"level":2,"title":"makefile 的命令","slug":"makefile-的命令","link":"#makefile-的命令","children":[]},{"level":2,"title":"makefile 条件判断","slug":"makefile-条件判断","link":"#makefile-条件判断","children":[]}],"git":{"createdTime":1675410392000,"updatedTime":1692613065000,"contributors":[{"name":"liudawei47","email":"liudawei47@jd.com","commits":3}]},"readingTime":{"minutes":1.4,"words":421},"filePathRelative":"se/devops/cicd/makefile.md","localizedDate":"February 3, 2023","excerpt":"\\n<h2>makefile 的规则</h2>\\n<p>在讲述这个 makefile 之前，还是让我们先来粗略地看一看 makefile 的规则。</p>\\n<div class=\\"language-makefile line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"makefile\\" data-title=\\"makefile\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">target</span><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\"> ...</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> :</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\"> prerequisites ...</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#E5C07B\\">    recipe</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#E5C07B\\">    ...</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#E5C07B\\">    ...</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{d as comp,h as data};
