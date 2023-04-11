const e=JSON.parse(`{"key":"v-01dd35c2","path":"/cs/database/redis/persistency/AOF.html","title":"AOF","lang":"en-US","frontmatter":{"description":"AOF Append Only File (追加文件）。 特点 写后日志 说到日志，我们比较熟悉的是数据库的redo log写前日志（Write Ahead Log, WAL），也就是说，在实际写数据前，先把修改的数据记到日志文件中，以便故障时进行恢复。 不过，AOF 日志正好相反，它是写后日志，“写后”的意思是 Redis 是先执行命令，把数据写入内存，然后才记录日志，如下图所示： 那 AOF 为什么要先执行命令再记日志呢？要回答这个问题，我们要先知道 AOF 里记录了什么内容。","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/cs/database/redis/persistency/AOF.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"AOF"}],["meta",{"property":"og:description","content":"AOF Append Only File (追加文件）。 特点 写后日志 说到日志，我们比较熟悉的是数据库的redo log写前日志（Write Ahead Log, WAL），也就是说，在实际写数据前，先把修改的数据记到日志文件中，以便故障时进行恢复。 不过，AOF 日志正好相反，它是写后日志，“写后”的意思是 Redis 是先执行命令，把数据写入内存，然后才记录日志，如下图所示： 那 AOF 为什么要先执行命令再记日志呢？要回答这个问题，我们要先知道 AOF 里记录了什么内容。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-04-11T10:23:43.000Z"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2023-04-11T10:23:43.000Z"}],["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://davidliuk.github.io/blog/blog/zh/cs/database/redis/persistency/AOF.html"}]]},"headers":[{"level":2,"title":"特点","slug":"特点","link":"#特点","children":[{"level":3,"title":"写后日志","slug":"写后日志","link":"#写后日志","children":[]},{"level":3,"title":"写回策略","slug":"写回策略","link":"#写回策略","children":[]},{"level":3,"title":"冗余记录","slug":"冗余记录","link":"#冗余记录","children":[]}]}],"git":{"createdTime":1677504602000,"updatedTime":1681208623000,"contributors":[{"name":"davidliuk","email":"l729641074@163.com","commits":2},{"name":"刘大维","email":"davidliu@liudaweideMacBook-Pro.local","commits":2}]},"readingTime":{"minutes":3.3,"words":989},"localizedDate":"February 27, 2023","filePathRelative":"cs/database/redis/persistency/AOF.md","excerpt":"<h1> AOF</h1>\\n<p>Append Only File (追加文件）。</p>\\n<h2> 特点</h2>\\n<h3> 写后日志</h3>\\n<p>说到日志，我们比较熟悉的是数据库的redo log写前日志（Write Ahead Log, WAL），也就是说，在实际写数据前，先把修改的数据记到日志文件中，以便故障时进行恢复。</p>\\n<p>不过，AOF 日志正好相反，它是写后日志，“写后”的意思是 Redis 是先执行命令，把数据写入内存，然后才记录日志，如下图所示：</p>\\n<p>那 AOF 为什么要先执行命令再记日志呢？要回答这个问题，我们要先知道 AOF 里记录了什么内容。</p>","autoDesc":true}`);export{e as data};