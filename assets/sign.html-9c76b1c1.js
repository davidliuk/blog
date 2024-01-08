import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as i,c as p,d as t}from"./app-9107e99b.js";const a={},c=t('<h1 id="签到" tabindex="-1"><a class="header-anchor" href="#签到" aria-hidden="true">#</a> 签到</h1><h2 id="bitmap-用法" tabindex="-1"><a class="header-anchor" href="#bitmap-用法" aria-hidden="true">#</a> BitMap 用法</h2><p>必要性：签到如果存在数据库表中，耗费内存，数据库压力大</p><p>每一个 bit 位对应当月的每一天，形成映射变细。用 0 和 1 标示业务状态。这种思路就称为位图（BitMap），这样一个月只需要 31 位，2 个字节</p><p>布隆过滤器底层是 BitMap</p><p>Redis 中 String 底层就是 BitMap，因此最大上限是 512M，2^32 个 bit 位</p><p>默认就是 0，故只有要设为 1 的才需要 set</p><ul><li><p><code>SETBIT</code></p></li><li><p><code>GETBIT</code></p></li><li><p><code>BITCOUNT</code></p></li><li><p><code>BITFIELD</code></p></li></ul><p>后面的不太常用了</p><ul><li><p><code>BITFIELD_RO</code></p></li><li><p><code>BITOP</code></p></li><li><p><code>BITPOS</code></p></li></ul><p>Spring 里面，封装在 ValueOperations 里面了，和 string 封装在了一起</p>',11),o=[c];function d(l,r){return i(),p("div",null,o)}const h=e(a,[["render",d],["__file","sign.html.vue"]]);export{h as default};
