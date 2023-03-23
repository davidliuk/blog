import{_ as e,V as a,W as i,a0 as r}from"./framework-705b829b.js";const t={},l=r('<h1 id="冷启动问题-缓存预热" tabindex="-1"><a class="header-anchor" href="#冷启动问题-缓存预热" aria-hidden="true">#</a> 冷启动问题：缓存预热</h1><h3 id="问题分析" tabindex="-1"><a class="header-anchor" href="#问题分析" aria-hidden="true">#</a> 问题分析</h3><p>冷启动：服务刚刚启动时，Rdis中并没有缓存，如果所有商品数据都在第一次查询时添加缓存，可能会给数据库带来较大压力。</p><p>缓存预热：在实际开发中，我们可以利用大数据统计用户访问的热点数据，在项目启动时将这些热点数据提前查询并保存到Redis中。</p><p>缓存预热就是系统上线前后，将相关的缓存数据直接加载到缓存系统中去，而不依赖用户。这样就可以避免在用户请求的时候，先查询数据库，然后再将数据缓存的问题。用户直接查询事先被预热的缓存数据，这样可以避免那么系统上线初期，对于高并发的流量，都会访问到数据库中， 对数据库造成流量的压力。根据数据不同量级，可以有以下几种做法：</p><h3 id="实现" tabindex="-1"><a class="header-anchor" href="#实现" aria-hidden="true">#</a> 实现</h3><ul><li><p>数据量不大：项目启动的时候自动进行加载。</p><p>InitialazingBean</p><p>afterPropertiesSet</p></li><li><p>数据量较大：后台定时刷新缓存。</p><p>Spring Scheduler</p></li><li><p>数据量极大：只针对热点数据进行预加载缓存操作。</p><p>RabbitMQ 消费者监听</p></li></ul><p>我们数据量较少，可以在启动时将所有数据都放入缓存中。</p><ul><li>数据量太大的话，无法将所有数据放入 redis 中：耗费时间过长或 redis 根本无法容纳下所有的数据；</li><li>需要根据当天的具体访问情况，实时统计出访问频率较高的热数据；</li><li>将访问频率较高的热数据写入 redis 中，肯定数据也比较多， 我们也得多个服务并行读取数据去写，并行的分布式缓存预热。</li></ul>',9),p=[l];function d(h,c){return a(),i("div",null,p)}const s=e(t,[["render",d],["__file","cache-preheat.html.vue"]]);export{s as default};
