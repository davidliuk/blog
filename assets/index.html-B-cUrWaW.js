import{_ as l}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as e,d as s,o as n}from"./app-D4ZvIHfO.js";const a={};function t(r,i){return n(),e("div",null,i[0]||(i[0]=[s('<h1 id="linked-list" tabindex="-1"><a class="header-anchor" href="#linked-list"><span>Linked List</span></a></h1><p>链表</p><ul><li>Singly Linked List</li><li>Doubly Linked List <ul><li>原地删除</li><li>反向遍历</li></ul></li></ul><h3 id="主要技巧" tabindex="-1"><a class="header-anchor" href="#主要技巧"><span>主要技巧</span></a></h3><ul><li><p>Dummy 虚拟头节点</p><p>使用场景：</p><ul><li>头节点不确定时，如创建一个新的链表（初始时无法判断是否为空） <ul><li>合并链表（到一个新的链表）merge</li><li>划分链表（到两个新的链表）partition</li></ul></li><li>头节点可能被变动时，如添加、删除、移动 <ul><li>删除节点 <ul><li>链表去重</li><li>删除值为x的节点</li></ul></li><li>移动 <ul><li>反转链表</li><li>交换链表节点</li></ul></li></ul></li></ul></li><li><p>双指针</p><p>技巧分类及使用场景：</p><ul><li>快慢双指针 <ul><li>链表中点：middle</li><li>链表求环：circle</li></ul></li><li>同向双指针 <ul><li>反转链表：reverse</li><li>链表去重：deduplication</li><li>划分链表：partition，lomoto写法，结合前序遍历可拓展为quickSort</li><li>倒序查找：findFromEnd</li></ul></li><li>平行双指针 <ul><li>合并链表：merge，结合后序遍历可拓展为mergeSort</li><li>划分链表：partition，结合前序遍历可拓展为quickSort</li><li>链表交点</li></ul></li></ul></li></ul><h3 id="边界条件" tabindex="-1"><a class="header-anchor" href="#边界条件"><span>边界条件</span></a></h3><ol><li><p>当循环内出现移动两步时：</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">while</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> (curr </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">!=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> null</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> &amp;&amp;</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> curr</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">next</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> !=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> null</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>如，快慢指针、两两交换链表中的节点</p></li><li><p>要取下一个节点的值，或可能移除或移动下一个节点时：</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">while</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> (</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">curr</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">next</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> !=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> null</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>如，反转链表</p><p>这种需要在最开始的地方判断curr这个节点是否为空（往往为<code>curr == null</code>）</p></li><li><p>仅用到当前节点的值时，</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">while</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> (p </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">!=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> null</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>如，partition</p></li><li><p>当平行双指针时，</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">while</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> (p1 </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">!=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> null</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> &amp;&amp;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> p2 </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">!=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> null</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>如，merge</p></li></ol>',7)]))}const d=l(a,[["render",t],["__file","index.html.vue"]]),k=JSON.parse(`{"path":"/algo/summary/structure/linear/linked/","title":"Linked List","lang":"en-US","frontmatter":{"description":"Linked List 链表 Singly Linked List Doubly Linked List 原地删除 反向遍历 主要技巧 Dummy 虚拟头节点 使用场景： 头节点不确定时，如创建一个新的链表（初始时无法判断是否为空） 合并链表（到一个新的链表）merge 划分链表（到两个新的链表）partition 头节点可能被变动时，如添加、删除、移...","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/algo/summary/structure/linear/linked/"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"Linked List"}],["meta",{"property":"og:description","content":"Linked List 链表 Singly Linked List Doubly Linked List 原地删除 反向遍历 主要技巧 Dummy 虚拟头节点 使用场景： 头节点不确定时，如创建一个新的链表（初始时无法判断是否为空） 合并链表（到一个新的链表）merge 划分链表（到两个新的链表）partition 头节点可能被变动时，如添加、删除、移..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-11-23T18:49:10.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-23T18:49:10.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Linked List\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-23T18:49:10.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[{"level":3,"title":"主要技巧","slug":"主要技巧","link":"#主要技巧","children":[]},{"level":3,"title":"边界条件","slug":"边界条件","link":"#边界条件","children":[]}],"git":{"createdTime":1732244737000,"updatedTime":1732387750000,"contributors":[{"name":"David Liu","email":"liudawei@seas.upenn.edu","commits":1}]},"readingTime":{"minutes":1.21,"words":364},"filePathRelative":"algo/summary/structure/linear/linked/README.md","localizedDate":"November 22, 2024","excerpt":"\\n<p>链表</p>\\n<ul>\\n<li>Singly Linked List</li>\\n<li>Doubly Linked List\\n<ul>\\n<li>原地删除</li>\\n<li>反向遍历</li>\\n</ul>\\n</li>\\n</ul>\\n<h3>主要技巧</h3>\\n<ul>\\n<li>\\n<p>Dummy 虚拟头节点</p>\\n<p>使用场景：</p>\\n<ul>\\n<li>头节点不确定时，如创建一个新的链表（初始时无法判断是否为空）\\n<ul>\\n<li>合并链表（到一个新的链表）merge</li>\\n<li>划分链表（到两个新的链表）partition</li>\\n</ul>\\n</li>\\n<li>头节点可能被变动时，如添加、删除、移动\\n<ul>\\n<li>删除节点\\n<ul>\\n<li>链表去重</li>\\n<li>删除值为x的节点</li>\\n</ul>\\n</li>\\n<li>移动\\n<ul>\\n<li>反转链表</li>\\n<li>交换链表节点</li>\\n</ul>\\n</li>\\n</ul>\\n</li>\\n</ul>\\n</li>\\n<li>\\n<p>双指针</p>\\n<p>技巧分类及使用场景：</p>\\n<ul>\\n<li>快慢双指针\\n<ul>\\n<li>链表中点：middle</li>\\n<li>链表求环：circle</li>\\n</ul>\\n</li>\\n<li>同向双指针\\n<ul>\\n<li>反转链表：reverse</li>\\n<li>链表去重：deduplication</li>\\n<li>划分链表：partition，lomoto写法，结合前序遍历可拓展为quickSort</li>\\n<li>倒序查找：findFromEnd</li>\\n</ul>\\n</li>\\n<li>平行双指针\\n<ul>\\n<li>合并链表：merge，结合后序遍历可拓展为mergeSort</li>\\n<li>划分链表：partition，结合前序遍历可拓展为quickSort</li>\\n<li>链表交点</li>\\n</ul>\\n</li>\\n</ul>\\n</li>\\n</ul>","autoDesc":true}`);export{d as comp,k as data};
