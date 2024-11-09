import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as l,b as a,o as t}from"./app-B3ooTv29.js";const n={};function s(p,e){return t(),l("div",null,e[0]||(e[0]=[a('<h1 id="秒杀系统" tabindex="-1"><a class="header-anchor" href="#秒杀系统"><span>秒杀系统</span></a></h1><h2 id="数据库设计" tabindex="-1"><a class="header-anchor" href="#数据库设计"><span>数据库设计</span></a></h2><ul><li><p>商品信息表</p><p><code>commodity_info</code></p></li><li><p>库存信息表</p><p><code>stock_info</code></p></li><li><p>秒杀活动表</p><p><code>seckill_info</code></p></li><li><p>订单信息表</p><p><code>order_info</code></p></li></ul><h3 id="扣减库存" tabindex="-1"><a class="header-anchor" href="#扣减库存"><span>扣减库存</span></a></h3><p>先读取，再扣减</p><p>会出现并发超卖问题</p><p>方案一：</p><p>解决问题可以利用事务，select 的时候加入一个 for update，可以加行锁</p><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">select</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> stock </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">FROM</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>但是影响性能</p><p>方案二：</p><p>修改的时候加判断 stock&gt;0</p><p>解决超卖了，但是并发量不行</p><p>MySQL，1000 单点 QPS，Redis 单点 10wQPS</p><p>通过 Redis 判断并扣减库存</p><p>利用 lua 脚本保证原子性（解决 CAS 问题）</p><h3 id="库存扣减时机" tabindex="-1"><a class="header-anchor" href="#库存扣减时机"><span>库存扣减时机</span></a></h3><p>下单时立即减库存</p><p>先下单，不减库存。实际支付成功后减库存。</p><p><strong>下单后锁定库存，支付成功后，减库存</strong></p><p>延迟队列</p><h3 id="限购" tabindex="-1"><a class="header-anchor" href="#限购"><span>限购</span></a></h3><h3 id="防止服务雪崩" tabindex="-1"><a class="header-anchor" href="#防止服务雪崩"><span>防止服务雪崩</span></a></h3><p>熔断</p><h3 id="库存预热" tabindex="-1"><a class="header-anchor" href="#库存预热"><span>库存预热</span></a></h3><p>主要考虑两点</p><ul><li>高性能</li><li>高可用</li></ul><h2 id="高性能" tabindex="-1"><a class="header-anchor" href="#高性能"><span>高性能</span></a></h2><h3 id="热点数据缓存" tabindex="-1"><a class="header-anchor" href="#热点数据缓存"><span>热点数据缓存</span></a></h3><h3 id="流量削峰" tabindex="-1"><a class="header-anchor" href="#流量削峰"><span>流量削峰</span></a></h3><ul><li>消息队列</li><li>回答问题/验证码</li></ul><h2 id="高可用" tabindex="-1"><a class="header-anchor" href="#高可用"><span>高可用</span></a></h2>',32)]))}const r=i(n,[["render",s],["__file","flash-sale.html.vue"]]),c=JSON.parse(`{"path":"/se/design/system/module/flash-sale.html","title":"秒杀系统","lang":"en-US","frontmatter":{"description":"秒杀系统 数据库设计 商品信息表 commodity_info 库存信息表 stock_info 秒杀活动表 seckill_info 订单信息表 order_info 扣减库存 先读取，再扣减 会出现并发超卖问题 方案一： 解决问题可以利用事务，select 的时候加入一个 for update，可以加行锁 但是影响性能 方案二： 修改的时候加判断 ...","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/se/design/system/module/flash-sale.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"秒杀系统"}],["meta",{"property":"og:description","content":"秒杀系统 数据库设计 商品信息表 commodity_info 库存信息表 stock_info 秒杀活动表 seckill_info 订单信息表 order_info 扣减库存 先读取，再扣减 会出现并发超卖问题 方案一： 解决问题可以利用事务，select 的时候加入一个 for update，可以加行锁 但是影响性能 方案二： 修改的时候加判断 ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-06-27T01:21:47.000Z"}],["meta",{"property":"article:modified_time","content":"2024-06-27T01:21:47.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"秒杀系统\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-06-27T01:21:47.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[{"level":2,"title":"数据库设计","slug":"数据库设计","link":"#数据库设计","children":[{"level":3,"title":"扣减库存","slug":"扣减库存","link":"#扣减库存","children":[]},{"level":3,"title":"库存扣减时机","slug":"库存扣减时机","link":"#库存扣减时机","children":[]},{"level":3,"title":"限购","slug":"限购","link":"#限购","children":[]},{"level":3,"title":"防止服务雪崩","slug":"防止服务雪崩","link":"#防止服务雪崩","children":[]},{"level":3,"title":"库存预热","slug":"库存预热","link":"#库存预热","children":[]}]},{"level":2,"title":"高性能","slug":"高性能","link":"#高性能","children":[{"level":3,"title":"热点数据缓存","slug":"热点数据缓存","link":"#热点数据缓存","children":[]},{"level":3,"title":"流量削峰","slug":"流量削峰","link":"#流量削峰","children":[]}]},{"level":2,"title":"高可用","slug":"高可用","link":"#高可用","children":[]}],"git":{"createdTime":1677504602000,"updatedTime":1719451307000,"contributors":[{"name":"刘大维","email":"davidliu@liudaweideMacBook-Pro.local","commits":1}]},"readingTime":{"minutes":0.84,"words":253},"filePathRelative":"se/design/system/module/flash-sale.md","localizedDate":"February 27, 2023","excerpt":"\\n<h2>数据库设计</h2>\\n<ul>\\n<li>\\n<p>商品信息表</p>\\n<p><code>commodity_info</code></p>\\n</li>\\n<li>\\n<p>库存信息表</p>\\n<p><code>stock_info</code></p>\\n</li>\\n<li>\\n<p>秒杀活动表</p>\\n<p><code>seckill_info</code></p>\\n</li>\\n<li>\\n<p>订单信息表</p>\\n<p><code>order_info</code></p>\\n</li>\\n</ul>\\n<h3>扣减库存</h3>\\n<p>先读取，再扣减</p>\\n<p>会出现并发超卖问题</p>\\n<p>方案一：</p>","autoDesc":true}`);export{r as comp,c as data};
