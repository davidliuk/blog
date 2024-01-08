import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{o as e,c as i,d as p}from"./app-9107e99b.js";const d={},h=p('<h1 id="传参" tabindex="-1"><a class="header-anchor" href="#传参" aria-hidden="true">#</a> 传参</h1><h2 id="传参设计" tabindex="-1"><a class="header-anchor" href="#传参设计" aria-hidden="true">#</a> 传参设计</h2><h3 id="局部变量传递" tabindex="-1"><a class="header-anchor" href="#局部变量传递" aria-hidden="true">#</a> 局部变量传递</h3><p>父传子</p><ul><li>非引用类型需要函数传参（BFS节点），如深度信息可以直接父传子depth + 1</li><li>引用类型变量需要结合回溯来实现。</li></ul><p>子传父</p><ul><li>DFS通过返回值将子问题结果传递给父问题。</li></ul><h3 id="全局变量传递" tabindex="-1"><a class="header-anchor" href="#全局变量传递" aria-hidden="true">#</a> 全局变量传递</h3><p>邻接：回溯的思想，对复杂的变量需要使用forward()和backward()，可以节省内存空间</p><p>访问：序号、前后序时间戳、访问前驱、访问后继，需要全局参数传递，因为不再是父子相传</p><h2 id="数据类型" tabindex="-1"><a class="header-anchor" href="#数据类型" aria-hidden="true">#</a> 数据类型</h2><p>在 Java 中类型可分为两大类：值类型与引用类型。</p><ol><li>值类型就是基本数据类型（如 int、double 等）</li><li>引用类型是指除了基本的变量类型之外的所有类型</li></ol><p>所有的类型在内存中都会分配一定的存储空间（形参在使用的时候也会分配存储空间，方法调用完成之后，这块存储空间自动消失）</p><p>基本的变量类型只有一块存储空间(分配在stack中)，而引用类型有两块存储空间(一块在 stack 中，一块在 heap 中)。</p><h3 id="值类型" tabindex="-1"><a class="header-anchor" href="#值类型" aria-hidden="true">#</a> 值类型</h3><p>即八大基本数据类型，包含四类：</p><ol><li><p>整数类型</p><p><code>byte, short, int, long</code></p></li><li><p>浮点类型</p><p><code>float, double</code></p></li><li><p>布尔类型</p><p><code>boolean</code></p></li><li><p>字符类型</p><p><code>char</code></p></li></ol><h3 id="引用类型" tabindex="-1"><a class="header-anchor" href="#引用类型" aria-hidden="true">#</a> 引用类型</h3><p>即复合数据类型，除了基本的变量类型之外的所有类型，包括如下三类</p><ol><li><p>类类型</p><p><code>class</code></p></li><li><p>接口类型</p><p><code>interface</code></p></li><li><p>数组</p><p><code>[]</code></p></li></ol><h2 id="传参类型" tabindex="-1"><a class="header-anchor" href="#传参类型" aria-hidden="true">#</a> 传参类型</h2><p>值传递、引用传递</p><p>指针传递（C类特有）</p><h3 id="值传递" tabindex="-1"><a class="header-anchor" href="#值传递" aria-hidden="true">#</a> 值传递</h3><p>文件复制</p><p>Java的八大基本数据类型都是值传递（本质上都是值传递，因为引用类型传递的也是对象引用的值）</p><p>C++中默认值传递</p><p>Python中没有值传递，Python的不可变类型可以认为是值传递的（其实本质上还是引用传递）</p><p>你用字符串来做实验，并推广为所有Java对象的做法，并不是特别合适。Java的String类型有特殊的处理：所有编译期认识的字符串，都会被放到常量池，于是下面的语句：</p><p>a = &quot;s&quot;;<br> b = &quot;s&quot;;</p><p>a和b并不像其它对象一样有创建的动作，都是直接指向常量池中的&quot;s&quot;，所以你可以得到a==b。而下面的语句：</p><p>a = new String(&quot;s&quot;);<br> b = new String(&quot;s&quot;);</p><p>是分别在Java堆中创建了2个对象，此时a!=b。</p><p>本质上说，对于基本数据类型（整数、字符等），Java的符号==，用于判断二者的值是否相等；对于对象类型，Java的符号==，用于判断两个变量是否是“同一个对象”，equals()方法才是用于判断两个对象是否相等。</p><h3 id="引用传递" tabindex="-1"><a class="header-anchor" href="#引用传递" aria-hidden="true">#</a> 引用传递</h3><p>可以理解为别名、代号、文件的快捷方式</p><p>Java除了基本数据类型以外的其他数据本质上都是引用传递（及各种对象）</p><p>C++中在参数列表中加地址符&amp;修饰</p><p>Python中全是引用传递</p><h3 id="数组的引用传递" tabindex="-1"><a class="header-anchor" href="#数组的引用传递" aria-hidden="true">#</a> 数组的引用传递</h3><h3 id="修改实例和修改引用" tabindex="-1"><a class="header-anchor" href="#修改实例和修改引用" aria-hidden="true">#</a> 修改实例和修改引用</h3><p>&quot;.&quot;, &quot;[]&quot;修改的是实例</p><p>否则修改的是引用</p><p>堆空间、</p><ul><li>存放new得到的对象</li><li>无限制（剩余内存的大小）</li></ul><p>栈空间</p><ul><li>存放对象的引用</li><li>值类型变量</li><li>C++函数中的数组（C++危险的地方）</li><li>有限制，一般很小，MB量级</li><li>函数调用栈</li></ul><h4 id="函数调用栈" tabindex="-1"><a class="header-anchor" href="#函数调用栈" aria-hidden="true">#</a> 函数调用栈</h4><p>每调用一个函数就放入到筒里，</p><p>递归需谨慎</p><p>递归调用容易爆栈、人为调用栈不会爆栈</p><p>除非在c/c++的函数中定义大数组 -- 危险行为</p><h3 id="递归三要素" tabindex="-1"><a class="header-anchor" href="#递归三要素" aria-hidden="true">#</a> 递归三要素</h3><p>递归的定义</p><p>递归的拆解</p><p>递归的出口</p>',57),r=[h];function l(t,o){return e(),i("div",null,r)}const s=a(d,[["render",l],["__file","index.html.vue"]]);export{s as default};
