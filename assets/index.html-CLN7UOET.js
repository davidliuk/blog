import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as p,d as e,o as n}from"./app-ChU1gMRF.js";const t={};function a(r,l){return n(),p("div",null,l[0]||(l[0]=[e(`<h1 id="结构" tabindex="-1"><a class="header-anchor" href="#结构"><span>结构</span></a></h1><p>数据结构的逻辑结构与存储结构的关系是抽象与具体的关系。</p><h2 id="逻辑结构" tabindex="-1"><a class="header-anchor" href="#逻辑结构"><span>逻辑结构</span></a></h2><p>是指数据对象中数据元素之间的相互关系。</p><ul><li><p>集：记录</p><p>快速的判断一个点是否存在</p></li><li><p>线：有序（偏序）</p><p>有序和混乱是相对的概念</p><p>有序可以做减治，混乱只能暴力FOR遍历</p></li><li><p>树：分类</p><p>边数=点数-1，因为根节点入度为0，其他节点入度为1.</p></li><li><p>图：依赖</p><p>DAG(Directed Acyclic Graph)</p><p>DAG，核心就是值传递</p><p>如果是环图，要引入单调收敛的状态变量来使节点加状态变量共同组成一个DAG</p></li></ul><h2 id="存储结构" tabindex="-1"><a class="header-anchor" href="#存储结构"><span>存储结构</span></a></h2><p>又名物理结构，是指数据的逻辑结构在计算机中的存储形式。</p><ul><li>顺序存储</li><li>链式存储</li><li>散列存储或哈希存储</li></ul><h2 id="两要素" tabindex="-1"><a class="header-anchor" href="#两要素"><span>两要素</span></a></h2><ul><li><p>节点</p><p>状态</p></li><li><p>边</p><p>代表节点之间的关系，可以有向可以无向（无向边即两条相反的有向边）</p><p>可以表示节点之间值传递的关系</p></li></ul><h2 id="值传递" tabindex="-1"><a class="header-anchor" href="#值传递"><span>值传递</span></a></h2><p>DAG，核心就是值传递</p><p>如果是环图，要引入单调收敛的状态变量来使节点加状态变量共同组成一个DAG</p><ol><li><p>DAG</p><ol><li>前端：数据响应式原理</li><li>后端： <ol><li>类、接口之间的继承、实现、依赖的关系</li><li>的依赖关系</li><li>观察者模式</li></ol></li><li>数据库：在进行增加、删除和更新操作时： <ol><li>索引更新</li><li>外键约束带来的级联删除</li></ol></li></ol></li><li><p>先序和后序</p><pre><code>- 先序：已知点 -&gt; 未知点

- 后序：未知点 -&gt;  已知点
</code></pre></li><li><p>不设置单调收敛的变量会出现循环依赖（死锁），造成死循环。</p></li><li><p>优化：滚动数组优化，只需要记录dp_1, dp_2，来记录前两个节点的值，每次求解后滚动更新</p></li><li><p>n依赖于n-1, n-2两个节点的递推关系的问题：</p><p>递推公式如下：dp[n] = f(dp[n - 1], dp[n - 2])</p><p>其中f可以是任何二元函数，如求max, min, +, -, /, *等，如果f不是纯函数，还可以结合外部变量实现一些更加复杂问题的求解</p></li><li><p>np问题：</p><ul><li>排序类：n!，如博弈型DP</li><li>组合类：2^n，如背包问题、LIS等问题</li></ul></li></ol><hr><ol><li><p>入度代表的语义是什么？</p><p>代表该点的依赖</p></li><li><p>递推四要素</p><p>如下以斐波那契为例：</p><ol><li>状态：dp[n] 表示第n个斐波那契数的值</li><li>边界：dp[0], dp[1]</li><li>递推：dp[n] = dp[n-1] + dp[n-2]</li><li>方向： <ul><li>先序：DFS、BFS、FOR</li><li>后序：DFS</li></ul></li></ol></li><li><p>请写出在DAG图定义如下构成的递推公式：</p><p>a为当前节点的权值</p><ul><li>最短路径：<code>dp(n) = min{ dp(n - 1), dp(n - 2)} + a;</code></li><li>最长路径：<code>dp(n) = max{ dp(n - 1), dp(n - 2)} + a;</code></li><li>路径个数：<code>dp(n) = sum{ dp(n - 1), dp(n - 2)} + 1;</code></li></ul></li><li><p>了解普通队列、优先队列、双端队列这三种队列</p><ul><li>普通队列：FIFO</li><li>优先队列：可以根据优先级进行“插队”，从而求最短路</li><li>双端队列：队列两边都可以入队</li></ul></li></ol>`,16)]))}const c=i(t,[["render",a],["__file","index.html.vue"]]),s=JSON.parse(`{"path":"/algo/framework/structure/","title":"结构","lang":"en-US","frontmatter":{"description":"结构 数据结构的逻辑结构与存储结构的关系是抽象与具体的关系。 逻辑结构 是指数据对象中数据元素之间的相互关系。 集：记录 快速的判断一个点是否存在 线：有序（偏序） 有序和混乱是相对的概念 有序可以做减治，混乱只能暴力FOR遍历 树：分类 边数=点数-1，因为根节点入度为0，其他节点入度为1. 图：依赖 DAG(Directed Acyclic Gra...","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/algo/framework/structure/"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"结构"}],["meta",{"property":"og:description","content":"结构 数据结构的逻辑结构与存储结构的关系是抽象与具体的关系。 逻辑结构 是指数据对象中数据元素之间的相互关系。 集：记录 快速的判断一个点是否存在 线：有序（偏序） 有序和混乱是相对的概念 有序可以做减治，混乱只能暴力FOR遍历 树：分类 边数=点数-1，因为根节点入度为0，其他节点入度为1. 图：依赖 DAG(Directed Acyclic Gra..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-11-22T03:36:46.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-22T03:36:46.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"结构\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-22T03:36:46.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[{"level":2,"title":"逻辑结构","slug":"逻辑结构","link":"#逻辑结构","children":[]},{"level":2,"title":"存储结构","slug":"存储结构","link":"#存储结构","children":[]},{"level":2,"title":"两要素","slug":"两要素","link":"#两要素","children":[]},{"level":2,"title":"值传递","slug":"值传递","link":"#值传递","children":[]}],"git":{"createdTime":1732244737000,"updatedTime":1732246606000,"contributors":[{"name":"David Liu","email":"liudawei@seas.upenn.edu","commits":2}]},"readingTime":{"minutes":2.63,"words":788},"filePathRelative":"algo/framework/structure/README.md","localizedDate":"November 22, 2024","excerpt":"\\n<p>数据结构的逻辑结构与存储结构的关系是抽象与具体的关系。</p>\\n<h2>逻辑结构</h2>\\n<p>是指数据对象中数据元素之间的相互关系。</p>\\n<ul>\\n<li>\\n<p>集：记录</p>\\n<p>快速的判断一个点是否存在</p>\\n</li>\\n<li>\\n<p>线：有序（偏序）</p>\\n<p>有序和混乱是相对的概念</p>\\n<p>有序可以做减治，混乱只能暴力FOR遍历</p>\\n</li>\\n<li>\\n<p>树：分类</p>\\n<p>边数=点数-1，因为根节点入度为0，其他节点入度为1.</p>\\n</li>\\n<li>\\n<p>图：依赖</p>\\n<p>DAG(Directed Acyclic Graph)</p>\\n<p>DAG，核心就是值传递</p>\\n<p>如果是环图，要引入单调收敛的状态变量来使节点加状态变量共同组成一个DAG</p>\\n</li>\\n</ul>","autoDesc":true}`);export{c as comp,s as data};
