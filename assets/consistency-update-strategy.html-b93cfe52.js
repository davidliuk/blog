import{_ as t,V as e,W as a,a0 as d}from"./framework-705b829b.js";const i={},r=d('<h1 id="缓存更新策略" tabindex="-1"><a class="header-anchor" href="#缓存更新策略" aria-hidden="true">#</a> 缓存更新策略</h1><h2 id="概览" tabindex="-1"><a class="header-anchor" href="#概览" aria-hidden="true">#</a> 概览</h2><table><thead><tr><th></th><th>内存淘汰</th><th>超时剔除</th><th>主动更新</th></tr></thead><tbody><tr><td>说明</td><td>不用自己维护，利用Redis内存淘汰机制，当内存不足时自动淘汰部分数据。下次查询时更新缓存。</td><td>给缓存数据添加TTL时间，到期后自动删除缓存。下次查询时更新缓存。</td><td>编写业务逻辑，再修改数据库的同时，更新缓存</td></tr><tr><td>一致性</td><td>差</td><td>一般</td><td>好</td></tr><tr><td>维护成本</td><td>无</td><td>低</td><td>高</td></tr></tbody></table><p>业务场景：</p><ul><li>低一致性需求：使用内存淘汰机制。例如店铺类型等查询。</li><li>高一致性需求：主动更新，并以超时剔除作为兜底方案。例如店铺详情查询的缓存</li></ul><h2 id="主动更新策略" tabindex="-1"><a class="header-anchor" href="#主动更新策略" aria-hidden="true">#</a> 主动更新策略</h2><h3 id="cache-aside-pattern" tabindex="-1"><a class="header-anchor" href="#cache-aside-pattern" aria-hidden="true">#</a> Cache Aside Pattern</h3><p>由缓存的调用者，在更新数据库的同时更新缓存。</p><p>需要开发者自己编码，但是可控性很高</p><h4 id="需要考虑的问题" tabindex="-1"><a class="header-anchor" href="#需要考虑的问题" aria-hidden="true">#</a> 需要考虑的问题</h4><ol><li><p>删除缓存还是更新缓存？</p><ul><li>更新缓存：每次更新数据库都更新缓存，无效读写多❌</li><li>删除缓存：更新数据库时，让缓存失效，查询时再更新缓存🉑</li></ul></li><li><p>如何保证缓存与数据库操作的同时成功或失败？</p><ul><li>单体系统，将缓存与数据库操作放在一个事务</li><li>分布式系统，利用TCC等分布式事务方案</li></ul></li><li><p>先操作缓存还是先操作数据库？<em><strong>多线程并发访问</strong></em></p><ul><li>先删除缓存，再操作数据库❌</li><li>先操作数据库，再删除缓存🉑</li></ul><p>一致性问题，操作数据库比操作redis慢得多，所以先操作数据库出现一致性问题的概率更小，且有过期时间可以作为保障</p><p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/IMG_B987FACCF2BA-1.jpeg" alt="IMG_B987FACCF2BA-1" loading="lazy"></p></li></ol><h3 id="read-write-through-pattern" tabindex="-1"><a class="header-anchor" href="#read-write-through-pattern" aria-hidden="true">#</a> Read/Write Through Pattern</h3><p>方案是由某种第三方服务提供，但是这样的服务很少</p><h3 id="write-behind-caching-pattern-写回" tabindex="-1"><a class="header-anchor" href="#write-behind-caching-pattern-写回" aria-hidden="true">#</a> Write Behind Caching Pattern 写回</h3><p>调用者只操作缓存，由其他线程异步的将缓存数据持久化道数据库，保证最终一致性</p><p>一致性和可靠性都存在一定的问题</p>',16),h=[r];function n(l,c){return e(),a("div",null,h)}const o=t(i,[["render",n],["__file","consistency-update-strategy.html.vue"]]);export{o as default};