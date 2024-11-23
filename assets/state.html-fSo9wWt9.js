import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as e,d as s,o as n}from"./app-Cv-jMnVl.js";const l={};function t(p,i){return n(),e("div",null,i[0]||(i[0]=[s(`<h1 id="线程状态" tabindex="-1"><a class="header-anchor" href="#线程状态"><span>线程状态</span></a></h1><p>IllegalThreadStateException</p><h2 id="状态转换图" tabindex="-1"><a class="header-anchor" href="#状态转换图"><span>状态转换图</span></a></h2><h3 id="java-六种状态" tabindex="-1"><a class="header-anchor" href="#java-六种状态"><span>JAVA 六种状态</span></a></h3><p><code>threadStatus</code></p><p><img src="https://cdn.jsdelivr.net/gh/davidliuk/images@master/blog/640-20230516213441212.png" alt="Java 线程状态变迁图" loading="lazy"></p><p>Java 线程在运行的生命周期中只可能处于下面 6 种不同状态的其中一个：</p><ul><li><p><code>NEW</code>：初始状态，线程被创建出来但没有被调用 <code>start()</code> 。</p><p>此状态只是一个 java 对象，并没有与 cpu 中的一个线程关联，start 以后可运行以后关联。</p></li><li><p><code>RUNNABLE</code>：运行状态，线程被调用了 <code>start()</code>等待运行的状态。</p></li><li><p><code>BLOCKED</code>：阻塞状态，需要等待锁释放。</p></li><li><p><code>WAITING</code>：等待状态，表示该线程需要等待其他线程做出通知或中断。</p></li><li><p><code>TIME_WAITING</code>：超时等待状态，可以在指定的时间后自行返回而不是像 WAITING 那样一直等待。</p></li><li><p><code>TERMINATED</code>：终止状态，表示该线程已经运行完毕。</p></li></ul><p>线程在生命周期中并不是固定处于某一个状态而是随着代码的执行在不同状态之间切换。</p><blockquote><p>控制线程先后执行次序的技巧：Debug 模式，在主线程和分线程分别打好断点，控制两个端点哪个先执行。</p></blockquote><h3 id="os-五种状态" tabindex="-1"><a class="header-anchor" href="#os-五种状态"><span>OS 五种状态</span></a></h3><p><img src="https://pics0.baidu.com/feed/b3b7d0a20cf431ad439b6a9d9c495ba42fdd9850.jpeg@f_auto?token=829fd620d9f82799c81048837cf840ae" alt="img" loading="lazy"></p><ul><li><p>NEW</p></li><li><p>READY：就绪状态，有资格但还没有运行</p></li><li><p>RUNNING：运行状态，有资格且正在运行</p></li><li><p>BLOCKED：阻塞状态，暂时没有资格分到 CPU 时间</p><p>特殊的阻塞 I/O 不需要 CPU 时间片是磁盘在处理的，也归到阻塞，但是实际上是在运行的</p></li><li><p>Terminated</p></li></ul><p>Java 中的 RUNNABLE 涵盖：就绪、运行、阻塞 I/O</p><h2 id="转换指令" tabindex="-1"><a class="header-anchor" href="#转换指令"><span>转换指令</span></a></h2><h3 id="终止线程" tabindex="-1"><a class="header-anchor" href="#终止线程"><span>终止线程</span></a></h3><p>在 Java 中，有几种方法可以终止线程，包括：</p><ol><li><p>使用标志变量：在线程中使用标志变量，当标志变量为 true 时，线程终止执行。</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> class</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> MyThread</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> extends</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> Thread</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    private</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> volatile</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> boolean</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> running </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> true</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> void</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> run</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">()</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        while</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (running) {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">            // 线程执行的代码</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> void</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> stopRunning</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">()</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        running </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> false</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>包含一个名为 running 的标志变量。在 run()方法中，线程会不断地检查 running 变量的值，如果 running 为 true，则继续执行线程的代码。当需要终止线程时，可以调用 stopRunning()方法将 running 变量设置为 false，从而终止线程的执行。</p><p>需要注意的是，running 变量必须使用 volatile 关键字进行修饰，以确保多个线程之间对该变量的可见性。否则，可能会出现一个线程修改了 running 变量的值，但是其他线程并没有立即看到这个变化的情况。</p></li><li><p>使用<code>interrupt()</code>方法：调用线程的<code>interrupt()</code>方法可以中断线程的执行。线程可以通过检查自身的中断状态来判断是否应该终止执行。</p></li><li><p>使用<code>stop()</code>方法：调用线程的<code>stop()</code>方法可以强制终止线程的执行。但是，<code>stop()</code>方法已经被标记为不安全的方法，因为它可能会导致线程在不安全的状态下停止执行，从而导致数据不一致或其他问题。<code>stop()</code>方法不安全的原因是，它会立即停止线程的执行，而不会给线程完成清理工作的机会。这可能会导致线程在执行过程中持有锁或其他资源，从而导致其他线程无法访问这些资源。此外，<code>stop()</code>方法可能会在任何时候停止线程的执行，从而导致线程在不一致的状态下停止执行。</p></li></ol><p>建议使用<code>interrupt()</code>方法来终止线程的执行，因为它可以安全地中断线程的执行，并且可以让线程完成清理工作。</p><h3 id="sleep-vs-wait" tabindex="-1"><a class="header-anchor" href="#sleep-vs-wait"><span>sleep vs wait</span></a></h3><h4 id="共同点" tabindex="-1"><a class="header-anchor" href="#共同点"><span>共同点</span></a></h4><p>效果都是让当前线程暂时放弃 CPU 的使用权，进入阻塞状态</p><h4 id="区别" tabindex="-1"><a class="header-anchor" href="#区别"><span>区别</span></a></h4><h5 id="方法归属不同" tabindex="-1"><a class="header-anchor" href="#方法归属不同"><span>方法归属不同</span></a></h5><ul><li>sleep(long) 是 Thread 的静态方法</li><li>wait(), wait(long) 是 Object 的成员方法，每个对象都有（任意对象都可以有锁）</li></ul><h5 id="醒来时机不同" tabindex="-1"><a class="header-anchor" href="#醒来时机不同"><span>醒来时机不同</span></a></h5><ul><li>执行 sleep(long), wait(long) 的线程都会在等待相应毫秒后醒来</li><li>wait(), wait(long) 还可以被 notify 唤醒，wait() 如果不唤醒就一直等下去</li><li>他们都可以被 interrupt 直接唤醒（抛出 InterruptException）</li></ul><h5 id="锁的特性不同" tabindex="-1"><a class="header-anchor" href="#锁的特性不同"><span>锁的特性不同</span></a></h5><ul><li>wait 方法的调用，必须先获取 wait 对象的锁，而 sleep 则无此限制</li><li>wait 方法执行后会释放对象锁，允许其他线程获取该对象锁（我放弃，但你们还可以用）</li><li>sleep 如果在 synchronize 中执行，并不会释放对象锁（我放弃，你们也用不了）</li></ul>`,29)]))}const r=a(l,[["render",t],["__file","state.html.vue"]]),c=JSON.parse(`{"path":"/se/lang/java/JUC/thread/state.html","title":"线程状态","lang":"en-US","frontmatter":{"description":"线程状态 IllegalThreadStateException 状态转换图 JAVA 六种状态 threadStatus Java 线程状态变迁图 Java 线程在运行的生命周期中只可能处于下面 6 种不同状态的其中一个： NEW：初始状态，线程被创建出来但没有被调用 start() 。 此状态只是一个 java 对象，并没有与 cpu 中的一个线程...","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/se/lang/java/JUC/thread/state.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"线程状态"}],["meta",{"property":"og:description","content":"线程状态 IllegalThreadStateException 状态转换图 JAVA 六种状态 threadStatus Java 线程状态变迁图 Java 线程在运行的生命周期中只可能处于下面 6 种不同状态的其中一个： NEW：初始状态，线程被创建出来但没有被调用 start() 。 此状态只是一个 java 对象，并没有与 cpu 中的一个线程..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/davidliuk/images@master/blog/640-20230516213441212.png"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-05-08T07:35:02.000Z"}],["meta",{"property":"article:modified_time","content":"2024-05-08T07:35:02.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"线程状态\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/davidliuk/images@master/blog/640-20230516213441212.png\\",\\"https://pics0.baidu.com/feed/b3b7d0a20cf431ad439b6a9d9c495ba42fdd9850.jpeg@f_auto?token=829fd620d9f82799c81048837cf840ae\\"],\\"dateModified\\":\\"2024-05-08T07:35:02.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[{"level":2,"title":"状态转换图","slug":"状态转换图","link":"#状态转换图","children":[{"level":3,"title":"JAVA 六种状态","slug":"java-六种状态","link":"#java-六种状态","children":[]},{"level":3,"title":"OS 五种状态","slug":"os-五种状态","link":"#os-五种状态","children":[]}]},{"level":2,"title":"转换指令","slug":"转换指令","link":"#转换指令","children":[{"level":3,"title":"终止线程","slug":"终止线程","link":"#终止线程","children":[]},{"level":3,"title":"sleep vs wait","slug":"sleep-vs-wait","link":"#sleep-vs-wait","children":[]}]}],"git":{"createdTime":1680492546000,"updatedTime":1715153702000,"contributors":[{"name":"刘大维","email":"davidliu@liudaweideMacBook-Pro.local","commits":1}]},"readingTime":{"minutes":3.79,"words":1137},"filePathRelative":"se/lang/java/JUC/thread/state.md","localizedDate":"April 3, 2023","excerpt":"\\n<p>IllegalThreadStateException</p>\\n<h2>状态转换图</h2>\\n<h3>JAVA 六种状态</h3>\\n<p><code>threadStatus</code></p>\\n<p><img src=\\"https://cdn.jsdelivr.net/gh/davidliuk/images@master/blog/640-20230516213441212.png\\" alt=\\"Java 线程状态变迁图\\" loading=\\"lazy\\"></p>\\n<p>Java 线程在运行的生命周期中只可能处于下面 6 种不同状态的其中一个：</p>\\n<ul>\\n<li>\\n<p><code>NEW</code>：初始状态，线程被创建出来但没有被调用 <code>start()</code> 。</p>\\n<p>此状态只是一个 java 对象，并没有与 cpu 中的一个线程关联，start 以后可运行以后关联。</p>\\n</li>\\n<li>\\n<p><code>RUNNABLE</code>：运行状态，线程被调用了 <code>start()</code>等待运行的状态。</p>\\n</li>\\n<li>\\n<p><code>BLOCKED</code>：阻塞状态，需要等待锁释放。</p>\\n</li>\\n<li>\\n<p><code>WAITING</code>：等待状态，表示该线程需要等待其他线程做出通知或中断。</p>\\n</li>\\n<li>\\n<p><code>TIME_WAITING</code>：超时等待状态，可以在指定的时间后自行返回而不是像 WAITING 那样一直等待。</p>\\n</li>\\n<li>\\n<p><code>TERMINATED</code>：终止状态，表示该线程已经运行完毕。</p>\\n</li>\\n</ul>","autoDesc":true}`);export{r as comp,c as data};
