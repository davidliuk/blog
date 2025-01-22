import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,d as o,o as n}from"./app-ktFCNIob.js";const c={};function s(p,e){return n(),a("div",null,e[0]||(e[0]=[o('<h1 id="_10-调度任务" tabindex="-1"><a class="header-anchor" href="#_10-调度任务"><span>10. 调度任务</span></a></h1><p>自动化运维：遇到问题，写程序，可以复用</p><h2 id="常用指令" tabindex="-1"><a class="header-anchor" href="#常用指令"><span>常用指令</span></a></h2><p>at：在指定时间做一次的</p><p>cron：周期性的</p><p>anacron：断电导致没有按周期做的内容，保证重启的时候可以被执行</p><p>At ...</p><p>atq</p><p>atrm</p><p>batch 以低优先级运行命令</p><p>var 下面放的都是常变的内容，比如说 who 命令，他的内容写在 var/run/uxxx 下面写得</p><p>spool</p><p>需要 at daemon，每分钟检查一次</p><h4 id="init" tabindex="-1"><a class="header-anchor" href="#init"><span>init</span></a></h4><ul><li><code>service atd start</code></li><li><code>service atd stop</code></li></ul><h4 id="systemd" tabindex="-1"><a class="header-anchor" href="#systemd"><span>systemd</span></a></h4><ul><li><code>systemctl start atd.service</code></li><li><code>systemctl stop atd.service</code></li></ul><p><code>&lt;ctrl&gt; d</code>：eof</p><p>stty -a：看终端快捷键配置</p><p>他可以发邮件</p><h3 id="access-control-of-at" tabindex="-1"><a class="header-anchor" href="#access-control-of-at"><span>Access Control of &quot;at&quot;</span></a></h3><p>可以设置权限来控制谁可以使用</p><p>etc 下的 at.deny 或者 at.allow</p><p>一般就是只有其中的一个：黑名单和白名单模式，只有这个文件里面的可以/不可以使用</p>',24)]))}const d=t(c,[["render",s],["__file","10. scheduled-tasks.html.vue"]]),l=JSON.parse(`{"path":"/se/devops/unix/basic/10.%20scheduled-tasks.html","title":"10. 调度任务","lang":"en-US","frontmatter":{"description":"10. 调度任务 自动化运维：遇到问题，写程序，可以复用 常用指令 at：在指定时间做一次的 cron：周期性的 anacron：断电导致没有按周期做的内容，保证重启的时候可以被执行 At ... atq atrm batch 以低优先级运行命令 var 下面放的都是常变的内容，比如说 who 命令，他的内容写在 var/run/uxxx 下面写得 s...","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/se/devops/unix/basic/10.%20scheduled-tasks.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"10. 调度任务"}],["meta",{"property":"og:description","content":"10. 调度任务 自动化运维：遇到问题，写程序，可以复用 常用指令 at：在指定时间做一次的 cron：周期性的 anacron：断电导致没有按周期做的内容，保证重启的时候可以被执行 At ... atq atrm batch 以低优先级运行命令 var 下面放的都是常变的内容，比如说 who 命令，他的内容写在 var/run/uxxx 下面写得 s..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-09-14T10:15:52.000Z"}],["meta",{"property":"article:modified_time","content":"2023-09-14T10:15:52.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"10. 调度任务\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-09-14T10:15:52.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[{"level":2,"title":"常用指令","slug":"常用指令","link":"#常用指令","children":[{"level":3,"title":"Access Control of \\"at\\"","slug":"access-control-of-at","link":"#access-control-of-at","children":[]}]}],"git":{"createdTime":1669446166000,"updatedTime":1694686552000,"contributors":[{"name":"liudawei47","email":"liudawei47@jd.com","commits":4},{"name":"davidliuk","email":"l729641074@163.com","commits":1},{"name":"刘大维","email":"davidliu@liudaweideMacBook-Pro.local","commits":1}]},"readingTime":{"minutes":0.72,"words":216},"filePathRelative":"se/devops/unix/basic/10. scheduled-tasks.md","localizedDate":"November 26, 2022","excerpt":"\\n<p>自动化运维：遇到问题，写程序，可以复用</p>\\n<h2>常用指令</h2>\\n<p>at：在指定时间做一次的</p>\\n<p>cron：周期性的</p>\\n<p>anacron：断电导致没有按周期做的内容，保证重启的时候可以被执行</p>\\n<p>At ...</p>\\n<p>atq</p>\\n<p>atrm</p>\\n<p>batch 以低优先级运行命令</p>\\n<p>var 下面放的都是常变的内容，比如说 who 命令，他的内容写在 var/run/uxxx 下面写得</p>\\n<p>spool</p>\\n<p>需要 at daemon，每分钟检查一次</p>\\n<h4>init</h4>\\n<ul>\\n<li><code>service atd start</code></li>\\n<li><code>service atd stop</code></li>\\n</ul>","autoDesc":true}`);export{d as comp,l as data};