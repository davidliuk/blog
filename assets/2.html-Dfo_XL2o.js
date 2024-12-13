import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as o,d as n,o as a}from"./app-DIqbhby7.js";const i={};function s(r,e){return a(),o("div",null,e[0]||(e[0]=[n('<h1 id="concept-questions-for-hw02" tabindex="-1"><a class="header-anchor" href="#concept-questions-for-hw02"><span>Concept Questions for HW02</span></a></h1><h2 id="questions" tabindex="-1"><a class="header-anchor" href="#questions"><span>Questions</span></a></h2><p>Before you begin the programming portion of this homework assignment, read and answer the following conceptual questions. Your answers should be submitted to Canvas.</p><ul><li>(3 pts) In C++, what is a virtual function and how does it relate to object polymorphism? Say I have a class <code>Base</code> and a class <code>Derived</code> that inherits from <code>Base</code>. Both classes implement a <strong>non</strong>-virtual function called <code>func()</code>. If <code>func()</code> is invoked by dereferencing a <code>Base*</code> that actually points to an instance of <code>Derived</code>, which implementation of <code>func()</code> will be called, and why?</li><li>(2 pts) In <code>polygon.cpp</code> there is a constructor for the <code>Polygon</code> class that takes in a number of sides to construct a regular, convex polygon. There is a section of this constructor&#39;s body that sets up &quot;indices&quot; to construct triangles out of the polygon&#39;s perimeter vertices. Please draw how these triangles would be formed for a regular convex pentagon (five-sided polygon), and label each vertex with its index number. You may draw your image on a piece of paper and take a photograph, or create it in some sort of image editing software. Your drawing need not be perfect, just make sure it&#39;s understandable. In the end, please submit your drawing as a <code>.png</code> image.</li><li>(5 pts) If I want to write a function that builds my entire scene graph and returns its root node, what should the return type of the function be? Additionally, where in memory should I instantiate the nodes of my scene graph? Why should I instantiate my nodes in this portion of memory?</li></ul><h2 id="answers" tabindex="-1"><a class="header-anchor" href="#answers"><span>Answers</span></a></h2><h3 id="_3-pts-virtual-function-and-object-polymorphism-in-c" tabindex="-1"><a class="header-anchor" href="#_3-pts-virtual-function-and-object-polymorphism-in-c"><span>(3 pts) Virtual Function and Object Polymorphism in C++</span></a></h3><p>A <strong>virtual function</strong> in C++ is a member function declared in a base class that can be overridden in a derived class. It enables <strong>polymorphism</strong>, allowing the program to decide at runtime which version of the function to call, depending on the actual type of the object pointed to by a base pointer or reference.</p><p>If both the <code>Base</code> and <code>Derived</code> classes have a non-virtual function <code>func()</code>, and you dereference a <code>Base*</code> that actually points to an instance of <code>Derived</code>, <strong>the implementation of <code>func()</code> from the <code>Base</code> class will be called</strong>. This is because non-virtual functions use <strong>static binding</strong> (compile-time binding), meaning the function to call is determined by the type of the pointer (<code>Base*</code>), not the actual object it points to (<code>Derived</code>).</p><h3 id="_2-pts-triangles-formed-in-a-regular-convex-pentagon" tabindex="-1"><a class="header-anchor" href="#_2-pts-triangles-formed-in-a-regular-convex-pentagon"><span>(2 pts) Triangles Formed in a Regular Convex Pentagon</span></a></h3><p>The constructor generates the vertices of the polygon in a loop and stores them in <code>m_vertPos</code>. Then, it forms triangles by pushing vertex indices into <code>m_vertIdx</code>. The first vertex (index 0) is shared by all triangles, and the other two vertices for each triangle are consecutive perimeter vertices.</p><p><img src="https://cdn.jsdelivr.net/gh/davidliuk/images@master/blog/pentagon.png" alt="pentagon" loading="lazy"></p><h3 id="_5-pts-function-return-type-for-scene-graph" tabindex="-1"><a class="header-anchor" href="#_5-pts-function-return-type-for-scene-graph"><span>(5 pts) Function Return Type for Scene Graph</span></a></h3><p>To build the scene graph, the function should return a <code>std::unique_ptr&lt;Node&gt;</code>. This ensures that the root node has sole ownership, preventing memory leaks and dangling pointers.</p><p>Nodes should be instantiated in <strong>heap memory</strong> because the scene graph may have a dynamic, growing structure. Allocating on the heap allows nodes to persist beyond the function scope and ensures efficient memory management, as stack memory is limited and unsuitable for objects with uncertain lifetimes or large sizes.</p>',14)]))}const l=t(i,[["render",s],["__file","2.html.vue"]]),p=JSON.parse(`{"path":"/education/ms/5600/cq/2.html","title":"Concept Questions for HW02","lang":"en-US","frontmatter":{"description":"Concept Questions for HW02 Questions Before you begin the programming portion of this homework assignment, read and answer the following conceptual questions. Your answers shoul...","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/education/ms/5600/cq/2.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"Concept Questions for HW02"}],["meta",{"property":"og:description","content":"Concept Questions for HW02 Questions Before you begin the programming portion of this homework assignment, read and answer the following conceptual questions. Your answers shoul..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/davidliuk/images@master/blog/pentagon.png"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-11-09T03:55:12.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-09T03:55:12.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Concept Questions for HW02\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/davidliuk/images@master/blog/pentagon.png\\"],\\"dateModified\\":\\"2024-11-09T03:55:12.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[{"level":2,"title":"Questions","slug":"questions","link":"#questions","children":[]},{"level":2,"title":"Answers","slug":"answers","link":"#answers","children":[{"level":3,"title":"(3 pts) Virtual Function and Object Polymorphism in C++","slug":"_3-pts-virtual-function-and-object-polymorphism-in-c","link":"#_3-pts-virtual-function-and-object-polymorphism-in-c","children":[]},{"level":3,"title":"(2 pts) Triangles Formed in a Regular Convex Pentagon","slug":"_2-pts-triangles-formed-in-a-regular-convex-pentagon","link":"#_2-pts-triangles-formed-in-a-regular-convex-pentagon","children":[]},{"level":3,"title":"(5 pts) Function Return Type for Scene Graph","slug":"_5-pts-function-return-type-for-scene-graph","link":"#_5-pts-function-return-type-for-scene-graph","children":[]}]}],"git":{"createdTime":1727659735000,"updatedTime":1731124512000,"contributors":[{"name":"刘大维","email":"davidliu@liudaweideMacBook-Pro-3.local","commits":1}]},"readingTime":{"minutes":1.85,"words":554},"filePathRelative":"education/ms/5600/cq/2.md","localizedDate":"September 30, 2024","excerpt":"\\n<h2>Questions</h2>\\n<p>Before you begin the programming portion of this homework assignment, read and answer the following conceptual questions. Your answers should be submitted to Canvas.</p>\\n<ul>\\n<li>(3 pts) In C++, what is a virtual function and how does it relate to object polymorphism? Say I have a class <code>Base</code> and a class <code>Derived</code> that inherits from <code>Base</code>. Both classes implement a <strong>non</strong>-virtual function called <code>func()</code>. If <code>func()</code> is invoked by dereferencing a <code>Base*</code> that actually points to an instance of <code>Derived</code>, which implementation of <code>func()</code> will be called, and why?</li>\\n<li>(2 pts) In <code>polygon.cpp</code> there is a constructor for the <code>Polygon</code> class that takes in a number of sides to construct a regular, convex polygon. There is a section of this constructor's body that sets up \\"indices\\" to construct triangles out of the polygon's perimeter vertices. Please draw how these triangles would be formed for a regular convex pentagon (five-sided polygon), and label each vertex with its index number. You may draw your image on a piece of paper and take a photograph, or create it in some sort of image editing software. Your drawing need not be perfect, just make sure it's understandable. In the end, please submit your drawing as a <code>.png</code> image.</li>\\n<li>(5 pts) If I want to write a function that builds my entire scene graph and returns its root node, what should the return type of the function be? Additionally, where in memory should I instantiate the nodes of my scene graph? Why should I instantiate my nodes in this portion of memory?</li>\\n</ul>","autoDesc":true}`);export{l as comp,p as data};
