import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,d as i,o as t}from"./app-PqS9YW_3.js";const l={};function r(o,e){return t(),a("div",null,e[0]||(e[0]=[i('<h1 id="生命周期" tabindex="-1"><a class="header-anchor" href="#生命周期"><span>生命周期</span></a></h1><h2 id="三个阶段" tabindex="-1"><a class="header-anchor" href="#三个阶段"><span>三个阶段</span></a></h2><p><img src="https://cdn.jsdelivr.net/gh/davidliuk/images@master/blog/截屏2023-04-05 22.11.05.png" alt="截屏2023-04-05 22.11.05" loading="lazy"></p><p>Spring Bean 的生命周期是从 Bean 实例化之后，即通过反射创建出对象之后，到 Bean 成为一个完整对象，最终存储到单例池中，这个过程被称为 Spring Bean 的生命周期。Spring Bean 的生命周期大体上分为三个阶段：</p><ul><li>Bean 的实例化阶段：Spring 框架会取出 BeanDefinition 的信息进行判断当前 Bean 的范围是否是 singleton 的是否不是延迟加载的，是否不是 FactoryBean 等，最终将一个普通的 singleton 的 Bean 通过反射进行实例化：</li><li><strong>Bean 的初始化阶段</strong>：Bean 创建之后还仅仅是个&quot;半成品&quot;，还需要对 Bean 实例的属性进行填充、执行一些 Aware 接口方法、执行 BeanPostProcessor,方法、执行 InitializingBean 接口的初始化方法、执行自定义初始化 init 方法等。该阶段是 Spring 最具技术含量和复杂度的阶段，Aop 增强功能，后面要学习的 Springl 的注解功能等、spring 高频面试题 Bean 的循环引用问题都是在这个阶段体现的：</li><li>Bean 的完成阶段：经过初始化阶段，Bean 就成为了一个完整的 Spring Bean,被存储到单例池 singletonObjects 中去了，即完成了 Spring Bean 的整个生命周期。</li><li>销毁阶段</li></ul><h2 id="实例化阶段" tabindex="-1"><a class="header-anchor" href="#实例化阶段"><span>实例化阶段</span></a></h2><p>BeanDefinition 对象，封装 bean 的基本信息，有一个 beanDefinitionMap 存这些 BeanDefinition。</p><p>BeanFactory 存两个东西：</p><ol><li><p>BeanDefinition 对象</p></li><li><p>singletonObjects 单例池（最终的对象）</p><p>在 DefaultSingletonBeanRegistry 类中</p></li></ol><p>步骤：</p><ul><li><p>加载 xml 配置文件，解析获取配置中的每个<code>&lt;bean&gt;</code>的信息，封装成一个个的<code>BeanDefinition</code>对象。</p></li><li><p>将<code>BeanDefinition</code>存储在一个名为<code>beanDefinitionMap</code>的<code>Map&lt;String,BeanDefinition&gt;</code>中；</p><p>key 是 bean 的 id</p></li><li><p><code>ApplicationContext</code>底层遍历<code>beanDefinitionMap</code>，创建 Bean 实例对象。</p><p>根据 BeanDefinition 中的全限定类名反射创建。</p></li><li><p>创建好的 Bean 实例对象，被存储到一个名为<code>singletonObjects</code>的<code>Map&lt;String,Object&gt;</code>中。</p><p>key 是 bean 的全限定类名</p></li><li><p>当执行<code>applicationContext.getBean(beanName)</code>时，从<code>singletonObjects</code>去匹配 Bean 实例返回。</p></li></ul><h2 id="初始化阶段" tabindex="-1"><a class="header-anchor" href="#初始化阶段"><span>初始化阶段</span></a></h2><p>Spring Bean 的初始化过程涉及如下几个过程：</p><ul><li>Bean 实例的属性填充</li><li>Aware 接口属性注入</li><li>BeanPostProcessor 的 before() 方法回调</li><li>InitializingBean 接口的初始化方法回调</li><li>自定义初始化方法 init 回调</li><li>BeanPostProcessor 的 after() 方法回调</li></ul><p>属性注入</p><ul><li>普通属性，反射调用 set 方法</li><li>注入单向对象引用，如果容器里有，则直接注入，否则先生成这个对象，再注入。</li><li>注入双向对象引用，涉及到循环引用问题</li></ul><h3 id="循环依赖" tabindex="-1"><a class="header-anchor" href="#循环依赖"><span>循环依赖</span></a></h3><p>需要把半成品先存起来注入</p><p>三级缓存存储不同状态的 Bean</p><ul><li><p>singletonObjects: 完整 bean</p></li><li><p>earlySingletonObjects 二级缓存，还没创建完毕就存了，已经被引用的半成品。</p></li><li><p>singletonFactories: 三级缓存，单例工厂，未被引用的半成品</p></li><li><p>singletonObjects：单例池，也称之为一级缓存。</p></li><li><p>earlySingletonObjects：未完成初始化的单例池，也称之为二级缓存 。存已经被引用的半成品。</p></li><li><p>singletonFactories：三级缓存，实际上存放“创建对象的 lambda 表达式”。存未被引用的半成品。</p><p>如果是普通对象直接返回，如果需要 AOP 则执行 lambda 表达式创建一个代理对象。</p><ul><li>原始对象：未经过完整生命周期的 bean。（半成品）</li><li>代理对象：如果 Spring 扫描时发现某个对象需要切面，Spring 最终会经过 AOP 为其创建一个代理对象，并放入单例池中。）</li></ul></li></ul><h3 id="解决-spring-循环依赖问题只用一二级缓存行不行" tabindex="-1"><a class="header-anchor" href="#解决-spring-循环依赖问题只用一二级缓存行不行"><span>解决 Spring 循环依赖问题只用一二级缓存行不行？</span></a></h3><p>**场景：**如果 A 的原始对象注入给 B 的属性之后，A 的原始对象进行了 AOP（按照 bean 的生命周期，AOP 是在初始化后在后置处理器中处理的），此时会产生另外一个对象-代理对象，这个对象最终会被存放到单例池 singletonObjects 中，也就是说，对于 A 而言，它最终的 bean 对象实际上应该是 AOP 之后的代理对象而不是原来那个原始对象，但 B 拿的是原始对象，这就产生冲突：<strong>B 依赖的 A 和最终的 A 不是同一个对象。</strong></p><h3 id="那么如何解决-b-依赖的-a-和最终的-a-不是同一个对象这种冲突" tabindex="-1"><a class="header-anchor" href="#那么如何解决-b-依赖的-a-和最终的-a-不是同一个对象这种冲突"><span><strong>那么如何解决 B 依赖的 A 和最终的 A 不是同一个对象这种冲突？</strong></span></a></h3><p>方式 1：不管有没有循环依赖问题，统一在初始化前 AOP？这种做法明显破坏了 Spring 所设定的 bean 生命周期，如果为了解决循环依赖问题去破坏 bean 生命周期的设计原则，那么得不偿失。</p><p>方式 2：判断是否依赖的对象也在创建，如果是才提前对该对象进行 AOP，并将 AOP 代理对象存放起来，后续该对象在初始化后，判断如果对象已被代理过，是则不再进行 AOP。</p><p>对比发现显然第二种方式更加合适，Spring 也确实采用了第二种方式来解决冲突，于是<strong>三级缓存</strong>：<strong>singletonFactories</strong>派上用场**。<strong>就像其名一样，singletonFactories 是一个单例工厂。如果我们打开 Spring 源码，可以看到它的值存的是一个 beanName → lambda 表达式，这个</strong>lambda 表达式可能用到也可能用不到**。</p><ul><li><strong>何时存入 lambda 表达式？</strong></li></ul><p>存入步骤是在创建完原始对象之后执行的，Spring 中是在 AbstractAutowireCapableBeanFactory.doCreateBean() → getSingleton() 中进行存储。</p><ul><li><strong>什么时候执行 lambda 表达式？</strong></li></ul><p>获取 bean 的逻辑，走的是 DefaultSingletonBeanRegistry.getBean()，当 getBean 调用到 getSingleton() 时，会进入下面代码。从代码可以看出，只有当 1 级、2 级缓存拿不到 bean 时，且存在循环依赖问题（通过代码 isSingletonCurrentlyInCreation(beanName)判断）时，才会去执行 lambda 表达式，获取真正的 bean（普通原始对象或代理对象），并将其放入二级缓存 earlySingletonObjects 中，同时删除三级缓存中的引用（注意：此处因为需要保证原子性，前面对 singletonObjects 加了独占锁）。</p><ul><li><strong>lambda 中的逻辑是啥？</strong></li></ul><p>同样是在 AbstractAutowireCapableBeanFactory 类中，可以从 getEarlyBeanReference 方法中看到，最终 lambda 表达式执行的逻辑，就是去遍历所有后置处理器，然后在 SmartInstantiationAwareBeanPostProcessor 的实现类中的 getEarlyBeanReference 方法中去创建 bean，而创建的 bean 可能是普通原始对象 （在 InstantiationAwareBeanPostProcessorAdapter 中，直接返回当前 bean），也可能是代理对象（也就是<strong>提前 AOP</strong>，在 AbstractAutoProxyCreator 中通过 jdk 动态代理或 cglib 创建），需要注意的是无论是普通对象还是代理对象，都不是经过完整生命周期的最终对象，因此在执行 lambda 表达式后不能将返回的 bean 直接放入一级缓存，即单例池 singletonObjects 中，而是要先放到二级缓存提前暴露给其他 bean，只有经过所有后置处理器 BeanPostProcesssor 后才会真正放入 singletonObjects 中。</p><ul><li><strong>如果 bean 被提前 AOP，初始化后的 AOP 逻辑中，要如何判断不需再进行 AOP？</strong></li></ul><p>当 bean 初始化后，后置处理器 AbstractAutoProxyCreator 中的 postProcessAfterInitialization 方法会被调用，其中存在这么一段逻辑，即判断 earlyProxyReferences（又是一个 cache，但一般不会把它计入三级缓存中）中是否已有该 cache，有则说明已经进行过 AOP，那么就不会再次进行 AOP。（wrapIfNecessary 中还有更多细节的判断是否需要 AOP，此处相当于提前截断，不需要再进行细节判断了）</p><h3 id="什么时候下-spring-解决不了循环依赖" tabindex="-1"><a class="header-anchor" href="#什么时候下-spring-解决不了循环依赖"><span>什么时候下 Spring 解决不了循环依赖？</span></a></h3><ul><li>情况一：使用构造器注入</li></ul><p>Spring 在创建原始对象的原理也是调用构造器进行创建，如果使用构造器进行注入，那么 Spring 自身无法解决循环依赖问题，此时加入@Lazy 注解即可，原理是对于 Lazy 修饰的对象，Spring 会先创建一个代理对象给属性赋值，那么依赖方就可以正常进行实例化了。</p><ul><li>情况二：循环依赖且用@Async 注解修饰方法</li></ul><p>Spring 在扫描 bean、发现某个类方法被@Async 修饰时，会通过后置处理器 AsyncAnnotationBeanPostProcessor 生成代理对象，而该后置处理器的顺序比处理 AOP 的后置处理器还靠后，因此仍然会导致 Spring 处理不了循环依赖。同理，可以使用@Lazy 注解解决该问题。</p><p><a href="https://www.jianshu.com/p/abe87172c0d4" target="_blank" rel="noopener noreferrer">https://www.jianshu.com/p/abe87172c0d4</a></p>',40)]))}const g=n(l,[["render",r],["__file","生命周期.html.vue"]]),c=JSON.parse(`{"path":"/se/lang/java/framework/spring/core/beans/%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F.html","title":"生命周期","lang":"en-US","frontmatter":{"description":"生命周期 三个阶段 截屏2023-04-05 22.11.05 Spring Bean 的生命周期是从 Bean 实例化之后，即通过反射创建出对象之后，到 Bean 成为一个完整对象，最终存储到单例池中，这个过程被称为 Spring Bean 的生命周期。Spring Bean 的生命周期大体上分为三个阶段： Bean 的实例化阶段：Spring 框架...","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/se/lang/java/framework/spring/core/beans/%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"生命周期"}],["meta",{"property":"og:description","content":"生命周期 三个阶段 截屏2023-04-05 22.11.05 Spring Bean 的生命周期是从 Bean 实例化之后，即通过反射创建出对象之后，到 Bean 成为一个完整对象，最终存储到单例池中，这个过程被称为 Spring Bean 的生命周期。Spring Bean 的生命周期大体上分为三个阶段： Bean 的实例化阶段：Spring 框架..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/davidliuk/images@master/blog/%E6%88%AA%E5%B1%8F2023-04-05%2022.11.05.png"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-11-09T18:37:53.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-09T18:37:53.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"生命周期\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/davidliuk/images@master/blog/%E6%88%AA%E5%B1%8F2023-04-05%2022.11.05.png\\"],\\"dateModified\\":\\"2024-11-09T18:37:53.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[{"level":2,"title":"三个阶段","slug":"三个阶段","link":"#三个阶段","children":[]},{"level":2,"title":"实例化阶段","slug":"实例化阶段","link":"#实例化阶段","children":[]},{"level":2,"title":"初始化阶段","slug":"初始化阶段","link":"#初始化阶段","children":[{"level":3,"title":"循环依赖","slug":"循环依赖","link":"#循环依赖","children":[]},{"level":3,"title":"解决 Spring 循环依赖问题只用一二级缓存行不行？","slug":"解决-spring-循环依赖问题只用一二级缓存行不行","link":"#解决-spring-循环依赖问题只用一二级缓存行不行","children":[]},{"level":3,"title":"那么如何解决 B 依赖的 A 和最终的 A 不是同一个对象这种冲突？","slug":"那么如何解决-b-依赖的-a-和最终的-a-不是同一个对象这种冲突","link":"#那么如何解决-b-依赖的-a-和最终的-a-不是同一个对象这种冲突","children":[]},{"level":3,"title":"什么时候下 Spring 解决不了循环依赖？","slug":"什么时候下-spring-解决不了循环依赖","link":"#什么时候下-spring-解决不了循环依赖","children":[]}]}],"git":{"createdTime":1680752829000,"updatedTime":1731177473000,"contributors":[{"name":"刘大维","email":"davidliu@liudaweideMacBook-Pro-3.local","commits":1}]},"readingTime":{"minutes":7.04,"words":2113},"filePathRelative":"se/lang/java/framework/spring/core/beans/生命周期.md","localizedDate":"April 6, 2023","excerpt":"\\n<h2>三个阶段</h2>\\n<p><img src=\\"https://cdn.jsdelivr.net/gh/davidliuk/images@master/blog/截屏2023-04-05 22.11.05.png\\" alt=\\"截屏2023-04-05 22.11.05\\" loading=\\"lazy\\"></p>\\n<p>Spring Bean 的生命周期是从 Bean 实例化之后，即通过反射创建出对象之后，到 Bean 成为一个完整对象，最终存储到单例池中，这个过程被称为 Spring Bean 的生命周期。Spring Bean 的生命周期大体上分为三个阶段：</p>\\n<ul>\\n<li>Bean 的实例化阶段：Spring 框架会取出 BeanDefinition 的信息进行判断当前 Bean 的范围是否是 singleton 的是否不是延迟加载的，是否不是 FactoryBean 等，最终将一个普通的 singleton 的 Bean 通过反射进行实例化：</li>\\n<li><strong>Bean 的初始化阶段</strong>：Bean 创建之后还仅仅是个\\"半成品\\"，还需要对 Bean 实例的属性进行填充、执行一些 Aware 接口方法、执行 BeanPostProcessor,方法、执行 InitializingBean 接口的初始化方法、执行自定义初始化 init 方法等。该阶段是 Spring 最具技术含量和复杂度的阶段，Aop 增强功能，后面要学习的 Springl 的注解功能等、spring 高频面试题 Bean 的循环引用问题都是在这个阶段体现的：</li>\\n<li>Bean 的完成阶段：经过初始化阶段，Bean 就成为了一个完整的 Spring Bean,被存储到单例池 singletonObjects 中去了，即完成了 Spring Bean 的整个生命周期。</li>\\n<li>销毁阶段</li>\\n</ul>","autoDesc":true}`);export{g as comp,c as data};
