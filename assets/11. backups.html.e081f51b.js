import{_ as a}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as e,c as r,f as c}from"./app.b6c2567d.js";const p={},t=c('<p>备份：</p><ul><li>全量备份：所有的都备份</li><li>增量备份：只备份修改了的</li></ul><h3 id="tar-cmd" tabindex="-1"><a class="header-anchor" href="#tar-cmd" aria-hidden="true">#</a> tar CMD</h3><p>tar -cf 压缩</p><p>tar -xf 解压</p><h3 id="cpio-cmd" tabindex="-1"><a class="header-anchor" href="#cpio-cmd" aria-hidden="true">#</a> cpio CMD</h3><p>tar遇到错误会直接崩溃，后面就都不解压了</p><p>cpio会继续往后解压，能解压一个是一个</p><p>i</p><p>-m: 可以保留文件原本的创建时间</p><h3 id="增量备份" tabindex="-1"><a class="header-anchor" href="#增量备份" aria-hidden="true">#</a> 增量备份</h3><p>tar和cpio做增量备份</p><p>dump</p><p>Bacula：分布式的集群中，做一个备份</p><p>storage daemon</p>',15),i=[t];function d(o,h){return e(),r("div",null,i)}const l=a(p,[["render",d],["__file","11. backups.html.vue"]]);export{l as default};
