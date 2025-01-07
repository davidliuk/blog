import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as t,d as n,o as i}from"./app-ChU1gMRF.js";const p={};function l(r,e){return i(),t("div",null,e[0]||(e[0]=[n('<h1 id="递归、遍历、分治" tabindex="-1"><a class="header-anchor" href="#递归、遍历、分治"><span>递归、遍历、分治</span></a></h1><h2 id="递归、深搜、回溯" tabindex="-1"><a class="header-anchor" href="#递归、深搜、回溯"><span>递归、深搜、回溯</span></a></h2><p>Recursion DFS Backtracking</p><h3 id="递归-recursion" tabindex="-1"><a class="header-anchor" href="#递归-recursion"><span>递归 Recursion</span></a></h3><p>递归函数：函数自我调用</p><p>递归算法：大问题的结果依赖于小问题的结果，于是先用递归函数解决小问题</p><p>一般我们说的递归指的是递归函数</p><h3 id="深度优先搜索" tabindex="-1"><a class="header-anchor" href="#深度优先搜索"><span>深度优先搜索</span></a></h3><p>可以使用递归函数来实现</p><p>也可以不用递归函数，如自己通过一个手动创建的Stack</p><h3 id="回溯" tabindex="-1"><a class="header-anchor" href="#回溯"><span>回溯</span></a></h3><ul><li>回溯法：就是深度优先搜素算法</li><li>回溯操作：递归函数在回到上一层递归调用处的时候，一些状态参数需要调回调用之前的值，这个操作就是回溯；调用前状态参数是什么样，递归后都改回来</li></ul><p>引用传递的list、数组这些往往需要自己回溯过去</p><p>（本质上dfs就会有回溯，只是普通的dfs回溯当前的节点是操作系统实现的非递归的dfs是自己写栈去回溯的）</p><h2 id="遍历与分治" tabindex="-1"><a class="header-anchor" href="#遍历与分治"><span>遍历与分治</span></a></h2><p>遍历：一个小人拿着记事本走遍所有的节点</p><p>分治：分配小弟去做子任务，自己进行结果汇总</p><p><img src="https://cdn.jsdelivr.net/gh/davidliuk/images@master/blog/截屏2022-07-11 17.01.02.png" alt="截屏2022-07-11 17.01.02" loading="lazy"></p><h3 id="遍历法" tabindex="-1"><a class="header-anchor" href="#遍历法"><span>遍历法</span></a></h3><p>所有路径都走一遍，不利用返回值</p><h3 id="分治" tabindex="-1"><a class="header-anchor" href="#分治"><span>分治</span></a></h3><p>会利用 return（返回值）方法</p><p>本质上是后序遍历</p><p>问题可分割，拆分成同样的子问题</p><p>拆开来左右两边不能有交集</p><p>分治法模板：</p><p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/截屏2022-07-11 16.50.26.png" alt="截屏2022-07-11 16.50.26" loading="lazy"></p><p>百分之90的题不需要单独处理叶子结点，因为可以直接向空进行调用</p><p>例题：判断二叉树是否平衡</p><p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/截屏2022-07-11 17.11.17.png" alt="截屏2022-07-11 17.11.17" loading="lazy"></p><p>需要返回多个值时，采用定义类的方法</p><p>什么时候需要手动回溯、什么时候不需要</p><p>找点、找路径</p><p>回溯可以避免对象复制造成的内存浪费</p>',34)]))}const c=a(p,[["render",l],["__file","12. 递归、遍历、分治.html.vue"]]),d=JSON.parse(`{"path":"/algo/course/jz/dfs/12.%20%E9%80%92%E5%BD%92%E3%80%81%E9%81%8D%E5%8E%86%E3%80%81%E5%88%86%E6%B2%BB.html","title":"递归、遍历、分治","lang":"en-US","frontmatter":{"description":"递归、遍历、分治 递归、深搜、回溯 Recursion DFS Backtracking 递归 Recursion 递归函数：函数自我调用 递归算法：大问题的结果依赖于小问题的结果，于是先用递归函数解决小问题 一般我们说的递归指的是递归函数 深度优先搜索 可以使用递归函数来实现 也可以不用递归函数，如自己通过一个手动创建的Stack 回溯 回溯法：就是...","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/algo/course/jz/dfs/12.%20%E9%80%92%E5%BD%92%E3%80%81%E9%81%8D%E5%8E%86%E3%80%81%E5%88%86%E6%B2%BB.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"递归、遍历、分治"}],["meta",{"property":"og:description","content":"递归、遍历、分治 递归、深搜、回溯 Recursion DFS Backtracking 递归 Recursion 递归函数：函数自我调用 递归算法：大问题的结果依赖于小问题的结果，于是先用递归函数解决小问题 一般我们说的递归指的是递归函数 深度优先搜索 可以使用递归函数来实现 也可以不用递归函数，如自己通过一个手动创建的Stack 回溯 回溯法：就是..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/davidliuk/images@master/blog/%E6%88%AA%E5%B1%8F2022-07-11%2017.01.02.png"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-12-17T16:38:04.000Z"}],["meta",{"property":"article:modified_time","content":"2024-12-17T16:38:04.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"递归、遍历、分治\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/davidliuk/images@master/blog/%E6%88%AA%E5%B1%8F2022-07-11%2017.01.02.png\\",\\"https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/%E6%88%AA%E5%B1%8F2022-07-11%2016.50.26.png\\",\\"https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/%E6%88%AA%E5%B1%8F2022-07-11%2017.11.17.png\\"],\\"dateModified\\":\\"2024-12-17T16:38:04.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[{"level":2,"title":"递归、深搜、回溯","slug":"递归、深搜、回溯","link":"#递归、深搜、回溯","children":[{"level":3,"title":"递归 Recursion","slug":"递归-recursion","link":"#递归-recursion","children":[]},{"level":3,"title":"深度优先搜索","slug":"深度优先搜索","link":"#深度优先搜索","children":[]},{"level":3,"title":"回溯","slug":"回溯","link":"#回溯","children":[]}]},{"level":2,"title":"遍历与分治","slug":"遍历与分治","link":"#遍历与分治","children":[{"level":3,"title":"遍历法","slug":"遍历法","link":"#遍历法","children":[]},{"level":3,"title":"分治","slug":"分治","link":"#分治","children":[]}]}],"git":{"createdTime":1732244737000,"updatedTime":1734453484000,"contributors":[{"name":"刘大维","email":"davidliu@liudaweideMacBook-Pro-3.local","commits":1}]},"readingTime":{"minutes":1.73,"words":518},"filePathRelative":"algo/course/jz/dfs/12. 递归、遍历、分治.md","localizedDate":"November 22, 2024","excerpt":"\\n<h2>递归、深搜、回溯</h2>\\n<p>Recursion DFS Backtracking</p>\\n<h3>递归 Recursion</h3>\\n<p>递归函数：函数自我调用</p>\\n<p>递归算法：大问题的结果依赖于小问题的结果，于是先用递归函数解决小问题</p>\\n<p>一般我们说的递归指的是递归函数</p>\\n<h3>深度优先搜索</h3>\\n<p>可以使用递归函数来实现</p>\\n<p>也可以不用递归函数，如自己通过一个手动创建的Stack</p>\\n<h3>回溯</h3>\\n<ul>\\n<li>回溯法：就是深度优先搜素算法</li>\\n<li>回溯操作：递归函数在回到上一层递归调用处的时候，一些状态参数需要调回调用之前的值，这个操作就是回溯；调用前状态参数是什么样，递归后都改回来</li>\\n</ul>","autoDesc":true}`);export{c as comp,d as data};
