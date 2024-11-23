import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as e,d as n,o as a}from"./app-Cv-jMnVl.js";const t={};function l(r,i){return a(),e("div",null,i[0]||(i[0]=[n(`<h1 id="mini-minecraft" tabindex="-1"><a class="header-anchor" href="#mini-minecraft"><span>Mini Minecraft</span></a></h1><ul><li>Milestone 1: procedural terrain</li><li>Milestone 2: <ul><li>3D noise</li><li>texture</li><li>Multithreaded terrain generation</li></ul></li><li>Milestone 3: <ul><li>50</li><li>extra 50</li></ul></li></ul><hr><p>Noise</p><p>Berlin, Worley noise</p><p><strong>Summed Perlin noise terrain</strong></p><p>Increase number of grid lines</p><p>the lower freq the flatter</p><p>different freq and</p><div class="language-c++ line-numbers-mode" data-highlighter="shiki" data-ext="c++" data-title="c++" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">float</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> dessertH </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">=</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> dessertHeight</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(xz);</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">float</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> grassH </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">=</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> grassLandHeight</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(xz);</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">float</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> t </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">=</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> biomeBlender</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(xz);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">t </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">=</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> smoothsep</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">0.4</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">0.6</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, t);</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> // smooth between biome</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">float</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> h </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">=</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> mix</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(dessertH, grassH, t);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>write</p><ul><li>grass</li><li>mountain</li></ul><p>noise and distribution</p><p>chunk rendering</p><div class="language-c++ line-numbers-mode" data-highlighter="shiki" data-ext="c++" data-title="c++" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">class</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> Chunk</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">private:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    std::array</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">&lt;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">BlockType, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">65536</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">&gt;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> m_blocks;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    int</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> minX, minZ;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    std::unordered_map</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">&lt;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">Direction, Chunk</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">*</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, EnumHash</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">&gt;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> m_neighbors; </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-c++ line-numbers-mode" data-highlighter="shiki" data-ext="c++" data-title="c++" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">struct</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> InputBundle</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    bool</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> press</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><p>physics</p><p>every tick check distance between ground and</p>`,19)]))}const d=s(t,[["render",l],["__file","index.html.vue"]]),k=JSON.parse(`{"path":"/education/ms/5600/final/","title":"Mini Minecraft","lang":"en-US","frontmatter":{"description":"Mini Minecraft Milestone 1: procedural terrain Milestone 2: 3D noise texture Multithreaded terrain generation Milestone 3: 50 extra 50 Noise Berlin, Worley noise Summed Perlin n...","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/education/ms/5600/final/"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"Mini Minecraft"}],["meta",{"property":"og:description","content":"Mini Minecraft Milestone 1: procedural terrain Milestone 2: 3D noise texture Multithreaded terrain generation Milestone 3: 50 extra 50 Noise Berlin, Worley noise Summed Perlin n..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-11-22T03:21:32.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-22T03:21:32.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Mini Minecraft\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-22T03:21:32.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[],"git":{"createdTime":1730928664000,"updatedTime":1732245692000,"contributors":[{"name":"David Liu","email":"liudawei@seas.upenn.edu","commits":1}]},"readingTime":{"minutes":0.36,"words":107},"filePathRelative":"education/ms/5600/final/README.md","localizedDate":"November 6, 2024","excerpt":"\\n<ul>\\n<li>Milestone 1: procedural terrain</li>\\n<li>Milestone 2:\\n<ul>\\n<li>3D noise</li>\\n<li>texture</li>\\n<li>Multithreaded terrain generation</li>\\n</ul>\\n</li>\\n<li>Milestone 3:\\n<ul>\\n<li>50</li>\\n<li>extra 50</li>\\n</ul>\\n</li>\\n</ul>\\n<hr>\\n<p>Noise</p>\\n<p>Berlin, Worley noise</p>\\n<p><strong>Summed Perlin noise terrain</strong></p>","autoDesc":true}`);export{d as comp,k as data};
