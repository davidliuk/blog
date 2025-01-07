import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as o,d as n,o as i}from"./app-ChU1gMRF.js";const s={};function r(a,e){return i(),o("div",null,e[0]||(e[0]=[n('<h1 id="cq5" tabindex="-1"><a class="header-anchor" href="#cq5"><span>CQ5</span></a></h1><p>Before you begin the programming portion of this homework assignment, read and answer the following conceptual questions. Your answers should be submitted on Canvas.</p><ul><li>(5 pts) Given the method by which we divide our 2D space into a 2D grid when computing FBM, Worley noise, and Perlin noise, how might we extend this process into three dimensions? In the case of 3D Worley noise, how many cells would we have to examine to find the closest cell point?</li><li>(5 pts) In at most three sentences, describe the general steps one would need to take in order to render a 3D model with a screen-space post-process effect applied to it using OpenGL.</li></ul><hr><ol><li><p><strong>Extending the 2D grid to 3D in noise generation</strong>:</p><p>To extend the process into three dimensions for FBM, Worley noise, and Perlin noise, we divide the 3D space into a 3D grid, creating cubic cells rather than square ones. Each point in space belongs to a specific cell, with additional surrounding cells that influence the noise computation based on their distance. In the case of 3D Worley noise, you would typically need to check the closest points in up to 27 neighboring cells (3x3x3 grid) to find the nearest feature point.</p></li><li><p><strong>Rendering a 3D model with a screen-space post-process effect in OpenGL</strong>:</p><p>First, render the 3D model to a framebuffer texture instead of directly to the screen. Next, apply the desired post-process effect (such as bloom, blur, or depth of field) by sampling and manipulating the texture in a fragment shader. Finally, render the processed texture onto a screen-aligned quad to display the final output.</p></li><li><p><strong>Extending 2D Grid Division for FBM, Worley Noise, and Perlin Noise into 3D</strong>:</p><p>To extend the process into three dimensions, instead of dividing a 2D space into a grid of squares, we divide the 3D space into a grid of cubes. For 3D Worley noise, each point lies within a 3D grid cell, and to find the closest cell point, we typically examine the 27 surrounding cells (the current cell plus 26 neighboring cells), as the closest point could lie in any of these cells.</p></li><li><p><strong>Steps to Render a 3D Model with Screen-Space Post-Processing in OpenGL</strong>:</p><ul><li>First, render the 3D model to a texture (Framebuffer Object, FBO) instead of directly to the screen.</li><li>Then, apply the desired post-process effect (e.g., blur, edge detection) by using a screen-space shader that operates on the texture.</li><li>Finally, render a screen-aligned quad with the processed texture to display the result on the screen.</li></ul></li></ol>',5)]))}const c=t(s,[["render",r],["__file","5.html.vue"]]),p=JSON.parse(`{"path":"/education/ms/5600/cq/5.html","title":"CQ5","lang":"en-US","frontmatter":{"description":"CQ5 Before you begin the programming portion of this homework assignment, read and answer the following conceptual questions. Your answers should be submitted on Canvas. (5 pts)...","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/education/ms/5600/cq/5.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"CQ5"}],["meta",{"property":"og:description","content":"CQ5 Before you begin the programming portion of this homework assignment, read and answer the following conceptual questions. Your answers should be submitted on Canvas. (5 pts)..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-11-09T05:50:09.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-09T05:50:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"CQ5\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-09T05:50:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[],"git":{"createdTime":1728657843000,"updatedTime":1731131409000,"contributors":[{"name":"David Liu","email":"liudawei@seas.upenn.edu","commits":1},{"name":"刘大维","email":"davidliu@liudaweideMacBook-Pro-3.local","commits":1}]},"readingTime":{"minutes":1.44,"words":431},"filePathRelative":"education/ms/5600/cq/5.md","localizedDate":"October 11, 2024","excerpt":"\\n<p>Before you begin the programming portion of this homework assignment, read and answer the following conceptual questions. Your answers should be submitted on Canvas.</p>\\n<ul>\\n<li>(5 pts) Given the method by which we divide our 2D space into a 2D grid when computing FBM, Worley noise, and Perlin noise, how might we extend this process into three dimensions? In the case of 3D Worley noise, how many cells would we have to examine to find the closest cell point?</li>\\n<li>(5 pts) In at most three sentences, describe the general steps one would need to take in order to render a 3D model with a screen-space post-process effect applied to it using OpenGL.</li>\\n</ul>","autoDesc":true}`);export{c as comp,p as data};
