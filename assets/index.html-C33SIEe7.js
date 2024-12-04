import{_ as r}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as t,d as l,o as i}from"./app-D4ZvIHfO.js";const o={};function n(d,e){return i(),t("div",null,e[0]||(e[0]=[l('<h1 id="spring-mvc" tabindex="-1"><a class="header-anchor" href="#spring-mvc"><span>Spring MVC</span></a></h1><h3 id="spring-mvc-的核心组件有哪些" tabindex="-1"><a class="header-anchor" href="#spring-mvc-的核心组件有哪些"><span>Spring MVC 的核心组件有哪些？</span></a></h3><p>记住了下面这些组件，也就记住了 SpringMVC 的工作原理。</p><ul><li><strong><code>DispatcherServlet</code></strong> ：<strong>核心的中央处理器</strong>，负责接收请求、分发，并给予客户端响应。</li><li><strong><code>HandlerMapping</code></strong> ：<strong>处理器映射器</strong>，根据 uri 去匹配查找能处理的 <code>Handler</code> ，并会将请求涉及到的拦截器和 <code>Handler</code> 一起封装。</li><li><strong><code>HandlerAdapter</code></strong> ：<strong>处理器适配器</strong>，根据 <code>HandlerMapping</code> 找到的 <code>Handler</code> ，适配执行对应的 <code>Handler</code>；</li><li><strong><code>Handler</code></strong> ：<strong>请求处理器</strong>，处理实际请求的处理器。</li><li><strong><code>ViewResolver</code></strong> ：<strong>视图解析器</strong>，根据 <code>Handler</code> 返回的逻辑视图 / 视图，解析并渲染真正的视图，并传递给 <code>DispatcherServlet</code> 响应客户端</li></ul><h3 id="工作原理" tabindex="-1"><a class="header-anchor" href="#工作原理"><span>工作原理</span></a></h3><p><img src="https://cdn.jsdelivr.net/gh/davidliuk/images@master/blog/de6d2b213f112297298f3e223bf08f28.png" alt="img" loading="lazy"></p><p><strong>流程说明（重要）：</strong></p><ol><li>客户端（浏览器）发送请求， <code>DispatcherServlet</code>拦截请求。</li><li><code>DispatcherServlet</code> 根据请求信息调用 <code>HandlerMapping</code> 。<code>HandlerMapping</code> 根据 uri 去匹配查找能处理的 <code>Handler</code>（也就是我们平常说的 <code>Controller</code> 控制器） ，并会将请求涉及到的拦截器和 <code>Handler</code> 一起封装。</li><li><code>DispatcherServlet</code> 调用 <code>HandlerAdapter</code>适配执行 <code>Handler</code> 。</li><li><code>Handler</code> 完成对用户请求的处理后，会返回一个 <code>ModelAndView</code> 对象给<code>DispatcherServlet</code>，<code>ModelAndView</code> 顾名思义，包含了数据模型以及相应的视图的信息。<code>Model</code> 是返回的数据对象，<code>View</code> 是个逻辑上的 <code>View</code>。</li><li><code>ViewResolver</code> 会根据逻辑 <code>View</code> 查找实际的 <code>View</code>。</li><li><code>DispaterServlet</code> 把返回的 <code>Model</code> 传给 <code>View</code>（视图渲染）。</li><li>把 <code>View</code> 返回给请求者（浏览器）</li></ol><p>系统启动的时候根据配置文件创建 spring 的容器, 首先是发送 http 请求到核心控制器 disPatherServlet，spring 容器通过映射器去寻找业务控制器，使用适配器找到相应的业务类， 在进业务类时进行数据封装，在封装前可能会涉及到类型转换，执行完业务类后使用 ModelAndView 进行视图转发，数据放在 model 中，用 map 传递数据进行页面显示。</p><p>SpringMVC 的控制器是不是单例模式,如果是,有什么问题,怎么解决?</p><p>答：是单例模式,所以在多线程访问的时候有线程安全问题,不要用同步,会影响性能的,解决方案是在控制器里面不能写字段（不能有状态变量），可以用 Thread Local 或者线程安全容器。</p><h2 id="interceptor-和-filter" tabindex="-1"><a class="header-anchor" href="#interceptor-和-filter"><span>Interceptor 和 Filter</span></a></h2><h3 id="interceptor" tabindex="-1"><a class="header-anchor" href="#interceptor"><span>Interceptor</span></a></h3><p>主要作用：拦截用户请求，进行处理，比如判断用户登录情况，权限验证，主要针对 Action 请求进行处理。是通过 HandlerInterceptor 实现的。<br> 一般拦截器可通过实现 HandlerInterceptor 接口或者继承 HandlerInterceptorAdapter 实现。代码如下：<br> preHandle 是在请求到达 Controller 之前实现，可进行用户校验登录等操作，返回 true 后，请求到达 Controller 层；postHandle 方法是在执行完 Controller 层代码之后，DispatcherServlet 进行视图的渲染之前</p><p>执行，因此可以对 ModelAndView 对象进行处理；afterCompletion 方法是在 DispatcherServlet 进行视图的渲染之后执行调用，主要是进行一些资源清理等工作。</p><p>注：只能对 Controller 请求进行拦截，对一些静态资源无法拦截。</p><h3 id="filter" tabindex="-1"><a class="header-anchor" href="#filter"><span>Filter</span></a></h3><p>主要作用：统一设置字符集等。</p><p>依赖于 servlet 容器，过滤器实例只在初始化的时候调用一次。</p><p>过滤器在 web.xml 配置如下：</p><h3 id="filter-和-interceptor-的区别" tabindex="-1"><a class="header-anchor" href="#filter-和-interceptor-的区别"><span>Filter 和 Interceptor 的区别</span></a></h3><ul><li>Filter 是基于函数回调（doFilter()方法）的，而 Interceptor 则是基于 Java 反射的（AOP 思想）。</li><li>Filter 依赖于 Servlet 容器，而 Interceptor 不依赖于 Servlet 容器。</li><li>Filter 对几乎所有的请求起作用，而 Interceptor 只能对 action 请求起作用。</li><li>Interceptor 可以访问 Action 的上下文，值栈里的对象，而 Filter 不能。</li><li>在 action 的生命周期里，Interceptor 可以被多次调用，而 Filter 只能在容器初始化时调用一次。</li></ul><p>拦截器和过滤器执行顺序：</p><ol><li><code>Filter.init();</code></li><li><code>Filter.doFilter(); before doFilter</code></li><li><code>HandlerInterceptor.preHandle();</code></li><li><code>Controller 方法执行</code></li><li><code>HandlerInterceptor.postHandle();</code></li><li><code>DispatcherServlet 视图渲染</code></li><li><code>HandlerInterceptor.afterCompletion();</code></li><li><code>Filter.doFilter(); after doFilter</code></li><li><code>Filter.destroy();</code></li></ol><p><img src="https://cdn.jsdelivr.net/gh/davidliuk/images@master/blog/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MjQwODQ0Nw==,size_16,color_FFFFFF,t_70.png" alt="在这里插入图片描述" loading="lazy"></p><p>两者的本质区别：拦截器（Interceptor）是基于 Java 的反射机制，而过滤器（Filter）是基于函数回调。从灵活性上说拦截器功能更强大些，Filter 能做的事情，都能做，而且可以在请求前，请求后执行，比较灵活。Filter 主要是针对 URL 地址做一个编码的事情、过滤掉没用的参数、安全校验（比较泛的，比如登录不登录之类），太细的话，还是建议用 interceptor。不过还是根据不同情况选择合适的。</p><ol><li>过滤器(Filter)：它依赖于 servlet 容器。在实现上，基于函数回调，它可以对几乎所有请求进行过滤，但是缺点是一个过滤器实例只能在容器初始化时调用一次。使用过滤器的目的，是用来做一些过滤操作，获取我们想要获取的数据，比如：在 Javaweb 中，对传入的 request、response 提前过滤掉一些信息，或者提前设置一些参数，然后再传入 servlet 或者 Controller 进行业务逻辑操作。通常用的场景是：在过滤器中修改字符编码（CharacterEncodingFilter）、在过滤器中修改 HttpServletRequest 的一些参数（XSSFilter(自定义过滤器)），如：过滤低俗文字、危险字符等。</li><li>拦截器（Interceptor）：它依赖于 web 框架，在 SpringMVC 中就是依赖于 SpringMVC 框架。在实现上,基于 Java 的反射机制，属于面向切面编程（AOP）的一种运用，就是在 service 或者一个方法前，调用一个方法，或者在方法后，调用一个方法，比如动态代理就是拦截器的简单实现，在调用方法前打印出字符串（或者做其它业务逻辑的操作），也可以在调用方法后打印出字符串，甚至在抛出异常的时候做业务逻辑的操作。由于拦截器是基于 web 框架的调用，因此可以使用 Spring 的依赖注入（DI）进行一些业务操作，同时一个拦截器实例在一个 controller 生命周期之内可以多次调用。但是缺点是只能对 controller 请求进行拦截，对其他的一些比如直接访问静态资源的请求则没办法进行拦截处理。</li></ol><h2 id="filter-1" tabindex="-1"><a class="header-anchor" href="#filter-1"><span>Filter</span></a></h2><h2 id="区别" tabindex="-1"><a class="header-anchor" href="#区别"><span>区别</span></a></h2><p>很多同学搞不懂拦截器和过滤器的区别，我们先说一下他们的区别：</p><ul><li><p>最简单明了的区别就是过滤器可以修改 request，而拦截器不能</p></li><li><p>过滤器需要在 servlet 容器中实现，拦截器可以适用于 javaEE，javaSE 等各种环境。</p></li><li><p>拦截器可以调用 IoC 容器中的各种依赖，而过滤器不能。</p></li><li><p>过滤器只能在请求的前后使用，而拦截器可以详细到每个方法</p></li><li><p>filter 过滤器依赖于 servlet 容器，而 interceptor 依赖于 spring 容器</p></li><li><p>filter 是基于函数回调实现的，interceptor 是基于 Java 反射机制实现的</p></li><li><p>filter 是实现 javax.servlet.Filter，该接口由 servlet 规范定义，使用过滤器（filter）需要依赖于 servlet 容器，如 Tomcat 容器。而 interceptor 是实现 org.springframework.web.servlet.HandlerInterceptor 接口，由 spring 框架提供且由 spring 容器管理，不依赖 servlet 容器，依赖 spring 容器。</p></li><li><p>filter（过滤器）是在请求到达 servlet 之前进行预处理。interceptor（拦截器）是在请求到达 servlet 之后在进入 action（controller）之前进行预处理，在 action（controller）处理完返回视图前再处理，待 action（controller）返回视图后进行最终处理。</p></li><li><p>filter 可以过滤被 web 容器管理的几乎所有资源请求（JSP、Servlet、静态资源等），interceptor 只能对 action（Spring MVC 里的 controller）进行拦截处理。</p></li></ul><p><img src="https://cdn.jsdelivr.net/gh/davidliuk/images@master/blog/bc40faea6f58446e92fb39e37145c71f.png" alt="img" loading="lazy"></p>',32)]))}const p=r(o,[["render",n],["__file","index.html.vue"]]),s=JSON.parse(`{"path":"/se/lang/java/framework/web/mvc/","title":"Spring MVC","lang":"en-US","frontmatter":{"description":"Spring MVC Spring MVC 的核心组件有哪些？ 记住了下面这些组件，也就记住了 SpringMVC 的工作原理。 DispatcherServlet ：核心的中央处理器，负责接收请求、分发，并给予客户端响应。 HandlerMapping ：处理器映射器，根据 uri 去匹配查找能处理的 Handler ，并会将请求涉及到的拦截器和 H...","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/se/lang/java/framework/web/mvc/"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"Spring MVC"}],["meta",{"property":"og:description","content":"Spring MVC Spring MVC 的核心组件有哪些？ 记住了下面这些组件，也就记住了 SpringMVC 的工作原理。 DispatcherServlet ：核心的中央处理器，负责接收请求、分发，并给予客户端响应。 HandlerMapping ：处理器映射器，根据 uri 去匹配查找能处理的 Handler ，并会将请求涉及到的拦截器和 H..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/davidliuk/images@master/blog/de6d2b213f112297298f3e223bf08f28.png"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-11-09T18:37:53.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-09T18:37:53.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Spring MVC\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/davidliuk/images@master/blog/de6d2b213f112297298f3e223bf08f28.png\\",\\"https://cdn.jsdelivr.net/gh/davidliuk/images@master/blog/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MjQwODQ0Nw==,size_16,color_FFFFFF,t_70.png\\",\\"https://cdn.jsdelivr.net/gh/davidliuk/images@master/blog/bc40faea6f58446e92fb39e37145c71f.png\\"],\\"dateModified\\":\\"2024-11-09T18:37:53.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[{"level":3,"title":"Spring MVC 的核心组件有哪些？","slug":"spring-mvc-的核心组件有哪些","link":"#spring-mvc-的核心组件有哪些","children":[]},{"level":3,"title":"工作原理","slug":"工作原理","link":"#工作原理","children":[]},{"level":2,"title":"Interceptor 和 Filter","slug":"interceptor-和-filter","link":"#interceptor-和-filter","children":[{"level":3,"title":"Interceptor","slug":"interceptor","link":"#interceptor","children":[]},{"level":3,"title":"Filter","slug":"filter","link":"#filter","children":[]},{"level":3,"title":"Filter 和 Interceptor 的区别","slug":"filter-和-interceptor-的区别","link":"#filter-和-interceptor-的区别","children":[]}]},{"level":2,"title":"Filter","slug":"filter-1","link":"#filter-1","children":[]},{"level":2,"title":"区别","slug":"区别","link":"#区别","children":[]}],"git":{"createdTime":1684318252000,"updatedTime":1731177473000,"contributors":[{"name":"刘大维","email":"davidliu@liudaweideMacBook-Pro-3.local","commits":1}]},"readingTime":{"minutes":6.49,"words":1947},"filePathRelative":"se/lang/java/framework/web/mvc/README.md","localizedDate":"May 17, 2023","excerpt":"\\n<h3>Spring MVC 的核心组件有哪些？</h3>\\n<p>记住了下面这些组件，也就记住了 SpringMVC 的工作原理。</p>\\n<ul>\\n<li><strong><code>DispatcherServlet</code></strong> ：<strong>核心的中央处理器</strong>，负责接收请求、分发，并给予客户端响应。</li>\\n<li><strong><code>HandlerMapping</code></strong> ：<strong>处理器映射器</strong>，根据 uri 去匹配查找能处理的 <code>Handler</code> ，并会将请求涉及到的拦截器和 <code>Handler</code> 一起封装。</li>\\n<li><strong><code>HandlerAdapter</code></strong> ：<strong>处理器适配器</strong>，根据 <code>HandlerMapping</code> 找到的 <code>Handler</code> ，适配执行对应的 <code>Handler</code>；</li>\\n<li><strong><code>Handler</code></strong> ：<strong>请求处理器</strong>，处理实际请求的处理器。</li>\\n<li><strong><code>ViewResolver</code></strong> ：<strong>视图解析器</strong>，根据 <code>Handler</code> 返回的逻辑视图 / 视图，解析并渲染真正的视图，并传递给 <code>DispatcherServlet</code> 响应客户端</li>\\n</ul>","autoDesc":true}`);export{p as comp,s as data};
