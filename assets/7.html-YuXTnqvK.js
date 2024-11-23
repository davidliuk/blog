import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,d as i,o as n}from"./app-Cv-jMnVl.js";const o={};function r(s,e){return n(),a("div",null,e[0]||(e[0]=[i('<h1 id="cq7" tabindex="-1"><a class="header-anchor" href="#cq7"><span>CQ7</span></a></h1><p>(5 pts) When quadrangulating a face during Catmull-Clark subdivision, what information must you temporarily store in order to properly link your half-edge pointers without creating inaccessible edges?</p><p>(5 pts) When extruding a face, what operation must be performed after all edges have been turned into quadrangles via the extrusion algorithm discussed in the lecture slides? What iteration of said operation must be specially handled?</p><h1 id="cq-7" tabindex="-1"><a class="header-anchor" href="#cq-7"><span>CQ 7</span></a></h1><h3 id="q1" tabindex="-1"><a class="header-anchor" href="#q1"><span>Q1</span></a></h3><p>You must temporarily store the centroids of each face and the midpoints of each edge. This information is crucial for properly linking your half-edge pointers, as it ensures that each quadrangled face can access its adjacent vertices and edges without creating inaccessible or isolated edges.</p><p>Specifically</p><ol><li>Face Centroid: Allows each new face to link back to a central point, maintaining connectivity within the subdivided face.</li><li>Edge Midpoints: Helps define the boundaries of each quadrangle, ensuring each quadrangled section has a shared edge with adjacent faces.</li></ol><p>Also, you should store the pairs of newly created half-edges (or their corresponding edge information) for each edge of the original face. This temporary storage allows you to correctly assign the twin pointers between these new half-edges, ensuring that each new edge is properly linked to its counterpart and preventing the creation of inaccessible edges during the quadrangulation process.</p><h3 id="q2" tabindex="-1"><a class="header-anchor" href="#q2"><span>Q2</span></a></h3><p>When extruding a face, after all edges have been converted into quadrangles, you need to establish the symmetry relationships between new half-edges to maintain consistency across the mesh structure. This involves linking each extruded edge’s half-edge with a symmetrical counterpart.</p><p>A particular iteration to handle carefully is the final extruded edge loop that connects back to the initial vertices of the face. This loop requires correctly setting the symmetrical pointers to avoid inconsistencies, as it closes the loop of the newly extruded faces, ensuring continuity across the mesh.</p><p>If we are extruding multiple edges as part of a face extrusion, then we set the sym pointers of HE3 and HE4 to be half-edges created by other edge extrusions<br> If this is a single edge extrusion, then we create sym half-edges that point to a NULL face.</p>',13)]))}const c=t(o,[["render",r],["__file","7.html.vue"]]),h=JSON.parse(`{"path":"/education/ms/5600/cq/7.html","title":"CQ7","lang":"en-US","frontmatter":{"description":"CQ7 (5 pts) When quadrangulating a face during Catmull-Clark subdivision, what information must you temporarily store in order to properly link your half-edge pointers without c...","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/education/ms/5600/cq/7.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"CQ7"}],["meta",{"property":"og:description","content":"CQ7 (5 pts) When quadrangulating a face during Catmull-Clark subdivision, what information must you temporarily store in order to properly link your half-edge pointers without c..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-11-09T05:50:09.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-09T05:50:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"CQ7\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-09T05:50:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[{"level":3,"title":"Q1","slug":"q1","link":"#q1","children":[]},{"level":3,"title":"Q2","slug":"q2","link":"#q2","children":[]}],"git":{"createdTime":1675410392000,"updatedTime":1731131409000,"contributors":[{"name":"David Liu","email":"liudawei@seas.upenn.edu","commits":1},{"name":"刘大维","email":"davidliu@liudaweideMacBook-Pro-3.local","commits":1}]},"readingTime":{"minutes":1.2,"words":361},"filePathRelative":"education/ms/5600/cq/7.md","localizedDate":"February 3, 2023","excerpt":"\\n<p>(5 pts) When quadrangulating a face during Catmull-Clark subdivision, what information must you temporarily store in order to properly link your half-edge pointers without creating inaccessible edges?</p>\\n<p>(5 pts) When extruding a face, what operation must be performed after all edges have been turned into quadrangles via the extrusion algorithm discussed in the lecture slides? What iteration of said operation must be specially handled?</p>","autoDesc":true}`);export{c as comp,h as data};
