import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,d as a,o as n}from"./app-CrF8c6p-.js";const t={};function p(r,e){return n(),s("div",null,e[0]||(e[0]=[a(`<h1 id="tensor" tabindex="-1"><a class="header-anchor" href="#tensor"><span>Tensor</span></a></h1><p>0: scalar</p><p>1: vector</p><p>2: matrix</p><p>3+: tensor</p><p>matrix, tensor 变量一般大写命名</p><hr><p>rand</p><p>zeros</p><p>ones</p><p>arange, 左闭右开</p><hr><p>ndim</p><p>dtype, 默认是float32</p><p>size</p><p>Zeros_like</p><p>tensor datatype is one of 3 big errors with pytorch &amp; deep learning</p><ol><li>Tensors not right datatype, <code>tensor.dtype</code></li><li>Tensors not right shape, <code>tensor.shape</code></li><li>Tensors not on right device, <code>tensor.device</code><ol><li>cpu</li><li>cuda</li><li>tpu</li></ol></li></ol><p><code>tensor.type(torch.int64)</code>强制类型转换</p><hr><h3 id="operation" tabindex="-1"><a class="header-anchor" href="#operation"><span>Operation</span></a></h3><ul><li><p>Addition</p><p><code>+</code>, <code>touch.add()</code></p></li><li><p>Sub</p><p><code>-, </code>touch.sub()\`</p></li><li><p>Multiplication (element wise) 数乘</p><p><code>*</code></p></li><li><p>Division</p><p><code>\\</code></p></li><li><p>Matrix Multiplication 点乘/矩阵乘法</p><p><code>@</code>, <code>torch.matmul()</code>, <code>torch.mm()</code></p><p>这个比for快很多<code>%%time</code></p></li><li><p>Transpose 转置</p><p><code>tensor.T</code></p></li></ul><p>Matrix Multiplication的条件</p><ol><li><strong>inner dimension</strong> must match</li><li>resulting matrix has the shape of the <strong>outer dimension</strong></li></ol><p>cat</p><p>chunk</p><h3 id="aggregation" tabindex="-1"><a class="header-anchor" href="#aggregation"><span>Aggregation</span></a></h3><p>min, max, mean, sum, etc.</p><ul><li><p>min,</p><p><code>x.min()</code>, <code>torch.min(x)</code></p></li><li><p>max,</p><p><code>x.max()</code>, <code>torch.max(x)</code></p></li><li><p>mean,</p><p><code>x.mean()</code>, <code>torch.mean(x)</code></p></li><li><p>sum</p><p><code>x.sum()</code>, <code>torch.sum(x)</code></p></li><li><p>argmin, 找到tensor中min的坐标</p><p><code>x.argmin()</code></p></li><li><p>argmax, 找到tensor中max的坐标</p><p><code>x.argmax()</code></p></li></ul><hr><h3 id="shape" tabindex="-1"><a class="header-anchor" href="#shape"><span>Shape</span></a></h3><p>reshape</p><p>view</p><p>stack</p><p>squeeze</p><p>unsqueeze</p><p>Permute</p><h3 id="indexing" tabindex="-1"><a class="header-anchor" href="#indexing"><span>Indexing</span></a></h3><p>xxx</p><h3 id="numpy" tabindex="-1"><a class="header-anchor" href="#numpy"><span>Numpy</span></a></h3><p><code>torch.from_numpy()</code></p><p><code>x.numpy()</code></p><h3 id="reproducibility" tabindex="-1"><a class="header-anchor" href="#reproducibility"><span>Reproducibility</span></a></h3><p>Pseudo random</p><div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#D19A66;">RANDOM_SEED</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 42</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">Torch.</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF;">manual_seed</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66;">RANDOM_SEED</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">touch.</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF;">rand</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">3</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">4</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="gpu" tabindex="-1"><a class="header-anchor" href="#gpu"><span>GPU</span></a></h3><ol><li><strong>colab</strong>, easiest</li><li>Buy GPU</li><li>Cloud Computing</li></ol><div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">torch.cuda.</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF;">is_available</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">()</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">tensor.</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF;">to</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(device)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">tensor.</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF;">cpu</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">().</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF;">numpy</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">()</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,48)]))}const d=i(t,[["render",p],["__file","tensor.html.vue"]]),h=JSON.parse(`{"path":"/ai/pytorch/tensor.html","title":"Tensor","lang":"en-US","frontmatter":{"description":"Tensor 0: scalar 1: vector 2: matrix 3+: tensor matrix, tensor 变量一般大写命名 rand zeros ones arange, 左闭右开 ndim dtype, 默认是float32 size Zeros_like tensor datatype is one of 3 big error...","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/ai/pytorch/tensor.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"Tensor"}],["meta",{"property":"og:description","content":"Tensor 0: scalar 1: vector 2: matrix 3+: tensor matrix, tensor 变量一般大写命名 rand zeros ones arange, 左闭右开 ndim dtype, 默认是float32 size Zeros_like tensor datatype is one of 3 big error..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-12-27T14:41:52.000Z"}],["meta",{"property":"article:modified_time","content":"2023-12-27T14:41:52.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Tensor\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-12-27T14:41:52.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[{"level":3,"title":"Operation","slug":"operation","link":"#operation","children":[]},{"level":3,"title":"Aggregation","slug":"aggregation","link":"#aggregation","children":[]},{"level":3,"title":"Shape","slug":"shape","link":"#shape","children":[]},{"level":3,"title":"Indexing","slug":"indexing","link":"#indexing","children":[]},{"level":3,"title":"Numpy","slug":"numpy","link":"#numpy","children":[]},{"level":3,"title":"Reproducibility","slug":"reproducibility","link":"#reproducibility","children":[]},{"level":3,"title":"GPU","slug":"gpu","link":"#gpu","children":[]}],"git":{"createdTime":1703688112000,"updatedTime":1703688112000,"contributors":[{"name":"davidliu","email":"liudawei47@jd.com","commits":1}]},"readingTime":{"minutes":0.73,"words":218},"filePathRelative":"ai/pytorch/tensor.md","localizedDate":"December 27, 2023","excerpt":"\\n<p>0: scalar</p>\\n<p>1: vector</p>\\n<p>2: matrix</p>\\n<p>3+: tensor</p>\\n<p>matrix, tensor 变量一般大写命名</p>\\n<hr>\\n<p>rand</p>\\n<p>zeros</p>\\n<p>ones</p>\\n<p>arange, 左闭右开</p>\\n<hr>\\n<p>ndim</p>\\n<p>dtype, 默认是float32</p>\\n<p>size</p>\\n<p>Zeros_like</p>\\n<p>tensor datatype is one of 3 big errors with pytorch &amp; deep learning</p>","autoDesc":true}`);export{d as comp,h as data};
