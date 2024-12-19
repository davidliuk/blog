import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as t,d as n,o as r}from"./app-PqS9YW_3.js";const o={};function s(i,a){return r(),t("div",null,a[0]||(a[0]=[n('<h1 id="内存区域" tabindex="-1"><a class="header-anchor" href="#内存区域"><span>内存区域</span></a></h1><p><img src="https://oss.javaguide.cn/github/javaguide/java/jvm/java-runtime-data-areas-jdk1.8.png" alt="Java 运行时数据区域（JDK1.8 ）" loading="lazy"></p><h2 id="线程私有" tabindex="-1"><a class="header-anchor" href="#线程私有"><span>线程私有</span></a></h2><h3 id="程序计数器-pcr" tabindex="-1"><a class="header-anchor" href="#程序计数器-pcr"><span>程序计数器 PCR</span></a></h3><p>程序计数器(Program Counter Register)是一块较小的内存空间，它可以看作是当前线程所执行的<strong>字节码的行号指示器</strong>。在 Java 虚拟机的概念模型里，字节码解释器工作时就是通过改变这个计数器的值来选取下一条需要执行的字节码指令，它是程序控制流的指示器，分支、循环、跳转、异常处理、线程恢复等基础功能都需要依赖这个计数器来完成。</p><h3 id="虚拟机栈-vm-stack" tabindex="-1"><a class="header-anchor" href="#虚拟机栈-vm-stack"><span>虚拟机栈 VM Stack</span></a></h3><p>Java 虚拟机栈 (Java Virtual Machine Stack) 也是线程私有的，它的生命周期与线程相同。虚拟机栈描述的是 Java 方法执行的线程内存模型:每个方法被执行的时候， Java 虚拟机都会同步创建一个栈帧(StackFrame)用于存储<strong>局部变量表、操作数栈、动态连接、方法出口</strong>等信息。每一个方法被调用直至执行完毕的过程，就对应着一个栈帧在虚拟机栈中从入栈到出栈的过程。</p><p>有人把 Java 内存区域笼统地划分为堆内存 (Heap) 和栈内存 (Stack) ，这种划分方式直接继承自传统的 C, C ++程序的内存布局结构，在 Java 语言里就显得有些粗糙了，实际的内存区域划分要比这更复杂。不过这种划分方式的流行也间接说明了程序员最关注的、与对象内存分配关系最密切的区域是“堆”和“栈”两块。“栈”通常就是指这里讲的虚拟机栈，或者更多的情况下只是指虚拟机栈中局部变量表部分。</p><p><strong>局部变量表</strong>存放了编译期可知的各种 Java 虚拟机基本数据类型 (boolean, byte, char, short, int, float, long, double) 、对象引用 (reference 类型，它并不等同于对象本身，可能是一个指向对象起始地址的引用指针，也可能是指向一个代表对象的句柄或者其他与此对象相关的位置)和 returnAddress 类型(指向了一条字节码指令的地址)。</p><p>这些数据类型在局部变量表中的存储空间以局部变量槽 (Slot) 来表示，其中 64 位长度的 long 和 double 类型的数据会占用两个变量槽，其余的数据类型只占用一个。局部变量表所需的内存空间在编译期间完成分配，当进入一个方法时，这个方法需要在栈帧中分配多大的局部变量空间是完全确定的，在方法运行期间不会改变局部变量表的大小。请读者注意，这里说的“大小”是指变量槽的数量，虚拟机真正使用多大的内存空间(譬如按照 1 个变量槽占用 32 个比特、64 个比特，或者更多)来实现一个变量槽，这是完全由具体的虚拟机实现自行决定的事情。</p><p><strong>操作数栈</strong>：主要作为方法调用的中转站使用，用于存放方法执行过程中产生的<strong>中间计算结果</strong>。另外，计算过程中产生的<strong>临时变量</strong>也会放在操作数栈中。</p><p><strong>动态链接</strong>：主要服务一个方法需要调用其他方法的场景。Class 文件的常量池里保存有大量的符号引用比如方法引用的符号引用。当一个方法要调用其他方法，需要将常量池中指向方法的符号引用转化为其在内存地址中的直接引用。动态链接的作用就是为了将符号引用转换为调用方法的直接引用，这个过程也被称为 <strong>动态连接</strong> 。</p><h3 id="本地方法栈-nm-stack" tabindex="-1"><a class="header-anchor" href="#本地方法栈-nm-stack"><span>本地方法栈 NM Stack</span></a></h3><p>和虚拟机栈所发挥的作用非常相似，区别是：<strong>虚拟机栈为虚拟机执行 Java 方法 （也就是字节码）服务，而本地方法栈则为虚拟机使用到的 Native 方法服务。</strong> 在 HotSpot 虚拟机中和 Java 虚拟机栈合二为一。</p><p>本地方法被执行的时候，在本地方法栈也会创建一个栈帧，用于存放该本地方法的局部变量表、操作数栈、动态链接、出口信息。</p><p>方法执行完毕后相应的栈帧也会出栈并释放内存空间，也会出现 <code>StackOverFlowError</code> 和 <code>OutOfMemoryError</code> 两种错误。</p><h2 id="线程共享" tabindex="-1"><a class="header-anchor" href="#线程共享"><span>线程共享</span></a></h2><p><img src="https://oss.javaguide.cn/github/javaguide/java/jvm/method-area-jdk1.6.png" alt="method-area-jdk1.6" loading="lazy"></p><p><img src="https://oss.javaguide.cn/github/javaguide/java/jvm/method-area-jdk1.7.png" alt="method-area-jdk1.7" loading="lazy"></p><p>因为永久代（方法区实现）的 GC 回收效率太低，只有在整堆收集 (Full GC)的时候才会被执行 GC。Java 程序中通常会有大量的被创建的字符串等待回收，将字符串常量池放到堆中，能够更高效及时地回收字符串内存。</p><h3 id="java-堆" tabindex="-1"><a class="header-anchor" href="#java-堆"><span>Java 堆</span></a></h3><p>Java 虚拟机所管理的内存中最大的一块，Java 堆是所有线程共享的一块内存区域，在虚拟机启动时创建。<strong>此内存区域的唯一目的就是存放对象实例，几乎所有的对象实例以及数组都在这里分配内存。</strong></p><p>Java 世界中“几乎”所有的对象都在堆中分配，但是，随着 JIT 编译器的发展与逃逸分析技术逐渐成熟，栈上分配、标量替换优化技术将会导致一些微妙的变化，所有的对象都分配到堆上也渐渐变得不那么“绝对”了。从 JDK 1.7 开始已经默认开启逃逸分析，如果某些方法中的对象引用没有被返回或者未被外面使用（也就是未逃逸出去），那么对象可以直接在栈上分配内存。</p><p>Java 堆是垃圾收集器管理的主要区域，因此也被称作 <strong>GC 堆（Garbage Collected Heap）</strong>。从垃圾回收的角度，由于现在收集器基本都采用分代垃圾收集算法，所以 Java 堆还可以细分为：新生代和老年代；再细致一点有：Eden、Survivor、Old 等空间。进一步划分的目的是更好地回收内存，或者更快地分配内存。</p><p>在 JDK 7 版本及 JDK 7 版本之前，堆内存被通常分为下面三部分：</p><ol><li>新生代内存(Young Generation)</li><li>老生代(Old Generation)</li><li>永久代(Permanent Generation)</li></ol><p>下图所示的 Eden 区、两个 Survivor 区 S0 和 S1 都属于新生代，中间一层属于老年代，最下面一层属于永久代。</p><h4 id="字符串常量池" tabindex="-1"><a class="header-anchor" href="#字符串常量池"><span>字符串常量池</span></a></h4><p><strong>字符串常量池</strong> 是 JVM 为了提升性能和减少内存消耗针对字符串（String 类）专门开辟的一块区域，主要目的是为了避免字符串的重复创建。</p><p>HotSpot 虚拟机中字符串常量池的实现是 <code>src/hotspot/share/classfile/stringTable.cpp</code> ,<code>StringTable</code> 可以简单理解为一个固定大小的<code>HashTable</code> ，容量为 <code>StringTableSize</code>（可以通过 <code>-XX:StringTableSize</code> 参数来设置），保存的是字符串（key）和 字符串对象的引用（value）的映射关系，字符串对象的引用指向堆中的字符串对象。</p><p>JDK1.7 之前，字符串常量池存放在永久代。JDK1.7 字符串常量池和静态变量从永久代移动了 Java 堆中。</p><h3 id="元空间" tabindex="-1"><a class="header-anchor" href="#元空间"><span>元空间</span></a></h3><p>Java8以后Hotspot虚拟机<strong>方法区</strong>的实现</p><h4 id="运行时常量池" tabindex="-1"><a class="header-anchor" href="#运行时常量池"><span>运行时常量池</span></a></h4><p>Class 文件中除了有类的版本、字段、方法、接口等描述信息外，还有用于存放编译期生成的各种字面量（Literal）和符号引用（Symbolic Reference）的<strong>常量池表(Constant Pool Table)</strong> 。</p><p>字面量：源代码中的固定值的表示法，即通过字面我们就能知道其值的含义。字面量包括整数、浮点数和字符串字面量。</p><p>符号引用常见的包括类符号引用、字段符号引用、方法符号引用、接口方法符号。</p><h4 id="类加载信息" tabindex="-1"><a class="header-anchor" href="#类加载信息"><span>类加载信息</span></a></h4><h4 id="元数据" tabindex="-1"><a class="header-anchor" href="#元数据"><span>元数据</span></a></h4><h3 id="直接内存" tabindex="-1"><a class="header-anchor" href="#直接内存"><span>直接内存</span></a></h3>',40)]))}const d=e(o,[["render",s],["__file","内存区域.html.vue"]]),c=JSON.parse(`{"path":"/se/lang/java/jvm/%E5%86%85%E5%AD%98%E7%AE%A1%E7%90%86/%E5%86%85%E5%AD%98%E5%8C%BA%E5%9F%9F/%E5%86%85%E5%AD%98%E5%8C%BA%E5%9F%9F.html","title":"内存区域","lang":"en-US","frontmatter":{"description":"内存区域 Java 运行时数据区域（JDK1.8 ） 线程私有 程序计数器 PCR 程序计数器(Program Counter Register)是一块较小的内存空间，它可以看作是当前线程所执行的字节码的行号指示器。在 Java 虚拟机的概念模型里，字节码解释器工作时就是通过改变这个计数器的值来选取下一条需要执行的字节码指令，它是程序控制流的指示器，分...","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/se/lang/java/jvm/%E5%86%85%E5%AD%98%E7%AE%A1%E7%90%86/%E5%86%85%E5%AD%98%E5%8C%BA%E5%9F%9F/%E5%86%85%E5%AD%98%E5%8C%BA%E5%9F%9F.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"内存区域"}],["meta",{"property":"og:description","content":"内存区域 Java 运行时数据区域（JDK1.8 ） 线程私有 程序计数器 PCR 程序计数器(Program Counter Register)是一块较小的内存空间，它可以看作是当前线程所执行的字节码的行号指示器。在 Java 虚拟机的概念模型里，字节码解释器工作时就是通过改变这个计数器的值来选取下一条需要执行的字节码指令，它是程序控制流的指示器，分..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://oss.javaguide.cn/github/javaguide/java/jvm/java-runtime-data-areas-jdk1.8.png"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-06-27T01:21:47.000Z"}],["meta",{"property":"article:modified_time","content":"2024-06-27T01:21:47.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"内存区域\\",\\"image\\":[\\"https://oss.javaguide.cn/github/javaguide/java/jvm/java-runtime-data-areas-jdk1.8.png\\",\\"https://oss.javaguide.cn/github/javaguide/java/jvm/method-area-jdk1.6.png\\",\\"https://oss.javaguide.cn/github/javaguide/java/jvm/method-area-jdk1.7.png\\"],\\"dateModified\\":\\"2024-06-27T01:21:47.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[{"level":2,"title":"线程私有","slug":"线程私有","link":"#线程私有","children":[{"level":3,"title":"程序计数器 PCR","slug":"程序计数器-pcr","link":"#程序计数器-pcr","children":[]},{"level":3,"title":"虚拟机栈 VM Stack","slug":"虚拟机栈-vm-stack","link":"#虚拟机栈-vm-stack","children":[]},{"level":3,"title":"本地方法栈 NM Stack","slug":"本地方法栈-nm-stack","link":"#本地方法栈-nm-stack","children":[]}]},{"level":2,"title":"线程共享","slug":"线程共享","link":"#线程共享","children":[{"level":3,"title":"Java 堆","slug":"java-堆","link":"#java-堆","children":[]},{"level":3,"title":"元空间","slug":"元空间","link":"#元空间","children":[]},{"level":3,"title":"直接内存","slug":"直接内存","link":"#直接内存","children":[]}]}],"git":{"createdTime":1680090419000,"updatedTime":1719451307000,"contributors":[{"name":"刘大维","email":"davidliu@liudaweideMacBook-Pro.local","commits":2},{"name":"davidliu","email":"liudawei47@jd.com","commits":1}]},"readingTime":{"minutes":6.8,"words":2039},"filePathRelative":"se/lang/java/jvm/内存管理/内存区域/内存区域.md","localizedDate":"March 29, 2023","excerpt":"\\n<p><img src=\\"https://oss.javaguide.cn/github/javaguide/java/jvm/java-runtime-data-areas-jdk1.8.png\\" alt=\\"Java 运行时数据区域（JDK1.8 ）\\" loading=\\"lazy\\"></p>\\n<h2>线程私有</h2>\\n<h3>程序计数器 PCR</h3>\\n<p>程序计数器(Program Counter Register)是一块较小的内存空间，它可以看作是当前线程所执行的<strong>字节码的行号指示器</strong>。在 Java 虚拟机的概念模型里，字节码解释器工作时就是通过改变这个计数器的值来选取下一条需要执行的字节码指令，它是程序控制流的指示器，分支、循环、跳转、异常处理、线程恢复等基础功能都需要依赖这个计数器来完成。</p>","autoDesc":true}`);export{d as comp,c as data};
