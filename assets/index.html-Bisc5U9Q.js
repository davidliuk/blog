import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,d as n,o as l}from"./app-Cv-jMnVl.js";const e={};function t(p,i){return l(),a("div",null,i[0]||(i[0]=[n(`<h1 id="事务" tabindex="-1"><a class="header-anchor" href="#事务"><span>事务</span></a></h1><h3 id="事务定义" tabindex="-1"><a class="header-anchor" href="#事务定义"><span>事务定义</span></a></h3><p>事务是一组操作的集合，它是一个不可分割的工作单位，事务会把所有的操作作为一个整体一起向系统提交或撤销操作请求，即这些操作要么同时成功，要么同时失败。</p><p>默认 MySQL 的事务是自动提交的，也就是说，当执行一条 DML 语句，MySQL 会立即隐式的提交事务。</p><h2 id="事务操作" tabindex="-1"><a class="header-anchor" href="#事务操作"><span>事务操作</span></a></h2><h3 id="方法一" tabindex="-1"><a class="header-anchor" href="#方法一"><span>方法一</span></a></h3><p>取消自动提交</p><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">set</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> @@autocommit </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">-- 写操作</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">-- 操作</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">-- 提交事务</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">commit</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">-- 如果异常，则不要执行commit，要回滚事务</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">rollback</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="方式二" tabindex="-1"><a class="header-anchor" href="#方式二"><span>方式二</span></a></h3><p>开启事务</p><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">-- begin 或者如下都可以</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">start transaction</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">-- 提交事务</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">commit</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">-- 回滚事务</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">rollback</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="事物分类" tabindex="-1"><a class="header-anchor" href="#事物分类"><span>事物分类</span></a></h2><h3 id="数据库角度" tabindex="-1"><a class="header-anchor" href="#数据库角度"><span>数据库角度</span></a></h3><p>根据数据源的数量分为本地事务和全局事务：</p><p>本地事务：普通事务，独立的一个数据库，保证在该数据库上操作的ACID。</p><p>分布式事务：涉及两个或多个数据库源的事务，即跨越多台同类或异类数据库的事务（由每台数据库的本地事务组成的），分布式事务旨在保证这些本地事务的所有操作的ACID，使事务可以跨越多台数据库；</p><ul><li><p>扁平事务(Flat Transactions)</p><p>最常用</p></li><li><p>带有保存点的扁平事务(Flat Transactions with Savepoints)</p><p>带有保存点的扁平事务 除了支持扁平事务支持的操作外，允许在事务执行过程设置一个保存点.从而达到将事务回滚到此位置的目的.</p></li><li><p>链事务(Chained Transactions)</p><p>链式事务基于带有保存点的事务基础上,自动将当前事务的上下文隐式传递给下一个事务.</p></li><li><p>嵌套事务(Nested Transactions)</p><p>嵌套事务就是多个事务处于嵌套状态,然后由一个顶层事务控制各个事务.</p></li><li><p>分布式事务(Distributed Transactions)</p><p>指事务的参与者,事务所在的服务器,涉及到资源服务器以及事务管理器等分别位于不同的服务或数据库节点上.</p></li></ul><h3 id="java-角度" tabindex="-1"><a class="header-anchor" href="#java-角度"><span>Java 角度</span></a></h3><p>根据规范分为JDBC事务和JTA事务</p><p>JDBC事务：普通事务，即数据库事务中的本地事务，通过connection对象控制管理。</p><p>JTA事务：JTA指Java事务API(Java Transaction API)，是Java EE数据库事务规范， JTA只提供了事务管理接口，由应用程序服务器厂商（如WebSphere Application Server）提供实现，JTA事务比JDBC更强大，支持分布式事务（当然也支持本地事务）。</p><h3 id="编程角度-spring层面" tabindex="-1"><a class="header-anchor" href="#编程角度-spring层面"><span>编程角度（Spring层面）</span></a></h3><p>根据是否通过编程分为声明式事务和编程式事务</p><p>声明式事务：通过XML配置或者注解实现，更为简单</p><p>编程式事务：通过编程代码在业务逻辑时需要时自行实现，粒度更小。</p><blockquote><p>声明式事务管理建立在AOP之上的。其<strong>本质是对方法前后进行拦截，然后在目标方法开始之前创建或者加入一个事务</strong>，在执行完目标方法之后根据执行情况提交或者回滚事务。</p></blockquote><p>声明式事务最大的优点就是不需要通过编程的方式管理事务，这样就不需要在业务逻辑代码中掺杂事务管理的代码，只需在配置文件中做相关的事务规则声明(或通过基于@Transactional注解的方式)，便可以将事务规则应用到业务逻辑中。</p>`,27)]))}const r=s(e,[["render",t],["__file","index.html.vue"]]),c=JSON.parse(`{"path":"/cs/database/mysql/transaction/","title":"事务","lang":"en-US","frontmatter":{"description":"事务 事务定义 事务是一组操作的集合，它是一个不可分割的工作单位，事务会把所有的操作作为一个整体一起向系统提交或撤销操作请求，即这些操作要么同时成功，要么同时失败。 默认 MySQL 的事务是自动提交的，也就是说，当执行一条 DML 语句，MySQL 会立即隐式的提交事务。 事务操作 方法一 取消自动提交 方式二 开启事务 事物分类 数据库角度 根据数...","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/cs/database/mysql/transaction/"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"事务"}],["meta",{"property":"og:description","content":"事务 事务定义 事务是一组操作的集合，它是一个不可分割的工作单位，事务会把所有的操作作为一个整体一起向系统提交或撤销操作请求，即这些操作要么同时成功，要么同时失败。 默认 MySQL 的事务是自动提交的，也就是说，当执行一条 DML 语句，MySQL 会立即隐式的提交事务。 事务操作 方法一 取消自动提交 方式二 开启事务 事物分类 数据库角度 根据数..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-06-27T01:21:47.000Z"}],["meta",{"property":"article:modified_time","content":"2024-06-27T01:21:47.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"事务\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-06-27T01:21:47.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[{"level":3,"title":"事务定义","slug":"事务定义","link":"#事务定义","children":[]},{"level":2,"title":"事务操作","slug":"事务操作","link":"#事务操作","children":[{"level":3,"title":"方法一","slug":"方法一","link":"#方法一","children":[]},{"level":3,"title":"方式二","slug":"方式二","link":"#方式二","children":[]}]},{"level":2,"title":"事物分类","slug":"事物分类","link":"#事物分类","children":[{"level":3,"title":"数据库角度","slug":"数据库角度","link":"#数据库角度","children":[]},{"level":3,"title":"Java 角度","slug":"java-角度","link":"#java-角度","children":[]},{"level":3,"title":"编程角度（Spring层面）","slug":"编程角度-spring层面","link":"#编程角度-spring层面","children":[]}]}],"git":{"createdTime":1672746435000,"updatedTime":1719451307000,"contributors":[{"name":"刘大维","email":"davidliu@liudaweideMacBook-Pro.local","commits":4},{"name":"davidliuk","email":"l729641074@163.com","commits":3}]},"readingTime":{"minutes":3,"words":899},"filePathRelative":"cs/database/mysql/transaction/README.md","localizedDate":"January 3, 2023","excerpt":"\\n<h3>事务定义</h3>\\n<p>事务是一组操作的集合，它是一个不可分割的工作单位，事务会把所有的操作作为一个整体一起向系统提交或撤销操作请求，即这些操作要么同时成功，要么同时失败。</p>\\n<p>默认 MySQL 的事务是自动提交的，也就是说，当执行一条 DML 语句，MySQL 会立即隐式的提交事务。</p>\\n<h2>事务操作</h2>\\n<h3>方法一</h3>\\n<p>取消自动提交</p>\\n<div class=\\"language-sql line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"sql\\" data-title=\\"sql\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">set</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> @@autocommit </span><span style=\\"--shiki-light:#383A42;--shiki-dark:#56B6C2\\">=</span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\"> 0</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\">-- 写操作</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\">-- 操作</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\">-- 提交事务</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">commit</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">;</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\">-- 如果异常，则不要执行commit，要回滚事务</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">rollback</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">;</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{r as comp,c as data};
