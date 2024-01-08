import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as n,d as e}from"./app-9107e99b.js";const t={},p=e(`<h1 id="内存泄漏" tabindex="-1"><a class="header-anchor" href="#内存泄漏" aria-hidden="true">#</a> 内存泄漏</h1><p>Java 中的内存泄漏是指程序中已经不再使用的对象仍然占用着内存，导致内存无法被回收，最终导致内存溢出的问题。常见的内存泄漏情况包括以下几种：</p><ol><li><p>静态集合类引起的内存泄漏：如果在静态集合类中存储了大量的对象，并且没有及时清理，就会导致内存泄漏。</p></li><li><p>对象生命周期管理不当引起（未释放）的内存泄漏：如果程序中的对象生命周期管理不当，比如没有及时关闭数据库连接、文件流等资源，就会导致内存泄漏。</p></li><li><p>匿名内部类引起的内存泄漏：如果在匿名内部类中引用了外部类的对象，并且没有及时释放，就会导致内存泄漏。</p></li></ol><p>下面是一个可能引起内存泄漏的示例代码：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MemoryLeakDemo</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> list <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">1000000</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">Object</span> obj <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Object</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上面的示例代码中，我们创建了一个静态的 List 对象，并向其中添加了 1000000 个 Object 对象。由于 list 是静态的，因此即使程序中不再使用 list，list 中的对象也无法被回收，从而导致内存泄漏。为了避免内存泄漏，我们应该在程序中及时清理不再使用的对象，避免静态集合类存储大量对象，以及注意匿名内部类的使用。</p><h3 id="_2-2-java-内存泄漏引起的原因" tabindex="-1"><a class="header-anchor" href="#_2-2-java-内存泄漏引起的原因" aria-hidden="true">#</a> 2.2 Java 内存泄漏引起的原因</h3><p>内存泄漏是指无用对象（不再使用的对象）持续占有内存或无用对象的内存得不到及时释放，从而造成内存空间的浪费称为内存泄漏。内存泄露有时不严重且不易察觉，这样开发者就不知道存在内存泄露，但有时也会很严重，会提示你 Out of memory。</p><p>Java 内存泄漏的根本原因是什么呢？长生命周期的对象持有短生命周期对象的引用就很可能发生内存泄漏，尽管短生命周期对象已经不再需要，但是因为长生命周期持有它的引用而导致不能被回收，这就是 Java 中内存泄漏的发生场景。</p><p>来先看看下面的例子，为什么会发生内存泄漏。下面这个例子中，A 对象引用 B 对象，A 对象的生命周期（t1-t4）比 B 对象的生命周期（t2-t3）长的多。当 B 对象没有被应用程序使用之后，A 对象仍然在引用着 B 对象。这样，垃圾回收器就没办法将 B 对象从内存中移除，从而导致内存问题，因为如果 A 引用更多这样的对象，那将有更多的未被引用对象存在，并消耗内存空间。</p><p>B 对象也可能会持有许多其他的对象，那这些对象同样也不会被垃圾回收器回收。所有这些没在使用的对象将持续的消耗之前分配的内存空间。</p><h4 id="_2-2-1-静态集合类引起内存泄漏" tabindex="-1"><a class="header-anchor" href="#_2-2-1-静态集合类引起内存泄漏" aria-hidden="true">#</a> 2.2.1 静态集合类引起内存泄漏</h4><p>像 HashMap、Vector 等的使用最容易出现内存泄露，这些静态变量的生命周期和应用程序一致，他们所引用的所有的对象 Object 也不能被释放，因为他们也将一直被 Vector 等引用着。</p><p>在这个例子中，循环申请 Object 对象，并将所申请的对象放入一个 Vector 中，如果仅仅释放引用本身（o=null），那么 Vector 仍然引用该对象，所以这个对象对 GC 来说是不可回收的。因此，如果对象加入到 Vector 后，还必须从 Vector 中删除，最简单的方法就是将 Vector 对象设置为 null。</p><h4 id="_2-2-2-监听器" tabindex="-1"><a class="header-anchor" href="#_2-2-2-监听器" aria-hidden="true">#</a> 2.2.2 监听器</h4><p>在 java 编程中，我们都需要和监听器打交道，通常一个应用当中会用到很多监听器，我们会调用一个控件的诸如 addXXXListener() 等方法来增加监听器，但往往在释放对象的时候却没有记住去删除这些监听器，从而增加了内存泄漏的机会。</p><h4 id="_2-2-3-各种连接" tabindex="-1"><a class="header-anchor" href="#_2-2-3-各种连接" aria-hidden="true">#</a> 2.2.3 各种连接</h4><p>比如数据库连接（dataSourse.getConnection()），网络连接(socket)和 io 连接，除非其显式的调用了其 close() 方法将其连接关闭，否则是不会自动被 GC 回收的。对于 Resultset 和 Statement 对象可以不进行显式回收，但 Connection 一定要显式回收，因为 Connection 在任何时候都无法自动回收，而 Connection 一旦回收，Resultset 和 Statement 对象就会立即为 NULL。但是如果使用连接池，情况就不一样了，除了要显式地关闭连接，还必须显式地关闭 Resultset Statement 对象（关闭其中一个，另外一个也会关闭），否则就会造成大量的 Statement 对象无法释放，从而引起内存泄漏。这种情况下一般都会在 try 里面去的连接，在 finally 里面释放连接。</p><h4 id="_2-2-4-内部类和外部模块的引用" tabindex="-1"><a class="header-anchor" href="#_2-2-4-内部类和外部模块的引用" aria-hidden="true">#</a> 2.2.4 内部类和外部模块的引用</h4><p>内部类的引用是比较容易遗忘的一种，而且一旦没释放可能导致一系列的后继类对象没有释放。此外程序员还要小心外部模块不经意的引用，例如程序员 A 负责 A 模块，调用了 B 模块的一个方法如：</p><p>这种调用就要非常小心了，传入了一个对象，很可能模块 B 就保持了对该对象的引用，这时候就需要注意模块 B 是否提供相应的操作去除引用。</p><h4 id="_2-2-5-单例模式" tabindex="-1"><a class="header-anchor" href="#_2-2-5-单例模式" aria-hidden="true">#</a> 2.2.5 单例模式</h4><p>不正确使用单例模式是引起内存泄漏的一个常见问题，单例对象在初始化后将在 JVM 的整个生命周期中存在（以静态变量的方式），如果单例对象持有外部的引用，那么这个对象将不能被 JVM 正常回收，导致内存泄漏，考虑下面的例子：</p><p>Java 中的内存泄漏（Memory Leak）是指程序中的某些对象占用了内存，但是这些对象已经不再被程序使用，却没有被垃圾回收器回收，从而导致内存的浪费和程序性能的下降。</p><p>常见的内存泄漏原因包括：</p><ol><li><p>对象被无意中保留：当程序中的某个对象被无意中保留时，就会导致内存泄漏。例如，当一个对象被添加到一个全局的集合中，但是没有被及时地从集合中移除，就会导致内存泄漏。</p></li><li><p>静态集合类的使用：静态集合类（例如 HashMap、ArrayList 等）会一直持有对象的引用，即使这些对象已经不再被程序使用，也不会被垃圾回收器回收，从而导致内存泄漏。</p></li><li><p>内部类的使用：当内部类持有外部类的引用时，如果外部类的生命周期比内部类长，就会导致内存泄漏。</p></li></ol><p>为避免内存泄漏，可以采取以下措施：</p><ol><li>及时释放对象：当一个对象不再被程序使用时，应该及时将其释放，以便让垃圾回收器回收内存。</li><li>使用弱引用：弱引用（Weak Reference）可以让对象在没有强引用时被垃圾回收器回收。当一个对象只被弱引用引用时，如果没有其他强引用引用该对象，就会被垃圾回收器回收。</li><li>避免使用静态集合类：静态集合类会一直持有对象的引用，因此应该尽量避免使用静态集合类。</li><li>避免内部类持有外部类的引用：当内部类持有外部类的引用时，应该尽量避免外部类的生命周期比内部类长，以避免内存泄漏。</li><li>使用垃圾回收器：Java 中的垃圾回收器可以自动回收不再使用的对象，因此应该充分利用垃圾回收器来避免内存泄漏。</li></ol><h2 id="排查方法" tabindex="-1"><a class="header-anchor" href="#排查方法" aria-hidden="true">#</a> 排查方法</h2><h3 id="jdk-自带命令" tabindex="-1"><a class="header-anchor" href="#jdk-自带命令" aria-hidden="true">#</a> JDK 自带命令</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>jstat <span class="token parameter variable">-gcutil</span> <span class="token number">33816</span> <span class="token number">250</span> <span class="token number">20</span> <span class="token comment"># 监控 jvm 的内存使用情况</span>
jps <span class="token parameter variable">-ml</span> <span class="token comment"># 输出虚拟机启动时传递给主类 main() 的参数，输出主类的全名</span>
jmap <span class="token parameter variable">-F</span> -dump:live,format<span class="token operator">=</span>b,file<span class="token operator">=</span>dump.bin <span class="token number">85962</span> <span class="token comment"># dump 堆内存</span>
<span class="token comment"># 分析方法</span>
<span class="token comment"># 可以使用 VisualVM，主要查看是否存在大对象，然后分析为什么没有被回收</span>
jstack <span class="token parameter variable">-F</span> <span class="token parameter variable">-l</span> <span class="token parameter variable">-m</span> <span class="token number">85962</span> <span class="token comment"># 显示虚拟机快照</span>
jstack <span class="token parameter variable">-l</span> PID <span class="token operator">&gt;&gt;</span> test.txt
jmap <span class="token parameter variable">-histo</span> pid <span class="token comment"># 实时查看JVM对象大小的排序结果，但无法看到对象的具体内容</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="arthas" tabindex="-1"><a class="header-anchor" href="#arthas" aria-hidden="true">#</a> Arthas</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 找到最耗CPU的方法</span>
thread <span class="token parameter variable">-n</span> <span class="token number">5</span>
<span class="token comment"># 观察方法的返回</span>
<span class="token function">watch</span> com.test.MyClass query returnObj
<span class="token comment"># 反编译类</span>
jad com.test.MyClass
<span class="token comment"># 监控调用情况</span>
monitor <span class="token parameter variable">-c</span> <span class="token number">5</span> com.test.MyClass query
<span class="token comment"># 查看分段的调用时间</span>
trace com.test.MyClass query
<span class="token comment"># 查看方法完整的调用链</span>
stack com.test.MyClass query
<span class="token comment"># 记录调用现场</span>
tt <span class="token parameter variable">-t</span> com.test.MyClass query
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="参数检查" tabindex="-1"><a class="header-anchor" href="#参数检查" aria-hidden="true">#</a> 参数检查</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">bash</span>
复制代码-Xms 初始堆大小
<span class="token parameter variable">-Xmx</span> 最大堆大小
<span class="token parameter variable">-Xmn</span> 新生代大小
XX:MaxMetaSpaceSize 元数据区大小
Survivor Eden与Survivor区的大小比值
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,35),i=[p];function l(c,o){return s(),n("div",null,i)}const u=a(t,[["render",l],["__file","内存泄漏.html.vue"]]);export{u as default};
