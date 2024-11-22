import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as t,d as n,o as e}from"./app-B6s9NXTg.js";const i={};function p(l,s){return e(),t("div",null,s[0]||(s[0]=[n('<h1 id="cq6" tabindex="-1"><a class="header-anchor" href="#cq6"><span>CQ6</span></a></h1><h3 id="question-1" tabindex="-1"><a class="header-anchor" href="#question-1"><span>Question 1</span></a></h3><p><strong>The vertex indices of the half-edge&#39;s start and end vertices</strong>:</p><p>A half-edge ( HE ) has a start vertex ( <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>V</mi><mn>1</mn></msub></mrow><annotation encoding="application/x-tex">V_1</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8333em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.22222em;">V</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:-0.2222em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">1</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span> ) and an end vertex ( <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>V</mi><mn>2</mn></msub></mrow><annotation encoding="application/x-tex">V_2</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8333em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.22222em;">V</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:-0.2222em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span> ). Its SYM pointer points to another half-edge that travels in the opposite direction, meaning the SYM of ( HE ) should have start vertex ( <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>V</mi><mn>2</mn></msub></mrow><annotation encoding="application/x-tex">V_2</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8333em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.22222em;">V</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:-0.2222em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span> ) and end vertex ( <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>V</mi><mn>1</mn></msub></mrow><annotation encoding="application/x-tex">V_1</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8333em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.22222em;">V</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:-0.2222em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">1</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span> ). Therefore, knowing the vertex indices (start and end) allows you to identify the correct half-edge as the symmetric counterpart. In the implementation part, we could leverage hash map and <code>pair&lt;vertex*, vertex*&gt;</code> to get these mapping relationships.</p><h3 id="question-2" tabindex="-1"><a class="header-anchor" href="#question-2"><span>Question 2</span></a></h3><ol><li><p><strong>Function that determines the primitives drawn:</strong></p><p>The <strong><code>Drawable::drawMode()</code></strong> function determines the primitives (e.g., triangles, lines, points) that will be drawn.</p><p>In current case, it returns <code>GL_TRIANGLES</code>, meaning the mesh will be drawn using triangles. Depending on the return value, different primitive types like lines (<code>GL_LINES</code>) or points (<code>GL_POINTS</code>) can be specified.</p></li><li><p><strong>What does <code>Drawable::getIndexBufferLength()</code> return?</strong></p><p>The function <strong><code>getIndexBufferLength()</code></strong> returns the number of indices in the index buffer.</p></li><li><p><strong>Where is this value used?</strong></p><p>This value is used in the <strong><code>glDrawElements()</code></strong> OpenGL function. It tells OpenGL how many indices are present in the index buffer and thus how many elements (e.g., triangles or lines) should be drawn during rendering.</p></li></ol>',6)]))}const o=a(i,[["render",p],["__file","6.html.vue"]]),c=JSON.parse(`{"path":"/education/ms/5600/cq/6.html","title":"CQ6","lang":"en-US","frontmatter":{"description":"CQ6 Question 1 The vertex indices of the half-edge's start and end vertices: A half-edge ( HE ) has a start vertex ( V1​ ) and an end vertex ( V2​ ). Its SYM pointer points to a...","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/education/ms/5600/cq/6.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"CQ6"}],["meta",{"property":"og:description","content":"CQ6 Question 1 The vertex indices of the half-edge's start and end vertices: A half-edge ( HE ) has a start vertex ( V1​ ) and an end vertex ( V2​ ). Its SYM pointer points to a..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-11-09T03:55:12.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-09T03:55:12.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"CQ6\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-09T03:55:12.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[{"level":3,"title":"Question 1","slug":"question-1","link":"#question-1","children":[]},{"level":3,"title":"Question 2","slug":"question-2","link":"#question-2","children":[]}],"git":{"createdTime":1729636652000,"updatedTime":1731124512000,"contributors":[{"name":"刘大维","email":"davidliu@liudaweideMacBook-Pro-3.local","commits":1}]},"readingTime":{"minutes":0.7,"words":211},"filePathRelative":"education/ms/5600/cq/6.md","localizedDate":"October 22, 2024","excerpt":"\\n<h3>Question 1</h3>\\n<p><strong>The vertex indices of the half-edge's start and end vertices</strong>:</p>\\n<p>A half-edge ( HE ) has a start vertex ( <span v-pre=\\"\\" class=\\"katex\\"><span class=\\"katex-mathml\\"><math xmlns=\\"http://www.w3.org/1998/Math/MathML\\"><semantics><mrow><msub><mi>V</mi><mn>1</mn></msub></mrow><annotation encoding=\\"application/x-tex\\">V_1</annotation></semantics></math></span><span class=\\"katex-html\\" aria-hidden=\\"true\\"><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:0.8333em;vertical-align:-0.15em;\\"></span><span class=\\"mord\\"><span class=\\"mord mathnormal\\" style=\\"margin-right:0.22222em;\\">V</span><span class=\\"msupsub\\"><span class=\\"vlist-t vlist-t2\\"><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.3011em;\\"><span style=\\"top:-2.55em;margin-left:-0.2222em;margin-right:0.05em;\\"><span class=\\"pstrut\\" style=\\"height:2.7em;\\"></span><span class=\\"sizing reset-size6 size3 mtight\\"><span class=\\"mord mtight\\">1</span></span></span></span><span class=\\"vlist-s\\">​</span></span><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.15em;\\"><span></span></span></span></span></span></span></span></span></span> ) and an end vertex ( <span v-pre=\\"\\" class=\\"katex\\"><span class=\\"katex-mathml\\"><math xmlns=\\"http://www.w3.org/1998/Math/MathML\\"><semantics><mrow><msub><mi>V</mi><mn>2</mn></msub></mrow><annotation encoding=\\"application/x-tex\\">V_2</annotation></semantics></math></span><span class=\\"katex-html\\" aria-hidden=\\"true\\"><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:0.8333em;vertical-align:-0.15em;\\"></span><span class=\\"mord\\"><span class=\\"mord mathnormal\\" style=\\"margin-right:0.22222em;\\">V</span><span class=\\"msupsub\\"><span class=\\"vlist-t vlist-t2\\"><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.3011em;\\"><span style=\\"top:-2.55em;margin-left:-0.2222em;margin-right:0.05em;\\"><span class=\\"pstrut\\" style=\\"height:2.7em;\\"></span><span class=\\"sizing reset-size6 size3 mtight\\"><span class=\\"mord mtight\\">2</span></span></span></span><span class=\\"vlist-s\\">​</span></span><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.15em;\\"><span></span></span></span></span></span></span></span></span></span> ). Its SYM pointer points to another half-edge that travels in the opposite direction, meaning the SYM of ( HE ) should have start vertex ( <span v-pre=\\"\\" class=\\"katex\\"><span class=\\"katex-mathml\\"><math xmlns=\\"http://www.w3.org/1998/Math/MathML\\"><semantics><mrow><msub><mi>V</mi><mn>2</mn></msub></mrow><annotation encoding=\\"application/x-tex\\">V_2</annotation></semantics></math></span><span class=\\"katex-html\\" aria-hidden=\\"true\\"><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:0.8333em;vertical-align:-0.15em;\\"></span><span class=\\"mord\\"><span class=\\"mord mathnormal\\" style=\\"margin-right:0.22222em;\\">V</span><span class=\\"msupsub\\"><span class=\\"vlist-t vlist-t2\\"><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.3011em;\\"><span style=\\"top:-2.55em;margin-left:-0.2222em;margin-right:0.05em;\\"><span class=\\"pstrut\\" style=\\"height:2.7em;\\"></span><span class=\\"sizing reset-size6 size3 mtight\\"><span class=\\"mord mtight\\">2</span></span></span></span><span class=\\"vlist-s\\">​</span></span><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.15em;\\"><span></span></span></span></span></span></span></span></span></span> ) and end vertex ( <span v-pre=\\"\\" class=\\"katex\\"><span class=\\"katex-mathml\\"><math xmlns=\\"http://www.w3.org/1998/Math/MathML\\"><semantics><mrow><msub><mi>V</mi><mn>1</mn></msub></mrow><annotation encoding=\\"application/x-tex\\">V_1</annotation></semantics></math></span><span class=\\"katex-html\\" aria-hidden=\\"true\\"><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:0.8333em;vertical-align:-0.15em;\\"></span><span class=\\"mord\\"><span class=\\"mord mathnormal\\" style=\\"margin-right:0.22222em;\\">V</span><span class=\\"msupsub\\"><span class=\\"vlist-t vlist-t2\\"><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.3011em;\\"><span style=\\"top:-2.55em;margin-left:-0.2222em;margin-right:0.05em;\\"><span class=\\"pstrut\\" style=\\"height:2.7em;\\"></span><span class=\\"sizing reset-size6 size3 mtight\\"><span class=\\"mord mtight\\">1</span></span></span></span><span class=\\"vlist-s\\">​</span></span><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.15em;\\"><span></span></span></span></span></span></span></span></span></span> ). Therefore, knowing the vertex indices (start and end) allows you to identify the correct half-edge as the symmetric counterpart. In the implementation part, we could leverage hash map and <code>pair&lt;vertex*, vertex*&gt;</code> to get these mapping relationships.</p>","autoDesc":true}`);export{o as comp,c as data};
