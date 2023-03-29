import{_ as e,V as a,W as d,Z as r}from"./framework-e5d7a6b2.js";const h={},i=r('<h1 id="分布式缓存" tabindex="-1"><a class="header-anchor" href="#分布式缓存" aria-hidden="true">#</a> 分布式缓存</h1><h2 id="单点redis的问题" tabindex="-1"><a class="header-anchor" href="#单点redis的问题" aria-hidden="true">#</a> 单点Redis的问题</h2><h3 id="数据丢失问题" tabindex="-1"><a class="header-anchor" href="#数据丢失问题" aria-hidden="true">#</a> 数据丢失问题</h3><p>=&gt; Redis数据持久化</p><h3 id="并发能力问题" tabindex="-1"><a class="header-anchor" href="#并发能力问题" aria-hidden="true">#</a> 并发能力问题</h3><p>=&gt; 搭建主从集群，实现读写分离（不然写的时候互斥，影响并发性能）</p><h3 id="故障恢复问题" tabindex="-1"><a class="header-anchor" href="#故障恢复问题" aria-hidden="true">#</a> 故障恢复问题</h3><p>=&gt; 利用Redis哨兵，实现健康检测和自动恢复</p><h3 id="存储能力问题" tabindex="-1"><a class="header-anchor" href="#存储能力问题" aria-hidden="true">#</a> 存储能力问题</h3><p>=&gt; 搭建分片集群，利用插槽机制实现动态扩容</p>',10),t=[i];function n(s,c){return a(),d("div",null,t)}const _=e(h,[["render",n],["__file","index.html.vue"]]);export{_ as default};
