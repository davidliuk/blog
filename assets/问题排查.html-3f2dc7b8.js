import{_ as a,V as e,W as t,Z as i}from"./framework-e5d7a6b2.js";const l={},c=i('<h1 id="线上问题排查" tabindex="-1"><a class="header-anchor" href="#线上问题排查" aria-hidden="true">#</a> 线上问题排查</h1><h2 id="cpu-过高-爆掉" tabindex="-1"><a class="header-anchor" href="#cpu-过高-爆掉" aria-hidden="true">#</a> CPU 过高/爆掉</h2><p>JVM调优过程中，如果CPU爆掉了，可以通过以下步骤进行排查：</p><ol><li><p>使用top命令查看CPU占用率最高的进程，确定是哪个进程导致了CPU爆满。</p></li><li><p>使用jstack命令获取Java进程的线程堆栈信息，查看哪些线程正在运行，是否存在死循环、长时间等待等问题。</p></li><li><p>使用jmap命令获取Java进程的内存信息，查看堆内存使用情况、GC情况等，是否存在内存泄漏等问题。</p></li><li><p>使用jstat命令获取Java进程的GC情况，查看GC频率、GC时间等，是否存在频繁的Full GC等问题。</p></li><li><p>根据以上信息，确定问题所在，进行相应的优化和调整，例如优化代码、调整JVM参数、增加硬件资源等。</p></li></ol><p>总的来说，JVM调优过程中，如果CPU爆掉了，需要通过多种手段进行排查，确定问题所在，从而进行相应的优化和调整。</p><p>jconsole可以观察内存变化</p>',6),p=[c];function o(r,s){return e(),t("div",null,p)}const _=a(l,[["render",o],["__file","问题排查.html.vue"]]);export{_ as default};
