import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,d as l,o as i}from"./app-DtA_0glx.js";const t={};function n(r,p){return i(),a("div",null,p[0]||(p[0]=[l('<h1 id="面经" tabindex="-1"><a class="header-anchor" href="#面经"><span>面经</span></a></h1><p>内存有限，怎么对 100 亿数据进行排序（大数据小内存排序问题）<br> 内存有限，如何在20亿个整数中找到出现次数最多的数<br> 内存有限，如何在40亿个非负整数中找到所有未出现的数<br> 内存有限，如何在100亿数据中找到中位数<br> 内存有限，如何在2亿个整数中找出不连续的最小数<br> 百万文件如何找到相似度最高的文件<br> 40亿个QQ号，限制1G内存，如何去重？</p><h2 id="大文件排序" tabindex="-1"><a class="header-anchor" href="#大文件排序"><span>大文件排序</span></a></h2><p>外排序</p><h2 id="大文件找众数" tabindex="-1"><a class="header-anchor" href="#大文件找众数"><span>大文件找众数</span></a></h2><p>摩尔投票法</p><h2 id="两个大文件求交集" tabindex="-1"><a class="header-anchor" href="#两个大文件求交集"><span>两个大文件求交集</span></a></h2><p>假设文件为a，b</p><ol><li><p>直接遍历法。一般人第一时间都是想遍历吧。读取每一行a，在b中遍历，这样时间复杂度为O（n^2），显然一般人都不能接受这个时间复杂度。</p></li><li><p>哈希 + 分片的思想。先把a文件hash，在遍历b文件，去判断是否存在。</p><p>时间复杂度降低为O（n） ，但是空间复杂度上来了，以空间换时间。</p><ol><li>将文件A中的hash(url)%100，生成100个小文件。</li><li>文件B中也hash(url)%100，生成100个小文件。</li><li>然后将A子文件001和B子文件001求交集，放入一个结果文件即可。</li></ol></li><li><p>布隆过滤器。但是布隆过滤器是有可能出现错误的，当时应该问问他是否可以出现小的错误？</p></li></ol><p>对于大文件的话，一般都是使用分治思想，将文件分割成多个小文件来处理。</p><hr><p>题目背景</p><p>给定a、b两个文件，各存放50亿个url，每个url各占64字节，内存限制是4G，让你找出a、b文件共同的url</p><p>主体思路</p><p>分治+hash</p><p>实现步骤</p><p>遍历文件A，对每个url使用hash(url) % 1000，根据所得的取值将url存储到1000个小文件中（a1,a2,…,a1000）（根据内存大小设定hash函数）<br> 遍历文件B，使用同样的hash函数将B中的url存储到1000个小文件中（b1,b2,…,b1000）（这样相同的url就会被映射到下标相同的小文件中）<br> 读取文件a1，建立hash表，再读取文件b1，遍历其中的url，若url在hash表中出现，说明为两文件共有，存入结果中。</p><h3 id="如何在大量的数据中判断一个数是否存在" tabindex="-1"><a class="header-anchor" href="#如何在大量的数据中判断一个数是否存在"><span>如何在大量的数据中判断一个数是否存在？</span></a></h3><p>题目描述</p><p>给定 40 亿个不重复的没排过序的 unsigned int 型整数，然后再给定一个数，如何快速判断这个数是否在这 40 亿个整数当中？</p><p>解答思路</p><p>方法一：分治法</p><p>依然可以用分治法解决，方法与前面类似，就不再次赘述了。</p><p>方法二：位图法</p><p>由于 unsigned int 数字的范围是 [0, 1&lt;&lt;32)，我们用 1&lt;&lt;32=4,294,967,296 个 bit 来表示每个数字。初始位均为 0，那么总共需要内存：4,294,967,296b≈512M。</p><p>我们读取这 40 亿个整数，将对应的 bit 设置为 1。接着读取要查询的数，查看相应位是否为 1，如果为 1 表示存在，如果为 0 表示不存在。</p><p>方法总结</p><p>判断数字是否存在、判断数字是否重复的问题，位图法是一种非常高效的方法。</p><hr><p>求两个超大文件中URLs 的交集，并且内存中不足以放下所有的URLs</p><p>所谓海量数据处理，其实就是基于海量数据的存储、删除、搜索等操作。所谓海量，就是数据量太大，所以导致要么无法在短时间内迅速处理，要么无法一次性装入内存。</p><p>那应该如何解决呢？针对时间，我们可以采用更加精妙而迅速的数据结构和算法，比如BloomFilter、Hash、堆、Bitmap等；针对空间，无非就是：大而化小，分而治之。在这里我们先不一一展开。</p><p>根据上面的讨论，在海量数据处理类的问题中，我们总结了以下考点：</p><p>算法方面：</p><ul><li>外排序算法（External Sorting）</li><li>Map Reduce</li><li>非精确算法</li><li>概率算法</li><li>哈希函数（Hash Function）</li></ul><p>数据结构方面：</p><ul><li>哈希表（Hash Table）</li><li>堆（Heap）</li><li>布隆过滤器（BloomFilter）</li><li>位图（Bitmap）</li></ul><h3 id="_40亿个qq号-限制1g内存-如何去重" tabindex="-1"><a class="header-anchor" href="#_40亿个qq号-限制1g内存-如何去重"><span>40亿个QQ号，限制1G内存，如何去重？</span></a></h3><p>对于Java来说，可以使用int类型表示QQ号（Java并未设计无符号整型，只有几个无符号整型的静态方法)。</p><p>40亿个QQ号如果直接存储的话，大约需要内存：4*4000000000/1024/1024/1024≈15G。实际开发过程中，所需的内存肯定会更多。</p><p>1KB=1024B,1MB=1024KB,1GB=1024MB</p><p>很显然，这种方式是不现实的。</p><p>对于这种大数据量去重的场景，我们可以考虑使用位图(Bitmap)。位图可以在不占用太多内存的前提下，解决海量数据的存在性问题，进而实现去重。</p><p>Bitmap是一种用于存储二进制数据的数据结构。简单来说，Bitmap就是使用二进制位来表示某个元素是否存在的数组。每一位只有两种状态，可以方便地用0和1来表示存在与不存在。</p><p>使用Bitmap的话，一个数字只需要占用1个bit。</p><p>我们知道QQ号是4字节无符号整数，共326t,也就是说，QQ号的取值范围是：[0,2<sup>32-1]。2</sup>32-1的值是4294967295，是一个10位的整数，大约是43亿。</p><p>这样的话，大约需要512MB内存就可以表示所有的QQ号了，计算过程：4294967295/8/1024/1024≈512MB。</p><p>假设我们要把QQ号1384593330放入Bitmap,我们只需要将1384593330位置的数组元素设置为1即可。当我们要判断对应的QQ号是否已经存在于Bitmap中时，只需要查看对应位置的数组元素是否为1即可。</p><p>Redis就支持Bitmap,实际项目中我们可以基于Redis来做。</p>',49)]))}const s=e(t,[["render",n],["__file","面经.html.vue"]]),d=JSON.parse(`{"path":"/algo/faq/%E6%B5%B7%E9%87%8F%E6%95%B0%E6%8D%AE/%E9%9D%A2%E7%BB%8F.html","title":"面经","lang":"en-US","frontmatter":{"description":"面经 内存有限，怎么对 100 亿数据进行排序（大数据小内存排序问题） 内存有限，如何在20亿个整数中找到出现次数最多的数 内存有限，如何在40亿个非负整数中找到所有未出现的数 内存有限，如何在100亿数据中找到中位数 内存有限，如何在2亿个整数中找出不连续的最小数 百万文件如何找到相似度最高的文件 40亿个QQ号，限制1G内存，如何去重？ 大文件排序...","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/algo/faq/%E6%B5%B7%E9%87%8F%E6%95%B0%E6%8D%AE/%E9%9D%A2%E7%BB%8F.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"面经"}],["meta",{"property":"og:description","content":"面经 内存有限，怎么对 100 亿数据进行排序（大数据小内存排序问题） 内存有限，如何在20亿个整数中找到出现次数最多的数 内存有限，如何在40亿个非负整数中找到所有未出现的数 内存有限，如何在100亿数据中找到中位数 内存有限，如何在2亿个整数中找出不连续的最小数 百万文件如何找到相似度最高的文件 40亿个QQ号，限制1G内存，如何去重？ 大文件排序..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-11-22T03:05:37.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-22T03:05:37.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"面经\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-22T03:05:37.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[{"level":2,"title":"大文件排序","slug":"大文件排序","link":"#大文件排序","children":[]},{"level":2,"title":"大文件找众数","slug":"大文件找众数","link":"#大文件找众数","children":[]},{"level":2,"title":"两个大文件求交集","slug":"两个大文件求交集","link":"#两个大文件求交集","children":[{"level":3,"title":"如何在大量的数据中判断一个数是否存在？","slug":"如何在大量的数据中判断一个数是否存在","link":"#如何在大量的数据中判断一个数是否存在","children":[]},{"level":3,"title":"40亿个QQ号，限制1G内存，如何去重？","slug":"_40亿个qq号-限制1g内存-如何去重","link":"#_40亿个qq号-限制1g内存-如何去重","children":[]}]}],"git":{"createdTime":1732244737000,"updatedTime":1732244737000,"contributors":[{"name":"David Liu","email":"liudawei@seas.upenn.edu","commits":1}]},"readingTime":{"minutes":5.11,"words":1532},"filePathRelative":"algo/faq/海量数据/面经.md","localizedDate":"November 22, 2024","excerpt":"\\n<p>内存有限，怎么对 100 亿数据进行排序（大数据小内存排序问题）<br>\\n内存有限，如何在20亿个整数中找到出现次数最多的数<br>\\n内存有限，如何在40亿个非负整数中找到所有未出现的数<br>\\n内存有限，如何在100亿数据中找到中位数<br>\\n内存有限，如何在2亿个整数中找出不连续的最小数<br>\\n百万文件如何找到相似度最高的文件<br>\\n40亿个QQ号，限制1G内存，如何去重？</p>\\n<h2>大文件排序</h2>\\n<p>外排序</p>\\n<h2>大文件找众数</h2>\\n<p>摩尔投票法</p>\\n<h2>两个大文件求交集</h2>\\n<p>假设文件为a，b</p>\\n<ol>\\n<li>\\n<p>直接遍历法。一般人第一时间都是想遍历吧。读取每一行a，在b中遍历，这样时间复杂度为O（n^2），显然一般人都不能接受这个时间复杂度。</p>\\n</li>\\n<li>\\n<p>哈希 + 分片的思想。先把a文件hash，在遍历b文件，去判断是否存在。</p>\\n<p>时间复杂度降低为O（n） ，但是空间复杂度上来了，以空间换时间。</p>\\n<ol>\\n<li>将文件A中的hash(url)%100，生成100个小文件。</li>\\n<li>文件B中也hash(url)%100，生成100个小文件。</li>\\n<li>然后将A子文件001和B子文件001求交集，放入一个结果文件即可。</li>\\n</ol>\\n</li>\\n<li>\\n<p>布隆过滤器。但是布隆过滤器是有可能出现错误的，当时应该问问他是否可以出现小的错误？</p>\\n</li>\\n</ol>","autoDesc":true}`);export{s as comp,d as data};
