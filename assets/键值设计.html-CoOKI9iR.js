import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as l,d as t,o as a}from"./app-CrF8c6p-.js";const p={};function n(s,e){return a(),l("div",null,e[0]||(e[0]=[t('<h1 id="键值设计" tabindex="-1"><a class="header-anchor" href="#键值设计"><span>键值设计</span></a></h1><h2 id="优雅的key结构" tabindex="-1"><a class="header-anchor" href="#优雅的key结构"><span>优雅的key结构</span></a></h2><p>Redis的Key虽然可以自定义，但最好遵循下面的几个最佳实践约定：</p><ul><li>遵循基本格式：[业务名称]：[数据名]：[id]</li><li>长度不超过44字节</li><li>不包含特殊字符</li></ul><p>例如：我们的登录业务，保存用户信息，其key是这样的：</p><p>优点：</p><ul><li><p>可读性强</p></li><li><p>避免key冲突</p></li><li><p>方便管理</p></li><li><p>节省内存</p><p>key是string类型，底层编码包含：int、embstr和raw三种。</p><p>在小于44字节时，是embstr编码，采用连续内存空间，内存占用更小（减少内存碎片）</p><p>（可用通过<code>object encoding xxx</code>查看编码方式）</p></li></ul><h2 id="big-key" tabindex="-1"><a class="header-anchor" href="#big-key"><span>Big Key</span></a></h2><h3 id="内存占用" tabindex="-1"><a class="header-anchor" href="#内存占用"><span>内存占用</span></a></h3><p><code>memory usage xxx</code></p><p>这个实际不推荐使用，占用cpu高，但是求出来的是精确值，包括数据结构加在一起的内存占用。</p><p>推荐使用估算方法：</p><ul><li><code>strlen xxx</code>，查看这个元素值的字符串长度</li><li><code>llen</code>，查看集合元素数量</li></ul><h3 id="危害" tabindex="-1"><a class="header-anchor" href="#危害"><span>危害</span></a></h3><ul><li><p>网络阻塞</p></li><li><p>数据倾斜</p></li><li><p>Redis阻塞</p><p>对元素较多的hash、list、zset等做运算会耗时较长，使主线程阻塞</p></li><li><p>CPU压力</p></li></ul><h2 id="恰当的数据类型" tabindex="-1"><a class="header-anchor" href="#恰当的数据类型"><span>恰当的数据类型</span></a></h2><h3 id="存储一个对象" tabindex="-1"><a class="header-anchor" href="#存储一个对象"><span>存储一个对象</span></a></h3><p>方式一：json字符串</p><p>优点：实现简单粗暴</p><p>缺点：数据耦合，不够灵活（改一个字段的值，需要把整个json都修改掉）</p><p>方式二：字段打散</p><p>优点：可以灵活访问对象任意字段</p><p>缺点：</p><ol><li>占用空间大（每存一个键值对，都需要很多元数据，额外的内存占用）</li><li>没法做统一控制</li></ol><p>方式三：hash 👍</p><p>优点：底层使用zipList,空间占用小，可以灵活访问对象的任意字段</p><p>缺点：代码相对复杂（不过只要有工具类就也好实现）</p><h3 id="存取大量键值对" tabindex="-1"><a class="header-anchor" href="#存取大量键值对"><span>存取大量键值对</span></a></h3><p>如，存 100 万对field和value，field是自增的id</p><p>hash的entry数量超过500时，会使用哈希表而不是ZipList/listpack，内存占用较多。</p><p>可以分组打包，每 500 个一组</p>',31)]))}const o=i(p,[["render",n],["__file","键值设计.html.vue"]]),c=JSON.parse(`{"path":"/cs/database/redis/practice/best/%E9%94%AE%E5%80%BC%E8%AE%BE%E8%AE%A1.html","title":"键值设计","lang":"en-US","frontmatter":{"description":"键值设计 优雅的key结构 Redis的Key虽然可以自定义，但最好遵循下面的几个最佳实践约定： 遵循基本格式：[业务名称]：[数据名]：[id] 长度不超过44字节 不包含特殊字符 例如：我们的登录业务，保存用户信息，其key是这样的： 优点： 可读性强 避免key冲突 方便管理 节省内存 key是string类型，底层编码包含：int、embstr...","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/cs/database/redis/practice/best/%E9%94%AE%E5%80%BC%E8%AE%BE%E8%AE%A1.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"键值设计"}],["meta",{"property":"og:description","content":"键值设计 优雅的key结构 Redis的Key虽然可以自定义，但最好遵循下面的几个最佳实践约定： 遵循基本格式：[业务名称]：[数据名]：[id] 长度不超过44字节 不包含特殊字符 例如：我们的登录业务，保存用户信息，其key是这样的： 优点： 可读性强 避免key冲突 方便管理 节省内存 key是string类型，底层编码包含：int、embstr..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-06-27T01:21:47.000Z"}],["meta",{"property":"article:modified_time","content":"2024-06-27T01:21:47.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"键值设计\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-06-27T01:21:47.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[{"level":2,"title":"优雅的key结构","slug":"优雅的key结构","link":"#优雅的key结构","children":[]},{"level":2,"title":"Big Key","slug":"big-key","link":"#big-key","children":[{"level":3,"title":"内存占用","slug":"内存占用","link":"#内存占用","children":[]},{"level":3,"title":"危害","slug":"危害","link":"#危害","children":[]}]},{"level":2,"title":"恰当的数据类型","slug":"恰当的数据类型","link":"#恰当的数据类型","children":[{"level":3,"title":"存储一个对象","slug":"存储一个对象","link":"#存储一个对象","children":[]},{"level":3,"title":"存取大量键值对","slug":"存取大量键值对","link":"#存取大量键值对","children":[]}]}],"git":{"createdTime":1677504602000,"updatedTime":1719451307000,"contributors":[{"name":"刘大维","email":"davidliu@liudaweideMacBook-Pro.local","commits":3},{"name":"davidliuk","email":"l729641074@163.com","commits":1}]},"readingTime":{"minutes":1.69,"words":506},"filePathRelative":"cs/database/redis/practice/best/键值设计.md","localizedDate":"February 27, 2023","excerpt":"\\n<h2>优雅的key结构</h2>\\n<p>Redis的Key虽然可以自定义，但最好遵循下面的几个最佳实践约定：</p>\\n<ul>\\n<li>遵循基本格式：[业务名称]：[数据名]：[id]</li>\\n<li>长度不超过44字节</li>\\n<li>不包含特殊字符</li>\\n</ul>\\n<p>例如：我们的登录业务，保存用户信息，其key是这样的：</p>\\n<p>优点：</p>\\n<ul>\\n<li>\\n<p>可读性强</p>\\n</li>\\n<li>\\n<p>避免key冲突</p>\\n</li>\\n<li>\\n<p>方便管理</p>\\n</li>\\n<li>\\n<p>节省内存</p>\\n<p>key是string类型，底层编码包含：int、embstr和raw三种。</p>\\n<p>在小于44字节时，是embstr编码，采用连续内存空间，内存占用更小（减少内存碎片）</p>\\n<p>（可用通过<code>object encoding xxx</code>查看编码方式）</p>\\n</li>\\n</ul>","autoDesc":true}`);export{o as comp,c as data};
