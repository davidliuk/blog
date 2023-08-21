# Spring Boot

### SpringBootApplication

可以看出大概可以把 @SpringBootApplication 看作是 @Configuration、@EnableAutoConfiguration、@ComponentScan 注解的集合。根据 SpringBoot 官网，这三个注解的作用分别是：

- @EnableAutoConfiguration：启用 SpringBoot 的自动配置机制
- @ComponentScan： 扫描被@Component (@Service,@Controller)注解的 bean，注解默认会扫描该类所在的包下所有的类。
- @Configuration：允许在上下文中注册额外的 bean 或导入其他配置类

@EnableAutoConfiguration 注解通过 Spring 提供的 @Import 注解导入了 AutoConfigurationImportSelector 类（@Import 注解可以导入配置类或者 Bean 到当前类中）。

AutoConfigurationImportSelector 类中 getCandidateConfigurations 方法会将所有自动配置类的信息以 List 的形式返回。这些配置信息会被 Spring 容器作 bean 来管理。

自动配置信息有了，那么自动配置还差什么呢？

@Conditional 注解。@ConditionalOnClass(指定的类必须存在于类路径下),@ConditionalOnBean(容器中是否有指定的 Bean)等等都是对@Conditional 注解的扩展。

拿 Spring Security 的自动配置举个例子:SecurityAutoConfiguration 中导入了 WebSecurityEnablerConfiguration 类，WebSecurityEnablerConfiguration 源代码如下：

WebSecurityEnablerConfiguration 类中使用@ConditionalOnBean 指定了容器中必须还有 WebSecurityConfigurerAdapter 类或其实现类。所以，一般情况下 Spring Security 配置类都会去实现 WebSecurityConfigurerAdapter，这样自动将配置就完成了。

### 自动配置

这个是因为@SpringBootApplication 注解的原因，在上一个问题中已经提到了这个注解。我们知道 @SpringBootApplication 看作是 @Configuration、@EnableAutoConfiguration、@ComponentScan 注解的集合。

- @EnableAutoConfiguration：启用 SpringBoot 的自动配置机制
- @ComponentScan： 扫描被@Component (@Service,@Controller)注解的 bean，注解默认会扫描该类所在的包下所有的类。
- @Configuration：允许在上下文中注册额外的 bean 或导入其他配置类

@EnableAutoConfiguration 是启动自动配置的关键，他会 Import AutoConfigurationImportSelector，把它注入 Spring 容器

@EnableAutoConfiguration 注解通过 Spring 提供的 @Import 注解导入了 AutoConfigurationImportSelector 类（@Import 注解可以导入配置类或者 Bean 到当前类中）。

AutoConfigurationImportSelector 类中 getCandidateConfigurations 方法会将所有自动配置类的信息以 List 的形式返回。这些配置信息会被 Spring 容器作 bean 来管理。

可以看出，`AutoConfigurationImportSelector` 类实现了 `ImportSelector`接口，也就实现了这个接口中的 `selectImports`方法，该方法主要用于**获取所有符合条件的类的全限定类名，这些类需要被加载到 IoC 容器中**。

用于获取`EnableAutoConfiguration`注解中的 `exclude` 和 `excludeName`。

获取需要自动装配的所有配置类，读取`META-INF/spring.factories`

### 启动流程

1. 从 spring.factories 配置文件中加载 EventPublishingRunListener 对象，该对象拥有 SimpleApplicationEventMulticaster 属性，即在 SpringBoot 启动过程的不同阶段用来发射内置的生命周期事件;
2. 准备环境变量，包括系统变量，环境变量，命令行参数，默认变量，servlet 相关配置变量，随机值以及配置文件（比如 application.properties）等;
3. 控制台打印 SpringBoot 的 bannner 标志；
4. 根据不同类型环境创建不同类型的 applicationContext 容器，因为这里是 servlet 环境，所以创建的是 AnnotationConfigServletWebServerApplicationContext 容器对象；
5. 从 spring.factories 配置文件中加载 FailureAnalyzers 对象,用来报告 SpringBoot 启动过程中的异常；
6. 为刚创建的容器对象做一些初始化工作，准备一些容器属性值等，对 ApplicationContext 应用一些相关的后置处理和调用各个 ApplicationContextInitializer 的初始化方法来执行一些初始化逻辑等；
7. 刷新容器，这一步至关重要。比如调用 bean factory 的后置处理器，注册 BeanPostProcessor 后置处理器，初始化事件广播器且广播事件，初始化剩下的单例 bean 和 SpringBoot 创建内嵌的 Tomcat 服务器等等重要且复杂的逻辑都在这里实现，主要步骤可见代码的注释，关于这里的逻辑会在以后的 spring 源码分析专题详细分析；
8. 执行刷新容器后的后置处理逻辑，注意这里为空方法；
9. 调用 ApplicationRunner 和 CommandLineRunner 的 run 方法，我们实现这两个接口可以在 spring 容器启动后需要的一些东西比如加载一些业务数据等;
10. 报告启动异常，即若启动过程中抛出异常，此时用 FailureAnalyzers 来报告异常;
11. 最终返回容器对象，这里调用方法没有声明对象来接收。

