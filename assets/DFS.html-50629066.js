import{_ as a,V as e,W as d,Z as i}from"./framework-e5d7a6b2.js";const r={},h=i('<h1 id="dfs" tabindex="-1"><a class="header-anchor" href="#dfs" aria-hidden="true">#</a> DFS</h1><h3 id="dfs基础" tabindex="-1"><a class="header-anchor" href="#dfs基础" aria-hidden="true">#</a> DFS基础</h3><p>栈搜索</p><p>运行时栈：栈里的是仍在运行的</p><p>入栈：函数开始运行</p><p>出栈：函数运行结束</p><h3 id="dfs步骤" tabindex="-1"><a class="header-anchor" href="#dfs步骤" aria-hidden="true">#</a> DFS步骤</h3><ol><li><p>出栈（即函数被调用了）</p></li><li><p>捕捉：全局变量捕捉target值</p><p>出队的时候进行目标点的捕捉，如果是目标点就返回，不再继续扩展</p></li><li><p>扩展</p></li><li><p>入栈</p></li></ol><h3 id="先序遍历" tabindex="-1"><a class="header-anchor" href="#先序遍历" aria-hidden="true">#</a> 先序遍历</h3><p>从已知点开始出发</p><p>（写法在本质上与BFS非常相似，本质上还是拓扑排序）</p><h3 id="后序遍历" tabindex="-1"><a class="header-anchor" href="#后序遍历" aria-hidden="true">#</a> 后序遍历</h3><p>从未知点开始出发</p><p>如果需要求拓扑排序的话，只需要在dp[i] = dfs(i - 1) + dfs(i - 2)后面一行加上topo.add(i)即可，因为这里是后续，dp[i]依赖的边已经访问完了</p><p>中序遍历：</p><p>仅存在于二叉树中，且仅在二叉搜索树上有意义，其他情况下没有实际意义</p><h3 id="dfs相对于bfs的优势" tabindex="-1"><a class="header-anchor" href="#dfs相对于bfs的优势" aria-hidden="true">#</a> DFS相对于BFS的优势</h3><ul><li>后序传值（DFS没有后序）</li><li>先序回溯（BFS不能回溯）</li><li>宽树搜索</li></ul>',18),s=[h];function p(t,l){return e(),d("div",null,s)}const c=a(r,[["render",p],["__file","DFS.html.vue"]]);export{c as default};
