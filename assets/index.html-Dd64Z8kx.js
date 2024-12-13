import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as n,d as t,o as i}from"./app-DIqbhby7.js";const r={};function o(c,e){return i(),n("div",null,e[0]||(e[0]=[t(`<h1 id="dependency-injection" tabindex="-1"><a class="header-anchor" href="#dependency-injection"><span>Dependency Injection</span></a></h1><ul><li>Guice 运行时</li><li>Dagger 编译时</li></ul><p>Guice和Dagger都是Java的依赖注入框架，他们有很多相似性，所以放到一起比较一下：</p><pre><code>相同点：
    基于Java
    由Google维护（Dagger最早是Square开发的，Dagger2已经过继给了Google）
    兼容JSR-330注解规范
    因为兼容JSR-330，所以需要修改源码添加注解实现注入，相对于Spring通过外部配置文件的方式对源码有侵入性
不同点
    Guice历史更悠久，早在JSR-330之前就诞生并影响了JSR-330标准的制定，Dagger是在JSR-330之后出现的
    Guice在运行时通过反射创建依赖；Dagger在编译期提前生成依赖创建的代码
    Dagger比较适合在Android上使用，因为移动平台对性能更敏感，希望反射越少越好
    Dagger的API更简单，stacetrace更友好
</code></pre><p>通过对比可见，最主要区别在于Guice的依赖注入是Runtime完成的，而Dagger是CompileTime完成了大部分工作</p><p>正如您已经知道的，任何依赖注入框架在某个时候都需要构建应用程序所需对象的某种依赖关系图。构建此图通常是DI框架中计算开销最大的部分。</p><p>Guice通过在运行时使用反射来计算出这个图。Dagger生成在编译时表示依赖关系图的代码。我不知道哪一个更快，但我知道使用反射会带来一个重要的性能问题。</p><p>然而，最大的区别是，Dagger在编译时完成所有繁重的工作(这意味着您只做一次工作，不管运行了多少次)，而Guice必须在每次应用程序启动时完成相同的工作。</p><p>现在，为了回答您的问题，如果您的应用程序经常启动和停止，则首选Dagger。就像移动应用程序一样，较慢的启动时间只会降低用户体验。使用Lambda，它不仅会减慢冷启动时间，而且由于代码运行的时间是收费的，所以要不断地重建依赖关系图实际上要花费更多的钱。</p><p>TLDR; Dagger是Lambda的首选(包括冷启动时间和成本)，因为它将DI框架中最昂贵的部分移动到编译时，而不是在运行时执行它。</p><p>module是可以互相嵌套与并列的，嵌套的话可以install引入，当然还有覆盖。</p>`,11)]))}const d=a(r,[["render",o],["__file","index.html.vue"]]),l=JSON.parse(`{"path":"/se/lang/java/framework/di/","title":"Dependency Injection","lang":"en-US","frontmatter":{"description":"Dependency Injection Guice 运行时 Dagger 编译时 Guice和Dagger都是Java的依赖注入框架，他们有很多相似性，所以放到一起比较一下： 通过对比可见，最主要区别在于Guice的依赖注入是Runtime完成的，而Dagger是CompileTime完成了大部分工作 正如您已经知道的，任何依赖注入框架在某个时候都需...","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/se/lang/java/framework/di/"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"Dependency Injection"}],["meta",{"property":"og:description","content":"Dependency Injection Guice 运行时 Dagger 编译时 Guice和Dagger都是Java的依赖注入框架，他们有很多相似性，所以放到一起比较一下： 通过对比可见，最主要区别在于Guice的依赖注入是Runtime完成的，而Dagger是CompileTime完成了大部分工作 正如您已经知道的，任何依赖注入框架在某个时候都需..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-11-09T18:37:53.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-09T18:37:53.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Dependency Injection\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-09T18:37:53.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[],"git":{"createdTime":1725612282000,"updatedTime":1731177473000,"contributors":[{"name":"刘大维","email":"davidliu@liudaweideMacBook-Pro-3.local","commits":1}]},"readingTime":{"minutes":2.1,"words":631},"filePathRelative":"se/lang/java/framework/di/README.md","localizedDate":"September 6, 2024","excerpt":"\\n<ul>\\n<li>Guice 运行时</li>\\n<li>Dagger 编译时</li>\\n</ul>\\n<p>Guice和Dagger都是Java的依赖注入框架，他们有很多相似性，所以放到一起比较一下：</p>\\n<pre><code>相同点：\\n    基于Java\\n    由Google维护（Dagger最早是Square开发的，Dagger2已经过继给了Google）\\n    兼容JSR-330注解规范\\n    因为兼容JSR-330，所以需要修改源码添加注解实现注入，相对于Spring通过外部配置文件的方式对源码有侵入性\\n不同点\\n    Guice历史更悠久，早在JSR-330之前就诞生并影响了JSR-330标准的制定，Dagger是在JSR-330之后出现的\\n    Guice在运行时通过反射创建依赖；Dagger在编译期提前生成依赖创建的代码\\n    Dagger比较适合在Android上使用，因为移动平台对性能更敏感，希望反射越少越好\\n    Dagger的API更简单，stacetrace更友好\\n</code></pre>","autoDesc":true}`);export{d as comp,l as data};
