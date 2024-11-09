import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as i,b as n,o as l}from"./app-B3ooTv29.js";const a={};function o(s,e){return l(),i("div",null,e[0]||(e[0]=[n('<h1 id="opengl" tabindex="-1"><a class="header-anchor" href="#opengl"><span>OpenGL</span></a></h1><p>Apple GPU Only support old version</p><h2 id="gpu-side" tabindex="-1"><a class="header-anchor" href="#gpu-side"><span>GPU Side</span></a></h2><h3 id="glsl" tabindex="-1"><a class="header-anchor" href="#glsl"><span>GLSL</span></a></h3><p>Like C++ but <strong>without</strong>:</p><ul><li><p>Pointers</p></li><li><p>Dynamic memory allocation</p></li><li><p>Recursion</p></li><li><p>User-defined classes</p></li></ul><p>Has its own <strong>built-in</strong> classes</p><ul><li>vec2, vec3, vec4, mat2, mat3, mat4, etc.</li></ul><p>Also has a built-in <strong>linear algebra</strong> library for common graphics functions</p><ul><li>normalize, length, dot, cross, reflect, sin, cos, etc.</li></ul><p>We had you write your linear algebra library to follow the GLSL API</p><ul><li>While the functions called in the shaders may look like the ones you wrote, they are different function calls!</li></ul><hr><p>rgb, xyz</p><p>wxyz</p><p>vert, frag</p><p>Sobel: edge detection</p><h2 id="pipeline" tabindex="-1"><a class="header-anchor" href="#pipeline"><span>Pipeline</span></a></h2><p><img src="https://cdn.jsdelivr.net/gh/davidliuk/images@master/blog/Screenshot 2024-09-25 at 1.51.23 PM.png" alt="pipeline" loading="lazy"></p><p>gl bind</p><ul><li>glBufferData</li><li>glBindBuffer</li></ul><p>from CPU to GPU</p><p>GL_ELEMENT_ARRAY_BUFFER:</p><p>GL_ARRAY_BUFFER</p><hr><h2 id="cpu-side" tabindex="-1"><a class="header-anchor" href="#cpu-side"><span>CPU Side</span></a></h2><h3 id="vertex-data" tabindex="-1"><a class="header-anchor" href="#vertex-data"><span>Vertex Data</span></a></h3><p>GLSL optimize redundant object(has no effect): don&#39;t</p><p>Associating “in” variables with VBOs</p><p>每个vertices一个normal，不光滑，连接处的所有normal合并了就光滑了（举例maya）</p>',30)]))}const d=t(a,[["render",o],["__file","opengl.html.vue"]]),c=JSON.parse(`{"path":"/education/ms/5600/opengl.html","title":"OpenGL","lang":"en-US","frontmatter":{"description":"OpenGL Apple GPU Only support old version GPU Side GLSL Like C++ but without: Pointers Dynamic memory allocation Recursion User-defined classes Has its own built-in classes vec2...","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/education/ms/5600/opengl.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"OpenGL"}],["meta",{"property":"og:description","content":"OpenGL Apple GPU Only support old version GPU Side GLSL Like C++ but without: Pointers Dynamic memory allocation Recursion User-defined classes Has its own built-in classes vec2..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/davidliuk/images@master/blog/Screenshot%202024-09-25%20at%201.51.23%E2%80%AFPM.png"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-11-09T03:55:12.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-09T03:55:12.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"OpenGL\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/davidliuk/images@master/blog/Screenshot%202024-09-25%20at%201.51.23%E2%80%AFPM.png\\"],\\"dateModified\\":\\"2024-11-09T03:55:12.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[{"level":2,"title":"GPU Side","slug":"gpu-side","link":"#gpu-side","children":[{"level":3,"title":"GLSL","slug":"glsl","link":"#glsl","children":[]}]},{"level":2,"title":"Pipeline","slug":"pipeline","link":"#pipeline","children":[]},{"level":2,"title":"CPU Side","slug":"cpu-side","link":"#cpu-side","children":[{"level":3,"title":"Vertex Data","slug":"vertex-data","link":"#vertex-data","children":[]}]}],"git":{"createdTime":1727659735000,"updatedTime":1731124512000,"contributors":[{"name":"刘大维","email":"davidliu@liudaweideMacBook-Pro-3.local","commits":1}]},"readingTime":{"minutes":0.54,"words":161},"filePathRelative":"education/ms/5600/opengl.md","localizedDate":"September 30, 2024","excerpt":"\\n<p>Apple GPU Only support old version</p>\\n<h2>GPU Side</h2>\\n<h3>GLSL</h3>\\n<p>Like C++ but <strong>without</strong>:</p>\\n<ul>\\n<li>\\n<p>Pointers</p>\\n</li>\\n<li>\\n<p>Dynamic memory allocation</p>\\n</li>\\n<li>\\n<p>Recursion</p>\\n</li>\\n<li>\\n<p>User-defined classes</p>\\n</li>\\n</ul>\\n<p>Has its own <strong>built-in</strong> classes</p>","autoDesc":true}`);export{d as comp,c as data};
