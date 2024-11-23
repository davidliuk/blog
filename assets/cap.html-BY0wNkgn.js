import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,d as l,o as i}from"./app-CrF8c6p-.js";const n={};function o(s,e){return i(),a("div",null,e[0]||(e[0]=[l('<h1 id="cap" tabindex="-1"><a class="header-anchor" href="#cap"><span>CAP</span></a></h1><p>分布式一致性协议</p><p>一是因为这两个分布式基础理论是学习分布式知识的必备前置基础，二是因为很多面试官自己比较熟悉这两个理论（方便提问）。我们非常有必要将这两个理论搞懂，并且能够用自己的理解给别人讲出来。</p><h2 id="一致性级别" tabindex="-1"><a class="header-anchor" href="#一致性级别"><span>一致性级别</span></a></h2><ul><li><p>强一致性</p><p>保证系统改变提交以后立即改变集群的状态。</p><p>模型：</p><ul><li>Paxos</li><li>Raft（multi-paxos）</li><li>ZAB（multi-paxos）</li></ul></li><li><p>弱一致性</p><p>即最终一致性，系统不保证改变提交以后立即改变集群的状态，但是随着时间的推移最终状态是一致的。</p><p>模型：</p><ul><li>Gossip 协议</li><li>DNS 系统</li></ul></li></ul><blockquote><p><strong>业界比较推崇是最终一致性级别，但是某些对数据一致要求十分严格的场景比如银行转账还是要保证强一致性。</strong></p></blockquote><h2 id="cap-理论" tabindex="-1"><a class="header-anchor" href="#cap-理论"><span>CAP 理论</span></a></h2><p>CAP 理论/定理起源于 2000 年，由加州大学伯克利分校的 Eric Brewer 教授在分布式计算原理研讨会（PODC）上提出，因此 CAP 定理又被称作 布鲁尔定理（Brewer’s theorem）2 年后，麻省理工学院的 Seth Gilbert 和 Nancy Lynch 发表了布鲁尔猜想的证明，CAP 理论正式成为分布式领域的定理。</p><h3 id="简介" tabindex="-1"><a class="header-anchor" href="#简介"><span>简介</span></a></h3><p>Any distributed data store can provide only two of the following three guarantees:</p><p>CAP 定理（CAP theorem）指出对于一个分布式系统来说，当涉及读写操作时，只能同时满足以下三点中的两个：</p><ul><li><strong>一致性（Consistency）</strong>：所有节点访问同一份最新的数据副本</li><li><strong>可用性（Availability）</strong>：非故障的节点在合理的时间内返回合理的响应（不是错误或者超时的响应）。</li><li><strong>分区容错性（Partition Tolerance）</strong>：分布式系统出现网络分区的时候，仍然能够对外提供服务。</li></ul><p><strong>网络分区</strong>：分布式系统中，多个节点之间的网络本来是连通的，但是因为某些故障（比如部分节点宕机或网络出问题）某些节点之间不连通了，整个网络就分成了几块区域。</p><ul><li>取消操作，从而降低可用性，但确保一致性</li><li>继续操作，从而提供可用性，但存在不一致的风险。请注意，这并不一定意味着系统对用户具有高可用性。</li></ul><h3 id="不是-3-选-2" tabindex="-1"><a class="header-anchor" href="#不是-3-选-2"><span>不是“3 选 2”</span></a></h3><p>当发生网络分区的时候，如果我们要继续服务，那么强一致性和可用性只能 2 选 1。也就是说当网络分区之后 P 是前提，决定了 P 之后才有 C 和 A 的选择。也就是说分区容错性（Partition tolerance）我们是必须要实现的。</p><blockquote><p>简而言之就是：CAP 理论中分区容错性 P 是一定要满足的，在此基础上，只能满足可用性 A 或者一致性 C。</p></blockquote><p>因此，<strong>分布式系统理论上不可能选择 CA 架构，只能选择 CP 或者 AP 架构。</strong> 比如</p><ul><li>ZooKeeper、HBase 就是 CP 架构</li><li>Cassandra、Eureka 就是 AP 架构</li><li>Nacos 支持 CP 架构也支持 AP 架构</li></ul><p><strong>为啥不可能选择 CA 架构呢？</strong> 举个例子：若系统出现“分区”，系统中的某个节点在进行写操作。为了保证 C， 必须要禁止其他节点的读写操作，这就和 A 发生冲突了。如果为了保证 A，其他节点的读写操作正常的话，那就和 C 发生冲突了。</p><p><strong>选择 CP 还是 AP 的关键在于当前的业务场景，没有定论，比如对于需要确保强一致性的场景如银行一般会选择保证 CP 。</strong></p><p>另外，需要补充说明的一点是：<strong>如果网络分区正常的话（系统在绝大部分时候所处的状态），也就说不需要保证 P 的时候，C 和 A 能够同时保证。</strong></p><h2 id="base-理论" tabindex="-1"><a class="header-anchor" href="#base-理论"><span>BASE 理论</span></a></h2><p><a href="https://dl.acm.org/doi/10.1145/1394127.1394128" target="_blank" rel="noopener noreferrer">BASE 理论</a>起源于 2008 年， 由 eBay 的架构师 Dan Pritchett 在 ACM 上发表。</p><h3 id="简介-1" tabindex="-1"><a class="header-anchor" href="#简介-1"><span>简介</span></a></h3><p><strong>BASE</strong> 是 <strong>Basically Available（基本可用）</strong>、<strong>Soft-state（软状态）</strong> 和 <strong>Eventually Consistent（最终一致性）</strong> 三个短语的缩写。BASE 理论是对 CAP 中一致性 C 和可用性 A 权衡的结果，其来源于对大规模互联网系统分布式实践的总结，是基于 CAP 定理逐步演化而来的，它大大降低了我们对系统的要求。</p><h3 id="核心思想" tabindex="-1"><a class="header-anchor" href="#核心思想"><span>核心思想</span></a></h3><p>即使无法做到强一致性，但每个应用都可以根据自身业务特点，采用适当的方式来使系统达到最终一致性。</p><blockquote><p>牺牲数据的强一致性来满足系统的高可用性，系统中一部分数据不可用或者不一致时，仍需要保持系统整体“主要可用”。</p></blockquote><p><strong>BASE 理论本质上是对 CAP 的延伸和补充，是对 CAP 中 AP 方案的一个补充。</strong></p><p>CAP 理论这节我们也说过了：</p><blockquote><p>如果系统没有发生“分区”的话，节点间的网络连接通信正常的话，也就不存在 P 了。这个时候，我们就可以同时保证 C 和 A 了。因此，**如果系统发生“分区”，我们要考虑选择 CP 还是 AP。如果系统没有发生“分区”的话，我们要思考如何保证 CA **</p></blockquote><p>因此，AP 方案只是在系统发生分区的时候放弃一致性，而不是永远放弃一致性。在分区故障恢复后，系统应该达到最终一致性。这一点其实就是 BASE 理论延伸的地方。</p><p>那实现最终一致性的具体方式是什么呢?</p><ul><li><strong>读时修复</strong> : 在读取数据时，检测数据的不一致，进行修复。比如 Cassandra 的 Read Repair 实现，具体来说，在向 Cassandra 系统查询数据的时候，如果检测到不同节点的副本数据不一致，系统就自动修复数据。</li><li><strong>写时修复</strong> : 在写入数据，检测数据的不一致时，进行修复。比如 Cassandra 的 Hinted Handoff 实现。具体来说，Cassandra 集群的节点之间远程写数据的时候，如果写失败 就将数据缓存下来，然后定时重传，修复数据的不一致性。</li><li><strong>异步修复</strong> : 这个是最常用的方式，通过定时对账检测副本数据的一致性，并修复。</li></ul><p>比较推荐 <strong>写时修复</strong>，这种方式对性能消耗比较低。</p><p>纯粹的Gossip协议在实践中可能存在信息冗余的问题，即已接收到某一信息的节点在后续的传播中可能会收到相同的信息。为了避免这种冗余和提高通信效率，这些系统通常会对Gossip协议进行优化，例如在节点间记录已知信息的状态，避免重复传播已知的更新。即便如此，Gossip协议仍然是在大规模分布式系统中实现高可用性和强一致性的有效手段，其高效性体现在只需局部通信即可逐渐达成全局一致性，同时具备良好的扩展性和容错性。</p>',37)]))}const c=t(n,[["render",o],["__file","cap.html.vue"]]),d=JSON.parse(`{"path":"/se/design/system/availability/cap.html","title":"CAP","lang":"en-US","frontmatter":{"description":"CAP 分布式一致性协议 一是因为这两个分布式基础理论是学习分布式知识的必备前置基础，二是因为很多面试官自己比较熟悉这两个理论（方便提问）。我们非常有必要将这两个理论搞懂，并且能够用自己的理解给别人讲出来。 一致性级别 强一致性 保证系统改变提交以后立即改变集群的状态。 模型： Paxos Raft（multi-paxos） ZAB（multi-pax...","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/se/design/system/availability/cap.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"CAP"}],["meta",{"property":"og:description","content":"CAP 分布式一致性协议 一是因为这两个分布式基础理论是学习分布式知识的必备前置基础，二是因为很多面试官自己比较熟悉这两个理论（方便提问）。我们非常有必要将这两个理论搞懂，并且能够用自己的理解给别人讲出来。 一致性级别 强一致性 保证系统改变提交以后立即改变集群的状态。 模型： Paxos Raft（multi-paxos） ZAB（multi-pax..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-11-22T03:15:57.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-22T03:15:57.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"CAP\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-22T03:15:57.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[{"level":2,"title":"一致性级别","slug":"一致性级别","link":"#一致性级别","children":[]},{"level":2,"title":"CAP 理论","slug":"cap-理论","link":"#cap-理论","children":[{"level":3,"title":"简介","slug":"简介","link":"#简介","children":[]},{"level":3,"title":"不是“3 选 2”","slug":"不是-3-选-2","link":"#不是-3-选-2","children":[]}]},{"level":2,"title":"BASE 理论","slug":"base-理论","link":"#base-理论","children":[{"level":3,"title":"简介","slug":"简介-1","link":"#简介-1","children":[]},{"level":3,"title":"核心思想","slug":"核心思想","link":"#核心思想","children":[]}]}],"git":{"createdTime":1715153702000,"updatedTime":1732245357000,"contributors":[{"name":"刘大维","email":"davidliu@liudaweideMacBook-Pro.local","commits":2},{"name":"David Liu","email":"liudawei@seas.upenn.edu","commits":1}]},"readingTime":{"minutes":6.02,"words":1805},"filePathRelative":"se/design/system/availability/cap.md","localizedDate":"May 8, 2024","excerpt":"\\n<p>分布式一致性协议</p>\\n<p>一是因为这两个分布式基础理论是学习分布式知识的必备前置基础，二是因为很多面试官自己比较熟悉这两个理论（方便提问）。我们非常有必要将这两个理论搞懂，并且能够用自己的理解给别人讲出来。</p>\\n<h2>一致性级别</h2>\\n<ul>\\n<li>\\n<p>强一致性</p>\\n<p>保证系统改变提交以后立即改变集群的状态。</p>\\n<p>模型：</p>\\n<ul>\\n<li>Paxos</li>\\n<li>Raft（multi-paxos）</li>\\n<li>ZAB（multi-paxos）</li>\\n</ul>\\n</li>\\n<li>\\n<p>弱一致性</p>\\n<p>即最终一致性，系统不保证改变提交以后立即改变集群的状态，但是随着时间的推移最终状态是一致的。</p>\\n<p>模型：</p>\\n<ul>\\n<li>Gossip 协议</li>\\n<li>DNS 系统</li>\\n</ul>\\n</li>\\n</ul>","autoDesc":true}`);export{c as comp,d as data};
