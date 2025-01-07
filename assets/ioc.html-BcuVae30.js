import{_ as o}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as n,d as a,o as i}from"./app-ChU1gMRF.js";const t={};function c(l,e){return i(),n("div",null,e[0]||(e[0]=[a('<h1 id="ioc" tabindex="-1"><a class="header-anchor" href="#ioc"><span>IoC</span></a></h1><h2 id="ioc-思想" tabindex="-1"><a class="header-anchor" href="#ioc-思想"><span>IoC 思想</span></a></h2><h3 id="spring-ioc-的了解" tabindex="-1"><a class="header-anchor" href="#spring-ioc-的了解"><span>Spring IoC 的了解</span></a></h3><p><strong>IoC（Inversion of Control:控制反转）</strong> 是一种设计思想，而不是一个具体的技术实现。IoC 的思想就是将原本在程序中手动创建对象的控制权，交由 Spring 框架来管理。不过， IoC 并非 Spring 特有，在其他语言中也有应用。<strong>IoC 容器是 Spring 用来实现 IoC 的载体， IoC 容器实际上就是个 Map（key，value）,Map 中存放的是各种对象。</strong></p><p>IoC 最常见以及最合理的实现方式叫做依赖注入（Dependency Injection，简称 DI）。</p><p><strong>为什么叫控制反转？</strong></p><ul><li><strong>控制</strong> ：指的是对象创建（实例化、管理）的权力</li><li><strong>反转</strong> ：控制权交给外部环境（Spring 框架、IoC 容器）</li></ul><p><img src="https://cdn.jsdelivr.net/gh/davidliuk/images@master/blog/frc-365faceb5697f04f31399937c059c162.png" alt="img" loading="lazy"></p><h2 id="bean" tabindex="-1"><a class="header-anchor" href="#bean"><span>Bean</span></a></h2><h3 id="将一个类声明为-bean-的注解有哪些" tabindex="-1"><a class="header-anchor" href="#将一个类声明为-bean-的注解有哪些"><span>将一个类声明为 Bean 的注解有哪些?</span></a></h3><ul><li><code>@Component</code> ：通用的注解，可标注任意类为 <code>Spring</code> 组件。如果一个 Bean 不知道属于哪个层，可以使用<code>@Component</code> 注解标注。</li><li><code>@Repository</code> : 对应持久层即 Dao 层，主要用于数据库相关操作。</li><li><code>@Service</code> : 对应服务层，主要涉及一些复杂的逻辑，需要用到 Dao 层。</li><li><code>@Controller</code> : 对应 Spring MVC 控制层，主要用户接受用户请求并调用 Service 层返回数据给前端页面。</li></ul><h3 id="component-和-bean-的区别是什么" tabindex="-1"><a class="header-anchor" href="#component-和-bean-的区别是什么"><span>@Component 和 @Bean 的区别是什么？</span></a></h3><ul><li><p><code>@Component</code> 注解作用于类，而<code>@Bean</code>注解作用于方法。</p></li><li><p><code>@Component</code>通常是通过类路径扫描来自动侦测以及自动装配到 Spring 容器中（我们可以使用 <code>@ComponentScan</code> 注解定义要扫描的路径从中找出标识了需要装配的类自动装配到 Spring 的 bean 容器中）。<code>@Bean</code> 注解通常是我们在标有该注解的方法中定义产生这个 bean,<code>@Bean</code>告诉了 Spring 这是某个类的实例，当我需要用它的时候还给我。</p></li><li><p><code>@Bean</code> 注解比 <code>@Component</code> 注解的自定义性更强，而且很多地方我们只能通过 <code>@Bean</code> 注解来注册 bean。比如当我们引用第三方库中的类需要装配到 <code>Spring</code>容器时，则只能通过 <code>@Bean</code>来实现。</p><blockquote><p>通常是某个框架的 Config 类里面生命待注入的内容</p></blockquote></li></ul><h3 id="注入-bean-的注解有哪些" tabindex="-1"><a class="header-anchor" href="#注入-bean-的注解有哪些"><span>注入 Bean 的注解有哪些？</span></a></h3><ul><li><code>@Component</code></li><li><code>@Resource</code></li><li><code>@Inject</code></li></ul><p><code>Autowired</code> 属于 Spring 内置的注解，默认的注入方式为<code>byType</code>（根据类型进行匹配），也就是说会优先根据接口类型去匹配并注入 Bean （接口的实现类）。</p><p><strong>这会有什么问题呢？</strong> 当一个接口存在多个实现类的话，<code>byType</code>这种方式就无法正确注入对象了，因为这个时候 Spring 会同时找到多个满足条件的选择，默认情况下它自己不知道选择哪一个。</p><p>对于<code>Autowired</code> ，还是建议通过结合 <code>@Qualifier</code> 注解来显式指定名称而不是依赖变量的名称。</p><p>这种情况下，注入方式会变为 <code>byName</code>（根据名称进行匹配），这个名称通常就是类名（首字母小写）。就比如说下面代码中的 <code>smsService</code> 就是我这里所说的名称，这样应该比较好理解了吧。</p><p>简单总结一下：</p><ul><li><code>@Autowired</code> 是 Spring 提供的注解，<code>@Resource</code> 是 JDK 提供的注解。</li><li><code>Autowired</code> 默认的注入方式为<code>byType</code>（根据类型进行匹配），<code>@Resource</code>默认注入方式为 <code>byName</code>（根据名称进行匹配）。</li><li>当一个接口存在多个实现类的情况下，<code>@Autowired</code> 和<code>@Resource</code>都需要通过名称才能正确匹配到对应的 Bean。<code>Autowired</code> 可以通过 <code>@Qualifier</code> 注解来显式指定名称，<code>@Resource</code>可以通过 <code>name</code> 属性来显式指定名称。</li></ul><h3 id="单例-bean-的线程安全问题了解吗" tabindex="-1"><a class="header-anchor" href="#单例-bean-的线程安全问题了解吗"><span>单例 Bean 的线程安全问题了解吗？</span></a></h3><p>大部分时候我们并没有在项目中使用多线程，所以很少有人会关注这个问题。单例 Bean 存在线程问题，主要是因为当多个线程操作同一个对象的时候是存在资源竞争的。</p><p>常见的有两种解决办法：</p><ol><li>在 Bean 中尽量避免定义可变的成员变量。</li><li>在类中定义一个 <code>ThreadLocal</code> 成员变量，将需要的可变成员变量保存在 <code>ThreadLocal</code> 中（推荐的一种方式）。</li></ol><p>不过，大部分 Bean 实际都是无状态（没有实例变量）的（比如 Dao、Service），这种情况下， Bean 是线程安全的。</p><h3 id="源码" tabindex="-1"><a class="header-anchor" href="#源码"><span>源码</span></a></h3><p>工厂模式里面，单例注册表（懒加载）</p><p><a href="https://www.cnblogs.com/nickup/p/9800120.html?ivk_sa=1024320u" target="_blank" rel="noopener noreferrer">https://www.cnblogs.com/nickup/p/9800120.html?ivk_sa=1024320u</a></p><p><a href="https://www.likecs.com/show-308120142.html" target="_blank" rel="noopener noreferrer">https://www.likecs.com/show-308120142.html</a></p><h2 id="自动装配" tabindex="-1"><a class="header-anchor" href="#自动装配"><span>自动装配</span></a></h2><p>在 Spring 框架中共有 5 种自动装配，让我们逐一分析。</p><ol><li>no:这是 Spring 框架的默认设置，在该设置下自动装配是关闭的，开发者需要自行在 bean 定义 中用标签明确的设置依赖关系。</li><li>byName:该选项可以根据 bean 名称设置依赖关系。当向一个 bean 中自动装配一个属性时，容 器将根据 bean 的名称自动在在配置文件中查询一个匹配的 bean。如果找到的话，就装配这个属 性，如果没找到的话就报错。</li><li>byType:该选项可以根据 bean 类型设置依赖关系。当向一个 bean 中自动装配一个属性时，容器 将根据 bean 的类型自动在在配置文件中查询一个匹配的 bean。如果找到的话，就装配这个属性， 如果没找到的话就报错。</li><li>constructor:造器的自动装配和 byType 模式类似，但是仅仅适用于与有构造器相同参数的 bean，如果在容器中没有找到与构造器参数类型一致的 bean，那么将会抛出异常。</li><li>autodetect:该模式自动探测使用构造器自动装配或者 byType 自动装配。首先，首先会尝试找合 适的带参数的构造器，如果找到的话就是用构造器自动装配，如果在 bean 内部没有找到相应的构 造器或者是无参构造器，容器就会自动选择 byTpe 的自动装配方式。</li></ol><h2 id="ioc-容器" tabindex="-1"><a class="header-anchor" href="#ioc-容器"><span>IoC 容器</span></a></h2><h3 id="beanfactory-和-applicationcontext-的区别" tabindex="-1"><a class="header-anchor" href="#beanfactory-和-applicationcontext-的区别"><span>BeanFactory 和 ApplicationContext 的区别</span></a></h3><p>BeanFactory 接口提供了一个先进的配置机制，使得任何类型的对象的配置成为可能。 ApplicationContex 接口对 BeanFactory(是一个子接口)进行了扩展，在 BeanFactory 的基础上添加了其他功能，比如与 Spring 的 AOP 更容易集成，也提供了处理 message resource 的机制(用于国际化)、事件传播以及应用层的特别配置，比如针对 Web 应用的 WebApplicationContext。</p><p>org.springframework.beans.factory.BeanFactory 是 Spring IoC 容器的具体实现， 用来包装和管理前面提到的各种 bean。BeanFactory 接口是 Spring IoC 容器的核心接口。</p><p>BeanFactory 可以理解为含有 bean 集合的工厂类。BeanFactory 包含了种 bean 的定义，以便在接收到客户端请求时将对应的 bean 实例化。</p><p>BeanFactory 还能在实例化对象的时生成协作类之间的关系。此举将 bean 自身与 bean 客户端的配置中解放出来。BeanFactory 还包含 了 bean 生命周期的控制，调用客户端的初始化方法 (initialization methods)和销毁方法(destruction methods)。</p><p>从表面上看，application context 如同 bean factory 一样具有 bean 定义、bean 关联关系的设 置，根据请求分发 bean 的功能。但 applicationcontext 在此基础上还提供了其他的功能。</p><ol><li>提供了支持国际化的文本消息</li><li>统一的资源文件读取方式</li><li>已在监听器中注册的 bean 的事件，Event</li></ol><p>Spring 的核心容器有两种：</p><ol><li><p>BeanFactory：IOC 容器基本实现，是 Spring 内部的使用接口，不提供开发人员进行使用加载配置文件时候不会创建对象，在获取对象（使用）才去创建对象</p></li><li><p>ApplicationContext(这个接口经常使用)：BeanFactory 接口的子接口，提供更多更强大的功能，一般由开发人员进行使用，加载配置文件时候就会把在配置文件对象进行创建。所以我们着重了解下这个接口。</p><p>而创建 ApplicationContext 接口实例通常采用两种方法，</p><ul><li><p>一个是通过 ClassPathXmlApplicationContext 创建</p></li><li><p>一个则是通 FileSystemXmlApplicationContext 创建</p><p>这种方法如果在参数中写的不是绝对路径，那么调用的时候会默认绝对路径来找，这会导致程序的灵活性变差，所以这个一般不推荐使用</p></li></ul></li></ol>',43)]))}const d=o(t,[["render",c],["__file","ioc.html.vue"]]),s=JSON.parse(`{"path":"/se/lang/java/framework/spring/core/ioc/ioc.html","title":"IoC","lang":"en-US","frontmatter":{"description":"IoC IoC 思想 Spring IoC 的了解 IoC（Inversion of Control:控制反转） 是一种设计思想，而不是一个具体的技术实现。IoC 的思想就是将原本在程序中手动创建对象的控制权，交由 Spring 框架来管理。不过， IoC 并非 Spring 特有，在其他语言中也有应用。IoC 容器是 Spring 用来实现 IoC ...","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/se/lang/java/framework/spring/core/ioc/ioc.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"IoC"}],["meta",{"property":"og:description","content":"IoC IoC 思想 Spring IoC 的了解 IoC（Inversion of Control:控制反转） 是一种设计思想，而不是一个具体的技术实现。IoC 的思想就是将原本在程序中手动创建对象的控制权，交由 Spring 框架来管理。不过， IoC 并非 Spring 特有，在其他语言中也有应用。IoC 容器是 Spring 用来实现 IoC ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/davidliuk/images@master/blog/frc-365faceb5697f04f31399937c059c162.png"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-11-09T18:37:53.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-09T18:37:53.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"IoC\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/davidliuk/images@master/blog/frc-365faceb5697f04f31399937c059c162.png\\"],\\"dateModified\\":\\"2024-11-09T18:37:53.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[{"level":2,"title":"IoC 思想","slug":"ioc-思想","link":"#ioc-思想","children":[{"level":3,"title":"Spring IoC 的了解","slug":"spring-ioc-的了解","link":"#spring-ioc-的了解","children":[]}]},{"level":2,"title":"Bean","slug":"bean","link":"#bean","children":[{"level":3,"title":"将一个类声明为 Bean 的注解有哪些?","slug":"将一个类声明为-bean-的注解有哪些","link":"#将一个类声明为-bean-的注解有哪些","children":[]},{"level":3,"title":"@Component 和 @Bean 的区别是什么？","slug":"component-和-bean-的区别是什么","link":"#component-和-bean-的区别是什么","children":[]},{"level":3,"title":"注入 Bean 的注解有哪些？","slug":"注入-bean-的注解有哪些","link":"#注入-bean-的注解有哪些","children":[]},{"level":3,"title":"单例 Bean 的线程安全问题了解吗？","slug":"单例-bean-的线程安全问题了解吗","link":"#单例-bean-的线程安全问题了解吗","children":[]},{"level":3,"title":"源码","slug":"源码","link":"#源码","children":[]}]},{"level":2,"title":"自动装配","slug":"自动装配","link":"#自动装配","children":[]},{"level":2,"title":"IoC 容器","slug":"ioc-容器","link":"#ioc-容器","children":[{"level":3,"title":"BeanFactory 和 ApplicationContext 的区别","slug":"beanfactory-和-applicationcontext-的区别","link":"#beanfactory-和-applicationcontext-的区别","children":[]}]}],"git":{"createdTime":1678024743000,"updatedTime":1731177473000,"contributors":[{"name":"刘大维","email":"davidliu@liudaweideMacBook-Pro-3.local","commits":1}]},"readingTime":{"minutes":7.02,"words":2105},"filePathRelative":"se/lang/java/framework/spring/core/ioc/ioc.md","localizedDate":"March 5, 2023","excerpt":"\\n<h2>IoC 思想</h2>\\n<h3>Spring IoC 的了解</h3>\\n<p><strong>IoC（Inversion of Control:控制反转）</strong> 是一种设计思想，而不是一个具体的技术实现。IoC 的思想就是将原本在程序中手动创建对象的控制权，交由 Spring 框架来管理。不过， IoC 并非 Spring 特有，在其他语言中也有应用。<strong>IoC 容器是 Spring 用来实现 IoC 的载体， IoC 容器实际上就是个 Map（key，value）,Map 中存放的是各种对象。</strong></p>\\n<p>IoC 最常见以及最合理的实现方式叫做依赖注入（Dependency Injection，简称 DI）。</p>","autoDesc":true}`);export{d as comp,s as data};
