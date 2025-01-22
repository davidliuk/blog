import{_ as l}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as i,d as p,o as t}from"./app-ktFCNIob.js";const a={};function s(n,e){return t(),i("div",null,e[0]||(e[0]=[p('<h1 id="面向对象设计" tabindex="-1"><a class="header-anchor" href="#面向对象设计"><span>面向对象设计</span></a></h1><p>Viability 可行性</p><h3 id="类型划分" tabindex="-1"><a class="header-anchor" href="#类型划分"><span>类型划分</span></a></h3><ul><li>管理类</li><li>预定类</li><li>实物类</li><li>游戏类</li></ul><h3 id="三大特征" tabindex="-1"><a class="header-anchor" href="#三大特征"><span>三大特征</span></a></h3><p>OOP</p><ul><li><p>封装</p><p><code>Class</code>, <code>Object</code></p></li><li><p>继承</p><p><code>extends</code>, <code>implements</code></p></li><li><p>多态</p></li></ul><p>Exception</p><ul><li>Checked Exception(IO Exception,Compile time exception)</li><li>Unchecked Exception(Runtime Exception,NPE)</li></ul><p>Enum</p><p>枚举变量</p><h3 id="设计原则-solid" tabindex="-1"><a class="header-anchor" href="#设计原则-solid"><span>设计原则 SOLID</span></a></h3><ul><li><p>S – Single responsibility principle 单一责任原则</p><p>一个类应该有且只有一个去改变他的理由，这意味着一个类应该只有一项工作。</p></li><li><p>O – Open close principle 开放封闭原则</p><p>对象或实体应该对扩展开放，对修改封闭</p><p>(Open to extension, close to modification)。</p></li><li><p>L – Liskov substitution principle 里氏替换原则</p><p>任何一个子类或派生类应该可以替换它们的基类或父类</p></li><li><p>I – Interface segregation principle 接口分离原则</p><p>不应该强迫一个类实现它用不上的接口</p></li><li><p>D – Dependency inversion principle 依赖反转原则</p><p>抽象不应该依赖于具体实现，具体实现应该依赖于抽象</p><p>High-level 的实体不应该依赖于 low-level 的实体</p></li></ul><h2 id="解题法-5c" tabindex="-1"><a class="header-anchor" href="#解题法-5c"><span>解题法 5C</span></a></h2><ul><li>Clarify</li><li>Core objects</li><li>Cases</li><li>Classes</li><li>Correctness</li></ul><p>Clarify 通过和面试官交流，去除题目中的歧义，确定答题范围</p><p>Core objects 确定题目所涉及的类，以及类之间的映射关系</p><p>Cases 确定题目中所需要实现的场景和功能</p><p>Classes 通过类图的方式，具体填充题目中涉及的类</p><p>Correctness 检查自己的设计，是否满足关键点</p><h3 id="clarify" tabindex="-1"><a class="header-anchor" href="#clarify"><span>Clarify</span></a></h3><p>What</p><p>针对题目中的<strong>关键字</strong>来提问，帮助自己更好的确定答题范围。</p><blockquote><p>大多数的关键字为名词，通过名词的属性来考虑</p></blockquote><p>How</p><p>针对问题主题的规则来提问，帮助自己明确解题方向。</p><blockquote><p>此类问题没有标准答案，你可以提出一些解决方法，通过面试官的反应， 选择一个你比较有信心(简单)的方案</p></blockquote><h3 id="core-object" tabindex="-1"><a class="header-anchor" href="#core-object"><span>Core Object</span></a></h3><p>为了完成设计，需要哪些类?</p><ul><li>这是和面试官初步的纸面 contract</li><li>承上启下，来自于Clarify的结果，成为Use case的依据</li><li>为画类图打下基础</li></ul><p>如何定义Core Object ?</p><ul><li><p>以一个Object作为基础，<strong>线性思考</strong></p><p>有进有出，从哪来到哪去</p></li><li><p>确定Objects之间的映射关系</p></li></ul><h3 id="cases" tabindex="-1"><a class="header-anchor" href="#cases"><span>Cases</span></a></h3><ul><li><p>什么是 Use case ?</p><p>在你设计的系统中，需要支持哪些功能?</p></li><li><p>为什么要写 Use cases ?</p><ul><li>这是你和面试官白纸黑字达成的第二份共识，把你将要实现的功能列在白板上</li><li>帮助你在解题过程中，理清条例，一个一个Case实现</li><li>作为检查的标准</li></ul></li><li><p>如何写 Use cases ?</p><ul><li>利用定义的Core Object, 列举出每个Object对应产生的use case.</li><li>每个use case只需要先用一句简单的话来描述即可</li></ul></li></ul><h3 id="class" tabindex="-1"><a class="header-anchor" href="#class"><span>Class</span></a></h3><ul><li><p>什么是类图?</p></li><li><p>为什么要画类图?</p><ul><li>可交付，Minimal Viable Product</li><li>节省时间，不容易在 Coding 上挣扎</li><li>建立在Use case上，和之前的步骤层层递进，条例清晰，便于交流和修 改</li><li>如果时间允许/面试官要求，便于转化成Code</li></ul></li><li><p>怎么画类图?</p><ul><li><p>遍历你所列出的use cases</p></li><li><p>对于每一个use case，更加详细的描述这个use case在做什么事情</p><p>例如：take external request -&gt; ElevatorSystem takes an external request, and decide to push this request to an appropriate elevator</p></li><li><p>针对这个描述，在已有的Core objects里填充进所需要的信息</p></li></ul></li></ul><p>如何知道一个函数，是否成功完成任务？</p><p>地下一层电梯关闭，这时有人在地下一层按了向上的按钮，会发生什么?</p><p>Use boolean instead of void</p><p>成功的话返回true, 否则返回false</p><p>如何知道是什么地方出错?</p><p>Use exceptions</p><p>并行 VS 串行</p><p>单线程 VS 多线程</p><h3 id="correctness" tabindex="-1"><a class="header-anchor" href="#correctness"><span>Correctness</span></a></h3><ul><li>Validate use cases (检查是否支持所有的 use case)</li><li>Follow good practice (面试当中的加分项，展现一个程序员的经验)</li><li>S.O.L.I.D</li><li>Design pattern</li></ul><h2 id="good-practice" tabindex="-1"><a class="header-anchor" href="#good-practice"><span>Good Practice</span></a></h2><p>Access modifier</p><ul><li><p>package</p><p>如果什么都不声明，变量和函数都是package level visible的，在同一个package内的其他类都可以访问</p></li><li><p>public</p><p>如果声明为public，变量和函数都是public level visible的，任何其他的类都可以访问；在类图中，用”+”表示一个变量或者函数为public</p></li><li><p>private</p><p>如果声明为private，变量和函数都是class level visible的，这是所有access modifier中限制最多的一个。仅有定义这些变量和函数的类自己可以访问。</p><p>private也是OOD当中实现封装的重要手段。</p><p>在类图中，用”-”表示一个变量或者函数为private</p></li><li><p>protected</p><p>如果声明为protected，变量和函数在能被定义他们的类访问的基础上，还能够被该类的子类所访问。</p><p>protected也是OOD当中实现继承的重要手段。</p><p>在类图中，用”#”表示一个变量或者函数为protected</p></li></ul><p>Use exceptions</p><p>继承</p><p>检查你的设计中，是否有重复的类，可以采用继承的方式来表现</p><p>Design Pattern</p><ul><li>Strategy</li><li>Singleton</li><li>ensure a class has only one instance, and provide a global point of access to it</li></ul><hr><ul><li>Clean and elegant</li><li>Keep code extendable</li><li>Safe</li><li>Show off your skills !</li></ul><hr><p>LoD(Law of Demeter)</p><p>&quot;Each unit should have only limited knowledge about other units:only units &quot;closely&quot;related to the current unit.Each unit should only talk to its friends;don&#39;t talk to strangers.&quot;</p><p>Only talk to you immediate friends<br> Don&#39;t talk to strangers</p><h2 id="经典题" tabindex="-1"><a class="header-anchor" href="#经典题"><span>经典题</span></a></h2><p>设计电梯系统</p><p>设计停车系统</p><h3 id="设计电梯系统" tabindex="-1"><a class="header-anchor" href="#设计电梯系统"><span>设计电梯系统</span></a></h3><p>Clarity</p><ul><li><p>What 关键词</p><ol><li><p>Elevator</p><p>所有电梯厢均为相同规格</p></li><li><p>Building</p><p>每层仅一处能搭乘，所有电梯均可响应</p></li></ol></li><li><p>How 规则</p><ol><li><p>如何判断电梯是否超重?</p><p>- Passenger class包含重量<br> - 电梯能够自动感应当前重量</p></li><li><p>当按下按钮时，哪一台电梯会相应?</p><p>- 同方向&gt;静止&gt;反向</p><ul><li>一半负责奇数楼层，一半负责偶数楼层</li></ul></li><li><p>当电梯在运行时，哪些按键可以响应?</p></li></ol></li></ul><p>规则:</p><p>对于本题：同向 &gt; 静止 &gt; 反向，当运行时不能按下反向的楼层</p><p>信息：电梯至少需要三种状态，并且要知道当前在哪一层</p><p>Core Object</p><ul><li><p>ElevatorSystem</p><ul><li>Handle request</li></ul></li><li><p>Request</p></li><li><p>Elevator</p><ul><li>Take external request</li><li>Take internal request 一手微信study322 九章都有</li><li>Open gate</li><li>Close gate</li><li>Check weight</li></ul></li><li><p>ElevatorButton</p></li></ul>',71)]))}const r=l(a,[["render",s],["__file","index.html.vue"]]),d=JSON.parse(`{"path":"/se/design/ood/","title":"面向对象设计","lang":"en-US","frontmatter":{"description":"面向对象设计 Viability 可行性 类型划分 管理类 预定类 实物类 游戏类 三大特征 OOP 封装 Class, Object 继承 extends, implements 多态 Exception Checked Exception(IO Exception,Compile time exception) Unchecked Exceptio...","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/se/design/ood/"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"面向对象设计"}],["meta",{"property":"og:description","content":"面向对象设计 Viability 可行性 类型划分 管理类 预定类 实物类 游戏类 三大特征 OOP 封装 Class, Object 继承 extends, implements 多态 Exception Checked Exception(IO Exception,Compile time exception) Unchecked Exceptio..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-06-27T01:21:47.000Z"}],["meta",{"property":"article:modified_time","content":"2024-06-27T01:21:47.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"面向对象设计\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-06-27T01:21:47.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[{"level":3,"title":"类型划分","slug":"类型划分","link":"#类型划分","children":[]},{"level":3,"title":"三大特征","slug":"三大特征","link":"#三大特征","children":[]},{"level":3,"title":"设计原则 SOLID","slug":"设计原则-solid","link":"#设计原则-solid","children":[]},{"level":2,"title":"解题法 5C","slug":"解题法-5c","link":"#解题法-5c","children":[{"level":3,"title":"Clarify","slug":"clarify","link":"#clarify","children":[]},{"level":3,"title":"Core Object","slug":"core-object","link":"#core-object","children":[]},{"level":3,"title":"Cases","slug":"cases","link":"#cases","children":[]},{"level":3,"title":"Class","slug":"class","link":"#class","children":[]},{"level":3,"title":"Correctness","slug":"correctness","link":"#correctness","children":[]}]},{"level":2,"title":"Good Practice","slug":"good-practice","link":"#good-practice","children":[]},{"level":2,"title":"经典题","slug":"经典题","link":"#经典题","children":[{"level":3,"title":"设计电梯系统","slug":"设计电梯系统","link":"#设计电梯系统","children":[]}]}],"git":{"createdTime":1673495221000,"updatedTime":1719451307000,"contributors":[{"name":"刘大维","email":"davidliu@liudaweideMacBook-Pro.local","commits":3},{"name":"liudawei47","email":"liudawei47@jd.com","commits":1}]},"readingTime":{"minutes":5.13,"words":1539},"filePathRelative":"se/design/ood/README.md","localizedDate":"January 12, 2023","excerpt":"\\n<p>Viability 可行性</p>\\n<h3>类型划分</h3>\\n<ul>\\n<li>管理类</li>\\n<li>预定类</li>\\n<li>实物类</li>\\n<li>游戏类</li>\\n</ul>\\n<h3>三大特征</h3>\\n<p>OOP</p>\\n<ul>\\n<li>\\n<p>封装</p>\\n<p><code>Class</code>, <code>Object</code></p>\\n</li>\\n<li>\\n<p>继承</p>\\n<p><code>extends</code>, <code>implements</code></p>\\n</li>\\n<li>\\n<p>多态</p>\\n</li>\\n</ul>\\n<p>Exception</p>","autoDesc":true}`);export{r as comp,d as data};
