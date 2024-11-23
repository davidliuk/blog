import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as i,d as o,o as a}from"./app-Cv-jMnVl.js";const s={};function n(r,e){return a(),i("div",null,e[0]||(e[0]=[o(`<h1 id="hw4" tabindex="-1"><a class="header-anchor" href="#hw4"><span>HW4</span></a></h1><h2 id="part-0" tabindex="-1"><a class="header-anchor" href="#part-0"><span>Part 0</span></a></h2><p>Code Framework (10 points)</p><blockquote><p>Please submit your Part 0 answers in the form of an MSWord or pdf doc to the HW4 Assignment folder in the CIS4620/5620 Canvas site.</p></blockquote><p>After downloading the assignment code framework from Github, it is recommended that you look through the FK/IK project codebase to better understand the object-oriented software design and the program execution model. In order to keep you honest, please answer the questions below:</p><h3 id="_1-5-points" tabindex="-1"><a class="header-anchor" href="#_1-5-points"><span>1. (5 points):</span></a></h3><p>What is the data hierarchy (not the class hierarchy) of AJoint, ASkeleton, AActor, ATransform, BVHController, IKController? Please write it using the following format.</p><p>For example:</p><ul><li>ClassA <ul><li>ClassB <ul><li>ClassC</li></ul></li><li>ClassD <ul><li>ClassE</li><li>ClassF</li></ul></li></ul></li></ul><p>In the example above, Class A stores data with the type of Class B and ClassD; ClassB stores data with type ClassC, etc.</p><hr><ul><li>AActor <ul><li>ASkeleton <ul><li>AJoint <ul><li>ATransform</li></ul></li></ul></li><li>BVHController</li><li>IKController</li></ul></li></ul><p>Besides, IKController stores AIKchain which also stores AJoint, and AActor also stores AJoint for the root joint.</p><h3 id="_2-5-points" tabindex="-1"><a class="header-anchor" href="#_2-5-points"><span>2. (5 points)</span></a></h3><p>How many quaternion splines and vec3 splines are used for the Beta character animation? Which function is responsible for initializing these splines? Hint: Set break points in the debugger and step through the code to find the answer.</p><hr><p>For <em>quaternion splines</em>: <strong>66</strong>,</p><p>which is the number joint in skeleton</p><p>For <em>vec3 splines</em>: <strong>1</strong>,</p><p>only one spline for the root</p><hr><p><code>loadMotion</code> is responsible for initializing these splines.</p><div class="language-c++ line-numbers-mode" data-highlighter="shiki" data-ext="c++" data-title="c++" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">bool</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;"> BVHController</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">::</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">loadMotion</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(std::</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">ifstream</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">&amp;</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;"> inFile</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">void</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;"> BVHController</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">::</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">loadFrame</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(std::</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">ifstream</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">&amp;</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;"> inFile</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>Firstly, <code>loadMotion</code> initialize the quaternion splines for each joint in skeleton and the vec3 spline for root. Then, <code>loadMotion</code> call <code>loadFrame</code> for each frame. <code>loadMotion</code> add key for each quaternion splines for each joint and vec3 splines for the root at this frame.</p><h2 id="part-3" tabindex="-1"><a class="header-anchor" href="#part-3"><span>Part 3</span></a></h2><p>Unity Plugin (50 points)</p><h3 id="_1-guide-joint-25" tabindex="-1"><a class="header-anchor" href="#_1-guide-joint-25"><span>1. Guide Joint. 25</span></a></h3><p>After each walk cycle, the character will go back to the origin. To solve this problem, we add a guide joint in the AActor class. It is a virtual joint which you can consider as the parent joint of the root joint (the Hips). In other words, the transform of the character’s root joint will be with respect to the guide joint’s space instead of the world space. Before each walking cycle, you need to update the position of the guide joint to where the character is. The process is:</p><ol><li>Set the global position of the guide joint to the global position of the root joint</li><li>Walk Cycle 1</li><li>Set the global position of the guide joint to the global position of the root joint</li><li>Walk Cycle 2</li><li>……</li></ol><p>Implement <code>AActor::updateGuideJoint</code>. You need to update the orientation of the guide joint as well so that the character can face towards the target position at the beginning of each walk cycle.</p><h3 id="_2-foot-ik-25" tabindex="-1"><a class="header-anchor" href="#_2-foot-ik-25"><span>2. Foot IK. 25</span></a></h3><p>In each frame, we will use ray casting in Unity to get the height (y value) and the normal of the terrain at the position of the left foot and the right foot of the beta character. Implement <code>AActor::solveFootIK</code> to update the character with Limb-based IK and update the orientation of the feet based on the surface normal and the forward direction of the foot so that the character can always stand on the terrain. Note that the normal and the height given are in the world space. Note: given the terrain height you need to first update the transform of the root\\hips joint before applying the foot IK modifications.</p>`,32)]))}const d=t(s,[["render",n],["__file","4.html.vue"]]),p=JSON.parse(`{"path":"/education/ms/5620/hw/4.html","title":"HW4","lang":"en-US","frontmatter":{"description":"HW4 Part 0 Code Framework (10 points) Please submit your Part 0 answers in the form of an MSWord or pdf doc to the HW4 Assignment folder in the CIS4620/5620 Canvas site. After d...","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/education/ms/5620/hw/4.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"HW4"}],["meta",{"property":"og:description","content":"HW4 Part 0 Code Framework (10 points) Please submit your Part 0 answers in the form of an MSWord or pdf doc to the HW4 Assignment folder in the CIS4620/5620 Canvas site. After d..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-11-22T03:21:32.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-22T03:21:32.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"HW4\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-22T03:21:32.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[{"level":2,"title":"Part 0","slug":"part-0","link":"#part-0","children":[{"level":3,"title":"1. (5 points):","slug":"_1-5-points","link":"#_1-5-points","children":[]},{"level":3,"title":"2. (5 points)","slug":"_2-5-points","link":"#_2-5-points","children":[]}]},{"level":2,"title":"Part 3","slug":"part-3","link":"#part-3","children":[{"level":3,"title":"1. Guide Joint. 25","slug":"_1-guide-joint-25","link":"#_1-guide-joint-25","children":[]},{"level":3,"title":"2. Foot IK. 25","slug":"_2-foot-ik-25","link":"#_2-foot-ik-25","children":[]}]}],"git":{"createdTime":1731131409000,"updatedTime":1732245692000,"contributors":[{"name":"David Liu","email":"liudawei@seas.upenn.edu","commits":2}]},"readingTime":{"minutes":1.92,"words":576},"filePathRelative":"education/ms/5620/hw/4.md","localizedDate":"November 9, 2024","excerpt":"\\n<h2>Part 0</h2>\\n<p>Code Framework (10 points)</p>\\n<blockquote>\\n<p>Please submit your Part 0 answers in the form of an MSWord or pdf doc to the HW4 Assignment folder in the CIS4620/5620 Canvas site.</p>\\n</blockquote>\\n<p>After downloading the assignment code framework from Github, it is recommended that you look through the FK/IK project codebase to better understand the object-oriented software design and the program execution model. In order to keep you honest, please answer the questions below:</p>","autoDesc":true}`);export{d as comp,p as data};
