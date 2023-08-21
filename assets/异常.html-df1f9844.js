import{_ as e,V as o,W as c,Z as t}from"./framework-e5d7a6b2.js";const n={},i=t('<h1 id="异常" tabindex="-1"><a class="header-anchor" href="#异常" aria-hidden="true">#</a> 异常</h1><p><img src="https://cdn.jsdelivr.net/gh/davidliuk/images@master/blog/types-of-exceptions-in-java.png" alt="Java 异常类层次结构图" loading="lazy"></p><h3 id="exception-和-error-区别" tabindex="-1"><a class="header-anchor" href="#exception-和-error-区别" aria-hidden="true">#</a> Exception 和 Error 区别</h3><p>所有异常都有一个共同的祖先：<code>Throwable</code> 类。该类有两个重要的子类:</p><ul><li><p><strong><code>Exception</code></strong>：程序本身可以处理的异常，可以通过 <code>catch</code> 来进行捕获。<code>Exception</code> 又可以分为：</p><ul><li>Checked Exception (受检查异常，必须处理)</li><li>Unchecked Exception (不受检查异常，可以不处理)。</li></ul></li><li><p><strong><code>Error</code></strong>：<code>Error</code> 属于程序无法处理的错误 ，我们没办法通过 <code>catch</code> 来进行捕获不建议通过<code>catch</code>捕获 。例如</p><ul><li>Java 虚拟机运行错误（<code>Virtual MachineError</code>）</li><li>虚拟机内存不够错误（<code>OutOfMemoryError</code>）</li><li>栈溢出错误（<code>StackOverFlowError</code>）</li><li>类定义错误（<code>NoClassDefFoundError</code>）</li></ul><p>这些异常发生时，Java 虚拟机（JVM）一般会选择线程终止。</p></li></ul><h3 id="checked-exception-和-unchecked-exception-区别" tabindex="-1"><a class="header-anchor" href="#checked-exception-和-unchecked-exception-区别" aria-hidden="true">#</a> Checked Exception 和 Unchecked Exception 区别</h3><p><strong>Checked Exception</strong> 即 受检查异常 ，Java 代码在编译过程中，如果受检查异常没有被 <code>catch</code>或者<code>throws</code> 关键字处理的话，就没办法通过编译。</p><p>比如下面这段 IO 操作的代码：</p><p>RuntimeException = UncheckedException，可以不用 throw 也不用 try 包裹</p><blockquote><p>RuntimeException and its subclasses are unchecked exceptions. Unchecked exceptions do not need to be declared in a method or constructor&#39;s throws clause if they can be thrown by the execution of the method or constructor and propagate outside the method or constructor boundary.</p></blockquote><p>NullPointerException(空指针异常)、</p><p>IndexOutOfBoundsException(下标越界异常)、</p><p>ClassCastException(类转换异常)、</p><p>ArrayStoreException(数据存储异常，操作数组时类型不一致)、</p><p>IO 操作的 BufferOverflowException 异常;</p><p>RuntimeException 以外的异常，是非运行时异常、 checked exceptions 编译异常，是类型上都属于 Exception 类及其子类。从程序语法角度讲是必须进行处理的异常，如果不处理，程序就不能编译通过。如 IOException、SQLException 等以及用户自定义的 Exception 异常，一般情况下不自定义检查异常。</p><p>运行时异常（RuntimeException）是 Java 中的一种异常类型，它通常是由程序错误或逻辑错误引起的。与受检查异常（Checked Exception）不同，运行时异常不需要在方法签名中声明，也不需要在调用方法时显式地捕获或抛出。</p><p>以下是一些常见的运行时异常及其出现的场景：</p><ol><li><p>NullPointerException（空指针异常）：当尝试访问一个空对象的属性或方法时，会抛出 NullPointerException 异常。例如，当一个对象为 null 时，调用它的方法或属性就会抛出空指针异常。</p></li><li><p>ArrayIndexOutOfBoundsException（数组下标越界异常）：当尝试访问数组中不存在的元素时，会抛出 ArrayIndexOutOfBoundsException 异常。例如，当尝试访问数组中的负数下标或超出数组长度的下标时，就会抛出数组下标越界异常。</p></li><li><p>ClassCastException（类型转换异常）：当尝试将一个对象强制转换为不兼容的类型时，会抛出 ClassCastException 异常。例如，当尝试将一个字符串对象转换为整数类型时，就会抛出类型转换异常。</p></li><li><p>IllegalArgumentException（非法参数异常）：当传递给方法的参数不合法或不正确时，会抛出 IllegalArgumentException 异常。例如，当传递给方法的参数为 null 或超出有效范围时，就会抛出非法参数异常。</p></li><li><p>IllegalStateException（非法状态异常）：当对象处于不正确的状态时，会抛出 IllegalStateException 异常。例如，当尝试在未初始化的对象上调用方法时，就会抛出非法状态异常。</p></li></ol><p>需要注意的是，这些异常通常是由程序员的错误或逻辑错误引起的，因此在编写程序时应该尽可能避免这些异常的出现。</p><h2 id="异常处理" tabindex="-1"><a class="header-anchor" href="#异常处理" aria-hidden="true">#</a> 异常处理</h2><h3 id="try" tabindex="-1"><a class="header-anchor" href="#try" aria-hidden="true">#</a> try</h3><p>finally 里面可以写 return，但是一定会执行，一旦写了，那么 try 和 catch 块里的 return 语句都会失效</p>',23),r=[i];function a(p,d){return o(),c("div",null,r)}const h=e(n,[["render",a],["__file","异常.html.vue"]]);export{h as default};
