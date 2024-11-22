import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as l,d as t,o as n}from"./app-B6s9NXTg.js";const a={};function p(o,e){return n(),l("div",null,e[0]||(e[0]=[t(`<h1 id="vrml" tabindex="-1"><a class="header-anchor" href="#vrml"><span>VRML</span></a></h1><blockquote><p>随堂测验，10 分，学完 VRML 用这个写一段代码，可以网上找到参考资料</p><p>小组为单位去写，给充足的时间去写</p></blockquote><p>VR Modeling Language</p><p>虚拟现实建模语言，文件后缀：<code>.wrl</code></p><p>这个是基础的内容，比 unity 等低级得多，与 unity 相比，这个像是 c 语言，这个是底层语言</p><p>可以描述物体的位置和运动</p><p>讨论：</p><ul><li>VRML1.0 和 2.0 的区别 <ul><li>3D 声音</li><li>交互性</li><li>面向对象结构变更</li></ul></li><li>有哪些节点，共 54 个</li></ul><p>编辑器</p><ul><li><p>VRMLPad 编辑器，可以实时预览，b 站有一个 40 分钟的小公开课教程</p></li><li><p>SwirlXD</p><p>SwirlX3D</p></li></ul><h2 id="结构" tabindex="-1"><a class="header-anchor" href="#结构"><span>结构</span></a></h2><p>文件包含</p><ul><li>头文件</li><li>原型</li><li>造型节点</li><li>脚本</li><li>路由</li></ul><p>节点：用来描述造型和造型的属性</p><p>花括号</p><ul><li>属性名称</li><li>数据类型</li><li>数据的具体值</li></ul><p>属性的顺序是任意的，如果没有给值就是默认值</p><p>交互</p><ul><li>VRML 中，传感器 Sensor 节点上交互功能的技术 8 种</li></ul><p>脚本</p><ul><li>一个 Script 节点包含一个 Java 或 JS 的脚本程序</li></ul><p>节点类型</p><ul><li></li></ul><h3 id="geometry-形状" tabindex="-1"><a class="header-anchor" href="#geometry-形状"><span>geometry 形状</span></a></h3><p>Cylinder 圆柱体</p><p>Cone 锥体</p><p>构造复杂的几何体</p><ul><li>点的空间连接</li><li>一个点用三维坐标表示</li></ul><p>PointSet 点集</p><div class="language-wrl line-numbers-mode" data-highlighter="shiki" data-ext="wrl" data-title="wrl" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>PointSet {</span></span>
<span class="line"><span>	coord NULL</span></span>
<span class="line"><span>	color NULL</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>每个点大小是 1 个像素</p><p>IndexedLineSet 线集</p><p>IndexedFaceSet 面集</p><h3 id="group" tabindex="-1"><a class="header-anchor" href="#group"><span>Group</span></a></h3><p>可以讲场景中的各个造型进行编组，获得具有多个造型的较复杂的场景</p><p>伞面：锥体是</p><p>炳：圆柱</p>`,37)]))}const d=i(a,[["render",p],["__file","2. VRML.html.vue"]]),c=JSON.parse(`{"path":"/education/bs/xr-tech/2.%20VRML.html","title":"VRML","lang":"en-US","frontmatter":{"description":"VRML 随堂测验，10 分，学完 VRML 用这个写一段代码，可以网上找到参考资料 小组为单位去写，给充足的时间去写 VR Modeling Language 虚拟现实建模语言，文件后缀：.wrl 这个是基础的内容，比 unity 等低级得多，与 unity 相比，这个像是 c 语言，这个是底层语言 可以描述物体的位置和运动 讨论： VRML1.0 ...","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/education/bs/xr-tech/2.%20VRML.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"VRML"}],["meta",{"property":"og:description","content":"VRML 随堂测验，10 分，学完 VRML 用这个写一段代码，可以网上找到参考资料 小组为单位去写，给充足的时间去写 VR Modeling Language 虚拟现实建模语言，文件后缀：.wrl 这个是基础的内容，比 unity 等低级得多，与 unity 相比，这个像是 c 语言，这个是底层语言 可以描述物体的位置和运动 讨论： VRML1.0 ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-11-22T02:28:03.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-22T02:28:03.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"VRML\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-22T02:28:03.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[{"level":2,"title":"结构","slug":"结构","link":"#结构","children":[{"level":3,"title":"geometry 形状","slug":"geometry-形状","link":"#geometry-形状","children":[]},{"level":3,"title":"Group","slug":"group","link":"#group","children":[]}]}],"git":{"createdTime":1679321449000,"updatedTime":1732242483000,"contributors":[{"name":"David Liu","email":"liudawei@seas.upenn.edu","commits":1},{"name":"刘大维","email":"davidliu@liudaweideMacBook-Pro-3.local","commits":1}]},"readingTime":{"minutes":1.25,"words":375},"filePathRelative":"education/bs/xr-tech/2. VRML.md","localizedDate":"March 20, 2023","excerpt":"\\n<blockquote>\\n<p>随堂测验，10 分，学完 VRML 用这个写一段代码，可以网上找到参考资料</p>\\n<p>小组为单位去写，给充足的时间去写</p>\\n</blockquote>\\n<p>VR Modeling Language</p>\\n<p>虚拟现实建模语言，文件后缀：<code>.wrl</code></p>\\n<p>这个是基础的内容，比 unity 等低级得多，与 unity 相比，这个像是 c 语言，这个是底层语言</p>\\n<p>可以描述物体的位置和运动</p>\\n<p>讨论：</p>\\n<ul>\\n<li>VRML1.0 和 2.0 的区别\\n<ul>\\n<li>3D 声音</li>\\n<li>交互性</li>\\n<li>面向对象结构变更</li>\\n</ul>\\n</li>\\n<li>有哪些节点，共 54 个</li>\\n</ul>","autoDesc":true}`);export{d as comp,c as data};
