import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,d as n,o as e}from"./app-PqS9YW_3.js";const l={};function t(h,i){return e(),a("div",null,i[0]||(i[0]=[n(`<h1 id="elasticsearch" tabindex="-1"><a class="header-anchor" href="#elasticsearch"><span>ElasticSearch</span></a></h1><p>Elasticsearch(简称ES)是一个分布式、RESTful风格的搜索和数据分析引擎。</p><p>Elasticsearch是面向文档型数据库，一条数据在这里就是一个文档，用JSON作为文档序列化的格式，比如下面这条用户数据：</p><p>10.1.2索引(Index)</p><p>一个索引就是一个拥有几分相似特征的文档的集合。比如说，你可以有一个客户数据的索引，另一个产品目录的索引，还有一个订单数据的索引。一个索引由一个名字来标识（必须全部是小写字母），并且当我们要对这个索引中的文档进行索引、搜索、更新和删除的时候，都要使用到这个名字。在一个集群中，可以定义任意多的索引。</p><p>能搜索的数据必须索引，这样的好处是可以提高查询速度，比如：新华字典前面的目录就是索引的意思，目录可以提高查询速度。</p><p>Elasticsearch索引的精髓：一切设计都是为了提高搜索的性能。</p><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装"><span>安装</span></a></h2><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> network</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> create</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> es-net</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> run</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -d</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> \\</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">	--name</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> elasticsearch</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> \\</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">    -e</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;ES_JAVA_OPTS=-Xms512m -Xmx512m&quot;</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> \\</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">    -e</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;discovery.type=single-node&quot;</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> \\</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">    -v</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /appdata/es/data:/usr/share/elasticsearch/data</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> \\</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">    -v</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /appdata/es/plugins:/usr/share/elasticsearch/plugins</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> \\</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">    --privileged</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> \\</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">    --network</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> es-net</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> \\</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">    -p</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 9200:9200</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> \\</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">    -p</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 9300:9300</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> \\</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	elasticsearch:7.8.0</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> run</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -d</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> \\</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">    --name</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> kibana</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> \\</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">    --network</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> es-net</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> \\</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">    -p</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 5601:5601</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">  \\</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    kibana:7.8.0</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> logs</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -f</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> kibana</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">#进入容器</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> exec</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -it</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> kibana</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /bin/bash</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">#进入配置文件目录</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">cd</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /usr/share/kibana/config</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">#编辑文件kibana.yml</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">vi</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> kibana.yml</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">#在最后一行添加如下配置</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">i18n.locale:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> zh-CN</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">#保存退出</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">exit</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">#并重启容器</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> restart</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> kibana</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>命令说明：</p><ul><li><code>--network itmentu-net</code> ：加入一个名为<code>itmentu-net</code>的网络中，与<code>elasticsearch</code>在同一个网络中</li><li><code>-e ELASTICSEARCH_HOSTS=http://192.168.211.130:9200&quot;</code>：设置<code>elasticsearch</code>的地址，因为<code>kibana</code>已经与<code>elasticsearch</code>在一个网络，因此可以用容器名直接访问<code>elasticsearch</code>，也可以写IP地址实现访问。</li><li><code>-p 5601:5601</code>：端口映射配置</li></ul><h2 id="基本概念" tabindex="-1"><a class="header-anchor" href="#基本概念"><span>基本概念</span></a></h2><ul><li>Index(索引)：作为名词理解的话，索引是一类拥有相似特征的文档的集合比如商品索引、商家索引、订单索引，有点类似于SQL中的数据库表。作为动词理解的话，索引就是将一份文档保存在一个索引中。</li><li>Document(文档)：可搜索最小单位，用于存储数据，一般为JSON格式。文档由一个或者多个字<br> 段(Field)组成，字段类型可以是布尔，数值，字符串、二进制、日期等数据类型。</li><li>Type(字段类型)：每个文档在ES中都必须设定它的类型。ES7.0之前，一个Index可以有多个 Type。6.0开始，Type已经被Deprecated。7.0开始，一个索引只能创建一个Type：<code>_doc</code>。8.0之后，Type被完全删除，删除的原因看这里：<a href="https://www.elastic.co/guide/en/elasticsearch/reference/7.17/removal-of-types.html" target="_blank" rel="noopener noreferrer">https://www.elastic.co/guide/en/elasticsearch/reference/7.17/removal-of-types.html</a>.</li><li>Mapping(映射)：定义字段名称、数据类型、优化信息（比如是否索引）、分词器，有点类似于数据库中的表结构定义。一个Index对应一个Mapping。</li><li>Node(节点)：相当于一个ES实例，多个节点构成一个集群。</li><li>Cluster(集群)：多个ES节点的集合，用于解决单个节点无法处理的搜索需求和数据存储需求。</li><li>Shard(分片)：Index(索引)被分为多个碎片存储在不同的Node节点上的分片中，以提高性能和吞吐量。</li><li>Replica(副本)：Index副本，每个Index有一个或多个副本，以提高拓展功能和吞吐量。</li><li>DSL(查询语言)：基于JSON的查询语言，类似于SQL语句。</li></ul><p>MySQL与Elasticsearch的概念简单类比：</p><table><thead><tr><th>MySQL</th><th>Elasticsearch</th></tr></thead><tbody><tr><td>Table(表)</td><td>Index</td></tr><tr><td>Row(行)</td><td>Document</td></tr><tr><td>Column(列)</td><td>Field</td></tr><tr><td>Schema(约束)</td><td>Mapping</td></tr><tr><td>SQL(查询语言)</td><td>DSL</td></tr></tbody></table><h2 id="数据同步" tabindex="-1"><a class="header-anchor" href="#数据同步"><span>数据同步</span></a></h2><p>Elasticsearch和MySQL同步的策略有哪些？</p><p>我们可以将同步类型分为全量同步和增量同步。</p><p>全量同步即建好Elasticsearch索引后一次性导入MySQL所有数据。全量同步有很多现成的工具可以用比如go-mysql--elasticsearch、Datax。</p><p>另外，除了插件之外，像我们比较熟悉的Canal除了支持binlog实时增量同步数据库之外也支持全量同步。</p><p>增量同步即对ySQL中新增，修改，删除的数据进行同步：</p><ul><li>同步双写：修改数据时同步到Elasticsearch.。这种方式性能较差、存在丢数据风险且会耦合大量数据同步代码，一般不会使用。</li><li>异步双写：修改数据时，使用MQ异步写入Elasticsearch提高效率。这种方式引入了新的组件和服务，增加了系统整体复杂性。</li><li>定时器：定时同步数据到Elasticsearch。这种方式时效性差，通常用于数据实时性不高的场景</li><li><strong>Canal</strong>：binlog同步组件，使用Canal可以做到业务代码完全解耦，API完全解耦，零代码实现准实时同步，Canal通过解析 MySQL 的binlog日志文件进行数据同步。</li></ul><p>Canal 增量数据同步 Elasticsearch 的原理了解吗？</p><p>这个在Canal官方文档中有详细介绍到，原理非常简单：</p><ol><li>Canal模拟MySQL Slave节点与MySQL Master节点的交互协议，把自己伪装成一个MySQL Slave节点，向MySQL Master节点请求binlog;</li><li>MySQL Master节点接收到请求之后，根据偏移量将新的binlog发送给MySQL Slave节点；</li><li>Canal接收到binlog之后，就可以对这部分日志进行解析，获取主库的结构及数据变更。</li></ol>`,25)]))}const r=s(l,[["render",t],["__file","index.html.vue"]]),k=JSON.parse(`{"path":"/cs/middleware/es/","title":"ElasticSearch","lang":"en-US","frontmatter":{"description":"ElasticSearch Elasticsearch(简称ES)是一个分布式、RESTful风格的搜索和数据分析引擎。 Elasticsearch是面向文档型数据库，一条数据在这里就是一个文档，用JSON作为文档序列化的格式，比如下面这条用户数据： 10.1.2索引(Index) 一个索引就是一个拥有几分相似特征的文档的集合。比如说，你可以有一个客户...","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/cs/middleware/es/"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"ElasticSearch"}],["meta",{"property":"og:description","content":"ElasticSearch Elasticsearch(简称ES)是一个分布式、RESTful风格的搜索和数据分析引擎。 Elasticsearch是面向文档型数据库，一条数据在这里就是一个文档，用JSON作为文档序列化的格式，比如下面这条用户数据： 10.1.2索引(Index) 一个索引就是一个拥有几分相似特征的文档的集合。比如说，你可以有一个客户..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-11-23T18:37:56.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-23T18:37:56.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"ElasticSearch\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-23T18:37:56.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[{"level":2,"title":"安装","slug":"安装","link":"#安装","children":[]},{"level":2,"title":"基本概念","slug":"基本概念","link":"#基本概念","children":[]},{"level":2,"title":"数据同步","slug":"数据同步","link":"#数据同步","children":[]}],"git":{"createdTime":1691648992000,"updatedTime":1732387076000,"contributors":[{"name":"David Liu","email":"liudawei@seas.upenn.edu","commits":1},{"name":"davidliu","email":"liudawei47@jd.com","commits":1},{"name":"刘大维","email":"davidliu@liudaweideMacBook-Pro.local","commits":1}]},"readingTime":{"minutes":4.54,"words":1362},"filePathRelative":"cs/middleware/es/README.md","localizedDate":"August 10, 2023","excerpt":"\\n<p>Elasticsearch(简称ES)是一个分布式、RESTful风格的搜索和数据分析引擎。</p>\\n<p>Elasticsearch是面向文档型数据库，一条数据在这里就是一个文档，用JSON作为文档序列化的格式，比如下面这条用户数据：</p>\\n<p>10.1.2索引(Index)</p>\\n<p>一个索引就是一个拥有几分相似特征的文档的集合。比如说，你可以有一个客户数据的索引，另一个产品目录的索引，还有一个订单数据的索引。一个索引由一个名字来标识（必须全部是小写字母），并且当我们要对这个索引中的文档进行索引、搜索、更新和删除的时候，都要使用到这个名字。在一个集群中，可以定义任意多的索引。</p>","autoDesc":true}`);export{r as comp,k as data};
