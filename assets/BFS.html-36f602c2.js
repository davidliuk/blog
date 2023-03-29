import{_ as e,V as a,W as i,Z as l}from"./framework-e5d7a6b2.js";const r={},p=l('<h1 id="bfs" tabindex="-1"><a class="header-anchor" href="#bfs" aria-hidden="true">#</a> BFS</h1><h3 id="bfs基础" tabindex="-1"><a class="header-anchor" href="#bfs基础" aria-hidden="true">#</a> BFS基础</h3><p>队列搜索</p><p>等待队列：队列里面的是已经结束，等待扩展的</p><p>入队：节点进入等待</p><p>出队：节点开始运行</p><h3 id="bfs步骤" tabindex="-1"><a class="header-anchor" href="#bfs步骤" aria-hidden="true">#</a> BFS步骤</h3><ol><li><p>出队</p></li><li><p>捕捉：全局变量捕捉target值</p><p>出队的时候进行目标点的捕捉，如果是目标点就返回，不再继续扩展</p></li><li><p>扩展</p></li><li><p>入队</p></li></ol><h3 id="bfs拓展" tabindex="-1"><a class="header-anchor" href="#bfs拓展" aria-hidden="true">#</a> BFS拓展</h3><ul><li><p>递推公式：即这个边的语义，只需要改变递推公式就可以改变边的语义</p><p>如求和、求Max、求Min等</p></li><li><p>判断环路：拓扑排序</p></li><li><p>队列类型</p><ul><li>普通队列：先进先出</li><li>优先队列：可以根据优先级插队</li><li>双端队列</li></ul></li></ul>',10),s=[p];function t(h,d){return a(),i("div",null,s)}const c=e(r,[["render",t],["__file","BFS.html.vue"]]);export{c as default};
