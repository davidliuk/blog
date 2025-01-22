import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,d as e,o as t}from"./app-ktFCNIob.js";const n={};function l(p,i){return t(),a("div",null,i[0]||(i[0]=[e(`<h1 id="优化" tabindex="-1"><a class="header-anchor" href="#优化"><span>优化</span></a></h1><p>行锁优化</p><p>为 Map 的 Value 封装为一个结构体，其中包含一个读写锁，这样可以在读取的时候不会阻塞写入，提高并发性能</p><div class="language-go line-numbers-mode" data-highlighter="shiki" data-ext="go" data-title="go" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">type</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> Map</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> struct</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    m</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> map</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">string</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">]</span><span style="--shiki-light:#383A42;--shiki-dark:#C678DD;">*</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">entry</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">    sync</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">RWMutex</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="慢同步任务优化" tabindex="-1"><a class="header-anchor" href="#慢同步任务优化"><span>慢同步任务优化</span></a></h2><p>由于同步任务，要求一致性，所以最新的同步任务必须执行，前面的较为旧的同步任务可以不执行，所以可以通过一个全局变量来控制，如果有新的同步任务，就把全局变量设置为 true，如果有旧的同步任务，就把全局变量设置为 false，这样就可以在同步任务的开头判断全局变量，如果是 false，就直接退出，不执行同步任务，这样就可以提高性能。</p><p>为了解决提交新的同步任务时，还有旧的同步任务正在执行的问题，可以通过设置为一个整数，每次提交新的同步任务，如果当前这个整数小于 2，就把这个整数加 1，每次同步任务执行完毕，就把这个整数减 1，这样就可以保证，只有最新的同步任务会执行，旧的同步任务不会执行。</p><p>在多线程并发提交任务时，为了防止出现并发安全问题，可以使用 sync.Mutex 来加锁，保证同一时间只有一个线程可以修改这个整数。</p>`,8)]))}const d=s(n,[["render",l],["__file","优化.html.vue"]]),k=JSON.parse(`{"path":"/se/lang/golang/%E4%BC%98%E5%8C%96.html","title":"优化","lang":"en-US","frontmatter":{"description":"优化 行锁优化 为 Map 的 Value 封装为一个结构体，其中包含一个读写锁，这样可以在读取的时候不会阻塞写入，提高并发性能 慢同步任务优化 由于同步任务，要求一致性，所以最新的同步任务必须执行，前面的较为旧的同步任务可以不执行，所以可以通过一个全局变量来控制，如果有新的同步任务，就把全局变量设置为 true，如果有旧的同步任务，就把全局变量设置为...","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/se/lang/golang/%E4%BC%98%E5%8C%96.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"优化"}],["meta",{"property":"og:description","content":"优化 行锁优化 为 Map 的 Value 封装为一个结构体，其中包含一个读写锁，这样可以在读取的时候不会阻塞写入，提高并发性能 慢同步任务优化 由于同步任务，要求一致性，所以最新的同步任务必须执行，前面的较为旧的同步任务可以不执行，所以可以通过一个全局变量来控制，如果有新的同步任务，就把全局变量设置为 true，如果有旧的同步任务，就把全局变量设置为..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-08-17T10:06:21.000Z"}],["meta",{"property":"article:modified_time","content":"2023-08-17T10:06:21.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"优化\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-08-17T10:06:21.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[{"level":2,"title":"慢同步任务优化","slug":"慢同步任务优化","link":"#慢同步任务优化","children":[]}],"git":{"createdTime":1692243193000,"updatedTime":1692266781000,"contributors":[{"name":"liudawei47","email":"liudawei47@jd.com","commits":2}]},"readingTime":{"minutes":1.23,"words":368},"filePathRelative":"se/lang/golang/优化.md","localizedDate":"August 17, 2023","excerpt":"\\n<p>行锁优化</p>\\n<p>为 Map 的 Value 封装为一个结构体，其中包含一个读写锁，这样可以在读取的时候不会阻塞写入，提高并发性能</p>\\n<div class=\\"language-go line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"go\\" data-title=\\"go\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">type</span><span style=\\"--shiki-light:#C18401;--shiki-dark:#E5C07B\\"> Map</span><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\"> struct</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> {</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\">    m</span><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\"> map</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">[</span><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">string</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">]</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#C678DD\\">*</span><span style=\\"--shiki-light:#C18401;--shiki-dark:#E5C07B\\">entry</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#C18401;--shiki-dark:#E5C07B\\">    sync</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">.</span><span style=\\"--shiki-light:#C18401;--shiki-dark:#E5C07B\\">RWMutex</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">}</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{d as comp,k as data};
