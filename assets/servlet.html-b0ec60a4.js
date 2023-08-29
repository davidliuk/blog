const e=JSON.parse(`{"key":"v-c8e33b14","path":"/se/framework/spring/mvc/servlet.html","title":"Servlet","lang":"en-US","frontmatter":{"description":"Servlet 在 Java Web 程序中，Servlet主要负责接收用户请求 HttpServletRequest,在doGet(),doPost()中做相应的处理，并将回应HttpServletResponse反馈给用户。Servlet 可以设置初始化参数，供 Servlet 内部使用。一个 Servlet 类只会有一个实例，在它初始化时调用init()方法，销毁时调用destroy()方法**。**Servlet 需要在 web.xml 中配置（MyEclipse 中创建 Servlet 会自动配置），一个 Servlet 可以设置多个 URL 访问。Servlet 不是线程安全，因此要谨慎使用类变量。","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/se/framework/spring/mvc/servlet.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"Servlet"}],["meta",{"property":"og:description","content":"Servlet 在 Java Web 程序中，Servlet主要负责接收用户请求 HttpServletRequest,在doGet(),doPost()中做相应的处理，并将回应HttpServletResponse反馈给用户。Servlet 可以设置初始化参数，供 Servlet 内部使用。一个 Servlet 类只会有一个实例，在它初始化时调用init()方法，销毁时调用destroy()方法**。**Servlet 需要在 web.xml 中配置（MyEclipse 中创建 Servlet 会自动配置），一个 Servlet 可以设置多个 URL 访问。Servlet 不是线程安全，因此要谨慎使用类变量。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-08-21T10:17:45.000Z"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2023-08-21T10:17:45.000Z"}],["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://davidliuk.github.io/blog/blog/zh/se/framework/spring/mvc/servlet.html"}]]},"headers":[{"level":2,"title":"Servlet 重要方法","slug":"servlet-重要方法","link":"#servlet-重要方法","children":[]},{"level":2,"title":"什么情况下调用 doGet()和 doPost()","slug":"什么情况下调用-doget-和-dopost","link":"#什么情况下调用-doget-和-dopost","children":[]},{"level":2,"title":"转发(Forward)和重定向(Redirect)的区别","slug":"转发-forward-和重定向-redirect-的区别","link":"#转发-forward-和重定向-redirect-的区别","children":[]},{"level":2,"title":"自动刷新(Refresh)","slug":"自动刷新-refresh","link":"#自动刷新-refresh","children":[]},{"level":2,"title":"Servlet 与线程安全","slug":"servlet-与线程安全","link":"#servlet-与线程安全","children":[]}],"git":{"createdTime":1684318252000,"updatedTime":1692613065000,"contributors":[{"name":"liudawei47","email":"liudawei47@jd.com","commits":1},{"name":"刘大维","email":"davidliu@liudaweideMacBook-Pro.local","commits":1}]},"readingTime":{"minutes":4.51,"words":1353},"localizedDate":"May 17, 2023","filePathRelative":"se/framework/spring/mvc/servlet.md","excerpt":"<h1> Servlet</h1>\\n<p>在 Java Web 程序中，<strong>Servlet</strong>主要负责接收用户请求 <code>HttpServletRequest</code>,在<code>doGet()</code>,<code>doPost()</code>中做相应的处理，并将回应<code>HttpServletResponse</code>反馈给用户。<strong>Servlet</strong> 可以设置初始化参数，供 Servlet 内部使用。一个 Servlet 类只会有一个实例，在它初始化时调用<code>init()</code>方法，销毁时调用<code>destroy()</code>方法**。**Servlet 需要在 web.xml 中配置（MyEclipse 中创建 Servlet 会自动配置），<strong>一个 Servlet 可以设置多个 URL 访问</strong>。<strong>Servlet 不是线程安全</strong>，因此要谨慎使用类变量。</p>","autoDesc":true}`);export{e as data};