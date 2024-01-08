import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{o as e,c as t,d as i}from"./app-9107e99b.js";const l={},c=i('<h1 id="类加载过程" tabindex="-1"><a class="header-anchor" href="#类加载过程" aria-hidden="true">#</a> 类加载过程</h1><h2 id="加载" tabindex="-1"><a class="header-anchor" href="#加载" aria-hidden="true">#</a> 加载</h2><p>“加载”(Loading)阶段是整个“类加载”(ClassLoading)过程中的一个阶段，希望读者没有混淆</p><p>这两个看起来很相似的名词。在加载阶段，Java 虚拟机需要完成以下三件事情：</p><ol><li><p>通过一个类的全限定名来获取定义此类的二进制字节流。</p></li><li><p>将这个字节流所代表的静态存储结构转化为方法区的运行时数据结构。</p></li><li><p>在内存中生成一个代表这个类的 java.lang.Class 对象，作为方法区这个类的各种数据的访问入口。</p></li></ol><h2 id="验证" tabindex="-1"><a class="header-anchor" href="#验证" aria-hidden="true">#</a> 验证</h2><p>文件格式验证</p><ol><li><p>文件格式验证。第一阶段要验证字节流是否符合 Class 文件格式的规范，并且能被当前版本的虚拟机处理。</p></li><li><p>元数据验证。</p></li><li><p>字节码验证。最复杂的一个阶段，主要目的是通过数据流分析和控制流分析，确定程序语义是合法的、符合逻辑的。在第二阶段对元数据信息中的数据类型校验完毕以后，这阶段就要对类的方法体(Class 文件中的 Code 属性)进行校验分析，保证被校验类的方法在运行时不会做出危害虚拟机安全的行为</p></li><li><p>符号引用验证。最后一个阶段的校验行为发生在虚拟机将符号引用转化为直接引用[3]的时候，这个转化动作将在连接的第三阶段——解析阶段中发生。</p></li></ol><h2 id="准备" tabindex="-1"><a class="header-anchor" href="#准备" aria-hidden="true">#</a> 准备</h2><p>准备阶段是正式为类中定义的变量(即静态变量，被 static 修饰的变量)分配内存并设置类变量初始值的阶段，从概念上讲，这些变量所使用的内存都应当在方法区中进行分配，但必须注意到方法区本身是一个逻辑上的区域，在 JDK7 及之前，HotSpot 使用永久代来实现方法区时，实现是完全符合这种逻辑概念的;而在 JDK8 及之后，类变量则会随着 Class 对象一起存放在 Java 堆中，这时候“类变量在方法区”就完全是一种对逻辑概念的表述了，关于这部分内容，笔者已在 4.3.1 节介绍并且验证过。</p><p>关于准备阶段，还有两个容易产生混淆的概念笔者需要着重强调，首先是这时候进行内存分配的仅包括类变量，而不包括实例变量，实例变量将会在对象实例化时随着对象一起分配在 Java 堆中。其次是这里所说的初始值“通常情况”下是数据类型的零值，假设一个类变量的定义为:</p><p>那变量 value 在准备阶段过后的初始值为 0 而不是 123，因为这时尚未开始执行任何 Java 方法，而把 value 赋值为 123 的 putstatic 指令是程序被编译后，存放于类构造器<code>&lt;clinit&gt;()</code>方法之中，所以把 value 赋值为 123 的动作要到类的初始化阶段才会被执行。表 7-1 列出了 Java 中所有基本数据类型的零值。</p><p>上面提到在“通常情况”下初始值是零值，那言外之意是相对的会有某些“特殊情况”:如果类字段的字段属性表中存在 ConstantValue 属性，那在准备阶段变量值就会被初始化为 ConstantValue 属性所指定的初始值，假设上面类变量 value 的定义修改为:</p><p>编译时 Javac 将会为 value 生成 ConstantValue 属性，在准备阶段虚拟机就会根据 Con-stantValue 的设置将 value 赋值为 123。</p><h2 id="解析" tabindex="-1"><a class="header-anchor" href="#解析" aria-hidden="true">#</a> 解析</h2><p>解析阶段是 Java 虚拟机将常量池内的符号引用替换为直接引用的过程，符号引用在第 6 章讲解 Class 文件格式的时候已经出现过多次，在 Class 文件中它以 CONSTANT_Class_info、CONSTANT_Fieldref_info、CONSTANT_Methodref_info 等类型的常量出现，那解析阶段中所说的直接引用与符号引用又有什么关联呢?</p><ul><li>符号引用(SymbolicReferences):符号引用以一组符号来描述所引用的目标，符号可以是任何形式的字面量，只要使用时能无歧义地定位到目标即可。符号引用与虚拟机实现的内存布局无关，引用的目标并不一定是已经加载到虚拟机内存当中的内容。各种虚拟机实现的内存布局可以各不相同，但是它们能接受的符号引用必须都是一致的，因为符号引用的字面量形式明确定义在《Java 虚拟机规范》的 Class 文件格式中。</li><li>直接引用(DirectReferences):直接引用是可以直接指向目标的指针、相对偏移量或者是一个能间接定位到目标的句柄。直接引用是和虚拟机实现的内存布局直接相关的，同一个符号引用在不同虚拟机实例上翻译出来的直接引用一般不会相同。如果有了直接引用，那引用的目标必定已经在虚拟机的内存中存在。</li></ul><h2 id="初始化" tabindex="-1"><a class="header-anchor" href="#初始化" aria-hidden="true">#</a> 初始化</h2><p>类的初始化阶段是类加载过程的最后一个步骤，之前介绍的几个类加载的动作里，除了在加载阶段用户应用程序可以通过自定义类加载器的方式局部参与外，其余动作都完全由 Java 虚拟机来主导控制。直到初始化阶段，Java 虚拟机才真正开始执行类中编写的 Java 程序代码，将主导权移交给应用程序。</p><p>类的初始化阶段是类加载过程的最后一个步骤，之前介绍的几个类加载的动作里，除了在加载阶段用户应用程序可以通过自定义类加载器的方式局部参与外，其余动作都完全由 Java 虚拟机来主导控制。直到初始化阶段，Java 虚拟机才真正开始执行类中编写的 Java 程序代码，将主导权移交给应用程序。</p><p>进行准备阶段时，变量已经赋过一次系统要求的初始零值，而在初始化阶段，则会根据程序员通过程序编码制定的主观计划去初始化类变量和其他资源。我们也可以从另外一种更直接的形式来表达:初始化阶段就是执行类构造器<code>&lt;clinit&gt;()</code>方法的过程。<code>&lt;clinit&gt;()</code>并不是程序员在 Java 代码中直接编写的方法，它是 Javac 编译器的自动生成物，但我们非常有必要了解这个方法具体是如何产生的，以及<code>&lt;clinit&gt;()</code>方法执行过程中各种可能会影响程序运行行为的细节，这部分比起其他类加载过程更贴近于普通的程序开发人员的实际工作。</p><p><code>&lt;clinit&gt;()</code>方法是由编译器自动收集类中的所有类变量的赋值动作和静态语句块(static{}块)中的语句合并产生的，编译器收集的顺序是由语句在源文件中出现的顺序决定的，静态语句块中只能访问到定义在静态语句块之前的变量，定义在它之后的变量，在前面的静态语句块可以赋值，但是不能访问，如代码清单 7-5 所示。</p><p><code>&lt;clinit&gt;()</code>方法与类的构造函数(即在虚拟机视角中的实例构造器<code>&lt;init&gt;()</code>方法)不同，它不需要显式地调用父类构造器，Java 虚拟机会保证在子类的<code>&lt;clinit&gt;()</code>方法执行前，父类的<code>&lt;clinit&gt;()</code>方法已经执行完毕。因此在 Java 虚拟机中第一个被执行的<code>&lt;clinit&gt;()</code>方法的类型肯定是 java.lang.Object。</p><p>·由于父类的<code>&lt;clinit&gt;()</code>方法先执行，也就意味着父类中定义的静态语句块要优先于子类的变量赋值操作，如代码清单 7-6 中，字段 B 的值将会是 2 而不是 1。</p><p>·<code>&lt;clinit&gt;()</code>方法对于类或接口来说并不是必需的，如果一个类中没有静态语句块，也没有对变量的赋值操作，那么编译器可以不为这个类生成<code>&lt;clinit&gt;()</code>方法。</p><p>·接口中不能使用静态语句块，但仍然有变量初始化的赋值操作，因此接口与类一样都会生成<code>&lt;clinit&gt;()</code>方法。但接口与类不同的是，执行接口的<code>&lt;clinit&gt;()</code>方法不需要先执行父接口的<code>&lt;clinit&gt;()</code>方法，因为只有当父接口中定义的变量被使用时，父接口才会被初始化。此外，接口的实现类在初始化时也一样不会执行接口的<code>&lt;clinit&gt;()</code>方法。</p><p>Java 虚拟机必须保证一个类的<code>&lt;clinit&gt;()</code>方法在多线程环境中被正确地加锁同步，如果多个线程同时去初始化一个类，那么只会有其中一个线程去执行这个类的<code>&lt;clinit&gt;()</code>方法，其他线程都需要阻塞等待，直到活动线程执行完毕<code>&lt;clinit&gt;()</code>方法。如果在一个类的<code>&lt;clinit&gt;()</code>方法中有耗时很长的操作，那就可能造成多个进程阻塞，在实际应用中这种阻塞往往是很隐蔽的。</p>',27),d=[c];function o(n,p){return e(),t("div",null,d)}const h=a(l,[["render",o],["__file","类加载过程.html.vue"]]);export{h as default};
