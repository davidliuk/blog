import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as n,d as p,o as r}from"./app-ChU1gMRF.js";const i={};function a(o,t){return r(),n("div",null,t[0]||(t[0]=[p('<h2 id="循环依赖" tabindex="-1"><a class="header-anchor" href="#循环依赖"><span>循环依赖</span></a></h2><p>Spring 通过三级缓存解决循环依赖问题，具体过程如下：</p><ol><li><p>创建对象：当 Spring 容器创建一个对象时，会将该对象放入一级缓存中。</p></li><li><p>属性注入：当 Spring 容器对该对象进行属性注入时，如果发现该对象依赖于另一个对象，会先创建另一个对象并放入一级缓存中，然后将该对象放入二级缓存中。</p></li><li><p>循环依赖：如果发现另一个对象也依赖于该对象，会从二级缓存中获取该对象并注入到另一个对象中，然后将另一个对象放入二级缓存中。</p></li><li><p>初始化：当所有对象的属性都注入完成后，会按照依赖关系依次初始化对象，并将对象放入三级缓存中。</p></li><li><p>返回对象：当所有对象都初始化完成后，会从三级缓存中获取需要返回的对象，并将三级缓存清空。</p></li></ol><p>Spring 只能解决单例对象之间的循环依赖问题，原型对象之间的循环依赖无法解决。此外，循环依赖会增加对象的创建和销毁时间，因此应该尽量避免循环依赖的出现。</p><p>三级缓存</p><ul><li><p>第一级缓存〈也叫单例池）singletonObjects:存放已经经历了完整生命周期的 Bean 对象</p></li><li><p>第二级缓存: earlySingletonObjects，存放早期暴露出来的 Bean 对象，Bean 的生命周期未结束（属性还未填充完整）</p></li><li><p>第三级缓存: Map&lt;String, ObiectFactory&lt;?&gt;&gt; singletonFactories，存放可以生成 Bean 的工厂</p></li><li><p>getSingleton：希望从容器里面获得单例的 bean，没有的话</p></li><li><p>doCreateBean: 没有就创建 bean</p></li><li><p>populateBean: 创建完了以后，要填充属性</p></li><li><p>addSingleton: 填充完了以后，再添加到容器进行使用</p></li></ul><p><strong>4，具体说明</strong></p><ul><li>A 创建过程中需要 B，于是<strong>A 将自己放到三级缓存</strong>里面，去<strong>实例化 B</strong></li><li>B 实例化的时候发现需要 A，于是 B 先查一级缓存，没有，再查二级缓存，还是没有，再查三级缓存，找到了 A 然后把三级缓存里面的这个<strong>A 放到二级缓存里面，并删除三级缓存里面的 A</strong></li><li><strong>B 顺利初始化完毕</strong>，将自己放到一级缓存里面（<strong>此时 B 里面的 A 依然是创建中状态</strong>）然后回来接着创建 A，此时 B 已经创建结束，直接从一级缓存里面拿到 B，然后完成创建，并<strong>将 A 放到一级缓存</strong>中。</li></ul><p>一级缓存里存的是成品对象，实例化和初始化都完成了，我们的应用中使用的对象就是一级缓存中的</p><p>二级缓存中存的是半成品，用来解决对象创建过程中的循环依赖问题</p><p>三级缓存中存的是 ObjectFactory&lt;?&gt; 类型的 lambda 表达式，用于处理存在 AOP 时的循环依赖问题</p><p><a href="https://www.cnblogs.com/javastack/p/15656347.html" target="_blank" rel="noopener noreferrer">https://www.cnblogs.com/javastack/p/15656347.html</a></p><p><strong>1、三级缓存各自的作用</strong></p><p>第一级缓存存的是对外暴露的对象，也就是我们应用需要用到的</p><p>第二级缓存的作用是为了处理循环依赖的对象创建问题，里面存的是半成品对象或半成品对象的代理对象</p><p>第三级缓存的作用处理存在 AOP + 循环依赖的对象创建问题，能将代理对象提前创建</p><p><strong>2、Spring 为什么要引入第三级缓存</strong></p><p>严格来讲，第三级缓存并非缺它不可，因为可以提前创建代理对象</p><p>提前创建代理对象只是会节省那么一丢丢内存空间，并不会带来性能上的提升，但是会破环 Spring 的设计原则</p><p>Spring 的设计原则是尽可能保证普通对象创建完成之后，再生成其 AOP 代理（尽可能延迟代理对象的生成）</p><p>所以 Spring 用了第三级缓存，既维持了设计原则，又处理了循环依赖；牺牲那么一丢丢内存空间是愿意接受的.</p><p>判断是否依赖的对象也在创建，如果是才提前对该对象进行 AOP，并将 AOP 代理对象存放起来，后续该对象在初始化后，判断如果对象已被代理过，是则不再进行 AOP。</p><p>于是<strong>三级缓存</strong>：<strong>singletonFactories</strong>派上用场**。<strong>就像其名一样，singletonFactories 是一个单例工厂。如果我们打开 Spring 源码，可以看到它的值存的是一个 beanName → lambda 表达式，这个</strong>lambda 表达式可能用到也可能用不到**。</p><ul><li><strong>何时存入 lambda 表达式？</strong></li></ul><p>存入步骤是在创建完原始对象之后执行的，Spring 中是在 AbstractAutowireCapableBeanFactory.doCreateBean() → getSingleTon() 中进行存储。</p><p><a href="https://www.jianshu.com/p/abe87172c0d4" target="_blank" rel="noopener noreferrer">https://www.jianshu.com/p/abe87172c0d4</a></p>',26)]))}const g=e(i,[["render",a],["__file","循环依赖.html.vue"]]),c=JSON.parse(`{"path":"/se/lang/java/framework/spring/core/beans/%E5%BE%AA%E7%8E%AF%E4%BE%9D%E8%B5%96.html","title":"","lang":"en-US","frontmatter":{"description":"循环依赖 Spring 通过三级缓存解决循环依赖问题，具体过程如下： 创建对象：当 Spring 容器创建一个对象时，会将该对象放入一级缓存中。 属性注入：当 Spring 容器对该对象进行属性注入时，如果发现该对象依赖于另一个对象，会先创建另一个对象并放入一级缓存中，然后将该对象放入二级缓存中。 循环依赖：如果发现另一个对象也依赖于该对象，会从二级缓...","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/se/lang/java/framework/spring/core/beans/%E5%BE%AA%E7%8E%AF%E4%BE%9D%E8%B5%96.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:description","content":"循环依赖 Spring 通过三级缓存解决循环依赖问题，具体过程如下： 创建对象：当 Spring 容器创建一个对象时，会将该对象放入一级缓存中。 属性注入：当 Spring 容器对该对象进行属性注入时，如果发现该对象依赖于另一个对象，会先创建另一个对象并放入一级缓存中，然后将该对象放入二级缓存中。 循环依赖：如果发现另一个对象也依赖于该对象，会从二级缓..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-11-09T18:37:53.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-09T18:37:53.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-09T18:37:53.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[{"level":2,"title":"循环依赖","slug":"循环依赖","link":"#循环依赖","children":[]}],"git":{"createdTime":1678024743000,"updatedTime":1731177473000,"contributors":[{"name":"刘大维","email":"davidliu@liudaweideMacBook-Pro-3.local","commits":1}]},"readingTime":{"minutes":4.05,"words":1215},"filePathRelative":"se/lang/java/framework/spring/core/beans/循环依赖.md","localizedDate":"March 5, 2023","excerpt":"<h2>循环依赖</h2>\\n<p>Spring 通过三级缓存解决循环依赖问题，具体过程如下：</p>\\n<ol>\\n<li>\\n<p>创建对象：当 Spring 容器创建一个对象时，会将该对象放入一级缓存中。</p>\\n</li>\\n<li>\\n<p>属性注入：当 Spring 容器对该对象进行属性注入时，如果发现该对象依赖于另一个对象，会先创建另一个对象并放入一级缓存中，然后将该对象放入二级缓存中。</p>\\n</li>\\n<li>\\n<p>循环依赖：如果发现另一个对象也依赖于该对象，会从二级缓存中获取该对象并注入到另一个对象中，然后将另一个对象放入二级缓存中。</p>\\n</li>\\n<li>\\n<p>初始化：当所有对象的属性都注入完成后，会按照依赖关系依次初始化对象，并将对象放入三级缓存中。</p>\\n</li>\\n<li>\\n<p>返回对象：当所有对象都初始化完成后，会从三级缓存中获取需要返回的对象，并将三级缓存清空。</p>\\n</li>\\n</ol>","autoDesc":true}`);export{g as comp,c as data};
