import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as i,d as r,o as n}from"./app-ktFCNIob.js";const t={};function l(s,e){return n(),i("div",null,e[0]||(e[0]=[r('<h1 id="扩展-scaling" tabindex="-1"><a class="header-anchor" href="#扩展-scaling"><span>扩展 Scaling</span></a></h1><p>Interviewer: How to scale?</p><p>当访问量越来越大以后，如何让你的系统 Scale?</p><p>How to scale system ≈ How to scale database</p><h2 id="拆分-sharding" tabindex="-1"><a class="header-anchor" href="#拆分-sharding"><span>拆分 Sharding</span></a></h2><p>数据拆分 Sharding</p><p>纵向拆分 Vertical Sharding</p><p>横向拆分 Horizontal Sharding</p><h3 id="纵向切分-vertical-sharding" tabindex="-1"><a class="header-anchor" href="#纵向切分-vertical-sharding"><span>纵向切分 Vertical Sharding</span></a></h3><p>User Table 放一台数据库 Friendship Table 放一台数据库 Message Table 放一台数据库</p><p>• 比如你的 User Table 里有如下信息</p><p>• email<br> • username<br> • password<br> • nickname // 昵称<br> • avatar // 头像</p><p>• 我们知道 email / username / password 不会经常变动</p><p>• 而 nickname, avatar 相对来说变动频率更高</p><p>• 可以把他们拆分为两个表 User Table 和 UserProfile Table • UserProfile 中用一个 user_id 的 foreign key 指向 User<br> • 然后再分别放在两台机器上<br> • 这样如果 UserProfile Table 挂了，就不影响 User 正常的登陆</p><h3 id="横向拆分-horizontal-sharding" tabindex="-1"><a class="header-anchor" href="#横向拆分-horizontal-sharding"><span>横向拆分 Horizontal Sharding</span></a></h3><h3 id="consistent-hashing" tabindex="-1"><a class="header-anchor" href="#consistent-hashing"><span>Consistent Hashing</span></a></h3><p>缺陷1 数据分布不均匀</p><p>因为算法是“将数据最多的相邻两台机器均匀分为三台”</p><p>比如，3台机器变4台机器时，无法做到4台机器均匀分布</p><p>缺陷2 迁移压力大</p><p>新机器的数据只从两台老机器上获取 导致这两台老机器负载过大</p><p>解决方案：虚拟节点 Virtual Node</p><h3 id="id" tabindex="-1"><a class="header-anchor" href="#id"><span>ID</span></a></h3><p>User Table Sharding 之后，多台数据库无法维护全局的自增<strong>ID</strong>怎么办？</p><p>手动创建一个 UUID 来作为用户的 user_id</p><p>创建用户时还没有用户的 user_id，如何知道该去哪个数据库创建呢?</p><p>• Web Server 负责创建用户的 user_id，如用 UUID 来作为 user_id</p><p>• 创建之后根据 consistent_hash(user_id) 的结果来获得所在的实体数据库信息</p><p>如果 User Table 没有 sharding 之前已经采用了自增ID该怎么办?</p><ul><li>UUID 通常是一个字符串，自增 id 是一个整数，并不兼容</li><li>单独用一个 UserIdService 负责创建用户的 ID，每次有新用户需要创建时，问这个 Service 要一个新的ID。这个 Service 是全局共享的，专门负责创建 UserId。负责记录当前 UserId 的最大值是多少了，然后每次 +1 即可。这个 Service 会负责加锁来保证数据操作的原子性(Atomic)</li><li>因为创建用户不是一个很大的 QPS，因此这个做法问题不大</li></ul><h2 id="复制-replica" tabindex="-1"><a class="header-anchor" href="#复制-replica"><span>复制 Replica</span></a></h2><p>Backup</p><ul><li>一般是周期性的，比如每天晚上进行一次备份</li><li>当数据丢失的时候，通常只能恢复到之前的某个时间点</li><li>Backup 不用作在线的数据服务，不分摊读</li></ul><p>Replica</p><ul><li>是实时的， 在数据写入的时候，就会以复制品的形式存为多份</li><li>当数据丢失的时候，可以马上通过其他的复制品恢复</li><li>Replica 用作在线的数据服务，分摊读</li></ul>',36)]))}const d=a(t,[["render",l],["__file","scaling.html.vue"]]),c=JSON.parse(`{"path":"/se/design/system/availability/scaling.html","title":"扩展 Scaling","lang":"en-US","frontmatter":{"description":"扩展 Scaling Interviewer: How to scale? 当访问量越来越大以后，如何让你的系统 Scale? How to scale system ≈ How to scale database 拆分 Sharding 数据拆分 Sharding 纵向拆分 Vertical Sharding 横向拆分 Horizontal Shar...","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/se/design/system/availability/scaling.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"扩展 Scaling"}],["meta",{"property":"og:description","content":"扩展 Scaling Interviewer: How to scale? 当访问量越来越大以后，如何让你的系统 Scale? How to scale system ≈ How to scale database 拆分 Sharding 数据拆分 Sharding 纵向拆分 Vertical Sharding 横向拆分 Horizontal Shar..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-11-22T03:15:57.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-22T03:15:57.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"扩展 Scaling\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-22T03:15:57.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[{"level":2,"title":"拆分 Sharding","slug":"拆分-sharding","link":"#拆分-sharding","children":[{"level":3,"title":"纵向切分 Vertical Sharding","slug":"纵向切分-vertical-sharding","link":"#纵向切分-vertical-sharding","children":[]},{"level":3,"title":"横向拆分 Horizontal Sharding","slug":"横向拆分-horizontal-sharding","link":"#横向拆分-horizontal-sharding","children":[]},{"level":3,"title":"Consistent Hashing","slug":"consistent-hashing","link":"#consistent-hashing","children":[]},{"level":3,"title":"ID","slug":"id","link":"#id","children":[]}]},{"level":2,"title":"复制 Replica","slug":"复制-replica","link":"#复制-replica","children":[]}],"git":{"createdTime":1719451307000,"updatedTime":1732245357000,"contributors":[{"name":"David Liu","email":"liudawei@seas.upenn.edu","commits":1},{"name":"刘大维","email":"davidliu@liudaweideMacBook-Pro.local","commits":1}]},"readingTime":{"minutes":2.3,"words":689},"filePathRelative":"se/design/system/availability/scaling.md","localizedDate":"June 27, 2024","excerpt":"\\n<p>Interviewer: How to scale?</p>\\n<p>当访问量越来越大以后，如何让你的系统 Scale?</p>\\n<p>How to scale system ≈ How to scale database</p>\\n<h2>拆分 Sharding</h2>\\n<p>数据拆分 Sharding</p>\\n<p>纵向拆分 Vertical Sharding</p>\\n<p>横向拆分 Horizontal Sharding</p>\\n<h3>纵向切分 Vertical Sharding</h3>\\n<p>User Table 放一台数据库 Friendship Table 放一台数据库 Message Table 放一台数据库</p>","autoDesc":true}`);export{d as comp,c as data};
