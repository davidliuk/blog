import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as i,d as l,o as t}from"./app-D4ZvIHfO.js";const r={};function n(p,e){return t(),i("div",null,e[0]||(e[0]=[l('<h1 id="系统设计" tabindex="-1"><a class="header-anchor" href="#系统设计"><span>系统设计</span></a></h1><p>Scalability, Tradeoff</p><details class="hint-container details"><summary>参考文档</summary><p><a href="http://wsfdl.com/categories.html" target="_blank" rel="noopener noreferrer">koala bear 博客</a></p><p>DDIA</p></details><ul><li>scalability</li><li>availability</li><li>reliability</li><li>performance</li></ul><h3 id="tradeoff" tabindex="-1"><a class="header-anchor" href="#tradeoff"><span>Tradeoff</span></a></h3><p><strong>Tradeoff</strong> 是什么：权衡，面试官最看重</p><p>什么叫 SOA</p><p>RESTful vs RPC</p><p>什么是 Pull Model 和什么是 Push Model</p><p>数据存储系统有哪些，什么样的数据适合存在什么样的数据存储系统中</p><p>什么是异步任务和消息队列 (Message Queue)<br> 什么是数据的可持久化 (Persistent)</p><p>什么是去标准化 (Denormalize)<br> 什么是惊群效应 (Thundering Herd)<br> 有哪些与 News Feed 类似的系统设计问题?</p><h3 id="问题" tabindex="-1"><a class="header-anchor" href="#问题"><span>问题</span></a></h3><p>设计 xx 系统</p><p>设计 xx 系统中的 xx 功能</p><p>访问限制系统：memcached</p><p>设计统计某事件历史发生次数：监控设计</p><h3 id="ood-vs-sd" tabindex="-1"><a class="header-anchor" href="#ood-vs-sd"><span>OOD vs SD</span></a></h3><p>OOD 是微观设计，手把手 Coding</p><blockquote><p>游戏设计、电梯设计就是 OOD</p></blockquote><p>SD 是高屋建瓴宏观的设计：Backend design，数据库如何设计、xxx</p><h3 id="评分标准" tabindex="-1"><a class="header-anchor" href="#评分标准"><span>评分标准</span></a></h3><ul><li>可行解 Work Solution 25%</li><li>特定问题 Special Case 20%</li><li>分析能力 Analysis 25%</li><li>权衡 Tradeoff 15%</li><li>知识储备 Knowledge Base 15%</li></ul><h2 id="分析法-4s" tabindex="-1"><a class="header-anchor" href="#分析法-4s"><span>分析法 4S</span></a></h2><ul><li><p>Scenario 场景</p><p>需要设计哪些功能，设计得多牛</p><ul><li>Ask/ Features/ QPS/ DAU/ Interfaces</li></ul></li><li><p>Service 服务</p><p>将大系统拆分为小服务</p><ul><li>Split/ application/ module</li></ul></li><li><p>Storage 存储</p><p>数据如何存储与访问</p><ul><li>Schema/ Data/ SQL/ NoSQL/ File System</li></ul></li><li><p>Scale 升级</p><p>解决缺陷，处理可能遇到的问题</p><ul><li>Sharding/ Optimize/ Special Case</li></ul></li></ul><h3 id="scenario-场景" tabindex="-1"><a class="header-anchor" href="#scenario-场景"><span>Scenario 场景</span></a></h3><p>问面试官 Scenario</p><p>推特系统中，最核心的是新鲜事系统</p><p>pull 模型、慢，用的时候现查</p><h3 id="storage-存储" tabindex="-1"><a class="header-anchor" href="#storage-存储"><span>Storage 存储</span></a></h3><h2 id="常见问题" tabindex="-1"><a class="header-anchor" href="#常见问题"><span>常见问题</span></a></h2><p>设计推特</p><p>设计滴滴</p><p>设计短链</p><hr><p><strong>软件开发的三高指标：高并发、高性能、高可用。</strong></p><p>高并发方面要求 QPS 大于 10万；</p><p>高性能方面要求请求延迟小于 100 ms；</p><p>高可用方面要高于 99.99%(4个9)</p><p><strong>高并发（High Concurrency）</strong>：高并发指的是系统能够同时处理大量的用户请求或操作。在高并发环境下，系统需要有效地管理资源，如线程和数据库连接，以便同时服务于大量用户或执行大量任务，而不会降低性能或导致服务中断。</p><p><strong>高可用（High Availability）</strong>：高可用性指的是系统能够持续不断地为用户提供服务，即使面临部分故障或维护操作。这通常通过冗余设计（如多服务器、负载均衡、故障转移等）实现，确保系统的关键部分在任何时候都有一个备份可以接管工作。</p><p><strong>高性能（High Performance）</strong>：高性能涉及到系统响应用户请求的速度和处理数据的能力。这不仅包括快速响应用户的交互请求，还包括在后端处理大量数据时的效率。提升性能通常涉及到优化代码、使用高效的算法、以及合理地利用硬件资源。</p><hr><p>代码复杂度：圈复杂度(Cyclomatic complexity)</p><hr><p>非常肝的人，一周1000行</p><p>一般的人一天50行代码</p><p>80%复用以前的代码，没有提升；20%新的有提升的</p><p>junior-&gt;senior: 3-5yoe</p><p>10000行代码5000行test，每一行代码都需要unit test测试</p><p>test coverage（每行都覆盖到，90%上）</p><hr><p>git分支管理 <a href="https://juejin.cn/post/7352075703859150899" target="_blank" rel="noopener noreferrer">https://juejin.cn/post/7352075703859150899</a></p>',53)]))}const d=a(r,[["render",n],["__file","index.html.vue"]]),c=JSON.parse(`{"path":"/se/design/system/","title":"系统设计","lang":"en-US","frontmatter":{"description":"系统设计 Scalability, Tradeoff 参考文档 koala bear 博客 DDIA scalability availability reliability performance Tradeoff Tradeoff 是什么：权衡，面试官最看重 什么叫 SOA RESTful vs RPC 什么是 Pull Model 和什么是 Pu...","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/se/design/system/"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"系统设计"}],["meta",{"property":"og:description","content":"系统设计 Scalability, Tradeoff 参考文档 koala bear 博客 DDIA scalability availability reliability performance Tradeoff Tradeoff 是什么：权衡，面试官最看重 什么叫 SOA RESTful vs RPC 什么是 Pull Model 和什么是 Pu..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-11-22T03:15:57.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-22T03:15:57.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"系统设计\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-22T03:15:57.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[{"level":3,"title":"Tradeoff","slug":"tradeoff","link":"#tradeoff","children":[]},{"level":3,"title":"问题","slug":"问题","link":"#问题","children":[]},{"level":3,"title":"OOD vs SD","slug":"ood-vs-sd","link":"#ood-vs-sd","children":[]},{"level":3,"title":"评分标准","slug":"评分标准","link":"#评分标准","children":[]},{"level":2,"title":"分析法 4S","slug":"分析法-4s","link":"#分析法-4s","children":[{"level":3,"title":"Scenario 场景","slug":"scenario-场景","link":"#scenario-场景","children":[]},{"level":3,"title":"Storage 存储","slug":"storage-存储","link":"#storage-存储","children":[]}]},{"level":2,"title":"常见问题","slug":"常见问题","link":"#常见问题","children":[]}],"git":{"createdTime":1715153702000,"updatedTime":1732245357000,"contributors":[{"name":"David Liu","email":"liudawei@seas.upenn.edu","commits":1},{"name":"刘大维","email":"davidliu@liudaweideMacBook-Pro.local","commits":1}]},"readingTime":{"minutes":2.7,"words":810},"filePathRelative":"se/design/system/README.md","localizedDate":"May 8, 2024","excerpt":"\\n<p>Scalability, Tradeoff</p>\\n<details class=\\"hint-container details\\"><summary>参考文档</summary>\\n<p><a href=\\"http://wsfdl.com/categories.html\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">koala bear 博客</a></p>\\n<p>DDIA</p>\\n</details>\\n<ul>\\n<li>scalability</li>\\n<li>availability</li>\\n<li>reliability</li>\\n<li>performance</li>\\n</ul>","autoDesc":true}`);export{d as comp,c as data};
