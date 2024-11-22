import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,d as n,o as i}from"./app-B6s9NXTg.js";const r={};function o(s,e){return i(),a("div",null,e[0]||(e[0]=[n('<h1 id="_3d-rendering-topics" tabindex="-1"><a class="header-anchor" href="#_3d-rendering-topics"><span>3D Rendering Topics</span></a></h1><h2 id="perspective-correct-interpolation" tabindex="-1"><a class="header-anchor" href="#perspective-correct-interpolation"><span>Perspective-correct interpolation</span></a></h2><p>PLERP</p><h2 id="texture" tabindex="-1"><a class="header-anchor" href="#texture"><span>Texture</span></a></h2><p>Problem: The texture’s pixels must be mapped to points on the object’s surface before the texture can be sampled</p><p>Interpolating triangle UVs</p><h3 id="texture-space" tabindex="-1"><a class="header-anchor" href="#texture-space"><span>Texture space</span></a></h3><p>RGB 0 -&gt; XYZ -1</p><p>RGB 0.5 -&gt; XYZ 0</p><p>RGB 1 -&gt; XYZ 1</p><h3 id="normal-maps" tabindex="-1"><a class="header-anchor" href="#normal-maps"><span>Normal maps</span></a></h3><p>The physics of lighting</p><h3 id="the-physics-of-lighting" tabindex="-1"><a class="header-anchor" href="#the-physics-of-lighting"><span>The physics of lighting</span></a></h3><h4 id="flux" tabindex="-1"><a class="header-anchor" href="#flux"><span>Flux</span></a></h4><h4 id="irradiance" tabindex="-1"><a class="header-anchor" href="#irradiance"><span>Irradiance</span></a></h4><h4 id="lambert-s-law" tabindex="-1"><a class="header-anchor" href="#lambert-s-law"><span>Lambert’s law</span></a></h4><h3 id="shading-models" tabindex="-1"><a class="header-anchor" href="#shading-models"><span>Shading Models</span></a></h3><p>Shading models dictate how one interpolates the results of reflection models</p><p>Vertex shader, fragment shader</p><h4 id="gouraud-shading-model" tabindex="-1"><a class="header-anchor" href="#gouraud-shading-model"><span>Gouraud Shading Model</span></a></h4><p>Cons:</p><ul><li>Vertices with different colors</li></ul><h3 id="phone-shading-model" tabindex="-1"><a class="header-anchor" href="#phone-shading-model"><span>Phone Shading Model</span></a></h3><p>Fragment</p><h3 id="reflection-models" tabindex="-1"><a class="header-anchor" href="#reflection-models"><span>Reflection Models</span></a></h3><ul><li>Blinn-Phong specular highlights</li><li>Specular reflection model</li><li>Subsurface Scattering</li><li>Microfacet reflection</li></ul>',26)]))}const c=t(r,[["render",o],["__file","3D-Rendering.html.vue"]]),h=JSON.parse(`{"path":"/education/ms/5600/3D-Rendering.html","title":"3D Rendering Topics","lang":"en-US","frontmatter":{"description":"3D Rendering Topics Perspective-correct interpolation PLERP Texture Problem: The texture’s pixels must be mapped to points on the object’s surface before the texture can be samp...","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/education/ms/5600/3D-Rendering.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"3D Rendering Topics"}],["meta",{"property":"og:description","content":"3D Rendering Topics Perspective-correct interpolation PLERP Texture Problem: The texture’s pixels must be mapped to points on the object’s surface before the texture can be samp..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-11-09T03:55:12.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-09T03:55:12.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"3D Rendering Topics\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-09T03:55:12.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[{"level":2,"title":"Perspective-correct interpolation","slug":"perspective-correct-interpolation","link":"#perspective-correct-interpolation","children":[]},{"level":2,"title":"Texture","slug":"texture","link":"#texture","children":[{"level":3,"title":"Texture space","slug":"texture-space","link":"#texture-space","children":[]},{"level":3,"title":"Normal maps","slug":"normal-maps","link":"#normal-maps","children":[]},{"level":3,"title":"The physics of lighting","slug":"the-physics-of-lighting","link":"#the-physics-of-lighting","children":[]},{"level":3,"title":"Shading Models","slug":"shading-models","link":"#shading-models","children":[]},{"level":3,"title":"Phone Shading Model","slug":"phone-shading-model","link":"#phone-shading-model","children":[]},{"level":3,"title":"Reflection Models","slug":"reflection-models","link":"#reflection-models","children":[]}]}],"git":{"createdTime":1727659735000,"updatedTime":1731124512000,"contributors":[{"name":"刘大维","email":"davidliu@liudaweideMacBook-Pro-3.local","commits":1}]},"readingTime":{"minutes":0.34,"words":103},"filePathRelative":"education/ms/5600/3D-Rendering.md","localizedDate":"September 30, 2024","excerpt":"\\n<h2>Perspective-correct interpolation</h2>\\n<p>PLERP</p>\\n<h2>Texture</h2>\\n<p>Problem: The texture’s pixels must be mapped to points on the object’s surface before the texture can be sampled</p>\\n<p>Interpolating triangle UVs</p>\\n<h3>Texture space</h3>\\n<p>RGB 0 -&gt; XYZ -1</p>\\n<p>RGB 0.5 -&gt; XYZ 0</p>","autoDesc":true}`);export{c as comp,h as data};
