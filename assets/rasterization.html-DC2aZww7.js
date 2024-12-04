import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,d as r,o as i}from"./app-D4ZvIHfO.js";const n={};function o(s,e){return i(),a("div",null,e[0]||(e[0]=[r('<h1 id="rasterization" tabindex="-1"><a class="header-anchor" href="#rasterization"><span>Rasterization</span></a></h1><p>API</p><p><strong>intersection</strong></p><p><strong>Z-buffering</strong></p><p><strong>Fragments</strong></p><h2 id="rasterization-1" tabindex="-1"><a class="header-anchor" href="#rasterization-1"><span>Rasterization</span></a></h2><p>The process of converting vector graphics into dot matrix graphics</p><p>● Raster derived from Latin rastrum, meaning “a rake”</p><p>● Not to be confused with raster scanning</p><ul><li><p>The process CRT displays use to render the image row-by-row</p></li><li><p>Nearly all real-time graphics are rasterized</p></li><li><p>Modern 3D rendering APIs</p><ul><li>OpenGL (Khronos Group)</li><li>DirectX (Microsoft)</li><li>Metal (Apple iOS)</li><li>Vulkan (Khronos Group, very new, as of February 2016)</li></ul></li></ul><h3 id="triangle-rasterization" tabindex="-1"><a class="header-anchor" href="#triangle-rasterization"><span>Triangle rasterization</span></a></h3><ul><li>Want to determine which pixels of the screen overlap a triangle</li><li>Need to treat each pixel as a single point in space rather than a small area</li><li>Color each pixel with the color of the triangle it overlaps (bottom-left corner overlap below)</li></ul><h3 id="approach" tabindex="-1"><a class="header-anchor" href="#approach"><span>Approach</span></a></h3><h4 id="naive-approach" tabindex="-1"><a class="header-anchor" href="#naive-approach"><span>Naive approach</span></a></h4><p>iterate through <strong>each pixel</strong> in the image and test whether or not it falls within the bounds of each triangle</p><p>Problems:</p><ul><li><p>Unnecessarily looks at each and every pixel</p></li><li><p>Tests each pixel against each triangle</p></li></ul><h4 id="better-approach" tabindex="-1"><a class="header-anchor" href="#better-approach"><span>Better approach</span></a></h4><p>iterate through each triangle and determine which pixels it overlaps</p><p>Instead of performing point-in-triangle test, treat the image as a set of <strong>rows</strong>. Find where each row enters and exits the triangle</p><h3 id="optimization" tabindex="-1"><a class="header-anchor" href="#optimization"><span>Optimization</span></a></h3><p>Testing each triangle against each row of the image is inefficient</p><p>● Want to only test rows that are guaranteed to overlap the triangle</p><p>● What can we do?</p><h4 id="bounding-boxes" tabindex="-1"><a class="header-anchor" href="#bounding-boxes"><span>Bounding Boxes</span></a></h4><p>Compute the axis-aligned bounding box of each triangle</p><p>○ Find the minimum and maximum XYZ coordinates of an object</p><p>○ These are the lower-left and upper-right corners of your box</p><p>Only test a triangle against rows inside its bounding box</p><p>Bounding boxes are very commonly used in computer graphics</p><p>○ Speed up intersection testing primarily</p><h4 id="culling-geometry" tabindex="-1"><a class="header-anchor" href="#culling-geometry"><span>Culling geometry</span></a></h4><ul><li>We don’t want to waste time trying to render triangles (or pixels) we won’t ever see</li><li>Ignore triangles outside our viewport and clamp triangle’s bounding box to screen bounds</li></ul><hr><p>Easy checks:</p><p>○ Is bounding box’s left bound greater than the screen’s right bound?</p><p>○ Is bounding box’s bottom bound greater than the screen’s top bound?</p><p>○ Do the same checks for BB right to screen left, and BB top to screen bottom</p><h3 id="overlapping-triangles" tabindex="-1"><a class="header-anchor" href="#overlapping-triangles"><span>Overlapping triangles</span></a></h3><p>In almost every rasterized image, multiple triangles will overlap the same pixels</p><p>Which triangle’s color should be used for each pixel?</p><p>Ideally, the triangle that is “on top”</p><p>Simple solution: <strong>Painter’s algorithm</strong></p><h4 id="painter-s-algorithm" tabindex="-1"><a class="header-anchor" href="#painter-s-algorithm"><span>Painter’s algorithm</span></a></h4><p>Earliest proposed method for sorting geometry to be drawn on a 2D screen</p><p>● Sort the shapes by distance from viewport, where farthest are first</p><p>● Draw the shapes in order, painting over previously-drawn shapes as you iterate through the list</p><p>Problem: what if you have intersecting shapes? What if you have cyclical overlap?</p><p>Solution: need to sort on a per-pixel basis instead of a per-triangle basis</p><h4 id="z-buffering" tabindex="-1"><a class="header-anchor" href="#z-buffering"><span>Z-buffering</span></a></h4><p>When identifying pixels that overlap a triangle, store the Z-coordinate of the portion of the triangle that is overlapped</p><p>○ The Z-coordinate is stored inside the pixel as part of a data bundle known as a “fragment”</p><h3 id="fragments" tabindex="-1"><a class="header-anchor" href="#fragments"><span>Fragments</span></a></h3><p>Fragments store things like (but not limited to):</p><p>○ Z-coordinate (also called “depth”)</p><p>○ Color</p><p>○ Texture coordinate</p><p>○ Transparency (also called “alpha”)</p><p>○ Anything else you program them to store</p>',59)]))}const h=t(n,[["render",o],["__file","rasterization.html.vue"]]),c=JSON.parse(`{"path":"/education/ms/5600/rasterization.html","title":"Rasterization","lang":"en-US","frontmatter":{"description":"Rasterization API intersection Z-buffering Fragments Rasterization The process of converting vector graphics into dot matrix graphics ● Raster derived from Latin rastrum, meanin...","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/education/ms/5600/rasterization.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"Rasterization"}],["meta",{"property":"og:description","content":"Rasterization API intersection Z-buffering Fragments Rasterization The process of converting vector graphics into dot matrix graphics ● Raster derived from Latin rastrum, meanin..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-11-09T03:55:12.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-09T03:55:12.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Rasterization\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-09T03:55:12.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[{"level":2,"title":"Rasterization","slug":"rasterization-1","link":"#rasterization-1","children":[{"level":3,"title":"Triangle rasterization","slug":"triangle-rasterization","link":"#triangle-rasterization","children":[]},{"level":3,"title":"Approach","slug":"approach","link":"#approach","children":[]},{"level":3,"title":"Optimization","slug":"optimization","link":"#optimization","children":[]},{"level":3,"title":"Overlapping triangles","slug":"overlapping-triangles","link":"#overlapping-triangles","children":[]},{"level":3,"title":"Fragments","slug":"fragments","link":"#fragments","children":[]}]}],"git":{"createdTime":1727659735000,"updatedTime":1731124512000,"contributors":[{"name":"刘大维","email":"davidliu@liudaweideMacBook-Pro-3.local","commits":1}]},"readingTime":{"minutes":1.76,"words":529},"filePathRelative":"education/ms/5600/rasterization.md","localizedDate":"September 30, 2024","excerpt":"\\n<p>API</p>\\n<p><strong>intersection</strong></p>\\n<p><strong>Z-buffering</strong></p>\\n<p><strong>Fragments</strong></p>\\n<h2>Rasterization</h2>\\n<p>The process of converting vector graphics into dot matrix graphics</p>\\n<p>● Raster derived from Latin rastrum, meaning “a rake”</p>\\n<p>● Not to be confused with raster scanning</p>","autoDesc":true}`);export{h as comp,c as data};
