import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,f as p}from"./app.7ae2a322.js";const t={},e=p(`<p>构图具有一定的灵活性，需要多加联系（一开始可能并不是一个图）</p><p>![截屏2022-07-11 21.45.23](/Users/davidliu/Library/Application Support/typora-user-images/截屏2022-07-11 21.45.23.png)</p><p>bfs</p><ul><li>拓扑排序</li><li>分层遍历</li><li>连通块</li></ul><p>连通块相关的所有</p><ol><li>bfs</li><li>UFS</li></ol><p>能用bfs解决的问题就用bfs解决，不用考虑dfs因为，dfs潜在stackoverflow（iteration的dfs不好写，而且面试官看不懂）</p><p>![截屏2022-07-11 21.49.05](/Users/davidliu/Library/Application Support/typora-user-images/截屏2022-07-11 21.49.05.png)</p><p>java的队列用ArrayDeque，比较快，不需要距离的时候Distance可以用hashset vistied代替</p><p>在进入队列的时候就要立刻标记</p><p><strong>一旦入队就要马上标记，否则会有元素重复入队</strong></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">bfs</span><span class="token punctuation">(</span><span class="token class-name">Node</span> node<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">Queue</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Node</span><span class="token punctuation">&gt;</span></span> queue <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayDeque</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">Set</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Node</span><span class="token punctuation">&gt;</span></span> set <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashSet</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    
    queue<span class="token punctuation">.</span><span class="token function">offer</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span><span class="token punctuation">;</span>
    set<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token operator">!</span>queue<span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Node</span> node <span class="token operator">=</span> queue<span class="token punctuation">.</span><span class="token function">poll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Node</span> neighbor<span class="token operator">:</span> node<span class="token punctuation">.</span><span class="token function">getNeighbors</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>distance<span class="token punctuation">.</span><span class="token function">containKeys</span><span class="token punctuation">(</span>neighbor<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">continue</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            
            queue<span class="token punctuation">.</span><span class="token function">offer</span><span class="token punctuation">(</span>neighbor<span class="token punctuation">)</span><span class="token punctuation">;</span>
            set<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>neighbor<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>克隆图</p><p>劝分不劝和</p><ol><li>bfs找所有的点</li><li>复制所有的点</li><li>复制所有的边</li></ol><p>![截屏2022-07-11 22.13.23](/Users/davidliu/Library/Application Support/typora-user-images/截屏2022-07-11 22.13.23.png)</p><p>BFS分层 vs 不分层</p><p>（不分层的如上面的，分层的加一层for循环先取出来这一层多长）</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// java的队列用ArrayDeque，比较快，不需要距离的时候Distance可以用hashset vistied代替</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">bfs</span><span class="token punctuation">(</span><span class="token class-name">Node</span> node<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">Queue</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Node</span><span class="token punctuation">&gt;</span></span> queue <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayDeque</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Node</span><span class="token punctuation">,</span> <span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> distance <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    
    queue<span class="token punctuation">.</span><span class="token function">offer</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span><span class="token punctuation">;</span>
    distance<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>node<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    
    <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token operator">!</span>queue<span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 队列内为当前层的所有节点，此时记录下队列大小对整层进行遍历</span>
        <span class="token keyword">int</span> size <span class="token operator">=</span> queue<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> size<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">Node</span> node <span class="token operator">=</span> queue<span class="token punctuation">.</span><span class="token function">poll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Node</span> neighbor<span class="token operator">:</span> node<span class="token punctuation">.</span><span class="token function">getNeighbors</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>distance<span class="token punctuation">.</span><span class="token function">containKeys</span><span class="token punctuation">(</span>neighbor<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token keyword">continue</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
                
                queue<span class="token punctuation">.</span><span class="token function">offer</span><span class="token punctuation">(</span>neighbor<span class="token punctuation">)</span><span class="token punctuation">;</span>
                distance<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>neighbor<span class="token punctuation">,</span> distance<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// 此处加对整层的操作</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>图上的BFS：</p><p>定义偏移量，X_OFFSET，Y_OFFEST</p><h3 id="拓扑排序" tabindex="-1"><a class="header-anchor" href="#拓扑排序" aria-hidden="true">#</a> 拓扑排序</h3><p>四种问法</p><ol><li><p>求任意一个拓扑排序</p></li><li><p>问是否存在拓扑排序</p><p>如果存在循环依赖（环），就没有拓扑排序（即最后的order的大小不等于节点数）</p></li><li><p>求是否存在且仅存在一个拓扑排序</p><p>（queue的size始终为1）</p><p>在外层while里的第一句加上一句判queue的len是否&gt;1</p></li><li><p>求字典序最小的拓扑排序</p><p>这个的时候queue用priorityQueue来存，同时改为在取出队列时放入order</p></li></ol><p>（第一节课，所有数据结构的用法和复杂度）</p><p>入度( In-degree）:</p><p>有向图（Directed Graph）中指向当前节点的点的个数（或指向当前节点的边的条数 )</p><p>算法描述：</p><ol><li>统计每个点的入度</li><li>将每个入度为0的点放入队列（Queue ) 中作为起始节点</li><li>不断从队列中享出一个点，去掉这个点的所有连边(指向其他点的边），其他点的相应的度 - 1</li><li>一旦发现新的入度为0的点，丢回队列中</li></ol><p>拓扑排序并不是传统的排序算法</p><p>一个图可能存在多个拓扑序( Topological Order ) , 也可能不存在任何拓扑序</p><p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/截屏2022-08-13 11.06.17.png" alt="截屏2022-08-13 11.06.17" loading="lazy"></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 实际场景中图不可能用邻接矩阵，都在用邻接表</span>
<span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">DirectedGraphNode</span><span class="token punctuation">&gt;</span></span> <span class="token function">topSort</span><span class="token punctuation">(</span><span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">DirectedGraphNode</span><span class="token punctuation">&gt;</span></span> graph<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">DirectedGraphNode</span><span class="token punctuation">&gt;</span></span> order <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// topo 用indegree来判断是否可以入队，其实相当于普通的里面的set</span>
    <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">DirectedGraphNode</span><span class="token punctuation">,</span> <span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> indegree <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">DirectedGraphNode</span> node<span class="token operator">:</span> graph<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">DirectedGraphNode</span> neighbor<span class="token operator">:</span> graph<span class="token punctuation">.</span>neighbors<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            indegree<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span>neighbor<span class="token punctuation">,</span> indgree<span class="token punctuation">.</span><span class="token function">getOrDefault</span><span class="token punctuation">(</span>neighbor<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    
    <span class="token class-name">Queue</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">DirectedGraphNode</span><span class="token punctuation">&gt;</span></span> queue <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayDeque</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">DirectedGraphNode</span> node<span class="token operator">:</span> graph<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 如果入度不存在（即入度为0），则没有前驱</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>indegree<span class="token punctuation">.</span><span class="token function">containsKey</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            queue<span class="token punctuation">,</span><span class="token function">offer</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span><span class="token punctuation">;</span>
            order<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token operator">!</span>queue<span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">DirectedGraphNode</span> node <span class="token operator">=</span> queue<span class="token punctuation">.</span><span class="token function">poll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">DirectedGraphNode</span> neighbor<span class="token operator">:</span> graph<span class="token punctuation">.</span>neighbors<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            indegree<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span>neighbor<span class="token punctuation">,</span> indgree<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>neighbor<span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>indegree<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>neighbor<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                queue<span class="token punctuation">,</span><span class="token function">offer</span><span class="token punctuation">(</span>neighbor<span class="token punctuation">)</span><span class="token punctuation">;</span>
                order<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>neighbor<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">return</span> order<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>字典序最小的topo</p><p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/截屏2022-08-13 11.39.11.png" alt="截屏2022-08-13 11.39.11" loading="lazy"></p><p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/截屏2022-08-13 11.41.58.png" alt="截屏2022-08-13 11.41.58" loading="lazy"></p><p>能用 BFS 的一定不要用 DFS (除非面试官特别要求）</p><p>BFS的三个使用场景</p><ul><li>连通块问题</li><li>层级遍历问题</li><li>拓扑排序问题</li></ul><p>是否需要层级遍历</p><ul><li>需要多一重循环</li><li>或者使用 distance 哈希表记录到所有点的距离</li></ul><p>矩阵坐标变换数组</p><ul><li>deltax, deltaY</li><li>inBound / isValid 判断坐标是否越界</li></ul><p>课程表</p><p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/截屏2022-08-13 11.46.19.png" alt="截屏2022-08-13 11.46.19" loading="lazy"></p>`,45),o=[e];function c(l,i){return s(),a("div",null,o)}const r=n(t,[["render",c],["__file","14. bfs性价比之王.html.vue"]]);export{r as default};
