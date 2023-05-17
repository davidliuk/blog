# Servlet

在Java Web程序中，**Servlet**主要负责接收用户请求 `HttpServletRequest`,在`doGet()`,`doPost()`中做相应的处理，并将回应`HttpServletResponse`反馈给用户。**Servlet** 可以设置初始化参数，供Servlet内部使用。一个Servlet类只会有一个实例，在它初始化时调用`init()`方法，销毁时调用`destroy()`方法**。**Servlet需要在web.xml中配置（MyEclipse中创建Servlet会自动配置），**一个Servlet可以设置多个URL访问**。**Servlet不是线程安全**，因此要谨慎使用类变量。

## Servlet 重要方法

Servlet是Java Web应用程序中的一种Java类，用于处理HTTP请求和响应。以下是Servlet中一些重要的方法：

1. init()方法：在Servlet被创建时调用，用于初始化Servlet。可以在这个方法中进行一些初始化操作，例如读取配置文件、建立数据库连接等。

2. service()方法：用于处理HTTP请求和响应。当客户端发送请求时，容器会调用Servlet的service()方法来处理请求，并将响应发送回客户端。

3. doGet()方法和doPost()方法：这两个方法是service()方法的具体实现。当客户端发送GET请求时，容器会调用doGet()方法来处理请求；当客户端发送POST请求时，容器会调用doPost()方法来处理请求。在这两个方法中，可以通过HttpServletRequest对象获取请求参数，并通过HttpServletResponse对象设置响应内容。

   需要重写HttpServlet中的这些方法doPost、doDelete，不然就会显示methodNotAllowed

4. destroy()方法：在Servlet被销毁时调用，用于释放资源。可以在这个方法中进行一些清理操作，例如关闭数据库连接、释放内存等。

5. getServletConfig()方法和getServletContext()方法：这两个方法用于获取Servlet的配置信息和上下文信息。可以通过getServletConfig()方法获取Servlet的初始化参数，通过getServletContext()方法获取Servlet上下文信息。

6. getServletInfo()方法：用于获取Servlet的描述信息。可以在web.xml文件中配置Servlet的描述信息。

总之，Servlet中的这些方法都是非常重要的，它们可以帮助我们处理HTTP请求和响应，并进行一些初始化和清理操作。在编写Servlet时，需要根据实际情况重写这些方法，以实现自己的业务逻辑。

## 什么情况下调用doGet()和doPost()

Form标签里的method的属性为get时调用doGet()，为post时调用doPost()。

## 转发(Forward)和重定向(Redirect)的区别

**转发是服务器行为，重定向是客户端行为。**

**转发（Forward）** 通过RequestDispatcher对象的forward（HttpServletRequest request,HttpServletResponse response）方法实现的。RequestDispatcher可以通过HttpServletRequest 的getRequestDispatcher()方法获得。例如下面的代码就是跳转到login_success.jsp页面。

```java
request.getRequestDispatcher("login_success.jsp").forward(request, response);
```

**重定向（Redirect）** 是利用服务器返回的状态码来实现的。客户端浏览器请求服务器的时候，服务器会返回一个状态码。服务器通过 `HttpServletResponse` 的 `setStatus(int status)` 方法设置状态码。如果服务器返回301或者302，则浏览器会到新的网址重新请求该资源。

1. **从地址栏显示来说**

forward是服务器请求资源,服务器直接访问目标地址的URL,把那个URL的响应内容读取过来,然后把这些内容再发给浏览器.浏览器根本不知道服务器发送的内容从哪里来的,所以它的地址栏还是原来的地址. redirect是服务端根据逻辑,发送一个状态码,告诉浏览器重新去请求那个地址.所以地址栏显示的是新的URL.

1. **从数据共享来说**

forward:转发页面和转发到的页面可以共享request里面的数据. redirect:不能共享数据.

1. **从运用地方来说**

forward:一般用于用户登陆的时候,根据角色转发到相应的模块. redirect:一般用于用户注销登陆时返回主页面和跳转到其它的网站等

1. 从效率来说

forward:高. redirect:低.

## 自动刷新(Refresh)

自动刷新不仅可以实现一段时间之后自动跳转到另一个页面，还可以实现一段时间之后自动刷新本页面。Servlet中通过HttpServletResponse对象设置Header属性实现自动刷新例如：

```java
Response.setHeader("Refresh","5;URL=http://localhost:8080/servlet/example.htm");
```

其中5为时间，单位为秒。URL指定就是要跳转的页面（如果设置自己的路径，就会实现每过5秒自动刷新本页面一次）

## Servlet与线程安全

**Servlet不是线程安全的，多线程并发的读写会导致数据不同步的问题。** 解决的办法是尽量不要定义name属性，而是要把name变量分别定义在doGet()和doPost()方法内。虽然使用synchronized(name){}语句块可以解决问题，但是会造成线程的等待，不是很科学的办法。 注意：多线程的并发的读写Servlet类属性会导致数据不同步。但是如果只是并发地读取属性而不写入，则不存在数据不同步的问题。因此Servlet里的只读属性最好定义为final类型的。

