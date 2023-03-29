import{_ as n,V as s,W as a,Z as e}from"./framework-e5d7a6b2.js";const o={},c=e(`<h1 id="常见类" tabindex="-1"><a class="header-anchor" href="#常见类" aria-hidden="true">#</a> 常见类</h1><h2 id="object" tabindex="-1"><a class="header-anchor" href="#object" aria-hidden="true">#</a> Object</h2><h3 id="object-方法" tabindex="-1"><a class="header-anchor" href="#object-方法" aria-hidden="true">#</a> Object 方法</h3><p>全部方法如下：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * native 方法，用于返回当前运行时对象的 Class 对象，使用了 final 关键字修饰，故不允许子类重写。
 */</span>
<span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token keyword">native</span> <span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">&gt;</span></span> <span class="token function">getClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token doc-comment comment">/**
 * native 方法，用于返回对象的哈希码，主要使用在哈希表中，比如 JDK 中的HashMap。
 */</span>
<span class="token keyword">public</span> <span class="token keyword">native</span> <span class="token keyword">int</span> <span class="token function">hashCode</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token doc-comment comment">/**
 * 用于比较 2 个对象的内存地址是否相等，String 类对该方法进行了重写以用于比较字符串的值是否相等。
 */</span>
<span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">equals</span><span class="token punctuation">(</span><span class="token class-name">Object</span> obj<span class="token punctuation">)</span>
<span class="token doc-comment comment">/**
 * naitive 方法，用于创建并返回当前对象的一份拷贝。
 */</span>
<span class="token keyword">protected</span> <span class="token keyword">native</span> <span class="token class-name">Object</span> <span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">CloneNotSupportedException</span>
<span class="token doc-comment comment">/**
 * 返回类的名字实例的哈希码的 16 进制的字符串。建议 Object 所有的子类都重写这个方法。
 */</span>
<span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token doc-comment comment">/**
 * native 方法，并且不能重写。唤醒一个在此对象监视器上等待的线程(监视器相当于就是锁的概念)。如果有多个线程在等待只会任意唤醒一个。
 */</span>
<span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token keyword">native</span> <span class="token keyword">void</span> <span class="token function">notify</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token doc-comment comment">/**
 * native 方法，并且不能重写。跟 notify 一样，唯一的区别就是会唤醒在此对象监视器上等待的所有线程，而不是一个线程。
 */</span>
<span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token keyword">native</span> <span class="token keyword">void</span> <span class="token function">notifyAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token doc-comment comment">/**
 * native方法，并且不能重写。暂停线程的执行。注意：sleep 方法没有释放锁，而 wait 方法释放了锁 ，timeout 是等待时间。
 */</span>
<span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token keyword">native</span> <span class="token keyword">void</span> <span class="token function">wait</span><span class="token punctuation">(</span><span class="token keyword">long</span> timeout<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">InterruptedException</span>
<span class="token doc-comment comment">/**
 * 多了 nanos 参数，这个参数表示额外时间（以毫微秒为单位，范围是 0-999999）。 所以超时的时间还需要加上 nanos 毫秒。。
 */</span>
<span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token keyword">void</span> <span class="token function">wait</span><span class="token punctuation">(</span><span class="token keyword">long</span> timeout<span class="token punctuation">,</span> <span class="token keyword">int</span> nanos<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">InterruptedException</span>
<span class="token doc-comment comment">/**
 * 跟之前的2个wait方法一样，只不过该方法一直等待，没有超时时间这个概念
 */</span>
<span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token keyword">void</span> <span class="token function">wait</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">InterruptedException</span>
<span class="token doc-comment comment">/**
 * 实例被垃圾回收器回收的时候触发的操作
 */</span>
<span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">finalize</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Throwable</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>分类</p><ul><li><p>JUC</p><ul><li><code>notify</code></li><li><code>notifyAll</code></li><li><code>wait</code>，三个</li></ul></li><li><p>Reflect</p><ul><li><code>getClass</code></li></ul></li><li><p>GC：</p><p><code>finalize</code></p></li><li><p>Hash</p><ul><li><code>hashCode</code></li><li><code>equals</code></li></ul></li><li><p>basic</p><ul><li><p><code>clone</code>：需要继承Cloneable接口才行，默认native的实现是浅拷贝</p><p>clone 方法是浅拷贝，对象内属性引用的对象只会拷贝引用地址，而不会将引用的对象重新分配内存，相对应的深拷贝则会连引用的对象也重新创建。</p></li><li><p><code>toString</code></p></li></ul></li></ul><h4 id="和-equals-的区别" tabindex="-1"><a class="header-anchor" href="#和-equals-的区别" aria-hidden="true">#</a> == 和 equals() 的区别</h4><p><strong><code>==</code></strong> 对于基本类型和引用类型的作用效果是不同的：</p><ul><li>对于基本数据类型来说，<code>==</code> 比较的是值。</li><li>对于引用数据类型来说，<code>==</code> 比较的是对象的内存地址。</li></ul><blockquote><p>因为 Java 只有值传递，所以，对于 == 来说，不管是比较基本数据类型，还是引用数据类型的变量，其本质比较的都是值，只是引用类型变量存的值是对象的地址。</p></blockquote><p><strong><code>equals()</code></strong> 不能用于判断基本数据类型的变量，只能用来判断两个对象是否相等。<code>equals()</code>方法存在于<code>Object</code>类中，而<code>Object</code>类是所有类的直接或间接父类，因此所有的类都有<code>equals()</code>方法。</p><p><code>Object</code> 类 <code>equals()</code> 方法：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">equals</span><span class="token punctuation">(</span><span class="token class-name">Object</span> obj<span class="token punctuation">)</span> <span class="token punctuation">{</span>
     <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token keyword">this</span> <span class="token operator">==</span> obj<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>equals()</code> 方法存在两种使用情况：</p><ul><li><strong>类没有重写 <code>equals()</code>方法</strong> ：通过<code>equals()</code>比较该类的两个对象时，等价于通过“==”比较这两个对象，使用的默认是 <code>Object</code>类<code>equals()</code>方法。</li><li><strong>类重写了 <code>equals()</code>方法</strong> ：一般我们都重写 <code>equals()</code>方法来比较两个对象中的属性是否相等；若它们的属性相等，则返回 true(即，认为这两个对象相等)。</li></ul><p>举个例子（这里只是为了举例。实际上，你按照下面这种写法的话，像 IDEA 这种比较智能的 IDE 都会提示你将 <code>==</code> 换成 <code>equals()</code> ）：</p><h4 id="重写-hashcode-方法" tabindex="-1"><a class="header-anchor" href="#重写-hashcode-方法" aria-hidden="true">#</a> 重写 hashCode() 方法</h4><p>要重写自己的hashCode方法并没有什么绝对正确的答案，但是我们的目标是：不相等的对象尽可能有不同的hashCode，而且必须满足的一个通用约定是：相等的对象应该具有相同的hashCode。下面介绍一种hashCode的实现方式，这种实现方式对一般的程序来说足够了，至于如何实现更完美的hashCode方法就留给数学家或者理论家去讨论吧。</p><p>第一步:定义一个初始值，一般来说取17</p><p>int result = 17;</p><p>第二步：分别解析自定义类中与equals方法相关的字段（假如hashCode中考虑的字段在equals方法中没有考虑，则两个equals的对象就很可能具有不同的hashCode）</p><pre><code>情况一：字段a类型为boolean 则[hashCode] = a ? 1 : 0;

情况二：字段b类型为byte/short/int/char, 则[hashCode] = (int)b;

情况三：字段c类型为long， 则[hashCode] = (int) (c ^ c&gt;&gt;&gt;32);

情况四：字段d类型为float, 则[hashCode] = d.hashCode()(内部调用的是Float.hashCode(d)， 而该静态方法内部调用的另一个静态方法是Float.floatToIntBits(d))

情况五：字段e类型为double, 则[hashCode] = e.hashCode()(内部调用的是Double.hashCode(e)， 而该静态方法内部调用的另一个静态方法是Double.doubleToLongBits(e),得到一个long类型的值之后，跟情况三进行类似的操作，得到一个int类型的值)

情况六：引用类型，若为null则hashCode为0,否则递归调用该引用类型的hashCode方法。

情况七：数组类型。(要获取数组类型的hashCode,可采用如下方法：s[0]*31 ^ (n-1) + s[1] * 31 ^ (n-2) + ..... + s[n-1]， 该方法正是String类的hashCode实现所采用的算法）
</code></pre><p>第三步：对于涉及到的各个字段，采用第二步中的方式，将其依次应用于下式：</p><p>result = result * 31 + [hashCode];</p><p>补充说明一点：如果初始值result不取17而取0的话，则对于hashCode为0的字段来说就没有区分度了，这样更容易产生冲突。比如两个自定义类中，一个类比另一个类多出来一个或者几个字段，其余字段全部一样，分别new出来2个对象，这2个对象共有的字段的值全是一样的，而对于多来的那些字段的值正好都是0,并且在计算hashCode时这些多出来的字段又是最先计算的，这样的话，则这两个对象的hashCode就会产生冲突。还是那句话，hashCode方法的实现没有最好，只有更好。</p><h2 id="string" tabindex="-1"><a class="header-anchor" href="#string" aria-hidden="true">#</a> String</h2><h3 id="string-为什么是不可变的" tabindex="-1"><a class="header-anchor" href="#string-为什么是不可变的" aria-hidden="true">#</a> String 为什么是不可变的?</h3><p><code>String</code> 类中使用 <code>final</code> 关键字修饰字符数组来保存字符串，所以<code>String</code> 对象是不可变的。</p><h3 id="string、stringbuffer、stringbuilder-的区别" tabindex="-1"><a class="header-anchor" href="#string、stringbuffer、stringbuilder-的区别" aria-hidden="true">#</a> String、StringBuffer、StringBuilder 的区别？</h3><h3 id="字符串常量池的作用了解吗" tabindex="-1"><a class="header-anchor" href="#字符串常量池的作用了解吗" aria-hidden="true">#</a> 字符串常量池的作用了解吗？</h3><p><strong>字符串常量池</strong> 是 JVM 为了提升性能和减少内存消耗针对字符串（String 类）专门开辟的一块区域，主要目的是为了避免字符串的重复创建。</p>`,32),t=[c];function l(i,p){return s(),a("div",null,t)}const r=n(o,[["render",l],["__file","常见类.html.vue"]]);export{r as default};
