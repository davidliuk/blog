import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as e,b as l,o as n}from"./app-B3ooTv29.js";const p={};function o(a,i){return n(),e("div",null,i[0]||(i[0]=[l('<h1 id="智能计算论文" tabindex="-1"><a class="header-anchor" href="#智能计算论文"><span>智能计算论文</span></a></h1><p>分析现有方法的缺点</p><p>优势：架构不一样，但是也属于进化计算分支</p><p>元启发式算法 -&gt; 进化计算（进化类元启发式算法）</p><p>典型的有：</p><ul><li>遗传算法 GA</li><li>差分进化算法 DE</li><li>进化策略 ES</li><li>遗传编程 GP</li><li>进化编程 EP</li></ul><p>meta 元启发式算法分类</p><ul><li><p>进化类</p></li><li><p>物理/化学类</p></li><li><p>自然现象类</p><ul><li>蚁群算法</li><li>人工蜂群</li></ul></li><li><p>人类社会启发</p></li></ul><p>introduction 还差前文的缺点：</p><p>要实现元老级的进化算法都实现了，</p><p>不足之处：他们把适应度不足的个体直接淘汰了，但是有一些适应度不足的个体可能有潜力，早熟/过早收敛，种群多样性降低，陷入局部最优解附近打转。</p><ul><li></li></ul><p>我们的架构：检验将被淘汰的适应度不足的个体，同时引入全局初始化个体</p><ol><li></li></ol><p>不要从理论的角度出发，要从实践的角度出发</p><p>Introduction 部分，小规模实验，以实验结果说话。</p><p>实验目的是：证明经过上面两点的改进之后，进化类算法的早熟现象有所改进。</p><p>小规模实验思考的出发点是：我为什么不用这个现成的、要用改进过后的？</p><h3 id="步骤一-放-intro" tabindex="-1"><a class="header-anchor" href="#步骤一-放-intro"><span>步骤一：放 Intro</span></a></h3><p>现有的算法在调参之后，也能尽量多地保留适应度不足的个体，也能在每一代引入全局初始化向量。</p><p>但是在调参或者提供新的算子的现有算法下，这个结果还不如传统现有算法（取经验值的区间内的）</p><p>“现有算法经过调参之后，实验结果的提升效果不明显（或者更差了）”</p><h3 id="步骤二-放实验里" tabindex="-1"><a class="header-anchor" href="#步骤二-放实验里"><span>步骤二：放实验里</span></a></h3><p>我们把前面的算法经过新的框架改进之后，再进行实验</p><p>对 GA、DE、ES，做三次实验：调参、传统、用框架修改</p><p>实验内容：再 Python 上运行 23 基本函数 30 次（每次两万代），取（函数值的）平均值和方差</p><p>再在零零碎碎的算法里面取3个有代码，总共取五到六个进化算法去做比较</p><p>大维把传统的运行一遍，记录参数，找到新的进化算法论文，运行一遍，记录参数，然后收集各种元启发式算法的结果就好啦</p>',28)]))}const d=t(p,[["render",o],["__file","智能计算论文.html.vue"]]),s=JSON.parse(`{"path":"/education/bs/ai-intro/%E6%99%BA%E8%83%BD%E8%AE%A1%E7%AE%97%E8%AE%BA%E6%96%87.html","title":"智能计算论文","lang":"en-US","frontmatter":{"description":"智能计算论文 分析现有方法的缺点 优势：架构不一样，但是也属于进化计算分支 元启发式算法 -> 进化计算（进化类元启发式算法） 典型的有： 遗传算法 GA 差分进化算法 DE 进化策略 ES 遗传编程 GP 进化编程 EP meta 元启发式算法分类 进化类 物理/化学类 自然现象类 蚁群算法 人工蜂群 人类社会启发 introduction 还差前文...","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/education/bs/ai-intro/%E6%99%BA%E8%83%BD%E8%AE%A1%E7%AE%97%E8%AE%BA%E6%96%87.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"智能计算论文"}],["meta",{"property":"og:description","content":"智能计算论文 分析现有方法的缺点 优势：架构不一样，但是也属于进化计算分支 元启发式算法 -> 进化计算（进化类元启发式算法） 典型的有： 遗传算法 GA 差分进化算法 DE 进化策略 ES 遗传编程 GP 进化编程 EP meta 元启发式算法分类 进化类 物理/化学类 自然现象类 蚁群算法 人工蜂群 人类社会启发 introduction 还差前文..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-11-09T03:55:12.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-09T03:55:12.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"智能计算论文\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-09T03:55:12.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[{"level":3,"title":"步骤一：放 Intro","slug":"步骤一-放-intro","link":"#步骤一-放-intro","children":[]},{"level":3,"title":"步骤二：放实验里","slug":"步骤二-放实验里","link":"#步骤二-放实验里","children":[]}],"git":{"createdTime":1686210114000,"updatedTime":1731124512000,"contributors":[{"name":"刘大维","email":"davidliu@liudaweideMacBook-Pro-3.local","commits":1}]},"readingTime":{"minutes":2.03,"words":610},"filePathRelative":"education/bs/ai-intro/智能计算论文.md","localizedDate":"June 8, 2023","excerpt":"\\n<p>分析现有方法的缺点</p>\\n<p>优势：架构不一样，但是也属于进化计算分支</p>\\n<p>元启发式算法 -&gt; 进化计算（进化类元启发式算法）</p>\\n<p>典型的有：</p>\\n<ul>\\n<li>遗传算法 GA</li>\\n<li>差分进化算法 DE</li>\\n<li>进化策略 ES</li>\\n<li>遗传编程 GP</li>\\n<li>进化编程 EP</li>\\n</ul>\\n<p>meta 元启发式算法分类</p>\\n<ul>\\n<li>\\n<p>进化类</p>\\n</li>\\n<li>\\n<p>物理/化学类</p>\\n</li>\\n<li>\\n<p>自然现象类</p>\\n<ul>\\n<li>蚁群算法</li>\\n<li>人工蜂群</li>\\n</ul>\\n</li>\\n<li>\\n<p>人类社会启发</p>\\n</li>\\n</ul>","autoDesc":true}`);export{d as comp,s as data};
