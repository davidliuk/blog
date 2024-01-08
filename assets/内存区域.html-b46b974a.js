const e=JSON.parse(`{"key":"v-c3991d3a","path":"/se/lang/java/jvm/%E5%86%85%E5%AD%98%E7%AE%A1%E7%90%86/%E5%86%85%E5%AD%98%E5%8C%BA%E5%9F%9F/%E5%86%85%E5%AD%98%E5%8C%BA%E5%9F%9F.html","title":"内存区域","lang":"en-US","frontmatter":{"description":"内存区域 线程独占 程序计数器 程序计数器( ProgramCounterRegister )是一块较小的内存空间，它可以看作是当前线程所执行的字节码的行号指示器。在 Java 虚拟机的概念模型里[1]，字节码解释器工作时就是通过改变这个计数器的值来选取下一条需要执行的字节码指令，它是程序控制流的指示器，分支、循环、跳转、异常处理、线程恢复等基础功能都需要依赖这个计数器来完成。 Java 虚拟机栈 Java 虚拟机栈( JavaVirtualMachineStack )也是线程私有的，它的生命周期与线程相同。虚拟机栈描述的是 Java 方法执行的线程内存模型:每个方法被执行的时候， Java 虚拟机都会同步创建一个栈帧1用于存储局部变量表、操作数栈、动态连接、方法出口等信息。每一个方法被调用直至执行完毕的过程，就对应着一个栈帧在虚拟机栈中从入栈到出栈的过程。","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/se/lang/java/jvm/%E5%86%85%E5%AD%98%E7%AE%A1%E7%90%86/%E5%86%85%E5%AD%98%E5%8C%BA%E5%9F%9F/%E5%86%85%E5%AD%98%E5%8C%BA%E5%9F%9F.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"内存区域"}],["meta",{"property":"og:description","content":"内存区域 线程独占 程序计数器 程序计数器( ProgramCounterRegister )是一块较小的内存空间，它可以看作是当前线程所执行的字节码的行号指示器。在 Java 虚拟机的概念模型里[1]，字节码解释器工作时就是通过改变这个计数器的值来选取下一条需要执行的字节码指令，它是程序控制流的指示器，分支、循环、跳转、异常处理、线程恢复等基础功能都需要依赖这个计数器来完成。 Java 虚拟机栈 Java 虚拟机栈( JavaVirtualMachineStack )也是线程私有的，它的生命周期与线程相同。虚拟机栈描述的是 Java 方法执行的线程内存模型:每个方法被执行的时候， Java 虚拟机都会同步创建一个栈帧1用于存储局部变量表、操作数栈、动态连接、方法出口等信息。每一个方法被调用直至执行完毕的过程，就对应着一个栈帧在虚拟机栈中从入栈到出栈的过程。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-01-08T03:06:14.000Z"}],["meta",{"property":"article:author","content":"David Liu"}],["meta",{"property":"article:modified_time","content":"2024-01-08T03:06:14.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"内存区域\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-01-08T03:06:14.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[{"level":2,"title":"线程独占","slug":"线程独占","link":"#线程独占","children":[{"level":3,"title":"程序计数器","slug":"程序计数器","link":"#程序计数器","children":[]},{"level":3,"title":"Java 虚拟机栈","slug":"java-虚拟机栈","link":"#java-虚拟机栈","children":[]},{"level":3,"title":"本地方法栈","slug":"本地方法栈","link":"#本地方法栈","children":[]}]},{"level":2,"title":"线程共享","slug":"线程共享","link":"#线程共享","children":[{"level":3,"title":"Java 堆","slug":"java-堆","link":"#java-堆","children":[]},{"level":3,"title":"方法区","slug":"方法区","link":"#方法区","children":[]}]}],"git":{"createdTime":1704683174000,"updatedTime":1704683174000,"contributors":[{"name":"davidliu","email":"liudawei47@jd.com","commits":1}]},"readingTime":{"minutes":2.74,"words":822},"filePathRelative":"se/lang/java/jvm/内存管理/内存区域/内存区域.md","localizedDate":"January 8, 2024","excerpt":"<h1> 内存区域</h1>\\n<h2> 线程独占</h2>\\n<h3> 程序计数器</h3>\\n<p>程序计数器( ProgramCounterRegister )是一块较小的内存空间，它可以看作是当前线程所执行的字节码的行号指示器。在 Java 虚拟机的概念模型里[1]，字节码解释器工作时就是通过改变这个计数器的值来选取下一条需要执行的字节码指令，它是程序控制流的指示器，分支、循环、跳转、异常处理、线程恢复等基础功能都需要依赖这个计数器来完成。</p>\\n<h3> Java 虚拟机栈</h3>\\n<p>Java 虚拟机栈( JavaVirtualMachineStack )也是线程私有的，它的生命周期与线程相同。虚拟机栈描述的是 Java 方法执行的线程内存模型:每个方法被执行的时候， Java 虚拟机都会同步创建一个栈帧<a href=\\"StackFrame\\">1</a>用于存储局部变量表、操作数栈、动态连接、方法出口等信息。每一个方法被调用直至执行完毕的过程，就对应着一个栈帧在虚拟机栈中从入栈到出栈的过程。</p>","autoDesc":true}`);export{e as data};
