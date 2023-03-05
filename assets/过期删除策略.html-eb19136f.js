import{_ as e,V as l,W as i,a0 as a}from"./framework-705b829b.js";const t={},r=a('<h1 id="过期删除策略" tabindex="-1"><a class="header-anchor" href="#过期删除策略" aria-hidden="true">#</a> 过期删除策略</h1><ul><li>惰性删除；</li><li>定期删除；</li></ul><h2 id="惰性删除" tabindex="-1"><a class="header-anchor" href="#惰性删除" aria-hidden="true">#</a> 惰性删除</h2><p>惰性删除策略的做法是，<strong>不主动删除过期键，每次从数据库访问 key 时，都检测 key 是否过期，如果过期则删除该 key。</strong></p><p>惰性删除策略的<strong>优点</strong>：</p><ul><li>因为每次访问时，才会检查 key 是否过期，所以此策略只会使用很少的系统资源，因此，惰性删除策略对 CPU 时间最友好。</li></ul><p>惰性删除策略的<strong>缺点</strong>：</p><ul><li>如果一个 key 已经过期，而这个 key 又仍然保留在数据库中，那么只要这个过期 key 一直没有被访问，它所占用的内存就不会释放，造成了一定的内存空间浪费。所以，惰性删除策略对内存不友好。</li></ul><h2 id="定期删除" tabindex="-1"><a class="header-anchor" href="#定期删除" aria-hidden="true">#</a> 定期删除</h2><p>定期删除策略的<strong>优点</strong>：</p><ul><li>通过限制删除操作执行的时长和频率，来减少删除操作对 CPU 的影响，同时也能删除一部分过期的数据减少了过期键对空间的无效占用。</li></ul><p>定期删除策略的<strong>缺点</strong>：</p><ul><li>内存清理方面没有定时删除效果好，同时没有惰性删除使用的系统资源少。</li><li>难以确定删除操作执行的时长和频率。如果执行的太频繁，定期删除策略变得和定时删除策略一样，对CPU不友好；如果执行的太少，那又和惰性删除一样了，过期 key 占用的内存不会及时得到释放。</li></ul><p>定期删除的流程：</p><ol><li>从过期字典中随机抽取 20 个 key；</li><li>检查这 20 个 key 是否过期，并删除已过期的 key；</li><li>如果本轮检查的已过期 key 的数量，超过 5 个（20/4），也就是「已过期 key 的数量」占比「随机抽取 key 的数量」大于 25%，则继续重复步骤 1；如果已过期的 key 比例小于 25%，则停止继续删除过期 key，然后等待下一轮再检查。</li></ol><p>那 Redis 为了保证定期删除不会出现循环过度，导致线程卡死现象，为此增加了定期删除循环流程的时间上限，默认不会超过 25ms。</p><p><img src="https://cdn.jsdelivr.net/gh/davidliuk/images@master/blog/定时删除流程-20230302090521384.jpg" alt="img" loading="lazy"></p>',17),s=[r];function n(o,d){return l(),i("div",null,s)}const c=e(t,[["render",n],["__file","过期删除策略.html.vue"]]);export{c as default};
