import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as e,d as a,o as t}from"./app-C8HRrJwL.js";const n={};function r(h,i){return t(),e("div",null,i[0]||(i[0]=[a(`<h1 id="scene-graph" tabindex="-1"><a class="header-anchor" href="#scene-graph"><span>Scene Graph</span></a></h1><blockquote><p>like Kinematics Chain</p></blockquote><p>Definition</p><p>A set of nodes that hold transformation matrix data and pointers to other nodes and geometry. Traverse a directed tree of transformations to render shapes. The basis of most scene data structures, from game engines to mesh editor applications to scenes in animated films</p><div class="language-c++ line-numbers-mode" data-highlighter="shiki" data-ext="c++" data-title="c++" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">Node</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">&amp;</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;"> Node</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">::</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">addChild</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">uPtr</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">Node</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; </span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">n</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    Node</span><span style="--shiki-light:#A626A4;--shiki-dark:#56B6C2;">&amp;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> ref </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">=</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> *</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">n;</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> // like an alias of node in heap</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">    this</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">children</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">push_back</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">std</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">::</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">move</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(n));</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    return</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> ref;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>sPtr 比 uPtr 慢，有引用计数，比较慢；如果非 sPtr 场景就用 uPtr</p><p>Examples Scene</p><ol><li>TRS</li><li>SRT</li></ol>`,8)]))}const p=s(n,[["render",r],["__file","scene-graph.html.vue"]]),d=JSON.parse(`{"path":"/education/ms/5600/scene-graph.html","title":"Scene Graph","lang":"en-US","frontmatter":{"description":"Scene Graph like Kinematics Chain Definition A set of nodes that hold transformation matrix data and pointers to other nodes and geometry. Traverse a directed tree of transforma...","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/education/ms/5600/scene-graph.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"Scene Graph"}],["meta",{"property":"og:description","content":"Scene Graph like Kinematics Chain Definition A set of nodes that hold transformation matrix data and pointers to other nodes and geometry. Traverse a directed tree of transforma..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-11-22T03:21:32.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-22T03:21:32.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Scene Graph\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-22T03:21:32.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[],"git":{"createdTime":1727659735000,"updatedTime":1732245692000,"contributors":[{"name":"David Liu","email":"liudawei@seas.upenn.edu","commits":1},{"name":"刘大维","email":"davidliu@liudaweideMacBook-Pro-3.local","commits":1}]},"readingTime":{"minutes":0.34,"words":101},"filePathRelative":"education/ms/5600/scene-graph.md","localizedDate":"September 30, 2024","excerpt":"\\n<blockquote>\\n<p>like Kinematics Chain</p>\\n</blockquote>\\n<p>Definition</p>\\n<p>A set of nodes that hold transformation matrix data and pointers to other nodes and geometry. Traverse a directed tree of transformations to render shapes. The basis of most scene data structures, from game engines to mesh editor applications to scenes in animated films</p>","autoDesc":true}`);export{p as comp,d as data};
