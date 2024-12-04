import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as l,d as i,o as t}from"./app-CybQbXIt.js";const n={};function a(r,p){return t(),l("div",null,p[0]||(p[0]=[i('<p>回顾上一章的内容</p><p>二阶阶乘</p><p>使用普通递归来解决</p><p>把普通递归转化成尾递归</p><p>把尾递归转化成迭代</p><p>颠倒二进制位</p><p>使用普通递归来解决</p><p>把普通递归转化成尾递归</p><p>把尾递归转化成迭代</p><hr><p>参数传递</p><p>值传递</p><p>引用传递</p><p>递归三要素</p><p>递归的定义</p><p>递归的拆解</p><p>递归的出口</p><p>爆栈</p><p>递归调用将栈空间消耗完</p><hr><p>尾递归</p><p>尾递归的特点</p><ul><li>函数中所有递归形式的调用都出现在函数的末尾</li><li>递归调用不属于表达式的一部分</li></ul><p>尾递归的作用</p><ul><li>尾递归的调用不会在栈中去创建一个新的</li><li>而是覆盖当前的活动记录</li></ul><p>为什么可以尾递归</p><ul><li>在回归过程中不用做任何操作</li></ul><hr><p>支持尾递归的语言</p><ul><li>Kotlin</li><li>Haskell</li></ul><p>不支持尾递归的语言</p><ul><li>Java</li><li>Python</li><li>C++</li></ul><hr><p>不支持尾递归优化的语言如何避免爆栈</p><p>尾递归优化就是把递归改成迭代形式</p><hr><h3 id="如何改成迭代呢" tabindex="-1"><a class="header-anchor" href="#如何改成迭代呢"><span>如何改成迭代呢</span></a></h3><p>模拟递归中调用下一层的参数传递过程</p><ol><li>先做完本层递归的事儿</li><li>再计算出下一层递归的各个参数</li><li>然后把值赋给当前层的各个参数</li></ol><h2 id="妙用" tabindex="-1"><a class="header-anchor" href="#妙用"><span>妙用</span></a></h2><p>两两交换链表中的节点</p><ul><li><p>递归的方式</p></li><li><p>迭代的方式</p></li></ul><p>经典二分查找问题</p><ul><li><p>普通写法的递归方式</p></li><li><p>二分查找的递归方式</p></li></ul><p>快速幂</p><ul><li><p>普通写法的递归方式</p></li><li><p>快速幂的递归方式</p></li></ul><h2 id="递归时间复杂度的分析" tabindex="-1"><a class="header-anchor" href="#递归时间复杂度的分析"><span>递归时间复杂度的分析</span></a></h2><p>时间复杂度= 函数参数的可能组合*每层递归的处理时间</p><p>函数参数的可能组合 ：O(n)</p><p>每层递归的时间：O(1)</p>',50)]))}const c=e(n,[["render",a],["__file","单向递归.html.vue"]]),u=JSON.parse(`{"path":"/algo/summary/search/DFS/recursion/%E5%8D%95%E5%90%91%E9%80%92%E5%BD%92.html","title":"","lang":"en-US","frontmatter":{"description":"回顾上一章的内容 二阶阶乘 使用普通递归来解决 把普通递归转化成尾递归 把尾递归转化成迭代 颠倒二进制位 使用普通递归来解决 把普通递归转化成尾递归 把尾递归转化成迭代 参数传递 值传递 引用传递 递归三要素 递归的定义 递归的拆解 递归的出口 爆栈 递归调用将栈空间消耗完 尾递归 尾递归的特点 函数中所有递归形式的调用都出现在函数的末尾 递归调用不属...","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/algo/summary/search/DFS/recursion/%E5%8D%95%E5%90%91%E9%80%92%E5%BD%92.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:description","content":"回顾上一章的内容 二阶阶乘 使用普通递归来解决 把普通递归转化成尾递归 把尾递归转化成迭代 颠倒二进制位 使用普通递归来解决 把普通递归转化成尾递归 把尾递归转化成迭代 参数传递 值传递 引用传递 递归三要素 递归的定义 递归的拆解 递归的出口 爆栈 递归调用将栈空间消耗完 尾递归 尾递归的特点 函数中所有递归形式的调用都出现在函数的末尾 递归调用不属..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-11-22T03:05:37.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-22T03:05:37.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-22T03:05:37.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[{"level":3,"title":"如何改成迭代呢","slug":"如何改成迭代呢","link":"#如何改成迭代呢","children":[]},{"level":2,"title":"妙用","slug":"妙用","link":"#妙用","children":[]},{"level":2,"title":"递归时间复杂度的分析","slug":"递归时间复杂度的分析","link":"#递归时间复杂度的分析","children":[]}],"git":{"createdTime":1732244737000,"updatedTime":1732244737000,"contributors":[{"name":"David Liu","email":"liudawei@seas.upenn.edu","commits":1}]},"readingTime":{"minutes":1.54,"words":461},"filePathRelative":"algo/summary/search/DFS/recursion/单向递归.md","localizedDate":"November 22, 2024","excerpt":"<p>回顾上一章的内容</p>\\n<p>二阶阶乘</p>\\n<p>使用普通递归来解决</p>\\n<p>把普通递归转化成尾递归</p>\\n<p>把尾递归转化成迭代</p>\\n<p>颠倒二进制位</p>\\n<p>使用普通递归来解决</p>\\n<p>把普通递归转化成尾递归</p>\\n<p>把尾递归转化成迭代</p>\\n<hr>\\n<p>参数传递</p>\\n<p>值传递</p>\\n<p>引用传递</p>\\n<p>递归三要素</p>\\n<p>递归的定义</p>\\n<p>递归的拆解</p>\\n<p>递归的出口</p>\\n<p>爆栈</p>\\n<p>递归调用将栈空间消耗完</p>\\n<hr>\\n<p>尾递归</p>\\n<p>尾递归的特点</p>\\n<ul>\\n<li>函数中所有递归形式的调用都出现在函数的末尾</li>\\n<li>递归调用不属于表达式的一部分</li>\\n</ul>","autoDesc":true}`);export{c as comp,u as data};
