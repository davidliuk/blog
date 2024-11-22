import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,d as n,o as l}from"./app-C8HRrJwL.js";const t={};function e(h,i){return l(),a("div",null,i[0]||(i[0]=[n(`<h1 id="常见类" tabindex="-1"><a class="header-anchor" href="#常见类"><span>常见类</span></a></h1><h2 id="object" tabindex="-1"><a class="header-anchor" href="#object"><span>Object</span></a></h2><h3 id="object-方法" tabindex="-1"><a class="header-anchor" href="#object-方法"><span>Object 方法</span></a></h3><p>全部方法如下：</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">/**</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> * native 方法，用于返回当前运行时对象的 Class 对象，使用了 final 关键字修饰，故不允许子类重写。</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> */</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> final</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> native</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> Class</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&lt;</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">?</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&gt;</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> getClass</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">()</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">/**</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> * native 方法，用于返回对象的哈希码，主要使用在哈希表中，比如 JDK 中的HashMap。</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> */</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> native</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> int</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> hashCode</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">()</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">/**</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> * 用于比较 2 个对象的内存地址是否相等，String 类对该方法进行了重写以用于比较字符串的值是否相等。</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> */</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> boolean</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> equals</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">Object</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> obj)</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">/**</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> * naitive 方法，用于创建并返回当前对象的一份拷贝。</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> */</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">protected</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> native</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> Object</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> clone</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">() throws </span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">CloneNotSupportedException</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">/**</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> * 返回类的名字实例的哈希码的 16 进制的字符串。建议 Object 所有的子类都重写这个方法。</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> */</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">public</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> String</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> toString</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">()</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">/**</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> * native 方法，并且不能重写。唤醒一个在此对象监视器上等待的线程(监视器相当于就是锁的概念)。如果有多个线程在等待只会任意唤醒一个。</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> */</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> final</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> native</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> void</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> notify</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">()</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">/**</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> * native 方法，并且不能重写。跟 notify 一样，唯一的区别就是会唤醒在此对象监视器上等待的所有线程，而不是一个线程。</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> */</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> final</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> native</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> void</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> notifyAll</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">()</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">/**</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> * native方法，并且不能重写。暂停线程的执行。注意：sleep 方法没有释放锁，而 wait 方法释放了锁 ，timeout 是等待时间。</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> */</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> final</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> native</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> void</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> wait</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">long</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> timeout) throws </span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">InterruptedException</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">/**</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> * 多了 nanos 参数，这个参数表示额外时间（以毫微秒为单位，范围是 0-999999）。 所以超时的时间还需要加上 nanos 毫秒。。</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> */</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> final</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> void</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> wait</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">long</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> timeout</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> int</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> nanos) throws </span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">InterruptedException</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">/**</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> * 跟之前的2个wait方法一样，只不过该方法一直等待，没有超时时间这个概念</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> */</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> final</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> void</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> wait</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">() throws </span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">InterruptedException</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">/**</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> * 实例被垃圾回收器回收的时候触发的操作</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> */</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">protected</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> void</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> finalize</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">() throws Throwable { }</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>分类</p><ul><li><p>JUC</p><ul><li><code>notify</code></li><li><code>notifyAll</code></li><li><code>wait</code>，三个</li></ul></li><li><p>Reflect</p><ul><li><code>getClass</code></li></ul></li><li><p>GC：</p><p><code>finalize</code>：Called by the garbage collector on an object when garbage collection determines that there are no more references to the object. A subclass overrides the {@code finalize} method to dispose of system resources or to perform other cleanup.</p></li><li><p>Hash</p><ul><li><code>hashCode</code></li><li><code>equals</code></li></ul></li><li><p>basic</p><ul><li><p><code>clone</code>：需要继承 Cloneable 接口才行，默认 native 的实现是浅拷贝</p><p>clone 方法是浅拷贝，对象内属性引用的对象只会拷贝引用地址，而不会将引用的对象重新分配内存，相对应的深拷贝则会连引用的对象也重新创建。</p></li><li><p><code>toString</code></p></li></ul></li></ul><h4 id="和-equals-的区别" tabindex="-1"><a class="header-anchor" href="#和-equals-的区别"><span>== 和 equals() 的区别</span></a></h4><p><strong><code>==</code></strong> 对于基本类型和引用类型的作用效果是不同的：</p><ul><li>对于基本数据类型来说，<code>==</code> 比较的是值。</li><li>对于引用数据类型来说，<code>==</code> 比较的是对象的内存地址。</li></ul><blockquote><p>因为 Java 只有值传递，所以，对于 == 来说，不管是比较基本数据类型，还是引用数据类型的变量，其本质比较的都是值，只是引用类型变量存的值是对象的地址。</p></blockquote><p><strong><code>equals()</code></strong> 不能用于判断基本数据类型的变量，只能用来判断两个对象是否相等。<code>equals()</code>方法存在于<code>Object</code>类中，而<code>Object</code>类是所有类的直接或间接父类，因此所有的类都有<code>equals()</code>方法。</p><p><code>Object</code> 类 <code>equals()</code> 方法：</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> boolean</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> equals</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">Object</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> obj) {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">     return</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> (</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">this</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> ==</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> obj)</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>equals()</code> 方法存在两种使用情况：</p><ul><li><strong>类没有重写 <code>equals()</code>方法</strong> ：通过<code>equals()</code>比较该类的两个对象时，等价于通过“==”比较这两个对象，使用的默认是 <code>Object</code>类<code>equals()</code>方法。</li><li><strong>类重写了 <code>equals()</code>方法</strong> ：一般我们都重写 <code>equals()</code>方法来比较两个对象中的属性是否相等；若它们的属性相等，则返回 true(即，认为这两个对象相等)。</li></ul><p>举个例子（这里只是为了举例。实际上，你按照下面这种写法的话，像 IDEA 这种比较智能的 IDE 都会提示你将 <code>==</code> 换成 <code>equals()</code> ）：</p><h4 id="重写-hashcode-方法" tabindex="-1"><a class="header-anchor" href="#重写-hashcode-方法"><span>重写 hashCode() 方法</span></a></h4><p>要重写自己的 hashCode 方法并没有什么绝对正确的答案，但是我们的目标是：不相等的对象尽可能有不同的 hashCode，而且必须满足的一个通用约定是：相等的对象应该具有相同的 hashCode。下面介绍一种 hashCode 的实现方式，这种实现方式对一般的程序来说足够了，至于如何实现更完美的 hashCode 方法就留给数学家或者理论家去讨论吧。</p><p>第一步:定义一个初始值，一般来说取 17</p><p>int result = 17;</p><p>第二步：分别解析自定义类中与 equals 方法相关的字段（假如 hashCode 中考虑的字段在 equals 方法中没有考虑，则两个 equals 的对象就很可能具有不同的 hashCode）</p><pre><code>情况一：字段a类型为boolean 则[hashCode] = a ? 1 : 0;

情况二：字段b类型为byte/short/int/char, 则[hashCode] = (int)b;

情况三：字段c类型为long， 则[hashCode] = (int) (c ^ c&gt;&gt;&gt;32);

情况四：字段d类型为float, 则[hashCode] = d.hashCode()(内部调用的是Float.hashCode(d)， 而该静态方法内部调用的另一个静态方法是Float.floatToIntBits(d))

情况五：字段e类型为double, 则[hashCode] = e.hashCode()(内部调用的是Double.hashCode(e)， 而该静态方法内部调用的另一个静态方法是Double.doubleToLongBits(e),得到一个long类型的值之后，跟情况三进行类似的操作，得到一个int类型的值)

情况六：引用类型，若为null则hashCode为0,否则递归调用该引用类型的hashCode方法。

情况七：数组类型。(要获取数组类型的hashCode,可采用如下方法：s[0]*31 ^ (n-1) + s[1] * 31 ^ (n-2) + ..... + s[n-1]， 该方法正是String类的hashCode实现所采用的算法）
</code></pre><p>第三步：对于涉及到的各个字段，采用第二步中的方式，将其依次应用于下式：</p><p>result = result * 31 + [hashCode];</p><p>补充说明一点：如果初始值 result 不取 17 而取 0 的话，则对于 hashCode 为 0 的字段来说就没有区分度了，这样更容易产生冲突。比如两个自定义类中，一个类比另一个类多出来一个或者几个字段，其余字段全部一样，分别 new 出来 2 个对象，这 2 个对象共有的字段的值全是一样的，而对于多来的那些字段的值正好都是 0,并且在计算 hashCode 时这些多出来的字段又是最先计算的，这样的话，则这两个对象的 hashCode 就会产生冲突。还是那句话，hashCode 方法的实现没有最好，只有更好。</p><h2 id="string" tabindex="-1"><a class="header-anchor" href="#string"><span>String</span></a></h2><h3 id="string-为什么是不可变的" tabindex="-1"><a class="header-anchor" href="#string-为什么是不可变的"><span>String 为什么是不可变的?</span></a></h3><p><code>String</code> 类中使用 <code>final</code> 关键字修饰字符数组来保存字符串，所以<code>String</code> 对象是不可变的。</p><h3 id="length-返回值" tabindex="-1"><a class="header-anchor" href="#length-返回值"><span><code>length()</code> 返回值</span></a></h3><p><code>length()</code>返回值为字符串中 Unicode(utf-16)代码单元(两字节是一个代码单元)的数量。这个值不同于字符串中实际字符的数量，因为某些 Unicode 字符可能由多个代码单元组成，如表情符号、音乐符号、数学符号、某些语音的字符。</p><p>要统计字符数，可以使用<code>codePointCount()</code></p><h3 id="string、stringbuffer、stringbuilder-的区别" tabindex="-1"><a class="header-anchor" href="#string、stringbuffer、stringbuilder-的区别"><span>String、StringBuffer、StringBuilder 的区别？</span></a></h3><h3 id="字符串常量池的作用了解吗" tabindex="-1"><a class="header-anchor" href="#字符串常量池的作用了解吗"><span>字符串常量池的作用了解吗？</span></a></h3><p><strong>字符串常量池</strong> 是 JVM 为了提升性能和减少内存消耗针对字符串（String 类）专门开辟的一块区域，主要目的是为了避免字符串的重复创建。</p><ul><li>java 中的 <code>length</code>属性是针对数组说的，比如说你声明了一个数组，想知道这个数组的长度则用到了 length 这个属性.</li><li>java 中的 <code>length()</code> 方法是针对字符串说的,如果想看这个字符串的长度则用到 <code>length()</code> 这个方法.</li><li>java 中的 <code>size()</code> 方法是针对泛型集合说的,如果想看这个泛型有多少个元素,就调用此方法来查看!</li></ul><p><strong>String 最大长度是多少</strong>？</p><p>String 类提供了一个 length 方法，返回值为 int 类型，而 int 的取值上限为 2^31 -1。所以理论上 String 的最大长度为 2^31 -1。</p><p><strong>达到这个长度的话需要多大的内存吗</strong>？</p><p>String 内部是使用一个 char 数组来维护字符序列的，一个 char 占用两个字节。如果说 String 最大长度是 2^31 -1 的话，那么最大的字符串占用内存空间约等于 4GB。</p><p>也就是说，我们需要有大于 4GB 的 JVM 运行内存才行。</p><p><strong>那 String 一般都存储在 JVM 的哪块区域呢</strong>？</p><p>字符串在 JVM 中的存储分两种情况，一种是 String 对象，存储在 JVM 的堆栈中。一种是字符串常量，存储在常量池里面。</p><p><strong>什么情况下字符串会存储在常量池呢</strong>？</p><p>当通过字面量进行字符串声明时，比如 String s = &quot;程序新大彬&quot;;，这个字符串在编译之后会以常量的形式进入到常量池。</p><p><strong>那常量池中的字符串最大长度是 2^31-1 吗</strong>？</p><p>不是的，常量池对 String 的长度是有另外限制的。。Java 中的 UTF-8 编码的 Unicode 字符串在常量池中以 CONSTANT_Utf8 类型表示。</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">CONSTANT_Utf8_info {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">    u1 tag</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">    u2 length</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">    u1 bytes[length]</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>length 在这里就是代表字符串的长度，length 的类型是 u2，u2 是无符号的 16 位整数，也就是说最大长度可以做到 2^16-1 即 65535。</p><p>不过 javac 编译器做了限制，需要 length &lt; 65535。所以字符串常量在常量池中的最大长度是 65535 - 1 = 65534。</p><p>最后总结一下：</p><p>String 在不同的状态下，具有不同的长度限制。</p><ul><li>字符串常量长度不能超过 65534</li><li>堆内字符串的长度不超过 2^31-1</li></ul>`,53)]))}const d=s(t,[["render",e],["__file","常见类.html.vue"]]),r=JSON.parse(`{"path":"/se/lang/java/basic/class/%E5%B8%B8%E8%A7%81%E7%B1%BB.html","title":"常见类","lang":"en-US","frontmatter":{"description":"常见类 Object Object 方法 全部方法如下： 分类 JUC notify notifyAll wait，三个 Reflect getClass GC： finalize：Called by the garbage collector on an object when garbage collection determines that t...","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/se/lang/java/basic/class/%E5%B8%B8%E8%A7%81%E7%B1%BB.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"常见类"}],["meta",{"property":"og:description","content":"常见类 Object Object 方法 全部方法如下： 分类 JUC notify notifyAll wait，三个 Reflect getClass GC： finalize：Called by the garbage collector on an object when garbage collection determines that t..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-05-08T07:35:02.000Z"}],["meta",{"property":"article:modified_time","content":"2024-05-08T07:35:02.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"常见类\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-08T07:35:02.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[{"level":2,"title":"Object","slug":"object","link":"#object","children":[{"level":3,"title":"Object 方法","slug":"object-方法","link":"#object-方法","children":[]}]},{"level":2,"title":"String","slug":"string","link":"#string","children":[{"level":3,"title":"String 为什么是不可变的?","slug":"string-为什么是不可变的","link":"#string-为什么是不可变的","children":[]},{"level":3,"title":"length() 返回值","slug":"length-返回值","link":"#length-返回值","children":[]},{"level":3,"title":"String、StringBuffer、StringBuilder 的区别？","slug":"string、stringbuffer、stringbuilder-的区别","link":"#string、stringbuffer、stringbuilder-的区别","children":[]},{"level":3,"title":"字符串常量池的作用了解吗？","slug":"字符串常量池的作用了解吗","link":"#字符串常量池的作用了解吗","children":[]}]}],"git":{"createdTime":1679321449000,"updatedTime":1715153702000,"contributors":[{"name":"davidliuk","email":"l729641074@163.com","commits":2},{"name":"刘大维","email":"davidliu@liudaweideMacBook-Pro.local","commits":2},{"name":"liudawei47","email":"liudawei47@jd.com","commits":1}]},"readingTime":{"minutes":8.16,"words":2447},"filePathRelative":"se/lang/java/basic/class/常见类.md","localizedDate":"March 20, 2023","excerpt":"\\n<h2>Object</h2>\\n<h3>Object 方法</h3>\\n<p>全部方法如下：</p>\\n<div class=\\"language-java line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"java\\" data-title=\\"java\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\">/**</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\"> * native 方法，用于返回当前运行时对象的 Class 对象，使用了 final 关键字修饰，故不允许子类重写。</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\"> */</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">public</span><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\"> final</span><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\"> native</span><span style=\\"--shiki-light:#C18401;--shiki-dark:#E5C07B\\"> Class</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#56B6C2\\">&lt;</span><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">?</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#56B6C2\\">&gt;</span><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\"> getClass</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\">()</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\">/**</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\"> * native 方法，用于返回对象的哈希码，主要使用在哈希表中，比如 JDK 中的HashMap。</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\"> */</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">public</span><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\"> native</span><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\"> int</span><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\"> hashCode</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\">()</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\">/**</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\"> * 用于比较 2 个对象的内存地址是否相等，String 类对该方法进行了重写以用于比较字符串的值是否相等。</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\"> */</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">public</span><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\"> boolean</span><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\"> equals</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\">(</span><span style=\\"--shiki-light:#C18401;--shiki-dark:#E5C07B\\">Object</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\"> obj)</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\">/**</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\"> * naitive 方法，用于创建并返回当前对象的一份拷贝。</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\"> */</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">protected</span><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\"> native</span><span style=\\"--shiki-light:#C18401;--shiki-dark:#E5C07B\\"> Object</span><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\"> clone</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\">() throws </span><span style=\\"--shiki-light:#C18401;--shiki-dark:#E5C07B\\">CloneNotSupportedException</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\">/**</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\"> * 返回类的名字实例的哈希码的 16 进制的字符串。建议 Object 所有的子类都重写这个方法。</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\"> */</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">public</span><span style=\\"--shiki-light:#C18401;--shiki-dark:#E5C07B\\"> String</span><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\"> toString</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\">()</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\">/**</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\"> * native 方法，并且不能重写。唤醒一个在此对象监视器上等待的线程(监视器相当于就是锁的概念)。如果有多个线程在等待只会任意唤醒一个。</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\"> */</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">public</span><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\"> final</span><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\"> native</span><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\"> void</span><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\"> notify</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\">()</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\">/**</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\"> * native 方法，并且不能重写。跟 notify 一样，唯一的区别就是会唤醒在此对象监视器上等待的所有线程，而不是一个线程。</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\"> */</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">public</span><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\"> final</span><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\"> native</span><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\"> void</span><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\"> notifyAll</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\">()</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\">/**</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\"> * native方法，并且不能重写。暂停线程的执行。注意：sleep 方法没有释放锁，而 wait 方法释放了锁 ，timeout 是等待时间。</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\"> */</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">public</span><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\"> final</span><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\"> native</span><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\"> void</span><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\"> wait</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\">(</span><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">long</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\"> timeout) throws </span><span style=\\"--shiki-light:#C18401;--shiki-dark:#E5C07B\\">InterruptedException</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\">/**</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\"> * 多了 nanos 参数，这个参数表示额外时间（以毫微秒为单位，范围是 0-999999）。 所以超时的时间还需要加上 nanos 毫秒。。</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\"> */</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">public</span><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\"> final</span><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\"> void</span><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\"> wait</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\">(</span><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">long</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\"> timeout</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">,</span><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\"> int</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\"> nanos) throws </span><span style=\\"--shiki-light:#C18401;--shiki-dark:#E5C07B\\">InterruptedException</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\">/**</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\"> * 跟之前的2个wait方法一样，只不过该方法一直等待，没有超时时间这个概念</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\"> */</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">public</span><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\"> final</span><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\"> void</span><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\"> wait</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\">() throws </span><span style=\\"--shiki-light:#C18401;--shiki-dark:#E5C07B\\">InterruptedException</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\">/**</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\"> * 实例被垃圾回收器回收的时候触发的操作</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\"> */</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">protected</span><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\"> void</span><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\"> finalize</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\">() throws Throwable { }</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{d as comp,r as data};
