const t=JSON.parse(`{"key":"v-1aa52699","path":"/se/devops/unix/basic/10.%20scheduled-tasks.html","title":"10. 调度任务","lang":"en-US","frontmatter":{"description":"10. 调度任务 自动化运维：遇到问题，写程序，可以复用 常用指令 at：在指定时间做一次的 cron：周期性的 anacron：断电导致没有按周期做的内容，保证重启的时候可以被执行 At ... atq atrm batch 以低优先级运行命令 var 下面放的都是常变的内容，比如说 who 命令，他的内容写在 var/run/uxxx 下面写得 spool 需要 at daemon，每分钟检查一次","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/se/devops/unix/basic/10.%20scheduled-tasks.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"10. 调度任务"}],["meta",{"property":"og:description","content":"10. 调度任务 自动化运维：遇到问题，写程序，可以复用 常用指令 at：在指定时间做一次的 cron：周期性的 anacron：断电导致没有按周期做的内容，保证重启的时候可以被执行 At ... atq atrm batch 以低优先级运行命令 var 下面放的都是常变的内容，比如说 who 命令，他的内容写在 var/run/uxxx 下面写得 spool 需要 at daemon，每分钟检查一次"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-08-21T10:17:45.000Z"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2023-08-21T10:17:45.000Z"}],["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://davidliuk.github.io/blog/blog/zh/se/devops/unix/basic/10.%20scheduled-tasks.html"}]]},"headers":[{"level":2,"title":"常用指令","slug":"常用指令","link":"#常用指令","children":[{"level":3,"title":"Access Control of \\"at\\"","slug":"access-control-of-at","link":"#access-control-of-at","children":[]}]}],"git":{"createdTime":1672663528000,"updatedTime":1692613065000,"contributors":[{"name":"liudawei47","email":"liudawei47@jd.com","commits":3},{"name":"davidliuk","email":"l729641074@163.com","commits":1},{"name":"刘大维","email":"davidliu@liudaweideMacBook-Pro.local","commits":1}]},"readingTime":{"minutes":0.72,"words":217},"localizedDate":"January 2, 2023","filePathRelative":"se/devops/unix/basic/10. scheduled-tasks.md","excerpt":"<h1> 10. 调度任务</h1>\\n<p>自动化运维：遇到问题，写程序，可以复用</p>\\n<h2> 常用指令</h2>\\n<p>at：在指定时间做一次的</p>\\n<p>cron：周期性的</p>\\n<p>anacron：断电导致没有按周期做的内容，保证重启的时候可以被执行</p>\\n<p>At ...</p>\\n<p>atq</p>\\n<p>atrm</p>\\n<p>batch 以低优先级运行命令</p>\\n<p>var 下面放的都是常变的内容，比如说 who 命令，他的内容写在 var/run/uxxx 下面写得</p>\\n<p>spool</p>\\n<p>需要 at daemon，每分钟检查一次</p>\\n","autoDesc":true}`);export{t as data};