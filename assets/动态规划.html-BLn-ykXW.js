import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as t,d as n,o as e}from"./app-DtA_0glx.js";const p={};function i(l,a){return e(),t("div",null,a[0]||(a[0]=[n('<h1 id="动态规划" tabindex="-1"><a class="header-anchor" href="#动态规划"><span>动态规划</span></a></h1><h3 id="问题分类" tabindex="-1"><a class="header-anchor" href="#问题分类"><span>问题分类</span></a></h3><p>P问题：多项式时间复杂度，<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msup><mi>n</mi><mi>m</mi></msup></mrow><annotation encoding="application/x-tex">n^m</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6644em;"></span><span class="mord"><span class="mord mathnormal">n</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.6644em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">m</span></span></span></span></span></span></span></span></span></span></span>复杂度</p><p>N-P问题：非多项式复杂度，不可解</p><ul><li><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>n</mi><mo stretchy="false">!</mo></mrow><annotation encoding="application/x-tex">n!</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6944em;"></span><span class="mord mathnormal">n</span><span class="mclose">!</span></span></span></span>，排列问题</li><li><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msup><mn>2</mn><mi>n</mi></msup></mrow><annotation encoding="application/x-tex">2^n</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6644em;"></span><span class="mord"><span class="mord">2</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.6644em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">n</span></span></span></span></span></span></span></span></span></span></span>，组合问题</li></ul><h2 id="动态规划-解决np问题" tabindex="-1"><a class="header-anchor" href="#动态规划-解决np问题"><span>动态规划：解决NP问题</span></a></h2><p>把NP问题变成P问题</p><h3 id="排列问题" tabindex="-1"><a class="header-anchor" href="#排列问题"><span>排列问题</span></a></h3><ul><li>排列，可能是连续性的</li><li>博弈，（需要换序）可能是非连续性的（但一定收敛）</li></ul><h3 id="组合问题" tabindex="-1"><a class="header-anchor" href="#组合问题"><span>组合问题</span></a></h3><ul><li><p>组合（无序）</p><p>如：背包问题</p></li><li><p>选择（定序）</p><p>如：LIS</p></li><li><p>分割（定序），本质上是对分割点的选择</p><p>如：分割成几个符合条件的子数组之类的问题</p></li></ul><p>串起来的线索：有序</p><p>本质上这五大类型就是建DAG图最主要的五种方式</p>',13)]))}const r=s(p,[["render",i],["__file","动态规划.html.vue"]]),c=JSON.parse(`{"path":"/algo/framework/optimise/%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92.html","title":"动态规划","lang":"en-US","frontmatter":{"description":"动态规划 问题分类 P问题：多项式时间复杂度，nm复杂度 N-P问题：非多项式复杂度，不可解 n!，排列问题 2n，组合问题 动态规划：解决NP问题 把NP问题变成P问题 排列问题 排列，可能是连续性的 博弈，（需要换序）可能是非连续性的（但一定收敛） 组合问题 组合（无序） 如：背包问题 选择（定序） 如：LIS 分割（定序），本质上是对分割点的选择...","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/algo/framework/optimise/%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"动态规划"}],["meta",{"property":"og:description","content":"动态规划 问题分类 P问题：多项式时间复杂度，nm复杂度 N-P问题：非多项式复杂度，不可解 n!，排列问题 2n，组合问题 动态规划：解决NP问题 把NP问题变成P问题 排列问题 排列，可能是连续性的 博弈，（需要换序）可能是非连续性的（但一定收敛） 组合问题 组合（无序） 如：背包问题 选择（定序） 如：LIS 分割（定序），本质上是对分割点的选择..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-11-22T03:05:37.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-22T03:05:37.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"动态规划\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-22T03:05:37.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[{"level":3,"title":"问题分类","slug":"问题分类","link":"#问题分类","children":[]},{"level":2,"title":"动态规划：解决NP问题","slug":"动态规划-解决np问题","link":"#动态规划-解决np问题","children":[{"level":3,"title":"排列问题","slug":"排列问题","link":"#排列问题","children":[]},{"level":3,"title":"组合问题","slug":"组合问题","link":"#组合问题","children":[]}]}],"git":{"createdTime":1732244737000,"updatedTime":1732244737000,"contributors":[{"name":"David Liu","email":"liudawei@seas.upenn.edu","commits":1}]},"readingTime":{"minutes":0.6,"words":181},"filePathRelative":"algo/framework/optimise/动态规划.md","localizedDate":"November 22, 2024","excerpt":"\\n<h3>问题分类</h3>\\n<p>P问题：多项式时间复杂度，<span v-pre=\\"\\" class=\\"katex\\"><span class=\\"katex-mathml\\"><math xmlns=\\"http://www.w3.org/1998/Math/MathML\\"><semantics><mrow><msup><mi>n</mi><mi>m</mi></msup></mrow><annotation encoding=\\"application/x-tex\\">n^m</annotation></semantics></math></span><span class=\\"katex-html\\" aria-hidden=\\"true\\"><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:0.6644em;\\"></span><span class=\\"mord\\"><span class=\\"mord mathnormal\\">n</span><span class=\\"msupsub\\"><span class=\\"vlist-t\\"><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.6644em;\\"><span style=\\"top:-3.063em;margin-right:0.05em;\\"><span class=\\"pstrut\\" style=\\"height:2.7em;\\"></span><span class=\\"sizing reset-size6 size3 mtight\\"><span class=\\"mord mathnormal mtight\\">m</span></span></span></span></span></span></span></span></span></span></span>复杂度</p>","autoDesc":true}`);export{r as comp,c as data};
