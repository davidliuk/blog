import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as o,d as i,o as l}from"./app-D4ZvIHfO.js";const a={};function r(p,e){return l(),o("div",null,e[0]||(e[0]=[i('<h1 id="布隆过滤器" tabindex="-1"><a class="header-anchor" href="#布隆过滤器"><span>布隆过滤器</span></a></h1><ul><li>标准布隆过滤器 Standard Bloom Filter</li><li>计数布隆过滤器 Counting Bloom Filter</li></ul><p>如果我们想要进一步节省空间，并且容许较小的误差的话，还可以使用布隆过滤器(B引oom Filter)进一步优化。布隆过滤器就是基于Bitmap实现的，只是多加了哈希函数映射这一步。</p><p>Bloom Filter是一个叫做Bloom的老哥于1970年提出的。我们可以把它看作由Bitmap和一系列随机映射函数（哈希函数）两部分组成的数据结构。相比于传统的Bitmap，Bloom Filter占用的空间更少，但其结果不一定是完全准确的。bloomfilter说不存在则一定不存在，说存在时不一定存在。</p><p>Bloom Filter的常见应用场景如下：</p><ol><li>判断给定数据是否存在：比如判断一个数字是否存在于包含大量数字的数字集中（数字集很大，上亿)、防止缓存穿透（判断请求的数据是否有效避免直接绕过缓存请求数据库）等等、邮箱的垃圾邮件过滤（判断一个邮件地址是否在垃圾邮件列表中）、黑名单功能（判断一个P地址或手机号码是否在黑名单中)等等。</li><li>去重：如果需要对一个大的数据集进行去重操作，可以使用Bloom Filter来记录每个元素是否出现过。比如爬给定网址的时候对已经爬取过的URL去重、对巨量的QQ号/订单号去重。</li></ol><p>Bloom Filter和Bitmap的应用场景类似，都是为了解决海量数据的存在性问题。</p><p>当一个元素加入布隆过滤器中的时候，会进行如下操作：</p><ol><li>使用布隆过滤器中的哈希函数对元素值进行计算，得到哈希值（有几个哈希函数得到几个哈希值）。</li><li>根据得到的哈希值，在位数组中把对应下标的值置为1。</li></ol><p>当我们需要判断一个元素是否存在于布隆过滤器的时候，会进行如下操作：</p><ol><li>对给定元素再次进行相同的哈希计算；</li><li>得到值之后判断位数组中的每个元素是否都为1，如果值都为1，那么说明这个值在布隆过滤器中，如果存在一个值不为1，说明该元素不在布隆过滤器中。</li></ol><p>Redis 也支持 Bloom Filter，不过，我们需要先安装一下。</p><p>docker run -p 6379:6379 --name redis-redisbloom redislabs/rebloom:latest</p><h2 id="原理" tabindex="-1"><a class="header-anchor" href="#原理"><span>原理</span></a></h2><blockquote><p><a href="https://blog.csdn.net/qq_44797267/article/details/120238150#:~:text=%E5%B8%83%E9%9A%86%E8%BF%87%E6%BB%A4%E5%99%A8%20%28Bloom%20Filter%29%E7%9A%84%E5%8E%9F%E7%90%86%E5%92%8C%E5%AE%9E%E7%8E%B0%201%20%E5%B0%86%E8%AE%BF%E9%97%AE%E8%BF%87%E7%9A%84URL%E4%BF%9D%E5%AD%98%E5%88%B0%E6%95%B0%E6%8D%AE%E5%BA%93%E3%80%82%202%20%E7%94%A8HashSet%E5%B0%86%E8%AE%BF%E9%97%AE%E8%BF%87%E7%9A%84URL%E4%BF%9D%E5%AD%98%E8%B5%B7%E6%9D%A5%E3%80%82,%E9%82%A3%E5%8F%AA%E9%9C%80%E6%8E%A5%E8%BF%91O%20%281%29%E7%9A%84%E4%BB%A3%E4%BB%B7%E5%B0%B1%E5%8F%AF%E4%BB%A5%E6%9F%A5%E5%88%B0%E4%B8%80%E4%B8%AAURL%E6%98%AF%E5%90%A6%E8%A2%AB%E8%AE%BF%E9%97%AE%E8%BF%87%E4%BA%86%E3%80%82%203%20URL%E7%BB%8F%E8%BF%87MD5%E6%88%96SHA-1%E7%AD%89%E5%8D%95%E5%90%91%E5%93%88%E5%B8%8C%E5%90%8E%E5%86%8D%E4%BF%9D%E5%AD%98%E5%88%B0HashSet%E6%88%96%E6%95%B0%E6%8D%AE%E5%BA%93%E3%80%82%204%20Bit-Map%E6%96%B9%E6%B3%95%E3%80%82%20%E5%BB%BA%E7%AB%8B%E4%B8%80%E4%B8%AABitSet%EF%BC%8C%E5%B0%86%E6%AF%8F%E4%B8%AAURL%E7%BB%8F%E8%BF%87%E4%B8%80%E4%B8%AA%E5%93%88%E5%B8%8C%E5%87%BD%E6%95%B0%E6%98%A0%E5%B0%84%E5%88%B0%E6%9F%90%E4%B8%80%E4%BD%8D%E3%80%82" target="_blank" rel="noopener noreferrer">参考</a></p></blockquote><p>布隆过滤器内部维护一个bitArray(位数组)， 开始所有数据全部置 0 。当一个元素过来时，能过多个哈希函数（hash1,hash2,hash3…）计算不同的在哈希值，并通过哈希值找到对应的bitArray下标处，将里面的值 0 置为 1 。</p><p><img src="https://pic2.zhimg.com/80/v2-7572106f61beee652f18a4434fa20221_1440w.webp" alt="img" loading="lazy"></p><p>误报率(False positive)，又叫假阳性。这个意思抽象出来，就是把本来不存在的事物(False)误报为已存在事物(Positive)的错误率。在一般的应用场景中，有极小的误报率是可以被接受的。比如爬虫时，少爬几个网页并没有什么太大关系；医疗检查时，一个健康的人被医生误判我们患了某种疾病(False Positive)，总比一个有病的人没有被检查出来(False Negative)要强得多。我们把后面一种情况称为假阴性，也就是“漏报”。误判率越低，则数组越长，所占空间越大。误判率越高则数组越小，所占的空间越小。</p><p><img src="https://pic3.zhimg.com/80/v2-b6441a82b7ac04b9a87fed762226f71a_1440w.webp" alt="img" loading="lazy"></p><h2 id="应用场景" tabindex="-1"><a class="header-anchor" href="#应用场景"><span>应用场景</span></a></h2><p>HTTP 缓存服务器、Web 爬虫等</p><p>主要工作是判断一条 URL 是否在现有的 URL 集合之中（可以认为这里的数据量级上亿）。</p><p>对于 HTTP 缓存服务器，当本地局域网中的 PC 发起一条 HTTP 请求时，缓存服务器会先查看一下这个 URL 是否已经存在于缓存之中，如果存在的话就没有必要去原始的服务器拉取数据了（为了简单起见，我们假设数据没有发生变化），这样既能节省流量，还能加快访问速度，以提高用户体验。</p><p>对于 Web 爬虫，要判断当前正在处理的网页是否已经处理过了，同样需要当前 URL 是否存在于已经处理过的 URL 列表之中。</p><p>垃圾邮件过滤</p><p>假设邮件服务器通过发送方的邮件域或者IP地址对垃圾邮件进行过滤，那么就需要判断当前的邮件域或者 IP 地址是否处于黑名单之中。如果邮件服务器的通信邮件数量非常大（也可以认为数据量级上亿），那么也可以使用 Bloom Filter 算法。</p>',26)]))}const m=t(a,[["render",r],["__file","bloomfilter.html.vue"]]),n=JSON.parse(`{"path":"/algo/faq/big-data/bloomfilter.html","title":"布隆过滤器","lang":"en-US","frontmatter":{"description":"布隆过滤器 标准布隆过滤器 Standard Bloom Filter 计数布隆过滤器 Counting Bloom Filter 如果我们想要进一步节省空间，并且容许较小的误差的话，还可以使用布隆过滤器(B引oom Filter)进一步优化。布隆过滤器就是基于Bitmap实现的，只是多加了哈希函数映射这一步。 Bloom Filter是一个叫做Blo...","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/algo/faq/big-data/bloomfilter.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"布隆过滤器"}],["meta",{"property":"og:description","content":"布隆过滤器 标准布隆过滤器 Standard Bloom Filter 计数布隆过滤器 Counting Bloom Filter 如果我们想要进一步节省空间，并且容许较小的误差的话，还可以使用布隆过滤器(B引oom Filter)进一步优化。布隆过滤器就是基于Bitmap实现的，只是多加了哈希函数映射这一步。 Bloom Filter是一个叫做Blo..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://pic2.zhimg.com/80/v2-7572106f61beee652f18a4434fa20221_1440w.webp"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-11-22T03:36:46.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-22T03:36:46.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"布隆过滤器\\",\\"image\\":[\\"https://pic2.zhimg.com/80/v2-7572106f61beee652f18a4434fa20221_1440w.webp\\",\\"https://pic3.zhimg.com/80/v2-b6441a82b7ac04b9a87fed762226f71a_1440w.webp\\"],\\"dateModified\\":\\"2024-11-22T03:36:46.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[{"level":2,"title":"原理","slug":"原理","link":"#原理","children":[]},{"level":2,"title":"应用场景","slug":"应用场景","link":"#应用场景","children":[]}],"git":{"createdTime":1732244737000,"updatedTime":1732246606000,"contributors":[{"name":"David Liu","email":"liudawei@seas.upenn.edu","commits":1}]},"readingTime":{"minutes":5.23,"words":1569},"filePathRelative":"algo/faq/big-data/bloomfilter.md","localizedDate":"November 22, 2024","excerpt":"\\n<ul>\\n<li>标准布隆过滤器 Standard Bloom Filter</li>\\n<li>计数布隆过滤器 Counting Bloom Filter</li>\\n</ul>\\n<p>如果我们想要进一步节省空间，并且容许较小的误差的话，还可以使用布隆过滤器(B引oom Filter)进一步优化。布隆过滤器就是基于Bitmap实现的，只是多加了哈希函数映射这一步。</p>\\n<p>Bloom Filter是一个叫做Bloom的老哥于1970年提出的。我们可以把它看作由Bitmap和一系列随机映射函数（哈希函数）两部分组成的数据结构。相比于传统的Bitmap，Bloom Filter占用的空间更少，但其结果不一定是完全准确的。bloomfilter说不存在则一定不存在，说存在时不一定存在。</p>","autoDesc":true}`);export{m as comp,n as data};
