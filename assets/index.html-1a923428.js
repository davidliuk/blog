import{_ as a,V as e,W as i,a0 as h}from"./framework-705b829b.js";const r={},t=h('<h1 id="传参" tabindex="-1"><a class="header-anchor" href="#传参" aria-hidden="true">#</a> 传参</h1><h2 id="传参设计" tabindex="-1"><a class="header-anchor" href="#传参设计" aria-hidden="true">#</a> 传参设计</h2><p>自上而下传参：</p><ul><li>对于引用变量需要用回溯去做，</li><li>对于非引用类型需要全局传值去处理，如深度信息可以直接父传子depth + 1</li></ul><p>全局参数传递：回溯的思想，对复杂的变量需要使用forward()和backward()，可以节省内存空间</p><p>如序号，前一个访问的后一个访问的，这个需要全局参数传递，因为不再是父子相传</p><h2 id="传参类型" tabindex="-1"><a class="header-anchor" href="#传参类型" aria-hidden="true">#</a> 传参类型</h2><p>值传递、引用传递</p><p>指针传递（C类特有）</p><h3 id="值传递" tabindex="-1"><a class="header-anchor" href="#值传递" aria-hidden="true">#</a> 值传递</h3><p>文件复制</p><p>Java的八大基本数据类型都是值传递，（本质上都是值传递，因为对象传递的也是对象引用的值）</p><p>C++中默认值传递</p><p>Python中没有值传递，Python的不可变类型可以认为是值传递的（其实本质上还是引用传递）</p><p>你用字符串来做实验，并推广为所有Java对象的做法，并不是特别合适。Java的String类型有特殊的处理：所有编译期认识的字符串，都会被放到常量池，于是下面的语句： a = &quot;s&quot;; b = &quot;s&quot;; a和b并不像其它对象一样有创建的动作，都是直接指向常量池中的&quot;s&quot;，所以你可以得到a==b。而下面的语句： a = new String(&quot;s&quot;); b = new String(&quot;s&quot;); 是分别在Java堆中创建了2个对象，此时a!=b。</p><p>本质上说，对于基本数据类型（整数、字符等），Java的符号==，用于判断二者的值是否相等；对于对象类型，Java的符号==，用于判断两个变量是否是“同一个对象”，equals()方法才是用于判断两个对象是否相等。</p><h3 id="引用传递" tabindex="-1"><a class="header-anchor" href="#引用传递" aria-hidden="true">#</a> 引用传递</h3><p>可以理解为别名、代号、文件的快捷方式</p><p>Java除了基本数据类型以外的其他数据本质上都是引用传递（及各种对象）</p><p>C++中在参数列表中加地址符&amp;修饰</p><p>Python中全是引用传递</p><h3 id="数组的引用传递" tabindex="-1"><a class="header-anchor" href="#数组的引用传递" aria-hidden="true">#</a> 数组的引用传递</h3><h3 id="修改实例和修改引用" tabindex="-1"><a class="header-anchor" href="#修改实例和修改引用" aria-hidden="true">#</a> 修改实例和修改引用</h3><p>&quot;.&quot;, &quot;[]&quot;修改的是实例</p><p>否则修改的是引用</p><p>堆空间、</p><ul><li>存放new得到的对象</li><li>无限制（剩余内存的大小）</li></ul><p>栈空间</p><ul><li>存放对象的引用</li><li>值类型变量</li><li>C++函数中的数组（C++危险的地方）</li><li>有限制，一般很小，MB量级</li><li>函数调用栈</li></ul><h4 id="函数调用栈" tabindex="-1"><a class="header-anchor" href="#函数调用栈" aria-hidden="true">#</a> 函数调用栈</h4><p>每调用一个函数就放入到筒里，</p><p>递归需谨慎</p><p>递归调用容易爆栈、人为调用栈不会爆栈</p><p>除非在c/c++的函数中定义大数组 -- 危险行为</p><h3 id="递归三要素" tabindex="-1"><a class="header-anchor" href="#递归三要素" aria-hidden="true">#</a> 递归三要素</h3><p>递归的定义</p><p>递归的拆解</p><p>递归的出口</p>',38),p=[t];function d(n,l){return e(),i("div",null,p)}const s=a(r,[["render",d],["__file","index.html.vue"]]);export{s as default};