[spring boot 启动流程分析 - 掘金 (juejin.cn)](https://juejin.cn/post/7035910505810100255)

- 准备 Environment
- 发布事件
- 创建上下文、bean
- 刷新上下文
- 结束，

### 配置文件

#### 格式

Spring Boot 核心配置文件有以下几种格式：

1. Properties 格式：以.properties 为后缀，采用键值对的方式进行配置，例如：

   ```
   server.port=8080
   spring.datasource.url=jdbc:mysql://localhost:3306/test
   ```

2. YAML 格式：以.yml 或.yaml 为后缀，采用缩进的方式进行配置，例如：

   ```
   server:
     port: 8080
   spring:
     datasource:
       url: jdbc:mysql://localhost:3306/test
   ```

3. XML 格式：以.xml 为后缀，采用标签的方式进行配置，例如：

   ```
   <server>
     <port>8080</port>
   </server>
   <spring>
     <datasource>
       <url>jdbc:mysql://localhost:3306/test</url>
     </datasource>
   </spring>
   ```

这三种格式的配置文件都可以用于 Spring Boot 应用的配置，但是它们之间有一些区别：

1. Properties 格式的配置文件比较简单，适合用于简单的配置场景，例如单个属性的配置。

2. YAML 格式的配置文件比较灵活，可以支持复杂的数据结构，例如列表、映射等，适合用于复杂的配置场景。

3. XML 格式的配置文件比较冗长，但是可以支持复杂的数据结构和多语言的配置，适合用于大型项目的配置场景。

总的来说，Spring Boot 支持 Properties、YAML 和 XML 三种格式的配置文件，每种格式都有其适用的场景和特点，需要根据实际情况选择合适的格式进行配置。

#### 种类

1、SpringBoot 的核心配置文件有两个：bootstrap (.yml 或者 .properties)，application (.yml 或者 .properties)。

2、Spring Boot 中有两种上下文，一种是 bootstrap, 另外一种是 application, bootstrap 是应用程序的父上下文。两个上下文共用一个环境，它是任何 Spring 应用程序的外部属性的来源。

3、boostrap 由父 ApplicationContext 加载，比 applicaton 优先加载，都可以用来配置参数。

4、bootstrap 优于 application 加载；bootstrap 偏向系统层级的参数配置，Bootstrap 属性有高优先级，默认情况下，它们不会被本地配置覆盖。application 偏向应用层级的参数配置。

4、使用 Spring Cloud Config 配置中心时，这时需要在 bootstrap 配置文件中添加连接到配置中心的配置属性来加载外部配置中心的配置信息；
a、一些固定的不能被覆盖的属性
b、一些加密/解密的场景；

#### Spring Boot 多环境配置

1、Profile 是 Spring 对不同环境提供不同配置功能的支持，可以通过激活、指定参数等方式快速切换环境

2、项目开发时有开发环境、测试环境、部署环境等，可以通过 profile 配置切换

3、spring.profiles.active 的值为多个时，用逗号隔开，[官网文档](https://docs.spring.io/spring-boot/docs/2.1.6.RELEASE/reference/htmlsingle/#common-application-properties)。

**方式 1：多 profile 文件形式**

1、格式：application-{profile}.properties/yml，如：application-dev.properties、application-prod.properties 等

2、Spring Boot 默认从全局配置文件 application.properties 和 application.yml 进入开始读取

3、然后在全局配置文件 application.properties 和 application.yml 激活使用 “spring.profiles.active=profile” 激活指定文件.

方式 2： **yml 文档块形式**

1、yml 文件支持多文档块方式，同一个 yml 文件中，可以使用"---"来区分不同的文档，相当于不同的配置文件

2、这也是 Spring Boot 官方推荐的方式

```yaml
spring:
  profiles:
    active: dev #指定激活哪个环境配置，激活后，第一个文档内容失效;不指定时，以第一个文档为准
server:
  port: 8083
--- #"---"用于分隔不同的profiles（）文档块
spring:
  profiles: dev #指定环境标识为"devel",相当于"application-{profile}.properties/yml"中的profile
server:
  port: 8081
---
spring:
  profiles: deploy #指定环境标识为"deploy",相当于"application-{profile}.properties/yml"中的profile
server:
  port: 8082
```

#### 配置文件位置与加载顺序

> **application.properties > application.yml > application.yaml**

1、Spring boot 启动时自动扫描以下位置的 application.properties 或者 application.yml 文件作为 Spring boot 的默认配置文件。

1. file:./config/ -------------整个项目根目录下的 config 目录下
2. file:./ ---------------------整个项目根目录下
3. classpath:/config/---------类路径下的 config 目录下
4. classpath:/-----------------类路径根目录下

2、优先级从上往下由高到底，高优先级的配置会覆盖低优先级的配置；Spring Boot 会从这四个位置加载所有的主配置文件，如果高优先级的内容与低优先级的内容相同，则覆盖；如果低优先级的内容在高优先级中没有，则形成互补。

![img](https://cdn.jsdelivr.net/gh/davidliuk/images@master/blog/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dhbmdteDE5OTMzMjg=,size_16,color_FFFFFF,t_70.png)

3、应用启动后，1 位置的端口会生效，控制台会输出：Tomcat started on port(s): 8081 (http) with context path '/coco'

4、项目打包之后，与 jar 同目录下的位置相当于位置 2，与 jar 同目录下的 config 子目录相当于位置 1.
