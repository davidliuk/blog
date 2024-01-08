import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o,c,d as i}from"./app-9107e99b.js";const d={},r=i('<h1 id="sorted-set" tabindex="-1"><a class="header-anchor" href="#sorted-set" aria-hidden="true">#</a> Sorted Set</h1><p>类似 Java TreeSet，都排序了，不过 Java 是红黑树实现的，这里的是跳表+Hash</p><p>每一个元素带有一个 score</p><p>特性：</p><ul><li>可排序</li><li>元素不重复</li><li>查询速度快</li></ul><p>因为 SortedSet 的可排序特征，经常被用来实现排行榜这样的功能。</p><h2 id="常见命令" tabindex="-1"><a class="header-anchor" href="#常见命令" aria-hidden="true">#</a> 常见命令</h2><ul><li><p><code>zadd</code> 增</p></li><li><p><code>zrem</code> 删</p></li><li><p><code>zscore</code> 获取指定元素的 score 值</p></li><li><p><code>zrank</code> 获取指定元素的排名</p></li><li><p><code>zcard</code> 获取元素个数</p></li><li><p><code>zcount</code> 指定范围内元素个数</p></li><li><p><code>zincrby</code> 让指定元素的分值自增</p></li><li><p><code>zrange</code> key min max 按照 score 升序排序后，获取指定排名范围内的元素</p></li><li><p><code>zrevrange</code> key min max 按照 score 降序排序后，获取指定排名范围内的元素</p></li><li><p><code>zrangebyscore</code> key min max 按照 score 排序后，获取指定 score 范围内的元素</p></li><li><p><code>zdiff</code> , zinter, zunion 求差集、交集、并集</p></li></ul>',8),l=[r];function a(t,p){return o(),c("div",null,l)}const h=e(d,[["render",a],["__file","sorted-set.html.vue"]]);export{h as default};
