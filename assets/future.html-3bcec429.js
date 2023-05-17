import{_ as e,V as a,W as o,Z as t}from"./framework-e5d7a6b2.js";const d={},r=t('<h1 id="异步编程" tabindex="-1"><a class="header-anchor" href="#异步编程" aria-hidden="true">#</a> 异步编程</h1><h2 id="future" tabindex="-1"><a class="header-anchor" href="#future" aria-hidden="true">#</a> Future</h2><h3 id="同步与异步的概念" tabindex="-1"><a class="header-anchor" href="#同步与异步的概念" aria-hidden="true">#</a> 同步与异步的概念</h3><ul><li><strong>同步</strong> ： 发出一个调用之后，在没有得到结果之前， 该调用就不可以返回，一直等待。</li><li><strong>异步</strong> ：调用在发出之后，不用等待返回结果，该调用直接返回。</li></ul><h3 id="阻塞与非阻塞的概念" tabindex="-1"><a class="header-anchor" href="#阻塞与非阻塞的概念" aria-hidden="true">#</a> 阻塞与非阻塞的概念</h3><p>阻塞和非阻塞指的是：当前接口数据还未准备就绪时，线程是否被阻塞挂起。</p><p>何为阻塞挂起？就是当前线程还处于 CPU 时间片当中，调用了阻塞的方法，由于数据未准备就绪，则时间片还未到就让出 CPU。</p><p>所以阻塞和同步看起来都是等，但是本质上它们不一样，同步的时候可没有让出 CPU。</p><p>而非阻塞就是当前接口数据还未准备就绪时，线程不会被阻塞挂起，可以不断轮询请求接口，看看数据是否已经准备就绪。</p><p>至此我们可以得到一个结论：</p><ul><li>同步&amp;异步指：当数据还未处理完成时，代码的逻辑处理方式不同。</li><li>阻塞&amp;非阻塞指：当数据还未处理完成时(未就绪)，线程的状态。</li></ul><p>所以同步&amp;异步其实是处于框架这种高层次维度来看待的，而阻塞&amp;非阻塞往往针对底层的系统调用方面来抉择，也就是说两者是从不同维度来考虑的。</p><p>没有返回值的：runAsync</p><p>有返回值的：submitAsync</p><h3 id="future-的方法" tabindex="-1"><a class="header-anchor" href="#future-的方法" aria-hidden="true">#</a> Future 的方法</h3><p><code>Future</code> 接口有 5 个方法：</p><ul><li><code>boolean cancel(boolean mayInterruptIfRunning)</code> ：尝试取消执行任务。</li><li><code>boolean isCancelled()</code> ：判断任务是否被取消。</li><li><code>boolean isDone()</code> ： 判断任务是否已经被执行完成。</li><li><code>get()</code> ：等待任务执行完成并获取运算结果。</li><li><code>get(long timeout, TimeUnit unit)</code> ：多了一个超时时间。</li></ul><h2 id="completablefuture" tabindex="-1"><a class="header-anchor" href="#completablefuture" aria-hidden="true">#</a> CompletableFuture</h2><p><code>Future</code> 在实际使用过程中存在一些局限性比如不支持异步任务的编排组合、获取计算结果的 <code>get()</code> 方法为阻塞调用。</p><p>Java 8 才被引入<code>CompletableFuture</code> 类可以解决<code>Future</code> 的这些缺陷。<code>CompletableFuture</code> 除了提供了更为好用和强大的 <code>Future</code> 特性之外，还提供了函数式编程、异步任务编排组合（可以将多个异步任务串联起来，组成一个完整的链式调用）等能力。</p><p>下面我们来简单看看 <code>CompletableFuture</code> 类的定义。</p><p><code>CompletionStage</code> 接口描述了一个异步计算的阶段。很多计算可以分成多个阶段或步骤，此时可以通过它将所有步骤组合起来，形成异步计算的流水线。</p><p><code>CompletionStage</code> 接口中的方法比较多，<code>CompletableFuture</code> 的函数式能力就是这个接口赋予的。从这个接口的方法参数你就可以发现其大量使用了 Java8 引入的函数式编程。</p>',23),c=[r];function l(u,i){return a(),o("div",null,c)}const p=e(d,[["render",l],["__file","future.html.vue"]]);export{p as default};
