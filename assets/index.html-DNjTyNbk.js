import{_ as l}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,d as i,o as t}from"./app-CybQbXIt.js";const r={};function n(c,e){return t(),a("div",null,e[0]||(e[0]=[i('<h1 id="线程" tabindex="-1"><a class="header-anchor" href="#线程"><span>线程</span></a></h1><h2 id="线程的概念" tabindex="-1"><a class="header-anchor" href="#线程的概念"><span>线程的概念</span></a></h2><h3 id="线程与进程的比较" tabindex="-1"><a class="header-anchor" href="#线程与进程的比较"><span>线程与进程的比较</span></a></h3><p>线程与进程的比较如下：</p><ul><li>进程是资源（包括内存、打开的文件等）分配的单位，线程是 CPU 调度的单位；</li><li>进程拥有一个完整的资源平台，而线程只独享必不可少的资源，如寄存器和栈；</li><li>线程同样具有就绪、阻塞、执行三种基本状态，同样具有状态之间的转换关系；</li><li>线程能减少并发执行的时间和空间开销；</li></ul><p>对于，线程相比进程能减少开销，体现在：</p><ul><li>线程的创建时间比进程快，因为进程在创建的过程中，还需要资源管理信息，比如内存管理信息、文件管理信息，而线程在创建的过程中，不会涉及这些资源管理信息，而是共享它们；</li><li>线程的终止时间比进程快，因为线程释放的资源相比进程少很多；</li><li>同一个进程内的线程切换比进程切换快，因为线程具有相同的地址空间（虚拟内存共享），这意味着同一个进程的线程都具有同一个页表，那么在切换的时候不需要切换页表。而对于进程之间的切换，切换的时候要把页表给切换掉，而页表的切换过程开销是比较大的；</li><li>由于同一进程的各线程间共享内存和文件资源，那么在线程之间数据传递的时候，就不需要经过内核了，这就使得线程之间的数据交互效率更高了；</li></ul><p>所以，不管是时间效率，还是空间效率线程比进程都要高。</p><h3 id="线程上下文切换" tabindex="-1"><a class="header-anchor" href="#线程上下文切换"><span>线程上下文切换</span></a></h3><p>线程在执行过程中会有自己的运行条件和状态（也称上下文），比如上文所说到过的程序计数器，栈信息等。当出现如下情况的时候，线程会从占用 CPU 状态中退出。</p><ul><li>主动让出 CPU，比如调用了 <code>sleep()</code>, <code>wait()</code> 等。</li><li>时间片用完，因为操作系统要防止一个线程或者进程长时间占用 CPU 导致其他线程或者进程饿死。</li><li>调用了阻塞类型的系统中断，比如请求 IO，线程被阻塞。</li><li>被终止或结束运行</li></ul><p>这其中前三种都会发生线程切换，线程切换意味着需要保存当前线程的上下文，留待线程下次占用 CPU 的时候恢复现场。并加载下一个将要占用 CPU 的线程上下文。这就是所谓的 <strong>上下文切换</strong>。</p><p>上下文切换是现代操作系统的基本功能，因其每次需要保存信息恢复信息，这将会占用 CPU，内存等系统资源进行处理，也就意味着效率会有一定损耗，如果频繁切换就会造成整体效率低下。</p><h2 id="线程的创建" tabindex="-1"><a class="header-anchor" href="#线程的创建"><span>线程的创建</span></a></h2><p>Java 使用 Thread 类代表线程，所有的线程对象都必须是 Thread 类或其子类的实例。Java 可以用四种方式来创建线程，如下所示：</p><ol><li><p>继承 Thread 类创建线程</p></li><li><p>实现 Runnable 接口创建线程</p></li><li><p>使用 Callable 和 Future 创建线程</p></li><li><p>使用 Executor 框架线程池</p></li></ol><h3 id="继承-thread-类创建线程类" tabindex="-1"><a class="header-anchor" href="#继承-thread-类创建线程类"><span>继承 Thread 类创建线程类</span></a></h3><ol><li><p>定义 Thread 类的子类，并重写该类的 run 方法，该 run 方法的方法体就代表了线程要完成的任务。因此把 <code>run()</code> 方法称为执行体。</p></li><li><p>创建 Thread 子类的实例，即创建了线程对象。</p></li><li><p>调用线程对象的 <code>start()</code> 方法来启动该线程。</p></li></ol><h3 id="通过-runnable-接口创建线程类" tabindex="-1"><a class="header-anchor" href="#通过-runnable-接口创建线程类"><span>通过 Runnable 接口创建线程类</span></a></h3><ol><li><p>定义 runnable 接口的实现类，并重写该接口的 run()方法，该 <code>run()</code> 方法的方法体同样是该线程的线程执行体。</p></li><li><p>创建 Runnable 实现类的实例，并依此实例作为 Thread 的 target 来创建 Thread 对象，该 Thread 对象才是真正的线程对象。</p></li><li><p>调用线程对象的 <code>start()</code> 方法来启动该线程。</p></li></ol><h3 id="通过-callable-和-future-创建线程" tabindex="-1"><a class="header-anchor" href="#通过-callable-和-future-创建线程"><span>通过 Callable 和 Future 创建线程</span></a></h3><ol><li><p>创建 Callable 接口的实现类，并实现 call()方法，该 call()方法将作为线程执行体，并且有返回值。</p></li><li><p>创建 Callable 实现类的实例，使用 FutureTask 类来包装 Callable 对象，该 FutureTask 对象封装了该 Callable 对象的 call()方法的返回值。</p></li><li><p>使用 FutureTask 对象作为 Thread 对象的 target 创建并启动新线程。</p></li><li><p>调用 FutureTask 对象的 get() 方法来获得子线程执行结束后的返回值</p></li></ol><h3 id="实现-runnable-和-callable-接口的区别" tabindex="-1"><a class="header-anchor" href="#实现-runnable-和-callable-接口的区别"><span>实现 Runnable 和 Callable 接口的区别</span></a></h3><p>实现 Runnable 和实现 Callable 接口的方式基本相同，不过是后者执行 call()方法有返回值，后者线程执行体 run()方法无返回值，因此可以把这两种方式归为一种。这种方式与继承 Thread 类的方法之间的差别如下：</p><ol><li><p>线程只是实现 Runnable 或实现 Callable 接口，还可以继承其他类。</p></li><li><p>这种方式下，多个线程可以共享一个 target 对象，非常适合多线程处理同一份资源的情形。</p></li><li><p>但是编程稍微复杂，如果需要访问当前线程，必须调用 Thread.currentThread()方法。</p></li><li><p>继承 Thread 类的线程类不能再继承其他父类（Java 单继承决定）。</p></li><li><p>前三种的线程如果创建关闭频繁会消耗系统资源影响性能，而使用线程池可以不用线程的时候放回线程池，用的时候再从线程池取，项目开发中主要使用线程池。</p></li></ol><h3 id="通过-executor-框架" tabindex="-1"><a class="header-anchor" href="#通过-executor-框架"><span>通过 Executor 框架</span></a></h3><p>1.5 后引入的 Executor 框架的最大优点是把任务的提交和执行解耦。要执行任务的人只需把 Task 描述清楚，然后提交即可。这个 Task 是怎么被执行的，被谁执行的，什么时候执行的，提交的人就不用关心了。具体点讲，提交一个 Callable 对象给 ExecutorService（如线程池 ThreadPoolExecutor），将得到一个 Future 对象，调用 Future 对象的 get 方法等待执行结果就好了。</p><p>Executor 框架的内部使用了线程池机制，它在 java.util.cocurrent 包下，通过该框架来控制线程的启动、执行和关闭，可以简化并发编程的操作。因此，在 Java 5 之后，通过 Executor 来启动线程比使用 Thread 的 start 方法更好，除了更易管理，效率更好（节约开销）外，还有关键的一点：有助于避免 this 逃逸问题——如果我们在构造器中启动一个线程，因为另一个任务可能会在构造器结束之前开始执行，此时可能会访问到初始化了一半的对象用 Executor 在构造器中。</p><p>Executor 框架包括：</p><ul><li>ThreadPoolExecutor，</li><li>Executor，Executors，ExecutorService，</li><li>CompletionService，Future，Callable 等。</li></ul><p>Executor 接口中之定义了一个方法 execute（Runnable command），该方法接收一个 Runable 实例，它用来执行一个任务，任务即一个实现了 Runnable 接口的类。ExecutorService 接口继承自 Executor 接口，它提供了更丰富的实现多线程的方法，比如，ExecutorService 提供了关闭自己的方法，以及可为跟踪一个或多个异步任务执行状况而生成 Future 的方法。 可以调用 ExecutorService 的 <code>shutdown()</code> 方法来平滑地关闭 ExecutorService，调用该方法后，将导致 ExecutorService 停止接受任何新的任务且等待已经提交的任务执行完成(已经提交的任务会分两类：一类是已经在执行的，另一类是还没有开始执行的)，当所有已经提交的任务执行完毕后将会关闭 ExecutorService。因此我们一般用该接口来实现和管理多线程。</p><p>ExecutorService 的生命周期包括三种状态：运行、关闭、终止。</p><p>创建后便进入运行状态，当调用了 <code>shutdown()</code> 方法时，便进入关闭状态，此时意味着 ExecutorService 不再接受新的任务，但它还在执行已经提交了的任务，当素有已经提交了的任务执行完后，便到达终止状态。如果不调用 <code>shutdown()</code> 方法，ExecutorService 会一直处在运行状态，不断接收新的任务，执行新的任务，服务器端一般不需要关闭它，保持一直运行即可。</p>',33)]))}const p=l(r,[["render",n],["__file","index.html.vue"]]),d=JSON.parse(`{"path":"/se/lang/java/JUC/thread/","title":"线程","lang":"en-US","frontmatter":{"description":"线程 线程的概念 线程与进程的比较 线程与进程的比较如下： 进程是资源（包括内存、打开的文件等）分配的单位，线程是 CPU 调度的单位； 进程拥有一个完整的资源平台，而线程只独享必不可少的资源，如寄存器和栈； 线程同样具有就绪、阻塞、执行三种基本状态，同样具有状态之间的转换关系； 线程能减少并发执行的时间和空间开销； 对于，线程相比进程能减少开销，体现...","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/se/lang/java/JUC/thread/"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"线程"}],["meta",{"property":"og:description","content":"线程 线程的概念 线程与进程的比较 线程与进程的比较如下： 进程是资源（包括内存、打开的文件等）分配的单位，线程是 CPU 调度的单位； 进程拥有一个完整的资源平台，而线程只独享必不可少的资源，如寄存器和栈； 线程同样具有就绪、阻塞、执行三种基本状态，同样具有状态之间的转换关系； 线程能减少并发执行的时间和空间开销； 对于，线程相比进程能减少开销，体现..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-06-27T01:21:47.000Z"}],["meta",{"property":"article:modified_time","content":"2024-06-27T01:21:47.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"线程\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-06-27T01:21:47.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[{"level":2,"title":"线程的概念","slug":"线程的概念","link":"#线程的概念","children":[{"level":3,"title":"线程与进程的比较","slug":"线程与进程的比较","link":"#线程与进程的比较","children":[]},{"level":3,"title":"线程上下文切换","slug":"线程上下文切换","link":"#线程上下文切换","children":[]}]},{"level":2,"title":"线程的创建","slug":"线程的创建","link":"#线程的创建","children":[{"level":3,"title":"继承 Thread 类创建线程类","slug":"继承-thread-类创建线程类","link":"#继承-thread-类创建线程类","children":[]},{"level":3,"title":"通过 Runnable 接口创建线程类","slug":"通过-runnable-接口创建线程类","link":"#通过-runnable-接口创建线程类","children":[]},{"level":3,"title":"通过 Callable 和 Future 创建线程","slug":"通过-callable-和-future-创建线程","link":"#通过-callable-和-future-创建线程","children":[]},{"level":3,"title":"实现 Runnable 和 Callable 接口的区别","slug":"实现-runnable-和-callable-接口的区别","link":"#实现-runnable-和-callable-接口的区别","children":[]},{"level":3,"title":"通过 Executor 框架","slug":"通过-executor-框架","link":"#通过-executor-框架","children":[]}]}],"git":{"createdTime":1680090419000,"updatedTime":1719451307000,"contributors":[{"name":"刘大维","email":"davidliu@liudaweideMacBook-Pro.local","commits":2}]},"readingTime":{"minutes":7.04,"words":2112},"filePathRelative":"se/lang/java/JUC/thread/README.md","localizedDate":"March 29, 2023","excerpt":"\\n<h2>线程的概念</h2>\\n<h3>线程与进程的比较</h3>\\n<p>线程与进程的比较如下：</p>\\n<ul>\\n<li>进程是资源（包括内存、打开的文件等）分配的单位，线程是 CPU 调度的单位；</li>\\n<li>进程拥有一个完整的资源平台，而线程只独享必不可少的资源，如寄存器和栈；</li>\\n<li>线程同样具有就绪、阻塞、执行三种基本状态，同样具有状态之间的转换关系；</li>\\n<li>线程能减少并发执行的时间和空间开销；</li>\\n</ul>\\n<p>对于，线程相比进程能减少开销，体现在：</p>\\n<ul>\\n<li>线程的创建时间比进程快，因为进程在创建的过程中，还需要资源管理信息，比如内存管理信息、文件管理信息，而线程在创建的过程中，不会涉及这些资源管理信息，而是共享它们；</li>\\n<li>线程的终止时间比进程快，因为线程释放的资源相比进程少很多；</li>\\n<li>同一个进程内的线程切换比进程切换快，因为线程具有相同的地址空间（虚拟内存共享），这意味着同一个进程的线程都具有同一个页表，那么在切换的时候不需要切换页表。而对于进程之间的切换，切换的时候要把页表给切换掉，而页表的切换过程开销是比较大的；</li>\\n<li>由于同一进程的各线程间共享内存和文件资源，那么在线程之间数据传递的时候，就不需要经过内核了，这就使得线程之间的数据交互效率更高了；</li>\\n</ul>","autoDesc":true}`);export{p as comp,d as data};
