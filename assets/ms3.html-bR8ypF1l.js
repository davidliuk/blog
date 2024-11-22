import{_ as o}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as t,d as r,o as a}from"./app-C8HRrJwL.js";const i={};function n(s,e){return a(),t("div",null,e[0]||(e[0]=[r('<h1 id="milestone-3" tabindex="-1"><a class="header-anchor" href="#milestone-3"><span>Milestone 3</span></a></h1><blockquote><p>12.09</p></blockquote><p>If you earn more than 50 points, the additional points will be extra credit. This week, you should also focus on finalizing the features you worked on in weeks 1 and 2.</p><h2 id="terrain" tabindex="-1"><a class="header-anchor" href="#terrain"><span>Terrain</span></a></h2><ul><li><strong>Rivers (50 pts):</strong> Using 2D L-systems, procedurally generate branching rivers that carve themselves out of the surface terrain. For more organic-looking river trails, consider having drawing rules along the lines of &quot;move forward along a small arc and carve that arc out of the terrain&quot; rather than plain &quot;move forward along a straight line&quot;. Below is a video with an example of an L-system river.</li><li><strong>Additional Biomes (50 pts):</strong> Add additional block types such as <code>SNOW</code> or <code>SAND</code>, and distribute patches of these new block types over large areas of your world. For additional points, modify the structure of your terrain in these areas to reflect things like flat deserts or frigid mountains. The biomes should smoothly transition between one another near their borders. You might use two different noise functions to generate a map of moisture and temperature (or overall elevation) and use those to determine what biome your terrain currently lies in. For inspiration, you can always peruse the list of <a href="https://minecraft.gamepedia.com/Biome" target="_blank" rel="noopener noreferrer">biomes</a> featured in the official Minecraft game. Also take a look at this person&#39;s <a href="https://www.spigotmc.org/resources/danns-world-generator-oasis-desert-demo-1-14-x-1-15-x-uses-an-organic-tree-generator.74083/" target="_blank" rel="noopener noreferrer">custom biomes Minecraft mod</a> for visual inspiration.</li></ul><hr><ol><li>Interpolate mountain &amp; grassland based on moisture</li><li>Interpolate desert and island based on moisture</li><li>Interpolate results of 1 and 2 based on temperature</li></ol><h2 id="ec" tabindex="-1"><a class="header-anchor" href="#ec"><span>EC</span></a></h2><h3 id="联机" tabindex="-1"><a class="header-anchor" href="#联机"><span>联机</span></a></h3><ul><li>本地：地图的主人是host，大家和他联系去交互数据</li><li>服务器：×</li></ul><p>同步：pos，camera</p><p>还得渲染动作了</p><p>如果做生物的话，每个动物的信息也需要同步了，动态的比较复杂，还涉及寻路</p><h3 id="ray-tracing" tabindex="-1"><a class="header-anchor" href="#ray-tracing"><span>Ray Tracing</span></a></h3><p>影子</p><p>post processing Camera Overlay</p><ul><li>南瓜头</li><li>水下</li><li>中毒</li><li>致盲</li></ul><hr><ul><li><strong>Post-process Camera Overlay (20 points):</strong> When the <code>Player</code> enters <code>WATER</code> or <code>LAVA</code> blocks, rather than displaying a simple blue or red screen overlay, apply some sort of interesting fluid-like screen distortion and coloration instead. You should use noise functions to distort your player&#39;s view, and the distortion should animate as a function of time.</li><li><strong>Third-Person Mode (20 points):</strong> Allow the player to switch to a third-person camera view by pressing a key on the keyboard. In this view, the <code>Player</code> must be visible to the user as a 3D <em>animated</em> model. The model&#39;s animations must include leg movement when walking and arm movement when adding or removing a block. The <code>Camera</code> must still face where the <code>Player</code> is facing, but should be located somewhere behind the <code>Player</code>.</li></ul>',19)]))}const c=o(i,[["render",n],["__file","ms3.html.vue"]]),h=JSON.parse(`{"path":"/education/ms/5600/final/ms3.html","title":"Milestone 3","lang":"en-US","frontmatter":{"description":"Milestone 3 12.09 If you earn more than 50 points, the additional points will be extra credit. This week, you should also focus on finalizing the features you worked on in weeks...","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/education/ms/5600/final/ms3.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"Milestone 3"}],["meta",{"property":"og:description","content":"Milestone 3 12.09 If you earn more than 50 points, the additional points will be extra credit. This week, you should also focus on finalizing the features you worked on in weeks..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-11-22T03:21:32.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-22T03:21:32.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Milestone 3\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-22T03:21:32.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[{"level":2,"title":"Terrain","slug":"terrain","link":"#terrain","children":[]},{"level":2,"title":"EC","slug":"ec","link":"#ec","children":[{"level":3,"title":"联机","slug":"联机","link":"#联机","children":[]},{"level":3,"title":"Ray Tracing","slug":"ray-tracing","link":"#ray-tracing","children":[]}]}],"git":{"createdTime":1732245692000,"updatedTime":1732245692000,"contributors":[{"name":"David Liu","email":"liudawei@seas.upenn.edu","commits":1}]},"readingTime":{"minutes":1.64,"words":491},"filePathRelative":"education/ms/5600/final/ms3.md","localizedDate":"November 22, 2024","excerpt":"\\n<blockquote>\\n<p>12.09</p>\\n</blockquote>\\n<p>If you earn more than 50 points, the additional points will be extra credit. This week, you should also focus on finalizing the features you worked on in weeks 1 and 2.</p>\\n<h2>Terrain</h2>\\n<ul>\\n<li><strong>Rivers (50 pts):</strong> Using 2D L-systems, procedurally generate branching rivers that carve themselves out of the surface terrain. For more organic-looking river trails, consider having drawing rules along the lines of \\"move forward along a small arc and carve that arc out of the terrain\\" rather than plain \\"move forward along a straight line\\". Below is a video with an example of an L-system river.</li>\\n<li><strong>Additional Biomes (50 pts):</strong> Add additional block types such as <code>SNOW</code> or <code>SAND</code>, and distribute patches of these new block types over large areas of your world. For additional points, modify the structure of your terrain in these areas to reflect things like flat deserts or frigid mountains. The biomes should smoothly transition between one another near their borders. You might use two different noise functions to generate a map of moisture and temperature (or overall elevation) and use those to determine what biome your terrain currently lies in. For inspiration, you can always peruse the list of <a href=\\"https://minecraft.gamepedia.com/Biome\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">biomes</a> featured in the official Minecraft game. Also take a look at this person's <a href=\\"https://www.spigotmc.org/resources/danns-world-generator-oasis-desert-demo-1-14-x-1-15-x-uses-an-organic-tree-generator.74083/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">custom biomes Minecraft mod</a> for visual inspiration.</li>\\n</ul>","autoDesc":true}`);export{c as comp,h as data};
