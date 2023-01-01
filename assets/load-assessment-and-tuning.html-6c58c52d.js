import{_ as a,V as e,W as p,a0 as r}from"./framework-705b829b.js";const i={},n=r('<h1 id="load-assessment-and-tuning" tabindex="-1"><a class="header-anchor" href="#load-assessment-and-tuning" aria-hidden="true">#</a> load assessment and tuning</h1><p>sar：发现瓶颈在哪，cpu还是io</p><h3 id="when-cpu-load-is-high" tabindex="-1"><a class="header-anchor" href="#when-cpu-load-is-high" aria-hidden="true">#</a> When CPU load is high</h3><p>Top &amp; sar</p><p>Ps 看 CPU time</p><p>strace 看系统调用</p><h3 id="when-i-o-load-is-high" tabindex="-1"><a class="header-anchor" href="#when-i-o-load-is-high" aria-hidden="true">#</a> When I/O load is high</h3><p>swap 内存不够</p><p>数据库I/O多</p><h3 id="prefork" tabindex="-1"><a class="header-anchor" href="#prefork" aria-hidden="true">#</a> prefork</h3><h3 id="多进程-多线程" tabindex="-1"><a class="header-anchor" href="#多进程-多线程" aria-hidden="true">#</a> 多进程 &amp; 多线程</h3><p>多进程隔离性更好，一个进程挂了不影响别人</p><p>多线程，一个线程挂了整个进程都挂了</p><p>epoll</p><p>nginx和redis都是这个，高性能，多路复用</p><p>copy on write多进程多线程没有本质区别</p><p>但是上下文切换很大区别</p><p>使用work可能提高上下文切换的</p><p>现代计算机硬盘瓶颈：IO</p><ol><li><p>硬盘传输慢</p><p>固态快很多</p></li><li><p>网络传输慢</p></li></ol><p>Hadoop访问硬盘，spark全放内存里，所以spark快很多</p><p>内存死亡</p><p>很难避免</p><p>然后进程死亡可以把所有内存还给系统，就没事了</p><h3 id="worker-mode" tabindex="-1"><a class="header-anchor" href="#worker-mode" aria-hidden="true">#</a> Worker mode</h3><p>多进场多线程</p><p>优化：</p>',27),s=[n];function h(d,o){return e(),p("div",null,s)}const l=a(i,[["render",h],["__file","load-assessment-and-tuning.html.vue"]]);export{l as default};
