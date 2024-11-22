import{_ as p}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as t,d as n,o as i}from"./app-DtA_0glx.js";const a={};function r(l,e){return i(),t("div",null,e[0]||(e[0]=[n('<h1 id="递归" tabindex="-1"><a class="header-anchor" href="#递归"><span>递归</span></a></h1><p>啥是递归？</p><p>当函数直接或者间接调用自己时，则发生了递归</p><p>递归的定义：参见“递归的定义”</p><hr><p>递归的三要素</p><ul><li><p>递归的定义 (接收什么参数, 返回什么值, 代表什么含义)</p></li><li><p>递归的拆解 (把大问题拆解成小问题)（或者叫转移）</p></li><li><p>递归的出口 (到什么时候结束)</p></li></ul><hr><p>迭代形式与递归形式比较</p><p>时间复杂度：迭代O(n), 递归O(n)</p><p>空间复杂度：迭代O(1), 递归O(n)</p><p>递归的O(n)空间是栈空间 or 堆空间？</p><hr><h3 id="内存中的堆和栈" tabindex="-1"><a class="header-anchor" href="#内存中的堆和栈"><span>内存中的堆和栈</span></a></h3><p>堆空间</p><ul><li>存放 new 得到的对象</li><li>无限制 (剩余内存的大小)</li></ul><p>栈空间</p><ul><li>存放对象的引用</li><li>值类型变量</li><li>C++函数中的数组</li><li>有限制, 一般很小, MB量级</li><li>函数调用栈</li></ul><p>函数调用栈</p><p>想象一个“圆筒”，调用的函数需要放到筒里</p><p>第一个进入“圆筒”的是main函数</p><p>每发生一次新的函数调用，就会有一个新函数进入“圆筒”</p><p>正在执行的就是最上面的函数</p><p>一个函数执行完毕，就会被拿出来</p><p>圆筒满了怎么办？</p><p>N 如果过大，有可能还没来得及从圆筒中拿出函数圆筒就满了</p><p>递归需谨慎</p><p>递归调用容易爆栈</p><p>人为调用栈不会爆栈</p><p>除非在C/C++的函数中定义大数组——危险行为</p>',30)]))}const s=p(a,[["render",r],["__file","index.html.vue"]]),d=JSON.parse(`{"path":"/algo/summary/search/DFS/recursion/","title":"递归","lang":"en-US","frontmatter":{"description":"递归 啥是递归？ 当函数直接或者间接调用自己时，则发生了递归 递归的定义：参见“递归的定义” 递归的三要素 递归的定义 (接收什么参数, 返回什么值, 代表什么含义) 递归的拆解 (把大问题拆解成小问题)（或者叫转移） 递归的出口 (到什么时候结束) 迭代形式与递归形式比较 时间复杂度：迭代O(n), 递归O(n) 空间复杂度：迭代O(1), 递归O(...","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/algo/summary/search/DFS/recursion/"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"递归"}],["meta",{"property":"og:description","content":"递归 啥是递归？ 当函数直接或者间接调用自己时，则发生了递归 递归的定义：参见“递归的定义” 递归的三要素 递归的定义 (接收什么参数, 返回什么值, 代表什么含义) 递归的拆解 (把大问题拆解成小问题)（或者叫转移） 递归的出口 (到什么时候结束) 迭代形式与递归形式比较 时间复杂度：迭代O(n), 递归O(n) 空间复杂度：迭代O(1), 递归O(..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-11-22T03:05:37.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-22T03:05:37.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"递归\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-22T03:05:37.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[{"level":3,"title":"内存中的堆和栈","slug":"内存中的堆和栈","link":"#内存中的堆和栈","children":[]}],"git":{"createdTime":1732244737000,"updatedTime":1732244737000,"contributors":[{"name":"David Liu","email":"liudawei@seas.upenn.edu","commits":1}]},"readingTime":{"minutes":1.24,"words":371},"filePathRelative":"algo/summary/search/DFS/recursion/README.md","localizedDate":"November 22, 2024","excerpt":"\\n<p>啥是递归？</p>\\n<p>当函数直接或者间接调用自己时，则发生了递归</p>\\n<p>递归的定义：参见“递归的定义”</p>\\n<hr>\\n<p>递归的三要素</p>\\n<ul>\\n<li>\\n<p>递归的定义 (接收什么参数, 返回什么值, 代表什么含义)</p>\\n</li>\\n<li>\\n<p>递归的拆解 (把大问题拆解成小问题)（或者叫转移）</p>\\n</li>\\n<li>\\n<p>递归的出口 (到什么时候结束)</p>\\n</li>\\n</ul>\\n<hr>\\n<p>迭代形式与递归形式比较</p>\\n<p>时间复杂度：迭代O(n), 递归O(n)</p>\\n<p>空间复杂度：迭代O(1), 递归O(n)</p>","autoDesc":true}`);export{s as comp,d as data};
