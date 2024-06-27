# Interceptor 拦截器

过滤器（Filter）和拦截器（Interceptor）是在Java Web应用中用于处理HTTP请求和响应的两种常见机制。它们都可以在请求到达目标资源之前进行预处理，以及在响应返回客户端之前进行后处理。但它们的实现方式和应用场景略有不同。

### 过滤器（Filter）：

1. **工作原理**：
   - 在Servlet规范中，过滤器是javax.servlet.Filter接口的实现类，它可以拦截HTTP请求和响应，对其进行处理，然后将请求传递给目标资源或将响应返回给客户端。
   - 过滤器在Web应用启动时被初始化，并在容器启动时被调用，可以拦截多个URL或请求。

2. **应用场景**：
   - 过滤器常用于处理HTTP请求和响应的一些通用任务，比如日志记录、编码转换、权限控制、安全性过滤等。

3. **示例**：
   - 日志记录：记录请求信息、响应时间等。
   - 字符编码转换：确保请求和响应中的字符编码一致。
   - 权限控制：验证用户的身份和权限等。

### 拦截器（Interceptor）：

1. **工作原理**：
   - 拦截器是Spring框架提供的一种机制，它在Spring MVC中用于对Controller方法的调用进行拦截和处理。
   - 拦截器是Spring的一部分，它在Spring容器中被管理，并且能够利用Spring的依赖注入和AOP等特性。

2. **应用场景**：
   - 拦截器通常用于对请求进行处理、验证、记录日志等，但是它是在Spring MVC框架中才有的特性，主要用于处理Controller的请求。
   - 拦截器在Controller方法执行前后进行拦截，可以对请求进行预处理，也可以对响应进行后处理。

3. **示例**：
   - 权限验证：在进入Controller之前验证用户权限。
   - 日志记录：记录Controller方法的执行日志。
   - 数据预处理：对请求数据进行处理，例如数据格式转换、验证等。

### 区别总结：

- 过滤器是Servlet规范的一部分，而拦截器是Spring MVC框架提供的功能。
- 过滤器可以在Web应用的整个请求和响应过程中进行操作，而拦截器只能拦截Controller方法的调用。
- 过滤器依赖于Servlet容器，而拦截器依赖于Spring容器。
- 过滤器可以处理任何类型的请求和响应，而拦截器只能拦截Controller方法的调用。

根据具体的应用场景和需求，选择合适的过滤器或者拦截器来处理HTTP请求和响应。

有一些场景确实只能通过过滤器来实现，而拦截器无法实现，例如：

1. **在Servlet规范层面进行全局配置**：过滤器可以在web.xml中进行全局配置，对所有请求进行拦截和处理，而拦截器需要在Spring上下文中配置，只能对Spring MVC的Controller进行拦截。
2. **对静态资源的处理**：过滤器可以拦截对静态资源的访问，例如HTML、CSS、JavaScript等文件，而拦截器只能拦截对Controller的请求。
3. **修改HTTP请求和响应的头部信息**：过滤器可以直接修改HTTP请求和响应的头部信息，例如添加、删除或修改头部信息，而拦截器无法直接操作HTTP请求和响应。
4. **包装请求和响应对象**：过滤器可以对HTTP请求和响应对象进行包装，以提供额外的功能或修改请求和响应的内容，而拦截器无法像过滤器那样包装请求和响应对象。