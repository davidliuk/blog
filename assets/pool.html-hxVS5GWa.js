import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as e,d as a,o as l}from"./app-C8HRrJwL.js";const n={};function t(h,i){return l(),e("div",null,i[0]||(i[0]=[a(`<h1 id="线程池" tabindex="-1"><a class="header-anchor" href="#线程池"><span>线程池</span></a></h1><p><a href="https://blog.csdn.net/ch98000/article/details/126727000" target="_blank" rel="noopener noreferrer">Java 线程池进阶<em>服务重启线程池如何保证不丢失任务</em>一头狒狒的博客-CSDN 博客</a></p><h2 id="好处" tabindex="-1"><a class="header-anchor" href="#好处"><span>好处</span></a></h2><p>池化技术：线程池、数据库连接池、Http 连接池等等都是对这个思想的应用。池化技术的思想主要是为了减少每次获取资源的消耗，提高对资源的利用率。</p><p><strong>线程池</strong>提供了一种限制和管理资源（包括执行一个任务）的方式。 每个<strong>线程池</strong>还维护一些基本统计信息，例如已完成任务的数量。</p><p>这里借用《Java 并发编程的艺术》提到的来说一下<strong>使用线程池的好处</strong>：</p><ul><li><strong>降低资源消耗</strong>。通过重复利用已创建的线程降低线程创建和销毁造成的消耗。创建一个线程 1M 内存</li><li><strong>提高响应速度</strong>。当任务到达时，任务可以不需要等到线程创建就能立即执行。</li><li><strong>提高线程的可管理性</strong>。线程是稀缺资源，如果无限制的创建，不仅会消耗系统资源，还会降低系统的稳定性，使用线程池可以进行统一的分配，调优和监控。</li></ul><h2 id="核心参数" tabindex="-1"><a class="header-anchor" href="#核心参数"><span>核心参数</span></a></h2><h3 id="核心概念" tabindex="-1"><a class="header-anchor" href="#核心概念"><span>核心概念</span></a></h3><p>线程</p><ul><li>核心线程：运行完任务以后仍保留在线程池当中</li><li>救急线程：运行完任务以后不保留被抛弃</li></ul><h3 id="初始参数" tabindex="-1"><a class="header-anchor" href="#初始参数"><span>初始参数</span></a></h3><ol><li><p>corePoolSize 核心线程数目</p><ul><li>最多<strong>保留</strong>的线程数，可以为 0</li></ul></li><li><p>maximumPoolSize 最大线程数目</p><ul><li>核心线程 + 救急线程</li></ul></li><li><p>keepAliveTime 生存时间</p><p>针对救急线程，执行完成以后存留的时间的数值，如 20，30 等</p></li><li><p>unit 时间单位</p><p>针对救急线程，执行完成以后存留的时间的单位，如秒、毫秒等</p></li><li><p>workQueue 任务队列上限</p><p>阻塞队列，<code>ArrayBlockingQueue(100)</code></p></li><li><p>threadFactory 线程工厂（optional）</p><p>如可以用来设置线程命名规则、注册统一异常处理器</p></li><li><p>handler 拒绝策略（optional）</p><p>四种，线程池、等待队列、救急线程都满的时候，如何处理</p><ul><li>AbortPolicy，抛出 <code>RejectedExecutionException</code>来拒绝新任务的处理。</li><li>CallerRunsPolicy，调用者自己去运行这个任务，这种策略会降低对于新任务提交速度，影响程序的整体性能。如果您的应用程序可以承受此延迟并且你要求任何一个任务请求都要被执行的话，你可以选择这个策略。</li><li>DiscardPolicy，新加入的丢弃掉，直接丢弃掉。</li><li>DiscardOldestPolicy，把任务队列中等待最久的（最先加入队列的）丢弃掉，然后新任务加入进来。</li></ul></li></ol><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">private</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> static</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> final</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> CORE_POOL_SIZE </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 5</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">private</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> static</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> final</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> MAX_POOL_SIZE </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 10</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">private</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> static</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> final</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> QUEUE_CAPACITY </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 100</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">private</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> static</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> final</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> Long</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> KEEP_ALIVE_TIME </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1L</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">//使用阿里巴巴推荐的创建线程池的方式</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">//通过ThreadPoolExecutor构造函数自定义参数创建</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">ThreadPoolExecutor</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> executor </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> new</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> ThreadPoolExecutor</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">(</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">        CORE_POOL_SIZE</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">        MAX_POOL_SIZE</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">        KEEP_ALIVE_TIME</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">        TimeUnit</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">SECONDS</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        new</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> ArrayBlockingQueue</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;&gt;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">(QUEUE_CAPACITY)</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        new</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> ThreadPoolExecutor</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">CallerRunsPolicy</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">()</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">)</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="执行流程" tabindex="-1"><a class="header-anchor" href="#执行流程"><span>执行流程</span></a></h2><p>核心线程都在忙的时候，放入任务队列，任务队列也满的时候，进入救急线程</p><ol><li>如果当前有空闲线程，则直接执行</li><li>如果当前运行的线程数小于核心线程数，那么就会新建一个线程来执行任务。</li><li>如果当前运行的线程数等于或大于核心线程数，但是小于最大线程数，那么就把该任务放入到任务队列里等待执行。</li><li>如果向任务队列投放任务失败（任务队列已经满了），但是当前运行的线程数是小于最大线程数的，就新建一个救急线程来执行任务。</li><li>如果当前运行的线程数已经等同于最大线程数了，超出最大线程数，当前任务会被拒绝，饱和策略会调用<code>RejectedExecutionHandler.rejectedExecution()</code>方法。</li></ol><p><img src="https://cdn.jsdelivr.net/gh/davidliuk/images@master/blog/04c18c80cc564de68c18a9e9bf73f965.png" alt="img" loading="lazy"></p><h2 id="内置线程池" tabindex="-1"><a class="header-anchor" href="#内置线程池"><span>内置线程池</span></a></h2><h3 id="fixedthreadpool" tabindex="-1"><a class="header-anchor" href="#fixedthreadpool"><span>FixedThreadPool</span></a></h3><p>新创建的 <code>FixedThreadPool</code> 的 <code>corePoolSize</code> 和 <code>maximumPoolSize</code> 都被设置为 <code>nThreads</code>，这个 <code>nThreads</code> 参数是我们使用的时候自己传递的。</p><p>即使 <code>maximumPoolSize</code> 的值比 <code>corePoolSize</code> 大，也至多只会创建 <code>corePoolSize</code> 个线程。这是因为<code>FixedThreadPool</code> 使用的是容量为 <code>Integer.MAX_VALUE</code> 的 <code>LinkedBlockingQueue</code>（无界队列），队列永远不会被放满。</p><h4 id="为什么不推荐使用fixedthreadpool" tabindex="-1"><a class="header-anchor" href="#为什么不推荐使用fixedthreadpool"><span>为什么不推荐使用<code>FixedThreadPool</code>？</span></a></h4><p><code>FixedThreadPool</code> 使用无界队列 <code>LinkedBlockingQueue</code>（队列的容量为 Integer.MAX_VALUE）作为线程池的工作队列会对线程池带来如下影响 ：</p><ol><li>当线程池中的线程数达到 <code>corePoolSize</code> 后，新任务将在无界队列中等待，因此线程池中的线程数不会超过 <code>corePoolSize</code>；</li><li>由于使用无界队列时 <code>maximumPoolSize</code> 将是一个无效参数，因为不可能存在任务队列满的情况。所以，通过创建 <code>FixedThreadPool</code>的源码可以看出创建的 <code>FixedThreadPool</code> 的 <code>corePoolSize</code> 和 <code>maximumPoolSize</code> 被设置为同一个值。</li><li>由于 1 和 2，使用无界队列时 <code>keepAliveTime</code> 将是一个无效参数；</li><li>运行中的 <code>FixedThreadPool</code>（未执行 <code>shutdown()</code>或 <code>shutdownNow()</code>）不会拒绝任务，在任务比较多的时候会导致 OOM（内存溢出）。</li></ol><h3 id="singlethreadexecutor" tabindex="-1"><a class="header-anchor" href="#singlethreadexecutor"><span>SingleThreadExecutor</span></a></h3><p><code>SingleThreadExecutor</code> 是只有一个线程的线程池。下面看看<strong>SingleThreadExecutor 的实现：</strong></p><h4 id="为什么不推荐使用singlethreadexecutor" tabindex="-1"><a class="header-anchor" href="#为什么不推荐使用singlethreadexecutor"><span>为什么不推荐使用<code>SingleThreadExecutor</code>？</span></a></h4><p><code>SingleThreadExecutor</code> 和 <code>FixedThreadPool</code> 一样，使用的都是容量为 <code>Integer.MAX_VALUE</code> 的 <code>LinkedBlockingQueue</code>（无界队列）作为线程池的工作队列。<code>SingleThreadExecutor</code> 使用无界队列作为线程池的工作队列会对线程池带来的影响与 <code>FixedThreadPool</code> 相同。说简单点，就是可能会导致 OOM。</p><h3 id="cachedthreadpool" tabindex="-1"><a class="header-anchor" href="#cachedthreadpool"><span>CachedThreadPool</span></a></h3><p><code>CachedThreadPool</code> 是一个会根据需要创建新线程的线程池。下面通过源码来看看 <code>CachedThreadPool</code> 的实现：</p><p><code>CachedThreadPool</code> 的<code>corePoolSize</code> 被设置为空（0），<code>maximumPoolSize</code>被设置为 <code>Integer.MAX.VALUE</code>，即它是无界的，这也就意味着如果主线程提交任务的速度高于 <code>maximumPool</code> 中线程处理任务的速度时，<code>CachedThreadPool</code>会不断创建新的线程。极端情况下，这样会导致耗尽 cpu 和内存资源。</p><h4 id="为什么不推荐使用cachedthreadpool" tabindex="-1"><a class="header-anchor" href="#为什么不推荐使用cachedthreadpool"><span>为什么不推荐使用<code>CachedThreadPool</code>？</span></a></h4><p><code>CachedThreadPool</code> 使用的是同步队列 <code>SynchronousQueue</code>, 允许创建的线程数量为 <code>Integer.MAX_VALUE</code> ，可能会创建大量线程，从而导致 OOM。</p><h3 id="scheduledthreadpool" tabindex="-1"><a class="header-anchor" href="#scheduledthreadpool"><span>ScheduledThreadPool</span></a></h3><p><code>ScheduledThreadPool</code> 用来在给定的延迟后运行任务或者定期执行任务。这个在实际项目中基本不会被用到，也不推荐使用，大家只需要简单了解一下即可。</p><p><code>ScheduledThreadPool</code> 是通过 <code>ScheduledThreadPoolExecutor</code> 创建的，使用的<code>DelayedWorkQueue</code>（延迟阻塞队列）作为线程池的任务队列。</p><p><code>DelayedWorkQueue</code> 的内部元素并不是按照放入的时间排序，而是会按照延迟的时间长短对任务进行排序，内部采用的是“堆”的数据结构，可以保证每次出队的任务都是当前队列中执行时间最靠前的。<code>DelayedWorkQueue</code> 添加元素满了之后会自动扩容原来容量的 1/2，即永远不会阻塞，最大扩容可达 <code>Integer.MAX_VALUE</code>，所以最多只能创建核心线程数的线程。</p><p><code>ScheduledThreadPoolExecutor</code> 继承了 <code>ThreadPoolExecutor</code>，所以创建 <code>ScheduledThreadExecutor</code> 本质也是创建一个 <code>ThreadPoolExecutor</code> 线程池，只是传入的参数不相同。</p><h2 id="阻塞队列" tabindex="-1"><a class="header-anchor" href="#阻塞队列"><span>阻塞队列</span></a></h2><h3 id="什么是阻塞队列" tabindex="-1"><a class="header-anchor" href="#什么是阻塞队列"><span>什么是阻塞队列</span></a></h3><p>阻塞队列：从定义上来说是队列的一种，那么肯定是一个先进先出（FIFO）的数据结构。与普通队列不同的是，它支持两个附加操作，即阻塞添加和阻塞删除方法。</p><ul><li>阻塞添加<code>put</code>：当阻塞队列是满时，往队列里添加元素的操作将被阻塞。</li><li>阻塞移除<code>take</code>：当阻塞队列是空时，从队列中获取元素/删除元素的操作将被阻塞。</li></ul><table><thead><tr><th>方法</th><th>抛出异常</th><th>返回结果不抛异常</th><th>阻塞</th><th>阻塞特定时间</th></tr></thead><tbody><tr><td>入队</td><td>add(e)</td><td>offer(e)</td><td>put(e)</td><td>offer(e, time, unit)</td></tr><tr><td>出队</td><td>remove()</td><td>poll()</td><td>take()</td><td>poll(time, unit)</td></tr><tr><td>队首</td><td>element()</td><td>peek()</td><td>不支持</td><td>不支持</td></tr></tbody></table><h3 id="线程池常用的阻塞队列总结" tabindex="-1"><a class="header-anchor" href="#线程池常用的阻塞队列总结"><span>线程池常用的阻塞队列总结</span></a></h3><p>新任务来的时候会先判断当前运行的线程数量是否达到核心线程数，如果达到的话，新任务就会被存放在队列中。</p><p>为什么用阻塞队列：简单的一个场景，消费者一端不一定是时时提交任务就能马上执行，可能有很多因素，比如计算或者 IO 等资源没办法马上就位，所以有等待，但是任务队列也不一定就无限大，所以才有了阻塞队列，在任务池已满且队列已经有很多任务时，需要阻塞等待。</p><p>不同的线程池会选用不同的阻塞队列，我们可以结合内置线程池来分析。</p><ul><li>容量为 <code>Integer.MAX_VALUE</code> 的 <code>LinkedBlockingQueue</code>（无界队列）：<code>FixedThreadPool</code> 和 <code>SingleThreadExector</code> 。由于队列永远不会被放满，因此<code>FixedThreadPool</code>最多只能创建核心线程数的线程。</li><li><code>SynchronousQueue</code>（同步队列） ：<code>CachedThreadPool</code> 。<code>SynchronousQueue</code> 没有容量，不存储元素，目的是保证对于提交的任务，如果有空闲线程，则使用空闲线程来处理；否则新建一个线程来处理任务。也就是说，<code>CachedThreadPool</code> 的最大线程数是 <code>Integer.MAX_VALUE</code> ，可以理解为线程数是可以无限扩展的，可能会创建大量线程，从而导致 OOM。</li><li><code>DelayedWorkQueue</code>（延迟阻塞队列）：<code>ScheduledThreadPool</code> 和 <code>SingleThreadScheduledExecutor</code> 。<code>DelayedWorkQueue</code> 的内部元素并不是按照放入的时间排序，而是会按照延迟的时间长短对任务进行排序，内部采用的是“堆”的数据结构，可以保证每次出队的任务都是当前队列中执行时间最靠前的。<code>DelayedWorkQueue</code> 添加元素满了之后会自动扩容原来容量的 1/2，即永远不会阻塞，最大扩容可达 <code>Integer.MAX_VALUE</code>，所以最多只能创建核心线程数的线程。</li></ul><h3 id="原理" tabindex="-1"><a class="header-anchor" href="#原理"><span>原理</span></a></h3><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">public</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> E</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> take</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">() throws InterruptedException {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    final</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> ReentrantLock</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> lock </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> this</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">lock</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">    lock</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">lockInterruptibly</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    try</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        while</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> (count </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">==</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">)</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">            notEmpty</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">await</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        return</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> dequeue</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">()</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">    } </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">finally</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">        lock</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">unlock</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> void</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> put</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">E</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> e) throws InterruptedException {</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    checkNotNull</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">(e)</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    final</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> ReentrantLock</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> lock </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> this</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">lock</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">    lock</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">lockInterruptibly</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    try</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        while</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> (count </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">==</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> items</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">length</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">)</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">            notFull</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">await</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">        enqueue</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">(e)</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">    } </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">finally</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">        lock</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">unlock</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>是否有界</p><p>阻塞队列还有一个非常重要的属性，那就是容量的大小，分为有界和无界两种。无界队列意味着里面可以容纳非常多的元素，例如 LinkedBlockingQueue 的上限是 Integer.MAX_VALUE，是非常大的一个数，可以近似认为是无限容量，因为我们几乎无法把这个容量装满。但是有的阻塞队列是有界的，例如 ArrayBlockingQueue 如果容量满了，也不会扩容，所以一旦满了就无法再往里放数据了。</p><p>能否扩容</p><p>因为有时我们并不能在初始的时候很好的准确估计队列的大小，因为业务可能有高峰期、低谷期。如果一开始就固定一个容量，可能无法应对所有的情况，也是不合适的，有可能需要动态扩容。如果我们需要动态扩容的话，那么就不能选择 ArrayBlockingQueue ，因为它的容量在创建时就确定了，无法扩容。相反，PriorityBlockingQueue 即使在指定了初始容量之后，后续如果有需要，也可以自动扩容。所以我们可以根据是否需要扩容来选取合适的队列。</p><p>内存结构</p><p>我们分析过 ArrayBlockingQueue 的源码，看到了它的内部结构是“数组”的形式。和它不同的是，LinkedBlockingQueue 的内部是用链表实现的，所以这里就需要我们考虑到，ArrayBlockingQueue 没有链表所需要的“节点”，空间利用率更高。所以如果我们对性能有要求可以从内存的结构角度去考虑这个问题。</p><p>性能</p><p>比如 LinkedBlockingQueue 由于拥有两把锁，它的操作粒度更细，在并发程度高的时候，相对于只有一把锁的 ArrayBlockingQueue 性能会更好。另外，SynchronousQueue 性能往往优于其他实现，因为它只需要“直接传递”，而不需要存储的过程。如果我们的场景需要直接传递的话，可以优先考虑 SynchronousQueue。</p><h3 id="常见阻塞队列" tabindex="-1"><a class="header-anchor" href="#常见阻塞队列"><span>常见阻塞队列</span></a></h3><p>BlockingQueue 接口的实现类都被放在了 juc 包中，它们的区别主要体现在存储结构上或对元素操作上的不同，但是对于 take 与 put 操作的原理，却是类似的：</p><table><thead><tr><th>队列</th><th>描述</th></tr></thead><tbody><tr><td><a href="https://www.cnblogs.com/interdrp/p/17029346.html" target="_blank" rel="noopener noreferrer">ArrayBlockingQueue</a></td><td>基于数组结构实现的一个有界阻塞队列</td></tr><tr><td><a href="https://www.cnblogs.com/interdrp/p/17029343.html" target="_blank" rel="noopener noreferrer">LinkedBlockingQueue</a></td><td>基于链表结构实现的一个无界阻塞队列，指定容量为有界阻塞队列</td></tr><tr><td><a href="https://www.cnblogs.com/interdrp/p/17029347.html" target="_blank" rel="noopener noreferrer">PriorityBlockingQueue</a></td><td>支持按优先级排序的无界阻塞队列</td></tr><tr><td><a href="https://www.cnblogs.com/interdrp/p/17029348.html" target="_blank" rel="noopener noreferrer">DelayQueue</a></td><td>基于优先级队列（PriorityBlockingQueue）实现的无界阻塞队列</td></tr><tr><td><a href="https://www.cnblogs.com/interdrp/p/17029349.html" target="_blank" rel="noopener noreferrer">SynchronousQueue</a></td><td>不存储元素的阻塞队列</td></tr><tr><td>LinkedTransferQueue</td><td>基于链表结构实现的一个无界阻塞队列</td></tr><tr><td><a href="https://www.cnblogs.com/interdrp/p/17029344.html" target="_blank" rel="noopener noreferrer">LinkedBlockingDeque</a></td><td>基于链表结构实现的一个无界双端阻塞队列，指定容量为有界阻塞队列</td></tr></tbody></table><h2 id="问题" tabindex="-1"><a class="header-anchor" href="#问题"><span>问题</span></a></h2><h3 id="重启" tabindex="-1"><a class="header-anchor" href="#重启"><span>重启</span></a></h3><p>如果线程池设置阻塞队列，队列长度一万，任务多、队列满，线程池一直在工作，如果重启应用，可能会出现以下后果：</p><ol><li><p>任务丢失：如果线程池中存在未处理的任务，重启应用可能会导致这些任务丢失，从而影响应用的正常运行。</p></li><li><p>线程池资源占用过高：如果线程池一直在工作，可能会占用大量的 CPU 和内存资源，导致应用重启过程中其他模块的性能下降。</p></li><li><p>应用启动时间过长：如果线程池中存在大量的任务，重启应用可能会导致应用启动时间过长，从而影响用户体验。</p></li></ol><p>为了避免以上问题，可以采取以下措施：</p><ol><li><p>提前关闭线程池：在应用重启前，可以提前关闭线程池，避免任务丢失和线程池资源占用过高的问题。</p></li><li><p>等待任务处理完成：在应用重启前，可以等待线程池中的任务处理完成，避免任务丢失的问题。</p></li><li><p>调整线程池参数：可以根据实际情况调整线程池的参数，例如增加线程池的大小、减小队列的长度等，从而避免线程池资源占用过高和任务积压的问题。</p></li><li><p>限流：可以通过限制每个请求的处理时间和并发数，避免请求的积压和堆积，从而保证应用重启过程中的稳定性。</p></li></ol><p>总的来说，线程池设置阻塞队列，队列长度一万，任务多、队列满，线程池一直在工作，如果重启应用，可能会出现一些问题，需要根据实际情况采取相应的措施进行解决。</p><h2 id="使用进阶" tabindex="-1"><a class="header-anchor" href="#使用进阶"><span>使用进阶</span></a></h2><h3 id="线程池的创建" tabindex="-1"><a class="header-anchor" href="#线程池的创建"><span>线程池的创建</span></a></h3><p>需要手动通过 ThreadPoolExecutor 创建，使用者要非常明确业务场景并定制线程池，避免误用可能导致的问题。</p><p>以下是阿里巴巴 Java 开发手册中的描述：</p><p><img src="https://cdn.jsdelivr.net/gh/davidliuk/images@master/blog/1661796d7ccf38c17bbd4547a0ff8691.png" alt="img" loading="lazy"></p><p>ThreadFactory：推荐使用 guava 中的 ThreadFactoryBuilder 创建：</p><div class="language-scss line-numbers-mode" data-highlighter="shiki" data-ext="scss" data-title="scss" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">new ThreadFactoryBuilder().setNameFormat(&quot;name-%d&quot;).build();</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="阻塞队列在线程池中的使用" tabindex="-1"><a class="header-anchor" href="#阻塞队列在线程池中的使用"><span>阻塞队列在线程池中的使用</span></a></h3><p>很多同学一看到阻塞队列就自然的认为出入队列都是阻塞的，使用的阻塞队列也就没必要关心拒绝策略了，其实不然，阻塞队列在任务提交和任务获取阶段使用了不同的策略。</p><ul><li><p>任务提交阶段：调用的阻塞队列的 offer 方法，这个方法是<strong>非阻塞</strong>的，如果插入队列失败会直接返回 false，并触发拒绝策略；</p></li><li><p>获取任务阶段：使用的是 take 方法，此方法时阻塞的；</p></li></ul><h3 id="保证提交阶段任务不丢失" tabindex="-1"><a class="header-anchor" href="#保证提交阶段任务不丢失"><span>保证提交阶段任务不丢失</span></a></h3><p><strong>CallerRunsPolicy 拒绝策略</strong></p><p>ThreadPoolExecutor.CallerRunsPolicy：由提交任务的线程处理</p><p>这种是最简单的策略，但需要注意的是如果任务耗时较长，会阻塞提交任务的线程，可能会成为系统瓶颈。</p><p><strong>自定义拒绝策略</strong></p><p>既然 Java 线程默认使用的是 offer 提交任务，那我们可以自定义拒绝策略在任务提交失败时改为 put 阻塞提交。</p><p>缺点也是会阻塞提交线程，不过相比 CallerRunsPolicy 策略更能发挥多线程的优势。</p><div class="language-coffeescript line-numbers-mode" data-highlighter="shiki" data-ext="coffeescript" data-title="coffeescript" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">RejectedExecutionHandler</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> executionHandler</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> (</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">r</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;"> executor</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">) </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">-&gt;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    try</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">        executor</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">getQueue</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">().</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">put</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">(r);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">    } </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">catch</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> (</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">InterruptedException</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> e) {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">        Thread</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">currentThread</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">().</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">interrupt</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">();</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        throw</span><span style="--shiki-light:#383A42;--shiki-dark:#C678DD;"> new</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> RejectedExecutionException</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;Producer thread interrupted&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> e);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">};</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>配合 MQ 保证任务不丢失</strong></p><p>使用默认的 ThreadPoolExecutor.AbortPolicy 策略，如果抛出 RejectedExecutionException 异常则返回给 MQ 消费失败，MQ 会保证自动重试。</p><h3 id="保证未执行完成的任务不丢失" tabindex="-1"><a class="header-anchor" href="#保证未执行完成的任务不丢失"><span>保证未执行完成的任务不丢失</span></a></h3><p>当服务停止的时候，线程池中队列和活跃线程中未执行完成的任务可能会造成数据丢失，首先说下结论：无论采取任何策略，在 Java 层都不能 100%保证不丢，比如机器突然断电的情况。我们还是可以采取一定的措施尽量避免任务丢失。</p><h4 id="线程池关闭" tabindex="-1"><a class="header-anchor" href="#线程池关闭"><span>线程池关闭</span></a></h4><p>线程池关闭有两个方法：</p><ul><li><code>shutdown()</code>：线程池拒接收新提交的任务，同时等待线程池里的任务执行完毕后关闭线程池。</li><li><code>shutdownNow()</code>：线程池拒绝接收新提交的任务，同时立马关闭线程池，线程池里的任务不再执行，并抛出 InterruptedException 异常。</li></ul><h4 id="注册关闭钩子" tabindex="-1"><a class="header-anchor" href="#注册关闭钩子"><span>注册关闭钩子</span></a></h4><p>使用以下方法注册 JVM 进程关闭钩子，在钩子方法中执行线程池关闭、未处理完成的任务持久化保存等。</p><div class="language-scss line-numbers-mode" data-highlighter="shiki" data-ext="scss" data-title="scss" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">Runtime.getRuntime().addShutdownHook()</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><blockquote><p>钩子方法在使用 kill -9 杀死进程时不会执行，一般的杀进程的方式是先执行 kill，等待一段时间，如果进程还没杀死，再执行 kill -9。</p></blockquote><p>要保证队列中的任务不丢失，需要将消费队列中的数据，发送到外部 MQ 中；</p><p>保证未执行完成的任务不丢失，需要在抛出 InterruptedException 异常后，将任务参数保证到 MQ 中；</p><p>注意：</p><ol><li>尽量不要把未完成的任务保存到本地磁盘，尤其是在经常扩缩容的弹性集群里；</li><li>捕获 InterruptedException 异常后，不要做重试等耗时操作；</li><li>需要监控任务都发送到 MQ 中的时间，以便调整 kill -9 强制执行前的等待时间。</li></ol><h4 id="使用-mq-保证任务必须执行完成" tabindex="-1"><a class="header-anchor" href="#使用-mq-保证任务必须执行完成"><span>使用 MQ 保证任务必须执行完成</span></a></h4><p>通过上面介绍的两种方式，可以处理大部分正常停止服务丢数据的任务。不过对于极端情况下，比如断电、断网等，需要严格保证任务不丢失的场景还是不能满足业务需要，这种情况下就需要依赖 MQ。</p><p>方案是：使用线程池的 submit 方法提交任务，通过 future 获取到任务执行完成再返回给 MQ 消费完成。在 MQ 中如何保证数据不丢失是另外一个复杂的话题了，这里不再深入探讨。</p><p>注意：如果采用这种方案，需要保证处理任务的<strong>幂等性</strong>，在操作步骤比较多的时候，复杂性也会很高。</p><h3 id="异常处理" tabindex="-1"><a class="header-anchor" href="#异常处理"><span>异常处理</span></a></h3><p>异常感知的方式</p><ul><li><code>execute()</code>：抛异常会被提交任务线程感知；</li><li><code>submit()</code>：抛异常不会被提交任务线程感知，在 <code>Future.get()</code> 执行时被感知；</li></ul><h4 id="统一处理方案-1-异步任务里统一-catch" tabindex="-1"><a class="header-anchor" href="#统一处理方案-1-异步任务里统一-catch"><span>统一处理方案 1：异步任务里统一 catch</span></a></h4><p>在线程池的执行逻辑最外层，包装 try、catch，处理所有异常。</p><p>缺点是：</p><ol><li>所有的不同任务都要 try catch，增加了代码量。</li><li>不存在 checked exception 的地方也需要都 try catch 起来，代码丑陋。</li></ol><h4 id="统一处理方案-2-覆写统一异常处理方法" tabindex="-1"><a class="header-anchor" href="#统一处理方案-2-覆写统一异常处理方法"><span>统一处理方案 2：覆写统一异常处理方法</span></a></h4><p>此方案有两种常用实现：</p><ol><li>自定义线程池，继承 ThreadPoolExecutor 并覆写其 afterExecute 方法；</li><li>创建线程池时自定义 ThreadFactory，在实现里手动创建线程池，并调用 Thread.setUncaughtExceptionHandler 注册统一异常处理器。</li></ol><h4 id="统一处理方案-3-future" tabindex="-1"><a class="header-anchor" href="#统一处理方案-3-future"><span>统一处理方案 3：Future</span></a></h4><p>任务提交都使用 submit，并在 Future.get() 时捕获所有异常。</p>`,119)]))}const p=s(n,[["render",t],["__file","pool.html.vue"]]),k=JSON.parse(`{"path":"/se/lang/java/JUC/thread/pool.html","title":"线程池","lang":"en-US","frontmatter":{"description":"线程池 Java 线程池进阶服务重启线程池如何保证不丢失任务一头狒狒的博客-CSDN 博客 好处 池化技术：线程池、数据库连接池、Http 连接池等等都是对这个思想的应用。池化技术的思想主要是为了减少每次获取资源的消耗，提高对资源的利用率。 线程池提供了一种限制和管理资源（包括执行一个任务）的方式。 每个线程池还维护一些基本统计信息，例如已完成任务的数...","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/se/lang/java/JUC/thread/pool.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"线程池"}],["meta",{"property":"og:description","content":"线程池 Java 线程池进阶服务重启线程池如何保证不丢失任务一头狒狒的博客-CSDN 博客 好处 池化技术：线程池、数据库连接池、Http 连接池等等都是对这个思想的应用。池化技术的思想主要是为了减少每次获取资源的消耗，提高对资源的利用率。 线程池提供了一种限制和管理资源（包括执行一个任务）的方式。 每个线程池还维护一些基本统计信息，例如已完成任务的数..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/davidliuk/images@master/blog/04c18c80cc564de68c18a9e9bf73f965.png"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-06-27T01:21:47.000Z"}],["meta",{"property":"article:modified_time","content":"2024-06-27T01:21:47.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"线程池\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/davidliuk/images@master/blog/04c18c80cc564de68c18a9e9bf73f965.png\\",\\"https://cdn.jsdelivr.net/gh/davidliuk/images@master/blog/1661796d7ccf38c17bbd4547a0ff8691.png\\"],\\"dateModified\\":\\"2024-06-27T01:21:47.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[{"level":2,"title":"好处","slug":"好处","link":"#好处","children":[]},{"level":2,"title":"核心参数","slug":"核心参数","link":"#核心参数","children":[{"level":3,"title":"核心概念","slug":"核心概念","link":"#核心概念","children":[]},{"level":3,"title":"初始参数","slug":"初始参数","link":"#初始参数","children":[]}]},{"level":2,"title":"执行流程","slug":"执行流程","link":"#执行流程","children":[]},{"level":2,"title":"内置线程池","slug":"内置线程池","link":"#内置线程池","children":[{"level":3,"title":"FixedThreadPool","slug":"fixedthreadpool","link":"#fixedthreadpool","children":[]},{"level":3,"title":"SingleThreadExecutor","slug":"singlethreadexecutor","link":"#singlethreadexecutor","children":[]},{"level":3,"title":"CachedThreadPool","slug":"cachedthreadpool","link":"#cachedthreadpool","children":[]},{"level":3,"title":"ScheduledThreadPool","slug":"scheduledthreadpool","link":"#scheduledthreadpool","children":[]}]},{"level":2,"title":"阻塞队列","slug":"阻塞队列","link":"#阻塞队列","children":[{"level":3,"title":"什么是阻塞队列","slug":"什么是阻塞队列","link":"#什么是阻塞队列","children":[]},{"level":3,"title":"线程池常用的阻塞队列总结","slug":"线程池常用的阻塞队列总结","link":"#线程池常用的阻塞队列总结","children":[]},{"level":3,"title":"原理","slug":"原理","link":"#原理","children":[]},{"level":3,"title":"常见阻塞队列","slug":"常见阻塞队列","link":"#常见阻塞队列","children":[]}]},{"level":2,"title":"问题","slug":"问题","link":"#问题","children":[{"level":3,"title":"重启","slug":"重启","link":"#重启","children":[]}]},{"level":2,"title":"使用进阶","slug":"使用进阶","link":"#使用进阶","children":[{"level":3,"title":"线程池的创建","slug":"线程池的创建","link":"#线程池的创建","children":[]},{"level":3,"title":"阻塞队列在线程池中的使用","slug":"阻塞队列在线程池中的使用","link":"#阻塞队列在线程池中的使用","children":[]},{"level":3,"title":"保证提交阶段任务不丢失","slug":"保证提交阶段任务不丢失","link":"#保证提交阶段任务不丢失","children":[]},{"level":3,"title":"保证未执行完成的任务不丢失","slug":"保证未执行完成的任务不丢失","link":"#保证未执行完成的任务不丢失","children":[]},{"level":3,"title":"异常处理","slug":"异常处理","link":"#异常处理","children":[]}]}],"git":{"createdTime":1675410392000,"updatedTime":1719451307000,"contributors":[{"name":"刘大维","email":"davidliu@liudaweideMacBook-Pro.local","commits":2}]},"readingTime":{"minutes":16.71,"words":5012},"filePathRelative":"se/lang/java/JUC/thread/pool.md","localizedDate":"February 3, 2023","excerpt":"\\n<p><a href=\\"https://blog.csdn.net/ch98000/article/details/126727000\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Java 线程池进阶<em>服务重启线程池如何保证不丢失任务</em>一头狒狒的博客-CSDN 博客</a></p>\\n<h2>好处</h2>\\n<p>池化技术：线程池、数据库连接池、Http 连接池等等都是对这个思想的应用。池化技术的思想主要是为了减少每次获取资源的消耗，提高对资源的利用率。</p>\\n<p><strong>线程池</strong>提供了一种限制和管理资源（包括执行一个任务）的方式。 每个<strong>线程池</strong>还维护一些基本统计信息，例如已完成任务的数量。</p>","autoDesc":true}`);export{p as comp,k as data};
