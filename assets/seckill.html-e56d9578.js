import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{o as i,c as e,d as l}from"./app-9107e99b.js";const c={},h=l('<h1 id="秒杀" tabindex="-1"><a class="header-anchor" href="#秒杀" aria-hidden="true">#</a> 秒杀</h1><h3 id="超卖解决" tabindex="-1"><a class="header-anchor" href="#超卖解决" aria-hidden="true">#</a> 超卖解决</h3><p>悲观锁：添加同步锁，让线程串行执行</p><ul><li>优点：简单粗暴</li><li>缺点：性能一般</li></ul><p>乐观锁：不加锁，在更新的时候判断是否有其他线程在修改</p><p>版本号，这样需要数据库加字段；或简化为：CAS 法</p><ul><li>优点：性能好</li><li>缺点：成功率太低</li></ul><p>改进：不再判断是否相等，只判断是否大于零，类似双锁校验</p><h3 id="一人一单" tabindex="-1"><a class="header-anchor" href="#一人一单" aria-hidden="true">#</a> 一人一单</h3><p>因为购买数量是否修改过数据库里面不存在，所以不难使用乐观锁方案，</p><p>如果是带事物的情况下，锁的范围应该包括整个方法，否则回滚的时候又线程不安全了</p><ul><li>在调用方法前加锁，可以控制的粒度更细，控制好拿什么作为锁以后，该方法吞吐量更好</li><li>在方法前面前加锁，粒度粗，省事，但是吞吐量太低</li></ul><p>集群模式下，用 synchronized 控制并发就不安全了，用 redis 做分布式锁</p><h3 id="异步秒杀" tabindex="-1"><a class="header-anchor" href="#异步秒杀" aria-hidden="true">#</a> 异步秒杀</h3><p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/截屏2023-02-08 22.20.08.png" alt="截屏2023-02-08 22.20.08" loading="lazy"></p><p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/截屏2023-02-08 22.19.47.png" alt="截屏2023-02-08 22.19.47" loading="lazy"></p>',16),r=[h];function n(t,d){return i(),e("div",null,r)}const p=a(c,[["render",n],["__file","seckill.html.vue"]]);export{p as default};
