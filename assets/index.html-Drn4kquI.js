import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as r,d as o,o as n}from"./app-ChU1gMRF.js";const p={};function i(a,e){return n(),r("div",null,e[0]||(e[0]=[o('<h1 id="domain-driven-design" tabindex="-1"><a class="header-anchor" href="#domain-driven-design"><span>Domain Driven Design</span></a></h1><p><a href="https://juejin.cn/post/7275222603886788620?utm_source=gold_browser_extension" target="_blank" rel="noopener noreferrer">教程</a></p><blockquote><p>参考文献：<a href="https://juejin.cn/post/7316202778790625290" target="_blank" rel="noopener noreferrer">JD云方案</a></p></blockquote><p>贫血/失血模型</p><p>充血模型</p><p>由于过去ER模型以及主流ORM框架的发展，让很多开发者对实体的概念还停留在与关系形数据库映射这个层面。从而导致实体只有空洞的属性，而实体的业务逻辑散落各个service、util、helper、handler等各种角落中。这种现象就被称为贫血模型现象。</p><blockquote><p>如何判断自己的工程是否有贫血模型现象？</p></blockquote><p>1、大量的XxxDO或者Xxx：实体对象只包含与数据库表映射的属性，没有行为或者及其少量的行为；</p><p>2、业务逻辑在各种service、controller、util、helper、handler中：实体的业务逻辑散落在不同层级、不同类、不同方法中，相似场景有大量的重复代码。</p><h3 id="_3-4-为什么贫血模型不好" tabindex="-1"><a class="header-anchor" href="#_3-4-为什么贫血模型不好"><span>3.4 为什么贫血模型不好？</span></a></h3><p>无法保证实体对象的完整性和一致性：贫血模型下，实体属性的状态和值只能由调用方保证，但是属性的get和set是公开的，因此所有调用方都可以调用。所以无法保证对象的完整性和一致性。</p><p>操作实体对象的边界很难发现：由于对象只有属性，属性的边界值、调用范围不受实体自身控制，各个地方都可以调用，边界值和范围也只能由调用方自行保障。如果实体的边界值有所变化，那么所有调用方都需要调整，这种情况下很容易导致bug的产生。</p><p>强依赖底层：贫血模型下的实体和数据库模型映射、协议等。因此如果底层改变，那么上层逻辑需要全部跟着改变。“软件”变成了“固件”。</p><p>总结一句话：贫血模型下，软件的可维护性、可扩展性、可测试性极差！</p><p>使用repository之后，数据模型和领域模型都各司其职。通过Assembler和Converter进行模型之间的转换。</p><blockquote><p>在代码中，动态转换映射 VS 静态转换映射</p></blockquote><p>虽然Assembler/Converter是非常好用的对象，但是当业务复杂时，手写Assembler/Converter是一件耗时且容易出bug的事情，所以业界会有多种Bean Mapping的解决方案，从本质上分为动态和静态映射。</p><p>动态映射方案包括比较原始的 BeanUtils.copyProperties、能通过xml配置的Dozer等，其核心是在运行时根据反射动态赋值。动态方案的缺陷在于大量的反射调用，性能比较差，内存占用多，不适合特别高并发的应用场景。而BeanUtils等copy类工具隐藏了内部copy的过程，很容易引发bug且不易排查。</p><p>MapStruct通过注解，在编译时静态生成映射代码，其最终编译出来的代码和手写的代码在性能上完全一致，且有强大的注解等能力。会节省大量的成本。</p><p>根本原因就是，大部分的开发人员混淆了数据模型和领域模型这两个概念。</p><p>数据模型（Data Model）：数据模型解决的是数据如何持久化、如何传输的问题；</p><p>领域模型（Domin Model）：领域指的是某一个独立的业务领域或者问题空间，领域模型就是解决这个业务领域或者问题空间而设计的模型；解决的是业务领域的问题。</p><p>在DDD中，repository就是用于区分数据模型和领域模型提出来的概念。</p>',23)]))}const d=t(p,[["render",i],["__file","index.html.vue"]]),c=JSON.parse(`{"path":"/se/design/system/ddd/","title":"Domain Driven Design","lang":"en-US","frontmatter":{"description":"Domain Driven Design 教程 参考文献：JD云方案 贫血/失血模型 充血模型 由于过去ER模型以及主流ORM框架的发展，让很多开发者对实体的概念还停留在与关系形数据库映射这个层面。从而导致实体只有空洞的属性，而实体的业务逻辑散落各个service、util、helper、handler等各种角落中。这种现象就被称为贫血模型现象。 如何...","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/se/design/system/ddd/"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"Domain Driven Design"}],["meta",{"property":"og:description","content":"Domain Driven Design 教程 参考文献：JD云方案 贫血/失血模型 充血模型 由于过去ER模型以及主流ORM框架的发展，让很多开发者对实体的概念还停留在与关系形数据库映射这个层面。从而导致实体只有空洞的属性，而实体的业务逻辑散落各个service、util、helper、handler等各种角落中。这种现象就被称为贫血模型现象。 如何..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-11-09T18:37:53.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-09T18:37:53.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Domain Driven Design\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-09T18:37:53.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[{"level":3,"title":"3.4 为什么贫血模型不好？","slug":"_3-4-为什么贫血模型不好","link":"#_3-4-为什么贫血模型不好","children":[]}],"git":{"createdTime":1715153702000,"updatedTime":1731177473000,"contributors":[{"name":"刘大维","email":"davidliu@liudaweideMacBook-Pro-3.local","commits":1}]},"readingTime":{"minutes":3.08,"words":925},"filePathRelative":"se/design/system/ddd/README.md","localizedDate":"May 8, 2024","excerpt":"\\n<p><a href=\\"https://juejin.cn/post/7275222603886788620?utm_source=gold_browser_extension\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">教程</a></p>\\n<blockquote>\\n<p>参考文献：<a href=\\"https://juejin.cn/post/7316202778790625290\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">JD云方案</a></p>\\n</blockquote>\\n<p>贫血/失血模型</p>","autoDesc":true}`);export{d as comp,c as data};
