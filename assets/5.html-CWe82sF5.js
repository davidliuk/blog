import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,d as n,o as t}from"./app-Cv-jMnVl.js";const l={};function e(h,s){return t(),a("div",null,s[0]||(s[0]=[n(`<h1 id="hw5" tabindex="-1"><a class="header-anchor" href="#hw5"><span>HW5</span></a></h1><p>noise</p><p>psuedo code</p><div class="language-c++ line-numbers-mode" data-highlighter="shiki" data-ext="c++" data-title="c++" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">Mesh</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">::</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">loadObj</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(stirng filename) {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    vector</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">&lt;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">uPtr</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">&lt;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">Vertex</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">&gt;&gt;</span><span style="--shiki-light:#A626A4;--shiki-dark:#56B6C2;"> &amp;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">vertx </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> verts;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    vector</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">&lt;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">uPtr</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">&lt;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">Vertex</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">&gt;&gt;</span><span style="--shiki-light:#A626A4;--shiki-dark:#56B6C2;"> &amp;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">edges </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> edges;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    vector</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">&lt;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">uPtr</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">&lt;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">Vertex</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">&gt;&gt;</span><span style="--shiki-light:#A626A4;--shiki-dark:#56B6C2;"> &amp;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">hes </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> ;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    </span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    for</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;f&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> line in OBJ file) {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        uPtr</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">&lt;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">Face</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">&gt;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> f </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">=</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> mkU</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">Face</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;(random color);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-c++ line-numbers-mode" data-highlighter="shiki" data-ext="c++" data-title="c++" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">HalfEdge</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">::</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">HalfEdge</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(Vertex </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">*</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">v, Face </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">*</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">f) </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">	: </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">vertex</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(v), </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">face</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(f), </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">next</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">nullptr</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">), </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">sym</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">nullptr</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">    v</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">-&gt;</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">setHE</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">this</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">    f</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">-&gt;</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">setHE</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">this</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-c++ line-numbers-mode" data-highlighter="shiki" data-ext="c++" data-title="c++" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">countAdjacency</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>tricky part: set syms</p>`,7)]))}const d=i(l,[["render",e],["__file","5.html.vue"]]),r=JSON.parse(`{"path":"/education/ms/5600/hw/5.html","title":"HW5","lang":"en-US","frontmatter":{"description":"HW5 noise psuedo code tricky part: set syms","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/education/ms/5600/hw/5.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"HW5"}],["meta",{"property":"og:description","content":"HW5 noise psuedo code tricky part: set syms"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-11-09T05:50:09.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-09T05:50:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"HW5\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-09T05:50:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[],"git":{"createdTime":1729636652000,"updatedTime":1731131409000,"contributors":[{"name":"David Liu","email":"liudawei@seas.upenn.edu","commits":1},{"name":"刘大维","email":"davidliu@liudaweideMacBook-Pro-3.local","commits":1}]},"readingTime":{"minutes":0.21,"words":63},"filePathRelative":"education/ms/5600/hw/5.md","localizedDate":"October 22, 2024","excerpt":"\\n<p>noise</p>\\n<p>psuedo code</p>\\n<div class=\\"language-c++ line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"c++\\" data-title=\\"c++\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#E5C07B\\">Mesh</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">::</span><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">loadObj</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">(stirng filename) {</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">    vector</span><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">&lt;</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">uPtr</span><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">&lt;</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">Vertex</span><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">&gt;&gt;</span><span style=\\"--shiki-light:#A626A4;--shiki-dark:#56B6C2\\"> &amp;</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">vertx </span><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">=</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> verts;</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">    vector</span><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">&lt;</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">uPtr</span><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">&lt;</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">Vertex</span><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">&gt;&gt;</span><span style=\\"--shiki-light:#A626A4;--shiki-dark:#56B6C2\\"> &amp;</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">edges </span><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">=</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> edges;</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">    vector</span><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">&lt;</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">uPtr</span><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">&lt;</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">Vertex</span><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">&gt;&gt;</span><span style=\\"--shiki-light:#A626A4;--shiki-dark:#56B6C2\\"> &amp;</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">hes </span><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">=</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> ;</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">    </span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">    for</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> (</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">\\"f\\"</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> line in OBJ file) {</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">        uPtr</span><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">&lt;</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">Face</span><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">&gt;</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> f </span><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">=</span><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\"> mkU</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">&lt;</span><span style=\\"--shiki-light:#C18401;--shiki-dark:#E5C07B\\">Face</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">&gt;(random color);</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">    }</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">    </span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">}</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{d as comp,r as data};
