import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,d as n,o as e}from"./app-ktFCNIob.js";const l={};function t(h,i){return e(),a("div",null,i[0]||(i[0]=[n(`<h1 id="data-structure" tabindex="-1"><a class="header-anchor" href="#data-structure"><span>Data Structure</span></a></h1><p>物理结构</p><ul><li><p>顺序存储 Sequential</p><p>把逻辑上相邻的结点存储在物理位置上相邻的存储单元中，结点之间的逻辑关系由存储单元的邻接关系来体现（逻辑与物理统一），要求内存中可用的存储单元的地址必须是连续的。优点：存储密度大，存储空间利用概率高。缺点：插入或删除元素时不方便。</p></li><li><p>链式存储 Linked Storage Structure</p><p>它不要求逻辑上相邻的元素在物理位置上也相邻.因此它没有<a href="https://baike.baidu.com/item/%E9%A1%BA%E5%BA%8F%E5%AD%98%E5%82%A8%E7%BB%93%E6%9E%84/0?fromModule=lemma_inlink" target="_blank" rel="noopener noreferrer">顺序存储结构</a>所具有的弱点,但也同时失去了<a href="https://baike.baidu.com/item/%E9%A1%BA%E5%BA%8F%E8%A1%A8/9664274?fromModule=lemma_inlink" target="_blank" rel="noopener noreferrer">顺序表</a>可<a href="https://baike.baidu.com/item/%E9%9A%8F%E6%9C%BA%E5%AD%98%E5%8F%96/4610937?fromModule=lemma_inlink" target="_blank" rel="noopener noreferrer">随机存取</a>的优点。</p></li><li><p>散列存储 Hash</p></li><li><p>索引存储 Indexed</p></li></ul><p>逻辑结构</p><ul><li>线</li><li>树</li><li>图</li><li>集</li></ul><h3 id="traversal" tabindex="-1"><a class="header-anchor" href="#traversal"><span>Traversal</span></a></h3><p>顺序存储遍历</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">void</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> traverse</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#C18401;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">[] arr) {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    for</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> (</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> i </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> i </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> arr</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">length</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> i</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">++</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">) {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">        // 迭代访问 arr[i]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>链式存储遍历</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">/* 基本的单链表节点 */</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">class</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> ListNode</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> val</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">    ListNode</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> next</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">void</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> traverse</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">ListNode</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> head) {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    for</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> (</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">ListNode</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> p </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> head</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> p </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">!=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> null</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> p </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> p</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">next</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">) {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">        // 迭代访问 p.val</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">void</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> traverse</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">ListNode</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> head) {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    // 递归访问 head.val</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    traverse</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">head</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">next</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">)</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">void</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> traverse</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> head</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#C18401;--shiki-dark:#C678DD;"> int</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">[] next) {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    for</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> (</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> p </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> head</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> p </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">!=</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> -</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> p </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> next[p]) {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">        // 迭代访问 p.val</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>用 next[n] 表示单链表</p><p>条件：压缩映射<br> 即：值域 是 定义域 子集，即next中元素的取值在[0, n-1]之间<br> 则：i -&gt; next[i]<br> i指向next[i]，next[i]表示i节点下一个元素的位置</p><p>i即节点标号，链表头节点可以从入度为0的点开始（即没有取值的元素）<br> 想要点的权值或者大小的话，再辅助一个val[n]<br> val[i] 表示i节点的值</p><p>这个next数组上可能同时存在多条链表</p><p>常见的用途：</p><ol><li>并查集，parent[i]，表示i的父亲节点是哪个标号</li><li>链式前向星，edge[i]，表示第i条边的下一条边是哪个标号</li><li>原地哈希</li><li>记录答案路径，如LIS获取LIS对应的这个序列时prev[n]</li></ol><p>相当于用数组模拟链表，数组里面存的是下一个元素的下标，则p.next即nums[p]</p><p>相当于这里吗的nums[]相当于数组模拟链表里的next[]</p><p>由于数字从1开始计数，0这个位置不可能被其它位置的数字指向，所以0位置不可能在环内，所以从0开始遍历一定会指向某个包含重复数字的环，</p><p>变形：数字从0计数到n-1，那就得从n开始遍历了，少了哪个数就从哪开始遍历</p><p>一直觉得当i=nums[i]的时候，就动不了了，但0不会出现这种情况。其他的位置如果是自环，如果不是重复的位置，根本进不去，一旦进去了，就说明有位置的可以指向i。</p><p>本质上可以看作是寻找入度为0的节点作为起始节点，而节点的入度等于该节点值在数组值中出现的次数</p>`,24)]))}const r=s(l,[["render",t],["__file","index.html.vue"]]),d=JSON.parse(`{"path":"/algo/summary/structure/","title":"Data Structure","lang":"en-US","frontmatter":{"description":"Data Structure 物理结构 顺序存储 Sequential 把逻辑上相邻的结点存储在物理位置上相邻的存储单元中，结点之间的逻辑关系由存储单元的邻接关系来体现（逻辑与物理统一），要求内存中可用的存储单元的地址必须是连续的。优点：存储密度大，存储空间利用概率高。缺点：插入或删除元素时不方便。 链式存储 Linked Storage Struct...","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/algo/summary/structure/"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"Data Structure"}],["meta",{"property":"og:description","content":"Data Structure 物理结构 顺序存储 Sequential 把逻辑上相邻的结点存储在物理位置上相邻的存储单元中，结点之间的逻辑关系由存储单元的邻接关系来体现（逻辑与物理统一），要求内存中可用的存储单元的地址必须是连续的。优点：存储密度大，存储空间利用概率高。缺点：插入或删除元素时不方便。 链式存储 Linked Storage Struct..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2025-01-01T21:36:31.000Z"}],["meta",{"property":"article:modified_time","content":"2025-01-01T21:36:31.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Data Structure\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-01-01T21:36:31.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[{"level":3,"title":"Traversal","slug":"traversal","link":"#traversal","children":[]}],"git":{"createdTime":1732244737000,"updatedTime":1735767391000,"contributors":[{"name":"David Liu","email":"liudawei@seas.upenn.edu","commits":1},{"name":"刘大维","email":"davidliu@liudaweideMacBook-Pro-3.local","commits":1}]},"readingTime":{"minutes":2.64,"words":793},"filePathRelative":"algo/summary/structure/README.md","localizedDate":"November 22, 2024","excerpt":"\\n<p>物理结构</p>\\n<ul>\\n<li>\\n<p>顺序存储 Sequential</p>\\n<p>把逻辑上相邻的结点存储在物理位置上相邻的存储单元中，结点之间的逻辑关系由存储单元的邻接关系来体现（逻辑与物理统一），要求内存中可用的存储单元的地址必须是连续的。优点：存储密度大，存储空间利用概率高。缺点：插入或删除元素时不方便。</p>\\n</li>\\n<li>\\n<p>链式存储 Linked Storage Structure</p>\\n<p>它不要求逻辑上相邻的元素在物理位置上也相邻.因此它没有<a href=\\"https://baike.baidu.com/item/%E9%A1%BA%E5%BA%8F%E5%AD%98%E5%82%A8%E7%BB%93%E6%9E%84/0?fromModule=lemma_inlink\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">顺序存储结构</a>所具有的弱点,但也同时失去了<a href=\\"https://baike.baidu.com/item/%E9%A1%BA%E5%BA%8F%E8%A1%A8/9664274?fromModule=lemma_inlink\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">顺序表</a>可<a href=\\"https://baike.baidu.com/item/%E9%9A%8F%E6%9C%BA%E5%AD%98%E5%8F%96/4610937?fromModule=lemma_inlink\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">随机存取</a>的优点。</p>\\n</li>\\n<li>\\n<p>散列存储 Hash</p>\\n</li>\\n<li>\\n<p>索引存储 Indexed</p>\\n</li>\\n</ul>","autoDesc":true}`);export{r as comp,d as data};
