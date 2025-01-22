import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as r,d as s,o as i}from"./app-ktFCNIob.js";const l={};function a(o,e){return i(),r("div",null,e[0]||(e[0]=[s('<h1 id="servlet" tabindex="-1"><a class="header-anchor" href="#servlet"><span>Servlet</span></a></h1><p>在 Java Web 程序中，<strong>Servlet</strong>主要负责接收用户请求 <code>HttpServletRequest</code>,在<code>doGet()</code>,<code>doPost()</code>中做相应的处理，并将回应<code>HttpServletResponse</code>反馈给用户。<strong>Servlet</strong> 可以设置初始化参数，供 Servlet 内部使用。一个 Servlet 类只会有一个实例，在它初始化时调用<code>init()</code>方法，销毁时调用<code>destroy()</code>方法**。**Servlet 需要在 web.xml 中配置（MyEclipse 中创建 Servlet 会自动配置），<strong>一个 Servlet 可以设置多个 URL 访问</strong>。<strong>Servlet 不是线程安全</strong>，因此要谨慎使用类变量。</p><h2 id="servlet-重要方法" tabindex="-1"><a class="header-anchor" href="#servlet-重要方法"><span>Servlet 重要方法</span></a></h2><p>Servlet 是 Java Web 应用程序中的一种 Java 类，用于处理 HTTP 请求和响应。以下是 Servlet 中一些重要的方法：</p><ol><li><p>init()方法：在 Servlet 被创建时调用，用于初始化 Servlet。可以在这个方法中进行一些初始化操作，例如读取配置文件、建立数据库连接等。</p></li><li><p>service()方法：用于处理 HTTP 请求和响应。当客户端发送请求时，容器会调用 Servlet 的 service()方法来处理请求，并将响应发送回客户端。</p></li><li><p>doGet()方法和 doPost()方法：这两个方法是 service()方法的具体实现。当客户端发送 GET 请求时，容器会调用 doGet()方法来处理请求；当客户端发送 POST 请求时，容器会调用 doPost()方法来处理请求。在这两个方法中，可以通过 HttpServletRequest 对象获取请求参数，并通过 HttpServletResponse 对象设置响应内容。</p><p>需要重写 HttpServlet 中的这些方法 doPost、doDelete，不然就会显示 methodNotAllowed</p></li><li><p>destroy()方法：在 Servlet 被销毁时调用，用于释放资源。可以在这个方法中进行一些清理操作，例如关闭数据库连接、释放内存等。</p></li><li><p>getServletConfig()方法和 getServletContext()方法：这两个方法用于获取 Servlet 的配置信息和上下文信息。可以通过 getServletConfig()方法获取 Servlet 的初始化参数，通过 getServletContext()方法获取 Servlet 上下文信息。</p></li><li><p>getServletInfo()方法：用于获取 Servlet 的描述信息。可以在 web.xml 文件中配置 Servlet 的描述信息。</p></li></ol><p>总之，Servlet 中的这些方法都是非常重要的，它们可以帮助我们处理 HTTP 请求和响应，并进行一些初始化和清理操作。在编写 Servlet 时，需要根据实际情况重写这些方法，以实现自己的业务逻辑。</p><h2 id="什么情况下调用-doget-和-dopost" tabindex="-1"><a class="header-anchor" href="#什么情况下调用-doget-和-dopost"><span>什么情况下调用 doGet() 和 doPost()</span></a></h2><p>Form 标签里的 method 的属性为 get 时调用 doGet()，为 post 时调用 doPost()。</p><h2 id="转发-forward-和重定向-redirect-的区别" tabindex="-1"><a class="header-anchor" href="#转发-forward-和重定向-redirect-的区别"><span>转发(Forward)和重定向(Redirect)的区别</span></a></h2><p><strong>转发是服务器行为，重定向是客户端行为。</strong></p><p><strong>转发（Forward）</strong> 通过 RequestDispatcher 对象的 forward（HttpServletRequest request,HttpServletResponse response）方法实现的。RequestDispatcher 可以通过 HttpServletRequest 的 getRequestDispatcher()方法获得。例如下面的代码就是跳转到 login_success.jsp 页面。</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">request</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">getRequestDispatcher</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;login_success.jsp&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">).</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">forward</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(request, response);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong>重定向（Redirect）</strong> 是利用服务器返回的状态码来实现的。客户端浏览器请求服务器的时候，服务器会返回一个状态码。服务器通过 <code>HttpServletResponse</code> 的 <code>setStatus(int status)</code> 方法设置状态码。如果服务器返回 301 或者 302，则浏览器会到新的网址重新请求该资源。</p><ol><li><strong>从地址栏显示来说</strong></li></ol><p>forward 是服务器请求资源,服务器直接访问目标地址的 URL,把那个 URL 的响应内容读取过来，然后把这些内容再发给浏览器。浏览器根本不知道服务器发送的内容从哪里来的，所以它的地址栏还是原来的地址。redirect 是服务端根据逻辑，发送一个状态码,告诉浏览器重新去请求那个地址.所以地址栏显示的是新的 URL.</p><ol><li><strong>从数据共享来说</strong></li></ol><p>forward:转发页面和转发到的页面可以共享 request 里面的数据. redirect:不能共享数据.</p><ol><li><strong>从运用地方来说</strong></li></ol><p>forward:一般用于用户登陆的时候,根据角色转发到相应的模块. redirect:一般用于用户注销登陆时返回主页面和跳转到其它的网站等</p><ol><li>从效率来说</li></ol><p>forward:高. redirect:低.</p><h2 id="自动刷新-refresh" tabindex="-1"><a class="header-anchor" href="#自动刷新-refresh"><span>自动刷新(Refresh)</span></a></h2><p>自动刷新不仅可以实现一段时间之后自动跳转到另一个页面，还可以实现一段时间之后自动刷新本页面。Servlet 中通过 HttpServletResponse 对象设置 Header 属性实现自动刷新例如：</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">Response</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">setHeader</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;Refresh&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;5;URL=http://localhost:8080/servlet/example.htm&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>其中 5 为时间，单位为秒。URL 指定就是要跳转的页面（如果设置自己的路径，就会实现每过 5 秒自动刷新本页面一次）</p><h2 id="servlet-与线程安全" tabindex="-1"><a class="header-anchor" href="#servlet-与线程安全"><span>Servlet 与线程安全</span></a></h2><p><strong>Servlet 不是线程安全的，多线程并发的读写会导致数据不同步的问题。</strong> 解决的办法是尽量不要定义 name 属性，而是要把 name 变量分别定义在 doGet()和 doPost()方法内。虽然使用 synchronized(name){}语句块可以解决问题，但是会造成线程的等待，不是很科学的办法。 注意：多线程的并发的读写 Servlet 类属性会导致数据不同步。但是如果只是并发地读取属性而不写入，则不存在数据不同步的问题。因此 Servlet 里的只读属性最好定义为 final 类型的。</p><h2 id="filter-过滤器" tabindex="-1"><a class="header-anchor" href="#filter-过滤器"><span>Filter 过滤器</span></a></h2>',28)]))}const p=t(l,[["render",a],["__file","servlet.html.vue"]]),h=JSON.parse(`{"path":"/se/lang/java/framework/web/mvc/servlet.html","title":"Servlet","lang":"en-US","frontmatter":{"description":"Servlet 在 Java Web 程序中，Servlet主要负责接收用户请求 HttpServletRequest,在doGet(),doPost()中做相应的处理，并将回应HttpServletResponse反馈给用户。Servlet 可以设置初始化参数，供 Servlet 内部使用。一个 Servlet 类只会有一个实例，在它初始化时调用in...","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/se/lang/java/framework/web/mvc/servlet.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"Servlet"}],["meta",{"property":"og:description","content":"Servlet 在 Java Web 程序中，Servlet主要负责接收用户请求 HttpServletRequest,在doGet(),doPost()中做相应的处理，并将回应HttpServletResponse反馈给用户。Servlet 可以设置初始化参数，供 Servlet 内部使用。一个 Servlet 类只会有一个实例，在它初始化时调用in..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-11-09T18:37:53.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-09T18:37:53.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Servlet\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-09T18:37:53.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[{"level":2,"title":"Servlet 重要方法","slug":"servlet-重要方法","link":"#servlet-重要方法","children":[]},{"level":2,"title":"什么情况下调用 doGet() 和 doPost()","slug":"什么情况下调用-doget-和-dopost","link":"#什么情况下调用-doget-和-dopost","children":[]},{"level":2,"title":"转发(Forward)和重定向(Redirect)的区别","slug":"转发-forward-和重定向-redirect-的区别","link":"#转发-forward-和重定向-redirect-的区别","children":[]},{"level":2,"title":"自动刷新(Refresh)","slug":"自动刷新-refresh","link":"#自动刷新-refresh","children":[]},{"level":2,"title":"Servlet 与线程安全","slug":"servlet-与线程安全","link":"#servlet-与线程安全","children":[]},{"level":2,"title":"Filter 过滤器","slug":"filter-过滤器","link":"#filter-过滤器","children":[]}],"git":{"createdTime":1684318252000,"updatedTime":1731177473000,"contributors":[{"name":"刘大维","email":"davidliu@liudaweideMacBook-Pro-3.local","commits":1}]},"readingTime":{"minutes":4.48,"words":1345},"filePathRelative":"se/lang/java/framework/web/mvc/servlet.md","localizedDate":"May 17, 2023","excerpt":"\\n<p>在 Java Web 程序中，<strong>Servlet</strong>主要负责接收用户请求 <code>HttpServletRequest</code>,在<code>doGet()</code>,<code>doPost()</code>中做相应的处理，并将回应<code>HttpServletResponse</code>反馈给用户。<strong>Servlet</strong> 可以设置初始化参数，供 Servlet 内部使用。一个 Servlet 类只会有一个实例，在它初始化时调用<code>init()</code>方法，销毁时调用<code>destroy()</code>方法**。**Servlet 需要在 web.xml 中配置（MyEclipse 中创建 Servlet 会自动配置），<strong>一个 Servlet 可以设置多个 URL 访问</strong>。<strong>Servlet 不是线程安全</strong>，因此要谨慎使用类变量。</p>","autoDesc":true}`);export{p as comp,h as data};
