import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as n,d as i,o as s}from"./app-DIqbhby7.js";const p={};function t(o,e){return s(),n("div",null,e[0]||(e[0]=[i('<h1 id="load-assessment-and-tuning" tabindex="-1"><a class="header-anchor" href="#load-assessment-and-tuning"><span>load assessment and tuning</span></a></h1><p>sar：发现瓶颈在哪，cpu 还是 io</p><h3 id="when-cpu-load-is-high" tabindex="-1"><a class="header-anchor" href="#when-cpu-load-is-high"><span>When CPU load is high</span></a></h3><p>Top &amp; sar</p><p>Ps 看 CPU time</p><p>strace 看系统调用</p><h3 id="when-i-o-load-is-high" tabindex="-1"><a class="header-anchor" href="#when-i-o-load-is-high"><span>When I/O load is high</span></a></h3><p>swap 内存不够</p><p>数据库 I/O 多</p><h3 id="prefork" tabindex="-1"><a class="header-anchor" href="#prefork"><span>prefork</span></a></h3><h3 id="多进程-多线程" tabindex="-1"><a class="header-anchor" href="#多进程-多线程"><span>多进程 &amp; 多线程</span></a></h3><p>多进程隔离性更好，一个进程挂了不影响别人</p><p>多线程，一个线程挂了整个进程都挂了</p><p>epoll</p><p>nginx 和 redis 都是这个，高性能，多路复用</p><p>copy on write 多进程多线程没有本质区别</p><p>但是上下文切换很大区别</p><p>使用 work 可能提高上下文切换的</p><p>现代计算机硬盘瓶颈：IO</p><ol><li><p>硬盘传输慢</p><p>固态快很多</p></li><li><p>网络传输慢</p></li></ol><p>Hadoop 访问硬盘，spark 全放内存里，所以 spark 快很多</p><p>内存死亡</p><p>很难避免</p><p>然后进程死亡可以把所有内存还给系统，就没事了</p><h3 id="worker-mode" tabindex="-1"><a class="header-anchor" href="#worker-mode"><span>Worker mode</span></a></h3><p>多进场多线程</p><p>优化：</p>',27)]))}const d=a(p,[["render",t],["__file","load-assessment-and-tuning.html.vue"]]),h=JSON.parse(`{"path":"/se/devops/unix/availability/load-assessment-and-tuning.html","title":"load assessment and tuning","lang":"en-US","frontmatter":{"description":"load assessment and tuning sar：发现瓶颈在哪，cpu 还是 io When CPU load is high Top & sar Ps 看 CPU time strace 看系统调用 When I/O load is high swap 内存不够 数据库 I/O 多 prefork 多进程 & 多线程 多进程隔离性更好，一...","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/se/devops/unix/availability/load-assessment-and-tuning.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"load assessment and tuning"}],["meta",{"property":"og:description","content":"load assessment and tuning sar：发现瓶颈在哪，cpu 还是 io When CPU load is high Top & sar Ps 看 CPU time strace 看系统调用 When I/O load is high swap 内存不够 数据库 I/O 多 prefork 多进程 & 多线程 多进程隔离性更好，一..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-08-21T10:17:45.000Z"}],["meta",{"property":"article:modified_time","content":"2023-08-21T10:17:45.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"load assessment and tuning\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-08-21T10:17:45.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[{"level":3,"title":"When CPU load is high","slug":"when-cpu-load-is-high","link":"#when-cpu-load-is-high","children":[]},{"level":3,"title":"When I/O load is high","slug":"when-i-o-load-is-high","link":"#when-i-o-load-is-high","children":[]},{"level":3,"title":"prefork","slug":"prefork","link":"#prefork","children":[]},{"level":3,"title":"多进程 & 多线程","slug":"多进程-多线程","link":"#多进程-多线程","children":[]},{"level":3,"title":"Worker mode","slug":"worker-mode","link":"#worker-mode","children":[]}],"git":{"createdTime":1669996395000,"updatedTime":1692613065000,"contributors":[{"name":"liudawei47","email":"liudawei47@jd.com","commits":2},{"name":"刘大维","email":"davidliu@liudaweideMacBook-Pro.local","commits":1}]},"readingTime":{"minutes":0.75,"words":226},"filePathRelative":"se/devops/unix/availability/load-assessment-and-tuning.md","localizedDate":"December 2, 2022","excerpt":"\\n<p>sar：发现瓶颈在哪，cpu 还是 io</p>\\n<h3>When CPU load is high</h3>\\n<p>Top &amp; sar</p>\\n<p>Ps 看 CPU time</p>\\n<p>strace 看系统调用</p>\\n<h3>When I/O load is high</h3>\\n<p>swap 内存不够</p>\\n<p>数据库 I/O 多</p>\\n<h3>prefork</h3>\\n<h3>多进程 &amp; 多线程</h3>\\n<p>多进程隔离性更好，一个进程挂了不影响别人</p>\\n<p>多线程，一个线程挂了整个进程都挂了</p>\\n<p>epoll</p>\\n<p>nginx 和 redis 都是这个，高性能，多路复用</p>","autoDesc":true}`);export{d as comp,h as data};
