

注册中心、配置中心

namespace：区分环境，比如开发、测试、生产环境

group：区别项目，比如tracenote和juejin





## 配置中心

搭建完成Nacos服务发现中心，下边搭建Nacos为配置中心，其目的就是通过Nacos去管理项目的所有配置。

先将项目中的配置文件分分类：

1、每个项目特有的配置

是指该配置只在有些项目中需要配置，或者该配置在每个项目中配置的值不同。

比如：spring.application.name每个项目都需要配置但值不一样，以及有些项目需要连接数据库而有些项目不需要，有些项目需要配置消息队列而有些项目不需要。

2、项目所公用的配置

是指在若干项目中配置内容相同的配置。比如：redis的配置，很多项目用的同一套redis服务所以配置也一样。

另外还需要知道nacos如何去定位一个具体的配置文件，即：namespace、group、dataid. 

1、通过namespace、group找到具体的环境和具体的项目。

2、通过dataid找到具体的配置文件，dataid有三部分组成

比如：content-service-dev.yaml配置文件 由（content-service）-（dev）. (yaml)三部分组成

content-service：第一部分，它是在application.yaml中配置的应用名，即spring.application.name的值。

dev：第二部分，它是环境名，通过spring.profiles.active指定，

Yaml: 第三部分，它是配置文件 的后缀，目前nacos支持properties、yaml等格式类型，本项目选择yaml格式类型。

所以，如果我们要配置content-service工程的配置文件:

在开发环境中配置content-service-dev.yaml

在测试环境中配置content-service-test.yaml

在生产环境中配置content-service-prod.yaml

我们启动项目中传入spring.profiles.active的参数决定引用哪个环境的配置文件，例如：传入spring.profiles.active=dev表示使用dev环境的配置文件即content-service-dev.yaml。