import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as o,d as a,o as i}from"./app-DIqbhby7.js";const p={};function r(n,t){return i(),o("div",null,t[0]||(t[0]=[a('<h1 id="_9-disk-quota-磁盘配额" tabindex="-1"><a class="header-anchor" href="#_9-disk-quota-磁盘配额"><span>9. Disk Quota 磁盘配额</span></a></h1><p>硬盘满了系统就会崩掉</p><p>硬盘满了，普通用户登录都登录不了，不过 root 可以登录，因为系统会为 root 预留一定的硬盘空间</p><p>系统资源：</p><ul><li><p>i 节点数量</p><ul><li></li></ul></li></ul><p>soft quota 到了这个阈值就提示一下</p><p>hard quota 到了就不能再用了</p><p>数据库</p><p>usrquota，grpquota</p><p>etc /etc/fstab</p><p>setenforce 安全</p><p>好，但是影响性能</p><p>开启 quota 权限：quotaon</p><h3 id="edit" tabindex="-1"><a class="header-anchor" href="#edit"><span>Edit</span></a></h3><p>他有一个数据库，非纯文本，不过可以通过 edquota 指令打开去编辑</p><p>edquota 临时操作的时候 ok，但是一般是用 setquota 指令，这样可以写到脚本里面</p><h3 id="check" tabindex="-1"><a class="header-anchor" href="#check"><span>Check</span></a></h3><p>quota</p><p>repquota</p>',19)]))}const c=e(p,[["render",r],["__file","9. Disk Quota.html.vue"]]),l=JSON.parse(`{"path":"/se/devops/unix/basic/9.%20Disk%20Quota.html","title":"9. Disk Quota 磁盘配额","lang":"en-US","frontmatter":{"description":"9. Disk Quota 磁盘配额 硬盘满了系统就会崩掉 硬盘满了，普通用户登录都登录不了，不过 root 可以登录，因为系统会为 root 预留一定的硬盘空间 系统资源： i 节点数量 soft quota 到了这个阈值就提示一下 hard quota 到了就不能再用了 数据库 usrquota，grpquota etc /etc/fstab se...","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/se/devops/unix/basic/9.%20Disk%20Quota.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"9. Disk Quota 磁盘配额"}],["meta",{"property":"og:description","content":"9. Disk Quota 磁盘配额 硬盘满了系统就会崩掉 硬盘满了，普通用户登录都登录不了，不过 root 可以登录，因为系统会为 root 预留一定的硬盘空间 系统资源： i 节点数量 soft quota 到了这个阈值就提示一下 hard quota 到了就不能再用了 数据库 usrquota，grpquota etc /etc/fstab se..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-05-08T07:35:02.000Z"}],["meta",{"property":"article:modified_time","content":"2024-05-08T07:35:02.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"9. Disk Quota 磁盘配额\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-08T07:35:02.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[{"level":3,"title":"Edit","slug":"edit","link":"#edit","children":[]},{"level":3,"title":"Check","slug":"check","link":"#check","children":[]}],"git":{"createdTime":1669446166000,"updatedTime":1715153702000,"contributors":[{"name":"liudawei47","email":"liudawei47@jd.com","commits":3},{"name":"刘大维","email":"davidliu@liudaweideMacBook-Pro.local","commits":2}]},"readingTime":{"minutes":0.56,"words":167},"filePathRelative":"se/devops/unix/basic/9. Disk Quota.md","localizedDate":"November 26, 2022","excerpt":"\\n<p>硬盘满了系统就会崩掉</p>\\n<p>硬盘满了，普通用户登录都登录不了，不过 root 可以登录，因为系统会为 root 预留一定的硬盘空间</p>\\n<p>系统资源：</p>\\n<ul>\\n<li>\\n<p>i 节点数量</p>\\n<ul>\\n<li></li>\\n</ul>\\n</li>\\n</ul>\\n<p>soft quota 到了这个阈值就提示一下</p>\\n<p>hard quota 到了就不能再用了</p>\\n<p>数据库</p>\\n<p>usrquota，grpquota</p>\\n<p>etc /etc/fstab</p>\\n<p>setenforce 安全</p>\\n<p>好，但是影响性能</p>\\n","autoDesc":true}`);export{c as comp,l as data};
