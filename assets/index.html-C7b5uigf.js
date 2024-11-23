import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,d as s,o as e}from"./app-CrF8c6p-.js";const t={};function p(l,i){return e(),a("div",null,i[0]||(i[0]=[s(`<h1 id="spring-boot" tabindex="-1"><a class="header-anchor" href="#spring-boot"><span>Spring Boot</span></a></h1><h3 id="springbootapplication" tabindex="-1"><a class="header-anchor" href="#springbootapplication"><span>SpringBootApplication</span></a></h3><p>可以看出大概可以把 @SpringBootApplication 看作是 @Configuration、@EnableAutoConfiguration、@ComponentScan 注解的集合。根据 SpringBoot 官网，这三个注解的作用分别是：</p><ul><li>@EnableAutoConfiguration：启用 SpringBoot 的自动配置机制</li><li>@ComponentScan： 扫描被@Component (@Service,@Controller)注解的 bean，注解默认会扫描该类所在的包下所有的类。</li><li>@Configuration：允许在上下文中注册额外的 bean 或导入其他配置类</li></ul><p>@EnableAutoConfiguration 注解通过 Spring 提供的 @Import 注解导入了 AutoConfigurationImportSelector 类（@Import 注解可以导入配置类或者 Bean 到当前类中）。</p><p>AutoConfigurationImportSelector 类中 getCandidateConfigurations 方法会将所有自动配置类的信息以 List 的形式返回。这些配置信息会被 Spring 容器作 bean 来管理。</p><p>自动配置信息有了，那么自动配置还差什么呢？</p><p>@Conditional 注解。@ConditionalOnClass(指定的类必须存在于类路径下),@ConditionalOnBean(容器中是否有指定的 Bean)等等都是对@Conditional 注解的扩展。</p><p>拿 Spring Security 的自动配置举个例子:SecurityAutoConfiguration 中导入了 WebSecurityEnablerConfiguration 类，WebSecurityEnablerConfiguration 源代码如下：</p><p>WebSecurityEnablerConfiguration 类中使用@ConditionalOnBean 指定了容器中必须还有 WebSecurityConfigurerAdapter 类或其实现类。所以，一般情况下 Spring Security 配置类都会去实现 WebSecurityConfigurerAdapter，这样自动将配置就完成了。</p><h3 id="自动配置" tabindex="-1"><a class="header-anchor" href="#自动配置"><span>自动配置</span></a></h3><p>这个是因为@SpringBootApplication 注解的原因，在上一个问题中已经提到了这个注解。我们知道 @SpringBootApplication 看作是 @Configuration、@EnableAutoConfiguration、@ComponentScan 注解的集合。</p><ul><li>@EnableAutoConfiguration：启用 SpringBoot 的自动配置机制</li><li>@ComponentScan： 扫描被@Component (@Service,@Controller)注解的 bean，注解默认会扫描该类所在的包下所有的类。</li><li>@Configuration：允许在上下文中注册额外的 bean 或导入其他配置类</li></ul><p>@EnableAutoConfiguration 是启动自动配置的关键，他会 Import AutoConfigurationImportSelector，把它注入 Spring 容器</p><p>@EnableAutoConfiguration 注解通过 Spring 提供的 @Import 注解导入了 AutoConfigurationImportSelector 类（@Import 注解可以导入配置类或者 Bean 到当前类中）。</p><p>AutoConfigurationImportSelector 类中 getCandidateConfigurations 方法会将所有自动配置类的信息以 List 的形式返回。这些配置信息会被 Spring 容器作 bean 来管理。</p><p>可以看出，<code>AutoConfigurationImportSelector</code> 类实现了 <code>ImportSelector</code>接口，也就实现了这个接口中的 <code>selectImports</code>方法，该方法主要用于<strong>获取所有符合条件的类的全限定类名，这些类需要被加载到 IoC 容器中</strong>。</p><p>用于获取<code>EnableAutoConfiguration</code>注解中的 <code>exclude</code> 和 <code>excludeName</code>。</p><p>获取需要自动装配的所有配置类，读取<code>META-INF/spring.factories</code></p><h3 id="启动流程" tabindex="-1"><a class="header-anchor" href="#启动流程"><span>启动流程</span></a></h3><ol><li>从 spring.factories 配置文件中加载 EventPublishingRunListener 对象，该对象拥有 SimpleApplicationEventMulticaster 属性，即在 SpringBoot 启动过程的不同阶段用来发射内置的生命周期事件;</li><li>准备环境变量，包括系统变量，环境变量，命令行参数，默认变量，servlet 相关配置变量，随机值以及配置文件（比如 application.properties）等;</li><li>控制台打印 SpringBoot 的 bannner 标志；</li><li>根据不同类型环境创建不同类型的 applicationContext 容器，因为这里是 servlet 环境，所以创建的是 AnnotationConfigServletWebServerApplicationContext 容器对象；</li><li>从 spring.factories 配置文件中加载 FailureAnalyzers 对象,用来报告 SpringBoot 启动过程中的异常；</li><li>为刚创建的容器对象做一些初始化工作，准备一些容器属性值等，对 ApplicationContext 应用一些相关的后置处理和调用各个 ApplicationContextInitializer 的初始化方法来执行一些初始化逻辑等；</li><li>刷新容器，这一步至关重要。比如调用 bean factory 的后置处理器，注册 BeanPostProcessor 后置处理器，初始化事件广播器且广播事件，初始化剩下的单例 bean 和 SpringBoot 创建内嵌的 Tomcat 服务器等等重要且复杂的逻辑都在这里实现，主要步骤可见代码的注释，关于这里的逻辑会在以后的 spring 源码分析专题详细分析；</li><li>执行刷新容器后的后置处理逻辑，注意这里为空方法；</li><li>调用 ApplicationRunner 和 CommandLineRunner 的 run 方法，我们实现这两个接口可以在 spring 容器启动后需要的一些东西比如加载一些业务数据等;</li><li>报告启动异常，即若启动过程中抛出异常，此时用 FailureAnalyzers 来报告异常;</li><li>最终返回容器对象，这里调用方法没有声明对象来接收。</li></ol><p><a href="https://juejin.cn/post/7035910505810100255" target="_blank" rel="noopener noreferrer">spring boot 启动流程分析</a></p><ul><li>准备 Environment</li><li>发布事件</li><li>创建上下文、bean</li><li>刷新上下文</li><li>结束，</li></ul><h3 id="配置文件" tabindex="-1"><a class="header-anchor" href="#配置文件"><span>配置文件</span></a></h3><h4 id="格式" tabindex="-1"><a class="header-anchor" href="#格式"><span>格式</span></a></h4><p>Spring Boot 核心配置文件有以下几种格式：</p><ol><li><p>Properties 格式：以.properties 为后缀，采用键值对的方式进行配置，例如：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>server.port=8080</span></span>
<span class="line"><span>spring.datasource.url=jdbc:mysql://localhost:3306/test</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>YAML 格式：以.yml 或.yaml 为后缀，采用缩进的方式进行配置，例如：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>server:</span></span>
<span class="line"><span>  port: 8080</span></span>
<span class="line"><span>spring:</span></span>
<span class="line"><span>  datasource:</span></span>
<span class="line"><span>    url: jdbc:mysql://localhost:3306/test</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>XML 格式：以.xml 为后缀，采用标签的方式进行配置，例如：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;server&gt;</span></span>
<span class="line"><span>  &lt;port&gt;8080&lt;/port&gt;</span></span>
<span class="line"><span>&lt;/server&gt;</span></span>
<span class="line"><span>&lt;spring&gt;</span></span>
<span class="line"><span>  &lt;datasource&gt;</span></span>
<span class="line"><span>    &lt;url&gt;jdbc:mysql://localhost:3306/test&lt;/url&gt;</span></span>
<span class="line"><span>  &lt;/datasource&gt;</span></span>
<span class="line"><span>&lt;/spring&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><p>这三种格式的配置文件都可以用于 Spring Boot 应用的配置，但是它们之间有一些区别：</p><ol><li><p>Properties 格式的配置文件比较简单，适合用于简单的配置场景，例如单个属性的配置。</p></li><li><p>YAML 格式的配置文件比较灵活，可以支持复杂的数据结构，例如列表、映射等，适合用于复杂的配置场景。</p></li><li><p>XML 格式的配置文件比较冗长，但是可以支持复杂的数据结构和多语言的配置，适合用于大型项目的配置场景。</p></li></ol><p>总的来说，Spring Boot 支持 Properties、YAML 和 XML 三种格式的配置文件，每种格式都有其适用的场景和特点，需要根据实际情况选择合适的格式进行配置。</p><h4 id="种类" tabindex="-1"><a class="header-anchor" href="#种类"><span>种类</span></a></h4><p>1、SpringBoot 的核心配置文件有两个：bootstrap (.yml 或者 .properties)，application (.yml 或者 .properties)。</p><p>2、Spring Boot 中有两种上下文，一种是 bootstrap, 另外一种是 application, bootstrap 是应用程序的父上下文。两个上下文共用一个环境，它是任何 Spring 应用程序的外部属性的来源。</p><p>3、boostrap 由父 ApplicationContext 加载，比 applicaton 优先加载，都可以用来配置参数。</p><p>4、bootstrap 优于 application 加载；bootstrap 偏向系统层级的参数配置，Bootstrap 属性有高优先级，默认情况下，它们不会被本地配置覆盖。application 偏向应用层级的参数配置。</p><p>4、使用 Spring Cloud Config 配置中心时，这时需要在 bootstrap 配置文件中添加连接到配置中心的配置属性来加载外部配置中心的配置信息；<br> a、一些固定的不能被覆盖的属性<br> b、一些加密/解密的场景；</p><h4 id="spring-boot-多环境配置" tabindex="-1"><a class="header-anchor" href="#spring-boot-多环境配置"><span>Spring Boot 多环境配置</span></a></h4><p>1、Profile 是 Spring 对不同环境提供不同配置功能的支持，可以通过激活、指定参数等方式快速切换环境</p><p>2、项目开发时有开发环境、测试环境、部署环境等，可以通过 profile 配置切换</p><p>3、spring.profiles.active 的值为多个时，用逗号隔开，<a href="https://docs.spring.io/spring-boot/docs/2.1.6.RELEASE/reference/htmlsingle/#common-application-properties" target="_blank" rel="noopener noreferrer">官网文档</a>。</p><p><strong>方式 1：多 profile 文件形式</strong></p><p>1、格式：application-{profile}.properties/yml，如：application-dev.properties、application-prod.properties 等</p><p>2、Spring Boot 默认从全局配置文件 application.properties 和 application.yml 进入开始读取</p><p>3、然后在全局配置文件 application.properties 和 application.yml 激活使用 “spring.profiles.active=profile” 激活指定文件.</p><p>方式 2： <strong>yml 文档块形式</strong></p><p>1、yml 文件支持多文档块方式，同一个 yml 文件中，可以使用&quot;---&quot;来区分不同的文档，相当于不同的配置文件</p><p>2、这也是 Spring Boot 官方推荐的方式</p><div class="language-yaml line-numbers-mode" data-highlighter="shiki" data-ext="yaml" data-title="yaml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">spring</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  profiles</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    active</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">dev</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> #指定激活哪个环境配置，激活后，第一个文档内容失效;不指定时，以第一个文档为准</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">server</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  port</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">8083</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">--- </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">#&quot;---&quot;用于分隔不同的profiles（）文档块</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">spring</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  profiles</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">dev</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> #指定环境标识为&quot;devel&quot;,相当于&quot;application-{profile}.properties/yml&quot;中的profile</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">server</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  port</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">8081</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">---</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">spring</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  profiles</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">deploy</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> #指定环境标识为&quot;deploy&quot;,相当于&quot;application-{profile}.properties/yml&quot;中的profile</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">server</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  port</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">8082</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="配置文件位置与加载顺序" tabindex="-1"><a class="header-anchor" href="#配置文件位置与加载顺序"><span>配置文件位置与加载顺序</span></a></h4><blockquote><p><strong>application.properties &gt; application.yml &gt; application.yaml</strong></p></blockquote><p>1、Spring boot 启动时自动扫描以下位置的 application.properties 或者 application.yml 文件作为 Spring boot 的默认配置文件。</p><ol><li>file:./config/ -------------整个项目根目录下的 config 目录下</li><li>file:./ ---------------------整个项目根目录下</li><li>classpath:/config/---------类路径下的 config 目录下</li><li>classpath:/-----------------类路径根目录下</li></ol><p>2、优先级从上往下由高到底，高优先级的配置会覆盖低优先级的配置；Spring Boot 会从这四个位置加载所有的主配置文件，如果高优先级的内容与低优先级的内容相同，则覆盖；如果低优先级的内容在高优先级中没有，则形成互补。</p><p><img src="https://cdn.jsdelivr.net/gh/davidliuk/images@master/blog/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dhbmdteDE5OTMzMjg=,size_16,color_FFFFFF,t_70.png" alt="img" loading="lazy"></p><p>3、应用启动后，1 位置的端口会生效，控制台会输出：Tomcat started on port(s): 8081 (http) with context path &#39;/coco&#39;</p><p>4、项目打包之后，与 jar 同目录下的位置相当于位置 2，与 jar 同目录下的 config 子目录相当于位置 1.</p>`,56)]))}const d=n(t,[["render",p],["__file","index.html.vue"]]),c=JSON.parse(`{"path":"/se/lang/java/framework/spring/boot/","title":"Spring Boot","lang":"en-US","frontmatter":{"description":"Spring Boot SpringBootApplication 可以看出大概可以把 @SpringBootApplication 看作是 @Configuration、@EnableAutoConfiguration、@ComponentScan 注解的集合。根据 SpringBoot 官网，这三个注解的作用分别是： @EnableAutoConf...","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/se/lang/java/framework/spring/boot/"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"Spring Boot"}],["meta",{"property":"og:description","content":"Spring Boot SpringBootApplication 可以看出大概可以把 @SpringBootApplication 看作是 @Configuration、@EnableAutoConfiguration、@ComponentScan 注解的集合。根据 SpringBoot 官网，这三个注解的作用分别是： @EnableAutoConf..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/davidliuk/images@master/blog/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dhbmdteDE5OTMzMjg=,size_16,color_FFFFFF,t_70.png"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-11-09T18:37:53.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-09T18:37:53.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Spring Boot\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/davidliuk/images@master/blog/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dhbmdteDE5OTMzMjg=,size_16,color_FFFFFF,t_70.png\\"],\\"dateModified\\":\\"2024-11-09T18:37:53.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[{"level":3,"title":"SpringBootApplication","slug":"springbootapplication","link":"#springbootapplication","children":[]},{"level":3,"title":"自动配置","slug":"自动配置","link":"#自动配置","children":[]},{"level":3,"title":"启动流程","slug":"启动流程","link":"#启动流程","children":[]},{"level":3,"title":"配置文件","slug":"配置文件","link":"#配置文件","children":[]}],"git":{"createdTime":1684318252000,"updatedTime":1731177473000,"contributors":[{"name":"刘大维","email":"davidliu@liudaweideMacBook-Pro-3.local","commits":1}]},"readingTime":{"minutes":7.58,"words":2273},"filePathRelative":"se/lang/java/framework/spring/boot/README.md","localizedDate":"May 17, 2023","excerpt":"\\n<h3>SpringBootApplication</h3>\\n<p>可以看出大概可以把 @SpringBootApplication 看作是 @Configuration、@EnableAutoConfiguration、@ComponentScan 注解的集合。根据 SpringBoot 官网，这三个注解的作用分别是：</p>\\n<ul>\\n<li>@EnableAutoConfiguration：启用 SpringBoot 的自动配置机制</li>\\n<li>@ComponentScan： 扫描被@Component (@Service,@Controller)注解的 bean，注解默认会扫描该类所在的包下所有的类。</li>\\n<li>@Configuration：允许在上下文中注册额外的 bean 或导入其他配置类</li>\\n</ul>","autoDesc":true}`);export{d as comp,c as data};
