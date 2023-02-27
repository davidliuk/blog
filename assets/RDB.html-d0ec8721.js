const e=JSON.parse(`{"key":"v-cf651cb2","path":"/cs/database/redis/persistency/RDB.html","title":"RDB","lang":"en-US","frontmatter":{"description":"RDB Rediscover Database Backup file，数据备份文件，数据快照。 使用方式 redis-cli save # 主进程执行RDB，阻塞所有命令，停机时实际上会自动执行一次，一般是宕机时使用 bgsave # 子进程执行RDB，避免主进程受到影响","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/cs/database/redis/persistency/RDB.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"RDB"}],["meta",{"property":"og:description","content":"RDB Rediscover Database Backup file，数据备份文件，数据快照。 使用方式 redis-cli save # 主进程执行RDB，阻塞所有命令，停机时实际上会自动执行一次，一般是宕机时使用 bgsave # 子进程执行RDB，避免主进程受到影响"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-02-27T13:30:02.000Z"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2023-02-27T13:30:02.000Z"}],["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://davidliuk.github.io/blog/blog/zh/cs/database/redis/persistency/RDB.html"}]]},"headers":[{"level":3,"title":"使用方式","slug":"使用方式","link":"#使用方式","children":[]},{"level":3,"title":"配置参数","slug":"配置参数","link":"#配置参数","children":[]},{"level":3,"title":"原理","slug":"原理","link":"#原理","children":[]}],"git":{"createdTime":1677504602000,"updatedTime":1677504602000,"contributors":[{"name":"刘大维","email":"davidliu@liudaweideMacBook-Pro.local","commits":1}]},"readingTime":{"minutes":1.97,"words":592},"localizedDate":"February 27, 2023","filePathRelative":"cs/database/redis/persistency/RDB.md","excerpt":"<h1> RDB</h1>\\n<p>Rediscover Database Backup file，数据备份文件，数据快照。</p>\\n<h3> 使用方式</h3>\\n<div class=\\"language-bash line-numbers-mode\\" data-ext=\\"sh\\"><pre class=\\"language-bash\\"><code>redis-cli\\nsave <span class=\\"token comment\\"># 主进程执行RDB，阻塞所有命令，停机时实际上会自动执行一次，一般是宕机时使用</span>\\nbgsave <span class=\\"token comment\\"># 子进程执行RDB，避免主进程受到影响</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{e as data};
