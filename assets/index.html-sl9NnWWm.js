import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as e,d as a,o as n}from"./app-ktFCNIob.js";const t={};function p(o,l){return n(),e("div",null,l[0]||(l[0]=[a('<h1 id="summary" tabindex="-1"><a class="header-anchor" href="#summary"><span>Summary</span></a></h1><p>算法类型主要分为如下四种</p><ul><li><p>结构</p><ul><li>线</li><li>树</li><li>图</li><li>集</li></ul></li><li><p>搜索：brute force 暴力</p><ul><li><code>for</code>：固定的若干层for循环嵌套枚举，例如枚举每一个子数组（起点终点</li><li><code>DFS</code>：不定的若干层for循环递归枚举，例如枚举每一个子序列（每个元素</li><li><code>BFS</code></li></ul></li><li><p>优化</p><ul><li>剪枝：为搜索避免无效状态</li><li>动归：避免重复计算</li><li>减治：避免无效状态</li></ul></li><li><p>数学</p></li></ul><h2 id="复杂度" tabindex="-1"><a class="header-anchor" href="#复杂度"><span>复杂度</span></a></h2><h3 id="时间复杂度" tabindex="-1"><a class="header-anchor" href="#时间复杂度"><span>时间复杂度</span></a></h3><ul><li>big O</li></ul><h4 id="主方法" tabindex="-1"><a class="header-anchor" href="#主方法"><span>主方法</span></a></h4><p>用来分析递归的时间复杂度</p><h3 id="数据量推测解法" tabindex="-1"><a class="header-anchor" href="#数据量推测解法"><span>数据量推测解法</span></a></h3><p><strong>基本事实</strong></p><ul><li>C/C++运行时间1s，java/python/go等其他语言运行时间1-2s</li><li>对应的常数指令操作是10<sup>7-10</sup>8</li></ul><p><strong>必要条件</strong></p><ul><li>入参的范围最大值，笔试考试会给；面试去问数据规模</li><li>算法时间复杂度分析</li></ul><p><img src="https://cdn.jsdelivr.net/gh/davidliuk/images@master/blog/Screenshot 2024-12-18 at 5.36.11 PM.png" alt="Screenshot 2024-12-18 at 5.36.11 PM" loading="lazy"></p><ul><li>O(logn): <strong>二分法</strong>、快速幂、快速乘、GCD</li><li>O(n^0.5): 分块检索、分解质因数、判断质数（极少）</li><li>O(n)双指针，单调栈，枚举法、埃式筛法</li><li>O(nlogn)排序，O(nlogn的数据结构上的操作)</li><li>O(n^1.5), 莫队算法、质数筛选</li><li>O(n2),O(n3),动态规划等</li><li>O(2^n)组合类(combination)的搜索问题</li><li>O(N!)排列类(permutation)的搜索问题</li></ul><h2 id="正确性" tabindex="-1"><a class="header-anchor" href="#正确性"><span>正确性</span></a></h2><h3 id="loop-invariant" tabindex="-1"><a class="header-anchor" href="#loop-invariant"><span>Loop Invariant</span></a></h3><p>循环不变式，或循环不变量、循环不变性</p><p>循环不变式用来帮助理解算法的正确性。关于循环不变式，我们必须证明三条性质:</p><ul><li>初始化：循环的第一次迭代之前，它为真。</li><li>保持：如果循环的某次迭代之前它为真，那么下次迭代之前它仍为真。</li><li>终止：在循环终止时，不变式为我们提供一个有用的性质，该性质有助于证明算法是正确的。</li></ul><p>当前两条性质成立时，在循环的每次迭代之前循环不变式为真。（当然，为了证明循环不变式在每次迭代之前保持为真，我们完全可以使用不同于循环不变式本身的其他已证实的事实。）注意，这类似于数学归纳法，其中为了证明某条性质成立，需要证明一个基本情况和一个归纳步。这里，证明第一次迭代之前不变式成立对应于基本情况，证明从一次迭代到下一次迭代不变式成立对应于归纳步。</p><p>第三条性质也许是最重要的，因为我们将使用循环不变式来证明正确性。通常，我们和导致循环终止的条件一起使用循环不变式。终止性不同于我们通常使用数学归纳法的做法，在归纳法中，归纳步是无限地使用的，这里当循环终止时，停止“归纳”。</p><p>eg. 插入排序，<code>A[1..j-1]</code>表示前j个元素是有序数组。</p><h3 id="dp" tabindex="-1"><a class="header-anchor" href="#dp"><span>DP</span></a></h3><ul><li>最优子结构</li><li>重叠子问题</li></ul><h3 id="greedy" tabindex="-1"><a class="header-anchor" href="#greedy"><span>Greedy</span></a></h3><ul><li>最优子结构</li><li>贪心选择性</li></ul><h2 id="代码质量" tabindex="-1"><a class="header-anchor" href="#代码质量"><span>代码质量</span></a></h2><p>优化的逻辑：</p><ol><li>先想暴力的方法</li><li>看哪里有地方是浪费的</li></ol><h3 id="优秀的-coding-quality" tabindex="-1"><a class="header-anchor" href="#优秀的-coding-quality"><span>优秀的 Coding Quality</span></a></h3><ol><li><p>bug free</p></li><li><p>边界检测和异常处理</p></li><li><p>代码风格：命名、空格、空行</p><ol><li><p>每个逻辑 Part 之间一个空行划分</p><p>如异常判断、主体逻辑、结果返回，这些part之间一个分行</p></li><li><p>变量命名采用全称：1-2个单词，小驼峰</p></li><li><p>避免重复代码（泄露没有工程经验）</p></li><li><p>用不到的变量用_来命名（python、js和go注意）</p></li><li><p>尽可能避免全局变量</p></li><li><p>缩进：java是4个</p></li><li><p>空格</p><ol><li>运算符的前后要有</li><li>逗号、分号后面有</li></ol></li></ol></li></ol><p>写 Python 能大概减少10分钟的时间，如果是面试不限制语言的话，可以写Python</p><h3 id="独孤九剑-总决式" tabindex="-1"><a class="header-anchor" href="#独孤九剑-总决式"><span>独孤九剑 - 总决式</span></a></h3><p>想做到 bug free 最重要的是优化code Quality</p><p>单元运算符：--, ++, !</p><p>多用 continue 少用if：减少大段代码的缩进</p><p>尽量减少 else，如果前面的if里面执行了return或者continue、break等，后面就不需要 else if，直接普通的if，最后不需要else，直接普通的xxx</p><p>最好把嵌套式的改成并列的：好懂得多</p><p>避免 typo：拼写错误</p><p>Coding Style 相关:</p><ul><li>二元运算符两边加空格，单元运算符不加空格</li><li>花括号和 for, if 之间要加空格(Java)，圆括号和 if 之间要加空格</li><li>用空行分隔开不同的逻辑块</li><li>逗号后面加空格</li></ul><p>Readability 相关</p><ul><li>函数名和变量名用1-2个单词作为名称</li><li>确保一个函数内部不超过 3 层缩进(indention)</li><li>多用子函数来减少入口函数的代码量</li><li>多用 continue 少用 if</li></ul><p>Bug Free 相关</p><ul><li>不管有没有可能出问题，都要对入口函数的参数进行异常检测</li><li>访问一个下标的时候，一定要确保这个下标不会越界</li><li>访问一个对象的属性或者方法时，一定要确保这个对象不是空</li><li>不用全局变量</li></ul><h2 id="面试评价" tabindex="-1"><a class="header-anchor" href="#面试评价"><span>面试评价</span></a></h2><p>Coding(Algorithm) Interview 的评价体系主要有如下一些方面</p><ul><li>Logicality</li><li>Code Quality</li><li>Communication</li></ul><h3 id="logicality" tabindex="-1"><a class="header-anchor" href="#logicality"><span>Logicality</span></a></h3><p>逻辑思维能力</p><ul><li>是否能很快的想到一个 Working Solution</li><li>是否能够在面试官点出问题后优化自己的 Solution</li></ul><h3 id="code-quality" tabindex="-1"><a class="header-anchor" href="#code-quality"><span>Code Quality</span></a></h3><p>代码质量</p><ul><li><p>代码到底写完没有</p></li><li><p>代码风格好不好</p><ul><li>可读性</li><li>变量名、函数名命名</li><li>空格与空行的正确使用</li></ul></li><li><p>特殊情况 / 边界情况 (Edge Cases)</p></li><li><p>Bug Free</p></li></ul><h3 id="communication" tabindex="-1"><a class="header-anchor" href="#communication"><span>Communication</span></a></h3><p>沟通能力</p><p>把面试官当作 Co-worker 而不是考官，让面试官愿意和你一起工作</p><p>做一个题之前，先沟通清楚，得到面试官肯定，再开始写代码，写完以后再解释</p><ul><li><p>不要闷头写</p></li><li><p>不要一边写一边解释太多(容易写不完)</p></li></ul><p>可以要提示，经过提示做出来的题，也是可以拿到 Hire 的</p><ul><li>但是先自己努力想一下，别太容易放弃，容易让人觉得不会主动思考问题</li></ul><p>不要和面试官吵架</p><ul><li><p>面试官大概率是对的，面试官是带着答案来面试你的</p></li><li><p>不同意见在大部分情况下，很可能是你自己想错了</p></li></ul><p>会就会，不会就不会，不要遮遮掩掩，坦诚自信很重要</p><ul><li><p>容易让人觉得和你沟通“不顺畅”</p></li><li><p>做过的题就说做过，不要故意说没做过</p></li><li><p>因为他既然已经怀疑你做过了，即使你说没有，他也无法打消这个顾虑，还不如让他换题</p></li></ul><hr><p>九步骤：</p><ol><li>理解问题</li><li>复述问题</li><li>澄清问题</li><li>初步想法</li><li>实例分析</li><li>书写代码</li><li>测试检验</li><li>评判性能</li><li>优化解法</li></ol>',69)]))}const s=i(t,[["render",p],["__file","index.html.vue"]]),c=JSON.parse(`{"path":"/algo/summary/","title":"Summary","lang":"en-US","frontmatter":{"description":"Summary 算法类型主要分为如下四种 结构 线 树 图 集 搜索：brute force 暴力 for：固定的若干层for循环嵌套枚举，例如枚举每一个子数组（起点终点 DFS：不定的若干层for循环递归枚举，例如枚举每一个子序列（每个元素 BFS 优化 剪枝：为搜索避免无效状态 动归：避免重复计算 减治：避免无效状态 数学 复杂度 时间复杂度 bi...","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/algo/summary/"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"Summary"}],["meta",{"property":"og:description","content":"Summary 算法类型主要分为如下四种 结构 线 树 图 集 搜索：brute force 暴力 for：固定的若干层for循环嵌套枚举，例如枚举每一个子数组（起点终点 DFS：不定的若干层for循环递归枚举，例如枚举每一个子序列（每个元素 BFS 优化 剪枝：为搜索避免无效状态 动归：避免重复计算 减治：避免无效状态 数学 复杂度 时间复杂度 bi..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/davidliuk/images@master/blog/Screenshot%202024-12-18%20at%205.36.11%E2%80%AFPM.png"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2025-01-01T21:36:31.000Z"}],["meta",{"property":"article:modified_time","content":"2025-01-01T21:36:31.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Summary\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/davidliuk/images@master/blog/Screenshot%202024-12-18%20at%205.36.11%E2%80%AFPM.png\\"],\\"dateModified\\":\\"2025-01-01T21:36:31.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[{"level":2,"title":"复杂度","slug":"复杂度","link":"#复杂度","children":[{"level":3,"title":"时间复杂度","slug":"时间复杂度","link":"#时间复杂度","children":[]},{"level":3,"title":"数据量推测解法","slug":"数据量推测解法","link":"#数据量推测解法","children":[]}]},{"level":2,"title":"正确性","slug":"正确性","link":"#正确性","children":[{"level":3,"title":"Loop Invariant","slug":"loop-invariant","link":"#loop-invariant","children":[]},{"level":3,"title":"DP","slug":"dp","link":"#dp","children":[]},{"level":3,"title":"Greedy","slug":"greedy","link":"#greedy","children":[]}]},{"level":2,"title":"代码质量","slug":"代码质量","link":"#代码质量","children":[{"level":3,"title":"优秀的 Coding Quality","slug":"优秀的-coding-quality","link":"#优秀的-coding-quality","children":[]},{"level":3,"title":"独孤九剑 - 总决式","slug":"独孤九剑-总决式","link":"#独孤九剑-总决式","children":[]}]},{"level":2,"title":"面试评价","slug":"面试评价","link":"#面试评价","children":[{"level":3,"title":"Logicality","slug":"logicality","link":"#logicality","children":[]},{"level":3,"title":"Code Quality","slug":"code-quality","link":"#code-quality","children":[]},{"level":3,"title":"Communication","slug":"communication","link":"#communication","children":[]}]}],"git":{"createdTime":1732244737000,"updatedTime":1735767391000,"contributors":[{"name":"David Liu","email":"liudawei@seas.upenn.edu","commits":2},{"name":"刘大维","email":"davidliu@liudaweideMacBook-Pro-3.local","commits":1}]},"readingTime":{"minutes":5.8,"words":1741},"filePathRelative":"algo/summary/README.md","localizedDate":"November 22, 2024","excerpt":"\\n<p>算法类型主要分为如下四种</p>\\n<ul>\\n<li>\\n<p>结构</p>\\n<ul>\\n<li>线</li>\\n<li>树</li>\\n<li>图</li>\\n<li>集</li>\\n</ul>\\n</li>\\n<li>\\n<p>搜索：brute force 暴力</p>\\n<ul>\\n<li><code>for</code>：固定的若干层for循环嵌套枚举，例如枚举每一个子数组（起点终点</li>\\n<li><code>DFS</code>：不定的若干层for循环递归枚举，例如枚举每一个子序列（每个元素</li>\\n<li><code>BFS</code></li>\\n</ul>\\n</li>\\n<li>\\n<p>优化</p>\\n<ul>\\n<li>剪枝：为搜索避免无效状态</li>\\n<li>动归：避免重复计算</li>\\n<li>减治：避免无效状态</li>\\n</ul>\\n</li>\\n<li>\\n<p>数学</p>\\n</li>\\n</ul>","autoDesc":true}`);export{s as comp,c as data};
