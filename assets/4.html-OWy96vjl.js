import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as t,d as s,o as n}from"./app-DIqbhby7.js";const r={};function i(o,e){return n(),t("div",null,e[0]||(e[0]=[s('<h1 id="concept-questions-for-hw03" tabindex="-1"><a class="header-anchor" href="#concept-questions-for-hw03"><span>Concept Questions for HW03</span></a></h1><ul><li>(5 pts) In the OpenGL Shading Language (GLSL), what is a uniform variable? What is an &quot;in&quot; variable? What is an &quot;out&quot; variable? How does a vertex shader pass data to a fragment shader?</li><li>(5 pts) MyGL contains two member variables that are std::unordered_maps. What do the GLuints that these maps store represent? How are they assigned values in the first place?</li></ul><h2 id="question-1" tabindex="-1"><a class="header-anchor" href="#question-1"><span>Question 1</span></a></h2><h3 id="uniform" tabindex="-1"><a class="header-anchor" href="#uniform"><span>uniform</span></a></h3><p>Uniforms are <strong>constant</strong> across all instances of a shader program. It retains the same value across all processed vertices or fragments. Uniforms are typically used for constants that do not change during the execution of a draw call, such as transformation matrices, lighting parameters, or texture samplers.</p><h3 id="in-variable" tabindex="-1"><a class="header-anchor" href="#in-variable"><span><strong>&quot;in&quot;</strong> variable</span></a></h3><p>An <strong>&quot;in&quot;</strong> variable in GLSL is an input to a shader stage. In a vertex shader, &quot;in&quot; variables typically represent vertex attributes (e.g., position, normal, texture coordinates). In a fragment shader, &quot;in&quot; variables represent the interpolated outputs from the vertex shader.</p><h3 id="out-variable" tabindex="-1"><a class="header-anchor" href="#out-variable"><span><strong>&quot;out&quot;</strong> variable</span></a></h3><p>An <strong>&quot;out&quot;</strong> variable in GLSL is an output from a shader stage. In a vertex shader, &quot;out&quot; variables represent data that will be passed on to the next stage, which is typically the fragment shader. In a fragment shader, &quot;out&quot; variables represent the final color or other data to be written to the framebuffer.</p><h3 id="pass-data" tabindex="-1"><a class="header-anchor" href="#pass-data"><span>pass data</span></a></h3><p>A vertex shader passes data to a fragment shader by declaring <strong>out</strong> variables, which are then received as <strong>in</strong> variables in the fragment shader.</p><h2 id="question-2" tabindex="-1"><a class="header-anchor" href="#question-2"><span>Question 2</span></a></h2><h3 id="represent" tabindex="-1"><a class="header-anchor" href="#represent"><span>represent</span></a></h3><p>The <strong>GLuints</strong> in the two <code>std::unordered_maps</code> represent the CPU-side handles for the <strong>&quot;in&quot;</strong> (attribute) and <strong>uniform</strong> variables defined in the shader program. Each key in the maps is the literal name of the variable as specified in the shader (e.g., <code>vs_Pos</code> for attributes and <code>u_ScreenDimensions</code> for uniforms), and each value is the handle (type <code>GLint</code>) associated with that variable.</p><h3 id="assigned-values" tabindex="-1"><a class="header-anchor" href="#assigned-values"><span>assigned values</span></a></h3><p>These handles are assigned values by using the OpenGL functions <code>glGetAttribLocation</code> and <code>glGetUniformLocation</code>. When the <code>getHandlesForShaderVariables</code> function is called, it activates the specified shader program and retrieves the location of each variable in the shader. The obtained handle IDs are then stored in <code>shaderAttribVariableHandles</code> and <code>shaderUniformVariableHandles</code> with their corresponding variable names as keys.</p>',16)]))}const h=a(r,[["render",i],["__file","4.html.vue"]]),u=JSON.parse(`{"path":"/education/ms/5600/cq/4.html","title":"Concept Questions for HW03","lang":"en-US","frontmatter":{"description":"Concept Questions for HW03 (5 pts) In the OpenGL Shading Language (GLSL), what is a uniform variable? What is an \\"in\\" variable? What is an \\"out\\" variable? How does a vertex shad...","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/education/ms/5600/cq/4.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"Concept Questions for HW03"}],["meta",{"property":"og:description","content":"Concept Questions for HW03 (5 pts) In the OpenGL Shading Language (GLSL), what is a uniform variable? What is an \\"in\\" variable? What is an \\"out\\" variable? How does a vertex shad..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-11-09T03:55:12.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-09T03:55:12.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Concept Questions for HW03\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-09T03:55:12.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[{"level":2,"title":"Question 1","slug":"question-1","link":"#question-1","children":[{"level":3,"title":"uniform","slug":"uniform","link":"#uniform","children":[]},{"level":3,"title":"\\"in\\" variable","slug":"in-variable","link":"#in-variable","children":[]},{"level":3,"title":"\\"out\\" variable","slug":"out-variable","link":"#out-variable","children":[]},{"level":3,"title":"pass data","slug":"pass-data","link":"#pass-data","children":[]}]},{"level":2,"title":"Question 2","slug":"question-2","link":"#question-2","children":[{"level":3,"title":"represent","slug":"represent","link":"#represent","children":[]},{"level":3,"title":"assigned values","slug":"assigned-values","link":"#assigned-values","children":[]}]}],"git":{"createdTime":1728657843000,"updatedTime":1731124512000,"contributors":[{"name":"刘大维","email":"davidliu@liudaweideMacBook-Pro-3.local","commits":1}]},"readingTime":{"minutes":1.21,"words":363},"filePathRelative":"education/ms/5600/cq/4.md","localizedDate":"October 11, 2024","excerpt":"\\n<ul>\\n<li>(5 pts) In the OpenGL Shading Language (GLSL), what is a uniform variable? What is an \\"in\\" variable? What is an \\"out\\" variable? How does a vertex shader pass data to a fragment shader?</li>\\n<li>(5 pts) MyGL contains two member variables that are std::unordered_maps. What do the GLuints that these maps store represent? How are they assigned values in the first place?</li>\\n</ul>","autoDesc":true}`);export{h as comp,u as data};
