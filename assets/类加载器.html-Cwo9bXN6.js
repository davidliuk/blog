import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as i,d as l,o as e}from"./app-CrF8c6p-.js";const n={};function t(p,s){return e(),i("div",null,s[0]||(s[0]=[l(`<h1 id="类加载器" tabindex="-1"><a class="header-anchor" href="#类加载器"><span>类加载器</span></a></h1><p>从上面的介绍可以看出:</p><ul><li>类加载器是一个负责加载类的对象，用于实现类加载过程中加载这步。</li><li>每个 Java 类都有一个引用指向加载它的 <code>ClassLoader</code>。</li><li>数组类不是通过 <code>ClassLoader</code> 创建的（数组类没有对应的二进制字节流），是由 JVM 直接生成的。</li></ul><p>类加载器虽然只用于实现类的加载动作，但它在 Java 程序中起到的作用却远超类加载阶段。对于任意一个类，都必须由加载它的类加载器和这个类本身一起共同确立其在 Java 虚拟机中的唯一性，每一个类加载器，都拥有一个独立的类名称空间。这句话可以表达得更通俗一些：比较两个类是否“相等”，只有在这两个类是由同一个类加载器加载的前提下才有意义，否则，即使这两个类来源于同一个 Class 文件，被同一个 Java 虚拟机加载，只要加载它们的类加载器不同，那这两个类就必定不相等。</p><p>这里所指的“相等”，包括代表类的 Class 对象的 equals()方法、isAssignableFrom()方法、isInstance()方法的返回结果，也包括了使用 instanceof 关键字做对象所属关系判定等各种情况。如果没有注意到类加载器的影响，在某些情况下可能会产生具有迷惑性的结果，代码清单 7-8 中演示了不同的类加载器对 instanceof 关键字运算的结果的影响。</p><h3 id="类加载器加载规则" tabindex="-1"><a class="header-anchor" href="#类加载器加载规则"><span>类加载器加载规则</span></a></h3><p>JVM 启动的时候，并不会一次性加载所有的类，而是根据需要去动态加载。也就是说，大部分类在具体用到的时候才会去加载，这样对内存更加友好。</p><p>对于已经加载的类会被放在 <code>ClassLoader</code> 中。在类加载的时候，系统会首先判断当前类是否被加载过。已经被加载的类会直接返回，否则才会尝试加载。也就是说，对于一个类加载器来说，相同二进制名称的类只会被加载一次。</p><h2 id="双亲委派模型" tabindex="-1"><a class="header-anchor" href="#双亲委派模型"><span>双亲委派模型</span></a></h2><p>Parents Delegation Model</p><p>站在 Java 虚拟机的角度来看，只存在两种不同的类加载器：</p><ul><li>启动类加载器(Bootstrap ClassLoader)，这个类加载器使用 C++语言实现，是虚拟机自身的一部分；</li><li>其他所有的类加载器，这些类加载器都由 Java 语言实现，独立存在于虚拟机外部，并且全都继承自抽象类 java.lang.ClassLoader。</li></ul><p>站在 Java 开发人员的角度来看，类加载器就应当划分得更细致一些。自 JDK 1.2 以来，Java 一直保持着三层类加载器、双亲委派的类加载架构，尽管这套架构在 Java 模块化系统出现后有了一些调整变动，但依然未改变其主体结构，我们将在 7.5 节中专门讨论模块化系统下的类加载器。</p><h3 id="三层类加载器" tabindex="-1"><a class="header-anchor" href="#三层类加载器"><span>三层类加载器</span></a></h3><ul><li>启动类加载器(Bootstrap Class Loader):前面已经介绍过，这个类加载器负责加载存放在 <code>&lt;JAVA_HOME&gt;\\lib</code>目录，或者被-Xbootclasspath 参数所指定的路径中存放的，而且是 Java 虚拟机能够 识别的(按照文件名识别，如 rt .jar、t ools.jar，名字不符合的类库即使放在 lib 目录中也不会被加载)类 库加载到虚拟机的内存中。</li><li>扩展类加载器(Extension Class Loader):这个类加载器是在类 sun.misc.Launcher$ExtClassLoader 中以 Java 代码的形式实现的。它负责加载<code>&lt;JAVA_HOME&gt;\\lib\\ext</code>目录中，或者被 java.ext.dirs 系统变量所指定的路径中所有的类库。</li><li>应用程序类加载器(Application Class Loader):这个类加载器由<br> sun.misc.Launcher$AppClassLoader 来实现。由于应用程序类加载器是 ClassLoader 类中的 getSystem-ClassLoader()方法的返回值，所以有些场合中也称它为“系统类加载器”。</li></ul><h3 id="双亲委派模型-1" tabindex="-1"><a class="header-anchor" href="#双亲委派模型-1"><span>双亲委派模型</span></a></h3><p>各种类加载器之间的层次关系被称为类加载器的“双亲委派模型(Parents Delegation Model)”。双亲委派模型要求除了顶层的启动类加载器外，其余的类加载器都应有自己的父类加载器。</p><p>不过这里类加载器之间的父子关系一般不是以继承(Inheritance)的关系来实现的，而是通常使用组合(Composition)关系来复用父加载器的代码。</p><p>读者可能注意到前面描述这种类加载器协作关系时，笔者专门用双引号强调这是“通常”的协作关系。类加载器的双亲委派模型在 JDK 1.2 时期被引入，并被广泛应用于此后几乎所有的 Java 程序中，但它不是具有强制性约束力的模型，而是 Java 推荐给开发者的一种类加载器实现的最佳实践。</p><p>双亲委派模型的工作过程是：如果一个类加载器收到了类加载的请求，它首先不会自己去尝试加载这个类，而是把这个<strong>请求委派给父类加载器</strong>去完成，每一个层次的类加载器都是如此，因此所有的加载请求最终都应该传送到最顶层的启动类加载器中，只有当父加载器反馈自己无法完成这个加载请求(它的搜索范围中没有找到所需的类)时，子加载器才会尝试自己去完成加载。</p><p>双亲委派模型对于保证 Java 程序的稳定运作极为重要，但它的实现却异常简单，只有短短十余行，在 java.lang.ClassLoader 的 loadClass()方法中。</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">protected</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> synchronized</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> Class</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&lt;</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">?</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&gt;</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> loadClass</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">String</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> boolean</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> resolve) throws ClassNotFoundException {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    // 首先，检查请求的类是否已经被加载过了</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">    Class</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> c </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> findLoadedClass</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">(name)</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    if</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> (c </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">==</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> null</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">) {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        try</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        if</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> (parent </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">!=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> null</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">) {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">            c </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> parent</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">loadClass</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(name, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">false</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">        } </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">else</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">            c </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> findBootstrapClassOrNull</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">(name)</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">        } </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">catch</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> (</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">ClassNotFoundException</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;"> e</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">) {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">            // 如果父类加载器抛出ClassNotFoundException</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">            // 说明父类加载器无法完成加载请求</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">        }</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        if</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> (c </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">==</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> null</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">) {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">            // 在父类加载器无法加载时</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">            // 再调用本身的findClass方法来进行类加载 </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">            c </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> findClass</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">(name)</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">        }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">    }</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    if</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> (resolve) {</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">        resolveClass</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">(c)</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">    }</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    return</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> c</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这段代码的逻辑清晰易懂：</p><ol><li>先检查请求加载的类型是否已经被加载过，</li><li>若没有则调用父加载器的 loadClass()方法，</li><li>若父加载器为空则默认使用启动类加载器作为父加载器。</li><li>假如父类加载器加载失败， 抛出 ClassNotFoundException 异常</li><li>调用自己的 findClass()方法尝试进行加载。</li></ol><h3 id="好处" tabindex="-1"><a class="header-anchor" href="#好处"><span>好处</span></a></h3><p>双亲委派模型保证了 Java 程序的稳定运行，可以<strong>避免类的重复加载</strong>（JVM 区分不同类的方式不仅仅根据类名，相同的类文件被不同的类加载器加载产生的是两个不同的类），也<strong>保证了 Java 的核心 API 不被篡改</strong>。</p><p>如果没有使用双亲委派模型，而是每个类加载器加载自己的话就会出现一些问题，比如我们编写一个称为 <code>java.lang.Object</code> 类的话，那么程序运行的时候，系统就会出现两个不同的 <code>Object</code> 类。双亲委派模型可以保证加载的是 JRE 里的那个 <code>Object</code> 类，而不是你写的 <code>Object</code> 类。这是因为 <code>AppClassLoader</code> 在加载你的 <code>Object</code> 类时，会委托给 <code>ExtClassLoader</code> 去加载，而 <code>ExtClassLoader</code> 又会委托给 <code>BootstrapClassLoader</code>，<code>BootstrapClassLoader</code> 发现自己已经加载过了 <code>Object</code> 类，会直接返回，不会去加载你写的 <code>Object</code> 类。</p><p><strong>JVM 双亲委派模型是一种类加载机制，它的主要作用是</strong></p><ul><li><strong>保证 Java 核心库的安全性和稳定性</strong></li><li><strong>避免重复加载类</strong></li></ul><p>在 JVM 中，类加载器按照一定的层次关系进行组织，每个类加载器都有一个父类加载器，最终的父类加载器是 Bootstrap ClassLoader，它是由 JVM 实现的，用于加载 Java 核心库。当一个类加载器需要加载一个类时，它首先会委派给它的父类加载器去加载，如果父类加载器无法加载该类，则该类加载器才会尝试自己去加载。这样的委派过程一直持续到 Bootstrap ClassLoader，如果 Bootstrap ClassLoader 无法加载该类，则会抛出 ClassNotFoundException 异常。</p><p>这种双亲委派模型的好处在于：</p><ol><li><p>避免重复加载类：如果一个类已经被父类加载器加载了，那么子类加载器就不需要再次加载该类，从而避免了重复加载类的问题。</p></li><li><p>保证 Java 核心库的安全性和稳定性：由于 Java 核心库是由 Bootstrap ClassLoader 加载的，因此它的安全性和稳定性得到了保证。如果允许应用程序加载 Java 核心库，那么就可能会出现不同版本的 Java 核心库之间的冲突，从而导致应用程序出现不可预测的错误。</p></li><li><p>（间接支持类的升级：如果一个类已经被父类加载器加载了，那么子类加载器就无法重新加载该类。这样就可以支持类的升级，即在不重启 JVM 的情况下，使用新版本的类替换旧版本的类。）</p></li></ol><p>总之，JVM 双亲委派模型是一种非常重要的类加载机制，它保证了 Java 核心库的安全性和稳定性，同时避免了重复加载类的问题，支持类的升级，是 Java 语言的一个重要特性。</p><h4 id="热部署" tabindex="-1"><a class="header-anchor" href="#热部署"><span>热部署</span></a></h4><p>JVM 的双亲委派模型并不直接支持类的升级，因为在该模型中，类加载器会首先委派给其父类加载器来加载类，如果父类加载器无法加载，则会由子类加载器来加载。因此，如果一个类已经被父类加载器加载过了，那么子类加载器就无法再次加载该类，也就无法实现类的升级。</p><p>不过，JVM 提供了一种类加载器的机制，即热部署（HotSwap），可以在运行时动态地替换已经加载的类。热部署机制的实现依赖于 JVM 的调试接口（JVMTI），通过该接口可以在运行时修改已经加载的类的字节码，从而实现类的升级。</p><p>具体来说，热部署机制的实现步骤如下：</p><ol><li><p>使用 JVMTI 接口获取需要替换的类的 Class 对象。</p></li><li><p>使用 JVMTI 接口获取需要替换的类的字节码。</p></li><li><p>修改字节码，生成新的字节码。</p></li><li><p>使用 JVMTI 接口将新的字节码加载到 JVM 中。</p></li><li><p>使用 JVMTI 接口通知 JVM 更新 Class 对象的字节码。</p></li></ol><p>需要注意的是，热部署机制只适用于一些特定的场景，例如开发环境、测试环境等，不适用于生产环境。在生产环境中，应该使用版本控制等工具来管理类的升级。</p><h3 id="破坏双亲委派的场景" tabindex="-1"><a class="header-anchor" href="#破坏双亲委派的场景"><span>破坏双亲委派的场景</span></a></h3><p>只有官方库java.的类必须由启动类加载器加载，无法破坏，扩展类加载器和应用程序类加载器的双亲委派都是可以破坏的。</p><p>破坏的核心是向下代理，需要用到<strong>线程上下文类加载器（<code>ThreadContextClassLoader</code>）</strong></p><p>知道了理论，还需要根据实际场景，找准破坏双亲委派的位置。可以看看优秀的开源框架中是如何破坏双亲委派的，比如Tomcat：</p><h4 id="java-spi-serviceloader" tabindex="-1"><a class="header-anchor" href="#java-spi-serviceloader"><span>JAVA SPI ServiceLoader</span></a></h4><p>使用的扫描服务实现类的工具类是</p><h4 id="tomcat" tabindex="-1"><a class="header-anchor" href="#tomcat"><span>Tomcat</span></a></h4><p><img src="https://img-blog.csdnimg.cn/c519374f9cd2406c9fe9ad31da0fcbdd.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA5b6Q5ZCM5a2m5ZGA,size_20,color_FFFFFF,t_70,g_se,x_16#pic_center" alt="tomcat破坏双亲委派" loading="lazy"></p><p>Tomcat源码就不贴了，Tomcat中可以部署多个web项目，为了保证每个web项目互相独立，所以不能都由AppClassLoader加载，所以自定义了类加载器WebappClassLoader，WebappClassLoader继承自URLClassLoader，重写了findClass和loadClass，并且WebappClassLoader的父类加载器设置为AppClassLoader。</p><p>WebappClassLoader.loadClass中会先在缓存中查看类是否加载过，没有加载，就交给ExtClassLoader，ExtClassLoader再交给BootstrapClassLoader加载；都加载不了，才自己加载；自己也加载不了，就遵循原始的双亲委派，交由AppClassLoader递归加载。</p><h4 id="spring-boot-devtools-热部署" tabindex="-1"><a class="header-anchor" href="#spring-boot-devtools-热部署"><span>Spring Boot devtools 热部署</span></a></h4><p>Spring-devtools的热部署主要依赖于两个机制：类加载器隔离和文件监听。</p><ol><li>类加载器隔离：Spring-devtools:为每个项目创建了一个独立的类加载器，用于加载项目的类文件。这样，在类文件发生变化时，只需要重<br> 新加载该类加载器，而不需要重启整个应用。</li><li>文件监听：Spring-devtools?会监听项目中指定路径的文件变化，当检测到文件发生变化时，触发相应的操作，如重新加载类文件、清除缓<br> 存等。</li></ol><p>通过这两个机制，Spring-devtools实现了热部署功能，提高了开发效率。</p><p>这里先提出一个简单的思路，我们自己实现一个类加载器，然后我们的类通过这个类加载器去加载，并且能<br> 够加载到我们修改后的class文件。<br> 如果我们需要实现一个自己的类加载器需要继承一个抽象类ClassLoader,注意它的loadclass方法，它<br> 的基本流程如下：</p><ol><li>通过缓存拿到class对象</li><li>如果存在父类加载器调用父类加载器的loadClass方法</li><li>最后依然没有拿到class.对象才会自己去加载</li></ol><hr><p>问题：自己写String类，包名也是java.lang，这个类能编译成功吗，能运行成功吗</p><p>结论： 能编译成功，但是运行会报错。因为加载String的时候根据双亲委派机制会默认加载jdk里的String。</p><ul><li>在自己写的String类中写main方法并运行，会报错找不到main方法。</li><li>如果在其他类中尝试调用这个String类的方法，也调用不到，实际的结果是调用jdk中的String类的方法。</li></ul><p>这里涉及3个知识点：</p><ul><li>Java代码的编译过程</li><li>Java代码的运行过程</li><li>类加载器（详见文章：<a href="https://juejin.cn/post/7344089411984769050" target="_blank" rel="noopener noreferrer">JVM：类加载器</a>）</li></ul><h2 id="模块化的类加载器" tabindex="-1"><a class="header-anchor" href="#模块化的类加载器"><span>模块化的类加载器</span></a></h2><p>为了保证兼容性，JDK 9并没有从根本上动摇从JDK 1.2以来运行了二十年之久的三层类加载器架 构以及双亲委派模型。但是为了模块化系统的顺利施行，模块化下的类加载器仍然发生了一些应该被 注意到变动，主要包括以下几个方面。</p><ol><li><p>扩展类加载器（Extension ClassLoader）被平台类加载器（Platform ClassLoader）取代。同时整个JDK都基于模块化进行构建（其中原来的rt.jar和tools.jar被拆分成数十个JMOD文件），其中的Java类库已满足了可扩展的需求，所以无须再保留&lt;JAVA_HOME&gt;\\lib\\ext目录，之前使用这个目录或者java.ext.dirs系统变量来扩展JDK功能的机制已经没用存在的价值了。新版本JDK中同时取消了&lt;JAVA_HOME&gt;\\jre目录，因为随时可以组合构建出程序运行所需的JRE，举例：只使用java.base模块中的类型，组合JRE</p><p>jlink -p $JAVA_HOME/jmods --add-modules java.base --output jre</p></li><li><p>平台类加载器和应用程序类加载器都不再派生自java.net.URLClassLoader，如果有程序直接依赖了这种继承关系，或者依赖了URLClassLoader类的特定方法，那代码很可能会在JDK 9及更高版本的JDK中崩溃。现在启动类加载器、平台类加载器、应用程序类加载器全都继承于jdk.internal.loader.BuiltinClassLoader，在BuiltinClassLoader中实现了新的模块化架构下类如何从模块中加载的逻辑，以及模块中资源可访问性的处理。</p><p>JDK9之后有了BootClassLoader”的存在，启动类加载器现在是在Java虚拟机内部和Java类库共同协作实现的类加载器，尽管有了BootClassLoader这样的Java类，但为了与之前的代码保持兼容，所有在获取启动类加载器的场景（譬如Object.class.getClassLoader()）中仍然会返回null来代替，而不会得到BootClassLoader的实例。</p></li></ol><p><img src="https://pics0.baidu.com/feed/f31fbe096b63f6245d77a58d9ea0a4ff1b4ca305.jpeg@f_auto?token=7c7224b4b83465f47024a52657ddaa69" alt="img" loading="lazy"></p><p>最后，JDK 9中虽然仍然维持着三层类加载器和双亲委派的架构，但类加载的委派关系也发生了变动。当平台及应用程序类加载器收到类加载请求，在委派给父加载器加载前，要先判断该类是否能够归属到某一个系统模块中，如果可以找到这样的归属关系，就要优先委派给负责那个模块的加载器完成加载，也许这可以算是对双亲委派的第四次破坏。</p>`,66)]))}const r=a(n,[["render",t],["__file","类加载器.html.vue"]]),o=JSON.parse(`{"path":"/se/lang/java/jvm/%E6%89%A7%E8%A1%8C%E7%B3%BB%E7%BB%9F/%E7%B1%BB%E5%8A%A0%E8%BD%BD/%E7%B1%BB%E5%8A%A0%E8%BD%BD%E5%99%A8.html","title":"类加载器","lang":"en-US","frontmatter":{"description":"类加载器 从上面的介绍可以看出: 类加载器是一个负责加载类的对象，用于实现类加载过程中加载这步。 每个 Java 类都有一个引用指向加载它的 ClassLoader。 数组类不是通过 ClassLoader 创建的（数组类没有对应的二进制字节流），是由 JVM 直接生成的。 类加载器虽然只用于实现类的加载动作，但它在 Java 程序中起到的作用却远超类...","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/se/lang/java/jvm/%E6%89%A7%E8%A1%8C%E7%B3%BB%E7%BB%9F/%E7%B1%BB%E5%8A%A0%E8%BD%BD/%E7%B1%BB%E5%8A%A0%E8%BD%BD%E5%99%A8.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"类加载器"}],["meta",{"property":"og:description","content":"类加载器 从上面的介绍可以看出: 类加载器是一个负责加载类的对象，用于实现类加载过程中加载这步。 每个 Java 类都有一个引用指向加载它的 ClassLoader。 数组类不是通过 ClassLoader 创建的（数组类没有对应的二进制字节流），是由 JVM 直接生成的。 类加载器虽然只用于实现类的加载动作，但它在 Java 程序中起到的作用却远超类..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://img-blog.csdnimg.cn/c519374f9cd2406c9fe9ad31da0fcbdd.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA5b6Q5ZCM5a2m5ZGA,size_20,color_FFFFFF,t_70,g_se,x_16#pic_center"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-06-27T01:21:47.000Z"}],["meta",{"property":"article:modified_time","content":"2024-06-27T01:21:47.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"类加载器\\",\\"image\\":[\\"https://img-blog.csdnimg.cn/c519374f9cd2406c9fe9ad31da0fcbdd.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA5b6Q5ZCM5a2m5ZGA,size_20,color_FFFFFF,t_70,g_se,x_16#pic_center\\",\\"https://pics0.baidu.com/feed/f31fbe096b63f6245d77a58d9ea0a4ff1b4ca305.jpeg@f_auto?token=7c7224b4b83465f47024a52657ddaa69\\"],\\"dateModified\\":\\"2024-06-27T01:21:47.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[{"level":3,"title":"类加载器加载规则","slug":"类加载器加载规则","link":"#类加载器加载规则","children":[]},{"level":2,"title":"双亲委派模型","slug":"双亲委派模型","link":"#双亲委派模型","children":[{"level":3,"title":"三层类加载器","slug":"三层类加载器","link":"#三层类加载器","children":[]},{"level":3,"title":"双亲委派模型","slug":"双亲委派模型-1","link":"#双亲委派模型-1","children":[]},{"level":3,"title":"好处","slug":"好处","link":"#好处","children":[]},{"level":3,"title":"破坏双亲委派的场景","slug":"破坏双亲委派的场景","link":"#破坏双亲委派的场景","children":[]}]},{"level":2,"title":"模块化的类加载器","slug":"模块化的类加载器","link":"#模块化的类加载器","children":[]}],"git":{"createdTime":1680090419000,"updatedTime":1719451307000,"contributors":[{"name":"刘大维","email":"davidliu@liudaweideMacBook-Pro.local","commits":1}]},"readingTime":{"minutes":14.21,"words":4263},"filePathRelative":"se/lang/java/jvm/执行系统/类加载/类加载器.md","localizedDate":"March 29, 2023","excerpt":"\\n<p>从上面的介绍可以看出:</p>\\n<ul>\\n<li>类加载器是一个负责加载类的对象，用于实现类加载过程中加载这步。</li>\\n<li>每个 Java 类都有一个引用指向加载它的 <code>ClassLoader</code>。</li>\\n<li>数组类不是通过 <code>ClassLoader</code> 创建的（数组类没有对应的二进制字节流），是由 JVM 直接生成的。</li>\\n</ul>\\n<p>类加载器虽然只用于实现类的加载动作，但它在 Java 程序中起到的作用却远超类加载阶段。对于任意一个类，都必须由加载它的类加载器和这个类本身一起共同确立其在 Java 虚拟机中的唯一性，每一个类加载器，都拥有一个独立的类名称空间。这句话可以表达得更通俗一些：比较两个类是否“相等”，只有在这两个类是由同一个类加载器加载的前提下才有意义，否则，即使这两个类来源于同一个 Class 文件，被同一个 Java 虚拟机加载，只要加载它们的类加载器不同，那这两个类就必定不相等。</p>","autoDesc":true}`);export{r as comp,o as data};
