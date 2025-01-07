import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as e,d as a,o as n}from"./app-ChU1gMRF.js";const l={};function t(p,i){return n(),e("div",null,i[0]||(i[0]=[a(`<h1 id="dfs" tabindex="-1"><a class="header-anchor" href="#dfs"><span>DFS</span></a></h1><h3 id="dfs-基础" tabindex="-1"><a class="header-anchor" href="#dfs-基础"><span>DFS 基础</span></a></h3><p>栈搜索</p><p>运行时栈：栈里的是仍在运行的</p><p>入栈：函数开始运行</p><p>出栈：函数运行结束</p><h3 id="dfs-步骤" tabindex="-1"><a class="header-anchor" href="#dfs-步骤"><span>DFS 步骤</span></a></h3><ol><li><p>出栈：函数被调用</p></li><li><p>捕捉：全局变量捕捉target值</p><p>出队的时候进行目标点的捕捉，如果是目标点就返回，不再继续扩展</p></li><li><p>扩展</p></li><li><p>入栈</p></li></ol><h3 id="先序遍历" tabindex="-1"><a class="header-anchor" href="#先序遍历"><span>先序遍历</span></a></h3><p>从已知点开始出发</p><p>（写法在本质上与BFS非常相似，可以直接bfs代码将queue改成stack得到）</p><h3 id="后序遍历" tabindex="-1"><a class="header-anchor" href="#后序遍历"><span>后序遍历</span></a></h3><p>从未知点开始出发</p><p>如果需要求拓扑排序的话，只需要在dp[i] = dfs(i - 1) + dfs(i - 2)后面一行加上topo.add(i)即可，因为这里是后续，dp[i]依赖的边已经访问完了</p><p>（本质上还是拓扑排序）</p><h3 id="中序遍历" tabindex="-1"><a class="header-anchor" href="#中序遍历"><span>中序遍历</span></a></h3><p>仅存在于二叉树中，且仅在二叉搜索树上有意义，其他情况下没有实际意义</p><h3 id="dfs-相对于-bfs-的优势" tabindex="-1"><a class="header-anchor" href="#dfs-相对于-bfs-的优势"><span>DFS 相对于 BFS 的优势</span></a></h3><ul><li><p>后序传值（DFS没有后序）</p></li><li><p>先序回溯（BFS不能回溯）</p></li><li><p>宽树搜索：</p><p>典型如 IDA*</p><p>如果每层扩展的状态很多，BFS需要把当前层所有状态存在队列，负担很大，DFS只需要存一条路径的在栈中，所以需要的内存很小</p></li></ul><h3 id="递归" tabindex="-1"><a class="header-anchor" href="#递归"><span>递归</span></a></h3><p>Quine，即一个能够打印出自身源代码的程序。</p><div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">s </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;s = </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">%r</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\n</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">print(s</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">%%</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">s)&#39;</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">print</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(s</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">%</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">s)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>首先，将代码本身赋值给变量<code>s</code>，使用<code>%r</code>来表示<code>s</code>的原始字符串形式，包括引号和转义字符。</p><p>最后，通过<code>print(s%s)</code>来打印出变量<code>s</code>中的内容，即代码本身。</p><ol><li><p><code>s = %r\\nprint(s%%s)</code>:</p><ul><li><code>%r</code>是Python中的字符串格式化操作符，用于表示将变量以<code>repr()</code>的形式插入到字符串中。</li><li><code>\\n</code>表示换行符。</li><li><code>%%</code>用于在字符串中插入一个百分号<code>%</code>。第一个<code>%</code>负责转译</li><li>因此，<code>s = %r\\nprint(s%%s)</code>将会被格式化为一个字符串，其中<code>%r</code>会被替换为<code>s</code>的原始字符串形式，然后再加上换行符和<code>print(s%s)</code>这段代码。</li></ul></li><li><p><code>print(s%s)</code>:</p><ul><li><code>s</code>表示要打印的字符串，即变量<code>s</code>中的内容。</li><li><code>%s</code>是字符串格式化操作符，用于将一个字符串插入到另一个字符串中。</li><li>因此，<code>print(s%s)</code>会打印出变量<code>s</code>中的内容，即代码本身。</li></ul></li></ol><p>这里使用了字符串的格式化操作符<code>%</code>来实现字符串的格式化和插值。</p><hr><p>Java Quine</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> class</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> Quine</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> static</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> void</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> main</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">String</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[] </span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">args</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">        String</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> s</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;public class Quine {%n    public static void main(String[] args) {%n        String s = %c%s%c;%n        System.out.printf(s, 34, s, 34);%n    }%n}&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">        System</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">out</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">printf</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(s, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">34</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, s, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">34</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>34是ASCII中的<code>&quot;</code></p>`,30)]))}const r=s(l,[["render",t],["__file","DFS.html.vue"]]),k=JSON.parse(`{"path":"/algo/framework/search/DFS.html","title":"DFS","lang":"en-US","frontmatter":{"description":"DFS DFS 基础 栈搜索 运行时栈：栈里的是仍在运行的 入栈：函数开始运行 出栈：函数运行结束 DFS 步骤 出栈：函数被调用 捕捉：全局变量捕捉target值 出队的时候进行目标点的捕捉，如果是目标点就返回，不再继续扩展 扩展 入栈 先序遍历 从已知点开始出发 （写法在本质上与BFS非常相似，可以直接bfs代码将queue改成stack得到） 后...","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/algo/framework/search/DFS.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"DFS"}],["meta",{"property":"og:description","content":"DFS DFS 基础 栈搜索 运行时栈：栈里的是仍在运行的 入栈：函数开始运行 出栈：函数运行结束 DFS 步骤 出栈：函数被调用 捕捉：全局变量捕捉target值 出队的时候进行目标点的捕捉，如果是目标点就返回，不再继续扩展 扩展 入栈 先序遍历 从已知点开始出发 （写法在本质上与BFS非常相似，可以直接bfs代码将queue改成stack得到） 后..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-12-13T01:45:42.000Z"}],["meta",{"property":"article:modified_time","content":"2024-12-13T01:45:42.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"DFS\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-12-13T01:45:42.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[{"level":3,"title":"DFS 基础","slug":"dfs-基础","link":"#dfs-基础","children":[]},{"level":3,"title":"DFS 步骤","slug":"dfs-步骤","link":"#dfs-步骤","children":[]},{"level":3,"title":"先序遍历","slug":"先序遍历","link":"#先序遍历","children":[]},{"level":3,"title":"后序遍历","slug":"后序遍历","link":"#后序遍历","children":[]},{"level":3,"title":"中序遍历","slug":"中序遍历","link":"#中序遍历","children":[]},{"level":3,"title":"DFS 相对于 BFS 的优势","slug":"dfs-相对于-bfs-的优势","link":"#dfs-相对于-bfs-的优势","children":[]},{"level":3,"title":"递归","slug":"递归","link":"#递归","children":[]}],"git":{"createdTime":1732244737000,"updatedTime":1734054342000,"contributors":[{"name":"David Liu","email":"liudawei@seas.upenn.edu","commits":1},{"name":"刘大维","email":"davidliu@liudaweideMacBook-Pro-3.local","commits":1}]},"readingTime":{"minutes":2.26,"words":679},"filePathRelative":"algo/framework/search/DFS.md","localizedDate":"November 22, 2024","excerpt":"\\n<h3>DFS 基础</h3>\\n<p>栈搜索</p>\\n<p>运行时栈：栈里的是仍在运行的</p>\\n<p>入栈：函数开始运行</p>\\n<p>出栈：函数运行结束</p>\\n<h3>DFS 步骤</h3>\\n<ol>\\n<li>\\n<p>出栈：函数被调用</p>\\n</li>\\n<li>\\n<p>捕捉：全局变量捕捉target值</p>\\n<p>出队的时候进行目标点的捕捉，如果是目标点就返回，不再继续扩展</p>\\n</li>\\n<li>\\n<p>扩展</p>\\n</li>\\n<li>\\n<p>入栈</p>\\n</li>\\n</ol>\\n<h3>先序遍历</h3>\\n<p>从已知点开始出发</p>\\n<p>（写法在本质上与BFS非常相似，可以直接bfs代码将queue改成stack得到）</p>","autoDesc":true}`);export{r as comp,k as data};
