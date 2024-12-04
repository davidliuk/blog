import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as o,d as a,o as n}from"./app-CybQbXIt.js";const i={};function s(r,e){return n(),o("div",null,e[0]||(e[0]=[a('<h1 id="milestone-2" tabindex="-1"><a class="header-anchor" href="#milestone-2"><span>Milestone 2</span></a></h1><blockquote><p>11.20</p></blockquote><h2 id="cave-systems" tabindex="-1"><a class="header-anchor" href="#cave-systems"><span>Cave Systems</span></a></h2><p>You will implement two main features:</p><ul><li>In addition to the 2D height fields used to generate surface terrain, you will add the computation of 3D noise to generate cave systems beneath the terrain&#39;s surface.</li><li>You will introduce a post-process rendering pipeline into your game engine to render an overlay when the player&#39;s head is beneath water and lava.</li></ul><p>Extend the Perlin noise algorithm discussed in the Noise Functions slides to work in three dimensions; this will require sampling eight surflets rather than four (one for each corner of a 3D grid cell) and using trilinear interpolation on their values. Sample this 3D Perlin noise at every block whose Y coordinate is in the range [1, 128]. Whenever the value of this Perlin noise is negative, the block at the sampled coordinates should be set to <code>EMPTY</code>, unless its Y value is less than 25, in which case it should be set to <code>LAVA</code>. Finally, all blocks at Y = 0 should be made <code>BEDROCK</code>, and made to be unbreakable when left-clicked. The end result will be a system of somewhat-interconnected caves with pools of lava at the lowest depths.</p><p>If you would like cave openings to be more frequent on the surface of your terrain, then increase the ceiling of Y values at which you sample your Perlin noise to allow carving out the surface height field as well.</p><p><strong>Note:</strong> If you are testing your cave generation without the multithreading portion of milestone 2 working on your local implementation of the project, it is useful to shrink the range of Y coordinates that can contain cave structures (e.g. only Y = [64, 128] or even smaller). Sampling a noise function at every XYZ below Y = 128 can take a long time and will make loading your initial scene very slow on a single-threaded program.</p><p>During the player&#39;s collision detection function, <code>WATER</code> and <code>LAVA</code> blocks should <strong>not</strong> cause the player to stop moving. Instead, the player should move at 2/3 its normal speed (both in terms of gravity and lateral movement) and should be able to swim upwards at a constant rate by holding <code>Spacebar</code>. Additionally, when the player&#39;s <code>Camera</code> is inside a <code>WATER</code> block, the screen should be tinged blue, while a <code>LAVA</code> block should cause a red tinge. You should create these overlay effects by setting up a post-process pipeline like the one in hw04, and render your 3D scene to a frame buffer, then render the frame buffer&#39;s texture to a screen-spanning quadrangle with a new shader program. We have created a <code>FrameBuffer</code> class to assist you in this process, which you can download <a href="https://www.cis.upenn.edu/~cis4600/24fa/hw/hwMM02/framebuffer.zip" target="_blank" rel="noopener noreferrer">here</a>. <strong>Note that because your team will be using alpha blending this milestone, your post-process fragment shader should output a <code>vec4</code> for its color, otherwise you will have uninitialized transparency which will cause rendering errors.</strong></p><ol><li>3D Perlin Cave</li><li>fluid collision detection</li><li>fluid overlay</li></ol><hr><p>exit code 3: uncaught exception</p><h2 id="texture" tabindex="-1"><a class="header-anchor" href="#texture"><span>Texture</span></a></h2><p>Refer to HW5</p><p>glTexture</p>',15)]))}const c=t(i,[["render",s],["__file","ms2.html.vue"]]),h=JSON.parse(`{"path":"/education/ms/5600/final/ms2.html","title":"Milestone 2","lang":"en-US","frontmatter":{"description":"Milestone 2 11.20 Cave Systems You will implement two main features: In addition to the 2D height fields used to generate surface terrain, you will add the computation of 3D noi...","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/education/ms/5600/final/ms2.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"Milestone 2"}],["meta",{"property":"og:description","content":"Milestone 2 11.20 Cave Systems You will implement two main features: In addition to the 2D height fields used to generate surface terrain, you will add the computation of 3D noi..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-11-22T03:21:32.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-22T03:21:32.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Milestone 2\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-22T03:21:32.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[{"level":2,"title":"Cave Systems","slug":"cave-systems","link":"#cave-systems","children":[]},{"level":2,"title":"Texture","slug":"texture","link":"#texture","children":[]}],"git":{"createdTime":1732245692000,"updatedTime":1732245692000,"contributors":[{"name":"David Liu","email":"liudawei@seas.upenn.edu","commits":1}]},"readingTime":{"minutes":1.72,"words":515},"filePathRelative":"education/ms/5600/final/ms2.md","localizedDate":"November 22, 2024","excerpt":"\\n<blockquote>\\n<p>11.20</p>\\n</blockquote>\\n<h2>Cave Systems</h2>\\n<p>You will implement two main features:</p>\\n<ul>\\n<li>In addition to the 2D height fields used to generate surface terrain, you will add the computation of 3D noise to generate cave systems beneath the terrain's surface.</li>\\n<li>You will introduce a post-process rendering pipeline into your game engine to render an overlay when the player's head is beneath water and lava.</li>\\n</ul>","autoDesc":true}`);export{c as comp,h as data};
