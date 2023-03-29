import{_ as p,V as n,W as e,Z as i}from"./framework-e5d7a6b2.js";const a={},o=i('<h1 id="应用场景" tabindex="-1"><a class="header-anchor" href="#应用场景" aria-hidden="true">#</a> 应用场景</h1><p>aop称为是面向切面编程，而他的aop原理呢就是：在执行某些代码之前执行另外的代码，是程序变的灵活，扩展性更灵活，可以随意的删除和添加某些功能！</p><p>一，性能统计／计数</p><p>将与业务无关的代码，使用AOP拦截他们。</p><p>二，事务处理</p><p>调用方法前开启事务， 调用方法后提交关闭事务</p><p>三，缓存处理</p><p>简单的＂方法缓存＂可以把＂方法名－参数＂作为Key，拦截器拦截方法根据＂方法名－参数＂去缓存系统查询，如果存在就直接返回，不需要执行方法真正的逻辑～</p><p>四，日志打印</p><p>五，数据加加密/签名／验签名等场景</p><p>在支付行业往往对安全性要求比较高，我们在保存／接收／发送数据前先要对数据进行验签／签名／加密等操作，都需要做特殊处理。</p><p>比如一个手机号，我们可以通过一个＂拦截器＂对手机号，身份证号这种敏感信息做这种特殊处理；</p><p>六，权限控制</p><p>springSecurity</p><p>1、Authentication 权限</p><p>2、Caching 缓存</p><p>3、Context passing 内容传递</p><p>4、Error handling 错误处理</p><p>5、Lazy loading　懒加载</p><p>6、Debugging　　调试</p><p>7、logging, tracing, profiling and monitoring　记录跟踪　优化　校准</p><p>8、Performance optimization　性能优化</p><p>9、Persistence　　持久化</p><p>10、Resource pooling　资源池</p><p>11、Synchronization　同步</p><p>12、Transactions 事务、</p><p>aop 几个应用场景： 1、用于日志打印 2、用于全局异常处理拦截 3、返回值统一处理 4、多数据源切换</p><p>execution(方法表达式) execution(* cn.sunpiaoliang.service..<em>.</em>(..)) cn.sunpiaoliang.service 这个路径下的包或子包所有方法和所有类型的参数 返回值为任何类型 注： 第一个 “<em>” 任何类型返回值 cn.sunpiaoliang.service 路径 .. 包或子包 第二个“</em>” 所有类</p><ul><li>任何方法 (..) 任意方法 （*）只有一个参数 （）不带参数</li></ul><p>@annotation 匹配当前执行方法持有指定注解的方法，可以直接写注解，也可以直接写全路径</p><p>@within 匹配所以持有指定注解类型内的方法，全路径</p><p>aop主要是通过代理实现 1、JDK代理 2、CGlib 代理</p>',32),t=[o];function c(r,s){return n(),e("div",null,t)}const _=p(a,[["render",c],["__file","应用场景.html.vue"]]);export{_ as default};
