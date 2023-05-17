# Spring MVC

### Spring MVC 的核心组件有哪些？

记住了下面这些组件，也就记住了 SpringMVC 的工作原理。

- **`DispatcherServlet`** ：**核心的中央处理器**，负责接收请求、分发，并给予客户端响应。
- **`HandlerMapping`** ：**处理器映射器**，根据 uri 去匹配查找能处理的 `Handler` ，并会将请求涉及到的拦截器和 `Handler` 一起封装。
- **`HandlerAdapter`** ：**处理器适配器**，根据 `HandlerMapping` 找到的 `Handler` ，适配执行对应的 `Handler`；
- **`Handler`** ：**请求处理器**，处理实际请求的处理器。
- **`ViewResolver`** ：**视图解析器**，根据 `Handler` 返回的逻辑视图 / 视图，解析并渲染真正的视图，并传递给 `DispatcherServlet` 响应客户端

### 工作原理

![img](https://cdn.jsdelivr.net/gh/davidliuk/images@master/blog/de6d2b213f112297298f3e223bf08f28.png)

**流程说明（重要）：**

1. 客户端（浏览器）发送请求， `DispatcherServlet`拦截请求。
2. `DispatcherServlet` 根据请求信息调用 `HandlerMapping` 。`HandlerMapping` 根据 uri 去匹配查找能处理的 `Handler`（也就是我们平常说的 `Controller` 控制器） ，并会将请求涉及到的拦截器和 `Handler` 一起封装。
3. `DispatcherServlet` 调用 `HandlerAdapter`适配执行 `Handler` 。
4. `Handler` 完成对用户请求的处理后，会返回一个 `ModelAndView` 对象给`DispatcherServlet`，`ModelAndView` 顾名思义，包含了数据模型以及相应的视图的信息。`Model` 是返回的数据对象，`View` 是个逻辑上的 `View`。
5. `ViewResolver` 会根据逻辑 `View` 查找实际的 `View`。
6. `DispaterServlet` 把返回的 `Model` 传给 `View`（视图渲染）。
7. 把 `View` 返回给请求者（浏览器）

系统启动的时候根据配置文件创建 spring 的容器, 首先是发送 http 请求到核心控制器 disPatherServlet，spring 容器通过映射器去寻找业务控制器，使用适配器找到相应的业务类， 在进业务类时进行数据封装，在封装前可能会涉及到类型转换，执行完业务类后使用 ModelAndView 进行视图转发，数据放在 model 中，用 map 传递数据进行页面显示。

SpringMvc 的控制器是不是单例模式,如果是,有什么问题,怎么解决?

答：是单例模式,所以在多线程访问的时候有线程安全问题,不要用同步,会影响性能的,解决方案是在控制器里面不能写字段（不能有状态变量），可以用 Thread Local 或者线程安全容器。

## Interceptor 和 Filter

### Interceptor

主要作用：拦截用户请求，进行处理，比如判断用户登录情况，权限验证，主要针对 Action 请求进行处理。是通过 HandlerInterceptor 实现的。
一般拦截器可通过实现 HandlerInterceptor 接口或者继承 HandlerInterceptorAdapter 实现。代码如下：
preHandle 是在请求到达 Controller 之前实现，可进行用户校验登录等操作，返回 true 后，请求到达 Controller 层；postHandle 方法是在执行完 Controller 层代码之后，DispatcherServlet 进行视图的渲染之前

执行，因此可以对 ModelAndView 对象进行处理；afterCompletion 方法是在 DispatcherServlet 进行视图的渲染之后执行调用，主要是进行一些资源清理等工作。

注：只能对 Controller 请求进行拦截，对一些静态资源无法拦截。

### Filter

主要作用：统一设置字符集等。

依赖于 servlet 容器，过滤器实例只在初始化的时候调用一次。

过滤器在 web.xml 配置如下：

### Filter 和 Interceptor 的区别

- Filter 是基于函数回调（doFilter()方法）的，而 Interceptor 则是基于 Java 反射的（AOP 思想）。
- Filter 依赖于 Servlet 容器，而 Interceptor 不依赖于 Servlet 容器。
- Filter 对几乎所有的请求起作用，而 Interceptor 只能对 action 请求起作用。
- Interceptor 可以访问 Action 的上下文，值栈里的对象，而 Filter 不能。
- 在 action 的生命周期里，Interceptor 可以被多次调用，而 Filter 只能在容器初始化时调用一次。

拦截器和过滤器执行顺序：

1. `Filter.init();`
2. `Filter.doFilter(); before doFilter`
3. `HandlerInterceptor.preHandle();`
4. `Controller 方法执行`
5. `HandlerInterceptor.postHandle();`
6. `DispatcherServlet 视图渲染`
7. `HandlerInterceptor.afterCompletion();`
8. `Filter.doFilter(); after doFilter`
9. `Filter.destroy();`

![在这里插入图片描述](https://cdn.jsdelivr.net/gh/davidliuk/images@master/blog/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MjQwODQ0Nw==,size_16,color_FFFFFF,t_70.png)

两者的本质区别：拦截器（Interceptor）是基于 Java 的反射机制，而过滤器（Filter）是基于函数回调。从灵活性上说拦截器功能更强大些，Filter 能做的事情，都能做，而且可以在请求前，请求后执行，比较灵活。Filter 主要是针对 URL 地址做一个编码的事情、过滤掉没用的参数、安全校验（比较泛的，比如登录不登录之类），太细的话，还是建议用 interceptor。不过还是根据不同情况选择合适的。

1. 过滤器(Filter)：它依赖于 servlet 容器。在实现上，基于函数回调，它可以对几乎所有请求进行过滤，但是缺点是一个过滤器实例只能在容器初始化时调用一次。使用过滤器的目的，是用来做一些过滤操作，获取我们想要获取的数据，比如：在 Javaweb 中，对传入的 request、response 提前过滤掉一些信息，或者提前设置一些参数，然后再传入 servlet 或者 Controller 进行业务逻辑操作。通常用的场景是：在过滤器中修改字符编码（CharacterEncodingFilter）、在过滤器中修改 HttpServletRequest 的一些参数（XSSFilter(自定义过滤器)），如：过滤低俗文字、危险字符等。
2. 拦截器（Interceptor）：它依赖于 web 框架，在 SpringMVC 中就是依赖于 SpringMVC 框架。在实现上,基于 Java 的反射机制，属于面向切面编程（AOP）的一种运用，就是在 service 或者一个方法前，调用一个方法，或者在方法后，调用一个方法，比如动态代理就是拦截器的简单实现，在调用方法前打印出字符串（或者做其它业务逻辑的操作），也可以在调用方法后打印出字符串，甚至在抛出异常的时候做业务逻辑的操作。由于拦截器是基于 web 框架的调用，因此可以使用 Spring 的依赖注入（DI）进行一些业务操作，同时一个拦截器实例在一个 controller 生命周期之内可以多次调用。但是缺点是只能对 controller 请求进行拦截，对其他的一些比如直接访问静态资源的请求则没办法进行拦截处理。

## Filter

## 区别

很多同学搞不懂拦截器和过滤器的区别，我们先说一下他们的区别：

- 最简单明了的区别就是过滤器可以修改 request，而拦截器不能
- 过滤器需要在 servlet 容器中实现，拦截器可以适用于 javaEE，javaSE 等各种环境。
- 拦截器可以调用 IoC 容器中的各种依赖，而过滤器不能。
- 过滤器只能在请求的前后使用，而拦截器可以详细到每个方法

- filter 过滤器依赖于 servlet 容器，而 interceptor 依赖于 spring 容器

- filter 是基于函数回调实现的，interceptor 是基于 Java 反射机制实现的
- filter 是实现 javax.servlet.Filter，该接口由 servlet 规范定义，使用过滤器（filter）需要依赖于 servlet 容器，如 Tomcat 容器。而 interceptor 是实现 org.springframework.web.servlet.HandlerInterceptor 接口，由 spring 框架提供且由 spring 容器管理，不依赖 servlet 容器，依赖 spring 容器。
- filter（过滤器）是在请求到达 servlet 之前进行预处理。interceptor（拦截器）是在请求到达 servlet 之后在进入 action（controller）之前进行预处理，在 action（controller）处理完返回视图前再处理，待 action（controller）返回视图后进行最终处理。
- filter 可以过滤被 web 容器管理的几乎所有资源请求（JSP、Servlet、静态资源等），interceptor 只能对 action（Spring MVC 里的 controller）进行拦截处理。

![img](https://cdn.jsdelivr.net/gh/davidliuk/images@master/blog/bc40faea6f58446e92fb39e37145c71f.png)
