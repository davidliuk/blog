import{_ as e,V as a,W as i,a0 as r}from"./framework-705b829b.js";const t={},d=r('<h1 id="缓存预热" tabindex="-1"><a class="header-anchor" href="#缓存预热" aria-hidden="true">#</a> 缓存预热</h1><h3 id="问题分析" tabindex="-1"><a class="header-anchor" href="#问题分析" aria-hidden="true">#</a> 问题分析</h3><p>冷启动：服务刚刚启动时，Rdis中并没有缓存，如果所有商品数据都在第一次查询时添加缓存，可能会给数据库带来较大压力。</p><p>缓存预热：在实际开发中，我们可以利用大数据统计用户访问的热点数据，在项目启动时将这些热点数据提前查询并保存到Redis中。</p><p>我们数据量较少，可以在启动时将所有数据都放入缓存中。</p><ul><li>数据量太大的话，无法将所有数据放入 redis 中：耗费时间过长或 redis 根本无法容纳下所有的数据；</li><li>需要根据当天的具体访问情况，实时统计出访问频率较高的热数据；</li><li>将访问频率较高的热数据写入 redis 中，肯定数据也比较多， 我们也得多个服务并行读取数据去写，并行的分布式缓存预热。</li></ul><h3 id="实现" tabindex="-1"><a class="header-anchor" href="#实现" aria-hidden="true">#</a> 实现</h3><p>InitialazingBean</p><p>afterPropertiesSet</p>',9),h=[d];function c(s,n){return a(),i("div",null,h)}const o=e(t,[["render",c],["__file","cache-preheat.html.vue"]]);export{o as default};
