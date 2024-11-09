import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as t,b as p,o as n}from"./app-B3ooTv29.js";const o={};function r(i,e){return n(),t("div",null,e[0]||(e[0]=[p('<h1 id="nacos" tabindex="-1"><a class="header-anchor" href="#nacos"><span>Nacos</span></a></h1><p>注册中心、配置中心</p><p>namespace：区分环境，比如开发、测试、生产环境</p><p>group：区别项目，比如 tracenote 和 juejin</p><h2 id="配置中心" tabindex="-1"><a class="header-anchor" href="#配置中心"><span>配置中心</span></a></h2><p>搭建完成 Nacos 服务发现中心，下边搭建 Nacos 为配置中心，其目的就是通过 Nacos 去管理项目的所有配置。</p><p>先将项目中的配置文件分分类：</p><p>1、每个项目特有的配置</p><p>是指该配置只在有些项目中需要配置，或者该配置在每个项目中配置的值不同。</p><p>比如：<a href="http://spring.application.name" target="_blank" rel="noopener noreferrer">spring.application.name</a> 每个项目都需要配置但值不一样，以及有些项目需要连接数据库而有些项目不需要，有些项目需要配置消息队列而有些项目不需要。</p><p>2、项目所公用的配置</p><p>是指在若干项目中配置内容相同的配置。比如：redis 的配置，很多项目用的同一套 redis 服务所以配置也一样。</p><p>另外还需要知道 nacos 如何去定位一个具体的配置文件，即：namespace、group、dataid.</p><p>1、通过 namespace、group 找到具体的环境和具体的项目。</p><p>2、通过 dataid 找到具体的配置文件，dataid 有三部分组成</p><p>比如：content-service-dev.yaml 配置文件 由（content-service）-（dev）. (yaml)三部分组成</p><p>content-service：第一部分，它是在 application.yaml 中配置的应用名，即 <a href="http://spring.application.name" target="_blank" rel="noopener noreferrer">spring.application.name</a> 的值。</p><p>dev：第二部分，它是环境名，通过 spring.profiles.active 指定，</p><p>Yaml: 第三部分，它是配置文件 的后缀，目前 nacos 支持 properties、yaml 等格式类型，本项目选择 yaml 格式类型。</p><p>所以，如果我们要配置 content-service 工程的配置文件:</p><p>在开发环境中配置 content-service-dev.yaml</p><p>在测试环境中配置 content-service-test.yaml</p><p>在生产环境中配置 content-service-prod.yaml</p><p>我们启动项目中传入 spring.profiles.active 的参数决定引用哪个环境的配置文件，例如：传入 spring.profiles.active=dev 表示使用 dev 环境的配置文件即 content-service-dev.yaml。</p>',24)]))}const l=a(o,[["render",r],["__file","index.html.vue"]]),d=JSON.parse(`{"path":"/se/framework/distributed/spring-cloud/nacos/","title":"Nacos","lang":"en-US","frontmatter":{"description":"Nacos 注册中心、配置中心 namespace：区分环境，比如开发、测试、生产环境 group：区别项目，比如 tracenote 和 juejin 配置中心 搭建完成 Nacos 服务发现中心，下边搭建 Nacos 为配置中心，其目的就是通过 Nacos 去管理项目的所有配置。 先将项目中的配置文件分分类： 1、每个项目特有的配置 是指该配置只在...","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/se/framework/distributed/spring-cloud/nacos/"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"Nacos"}],["meta",{"property":"og:description","content":"Nacos 注册中心、配置中心 namespace：区分环境，比如开发、测试、生产环境 group：区别项目，比如 tracenote 和 juejin 配置中心 搭建完成 Nacos 服务发现中心，下边搭建 Nacos 为配置中心，其目的就是通过 Nacos 去管理项目的所有配置。 先将项目中的配置文件分分类： 1、每个项目特有的配置 是指该配置只在..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-05-08T07:35:02.000Z"}],["meta",{"property":"article:modified_time","content":"2024-05-08T07:35:02.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Nacos\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-08T07:35:02.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[{"level":2,"title":"配置中心","slug":"配置中心","link":"#配置中心","children":[]}],"git":{"createdTime":1686210114000,"updatedTime":1715153702000,"contributors":[{"name":"刘大维","email":"davidliu@liudaweideMacBook-Pro.local","commits":1}]},"readingTime":{"minutes":1.66,"words":497},"filePathRelative":"se/framework/distributed/spring-cloud/nacos/README.md","localizedDate":"June 8, 2023","excerpt":"\\n<p>注册中心、配置中心</p>\\n<p>namespace：区分环境，比如开发、测试、生产环境</p>\\n<p>group：区别项目，比如 tracenote 和 juejin</p>\\n<h2>配置中心</h2>\\n<p>搭建完成 Nacos 服务发现中心，下边搭建 Nacos 为配置中心，其目的就是通过 Nacos 去管理项目的所有配置。</p>\\n<p>先将项目中的配置文件分分类：</p>\\n<p>1、每个项目特有的配置</p>\\n<p>是指该配置只在有些项目中需要配置，或者该配置在每个项目中配置的值不同。</p>\\n<p>比如：<a href=\\"http://spring.application.name\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">spring.application.name</a> 每个项目都需要配置但值不一样，以及有些项目需要连接数据库而有些项目不需要，有些项目需要配置消息队列而有些项目不需要。</p>","autoDesc":true}`);export{l as comp,d as data};
