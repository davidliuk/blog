import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,d as l,o}from"./app-DIqbhby7.js";const i={};function n(r,e){return o(),a("div",null,e[0]||(e[0]=[l('<h1 id="异步编程" tabindex="-1"><a class="header-anchor" href="#异步编程"><span>异步编程</span></a></h1><h2 id="future" tabindex="-1"><a class="header-anchor" href="#future"><span>Future</span></a></h2><h3 id="同步与异步的概念" tabindex="-1"><a class="header-anchor" href="#同步与异步的概念"><span>同步与异步的概念</span></a></h3><ul><li><strong>同步</strong>：发出一个调用之后，在没有得到结果之前， 该调用不可返回，一直等待。</li><li><strong>异步</strong>：调用在发出之后，不用等待返回结果，该调用直接返回。</li></ul><h3 id="阻塞与非阻塞的概念" tabindex="-1"><a class="header-anchor" href="#阻塞与非阻塞的概念"><span>阻塞与非阻塞的概念</span></a></h3><p>阻塞和非阻塞指：当前接口数据还未准备就绪时，线程是否被阻塞挂起。</p><p>阻塞挂起：就是当前线程还处于 CPU 时间片当中，调用了阻塞的方法，由于数据未准备就绪，则时间片还未到就让出 CPU。</p><p>所以阻塞和同步看起来都是等，但是本质上它们不一样，同步的时候可没有让出 CPU。</p><p>而非阻塞就是当前接口数据还未准备就绪时，线程不会被阻塞挂起，可以不断轮询请求接口，看看数据是否已经准备就绪。</p><p>至此我们可以得到一个结论：</p><ul><li>同步&amp;异步：当数据还未处理完成时，代码的逻辑处理方式不同。</li><li>阻塞&amp;非阻塞：当数据还未处理完成时(未就绪)，线程的状态。</li></ul><p>同步&amp;异步其实是处于框架这种高层次维度来看待的，而阻塞&amp;非阻塞往往针对底层的系统调用方面来抉择，也就是说两者是从不同维度来考虑的。</p><p>没有返回值的：runAsync</p><p>有返回值的：submitAsync</p><h3 id="future-方法" tabindex="-1"><a class="header-anchor" href="#future-方法"><span>Future 方法</span></a></h3><p><code>Future</code> 接口有 5 个方法：</p><ul><li><code>boolean cancel(boolean mayInterruptIfRunning)</code> ：尝试取消执行任务。</li><li><code>boolean isCancelled()</code> ：判断任务是否被取消。</li><li><code>boolean isDone()</code> ： 判断任务是否已经被执行完成。</li><li><code>get()</code> ：等待任务执行完成并获取运算结果。</li><li><code>get(long timeout, TimeUnit unit)</code> ：多了一个超时时间。</li></ul><h2 id="completablefuture" tabindex="-1"><a class="header-anchor" href="#completablefuture"><span>CompletableFuture</span></a></h2><p><code>Future</code> 在实际使用过程中存在一些局限性：</p><ul><li>不支持异步任务的编排组合</li><li>获取计算结果的 <code>get()</code> 方法为阻塞调用</li></ul><p>Java 8 引入<code>CompletableFuture</code> 类可以解决<code>Future</code> 的这些缺陷。<code>CompletableFuture</code> 除了提供了更为好用和强大的 <code>Future</code> 特性之外，还提供了函数式编程、异步任务编排组合（可将多个异步任务串联起来，组成一个完整的链式调用）等能力。</p><p>下面我们来简单看看 <code>CompletableFuture</code> 类的定义。</p><p><code>CompletionStage</code> 接口描述了一个异步计算的阶段。很多计算可以分成多个阶段或步骤，此时可以通过它将所有步骤组合起来，形成异步计算的流水线。</p><p><code>CompletionStage</code> 接口中的方法比较多，<code>CompletableFuture</code> 的函数式能力就是这个接口赋予的。从这个接口的方法参数你就可以发现其大量使用了 Java8 引入的函数式编程。</p><p><a href="https://juejin.cn/post/7296058491289157632?utm_source=gold_browser_extension#heading-5" target="_blank" rel="noopener noreferrer">教程</a></p>',25)]))}const p=t(i,[["render",n],["__file","future.html.vue"]]),d=JSON.parse(`{"path":"/se/lang/java/JUC/async/future.html","title":"异步编程","lang":"en-US","frontmatter":{"description":"异步编程 Future 同步与异步的概念 同步：发出一个调用之后，在没有得到结果之前， 该调用不可返回，一直等待。 异步：调用在发出之后，不用等待返回结果，该调用直接返回。 阻塞与非阻塞的概念 阻塞和非阻塞指：当前接口数据还未准备就绪时，线程是否被阻塞挂起。 阻塞挂起：就是当前线程还处于 CPU 时间片当中，调用了阻塞的方法，由于数据未准备就绪，则时间...","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/se/lang/java/JUC/async/future.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"异步编程"}],["meta",{"property":"og:description","content":"异步编程 Future 同步与异步的概念 同步：发出一个调用之后，在没有得到结果之前， 该调用不可返回，一直等待。 异步：调用在发出之后，不用等待返回结果，该调用直接返回。 阻塞与非阻塞的概念 阻塞和非阻塞指：当前接口数据还未准备就绪时，线程是否被阻塞挂起。 阻塞挂起：就是当前线程还处于 CPU 时间片当中，调用了阻塞的方法，由于数据未准备就绪，则时间..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-06-27T01:21:47.000Z"}],["meta",{"property":"article:modified_time","content":"2024-06-27T01:21:47.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"异步编程\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-06-27T01:21:47.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[{"level":2,"title":"Future","slug":"future","link":"#future","children":[{"level":3,"title":"同步与异步的概念","slug":"同步与异步的概念","link":"#同步与异步的概念","children":[]},{"level":3,"title":"阻塞与非阻塞的概念","slug":"阻塞与非阻塞的概念","link":"#阻塞与非阻塞的概念","children":[]},{"level":3,"title":"Future 方法","slug":"future-方法","link":"#future-方法","children":[]}]},{"level":2,"title":"CompletableFuture","slug":"completablefuture","link":"#completablefuture","children":[]}],"git":{"createdTime":1677504602000,"updatedTime":1719451307000,"contributors":[{"name":"刘大维","email":"davidliu@liudaweideMacBook-Pro.local","commits":4},{"name":"davidliuk","email":"l729641074@163.com","commits":2},{"name":"davidliu","email":"liudawei47@jd.com","commits":1},{"name":"liudawei47","email":"liudawei47@jd.com","commits":1}]},"readingTime":{"minutes":2.35,"words":704},"filePathRelative":"se/lang/java/JUC/async/future.md","localizedDate":"February 27, 2023","excerpt":"\\n<h2>Future</h2>\\n<h3>同步与异步的概念</h3>\\n<ul>\\n<li><strong>同步</strong>：发出一个调用之后，在没有得到结果之前， 该调用不可返回，一直等待。</li>\\n<li><strong>异步</strong>：调用在发出之后，不用等待返回结果，该调用直接返回。</li>\\n</ul>\\n<h3>阻塞与非阻塞的概念</h3>\\n<p>阻塞和非阻塞指：当前接口数据还未准备就绪时，线程是否被阻塞挂起。</p>\\n<p>阻塞挂起：就是当前线程还处于 CPU 时间片当中，调用了阻塞的方法，由于数据未准备就绪，则时间片还未到就让出 CPU。</p>\\n<p>所以阻塞和同步看起来都是等，但是本质上它们不一样，同步的时候可没有让出 CPU。</p>","autoDesc":true}`);export{p as comp,d as data};
