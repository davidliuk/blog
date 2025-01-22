import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as e,d as a,o as n}from"./app-ktFCNIob.js";const t={};function l(r,s){return n(),e("div",null,s[0]||(s[0]=[a(`<h1 id="mesh-structure" tabindex="-1"><a class="header-anchor" href="#mesh-structure"><span>Mesh Structure</span></a></h1><h2 id="current-structure" tabindex="-1"><a class="header-anchor" href="#current-structure"><span>Current Structure</span></a></h2><p>Polygon Mesh Implementation</p><p>Generally speaking, we build a linked structure to explicitly connect faces, edges, and vertices</p><p>○ Advantages: fast, efficient, can support arbitrary polygons</p><p>○ Disadvantages: Somewhat complex to implement, must maintain</p><p>pointers to the necessary neighboring components</p><hr><p>Well-Formed Surfaces</p><ul><li><p>Want a mesh’s structure to be “clean” (manifold geometry)</p></li><li><p>Components must intersect “properly”</p></li></ul><p>○ Faces are disjoint, OR share either a vertex or the edge between two vertices</p><p>○ Each edge is incident to exactly two vertices</p><p>○ Each edge is incident to at most two faces, and at least one face</p><ul><li>Local topology must also be “proper”</li></ul><p>○ The “neighborhood” of a vertex should permit stretching and bending, but not tearing</p><ul><li>Global topology should be connected, closed, and bounded</li></ul><hr><p>Simple Data Structures</p><ul><li><p>List of polygon faces</p></li><li><p>List of edges</p></li><li><p>Vertices and index-based faces</p></li></ul><hr><ul><li><p>Store a list of polygon faces, each containing a set of explicit vertex coordinates</p></li><li><p>No explicit edges</p></li><li><p>No explicit face adjacency</p></li></ul><p>○ You might figure out what faces are adjacent by checking for pairs of shared vertices</p><p>List of Edges</p><ul><li><p>Store a list of vertex pairs, where each pair defines an edge</p></li><li><p>Again, no explicit faces or adjacency</p></li></ul><p>○ Two vertices at the same coordinates are discrete</p><p>Index-based faces</p><ul><li><p>Like we discussed previously, this is the data structure you used to render your geometry with vertex buffer objects</p></li><li><p>As with the previous two data structures, there is no adjacency information</p></li></ul><h3 id="constraint" tabindex="-1"><a class="header-anchor" href="#constraint"><span>Constraint</span></a></h3><p>We want a mesh data structure that helps us do the following</p><ul><li>○ Easily add/remove/modify elements in 3D</li><li>○ Have a low access time when finding elements <ul><li>■ Usually linear time</li><li>■ Avoid searching for things like neighbors</li></ul></li><li>○ Have constant-size storage (i.e. no usage of std::vectors)</li><li>○ Implicitly prevent “bad” mesh structures</li></ul><p>in addition to geometric data, let’s also store topological information like <strong>adjacency</strong> and <strong>connectivity</strong></p><h2 id="half-edge-structure" tabindex="-1"><a class="header-anchor" href="#half-edge-structure"><span>Half-Edge Structure</span></a></h2><p>Naïve Adjacency</p><ul><li>Each element has a list of pointers to ALL adjacent elements</li></ul><p>○ Queries depend on the local complexity of the mesh</p><p>○ Each element (face/edge/vertex) does not have a fixed size!</p><p>○ Slow to construct, tedious to maintain all the pointers during operations on the mesh</p><h3 id="structure" tabindex="-1"><a class="header-anchor" href="#structure"><span>Structure</span></a></h3><p>Composed of vertices, faces, and half-edges</p><h4 id="half-edge" tabindex="-1"><a class="header-anchor" href="#half-edge"><span>half-edge</span></a></h4><ul><li>Half-edges are directed edges that form a <strong>ring</strong> around a particular face</li></ul><blockquote><p>DO-WHILE to traversal edges</p></blockquote><ul><li>A half-edge stores the following information:</li></ul><p>○ The face to its left</p><p>○ The next half-edge in the ring</p><p>○ The symmetric half-edge on the face adjacent to this half-edge’s face</p><p>○ The vertex between this half-edge and the next half-edge</p><ul><li>If an edge lies at a boundary (i.e. it only touches one face), both half-edges are still needed</li></ul><p>○ The outer half-edge just has a NULL face pointer</p><ul><li>Take note that the external boundary of this mesh is still linked in a ring</li></ul><h4 id="face" tabindex="-1"><a class="header-anchor" href="#face"><span>face</span></a></h4><p>A face stores a single pointer to <strong>any</strong> one of the half-edges that loops around it</p><h4 id="vertex" tabindex="-1"><a class="header-anchor" href="#vertex"><span>vertex</span></a></h4><ul><li><p>A vertex stores a single pointer to an arbitrary half-edge that points to it</p></li><li><p>Combined with the many pointers stored in a half-edge, we have a data structure that we can traverse starting from any arbitrary component!</p></li></ul><h3 id="advantages" tabindex="-1"><a class="header-anchor" href="#advantages"><span>Advantages</span></a></h3><p>Fixed size of data structure elements</p><ul><li>Data:</li></ul><p>○ Geometric information stored at vertices</p><p>○ Attribute information (e.g. color) stored in any relevant component</p><p>○ <strong>Topological</strong> information in half-edges <strong>only</strong>!</p><ul><li><p>Structure enforces “proper” topology (i.e. you can’t have Mobius strips)</p></li><li><p>Time complexity</p></li></ul><p>○ Linear for all local information (e.g. gathering lists of faces, edges, or vertices)</p><p>○ Independent of the overall mesh complexity</p><div class="language-c++ line-numbers-mode" data-highlighter="shiki" data-ext="c++" data-title="c++" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">class</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> Vertex</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    vec3 pos;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    HalfEdge </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">*</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> he;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">class</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> Face</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    vec3 color;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    HalfEdge </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">*</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> he;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">class</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> HalfEdge</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    HalfEdge </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">*</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">sym;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    HalfEdge </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">*</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">nxt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">class</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> Mesh</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    std::vector</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">&lt;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">uPtr</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">&lt;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">Face</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">&gt;&gt;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> faces;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    std::vector</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">&lt;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">uPtr</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">&lt;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">Vertex</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">&gt;&gt;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> verts;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    std::vector</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">&lt;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">uPtr</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">&lt;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">HalfEdge</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">&gt;&gt;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> edges;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="operations" tabindex="-1"><a class="header-anchor" href="#operations"><span>Operations</span></a></h2><h3 id="half-edge-traverse" tabindex="-1"><a class="header-anchor" href="#half-edge-traverse"><span>Half Edge Traverse</span></a></h3><h4 id="around-face" tabindex="-1"><a class="header-anchor" href="#around-face"><span>around Face</span></a></h4><div class="language-c++ line-numbers-mode" data-highlighter="shiki" data-ext="c++" data-title="c++" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">Node </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">*</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">head </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">=</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> face</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">halfEdge</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">*</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">curr </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> head; </span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">do</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    tag</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(curr);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    curr </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">=</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> curr</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">next</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">} </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">while</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (curr </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">!=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> head);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="around-vertex" tabindex="-1"><a class="header-anchor" href="#around-vertex"><span>around Vertex</span></a></h4><div class="language-c++ line-numbers-mode" data-highlighter="shiki" data-ext="c++" data-title="c++" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">Node </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">*</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">head </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">=</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> vertex</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">halfEdge</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">*</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">curr </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> head; </span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">do</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    tag</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(curr);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    curr </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">=</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> curr</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">next</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">sym</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">} </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">while</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (curr </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">!=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> head);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="split-edge-insert-vertex" tabindex="-1"><a class="header-anchor" href="#split-edge-insert-vertex"><span>Split Edge/Insert Vertex</span></a></h3><p>Insert a new vertex between V1 and V2</p><p><img src="https://cdn.jsdelivr.net/gh/davidliuk/images@master/blog/Screenshot 2024-10-25 at 2.00.57 PM.png" alt="Screenshot 2024-10-25 at 2.00.57 PM" loading="lazy"></p><p>Steps:</p><ol><li>Create the new vertex V3</li><li>Create the two new half-edges HE1B and HE2B needed to surround V3 <ol><li>Make sure that HE1B points to V1 and that HE2B points to V2</li><li>Also set the correct face pointers for HE1B and HE2B</li></ol></li><li>Adjust the sym, next, and vert pointers of HE1, HE2, HE1B, and HE2B so the data structure flows as it did before</li></ol><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="triangulate" tabindex="-1"><a class="header-anchor" href="#triangulate"><span>Triangulate</span></a></h3><h3 id="catmull-clark-subdivision" tabindex="-1"><a class="header-anchor" href="#catmull-clark-subdivision"><span>Catmull-Clark Subdivision</span></a></h3><div class="language-c++ line-numbers-mode" data-highlighter="shiki" data-ext="c++" data-title="c++" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">class</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> Mesh</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">class</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> Face</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">class</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> HalfFace</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    HalfFace </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">*</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">sym;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    HalfFace </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">*</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">nxt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,79)]))}const d=i(t,[["render",l],["__file","mesh.html.vue"]]),k=JSON.parse(`{"path":"/education/ms/5600/mesh.html","title":"Mesh Structure","lang":"en-US","frontmatter":{"description":"Mesh Structure Current Structure Polygon Mesh Implementation Generally speaking, we build a linked structure to explicitly connect faces, edges, and vertices ○ Advantages: fast,...","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/education/ms/5600/mesh.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"Mesh Structure"}],["meta",{"property":"og:description","content":"Mesh Structure Current Structure Polygon Mesh Implementation Generally speaking, we build a linked structure to explicitly connect faces, edges, and vertices ○ Advantages: fast,..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/davidliuk/images@master/blog/Screenshot%202024-10-25%20at%202.00.57%E2%80%AFPM.png"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-11-09T05:50:09.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-09T05:50:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Mesh Structure\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/davidliuk/images@master/blog/Screenshot%202024-10-25%20at%202.00.57%E2%80%AFPM.png\\"],\\"dateModified\\":\\"2024-11-09T05:50:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[{"level":2,"title":"Current Structure","slug":"current-structure","link":"#current-structure","children":[{"level":3,"title":"Constraint","slug":"constraint","link":"#constraint","children":[]}]},{"level":2,"title":"Half-Edge Structure","slug":"half-edge-structure","link":"#half-edge-structure","children":[{"level":3,"title":"Structure","slug":"structure","link":"#structure","children":[]},{"level":3,"title":"Advantages","slug":"advantages","link":"#advantages","children":[]}]},{"level":2,"title":"Operations","slug":"operations","link":"#operations","children":[{"level":3,"title":"Half Edge Traverse","slug":"half-edge-traverse","link":"#half-edge-traverse","children":[]},{"level":3,"title":"Split Edge/Insert Vertex","slug":"split-edge-insert-vertex","link":"#split-edge-insert-vertex","children":[]},{"level":3,"title":"Triangulate","slug":"triangulate","link":"#triangulate","children":[]},{"level":3,"title":"Catmull-Clark Subdivision","slug":"catmull-clark-subdivision","link":"#catmull-clark-subdivision","children":[]}]}],"git":{"createdTime":1728657843000,"updatedTime":1731131409000,"contributors":[{"name":"David Liu","email":"liudawei@seas.upenn.edu","commits":1},{"name":"刘大维","email":"davidliu@liudaweideMacBook-Pro-3.local","commits":1}]},"readingTime":{"minutes":2.55,"words":766},"filePathRelative":"education/ms/5600/mesh.md","localizedDate":"October 11, 2024","excerpt":"\\n<h2>Current Structure</h2>\\n<p>Polygon Mesh Implementation</p>\\n<p>Generally speaking, we build a linked structure to explicitly connect faces, edges, and vertices</p>\\n<p>○ Advantages: fast, efficient, can support arbitrary polygons</p>\\n<p>○ Disadvantages: Somewhat complex to implement, must maintain</p>","autoDesc":true}`);export{d as comp,k as data};