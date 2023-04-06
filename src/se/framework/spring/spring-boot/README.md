# Spring Boot



### SpringBootApplication

可以看出大概可以把 @SpringBootApplication看作是 @Configuration、@EnableAutoConfiguration、@ComponentScan 注解的集合。根据 SpringBoot 官网，这三个注解的作用分别是：

- @EnableAutoConfiguration：启用 SpringBoot 的自动配置机制
- @ComponentScan： 扫描被@Component (@Service,@Controller)注解的 bean，注解默认会扫描该类所在的包下所有的类。
- @Configuration：允许在上下文中注册额外的 bean 或导入其他配置类



@EnableAutoConfiguration 注解通过 Spring 提供的 @Import 注解导入了AutoConfigurationImportSelector类（@Import 注解可以导入配置类或者 Bean 到当前类中）。

AutoConfigurationImportSelector类中getCandidateConfigurations方法会将所有自动配置类的信息以 List 的形式返回。这些配置信息会被 Spring 容器作 bean 来管理。



自动配置信息有了，那么自动配置还差什么呢？

@Conditional 注解。@ConditionalOnClass(指定的类必须存在于类路径下),@ConditionalOnBean(容器中是否有指定的 Bean)等等都是对@Conditional注解的扩展。

拿 Spring Security 的自动配置举个例子:SecurityAutoConfiguration中导入了WebSecurityEnablerConfiguration类，WebSecurityEnablerConfiguration源代码如下：



WebSecurityEnablerConfiguration类中使用@ConditionalOnBean指定了容器中必须还有WebSecurityConfigurerAdapter 类或其实现类。所以，一般情况下 Spring Security 配置类都会去实现 WebSecurityConfigurerAdapter，这样自动将配置就完成了。

### 自动配置

这个是因为@SpringBootApplication注解的原因，在上一个问题中已经提到了这个注解。我们知道 @SpringBootApplication看作是 @Configuration、@EnableAutoConfiguration、@ComponentScan 注解的集合。

- @EnableAutoConfiguration：启用 SpringBoot 的自动配置机制
- @ComponentScan： 扫描被@Component (@Service,@Controller)注解的 bean，注解默认会扫描该类所在的包下所有的类。
- @Configuration：允许在上下文中注册额外的 bean 或导入其他配置类

@EnableAutoConfiguration是启动自动配置的关键，他会Import AutoConfigurationImportSelector，把它注入Spring 容器

@EnableAutoConfiguration 注解通过 Spring 提供的 @Import 注解导入了AutoConfigurationImportSelector类（@Import 注解可以导入配置类或者 Bean 到当前类中）。

AutoConfigurationImportSelector类中getCandidateConfigurations方法会将所有自动配置类的信息以 List 的形式返回。这些配置信息会被 Spring 容器作 bean 来管理。

可以看出，`AutoConfigurationImportSelector` 类实现了 `ImportSelector`接口，也就实现了这个接口中的 `selectImports`方法，该方法主要用于**获取所有符合条件的类的全限定类名，这些类需要被加载到 IoC 容器中**。

用于获取`EnableAutoConfiguration`注解中的 `exclude` 和 `excludeName`。

获取需要自动装配的所有配置类，读取`META-INF/spring.factories`
