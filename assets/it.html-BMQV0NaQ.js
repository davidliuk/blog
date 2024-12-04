import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,d as e,a as s,o as l}from"./app-D4ZvIHfO.js";const n={};function d(o,t){return l(),a("div",null,t[0]||(t[0]=[e(`<h1 id="it" tabindex="-1"><a class="header-anchor" href="#it"><span>it</span></a></h1><p>html5嵌入: markdown-it-html5-embed（typora自带支持html5）</p><p><a href="https://stackoverflow.com/questions/46273751/how-can-i-add-a-video-in-markdown" target="_blank" rel="noopener noreferrer">markdown video</a></p><p>Depending on your markdown processor, there may be a built-in syntax.</p><p>Pandoc <a href="https://pandoc.org/MANUAL.html#images" target="_blank" rel="noopener noreferrer">the image syntax</a> with a video file extension (<code>.mov</code>, <code>.mp4</code>) can be used:</p><div class="language-markdown line-numbers-mode" data-highlighter="shiki" data-ext="markdown" data-title="markdown" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">![]</span><span style="--shiki-light:#A626A4;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#A626A4;--shiki-light-text-decoration:inherit;--shiki-dark:#C678DD;--shiki-dark-text-decoration:underline;">video.mov</span><span style="--shiki-light:#A626A4;--shiki-dark:#E06C75;">)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><hr><p>The other answer is correct, but if you&#39;re dealing with GitHub, now you can just <a href="https://github.blog/2021-05-13-video-uploads-available-github/" target="_blank" rel="noopener noreferrer">add a URL to the video</a> and it will automatically be embedded, as long as it&#39;s surrounded by empty lines. For example:</p><div class="language-markdown line-numbers-mode" data-highlighter="shiki" data-ext="markdown" data-title="markdown" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"># cool-beans</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">https://example.com/video.mp4</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">Press play to see the video.</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>For GitHub markdown (in website), you can drag the video file from your file explorer and drop it into the comment or text box.</p><p>This action will automatically generate a URL and store it in GitHub Assets.</p><hr><p>For other processors, you can always write raw-HTML in your markdown:</p><div class="language-html line-numbers-mode" data-highlighter="shiki" data-ext="html" data-title="html" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">video</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> width</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;320&quot;</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> height</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;240&quot;</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> controls</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  &lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">source</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> src</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;video.mov&quot;</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> type</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;video/mp4&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">video</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>或者使用iframe，视频网站外链，效果如下（推荐 Google Drive 外链）</p><iframe src="https://drive.google.com/file/d/15fHpLKYUewPKiyrWV3DgaFWmrXo1oHPL/preview" width="640" height="480" allow="autoplay"></iframe><p>bilibili player bvid</p>`,17),s("iframe",{src:"//player.bilibili.com/player.html?bvid=BV1FX4y1E7ag",width:"600",height:"400px",scrolling:"no",border:"0",frameborder:"no",framespacing:"0",allowfullscreen:"true"},null,-1),e('<p><strong>boolean</strong> 类型，在 QueryString 中可以使用 <strong>0</strong> 和 <strong>1</strong> 表示。</p><table><thead><tr><th style="text-align:left;">参数名</th><th style="text-align:left;">类型</th><th style="text-align:left;">必要</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">aid</td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;"></td><td style="text-align:left;">UGC 视频 ID。aid、bvid 选择其一即可</td></tr><tr><td style="text-align:left;">cid</td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;"></td><td style="text-align:left;">UGC 视频 ID</td></tr><tr><td style="text-align:left;">bvid</td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">✅</td><td style="text-align:left;">UGC 视频 ID。aid、bvid 选择其一即可</td></tr><tr><td style="text-align:left;">seasonId</td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;"></td><td style="text-align:left;">OGV 视频 ID</td></tr><tr><td style="text-align:left;">episodeId</td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;">✅</td><td style="text-align:left;">OGV 视频 ID。优先级高于 aid、bvid</td></tr><tr><td style="text-align:left;">poster</td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;"></td><td style="text-align:left;">展示封面</td></tr><tr><td style="text-align:left;">autoplay</td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;"></td><td style="text-align:left;">自动播放</td></tr><tr><td style="text-align:left;">muted</td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;"></td><td style="text-align:left;">静音</td></tr><tr><td style="text-align:left;">t</td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;"></td><td style="text-align:left;">跳转到媒体的初始时间点，单位：秒</td></tr><tr><td style="text-align:left;">danmaku</td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;"></td><td style="text-align:left;"><code>false</code> 表示<strong>关闭弹幕</strong>，其他表示默认值</td></tr><tr><td style="text-align:left;">kind</td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;"></td><td style="text-align:left;">群组种类。非通用业务需要此参数</td></tr><tr><td style="text-align:left;">refer</td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;"></td><td style="text-align:left;">跳链时携带当前的 Referrer。用于合作方查询来自嵌入网站的跳转次数</td></tr><tr><td style="text-align:left;">p</td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;"></td><td style="text-align:left;">多 P 视频的集数。从 1 开始计数，若有 cid 参数，则此参数不生效</td></tr></tbody></table><hr><hr><p>fregante&#39;s answer works fine for videos you upload to GitHub yourself, but not for youtube video links.</p><p>mb21&#39;s answer works fine for links if you want to provide the image yourself, but that means you&#39;ll have to use the plain thumbnail image without the play button (in which case it doesn&#39;t look like a video), or edit an image yourself, which is time-consuming.</p><p>In case you wanna get the thumbnail from a video on the web automatically... you can use an API I made which essentially gets the video&#39;s thumbnail, then adds a play button and backdrop to it.</p><p>You can use it in markdown like this:</p><div class="language-markdown line-numbers-mode" data-highlighter="shiki" data-ext="markdown" data-title="markdown" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#986801;--shiki-dark:#ABB2BF;">[</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">![]</span><span style="--shiki-light:#A626A4;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#A626A4;--shiki-light-text-decoration:inherit;--shiki-dark:#C678DD;--shiki-dark-text-decoration:underline;">https://markdown-videos-api.jorgenkh.no/youtube/{video_id}</span><span style="--shiki-light:#A626A4;--shiki-dark:#E06C75;">)</span><span style="--shiki-light:#986801;--shiki-dark:#ABB2BF;">]</span><span style="--shiki-light:#A626A4;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#A626A4;--shiki-light-text-decoration:inherit;--shiki-dark:#C678DD;--shiki-dark-text-decoration:underline;">https://youtu.be/{video_id}</span><span style="--shiki-light:#A626A4;--shiki-dark:#E06C75;">)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Clicking on the image will open the video in your browser.</p><p><a href="https://youtu.be/8lGpZkjnkt4" target="_blank" rel="noopener noreferrer"><img src="http://markdown-videos-api.jorgenkh.no/youtube/8lGpZkjnkt4" alt="" loading="lazy"></a></p><p><a href="https://youtu.be/8lGpZkjnkt4.gif" target="_blank" rel="noopener noreferrer"><img src="http://markdown-videos-api.jorgenkh.no/youtube/8lGpZkjnkt4.gif" alt="" loading="lazy"></a></p>',12)]))}const p=i(n,[["render",d],["__file","it.html.vue"]]),k=JSON.parse(`{"path":"/se/tools/vuepress/it.html","title":"it","lang":"en-US","frontmatter":{"description":"it html5嵌入: markdown-it-html5-embed（typora自带支持html5） markdown video Depending on your markdown processor, there may be a built-in syntax. Pandoc the image syntax with a video fi...","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/se/tools/vuepress/it.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"it"}],["meta",{"property":"og:description","content":"it html5嵌入: markdown-it-html5-embed（typora自带支持html5） markdown video Depending on your markdown processor, there may be a built-in syntax. Pandoc the image syntax with a video fi..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://markdown-videos-api.jorgenkh.no/youtube/{video_id}"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-01-08T03:06:14.000Z"}],["meta",{"property":"article:modified_time","content":"2024-01-08T03:06:14.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"it\\",\\"image\\":[\\"https://markdown-videos-api.jorgenkh.no/youtube/{video_id}\\",\\"http://markdown-videos-api.jorgenkh.no/youtube/8lGpZkjnkt4\\",\\"http://markdown-videos-api.jorgenkh.no/youtube/8lGpZkjnkt4.gif\\"],\\"dateModified\\":\\"2024-01-08T03:06:14.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[],"git":{"createdTime":1700646963000,"updatedTime":1704683174000,"contributors":[{"name":"davidliu","email":"liudawei47@jd.com","commits":2}]},"readingTime":{"minutes":1.91,"words":573},"filePathRelative":"se/tools/vuepress/it.md","localizedDate":"November 22, 2023","excerpt":"\\n<p>html5嵌入: markdown-it-html5-embed（typora自带支持html5）</p>\\n<p><a href=\\"https://stackoverflow.com/questions/46273751/how-can-i-add-a-video-in-markdown\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">markdown video</a></p>\\n<p>Depending on your markdown processor, there may be a built-in syntax.</p>\\n<p>Pandoc <a href=\\"https://pandoc.org/MANUAL.html#images\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">the image syntax</a> with a video file extension (<code>.mov</code>, <code>.mp4</code>) can be used:</p>","autoDesc":true}`);export{p as comp,k as data};
