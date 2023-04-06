const e=JSON.parse(`{"key":"v-62b1adbc","path":"/cs/database/redis/principal/data-structure/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84.html","title":"数据结构","lang":"en-US","frontmatter":{"description":"数据结构 SDS 动态字符串 Redis中保存的Key是字符串，value往往是字符串或者字符串的集合。可见字符串是Redis中最常用的一种数据结构。 String缺点 Redis没有直接使用C语言中的String，因为C语言字符串存在很多问题： 获取字符串长度的需要通过遍历，On 非二进制安全（用特殊标识标志结束\\\\0），如果内容有\\\\0会导致提早结束 不可修改（本质是定长字符数组，不会动态扩容），可能发生缓冲区溢出","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/cs/database/redis/principal/data-structure/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"数据结构"}],["meta",{"property":"og:description","content":"数据结构 SDS 动态字符串 Redis中保存的Key是字符串，value往往是字符串或者字符串的集合。可见字符串是Redis中最常用的一种数据结构。 String缺点 Redis没有直接使用C语言中的String，因为C语言字符串存在很多问题： 获取字符串长度的需要通过遍历，On 非二进制安全（用特殊标识标志结束\\\\0），如果内容有\\\\0会导致提早结束 不可修改（本质是定长字符数组，不会动态扩容），可能发生缓冲区溢出"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-04-03T03:29:06.000Z"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2023-04-03T03:29:06.000Z"}],["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://davidliuk.github.io/blog/blog/zh/cs/database/redis/principal/data-structure/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84.html"}]]},"headers":[{"level":2,"title":"SDS","slug":"sds","link":"#sds","children":[{"level":3,"title":"String缺点","slug":"string缺点","link":"#string缺点","children":[]},{"level":3,"title":"动态扩容","slug":"动态扩容","link":"#动态扩容","children":[]},{"level":3,"title":"结构","slug":"结构","link":"#结构","children":[]},{"level":3,"title":"SDS的优点","slug":"sds的优点","link":"#sds的优点","children":[]}]},{"level":2,"title":"IntSet","slug":"intset","link":"#intset","children":[{"level":3,"title":"升级","slug":"升级","link":"#升级","children":[]},{"level":3,"title":"扩容","slug":"扩容","link":"#扩容","children":[]}]},{"level":2,"title":"Dict","slug":"dict","link":"#dict","children":[{"level":3,"title":"结构","slug":"结构-1","link":"#结构-1","children":[]},{"level":3,"title":"rehash","slug":"rehash","link":"#rehash","children":[]}]},{"level":2,"title":"ZipList","slug":"ziplist","link":"#ziplist","children":[{"level":3,"title":"跳表节点查询过程","slug":"跳表节点查询过程","link":"#跳表节点查询过程","children":[]},{"level":3,"title":"跳表节点层数设置","slug":"跳表节点层数设置","link":"#跳表节点层数设置","children":[]},{"level":3,"title":"相比于红黑树的优势","slug":"相比于红黑树的优势","link":"#相比于红黑树的优势","children":[]}]},{"level":2,"title":"List","slug":"list","link":"#list","children":[]},{"level":2,"title":"压缩列表","slug":"压缩列表","link":"#压缩列表","children":[]},{"level":2,"title":"quicklist","slug":"quicklist","link":"#quicklist","children":[]},{"level":2,"title":"Listpack","slug":"listpack","link":"#listpack","children":[]}],"git":{"createdTime":1677504602000,"updatedTime":1680492546000,"contributors":[{"name":"davidliuk","email":"l729641074@163.com","commits":3},{"name":"刘大维","email":"davidliu@liudaweideMacBook-Pro.local","commits":1}]},"readingTime":{"minutes":10.91,"words":3272},"localizedDate":"February 27, 2023","filePathRelative":"cs/database/redis/principal/data-structure/数据结构.md","excerpt":"<h1> 数据结构</h1>\\n<h2> SDS</h2>\\n<p>动态字符串</p>\\n<p>Redis中保存的Key是字符串，value往往是字符串或者字符串的集合。可见字符串是Redis中最常用的一种数据结构。</p>\\n<h3> String缺点</h3>\\n<p>Redis没有直接使用C语言中的String，因为C语言字符串存在很多问题：</p>\\n<ul>\\n<li>获取字符串长度的需要通过遍历，On</li>\\n<li>非二进制安全（用特殊标识标志结束<code>\\\\0</code>），如果内容有<code>\\\\0</code>会导致提早结束</li>\\n<li>不可修改（本质是定长字符数组，不会动态扩容），可能发生缓冲区溢出</li>\\n</ul>","autoDesc":true}`);export{e as data};
