import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as d,d as i}from"./app-9107e99b.js";const r={},h=i(`<h1 id="秒杀系统" tabindex="-1"><a class="header-anchor" href="#秒杀系统" aria-hidden="true">#</a> 秒杀系统</h1><h2 id="数据库设计" tabindex="-1"><a class="header-anchor" href="#数据库设计" aria-hidden="true">#</a> 数据库设计</h2><ul><li><p>商品信息表</p><p><code>commodity_info</code></p></li><li><p>库存信息表</p><p><code>stock_info</code></p></li><li><p>秒杀活动表</p><p><code>seckill_info</code></p></li><li><p>订单信息表</p><p><code>order_info</code></p></li></ul><h3 id="扣减库存" tabindex="-1"><a class="header-anchor" href="#扣减库存" aria-hidden="true">#</a> 扣减库存</h3><p>先读取，再扣减</p><p>会出现并发超卖问题</p><p>方案一：</p><p>解决问题可以利用事务，select 的时候加入一个 for update，可以加行锁</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> stock <span class="token keyword">FROM</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>但是影响性能</p><p>方案二：</p><p>修改的时候加判断 stock&gt;0</p><p>解决超卖了，但是并发量不行</p><p>MySQL，1000 单点 QPS，Redis 单点 10wQPS</p><p>通过 Redis 判断并扣减库存</p><p>利用 lua 脚本保证原子性（解决 CAS 问题）</p><h3 id="库存扣减时机" tabindex="-1"><a class="header-anchor" href="#库存扣减时机" aria-hidden="true">#</a> 库存扣减时机</h3><p>下单时立即减库存</p><p>先下单，不减库存。实际支付成功后减库存。</p><p><strong>下单后锁定库存，支付成功后，减库存</strong></p><p>延迟队列</p><h3 id="限购" tabindex="-1"><a class="header-anchor" href="#限购" aria-hidden="true">#</a> 限购</h3><h3 id="防止服务雪崩" tabindex="-1"><a class="header-anchor" href="#防止服务雪崩" aria-hidden="true">#</a> 防止服务雪崩</h3><p>熔断</p><h3 id="库存预热" tabindex="-1"><a class="header-anchor" href="#库存预热" aria-hidden="true">#</a> 库存预热</h3><p>主要考虑两点</p><ul><li>高性能</li><li>高可用</li></ul><h2 id="高性能" tabindex="-1"><a class="header-anchor" href="#高性能" aria-hidden="true">#</a> 高性能</h2><h3 id="热点数据缓存" tabindex="-1"><a class="header-anchor" href="#热点数据缓存" aria-hidden="true">#</a> 热点数据缓存</h3><h3 id="流量削峰" tabindex="-1"><a class="header-anchor" href="#流量削峰" aria-hidden="true">#</a> 流量削峰</h3><ul><li>消息队列</li><li>回答问题/验证码</li></ul><h2 id="高可用" tabindex="-1"><a class="header-anchor" href="#高可用" aria-hidden="true">#</a> 高可用</h2>`,32),s=[h];function n(l,c){return a(),d("div",null,s)}const o=e(r,[["render",n],["__file","seckill.html.vue"]]);export{o as default};
