import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as i,c as a,d as n}from"./app-9107e99b.js";const s={},d=n(`<h1 id="rdb" tabindex="-1"><a class="header-anchor" href="#rdb" aria-hidden="true">#</a> RDB</h1><p>Rediscover Database Backup file，数据备份文件，数据快照。</p><h3 id="使用方式" tabindex="-1"><a class="header-anchor" href="#使用方式" aria-hidden="true">#</a> 使用方式</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>redis-cli
save <span class="token comment"># 主进程执行RDB，阻塞所有命令，停机时实际上会自动执行一次，一般是宕机时使用</span>
bgsave <span class="token comment"># 子进程执行RDB，避免主进程受到影响</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="配置参数" tabindex="-1"><a class="header-anchor" href="#配置参数" aria-hidden="true">#</a> 配置参数</h3><p>在redis.conf中可以找到</p><div class="language-conf line-numbers-mode" data-ext="conf"><pre class="language-conf"><code># 保存触发事件和门槛
save 900 1
save 300 10
save 60 1000
# save &quot;&quot; 禁用RDB
# 是否压缩，不建议开启，压缩会消耗CPU，磁盘的话不值钱
rdbcompression yes
# RDB文件名称
dbfilename dump.rdb
# 文件保存路径
dir ./
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>一般设置为60秒尽量减少宕机时数据丢失，但是还是可能会丢失；为什么不能太小，因为写一遍比较耗时</p><p>解决方案：AOF来补充</p><h3 id="原理" tabindex="-1"><a class="header-anchor" href="#原理" aria-hidden="true">#</a> 原理</h3><p>bgsave开始时会fork主进程得到子进程，子进程会把页表拷贝一份（非常快，不需要拷贝原始数据）</p><p>由于linux的写时复制（Copy on write）技术：有多个调用者（callers）同时请求相同资源（如内存或磁盘上的数据存储），他们会共同获取相同的指针指向相同的资源，直到某个调用者试图修改资源的内容时，系统才会真正复制一份专用副本（private copy）给该调用者，而其他调用者所见到的最初的资源仍然保持不变。</p><p>可以防止脏读等情况发生，但是也可能出现内存占用变多的情况（因为主进程写的时候会复制新的内容出来，如果写的很多，额外内存占用就多）</p><p>为了防止新写入的数据被fork子进程记录，</p><p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/截屏2023-02-16 20.22.39.png" alt="截屏2023-02-16 20.22.39" loading="lazy"></p><p>RDB方式bgsave的基本流程？</p><ul><li>fok主进程得到一个子进程，共享内存空间</li><li>子进程读取内存数据并写入新的RDB文件</li><li>用新RDB文件替换I旧的RDB文件。</li></ul><p>RDB会在什么时候执行？Save 60 1000代表什么含义？</p><ul><li>默认是服务停止时。</li><li>代表60秒内至少执行1000次修改则触发RDB</li></ul><p>RDB的缺点？</p><ul><li>RDB执行间隔时间长，两次RDB之间写入数据有丢失的风险</li><li>fork子进程、压缩、写出RDB文件都比较耗时</li></ul>`,21),l=[d];function r(c,o){return i(),a("div",null,l)}const u=e(s,[["render",r],["__file","RDB.html.vue"]]);export{u as default};
