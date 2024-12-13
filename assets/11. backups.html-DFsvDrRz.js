import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,d as p,o as i}from"./app-DIqbhby7.js";const o={};function r(c,e){return i(),a("div",null,e[0]||(e[0]=[p('<h1 id="_11-备份" tabindex="-1"><a class="header-anchor" href="#_11-备份"><span>11. 备份</span></a></h1><p>备份的分类：</p><ul><li>全量备份：所有的都备份</li><li>增量备份：只备份修改了的</li></ul><h3 id="tar-cmd" tabindex="-1"><a class="header-anchor" href="#tar-cmd"><span>tar CMD</span></a></h3><p>tar -cf 压缩</p><p>tar -xf 解压</p><h3 id="cpio-cmd" tabindex="-1"><a class="header-anchor" href="#cpio-cmd"><span>cpio CMD</span></a></h3><p>tar 遇到错误会直接崩溃，后面就都不解压了</p><p>cpio 会继续往后解压，能解压一个是一个</p><p>i</p><p>-m: 可以保留文件原本的创建时间</p><h3 id="增量备份" tabindex="-1"><a class="header-anchor" href="#增量备份"><span>增量备份</span></a></h3><p>tar 和 cpio 做增量备份</p><p>dump</p><p>Bacula：分布式的集群中，做一个备份</p><p>storage daemon</p>',16)]))}const d=t(o,[["render",r],["__file","11. backups.html.vue"]]),s=JSON.parse(`{"path":"/se/devops/unix/basic/11.%20backups.html","title":"11. 备份","lang":"en-US","frontmatter":{"description":"11. 备份 备份的分类： 全量备份：所有的都备份 增量备份：只备份修改了的 tar CMD tar -cf 压缩 tar -xf 解压 cpio CMD tar 遇到错误会直接崩溃，后面就都不解压了 cpio 会继续往后解压，能解压一个是一个 i -m: 可以保留文件原本的创建时间 增量备份 tar 和 cpio 做增量备份 dump Bacula：...","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/se/devops/unix/basic/11.%20backups.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"11. 备份"}],["meta",{"property":"og:description","content":"11. 备份 备份的分类： 全量备份：所有的都备份 增量备份：只备份修改了的 tar CMD tar -cf 压缩 tar -xf 解压 cpio CMD tar 遇到错误会直接崩溃，后面就都不解压了 cpio 会继续往后解压，能解压一个是一个 i -m: 可以保留文件原本的创建时间 增量备份 tar 和 cpio 做增量备份 dump Bacula：..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-08-21T10:17:45.000Z"}],["meta",{"property":"article:modified_time","content":"2023-08-21T10:17:45.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"11. 备份\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-08-21T10:17:45.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[{"level":3,"title":"tar CMD","slug":"tar-cmd","link":"#tar-cmd","children":[]},{"level":3,"title":"cpio CMD","slug":"cpio-cmd","link":"#cpio-cmd","children":[]},{"level":3,"title":"增量备份","slug":"增量备份","link":"#增量备份","children":[]}],"git":{"createdTime":1669446166000,"updatedTime":1692613065000,"contributors":[{"name":"liudawei47","email":"liudawei47@jd.com","commits":3},{"name":"刘大维","email":"davidliu@liudaweideMacBook-Pro.local","commits":1}]},"readingTime":{"minutes":0.39,"words":118},"filePathRelative":"se/devops/unix/basic/11. backups.md","localizedDate":"November 26, 2022","excerpt":"\\n<p>备份的分类：</p>\\n<ul>\\n<li>全量备份：所有的都备份</li>\\n<li>增量备份：只备份修改了的</li>\\n</ul>\\n<h3>tar CMD</h3>\\n<p>tar -cf 压缩</p>\\n<p>tar -xf 解压</p>\\n<h3>cpio CMD</h3>\\n<p>tar 遇到错误会直接崩溃，后面就都不解压了</p>\\n<p>cpio 会继续往后解压，能解压一个是一个</p>\\n<p>i</p>\\n<p>-m: 可以保留文件原本的创建时间</p>\\n<h3>增量备份</h3>\\n<p>tar 和 cpio 做增量备份</p>\\n<p>dump</p>\\n<p>Bacula：分布式的集群中，做一个备份</p>","autoDesc":true}`);export{d as comp,s as data};
