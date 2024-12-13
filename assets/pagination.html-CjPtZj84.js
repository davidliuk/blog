import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,d as n,o as l}from"./app-DIqbhby7.js";const e={};function t(h,s){return l(),a("div",null,s[0]||(s[0]=[n(`<h1 id="pagination" tabindex="-1"><a class="header-anchor" href="#pagination"><span>Pagination</span></a></h1><p>Elasticsearch 主要提供了三种分页方式：</p><ul><li>from + size，</li><li>scroll</li><li>sort + search_after</li></ul><h3 id="from-size-分页" tabindex="-1"><a class="header-anchor" href="#from-size-分页"><span>from + size 分页</span></a></h3><p>from + size 分页机制类似于 SQL 中的 LIMIT 和 OFFSET，通过指定 from（起始偏移量）和 size（每页返回的记录数）来获取特定页的数据。</p><div class="language-http line-numbers-mode" data-highlighter="shiki" data-ext="http" data-title="http" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">GET</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> /my-index/_search</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  &quot;query&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">	&quot;match_all&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: {}</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  },</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  &quot;from&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">10</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,  </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// 跳过前 10 条记录</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  &quot;size&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">20</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">   // 返回接下来的 20 条记录</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这种分页方式简单直观，适合在数据量较小或分页深度不大的场景下使用，例如只需要获取前几页数据的情况。</p><h3 id="scroll-分页" tabindex="-1"><a class="header-anchor" href="#scroll-分页"><span>scroll 分页</span></a></h3><p>scroll 可以处理大量数据，并且在分页过程中保持数据一致性。适用于需要遍历大量数据（如全量导出）的场景。</p><p>初始化 scroll 请求，创建一个 scroll 上下文，保存当前查询的快照</p><div class="language-http line-numbers-mode" data-highlighter="shiki" data-ext="http" data-title="http" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">GET</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> /my-index/_search?scroll=1m</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  &quot;query&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    &quot;match_all&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: {}</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  },</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  &quot;size&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">100</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">  // 每次返回 100 条记录</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用返回的 scroll_id 获取下一页数据</p><div class="language-http line-numbers-mode" data-highlighter="shiki" data-ext="http" data-title="http" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">GET</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> /_search/scroll</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  &quot;scroll&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;1m&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,  </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// 指定 scroll 上下文的有效期</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  &quot;scroll_id&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;DXF1ZXJ5QW5kRmV0Y2gBAAAAAAAAABZWMjJDZ3Z1RlEtOUc1T1pNZnVtUncAAAAAAAABF...&quot;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>scroll不适合实时分页：</p><ul><li>scroll 会在服务器上维持一个查询上下文，占用系统资源。如果有大量的并发 scroll 请求，或者 scroll 持续时间很长，会占用大量的内存和 CPU 资源</li><li>当你初始化一个 scroll 请求时，Elasticsearch 会创建一个当前搜索结果的快照。这个快照会保存所有匹配文档的状态，即使之后这些文档被更新或删除，scroll 返回的结果也不会改变。实时分页场景中，用户需要查看最新的数据。</li></ul><h3 id="sort-search-after-分页" tabindex="-1"><a class="header-anchor" href="#sort-search-after-分页"><span>sort + search_after 分页</span></a></h3><p>在 Elasticsearch 中，推荐的分页方式是 sort + search_after( 5.0 版本及之后的版本才有)，它在深度分页时比 from + size 更具性能优势，也比 scroll 更适合实时分页的场景。</p><p>search_after 的优势如下：</p><ul><li>避免深度分页性能问题: 与 from + size 不同，search_after 不需要 Elasticsearch 计算和存储大量中间结果， 因此在深度分页时效率更高。</li><li>资源占用少: search_after 只需要记录上一页最后一条数据的排序值，相比 scroll 机制需要维护大量数据上下文，占用的资源更少。</li><li>稳定的排序结果: search_after 基于排序值定位下一页数据，保证了即使数据更新，分页结果的顺序依然稳定可靠。</li></ul><p>此外，sort + search_after 可以与手动构建的 nextToken 分页逻辑结合使用，适用于需要跨数据库复用分页逻辑的场景。例如，在一个项目中，可能会有多个数据库的分页需求，通过手动构建 nextToken 分页条件，可以实现跨数据库的分页逻辑复用。</p><p>sort + search_after 工作原理如下：</p><ol><li>排序：利用 sort 参数对结果进行排序，确保分页结果的稳定性。为了进一步确保结果的唯一性，建议在排序字段中包含一个唯一标识符，例如 _id。</li><li>定位下一页： <ul><li>使用 search_after 参数传递上一页最后一个结果的排序值，作为下一页查询的起点。</li><li>Elasticsearch 会根据 search_after 的值快速定位到上一页的结束位置，开始下一页的查询，避免了深度分页的性能瓶颈。</li></ul></li></ol><div class="language-http line-numbers-mode" data-highlighter="shiki" data-ext="http" data-title="http" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">GET</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> /service_version_index/service_version_type/_search</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  &quot;size&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">100</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  &quot;sort&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: [</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    {</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">&quot;gmt_modified&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;desc&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">},</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    {</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">&quot;score&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;desc&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">},</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    {</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">&quot;id&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;desc&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  ],</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  &quot;query&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: {</span></span>
<span class="line"><span style="--shiki-light:white;--shiki-dark:#FFFFFF;">    ...</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下一页查询，使用上一页最后一个结果的排序值作为 search_after 的值</p><div class="language-http line-numbers-mode" data-highlighter="shiki" data-ext="http" data-title="http" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">GET</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> /service_version_index/service_version_type/_search</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  &quot;size&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">100</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  &quot;sort&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: [</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    {</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">&quot;gmt_modified&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;desc&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">},</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    {</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">&quot;score&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;desc&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">},</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    {</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">&quot;id&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;desc&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  ],</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  &quot;query&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: {</span></span>
<span class="line"><span style="--shiki-light:white;--shiki-dark:#FFFFFF;">    ...</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  },</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  &quot;search_after&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: [</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">    1614561419000</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    &quot;6FxZJXgBE6QbUWetnarH&quot;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  ]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,25)]))}const k=i(e,[["render",t],["__file","pagination.html.vue"]]),d=JSON.parse(`{"path":"/cs/middleware/es/pagination.html","title":"Pagination","lang":"en-US","frontmatter":{"description":"Pagination Elasticsearch 主要提供了三种分页方式： from + size， scroll sort + search_after from + size 分页 from + size 分页机制类似于 SQL 中的 LIMIT 和 OFFSET，通过指定 from（起始偏移量）和 size（每页返回的记录数）来获取特定页的数据。...","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/cs/middleware/es/pagination.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"Pagination"}],["meta",{"property":"og:description","content":"Pagination Elasticsearch 主要提供了三种分页方式： from + size， scroll sort + search_after from + size 分页 from + size 分页机制类似于 SQL 中的 LIMIT 和 OFFSET，通过指定 from（起始偏移量）和 size（每页返回的记录数）来获取特定页的数据。..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-11-23T18:37:56.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-23T18:37:56.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Pagination\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-23T18:37:56.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[{"level":3,"title":"from + size 分页","slug":"from-size-分页","link":"#from-size-分页","children":[]},{"level":3,"title":"scroll 分页","slug":"scroll-分页","link":"#scroll-分页","children":[]},{"level":3,"title":"sort + search_after 分页","slug":"sort-search-after-分页","link":"#sort-search-after-分页","children":[]}],"git":{"createdTime":1732244781000,"updatedTime":1732387076000,"contributors":[{"name":"David Liu","email":"liudawei@seas.upenn.edu","commits":2}]},"readingTime":{"minutes":2.96,"words":887},"filePathRelative":"cs/middleware/es/pagination.md","localizedDate":"November 22, 2024","excerpt":"\\n<p>Elasticsearch 主要提供了三种分页方式：</p>\\n<ul>\\n<li>from + size，</li>\\n<li>scroll</li>\\n<li>sort + search_after</li>\\n</ul>\\n<h3>from + size 分页</h3>\\n<p>from + size 分页机制类似于 SQL 中的 LIMIT 和 OFFSET，通过指定 from（起始偏移量）和 size（每页返回的记录数）来获取特定页的数据。</p>\\n<div class=\\"language-http line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"http\\" data-title=\\"http\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">GET</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> /my-index/_search</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">{</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\">  \\"query\\"</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">: {</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\">\\t\\"match_all\\"</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">: {}</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">  },</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\">  \\"from\\"</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">: </span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\">10</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">,  </span><span style=\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\">// 跳过前 10 条记录</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\">  \\"size\\"</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">: </span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\">20</span><span style=\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\">   // 返回接下来的 20 条记录</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">}</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{k as comp,d as data};
