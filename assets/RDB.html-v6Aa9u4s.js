import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as e,b as a,o as n}from"./app-B3ooTv29.js";const l={};function t(p,i){return n(),e("div",null,i[0]||(i[0]=[a(`<h1 id="rdb" tabindex="-1"><a class="header-anchor" href="#rdb"><span>RDB</span></a></h1><p>Rediscover Database Backup file，数据备份文件，数据快照。</p><h3 id="使用方式" tabindex="-1"><a class="header-anchor" href="#使用方式"><span>使用方式</span></a></h3><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">redis-cli</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">save</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> # 主进程执行RDB，阻塞所有命令，停机时实际上会自动执行一次，一般是宕机时使用</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">bgsave</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> # 子进程执行RDB，避免主进程受到影响</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="配置参数" tabindex="-1"><a class="header-anchor" href="#配置参数"><span>配置参数</span></a></h3><p>在redis.conf中可以找到</p><div class="language-conf line-numbers-mode" data-highlighter="shiki" data-ext="conf" data-title="conf" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span># 保存触发事件和门槛</span></span>
<span class="line"><span>save 900 1</span></span>
<span class="line"><span>save 300 10</span></span>
<span class="line"><span>save 60 1000</span></span>
<span class="line"><span># save &quot;&quot; 禁用RDB</span></span>
<span class="line"><span># 是否压缩，不建议开启，压缩会消耗CPU，磁盘的话不值钱</span></span>
<span class="line"><span>rdbcompression yes</span></span>
<span class="line"><span># RDB文件名称</span></span>
<span class="line"><span>dbfilename dump.rdb</span></span>
<span class="line"><span># 文件保存路径</span></span>
<span class="line"><span>dir ./</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>一般设置为60秒尽量减少宕机时数据丢失，但是还是可能会丢失；为什么不能太小，因为写一遍比较耗时</p><p>解决方案：AOF来补充</p><h3 id="原理" tabindex="-1"><a class="header-anchor" href="#原理"><span>原理</span></a></h3><p>bgsave开始时会fork主进程得到子进程，子进程会把页表拷贝一份（非常快，不需要拷贝原始数据）</p><p>由于linux的写时复制（Copy on write）技术：有多个调用者（callers）同时请求相同资源（如内存或磁盘上的数据存储），他们会共同获取相同的指针指向相同的资源，直到某个调用者试图修改资源的内容时，系统才会真正复制一份专用副本（private copy）给该调用者，而其他调用者所见到的最初的资源仍然保持不变。</p><p>可以防止脏读等情况发生，但是也可能出现内存占用变多的情况（因为主进程写的时候会复制新的内容出来，如果写的很多，额外内存占用就多）</p><p>为了防止新写入的数据被fork子进程记录，</p><p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/截屏2023-02-16 20.22.39.png" alt="截屏2023-02-16 20.22.39" loading="lazy"></p><p>RDB方式bgsave的基本流程？</p><ul><li>fok主进程得到一个子进程，共享内存空间</li><li>子进程读取内存数据并写入新的RDB文件</li><li>用新RDB文件替换I旧的RDB文件。</li></ul><p>RDB会在什么时候执行？Save 60 1000代表什么含义？</p><ul><li>默认是服务停止时。</li><li>代表60秒内至少执行1000次修改则触发RDB</li></ul><p>RDB的缺点？</p><ul><li>RDB执行间隔时间长，两次RDB之间写入数据有丢失的风险</li><li>fork子进程、压缩、写出RDB文件都比较耗时</li></ul>`,21)]))}const c=s(l,[["render",t],["__file","RDB.html.vue"]]),h=JSON.parse(`{"path":"/cs/database/redis/persistency/RDB.html","title":"RDB","lang":"en-US","frontmatter":{"description":"RDB Rediscover Database Backup file，数据备份文件，数据快照。 使用方式 配置参数 在redis.conf中可以找到 一般设置为60秒尽量减少宕机时数据丢失，但是还是可能会丢失；为什么不能太小，因为写一遍比较耗时 解决方案：AOF来补充 原理 bgsave开始时会fork主进程得到子进程，子进程会把页表拷贝一份（非常快...","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/cs/database/redis/persistency/RDB.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"RDB"}],["meta",{"property":"og:description","content":"RDB Rediscover Database Backup file，数据备份文件，数据快照。 使用方式 配置参数 在redis.conf中可以找到 一般设置为60秒尽量减少宕机时数据丢失，但是还是可能会丢失；为什么不能太小，因为写一遍比较耗时 解决方案：AOF来补充 原理 bgsave开始时会fork主进程得到子进程，子进程会把页表拷贝一份（非常快..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/%E6%88%AA%E5%B1%8F2023-02-16%2020.22.39.png"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-05-08T07:35:02.000Z"}],["meta",{"property":"article:modified_time","content":"2024-05-08T07:35:02.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"RDB\\",\\"image\\":[\\"https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/%E6%88%AA%E5%B1%8F2023-02-16%2020.22.39.png\\"],\\"dateModified\\":\\"2024-05-08T07:35:02.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[{"level":3,"title":"使用方式","slug":"使用方式","link":"#使用方式","children":[]},{"level":3,"title":"配置参数","slug":"配置参数","link":"#配置参数","children":[]},{"level":3,"title":"原理","slug":"原理","link":"#原理","children":[]}],"git":{"createdTime":1677504602000,"updatedTime":1715153702000,"contributors":[{"name":"刘大维","email":"davidliu@liudaweideMacBook-Pro.local","commits":3}]},"readingTime":{"minutes":1.97,"words":591},"filePathRelative":"cs/database/redis/persistency/RDB.md","localizedDate":"February 27, 2023","excerpt":"\\n<p>Rediscover Database Backup file，数据备份文件，数据快照。</p>\\n<h3>使用方式</h3>\\n<div class=\\"language-sh line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"sh\\" data-title=\\"sh\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">redis-cli</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">save</span><span style=\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\"> # 主进程执行RDB，阻塞所有命令，停机时实际上会自动执行一次，一般是宕机时使用</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">bgsave</span><span style=\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\"> # 子进程执行RDB，避免主进程受到影响</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{c as comp,h as data};
