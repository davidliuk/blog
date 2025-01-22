import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as o,d as a,o as i}from"./app-ktFCNIob.js";const r={};function s(y,e){return i(),o("div",null,e[0]||(e[0]=[a('<h1 id="hot-key" tabindex="-1"><a class="header-anchor" href="#hot-key"><span>Hot Key</span></a></h1><p>如果一个 key 的访问次数比较多且明显多于其他 key 的话，那这个 key 就可以看作是 <strong>hotkey（热 Key）</strong>。例如在 Redis 实例的每秒处理请求达到 5000 次，而其中某个 key 的每秒访问量就高达 2000 次，那这个 key 就可以看作是 hotkey。</p><h4 id="情况" tabindex="-1"><a class="header-anchor" href="#情况"><span>情况</span></a></h4><p>处理 hotkey 会占用大量的 CPU 和带宽，可能会影响 Redis 实例对其他请求的正常处理。此外，如果突然访问 hotkey 的请求超出了 Redis 的处理能力，Redis 就会直接宕机。这种情况下，大量请求将落到后面的数据库上，可能会导致数据库崩溃。</p><p>因此，hotkey 很可能成为系统性能的瓶颈点，需要单独对其进行优化，以确保系统的高可用性和稳定性。</p><p>解决方案</p><p>hotkey 的常见处理以及优化办法如下（这些方法可以配合起来使用）：</p><ul><li><strong>读写分离</strong>：主节点处理写请求，从节点处理读请求。</li><li><strong>使用 Redis Cluster</strong>：将热点数据分散存储在多个 Redis 节点上。</li><li><strong>二级缓存</strong>：hotkey 采用二级缓存的方式进行处理，将 hotkey 存放一份到 JVM 本地内存中（可以用 Caffeine）。</li></ul><p>除了这些方法之外，如果你使用的公有云的 Redis 服务话，还可以留意其提供的开箱即用的解决方案。</p><p>这里以阿里云 Redis 为例说明，它支持通过代理查询缓存功能（Proxy Query Cache）优化热点 Key 问题。</p>',10)]))}const d=t(r,[["render",s],["__file","hotkey.html.vue"]]),c=JSON.parse(`{"path":"/cs/database/redis/practice/problem/hotkey.html","title":"Hot Key","lang":"en-US","frontmatter":{"description":"Hot Key 如果一个 key 的访问次数比较多且明显多于其他 key 的话，那这个 key 就可以看作是 hotkey（热 Key）。例如在 Redis 实例的每秒处理请求达到 5000 次，而其中某个 key 的每秒访问量就高达 2000 次，那这个 key 就可以看作是 hotkey。 情况 处理 hotkey 会占用大量的 CPU 和带宽，可...","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/cs/database/redis/practice/problem/hotkey.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"Hot Key"}],["meta",{"property":"og:description","content":"Hot Key 如果一个 key 的访问次数比较多且明显多于其他 key 的话，那这个 key 就可以看作是 hotkey（热 Key）。例如在 Redis 实例的每秒处理请求达到 5000 次，而其中某个 key 的每秒访问量就高达 2000 次，那这个 key 就可以看作是 hotkey。 情况 处理 hotkey 会占用大量的 CPU 和带宽，可..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-06-27T01:21:47.000Z"}],["meta",{"property":"article:modified_time","content":"2024-06-27T01:21:47.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Hot Key\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-06-27T01:21:47.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[],"git":{"createdTime":1715153702000,"updatedTime":1719451307000,"contributors":[{"name":"刘大维","email":"davidliu@liudaweideMacBook-Pro.local","commits":2}]},"readingTime":{"minutes":1.31,"words":392},"filePathRelative":"cs/database/redis/practice/problem/hotkey.md","localizedDate":"May 8, 2024","excerpt":"\\n<p>如果一个 key 的访问次数比较多且明显多于其他 key 的话，那这个 key 就可以看作是 <strong>hotkey（热 Key）</strong>。例如在 Redis 实例的每秒处理请求达到 5000 次，而其中某个 key 的每秒访问量就高达 2000 次，那这个 key 就可以看作是 hotkey。</p>\\n<h4>情况</h4>\\n<p>处理 hotkey 会占用大量的 CPU 和带宽，可能会影响 Redis 实例对其他请求的正常处理。此外，如果突然访问 hotkey 的请求超出了 Redis 的处理能力，Redis 就会直接宕机。这种情况下，大量请求将落到后面的数据库上，可能会导致数据库崩溃。</p>","autoDesc":true}`);export{d as comp,c as data};
