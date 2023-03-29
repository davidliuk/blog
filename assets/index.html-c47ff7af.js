import{_ as n,V as o,W as i,Z as t}from"./framework-e5d7a6b2.js";const e={},r=t('<h1 id="spring-boot" tabindex="-1"><a class="header-anchor" href="#spring-boot" aria-hidden="true">#</a> Spring Boot</h1><h3 id="springbootapplication" tabindex="-1"><a class="header-anchor" href="#springbootapplication" aria-hidden="true">#</a> SpringBootApplication</h3><p>可以看出大概可以把 @SpringBootApplication看作是 @Configuration、@EnableAutoConfiguration、@ComponentScan 注解的集合。根据 SpringBoot 官网，这三个注解的作用分别是：</p><ul><li>@EnableAutoConfiguration：启用 SpringBoot 的自动配置机制</li><li>@ComponentScan： 扫描被@Component (@Service,@Controller)注解的 bean，注解默认会扫描该类所在的包下所有的类。</li><li>@Configuration：允许在上下文中注册额外的 bean 或导入其他配置类</li></ul><p>@EnableAutoConfiguration 注解通过 Spring 提供的 @Import 注解导入了AutoConfigurationImportSelector类（@Import 注解可以导入配置类或者 Bean 到当前类中）。</p><p>AutoConfigurationImportSelector类中getCandidateConfigurations方法会将所有自动配置类的信息以 List 的形式返回。这些配置信息会被 Spring 容器作 bean 来管理。</p><p>自动配置信息有了，那么自动配置还差什么呢？</p><p>@Conditional 注解。@ConditionalOnClass(指定的类必须存在于类路径下),@ConditionalOnBean(容器中是否有指定的 Bean)等等都是对@Conditional注解的扩展。</p><p>拿 Spring Security 的自动配置举个例子:SecurityAutoConfiguration中导入了WebSecurityEnablerConfiguration类，WebSecurityEnablerConfiguration源代码如下：</p><p>WebSecurityEnablerConfiguration类中使用@ConditionalOnBean指定了容器中必须还有WebSecurityConfigurerAdapter 类或其实现类。所以，一般情况下 Spring Security 配置类都会去实现 WebSecurityConfigurerAdapter，这样自动将配置就完成了。</p>',10),a=[r];function p(l,c){return o(),i("div",null,a)}const d=n(e,[["render",p],["__file","index.html.vue"]]);export{d as default};
