import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as n,d as a,o as i}from"./app-ktFCNIob.js";const o={};function r(s,e){return i(),n("div",null,e[0]||(e[0]=[a('<h1 id="quiz-5" tabindex="-1"><a class="header-anchor" href="#quiz-5"><span>Quiz 5</span></a></h1><h2 id="q1-bind-matrices" tabindex="-1"><a class="header-anchor" href="#q1-bind-matrices"><span>Q1 Bind matrices</span></a></h2><p>3 Points</p><p>Explain how to <strong>construct a bind matrix</strong> for each joint on a skeleton, and explain the <strong>space-to-space transformation</strong> each bind matrix applies to any mesh vertex. Your answer should be no more than two sentences.</p><p>Calculate the inverse of the joint&#39;s transformation matrix with respect to the world. This bind matrix, when applied to a mesh vertex, transforms the vertex from model space to the joint&#39;s local space.</p><h2 id="q2-making-a-bind-matrix" tabindex="-1"><a class="header-anchor" href="#q2-making-a-bind-matrix"><span>Q2 Making a Bind Matrix</span></a></h2><p>3 Points</p><p>Compute the <strong>bind matrix</strong> for the skeleton joint with the overall transform shown below (you should leave it written as a sequence of individual matrices). Then, <strong>apply that bind matrix</strong> to a vertex located at the world-space position <strong>(2, 2)</strong>.</p><p>let the above matrix be R1, R2, R3, R4, R5, respectively</p><p>then the bind matrix</p><p><code>B=(R1*R2*R3*R4*R5)^(-1)=R5^(-1)*R4^(-1)*R3^(-1)*R2^(-1)*R1^(-1)$</code></p><p>then the world-space position:</p><p><code>p=B*(2,2)=R5^(-1)*R4^(-1)*R3^(-1)*R2^(-1)*R1^(-1)*(2,2)</code></p><h2 id="q3-unmoving-mesh" tabindex="-1"><a class="header-anchor" href="#q3-unmoving-mesh"><span>Q3 Unmoving Mesh</span></a></h2><p>3 Points</p><p>Adam has written a program that applies linear blend skinning to a mesh with a skeleton. However, when his skeleton moves its joints, the mesh does not move with them. Suggest one possible cause for this error in no more than one sentence.</p><p>The joint weights for the vertices might not be properly initialized or normalized, causing the mesh to ignore joint influences.</p>',17)]))}const m=t(o,[["render",r],["__file","5.html.vue"]]),c=JSON.parse(`{"path":"/education/ms/5600/quiz/5.html","title":"Quiz 5","lang":"en-US","frontmatter":{"description":"Quiz 5 Q1 Bind matrices 3 Points Explain how to construct a bind matrix for each joint on a skeleton, and explain the space-to-space transformation each bind matrix applies to a...","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/education/ms/5600/quiz/5.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"Quiz 5"}],["meta",{"property":"og:description","content":"Quiz 5 Q1 Bind matrices 3 Points Explain how to construct a bind matrix for each joint on a skeleton, and explain the space-to-space transformation each bind matrix applies to a..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-11-09T05:50:09.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-09T05:50:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Quiz 5\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-09T05:50:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[{"level":2,"title":"Q1 Bind matrices","slug":"q1-bind-matrices","link":"#q1-bind-matrices","children":[]},{"level":2,"title":"Q2 Making a Bind Matrix","slug":"q2-making-a-bind-matrix","link":"#q2-making-a-bind-matrix","children":[]},{"level":2,"title":"Q3 Unmoving Mesh","slug":"q3-unmoving-mesh","link":"#q3-unmoving-mesh","children":[]}],"git":{"createdTime":1731131409000,"updatedTime":1731131409000,"contributors":[{"name":"David Liu","email":"liudawei@seas.upenn.edu","commits":1}]},"readingTime":{"minutes":0.83,"words":250},"filePathRelative":"education/ms/5600/quiz/5.md","localizedDate":"November 9, 2024","excerpt":"\\n<h2>Q1 Bind matrices</h2>\\n<p>3 Points</p>\\n<p>Explain how to <strong>construct a bind matrix</strong> for each joint on a skeleton, and explain the <strong>space-to-space transformation</strong> each bind matrix applies to any mesh vertex. Your answer should be no more than two sentences.</p>\\n<p>Calculate the inverse of the joint's transformation matrix with respect to the world. This bind matrix, when applied to a mesh vertex, transforms the vertex from model space to the joint's local space.</p>","autoDesc":true}`);export{m as comp,c as data};
