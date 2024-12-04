import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as p,d as t,o as r}from"./app-D4ZvIHfO.js";const i={};function l(d,e){return r(),p("div",null,e[0]||(e[0]=[t('<h1 id="map-reduce" tabindex="-1"><a class="header-anchor" href="#map-reduce"><span>Map Reduce</span></a></h1><p>那这样的Map reduce系统有什么好处呢？</p><p>其实Map Reduce 并没有结余实际上的计算时间总和，但是如果你现在有很多的计算资源（很多台机器），你可以通过 Map Reduce 的框架利用多台机器同时计算，来优化性能进行提速。Map Reduce是一套通用的分布式计算框架。这样，对于很多类似的问题，工程师并不需要每次都去自己构思如何使用多台机器优化计算的算法，只需要套用这个通用框架，就可以快速的解决问题。</p><p>（比如：<a href="http://vividfree.github.io/%E5%A4%A7%E8%A7%84%E6%A8%A1%E6%95%B0%E6%8D%AE%E5%A4%84%E7%90%86/2015/11/14/large-scale-matrix-multiplication-using-mapreduce" target="_blank" rel="noopener noreferrer">矩阵分解问题</a>，<a href="https://blog.csdn.net/m53931422/article/details/41745175" target="_blank" rel="noopener noreferrer">Page Rank搜索排序算法</a>）</p><p>你可能会有疑问，为什么一定要使用Map reduce来分割文件呢，单纯的分割文件分别统计是否可行呢？</p><p>其实是不行的。单纯的将文件1丢给机器1，文件2丢给机器2，分别统计 Top K 之后再合并，这种方法是不行的。因为最高频的那一项可能分别出现在文件1和文件2，这样就相当于降低了其出现的频率，可能造成统计结果不对。</p><hr><p><img src="https://media-test.jiuzhang.com/media/section/MapReduce_3UC1v8Q.png" alt="img" loading="lazy"></p><p>95%的题是如何使用Map Reduce，5%的题是如何设计Map Reduce</p><p>Interviewer: Count the word frequency of a web page?（单词计数）</p><p>方法一：单台机器 for+HashMap</p><p>优点：简单；<br> 缺点：只有一台机器一慢、内存大小受限</p><p>方法二：多台机器 for+HashMap，一台机器合并算最终结果</p><p>合并的时候是Bottle Neck</p><p>合并是否也可以并行？可<br> 以什么为标准来划分？机器 or key？key</p><p>key 设计无前后依赖性，且系统设计起来简单</p><p>MapReduce：</p><ul><li>Map：并行去做</li><li>Reduce：并行合并</li></ul><p>master slave，master控制的</p><p>Map Reduce是一套实现分布式运算的框架</p><ol><li><p>Input</p></li><li><p>Split</p></li><li><p><strong>Map</strong></p><p>此时不需要合并，只做key value映射</p></li><li><p>传输整理（Shuffle）</p><p>Hadoop运行机制中，将map输出进行分区、分组、排序、和合并等处理后作为输入传给Reducer的过程，称为shuffle过程。</p><ol><li>Partition sort</li><li>Fetch + Merge</li></ol></li><li><p><strong>Reduce</strong></p></li><li><p>Output</p></li></ol><h3 id="函数接口" tabindex="-1"><a class="header-anchor" href="#函数接口"><span>函数接口</span></a></h3><p>他们的输入和输出必须是Key Value形式</p><p>Map 输入key: 文章存储地址 Value:文章内容<br> Reduce 输入key: map 输出的 key Value: map 输出的 value</p><p><strong>关键：Map输出的key value是什么</strong></p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="原理" tabindex="-1"><a class="header-anchor" href="#原理"><span>原理</span></a></h2><h3 id="传输整理" tabindex="-1"><a class="header-anchor" href="#传输整理"><span>传输整理</span></a></h3><p><img src="https://img-blog.csdnimg.cn/a6a8f1e6e0244dbca7c3503dbfa1fcbb.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBASVTot6_kuIrnmoTlhpvlk6U=,size_20,color_FFFFFF,t_70,g_se,x_16" alt="img" loading="lazy"></p><p>master 有一个consistency hash，根据这个一致性哈希来分组，分组后对每个组的内部进行排序（由于结果存在硬盘上，所以采用硬盘上的外排序），排序一般以key作为第一关键字、value作为第二关键字。</p><p>Reduce会把排好序的文件拿到自己的机器上，如几个机器，然后做<strong>k路归并</strong>，每个key只能被分配到一台机器上</p><p>Questions</p><p>Q1: Map多少台机器？Reduce多少台机器？</p><ul><li>全由自己决定。一般1000map,1000 reduce规模</li></ul><p>Q2(加分): 机器越多就越好么？</p><ul><li>Advantage:</li><li>机器越多，那么每台机器处理的就越少，总处理据越快</li><li>Disadvantage:</li><li>启动机器的时间相应也变长了。</li></ul><p>Q3?(加分): 如果不考虑启动时间，</p><p>Reduce的机器是越多就一定越快么？</p><ul><li>Key的数目就是reduce的上限（Map Reduce架构的局限性）</li></ul><p>shuffle阶段又可以分为Map端的shuffle和Reduce端的shuffle。</p><p>Map端的shuffle</p><p>写磁盘：Map端会处理输入数据并产生中间结果，这个中间结果会写到本地磁盘，而不是HDFS。每个Map的输出会先写到内存缓冲区中，当写入的数据达到设定的阈值时，系统将会启动一个线程将缓冲区的数据写到磁盘，这个过程叫做spill。</p><p>分区、分组、排序：在spill写入之前，会先进行二次排序，首先根据数据所属的partition进行排序，然后每个分区（partition）中的数据再按key来排序。partition的目是将记录划分到不同的Reducer上去，以期望能够达到负载均衡，以后的Reducer就会根据partition来读取自己对应的数据。接着运行combiner(如果设置了的话)，combiner的本质也是一个Reducer，其目的是对将要写入到磁盘上的文件先进行一次处理，这样，写入到磁盘的数据量就会减少。最后将数据写到本地磁盘产生spill文件(spill文件保存在{mapred.local.dir}指定的目录中，Map任务结束后就会被删除)。</p><p>文件合并：最后，每个Map任务可能产生多个溢写文件（spill file），在每个Map任务完成前，会通过多路归并算法将这些spill文件归并成一个已经分区和排序的输出文件。至此，Map的shuffle过程就结束了。</p><p>压缩：在shuffle过程中如果压缩被启用，在map传出数据传入Reduce之前可执行压缩，默认情况下压缩是关闭的，可以将mapred.compress.map.output设置为true可实现压缩。</p><p>Reduce端的shuffle</p><p>Reduce端的shuffle主要包括三个阶段，copy、sort(merge)和reduce。</p><p>首先要将Map端产生的输出文件拷贝到Reduce端，但每个Reducer如何知道自己应该处理哪些数据呢？因为Map端进行partition的时候，实际上就相当于指定了每个Reducer要处理的数据(partition就对应了Reducer)，所以Reducer在拷贝数据的时候只需拷贝与自己对应的partition中的数据即可。每个Reducer会处理一个或者多个partition，但需要先将自己对应的partition中的数据从每个Map的输出结果中拷贝过来。</p><p>接下来就是排序（sort）阶段，也成为合并（merge）阶段，因为这个阶段的主要工作是执行了归并排序。从Map端拷贝到Reduce端的数据都是有序的，所以很适合归并排序。最终在Reduce端生成一个较大的文件作为Reduce的输入。MapReduce编程接口</p><h3 id="应用练习" tabindex="-1"><a class="header-anchor" href="#应用练习"><span>应用练习</span></a></h3><h4 id="统计频率" tabindex="-1"><a class="header-anchor" href="#统计频率"><span>统计频率</span></a></h4><p>key: 字符</p><p>value: 1</p><h4 id="倒排索引" tabindex="-1"><a class="header-anchor" href="#倒排索引"><span>倒排索引</span></a></h4><p>正排索引：文章序号到关键词列表</p><p>倒排索引：关键词到文章序号列表</p><p>key: 关键词</p><p>value: 文章序号</p><p>Reduce时可以做一个去重操作</p><h4 id="anagram" tabindex="-1"><a class="header-anchor" href="#anagram"><span>Anagram</span></a></h4><p>key: 内部字母排序好的单词</p><p>value: 原样字符串</p><h3 id="设计" tabindex="-1"><a class="header-anchor" href="#设计"><span>设计</span></a></h3><p>Mapper和Reducer是同时工作还是Mapper先工作Reduceri再工作？<br> Mapper要结束了后Reducer才能运行</p><p>运行过程中一个Mapper?或者Reducer:挂了怎么办？<br> 重新分配一台机器做</p><p>Reducer-一个机器Key数目特别多怎么办？</p><p>加一个random后缀，类似Shard Key，后面再加一个脚本合并</p><p>Input和Output存放在哪？</p><p>存放在GFS里面</p><p>Local Disk上面的Mapper output data有没有必要保存在SFS上面？要是丢了怎么办？</p><p>不需要，丢了重做就好</p><p>Mapper和Reducer可以放在同一台机器么？</p><p>这样设计并不是特别好，Mapper和Reducer之前都有很多需姜预处理的工作。两台机器可以并行的预处理。</p><hr><p>map的结果会在map端进行sort，这些map端就是hadoop集群里的datanode（slave），并不是专门的机器做sort</p>',75)]))}const s=a(i,[["render",l],["__file","mapreduce.html.vue"]]),o=JSON.parse(`{"path":"/algo/faq/big-data/mapreduce.html","title":"Map Reduce","lang":"en-US","frontmatter":{"description":"Map Reduce 那这样的Map reduce系统有什么好处呢？ 其实Map Reduce 并没有结余实际上的计算时间总和，但是如果你现在有很多的计算资源（很多台机器），你可以通过 Map Reduce 的框架利用多台机器同时计算，来优化性能进行提速。Map Reduce是一套通用的分布式计算框架。这样，对于很多类似的问题，工程师并不需要每次都去自...","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/algo/faq/big-data/mapreduce.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"Map Reduce"}],["meta",{"property":"og:description","content":"Map Reduce 那这样的Map reduce系统有什么好处呢？ 其实Map Reduce 并没有结余实际上的计算时间总和，但是如果你现在有很多的计算资源（很多台机器），你可以通过 Map Reduce 的框架利用多台机器同时计算，来优化性能进行提速。Map Reduce是一套通用的分布式计算框架。这样，对于很多类似的问题，工程师并不需要每次都去自..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://media-test.jiuzhang.com/media/section/MapReduce_3UC1v8Q.png"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-11-22T03:36:46.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-22T03:36:46.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Map Reduce\\",\\"image\\":[\\"https://media-test.jiuzhang.com/media/section/MapReduce_3UC1v8Q.png\\",\\"https://img-blog.csdnimg.cn/a6a8f1e6e0244dbca7c3503dbfa1fcbb.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBASVTot6_kuIrnmoTlhpvlk6U=,size_20,color_FFFFFF,t_70,g_se,x_16\\"],\\"dateModified\\":\\"2024-11-22T03:36:46.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[{"level":3,"title":"函数接口","slug":"函数接口","link":"#函数接口","children":[]},{"level":2,"title":"原理","slug":"原理","link":"#原理","children":[{"level":3,"title":"传输整理","slug":"传输整理","link":"#传输整理","children":[]},{"level":3,"title":"应用练习","slug":"应用练习","link":"#应用练习","children":[]},{"level":3,"title":"设计","slug":"设计","link":"#设计","children":[]}]}],"git":{"createdTime":1732244737000,"updatedTime":1732246606000,"contributors":[{"name":"David Liu","email":"liudawei@seas.upenn.edu","commits":1}]},"readingTime":{"minutes":6.28,"words":1883},"filePathRelative":"algo/faq/big-data/mapreduce.md","localizedDate":"November 22, 2024","excerpt":"\\n<p>那这样的Map reduce系统有什么好处呢？</p>\\n<p>其实Map Reduce 并没有结余实际上的计算时间总和，但是如果你现在有很多的计算资源（很多台机器），你可以通过 Map Reduce 的框架利用多台机器同时计算，来优化性能进行提速。Map Reduce是一套通用的分布式计算框架。这样，对于很多类似的问题，工程师并不需要每次都去自己构思如何使用多台机器优化计算的算法，只需要套用这个通用框架，就可以快速的解决问题。</p>\\n<p>（比如：<a href=\\"http://vividfree.github.io/%E5%A4%A7%E8%A7%84%E6%A8%A1%E6%95%B0%E6%8D%AE%E5%A4%84%E7%90%86/2015/11/14/large-scale-matrix-multiplication-using-mapreduce\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">矩阵分解问题</a>，<a href=\\"https://blog.csdn.net/m53931422/article/details/41745175\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Page Rank搜索排序算法</a>）</p>","autoDesc":true}`);export{s as comp,o as data};
