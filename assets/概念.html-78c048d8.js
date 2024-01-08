import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{o as e,c as r,d as a}from"./app-9107e99b.js";const i={},n=a('<h1 id="概念" tabindex="-1"><a class="header-anchor" href="#概念" aria-hidden="true">#</a> 概念</h1><h3 id="什么是-aop" tabindex="-1"><a class="header-anchor" href="#什么是-aop" aria-hidden="true">#</a> 什么是 AOP</h3><p>AOP：Aspect oriented programming 面向切面编程，AOP 是 OOP（面向对象编程）的一种延续。</p><p>下面我们先看一个 OOP 的例子。</p><p>OOP 编程思想可以解决大部分的代码重复问题。但是有一些问题是处理不了的。比如在父类 Animal 中的多个方法的相同位置出现了重复的代码，OOP 就解决不了。</p><h3 id="aop-解决了什么问题" tabindex="-1"><a class="header-anchor" href="#aop-解决了什么问题" aria-hidden="true">#</a> AOP 解决了什么问题</h3><p>通过上面的分析可以发现，AOP 主要用来解决：在不改变原有业务逻辑的情况下，增强横切逻辑代码，根本上解耦合，避免横切逻辑代码重复。</p><h3 id="aop-为什么叫面向切面编程" tabindex="-1"><a class="header-anchor" href="#aop-为什么叫面向切面编程" aria-hidden="true">#</a> AOP 为什么叫面向切面编程</h3><ul><li><strong>切</strong> ：指的是横切逻辑，原有业务逻辑代码不动，只能操作横切逻辑代码，所以面向横切逻辑</li><li><strong>面</strong> ：横切逻辑代码往往要影响的是很多个方法，每个方法如同一个点，多个点构成一个面。这里有一个面的概念</li></ul><p>Spring AOP主要是通过代理实现的。具体来说，Spring AOP使用动态代理来创建代理对象，这些代理对象可以拦截方法调用并执行额外的逻辑。</p><p>Spring AOP支持两种类型的代理：JDK动态代理和CGLIB代理。如果目标对象实现了至少一个接口，则使用JDK动态代理；否则，使用CGLIB代理。</p><p>在JDK动态代理中，代理对象实现了目标对象的接口，并将方法调用委托给目标对象。在CGLIB代理中，代理对象继承了目标对象，并重写了目标对象的方法，从而实现了方法拦截。</p><p>Spring AOP使用切面来定义横切关注点，并使用通知来实现横切逻辑。通知是在切点处执行的代码，可以在方法执行前、执行后或抛出异常时执行。Spring AOP支持五种类型的通知：</p><ul><li>前置通知、</li><li>后置通知、</li><li>返回通知、</li><li>异常通知</li><li>环绕通知。</li></ul><p>在Spring AOP中，切面是由切点和通知组成的。切点定义了哪些方法需要被拦截，通知定义了拦截后执行的逻辑。Spring AOP还支持切点表达式，可以使用切点表达式来定义更复杂的切点。</p><p>总之，Spring AOP通过代理实现，使用动态代理来创建代理对象，并使用切面和通知来实现横切逻辑。</p><h3 id="原理" tabindex="-1"><a class="header-anchor" href="#原理" aria-hidden="true">#</a> 原理</h3><p>Spring AOP 就是基于动态代理的，如果要代理的对象，实现了某个接口，那么 Spring AOP 会使用 <strong>JDK Proxy</strong>，去创建代理对象，而对于没有实现接口的对象，就无法使用 JDK Proxy 去进行代理了，这时候 Spring AOP 会使用 <strong>Cglib</strong> 生成一个被代理对象的子类来作为代理，如下图所示：</p><p><img src="https://cdn.jsdelivr.net/gh/davidliuk/images@master/blog/230ae587a322d6e4d09510161987d346.jpeg" alt="SpringAOPProcess" loading="lazy"></p><p>AOP 切面编程设计到的一些专业术语：</p><table><thead><tr><th style="text-align:left;">术语</th><th style="text-align:center;">含义</th></tr></thead><tbody><tr><td style="text-align:left;">目标(Target)</td><td style="text-align:center;">被通知的对象</td></tr><tr><td style="text-align:left;">代理(Proxy)</td><td style="text-align:center;">向目标对象应用通知之后创建的代理对象</td></tr><tr><td style="text-align:left;">连接点(JoinPoint)</td><td style="text-align:center;">目标对象的所属类中，定义的所有方法均为连接点</td></tr><tr><td style="text-align:left;">切入点(Pointcut)</td><td style="text-align:center;">被切面拦截 / 增强的连接点（切入点一定是连接点，连接点不一定是切入点）</td></tr><tr><td style="text-align:left;">通知(Advice)</td><td style="text-align:center;">增强的逻辑 / 代码，也即拦截到目标对象的连接点之后要做的事情</td></tr><tr><td style="text-align:left;">切面(Aspect)</td><td style="text-align:center;">切入点(Pointcut)+通知(Advice)</td></tr><tr><td style="text-align:left;">织入(Weaving)</td><td style="text-align:center;">将通知应用到目标对象，进而生成代理对象的过程动作</td></tr></tbody></table>',21),l=[n];function d(s,p){return e(),r("div",null,l)}const c=t(i,[["render",d],["__file","概念.html.vue"]]);export{c as default};
