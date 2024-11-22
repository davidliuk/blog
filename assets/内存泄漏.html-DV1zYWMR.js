import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,d as n,o as l}from"./app-UiaY2OnX.js";const t={};function e(h,i){return l(),a("div",null,i[0]||(i[0]=[n(`<h1 id="内存泄漏" tabindex="-1"><a class="header-anchor" href="#内存泄漏"><span>内存泄漏</span></a></h1><p>Java 中的内存泄漏是指程序中已经不再使用的对象仍然占用着内存，导致内存无法被回收，最终导致内存溢出的问题。常见的内存泄漏情况包括以下几种：</p><ol><li><p>静态集合类引起的内存泄漏：如果在静态集合类中存储了大量的对象，并且没有及时清理，就会导致内存泄漏。</p></li><li><p>对象生命周期管理不当引起（未释放）的内存泄漏：如果程序中的对象生命周期管理不当，比如没有及时关闭数据库连接、文件流等资源，就会导致内存泄漏。</p></li><li><p>匿名内部类引起的内存泄漏：如果在匿名内部类中引用了外部类的对象，并且没有及时释放，就会导致内存泄漏。</p></li></ol><p>下面是一个可能引起内存泄漏的示例代码：</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> class</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> MemoryLeakDemo</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    private</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> static</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> List</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">Object</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">&gt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> list </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> new</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> ArrayList</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;&gt;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">()</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> static</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> void</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> main</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">String</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[] </span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">args</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        for</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> i</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">; i </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&lt;</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1000000</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">; i++) {</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">            Object</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> obj</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> new</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> Object</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">            list</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">add</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(obj);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上面的示例代码中，我们创建了一个静态的 List 对象，并向其中添加了 1000000 个 Object 对象。由于 list 是静态的，因此即使程序中不再使用 list，list 中的对象也无法被回收，从而导致内存泄漏。为了避免内存泄漏，我们应该在程序中及时清理不再使用的对象，避免静态集合类存储大量对象，以及注意匿名内部类的使用。</p><h3 id="_2-2-java-内存泄漏引起的原因" tabindex="-1"><a class="header-anchor" href="#_2-2-java-内存泄漏引起的原因"><span>2.2 Java 内存泄漏引起的原因</span></a></h3><p>内存泄漏是指无用对象（不再使用的对象）持续占有内存或无用对象的内存得不到及时释放，从而造成内存空间的浪费称为内存泄漏。内存泄露有时不严重且不易察觉，这样开发者就不知道存在内存泄露，但有时也会很严重，会提示你 Out of memory。</p><p>Java 内存泄漏的根本原因是什么呢？长生命周期的对象持有短生命周期对象的引用就很可能发生内存泄漏，尽管短生命周期对象已经不再需要，但是因为长生命周期持有它的引用而导致不能被回收，这就是 Java 中内存泄漏的发生场景。</p><p>来先看看下面的例子，为什么会发生内存泄漏。下面这个例子中，A 对象引用 B 对象，A 对象的生命周期（t1-t4）比 B 对象的生命周期（t2-t3）长的多。当 B 对象没有被应用程序使用之后，A 对象仍然在引用着 B 对象。这样，垃圾回收器就没办法将 B 对象从内存中移除，从而导致内存问题，因为如果 A 引用更多这样的对象，那将有更多的未被引用对象存在，并消耗内存空间。</p><p>B 对象也可能会持有许多其他的对象，那这些对象同样也不会被垃圾回收器回收。所有这些没在使用的对象将持续的消耗之前分配的内存空间。</p><h4 id="_2-2-1-静态集合类引起内存泄漏" tabindex="-1"><a class="header-anchor" href="#_2-2-1-静态集合类引起内存泄漏"><span>2.2.1 静态集合类引起内存泄漏</span></a></h4><p>像 HashMap、Vector 等的使用最容易出现内存泄露，这些静态变量的生命周期和应用程序一致，他们所引用的所有的对象 Object 也不能被释放，因为他们也将一直被 Vector 等引用着。</p><p>在这个例子中，循环申请 Object 对象，并将所申请的对象放入一个 Vector 中，如果仅仅释放引用本身（o=null），那么 Vector 仍然引用该对象，所以这个对象对 GC 来说是不可回收的。因此，如果对象加入到 Vector 后，还必须从 Vector 中删除，最简单的方法就是将 Vector 对象设置为 null。</p><h4 id="_2-2-2-监听器" tabindex="-1"><a class="header-anchor" href="#_2-2-2-监听器"><span>2.2.2 监听器</span></a></h4><p>在 java 编程中，我们都需要和监听器打交道，通常一个应用当中会用到很多监听器，我们会调用一个控件的诸如 addXXXListener() 等方法来增加监听器，但往往在释放对象的时候却没有记住去删除这些监听器，从而增加了内存泄漏的机会。</p><h4 id="_2-2-3-各种连接" tabindex="-1"><a class="header-anchor" href="#_2-2-3-各种连接"><span>2.2.3 各种连接</span></a></h4><p>比如数据库连接（dataSourse.getConnection()），网络连接(socket)和 io 连接，除非其显式的调用了其 close() 方法将其连接关闭，否则是不会自动被 GC 回收的。对于 Resultset 和 Statement 对象可以不进行显式回收，但 Connection 一定要显式回收，因为 Connection 在任何时候都无法自动回收，而 Connection 一旦回收，Resultset 和 Statement 对象就会立即为 NULL。但是如果使用连接池，情况就不一样了，除了要显式地关闭连接，还必须显式地关闭 Resultset Statement 对象（关闭其中一个，另外一个也会关闭），否则就会造成大量的 Statement 对象无法释放，从而引起内存泄漏。这种情况下一般都会在 try 里面去的连接，在 finally 里面释放连接。</p><h4 id="_2-2-4-内部类和外部模块的引用" tabindex="-1"><a class="header-anchor" href="#_2-2-4-内部类和外部模块的引用"><span>2.2.4 内部类和外部模块的引用</span></a></h4><p>内部类的引用是比较容易遗忘的一种，而且一旦没释放可能导致一系列的后继类对象没有释放。此外程序员还要小心外部模块不经意的引用，例如程序员 A 负责 A 模块，调用了 B 模块的一个方法如：</p><p>这种调用就要非常小心了，传入了一个对象，很可能模块 B 就保持了对该对象的引用，这时候就需要注意模块 B 是否提供相应的操作去除引用。</p><h4 id="_2-2-5-单例模式" tabindex="-1"><a class="header-anchor" href="#_2-2-5-单例模式"><span>2.2.5 单例模式</span></a></h4><p>不正确使用单例模式是引起内存泄漏的一个常见问题，单例对象在初始化后将在 JVM 的整个生命周期中存在（以静态变量的方式），如果单例对象持有外部的引用，那么这个对象将不能被 JVM 正常回收，导致内存泄漏，考虑下面的例子：</p><p>Java 中的内存泄漏（Memory Leak）是指程序中的某些对象占用了内存，但是这些对象已经不再被程序使用，却没有被垃圾回收器回收，从而导致内存的浪费和程序性能的下降。</p><p>常见的内存泄漏原因包括：</p><ol><li><p>对象被无意中保留：当程序中的某个对象被无意中保留时，就会导致内存泄漏。例如，当一个对象被添加到一个全局的集合中，但是没有被及时地从集合中移除，就会导致内存泄漏。</p></li><li><p>静态集合类的使用：静态集合类（例如 HashMap、ArrayList 等）会一直持有对象的引用，即使这些对象已经不再被程序使用，也不会被垃圾回收器回收，从而导致内存泄漏。</p></li><li><p>内部类的使用：当内部类持有外部类的引用时，如果外部类的生命周期比内部类长，就会导致内存泄漏。</p></li></ol><p>为避免内存泄漏，可以采取以下措施：</p><ol><li>及时释放对象：当一个对象不再被程序使用时，应该及时将其释放，以便让垃圾回收器回收内存。</li><li>使用弱引用：弱引用（Weak Reference）可以让对象在没有强引用时被垃圾回收器回收。当一个对象只被弱引用引用时，如果没有其他强引用引用该对象，就会被垃圾回收器回收。</li><li>避免使用静态集合类：静态集合类会一直持有对象的引用，因此应该尽量避免使用静态集合类。</li><li>避免内部类持有外部类的引用：当内部类持有外部类的引用时，应该尽量避免外部类的生命周期比内部类长，以避免内存泄漏。</li><li>使用垃圾回收器：Java 中的垃圾回收器可以自动回收不再使用的对象，因此应该充分利用垃圾回收器来避免内存泄漏。</li></ol><h2 id="排查方法" tabindex="-1"><a class="header-anchor" href="#排查方法"><span>排查方法</span></a></h2><h3 id="jdk-自带命令" tabindex="-1"><a class="header-anchor" href="#jdk-自带命令"><span>JDK 自带命令</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">jstat</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -gcutil</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 33816</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 250</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 20</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> # 监控 jvm 的内存使用情况</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">jps</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -ml</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> # 输出虚拟机启动时传递给主类 main() 的参数，输出主类的全名</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">jmap</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -F</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -dump:live,format=b,file=dump.bin</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 85962</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> # dump 堆内存</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 分析方法</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 可以使用 VisualVM，主要查看是否存在大对象，然后分析为什么没有被回收</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">jstack</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -F</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -l</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -m</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 85962</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> # 显示虚拟机快照</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">jstack</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -l</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> PID</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &gt;&gt; </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">test.txt</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">jmap</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -histo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> pid</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> # 实时查看JVM对象大小的排序结果，但无法看到对象的具体内容</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="arthas" tabindex="-1"><a class="header-anchor" href="#arthas"><span>Arthas</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 找到最耗CPU的方法</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">thread</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -n</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 5</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 观察方法的返回</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">watch</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> com.test.MyClass</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> query</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> returnObj</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 反编译类</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">jad</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> com.test.MyClass</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 监控调用情况</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">monitor</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -c</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 5</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> com.test.MyClass</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> query</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 查看分段的调用时间</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">trace</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> com.test.MyClass</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> query</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 查看方法完整的调用链</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">stack</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> com.test.MyClass</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> query</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 记录调用现场</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">tt</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -t</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> com.test.MyClass</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> query</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="参数检查" tabindex="-1"><a class="header-anchor" href="#参数检查"><span>参数检查</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">bash</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">复制代码-Xms</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 初始堆大小</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">-Xmx</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 最大堆大小</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">-Xmn</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 新生代大小</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">XX:MaxMetaSpaceSize</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 元数据区大小</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">Survivor</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> Eden与Survivor区的大小比值</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,35)]))}const d=s(t,[["render",e],["__file","内存泄漏.html.vue"]]),r=JSON.parse(`{"path":"/se/lang/java/jvm/%E5%86%85%E5%AD%98%E7%AE%A1%E7%90%86/%E5%86%85%E5%AD%98%E5%8C%BA%E5%9F%9F/%E5%86%85%E5%AD%98%E6%B3%84%E6%BC%8F.html","title":"内存泄漏","lang":"en-US","frontmatter":{"description":"内存泄漏 Java 中的内存泄漏是指程序中已经不再使用的对象仍然占用着内存，导致内存无法被回收，最终导致内存溢出的问题。常见的内存泄漏情况包括以下几种： 静态集合类引起的内存泄漏：如果在静态集合类中存储了大量的对象，并且没有及时清理，就会导致内存泄漏。 对象生命周期管理不当引起（未释放）的内存泄漏：如果程序中的对象生命周期管理不当，比如没有及时关闭数据...","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/se/lang/java/jvm/%E5%86%85%E5%AD%98%E7%AE%A1%E7%90%86/%E5%86%85%E5%AD%98%E5%8C%BA%E5%9F%9F/%E5%86%85%E5%AD%98%E6%B3%84%E6%BC%8F.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"内存泄漏"}],["meta",{"property":"og:description","content":"内存泄漏 Java 中的内存泄漏是指程序中已经不再使用的对象仍然占用着内存，导致内存无法被回收，最终导致内存溢出的问题。常见的内存泄漏情况包括以下几种： 静态集合类引起的内存泄漏：如果在静态集合类中存储了大量的对象，并且没有及时清理，就会导致内存泄漏。 对象生命周期管理不当引起（未释放）的内存泄漏：如果程序中的对象生命周期管理不当，比如没有及时关闭数据..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-01-08T03:06:14.000Z"}],["meta",{"property":"article:modified_time","content":"2024-01-08T03:06:14.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"内存泄漏\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-01-08T03:06:14.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[{"level":3,"title":"2.2 Java 内存泄漏引起的原因","slug":"_2-2-java-内存泄漏引起的原因","link":"#_2-2-java-内存泄漏引起的原因","children":[]},{"level":2,"title":"排查方法","slug":"排查方法","link":"#排查方法","children":[{"level":3,"title":"JDK 自带命令","slug":"jdk-自带命令","link":"#jdk-自带命令","children":[]},{"level":3,"title":"Arthas","slug":"arthas","link":"#arthas","children":[]},{"level":3,"title":"参数检查","slug":"参数检查","link":"#参数检查","children":[]}]}],"git":{"createdTime":1684318252000,"updatedTime":1704683174000,"contributors":[{"name":"davidliu","email":"liudawei47@jd.com","commits":1}]},"readingTime":{"minutes":7.78,"words":2333},"filePathRelative":"se/lang/java/jvm/内存管理/内存区域/内存泄漏.md","localizedDate":"May 17, 2023","excerpt":"\\n<p>Java 中的内存泄漏是指程序中已经不再使用的对象仍然占用着内存，导致内存无法被回收，最终导致内存溢出的问题。常见的内存泄漏情况包括以下几种：</p>\\n<ol>\\n<li>\\n<p>静态集合类引起的内存泄漏：如果在静态集合类中存储了大量的对象，并且没有及时清理，就会导致内存泄漏。</p>\\n</li>\\n<li>\\n<p>对象生命周期管理不当引起（未释放）的内存泄漏：如果程序中的对象生命周期管理不当，比如没有及时关闭数据库连接、文件流等资源，就会导致内存泄漏。</p>\\n</li>\\n<li>\\n<p>匿名内部类引起的内存泄漏：如果在匿名内部类中引用了外部类的对象，并且没有及时释放，就会导致内存泄漏。</p>\\n</li>\\n</ol>","autoDesc":true}`);export{d as comp,r as data};
