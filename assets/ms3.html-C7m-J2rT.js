import{_ as o}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as t,d as r,o as n}from"./app-PqS9YW_3.js";const i={};function a(s,e){return n(),t("div",null,e[0]||(e[0]=[r('<h1 id="milestone-3" tabindex="-1"><a class="header-anchor" href="#milestone-3"><span>Milestone 3</span></a></h1><blockquote><p>12.09</p></blockquote><p>If you earn more than 50 points, the additional points will be extra credit. This week, you should also focus on finalizing the features you worked on in weeks 1 and 2.</p><ul><li><p><strong>Post-process Camera Overlay (20 points):</strong> When the <code>Player</code> enters <code>WATER</code> or <code>LAVA</code> blocks, rather than displaying a simple blue or red screen</p></li><li><p>overlay, apply some sort of interesting fluid-like screen distortion and coloration instead. You should use noise functions to distort your player&#39;s view, and the distortion should animate as a function of time.</p><ul><li><p><strong>distortion</strong></p><p>20</p></li></ul></li><li><p><strong>Inventory and onscreen GUI (50+ pts):</strong> Allow the player to select which type of block they will place by creating an onscreen GUI that can be called up by pressing a particular key, such as <code>I</code>. You could also allow the player to collect blocks by breaking them, and only place blocks when they have a block in their inventory.</p><ul><li><p><strong>准星</strong>, <a href="https://upenn.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=52fbe2ce-2674-47cc-a2ec-b22c01576380" target="_blank" rel="noopener noreferrer">参考</a>, 13-16min</p><p>10-20</p></li><li></li></ul></li><li><p><strong>Additional Biomes (50 pts):</strong> Add additional block types such as <code>SNOW</code> or <code>SAND</code>, and distribute patches of these new block types over large areas of your world. For additional points, modify the structure of your terrain in these areas to reflect things like flat deserts or frigid mountains. The biomes should smoothly transition between one another near their borders. You might use two different noise functions to generate a map of moisture and temperature (or overall elevation) and use those to determine what biome your terrain currently lies in. For inspiration, you can always peruse the list of <a href="https://minecraft.gamepedia.com/Biome" target="_blank" rel="noopener noreferrer">biomes</a> featured in the official Minecraft game. Also take a look at this person&#39;s <a href="https://www.spigotmc.org/resources/danns-world-generator-oasis-desert-demo-1-14-x-1-15-x-uses-an-organic-tree-generator.74083/" target="_blank" rel="noopener noreferrer">custom biomes Minecraft mod</a> for visual inspiration.</p><p>Temperature, Moisture</p><ul><li>GRASS, high t, high m</li><li><strong>SAND</strong>, high t, low m</li><li>SNOW, low t, high m</li><li>ICE SPIR, low t, low m</li></ul></li></ul><h2 id="terrain" tabindex="-1"><a class="header-anchor" href="#terrain"><span>Terrain</span></a></h2><ul><li><strong>Rivers (50 pts):</strong> Using 2D L-systems, procedurally generate branching rivers that carve themselves out of the surface terrain. For more organic-looking river trails, consider having drawing rules along the lines of &quot;move forward along a small arc and carve that arc out of the terrain&quot; rather than plain &quot;move forward along a straight line&quot;. Below is a video with an example of an L-system river.</li><li><strong>Additional Biomes (50 pts):</strong> Add additional block types such as <code>SNOW</code> or <code>SAND</code>, and distribute patches of these new block types over large areas of your world. For additional points, modify the structure of your terrain in these areas to reflect things like flat deserts or frigid mountains. The biomes should smoothly transition between one another near their borders. You might use two different noise functions to generate a map of moisture and temperature (or overall elevation) and use those to determine what biome your terrain currently lies in. For inspiration, you can always peruse the list of <a href="https://minecraft.gamepedia.com/Biome" target="_blank" rel="noopener noreferrer">biomes</a> featured in the official Minecraft game. Also take a look at this person&#39;s <a href="https://www.spigotmc.org/resources/danns-world-generator-oasis-desert-demo-1-14-x-1-15-x-uses-an-organic-tree-generator.74083/" target="_blank" rel="noopener noreferrer">custom biomes Minecraft mod</a> for visual inspiration.</li></ul><hr><ol><li>Interpolate mountain &amp; grassland based on moisture</li><li>Interpolate desert and island based on moisture</li><li>Interpolate results of 1 and 2 based on temperature</li></ol><h2 id="ec" tabindex="-1"><a class="header-anchor" href="#ec"><span>EC</span></a></h2><h3 id="联机" tabindex="-1"><a class="header-anchor" href="#联机"><span>联机</span></a></h3><ul><li>本地：地图的主人是host，大家和他联系去交互数据</li><li>服务器：×</li></ul><p>同步：pos，camera</p><p>还得渲染动作了</p><p>如果做生物的话，每个动物的信息也需要同步了，动态的比较复杂，还涉及寻路</p><h3 id="ray-tracing" tabindex="-1"><a class="header-anchor" href="#ray-tracing"><span>Ray Tracing</span></a></h3><p>影子</p><p>post processing Camera Overlay</p><ul><li>南瓜头</li><li>水下</li><li>中毒</li><li>致盲</li></ul><hr><ul><li><strong>Post-process Camera Overlay (20 points):</strong> When the <code>Player</code> enters <code>WATER</code> or <code>LAVA</code> blocks, rather than displaying a simple blue or red screen overlay, apply some sort of interesting fluid-like screen distortion and coloration instead. You should use noise functions to distort your player&#39;s view, and the distortion should animate as a function of time.</li><li><strong>Third-Person Mode (20 points):</strong> Allow the player to switch to a third-person camera view by pressing a key on the keyboard. In this view, the <code>Player</code> must be visible to the user as a 3D <em>animated</em> model. The model&#39;s animations must include leg movement when walking and arm movement when adding or removing a block. The <code>Camera</code> must still face where the <code>Player</code> is facing, but should be located somewhere behind the <code>Player</code>.</li></ul>',20)]))}const c=o(i,[["render",a],["__file","ms3.html.vue"]]),p=JSON.parse(`{"path":"/education/ms/5600/final/ms3.html","title":"Milestone 3","lang":"en-US","frontmatter":{"description":"Milestone 3 12.09 If you earn more than 50 points, the additional points will be extra credit. This week, you should also focus on finalizing the features you worked on in weeks...","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/education/ms/5600/final/ms3.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"Milestone 3"}],["meta",{"property":"og:description","content":"Milestone 3 12.09 If you earn more than 50 points, the additional points will be extra credit. This week, you should also focus on finalizing the features you worked on in weeks..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-12-16T21:12:29.000Z"}],["meta",{"property":"article:modified_time","content":"2024-12-16T21:12:29.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Milestone 3\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-12-16T21:12:29.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[{"level":2,"title":"Terrain","slug":"terrain","link":"#terrain","children":[]},{"level":2,"title":"EC","slug":"ec","link":"#ec","children":[{"level":3,"title":"联机","slug":"联机","link":"#联机","children":[]},{"level":3,"title":"Ray Tracing","slug":"ray-tracing","link":"#ray-tracing","children":[]}]}],"git":{"createdTime":1732245692000,"updatedTime":1734383549000,"contributors":[{"name":"David Liu","email":"liudawei@seas.upenn.edu","commits":1},{"name":"刘大维","email":"davidliu@liudaweideMacBook-Pro-3.local","commits":1}]},"readingTime":{"minutes":2.63,"words":790},"filePathRelative":"education/ms/5600/final/ms3.md","localizedDate":"November 22, 2024","excerpt":"\\n<blockquote>\\n<p>12.09</p>\\n</blockquote>\\n<p>If you earn more than 50 points, the additional points will be extra credit. This week, you should also focus on finalizing the features you worked on in weeks 1 and 2.</p>\\n<ul>\\n<li>\\n<p><strong>Post-process Camera Overlay (20 points):</strong> When the <code>Player</code> enters <code>WATER</code> or <code>LAVA</code> blocks, rather than displaying a simple blue or red screen</p>\\n</li>\\n<li>\\n<p>overlay, apply some sort of interesting fluid-like screen distortion and coloration instead. You should use noise functions to distort your player's view, and the distortion should animate as a function of time.</p>\\n<ul>\\n<li>\\n<p><strong>distortion</strong></p>\\n<p>20</p>\\n</li>\\n</ul>\\n</li>\\n<li>\\n<p><strong>Inventory and onscreen GUI (50+ pts):</strong> Allow the player to select which type of block they will place by creating an onscreen GUI that can be called up by pressing a particular key, such as <code>I</code>. You could also allow the player to collect blocks by breaking them, and only place blocks when they have a block in their inventory.</p>\\n<ul>\\n<li>\\n<p><strong>准星</strong>, <a href=\\"https://upenn.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=52fbe2ce-2674-47cc-a2ec-b22c01576380\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">参考</a>, 13-16min</p>\\n<p>10-20</p>\\n</li>\\n<li></li>\\n</ul>\\n</li>\\n<li>\\n<p><strong>Additional Biomes (50 pts):</strong> Add additional block types such as <code>SNOW</code> or <code>SAND</code>, and distribute patches of these new block types over large areas of your world. For additional points, modify the structure of your terrain in these areas to reflect things like flat deserts or frigid mountains. The biomes should smoothly transition between one another near their borders. You might use two different noise functions to generate a map of moisture and temperature (or overall elevation) and use those to determine what biome your terrain currently lies in. For inspiration, you can always peruse the list of <a href=\\"https://minecraft.gamepedia.com/Biome\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">biomes</a> featured in the official Minecraft game. Also take a look at this person's <a href=\\"https://www.spigotmc.org/resources/danns-world-generator-oasis-desert-demo-1-14-x-1-15-x-uses-an-organic-tree-generator.74083/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">custom biomes Minecraft mod</a> for visual inspiration.</p>\\n<p>Temperature, Moisture</p>\\n<ul>\\n<li>GRASS, high t, high m</li>\\n<li><strong>SAND</strong>, high t, low m</li>\\n<li>SNOW, low t, high m</li>\\n<li>ICE SPIR, low t, low m</li>\\n</ul>\\n</li>\\n</ul>","autoDesc":true}`);export{c as comp,p as data};
