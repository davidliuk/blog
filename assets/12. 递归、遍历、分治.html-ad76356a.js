import{_ as a,V as p,W as e,a0 as r}from"./framework-705b829b.js";const i={},d=r('<h1 id="递归、遍历、分治" tabindex="-1"><a class="header-anchor" href="#递归、遍历、分治" aria-hidden="true">#</a> 递归、遍历、分治</h1><p>递归、深搜、回溯</p><p>Recursion DFS Backtracking</p><p>区别与联系</p><h3 id="递归-recursion" tabindex="-1"><a class="header-anchor" href="#递归-recursion" aria-hidden="true">#</a> 递归 Recursion</h3><p>递归函数：函数自我调用</p><p>递归算法：大问题的结果依赖于小问题的结果，于是先用递归函数解决小问题</p><p>一般我们说的递归指的是递归函数</p><h3 id="深度优先搜索" tabindex="-1"><a class="header-anchor" href="#深度优先搜索" aria-hidden="true">#</a> 深度优先搜索</h3><p>可以使用递归函数来实现</p><p>也可以不用递归函数，如自己通过一个手动创建的Stack</p><h3 id="回溯" tabindex="-1"><a class="header-anchor" href="#回溯" aria-hidden="true">#</a> 回溯</h3><ul><li>回溯法：就是深度优先搜素算法</li><li>回溯操作：递归函数在回到上一层递归调用处的时候，一些状态参数需要调回调用之前的值，这个操作就是回溯；调用前状态参数是什么样，递归后都改回来</li></ul><p>list、数组这些往往需要自己回溯过去</p><p>（本质上dfs就会有回溯，只是普通的dfs回溯当前的节点是操作系统实现的非递归的dfs是自己写栈去回溯的）</p><h2 id="遍历与分治" tabindex="-1"><a class="header-anchor" href="#遍历与分治" aria-hidden="true">#</a> 遍历与分治</h2><p>遍历：一个小人拿着记事本走遍所有的节点</p><p>分治：分配小弟去做子任务，自己进行结果汇总</p><p>![截屏2022-07-11 17.01.02](/Users/davidliu/Library/Application Support/typora-user-images/截屏2022-07-11 17.01.02.png)</p><h3 id="遍历法" tabindex="-1"><a class="header-anchor" href="#遍历法" aria-hidden="true">#</a> 遍历法</h3><p>![截屏2022-07-11 16.59.06](/Users/davidliu/Library/Application Support/typora-user-images/截屏2022-07-11 16.59.06.png)</p><p>所有路径都走一遍，不利用返回值</p><h3 id="分治" tabindex="-1"><a class="header-anchor" href="#分治" aria-hidden="true">#</a> 分治</h3><p>会利用return（返回值）方法</p><p>本质上是后序遍历</p><p>问题可分割，拆分成同样的子问题</p><p>拆开来左右两边不能有交集</p><p>分治法模板：</p><p>![截屏2022-07-11 16.50.26](/Users/davidliu/Library/Application Support/typora-user-images/截屏2022-07-11 16.50.26.png)</p><p>百分之90的题不需要单独处理叶子结点，因为可以直接向空进行调用</p><p>例题：判断二叉树是否平衡</p><p>![截屏2022-07-11 17.11.17](/Users/davidliu/Library/Application Support/typora-user-images/截屏2022-07-11 17.11.17.png)</p><p>需要返回多个值时，采用定义类的方法</p><p>什么时候需要手动回溯、什么时候不需要</p><p>找点、找路径</p><p>回溯可以避免对象复制造成的内存浪费</p>',36),s=[d];function t(n,h){return p(),e("div",null,s)}const o=a(i,[["render",t],["__file","12. 递归、遍历、分治.html.vue"]]);export{o as default};
