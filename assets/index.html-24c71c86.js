import{_ as e,V as p,W as a,Z as t}from"./framework-e5d7a6b2.js";const n={},c=t('<p>注册中心、配置中心</p><p>namespace：区分环境，比如开发、测试、生产环境</p><p>group：区别项目，比如tracenote和juejin</p><h2 id="配置中心" tabindex="-1"><a class="header-anchor" href="#配置中心" aria-hidden="true">#</a> 配置中心</h2><p>搭建完成Nacos服务发现中心，下边搭建Nacos为配置中心，其目的就是通过Nacos去管理项目的所有配置。</p><p>先将项目中的配置文件分分类：</p><p>1、每个项目特有的配置</p><p>是指该配置只在有些项目中需要配置，或者该配置在每个项目中配置的值不同。</p><p>比如：spring.application.name每个项目都需要配置但值不一样，以及有些项目需要连接数据库而有些项目不需要，有些项目需要配置消息队列而有些项目不需要。</p><p>2、项目所公用的配置</p><p>是指在若干项目中配置内容相同的配置。比如：redis的配置，很多项目用的同一套redis服务所以配置也一样。</p><p>另外还需要知道nacos如何去定位一个具体的配置文件，即：namespace、group、dataid.</p><p>1、通过namespace、group找到具体的环境和具体的项目。</p><p>2、通过dataid找到具体的配置文件，dataid有三部分组成</p><p>比如：content-service-dev.yaml配置文件 由（content-service）-（dev）. (yaml)三部分组成</p><p>content-service：第一部分，它是在application.yaml中配置的应用名，即spring.application.name的值。</p><p>dev：第二部分，它是环境名，通过spring.profiles.active指定，</p><p>Yaml: 第三部分，它是配置文件 的后缀，目前nacos支持properties、yaml等格式类型，本项目选择yaml格式类型。</p><p>所以，如果我们要配置content-service工程的配置文件:</p><p>在开发环境中配置content-service-dev.yaml</p><p>在测试环境中配置content-service-test.yaml</p><p>在生产环境中配置content-service-prod.yaml</p><p>我们启动项目中传入spring.profiles.active的参数决定引用哪个环境的配置文件，例如：传入spring.profiles.active=dev表示使用dev环境的配置文件即content-service-dev.yaml。</p>',23),i=[c];function s(r,o){return p(),a("div",null,i)}const l=e(n,[["render",s],["__file","index.html.vue"]]);export{l as default};