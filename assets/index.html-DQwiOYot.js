import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as l,d as i,o as r}from"./app-ChU1gMRF.js";const a={};function o(n,e){return r(),l("div",null,e[0]||(e[0]=[i('<h1 id="海量数据处理" tabindex="-1"><a class="header-anchor" href="#海量数据处理"><span>海量数据处理</span></a></h1><p><a href="https://www.jiuzhang.com/course/56" target="_blank" rel="noopener noreferrer">https://www.jiuzhang.com/course/56</a></p><p>大文件处理问题</p><p><a href="https://wizardforcel.gitbooks.io/the-art-of-programming-by-july/content/06.02.html" target="_blank" rel="noopener noreferrer">方法总结</a></p><p>海量数据处理算法与面试题全集</p><p>所谓海量数据处理，是指基于海量数据的存储、处理、和操作。正因为数据量太大，所以导致要么无法在较短时间内迅速解决，要么无法一次性装入内存。</p><p>时间问题，可以采用巧妙的算法搭配合适的数据结构（如布隆过滤器、哈希、位图、堆、数据库、倒排索引、Trie树）来解决；</p><p>空间问题，可以采取分而治之（哈希映射）的方法，也就是说，把规模大的数据转化为规模小的，从而各个击破。</p><p>此外，针对常说的单机及集群问题，通俗来讲，单机就是指处理装载数据的机器有限（只要考虑CPU、内存、和硬盘之间的数据交互），而集群的意思是指机器有多台，适合分布式处理或并行计算，更多考虑节点与节点之间的数据交互。</p><ul><li>哈希分治；</li><li>simhash 算法；</li><li>外排序；</li><li>MapReduce；</li><li>多层划分；</li><li>位图 bitmap；</li><li>布隆过滤器 bloom filter；</li><li>Trie树；</li><li>数据库；</li><li>倒排索引</li></ul><blockquote><p><a href="https://doocs.github.io/advanced-java/#/docs/big-data/find-top-1-ip" target="_blank" rel="noopener noreferrer">最好的分类的讲解</a></p></blockquote><p>海量数据大多数，分成小文件处理，分治</p><p><a href="https://blog.csdn.net/wanger61/article/details/110004130" target="_blank" rel="noopener noreferrer">https://blog.csdn.net/wanger61/article/details/110004130</a></p><p><a href="https://blog.csdn.net/v_JULY_v/article/details/7382693?spm=1001.2101.3001.6650.1&amp;utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7ERate-1-7382693-blog-110004130.pc_relevant_3mothn_strategy_recovery&amp;depth_1-utm_source=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7ERate-1-7382693-blog-110004130.pc_relevant_3mothn_strategy_recovery" target="_blank" rel="noopener noreferrer">https://blog.csdn.net/v_JULY_v/article/details/7382693?spm=1001.2101.3001.6650.1&amp;utm_medium=distribute.pc_relevant.none-task-blog-2~default~CTRLIST~Rate-1-7382693-blog-110004130.pc_relevant_3mothn_strategy_recovery&amp;depth_1-utm_source=distribute.pc_relevant.none-task-blog-2~default~CTRLIST~Rate-1-7382693-blog-110004130.pc_relevant_3mothn_strategy_recovery</a></p><p>数据量太大，无法在短时间内迅速处理怎么办？<br> 无法一次性装入内存怎么办？<br> 文件太大怎么办，如何优化性能进行提速？</p><ol><li><p>分治法 DivConquer</p></li><li><p>位图法 BitMap</p><p>拓展：布隆过滤器</p><p>布隆过滤器由「初始值都为 0 的位图数组」和「 N 个哈希函数」</p><ul><li>如果布隆过滤器判断一个元素<strong>不在</strong>一个集合中，那这个元素一定不在集合中。</li><li>如果布隆过滤器判断一个元素<strong>在</strong>一个集合中，不一定在。</li></ul></li></ol><p>最高频K 项问题</p><ul><li>问题分析</li><li>最高频K 项的离线算法</li><li>标准离线算法的提速</li><li>标准离线算法的空间优化</li><li>最高频 K 项的在线算法</li><li>标准在线算法的空间优化</li><li>相关面试题 <ul><li>最近7天的热门歌曲</li><li>访问 Baidu 次数最多的 IP</li></ul></li></ul><p>布隆过滤器（Bloom Filter）</p><ul><li>标准布隆过滤器（Standard Bloom Filter）</li><li>计数布隆过滤器 Counting Bloom Filter</li></ul><p>外排序算法</p><ul><li>外排序算法的基本步骤</li><li>相关面试题</li></ul><p>概率类的大数据问题</p><hr><ul><li>外排序算法(External Sorting)</li><li>Map Reduce</li><li>近似算法 Approximation Algorithm</li><li>概率算法</li><li>哈希算法与哈希函数 Hash Function</li><li>哈希表 Hash Table</li><li>堆 Heap</li><li>布隆过滤器 BloomFilter</li><li>位图 Bitmap</li></ul>',25)]))}const c=t(a,[["render",o],["__file","index.html.vue"]]),d=JSON.parse(`{"path":"/algo/faq/big-data/","title":"海量数据处理","lang":"en-US","frontmatter":{"description":"海量数据处理 https://www.jiuzhang.com/course/56 大文件处理问题 方法总结 海量数据处理算法与面试题全集 所谓海量数据处理，是指基于海量数据的存储、处理、和操作。正因为数据量太大，所以导致要么无法在较短时间内迅速解决，要么无法一次性装入内存。 时间问题，可以采用巧妙的算法搭配合适的数据结构（如布隆过滤器、哈希、位图、堆...","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/algo/faq/big-data/"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"海量数据处理"}],["meta",{"property":"og:description","content":"海量数据处理 https://www.jiuzhang.com/course/56 大文件处理问题 方法总结 海量数据处理算法与面试题全集 所谓海量数据处理，是指基于海量数据的存储、处理、和操作。正因为数据量太大，所以导致要么无法在较短时间内迅速解决，要么无法一次性装入内存。 时间问题，可以采用巧妙的算法搭配合适的数据结构（如布隆过滤器、哈希、位图、堆..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-11-22T03:36:46.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-22T03:36:46.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"海量数据处理\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-22T03:36:46.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[],"git":{"createdTime":1732244737000,"updatedTime":1732246606000,"contributors":[{"name":"David Liu","email":"liudawei@seas.upenn.edu","commits":1}]},"readingTime":{"minutes":2.36,"words":709},"filePathRelative":"algo/faq/big-data/README.md","localizedDate":"November 22, 2024","excerpt":"\\n<p><a href=\\"https://www.jiuzhang.com/course/56\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://www.jiuzhang.com/course/56</a></p>\\n<p>大文件处理问题</p>\\n<p><a href=\\"https://wizardforcel.gitbooks.io/the-art-of-programming-by-july/content/06.02.html\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">方法总结</a></p>\\n","autoDesc":true}`);export{c as comp,d as data};
