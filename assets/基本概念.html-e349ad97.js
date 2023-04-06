const e=JSON.parse(`{"key":"v-3e8b5050","path":"/se/framework/spring/beans/%E5%9F%BA%E6%9C%AC%E6%A6%82%E5%BF%B5.html","title":"Bean","lang":"en-US","frontmatter":{"description":"Bean 生命周期 Bean 容器找到配置文件中 Spring Bean 的定义。（加载 BeanDefination） Bean 容器利用 Java Reflection API 创建一个 Bean 的实例。 如果涉及到一些属性值 利用 set()方法设置一些属性值。 如果 Bean 实现了 BeanNameAware 接口，调用 setBeanName()方法，传入 Bean 的名字。 如果 Bean 实现了 BeanClassLoaderAware 接口，调用 setBeanClassLoader()方法，传入 ClassLoader对象的实例。 如果 Bean 实现了 BeanFactoryAware 接口，调用 setBeanFactory()方法，传入 BeanFactory对象的实例。 与上面的类似，如果实现了其他 *.Aware接口，就调用相应的方法。 如果有和加载这个 Bean 的 Spring 容器相关的 BeanPostProcessor 对象，执行postProcessBeforeInitialization() 方法 如果 Bean 实现了InitializingBean接口，执行afterPropertiesSet()方法。 如果 Bean 在配置文件中的定义包含 init-method 属性，执行指定的方法。 如果有和加载这个 Bean 的 Spring 容器相关的 BeanPostProcessor 对象，执行postProcessAfterInitialization() 方法 当要销毁 Bean 的时候，如果 Bean 实现了 DisposableBean 接口，执行 destroy() 方法。 当要销毁 Bean 的时候，如果 Bean 在配置文件中的定义包含 destroy-method 属性，执行指定的方法。","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/se/framework/spring/beans/%E5%9F%BA%E6%9C%AC%E6%A6%82%E5%BF%B5.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"Bean"}],["meta",{"property":"og:description","content":"Bean 生命周期 Bean 容器找到配置文件中 Spring Bean 的定义。（加载 BeanDefination） Bean 容器利用 Java Reflection API 创建一个 Bean 的实例。 如果涉及到一些属性值 利用 set()方法设置一些属性值。 如果 Bean 实现了 BeanNameAware 接口，调用 setBeanName()方法，传入 Bean 的名字。 如果 Bean 实现了 BeanClassLoaderAware 接口，调用 setBeanClassLoader()方法，传入 ClassLoader对象的实例。 如果 Bean 实现了 BeanFactoryAware 接口，调用 setBeanFactory()方法，传入 BeanFactory对象的实例。 与上面的类似，如果实现了其他 *.Aware接口，就调用相应的方法。 如果有和加载这个 Bean 的 Spring 容器相关的 BeanPostProcessor 对象，执行postProcessBeforeInitialization() 方法 如果 Bean 实现了InitializingBean接口，执行afterPropertiesSet()方法。 如果 Bean 在配置文件中的定义包含 init-method 属性，执行指定的方法。 如果有和加载这个 Bean 的 Spring 容器相关的 BeanPostProcessor 对象，执行postProcessAfterInitialization() 方法 当要销毁 Bean 的时候，如果 Bean 实现了 DisposableBean 接口，执行 destroy() 方法。 当要销毁 Bean 的时候，如果 Bean 在配置文件中的定义包含 destroy-method 属性，执行指定的方法。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-04-06T03:47:09.000Z"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2023-04-06T03:47:09.000Z"}],["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://davidliuk.github.io/blog/blog/zh/se/framework/spring/beans/%E5%9F%BA%E6%9C%AC%E6%A6%82%E5%BF%B5.html"}]]},"headers":[{"level":2,"title":"生命周期","slug":"生命周期","link":"#生命周期","children":[{"level":3,"title":"管理生命周期事件","slug":"管理生命周期事件","link":"#管理生命周期事件","children":[]}]}],"git":{"createdTime":1680752829000,"updatedTime":1680752829000,"contributors":[{"name":"davidliuk","email":"l729641074@163.com","commits":1}]},"readingTime":{"minutes":1.65,"words":496},"localizedDate":"April 6, 2023","filePathRelative":"se/framework/spring/beans/基本概念.md","excerpt":"<h1> Bean</h1>\\n<h2> 生命周期</h2>\\n<ul>\\n<li>Bean 容器找到配置文件中 Spring Bean 的定义。（加载 BeanDefination）</li>\\n<li>Bean 容器利用 Java Reflection API 创建一个 Bean 的实例。</li>\\n<li>如果涉及到一些属性值 利用 <code>set()</code>方法设置一些属性值。</li>\\n<li>如果 Bean 实现了 <code>BeanNameAware</code> 接口，调用 <code>setBeanName()</code>方法，传入 Bean 的名字。</li>\\n<li>如果 Bean 实现了 <code>BeanClassLoaderAware</code> 接口，调用 <code>setBeanClassLoader()</code>方法，传入 <code>ClassLoader</code>对象的实例。</li>\\n<li>如果 Bean 实现了 <code>BeanFactoryAware</code> 接口，调用 <code>setBeanFactory()</code>方法，传入 <code>BeanFactory</code>对象的实例。</li>\\n<li>与上面的类似，如果实现了其他 <code>*.Aware</code>接口，就调用相应的方法。</li>\\n<li>如果有和加载这个 Bean 的 Spring 容器相关的 <code>BeanPostProcessor</code> 对象，执行<code>postProcessBeforeInitialization()</code> 方法</li>\\n<li>如果 Bean 实现了<code>InitializingBean</code>接口，执行<code>afterPropertiesSet()</code>方法。</li>\\n<li>如果 Bean 在配置文件中的定义包含 init-method 属性，执行指定的方法。</li>\\n<li>如果有和加载这个 Bean 的 Spring 容器相关的 <code>BeanPostProcessor</code> 对象，执行<code>postProcessAfterInitialization()</code> 方法</li>\\n<li>当要销毁 Bean 的时候，如果 Bean 实现了 <code>DisposableBean</code> 接口，执行 <code>destroy()</code> 方法。</li>\\n<li>当要销毁 Bean 的时候，如果 Bean 在配置文件中的定义包含 destroy-method 属性，执行指定的方法。</li>\\n</ul>","autoDesc":true}`);export{e as data};
