import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as n,d as a,o as l}from"./app-D4ZvIHfO.js";const p={};function t(s,e){return l(),n("div",null,e[0]||(e[0]=[a('<h1 id="企业级服务器系统导论" tabindex="-1"><a class="header-anchor" href="#企业级服务器系统导论"><span>企业级服务器系统导论</span></a></h1><p>::: detail 课程介绍</p><h2 id="课程介绍" tabindex="-1"><a class="header-anchor" href="#课程介绍"><span>课程介绍</span></a></h2><ol><li><p>Linux、Unix 用法</p><p>主要是 Linux（相对没有含金量，但是比较重要）</p></li><li><p>运维硬件的角度</p><ol><li>给很多的脚本</li><li>冗余、故障转移（冗余节点对故障节点的接管）</li></ol></li><li><p>Docker 容器</p></li><li><p>Kubernetes</p></li></ol><h3 id="linux" tabindex="-1"><a class="header-anchor" href="#linux"><span>Linux</span></a></h3><p>讲生产环节下的 Linux 环境下的东西</p><p>一般用 GNU：bash</p><p>上班有用，不上班不太有用，学了很快就忘了</p><p>理论性和思维性，掌握 Linux 的思维、计算机的思想</p><h3 id="devops、kubernetes" tabindex="-1"><a class="header-anchor" href="#devops、kubernetes"><span>Devops、Kubernetes</span></a></h3><p>prefork 多线程怎么选择模式</p><p>教材：Unix and linux system administration handbook</p><p>Unix-base 或 VM player</p><h3 id="分数构成" tabindex="-1"><a class="header-anchor" href="#分数构成"><span>分数构成</span></a></h3><p>平时作业 50%</p><blockquote><p>非常简单的，一次作业，平时上课学的东西，上课做的东西截图截一截</p></blockquote><p>大作业： 50% 报告</p><p>:::</p><p>mainframe，追求极高的 availablility，最强的机器</p><p>1000 多 w 一台，电费、网费也很贵</p><p>钢厂、银行用 mainframe</p><p>阿里巴巴民企唯一一个院士：wangjian</p><p>互联网在 Unix 上发展的</p><p>availablility</p><p>平均两个 failure 之间的时间，</p><p>shell 编程</p><h3 id="unix-常见分支" tabindex="-1"><a class="header-anchor" href="#unix-常见分支"><span>UNIX 常见分支</span></a></h3><ul><li>System V，贝尔实验室的正统的 Unix，init</li><li>BSD，</li><li>POSIX，ieee 指定的标准</li></ul><p>Linux kernel 单核</p><p>微核、单核</p><blockquote><p>工程上用最简单的</p></blockquote><p>GNU ：</p><p>GPL：</p><p>Scientific Linux</p><p>SuSe：华晨宝马用的（德国的）</p><p>企业级就用 CentOS</p><p>人工智能、深度学习主要用的 Ubuntu</p><p>涉及到 UNIX 的电影</p><p>bladerunner：cyberpunk 鼻祖</p><p>gods in the shell：</p><h3 id="unix-指令哲学" tabindex="-1"><a class="header-anchor" href="#unix-指令哲学"><span>UNIX 指令哲学</span></a></h3><p>单一职责原则：任何一个 UNIX 命令都叫做一个软件工具，都是标准输入输出，所以可以串联，需要用到“管道”：<code>|</code>用来连接两个命令，eg</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">cat</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /usr/include/stdio.h</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> | </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">grep</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;#endif&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> | </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">wc</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -l</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>标准输出重定向指令：后面+<code>&gt; 文件名</code></p><p>标准输入重定向指令：后面+<code>&lt; 文件名</code></p><p>命令集合：command1 &amp;&amp; command2</p><p>该形式将两个命令连接起来，只有当 command1 执行成功时，才会执行 command2。这样可以实现条件执行。</p><p>例如，make &amp;&amp; make install 表示只有在 make 命令执行成功后，才会执行 make install 命令。</p>',48)]))}const d=i(p,[["render",t],["__file","index.html.vue"]]),h=JSON.parse(`{"path":"/se/devops/unix/","title":"企业级服务器系统导论","lang":"en-US","frontmatter":{"description":"企业级服务器系统导论 ::: detail 课程介绍 课程介绍 Linux、Unix 用法 主要是 Linux（相对没有含金量，但是比较重要） 运维硬件的角度 给很多的脚本 冗余、故障转移（冗余节点对故障节点的接管） Docker 容器 Kubernetes Linux 讲生产环节下的 Linux 环境下的东西 一般用 GNU：bash 上班有用，不上...","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/se/devops/unix/"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"企业级服务器系统导论"}],["meta",{"property":"og:description","content":"企业级服务器系统导论 ::: detail 课程介绍 课程介绍 Linux、Unix 用法 主要是 Linux（相对没有含金量，但是比较重要） 运维硬件的角度 给很多的脚本 冗余、故障转移（冗余节点对故障节点的接管） Docker 容器 Kubernetes Linux 讲生产环节下的 Linux 环境下的东西 一般用 GNU：bash 上班有用，不上..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-08-29T00:45:04.000Z"}],["meta",{"property":"article:modified_time","content":"2023-08-29T00:45:04.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"企业级服务器系统导论\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-08-29T00:45:04.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[{"level":2,"title":"课程介绍","slug":"课程介绍","link":"#课程介绍","children":[{"level":3,"title":"Linux","slug":"linux","link":"#linux","children":[]},{"level":3,"title":"Devops、Kubernetes","slug":"devops、kubernetes","link":"#devops、kubernetes","children":[]},{"level":3,"title":"分数构成","slug":"分数构成","link":"#分数构成","children":[]},{"level":3,"title":"UNIX 常见分支","slug":"unix-常见分支","link":"#unix-常见分支","children":[]},{"level":3,"title":"UNIX 指令哲学","slug":"unix-指令哲学","link":"#unix-指令哲学","children":[]}]}],"git":{"createdTime":1669446166000,"updatedTime":1693269904000,"contributors":[{"name":"liudawei47","email":"liudawei47@jd.com","commits":3},{"name":"davidliu","email":"liudawei47@jd.com","commits":1},{"name":"刘大维","email":"davidliu@liudaweideMacBook-Pro.local","commits":1}]},"readingTime":{"minutes":1.74,"words":521},"filePathRelative":"se/devops/unix/README.md","localizedDate":"November 26, 2022","excerpt":"\\n<p>::: detail 课程介绍</p>\\n<h2>课程介绍</h2>\\n<ol>\\n<li>\\n<p>Linux、Unix 用法</p>\\n<p>主要是 Linux（相对没有含金量，但是比较重要）</p>\\n</li>\\n<li>\\n<p>运维硬件的角度</p>\\n<ol>\\n<li>给很多的脚本</li>\\n<li>冗余、故障转移（冗余节点对故障节点的接管）</li>\\n</ol>\\n</li>\\n<li>\\n<p>Docker 容器</p>\\n</li>\\n<li>\\n<p>Kubernetes</p>\\n</li>\\n</ol>\\n<h3>Linux</h3>\\n<p>讲生产环节下的 Linux 环境下的东西</p>\\n<p>一般用 GNU：bash</p>","autoDesc":true}`);export{d as comp,h as data};
