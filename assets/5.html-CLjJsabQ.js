import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as t,d as i,o as a}from"./app-DIqbhby7.js";const o={};function s(r,e){return a(),t("div",null,e[0]||(e[0]=[i(`<h1 id="cq5" tabindex="-1"><a class="header-anchor" href="#cq5"><span>CQ5</span></a></h1><h2 id="q1" tabindex="-1"><a class="header-anchor" href="#q1"><span>Q1</span></a></h2><p>In the following video, we see the player shooting at the character&#39;s knee and then the character begins to limp. The knee joint in effect seems to have stopped being considered by the solver after being shot:</p><p>In not more than a single sentence, describe how one might be able to achieve this limping effect for their characters in a game. State both the choice of solver (FK or IK) and the implementation required for simulating limping. (Hint: an iterative error-minimizing algorithm)</p><p>To achieve a limping effect, use an IK solver with an iterative error-minimizing algorithm like CCD to disable or restrict rotation on the damaged knee joint, forcing the solver to adjust the rest of the leg joints accordingly to simulate limping.</p><h2 id="q2" tabindex="-1"><a class="header-anchor" href="#q2"><span>Q2</span></a></h2><p>In Pokemon Go, if you tap on a pokemon you have caught, it plays a small animation for that pokemon, e.g.:</p><p>If you tap it multiple times, specially before the entire animation for that pokemon could finish playing, you get something like this:</p><p>Your favourite TA Joanna wanted to replicate this smooth replaying feature of the animation for her own use case, and wrote the following pseudo code:</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>if (anim.isPlaying() ) {</span></span>
<span class="line"><span>   anim.stop();</span></span>
<span class="line"><span>   anim.reset();</span></span>
<span class="line"><span>   anim.play();</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>else {</span></span>
<span class="line"><span>   anim.play();</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Now answer the following questions in <strong>not more than a single sentence</strong>:</p><ol><li><p>Why do you think Joanna&#39;s pseudo-code will not work?</p></li><li><p>What instead should she do that would avoid the problem you mentioned in the previous answer and get the smooth blended effect of the repeating animation as seen in the video?</p></li><li><p>Joanna&#39;s code won&#39;t work because stopping and resetting the animation creates abrupt jumps.</p></li><li><p>She should transition the animation by blending from the current frame to the beginning using an animation blending function.</p></li></ol>`,12)]))}const p=n(o,[["render",s],["__file","5.html.vue"]]),c=JSON.parse(`{"path":"/education/ms/5620/cq/5.html","title":"CQ5","lang":"en-US","frontmatter":{"description":"CQ5 Q1 In the following video, we see the player shooting at the character's knee and then the character begins to limp. The knee joint in effect seems to have stopped being con...","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/education/ms/5620/cq/5.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"CQ5"}],["meta",{"property":"og:description","content":"CQ5 Q1 In the following video, we see the player shooting at the character's knee and then the character begins to limp. The knee joint in effect seems to have stopped being con..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-11-22T03:21:32.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-22T03:21:32.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"CQ5\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-22T03:21:32.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[{"level":2,"title":"Q1","slug":"q1","link":"#q1","children":[]},{"level":2,"title":"Q2","slug":"q2","link":"#q2","children":[]}],"git":{"createdTime":1731131409000,"updatedTime":1732245692000,"contributors":[{"name":"David Liu","email":"liudawei@seas.upenn.edu","commits":2}]},"readingTime":{"minutes":0.99,"words":296},"filePathRelative":"education/ms/5620/cq/5.md","localizedDate":"November 9, 2024","excerpt":"\\n<h2>Q1</h2>\\n<p>In the following video, we see the player shooting at the character's knee and then the character begins to limp. The knee joint in effect seems to have stopped being considered by the solver after being shot:</p>\\n<p>In not more than a single sentence, describe how one might be able to achieve this limping effect for their characters in a game. State both the choice of solver (FK or IK) and the implementation required for simulating limping. (Hint: an iterative error-minimizing algorithm)</p>","autoDesc":true}`);export{p as comp,c as data};
