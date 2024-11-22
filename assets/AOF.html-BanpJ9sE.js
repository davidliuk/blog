import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as t,d as i,o as n}from"./app-C8HRrJwL.js";const r={};function l(s,e){return n(),t("div",null,e[0]||(e[0]=[i('<h1 id="aof" tabindex="-1"><a class="header-anchor" href="#aof"><span>AOF</span></a></h1><p>Append Only File (追加文件）。</p><h2 id="特点" tabindex="-1"><a class="header-anchor" href="#特点"><span>特点</span></a></h2><h3 id="写后日志" tabindex="-1"><a class="header-anchor" href="#写后日志"><span>写后日志</span></a></h3><p>说到日志，数据库的 redo log 写前日志（Write Ahead Log, WAL），也就是说，在实际写数据前，先把修改的数据记到日志文件中，以便故障时进行恢复。</p><p>不过，AOF 日志正好相反，它是写后日志，“写后”的意思是 Redis 是先执行命令，把数据写入内存，然后才记录日志，如下图所示：</p><p>那 AOF 为什么要先执行命令再记日志呢？要回答这个问题，我们要先知道 AOF 里记录了什么内容。</p><ul><li>可以避免出现记录错误命令的情况，避免额外的检查开销。</li><li>它是在命令执行后才记录日志，所以不会阻塞当前的写操作。</li></ul><p>当然，这样做也会带来风险：</p><ul><li><strong>数据可能会丢失：</strong> 执行写操作命令和记录日志是两个过程，那当 Redis 在还没来得及将命令写入到硬盘时，服务器发生宕机了，这个数据就会有丢失的风险。</li><li><strong>可能阻塞其他操作：</strong> 由于写操作命令执行成功后才记录到 AOF 日志，所以不会阻塞当前命令的执行，但因为always策略下 AOF 日志也是在主线程中执行，所以当 Redis 把日志文件写入磁盘的时候，还是会阻塞后续的操作无法执行。</li></ul><p><img src="https://cdn.jsdelivr.net/gh/davidliuk/images@master/blog/28afd536c57a46447ddab0a2062abe84.png" alt="img" loading="lazy"></p><h3 id="写回策略" tabindex="-1"><a class="header-anchor" href="#写回策略"><span>写回策略</span></a></h3><ul><li><p><strong>Always</strong>，这个单词的意思是「总是」，所以它的意思是每次写操作命令执行完后，同步将 AOF 日志数据写回硬盘；</p><p><strong>当使用 Always 策略的时候，如果写入是一个大 Key，主线程在执行 fsync() 函数的时候，阻塞的时间会比较久，因为当写入的数据量很大的时候，数据同步到硬盘这个过程是很耗时的</strong>。</p></li><li><p><strong>Everysec</strong>，这个单词的意思是「每秒」，所以它的意思是每次写操作命令执行完后，先将命令写入到 AOF 文件的内核缓冲区，然后每隔一秒将缓冲区里的内容写回到硬盘；</p><p>当使用 Everysec 策略的时候，由于是异步执行 <code>fsync()</code> 函数，所以大 Key 持久化的过程（数据同步磁盘）不会影响主线程。</p></li><li><p><strong>No</strong>，意味着不由 Redis 控制写回硬盘的时机，转交给操作系统控制写回的时机，也就是每次写操作命令执行完后，先将命令写入到 AOF 文件的内核缓冲区，再由操作系统决定何时将缓冲区内容写回硬盘。</p></li></ul><h3 id="冗余记录" tabindex="-1"><a class="header-anchor" href="#冗余记录"><span>冗余记录</span></a></h3><p>文件占用体积比RDB大得多。</p><p>解决方案：<code>bgrewriteaof</code>命令，让aof重写，只需要最少的内容即可恢复数据。</p><p>重写触发时机设置：</p><div class="language-conf line-numbers-mode" data-highlighter="shiki" data-ext="conf" data-title="conf" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>auto-aof-rewrite-percentage</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>所以 AOF 重写过程，先重写到新的 AOF 文件，重写失败的话，就直接删除这个文件就好，不会对现有的 AOF 文件造成影响。</p><p>写入 AOF 日志的操作虽然是在主进程完成的，因为它写入的内容不多，所以一般不太影响命令的操作。</p><p>但是在触发 AOF 重写时，比如当 AOF 文件大于 64M 时，就会对 AOF 文件进行重写，这时是需要读取所有缓存的键值对数据，并为每个键值对生成一条命令，然后将其写入到新的 AOF 文件，重写完后，就把现在的 AOF 文件替换掉。</p><p>这个过程其实是很耗时的，所以重写的操作不能放在主进程里。</p><p>所以，Redis 的重写 AOF 过程是由<strong>后台子进程</strong> <code>bgrewriteaof</code> 来完成的，这么做可以达到两个好处：</p><p>AOF 重写可以通过 auto-aof-rewrite-min-size 和 auto-aof-rewrite-percentage 参数控制自动触发, 也可以使用 bgrewriteaof 命令手动触发</p>',24)]))}const p=a(r,[["render",l],["__file","AOF.html.vue"]]),c=JSON.parse(`{"path":"/cs/database/redis/persistency/AOF.html","title":"AOF","lang":"en-US","frontmatter":{"description":"AOF Append Only File (追加文件）。 特点 写后日志 说到日志，数据库的 redo log 写前日志（Write Ahead Log, WAL），也就是说，在实际写数据前，先把修改的数据记到日志文件中，以便故障时进行恢复。 不过，AOF 日志正好相反，它是写后日志，“写后”的意思是 Redis 是先执行命令，把数据写入内存，然后才记...","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/cs/database/redis/persistency/AOF.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"AOF"}],["meta",{"property":"og:description","content":"AOF Append Only File (追加文件）。 特点 写后日志 说到日志，数据库的 redo log 写前日志（Write Ahead Log, WAL），也就是说，在实际写数据前，先把修改的数据记到日志文件中，以便故障时进行恢复。 不过，AOF 日志正好相反，它是写后日志，“写后”的意思是 Redis 是先执行命令，把数据写入内存，然后才记..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/davidliuk/images@master/blog/28afd536c57a46447ddab0a2062abe84.png"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-05-08T07:35:02.000Z"}],["meta",{"property":"article:modified_time","content":"2024-05-08T07:35:02.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"AOF\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/davidliuk/images@master/blog/28afd536c57a46447ddab0a2062abe84.png\\"],\\"dateModified\\":\\"2024-05-08T07:35:02.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[{"level":2,"title":"特点","slug":"特点","link":"#特点","children":[{"level":3,"title":"写后日志","slug":"写后日志","link":"#写后日志","children":[]},{"level":3,"title":"写回策略","slug":"写回策略","link":"#写回策略","children":[]},{"level":3,"title":"冗余记录","slug":"冗余记录","link":"#冗余记录","children":[]}]}],"git":{"createdTime":1677504602000,"updatedTime":1715153702000,"contributors":[{"name":"刘大维","email":"davidliu@liudaweideMacBook-Pro.local","commits":3},{"name":"davidliuk","email":"l729641074@163.com","commits":2}]},"readingTime":{"minutes":3.29,"words":986},"filePathRelative":"cs/database/redis/persistency/AOF.md","localizedDate":"February 27, 2023","excerpt":"\\n<p>Append Only File (追加文件）。</p>\\n<h2>特点</h2>\\n<h3>写后日志</h3>\\n<p>说到日志，数据库的 redo log 写前日志（Write Ahead Log, WAL），也就是说，在实际写数据前，先把修改的数据记到日志文件中，以便故障时进行恢复。</p>\\n<p>不过，AOF 日志正好相反，它是写后日志，“写后”的意思是 Redis 是先执行命令，把数据写入内存，然后才记录日志，如下图所示：</p>\\n<p>那 AOF 为什么要先执行命令再记日志呢？要回答这个问题，我们要先知道 AOF 里记录了什么内容。</p>\\n<ul>\\n<li>可以避免出现记录错误命令的情况，避免额外的检查开销。</li>\\n<li>它是在命令执行后才记录日志，所以不会阻塞当前的写操作。</li>\\n</ul>","autoDesc":true}`);export{p as comp,c as data};
