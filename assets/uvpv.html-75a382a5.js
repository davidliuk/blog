import{_ as e,V as a,W as r,a0 as h}from"./framework-705b829b.js";const i={},d=h('<h1 id="uv" tabindex="-1"><a class="header-anchor" href="#uv" aria-hidden="true">#</a> UV</h1><h3 id="uv-pv概念" tabindex="-1"><a class="header-anchor" href="#uv-pv概念" aria-hidden="true">#</a> UV/PV概念</h3><ul><li>UV：全称Unique Visitor,也叫独立访客量，是指通过互联网访问、浏览这个网页的自然人。1天内同一个用户多次访问该网站，只记录1次。</li><li>PV：全称Page View,也叫页面访问量或点击量，用户每访问网站的一个页面，记录1次PV,用户多次打开页面，则记录多次PV。往往用来衡量网站的流量。</li></ul><h3 id="hyperloglog" tabindex="-1"><a class="header-anchor" href="#hyperloglog" aria-hidden="true">#</a> HyperLogLog</h3><p>基于LogLog派生的概率算法，用于确定非常大的集合的基数，而不需要存储其所有值。</p><p>相同元素进去永远只有一次</p><p>单个HLL的内存永远小于16kb，误差0.81%，1w人误差也就80人，不影响</p><h3 id="操作" tabindex="-1"><a class="header-anchor" href="#操作" aria-hidden="true">#</a> 操作</h3><p>PFADD，加入一个元素（重复则不会改变原有内容）</p><p>PFCOUNT，返回目前所有的元素数量</p><p>PFMERGE，可以把多个HLL合并，如想计算一个月/年的UV，可以合并这个月每天的HLL，而且非常节省内存</p><h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h2>',12),t=[d];function n(o,c){return a(),r("div",null,t)}const l=e(i,[["render",n],["__file","uvpv.html.vue"]]);export{l as default};
