import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as e,a as t,o as p}from"./app-D4ZvIHfO.js";const m={};function o(l,a){return p(),e("div",null,a[0]||(a[0]=[t("h1",{id:"bitmap",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#bitmap"},[t("span",null,"Bitmap")])],-1),t("p",null,"对于这种大数据量去重的场景，我们可以考虑使用位图(Bitmap)。位图可以在不占用太多内存的前提下，解决海量数据的存在性问题，进而实现去重。",-1),t("p",null,"Bitmap是一种用于存储二进制数据的数据结构。简单来说，Bitmap就是使用二进制位来表示某个元素是否存在的数组。每一位只有两种状态，可以方便地用0和1来表示存在与不存在。",-1),t("p",null,"使用Bitmap的话，一个数字只需要占用1个bit。",-1),t("p",null,"Bitmap的常见应用场景如下：",-1),t("ol",null,[t("li",null,"去重：如果需要对一个大的数据集进行去重操作，可以使用Bloom Filter来记录每个元素是否出现过。比如爬给定网址的时候对已经爬取过的URL去重、对巨量的QQ号/订单号去重。"),t("li",null,"数据统计：Bitmap可以用来记录某些特定事件发生的情况，例如某个用户是否登录、某个用户是否点赞过某个视频等。"),t("li",null,"布隆过滤器：布隆过滤器是一种基于Bitmap的数据结构，主要用于判断一个元素是否存在于一个大的集合中。相遇Bitmap,占用的空间更少，但其结果不一定是完全准确的。")],-1)]))}const d=i(m,[["render",o],["__file","bitmap.html.vue"]]),c=JSON.parse(`{"path":"/algo/faq/big-data/bitmap.html","title":"Bitmap","lang":"en-US","frontmatter":{"description":"Bitmap 对于这种大数据量去重的场景，我们可以考虑使用位图(Bitmap)。位图可以在不占用太多内存的前提下，解决海量数据的存在性问题，进而实现去重。 Bitmap是一种用于存储二进制数据的数据结构。简单来说，Bitmap就是使用二进制位来表示某个元素是否存在的数组。每一位只有两种状态，可以方便地用0和1来表示存在与不存在。 使用Bitmap的话，...","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/algo/faq/big-data/bitmap.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"Bitmap"}],["meta",{"property":"og:description","content":"Bitmap 对于这种大数据量去重的场景，我们可以考虑使用位图(Bitmap)。位图可以在不占用太多内存的前提下，解决海量数据的存在性问题，进而实现去重。 Bitmap是一种用于存储二进制数据的数据结构。简单来说，Bitmap就是使用二进制位来表示某个元素是否存在的数组。每一位只有两种状态，可以方便地用0和1来表示存在与不存在。 使用Bitmap的话，..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-11-22T03:36:46.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-22T03:36:46.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Bitmap\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-22T03:36:46.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[],"git":{"createdTime":1732244737000,"updatedTime":1732246606000,"contributors":[{"name":"David Liu","email":"liudawei@seas.upenn.edu","commits":1}]},"readingTime":{"minutes":1.14,"words":343},"filePathRelative":"algo/faq/big-data/bitmap.md","localizedDate":"November 22, 2024","excerpt":"\\n<p>对于这种大数据量去重的场景，我们可以考虑使用位图(Bitmap)。位图可以在不占用太多内存的前提下，解决海量数据的存在性问题，进而实现去重。</p>\\n<p>Bitmap是一种用于存储二进制数据的数据结构。简单来说，Bitmap就是使用二进制位来表示某个元素是否存在的数组。每一位只有两种状态，可以方便地用0和1来表示存在与不存在。</p>\\n<p>使用Bitmap的话，一个数字只需要占用1个bit。</p>\\n<p>Bitmap的常见应用场景如下：</p>\\n<ol>\\n<li>去重：如果需要对一个大的数据集进行去重操作，可以使用Bloom Filter来记录每个元素是否出现过。比如爬给定网址的时候对已经爬取过的URL去重、对巨量的QQ号/订单号去重。</li>\\n<li>数据统计：Bitmap可以用来记录某些特定事件发生的情况，例如某个用户是否登录、某个用户是否点赞过某个视频等。</li>\\n<li>布隆过滤器：布隆过滤器是一种基于Bitmap的数据结构，主要用于判断一个元素是否存在于一个大的集合中。相遇Bitmap,占用的空间更少，但其结果不一定是完全准确的。</li>\\n</ol>","autoDesc":true}`);export{d as comp,c as data};
