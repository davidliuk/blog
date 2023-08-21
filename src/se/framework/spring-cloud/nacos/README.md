注册中心、配置中心

namespace：区分环境，比如开发、测试、生产环境

group：区别项目，比如 tracenote 和 juejin

## 配置中心

搭建完成 Nacos 服务发现中心，下边搭建 Nacos 为配置中心，其目的就是通过 Nacos 去管理项目的所有配置。

先将项目中的配置文件分分类：

1、每个项目特有的配置

是指该配置只在有些项目中需要配置，或者该配置在每个项目中配置的值不同。

比如：spring.application.name 每个项目都需要配置但值不一样，以及有些项目需要连接数据库而有些项目不需要，有些项目需要配置消息队列而有些项目不需要。

2、项目所公用的配置

是指在若干项目中配置内容相同的配置。比如：redis 的配置，很多项目用的同一套 redis 服务所以配置也一样。

另外还需要知道 nacos 如何去定位一个具体的配置文件，即：namespace、group、dataid.

1、通过 namespace、group 找到具体的环境和具体的项目。

2、通过 dataid 找到具体的配置文件，dataid 有三部分组成

比如：content-service-dev.yaml 配置文件 由（content-service）-（dev）. (yaml)三部分组成

content-service：第一部分，它是在 application.yaml 中配置的应用名，即 spring.application.name 的值。

dev：第二部分，它是环境名，通过 spring.profiles.active 指定，

Yaml: 第三部分，它是配置文件 的后缀，目前 nacos 支持 properties、yaml 等格式类型，本项目选择 yaml 格式类型。

所以，如果我们要配置 content-service 工程的配置文件:

在开发环境中配置 content-service-dev.yaml

在测试环境中配置 content-service-test.yaml

在生产环境中配置 content-service-prod.yaml

我们启动项目中传入 spring.profiles.active 的参数决定引用哪个环境的配置文件，例如：传入 spring.profiles.active=dev 表示使用 dev 环境的配置文件即 content-service-dev.yaml。
