# Knife4j

## 页面 404

默认情况下并不需要添加此配置即可访问

很多朋友在使用 SpringBoot 集成 swagger-bootstrap-ui 后，都无法访问 doc.html 界面，此时，你可能需要实现 SpringBoot 的`WebMvcConfigurer`接口，添加相关的 ResourceHandler,代码如下：

```java
@SpringBootApplication
public class SwaggerBootstrapUiDemoApplication  implements WebMvcConfigurer{

    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        registry.addResourceHandler("doc.html").addResourceLocations("classpath*:/META-INF/resources/");
        registry.addResourceHandler("/webjars/**").addResourceLocations("classpath*:/META-INF/resources/webjars/");
    }
}
```

或者

```java
@SpringBootApplication
public class SwaggerBootstrapUiDemoApplication  implements WebMvcConfigurer{

    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        registry.addResourceHandler("doc.html").addResourceLocations("classpath:/META-INF/resources/");
        registry.addResourceHandler("/webjars/**").addResourceLocations("classpath:/META-INF/resources/webjars/");
    }
}
```

如果你是使用的老的版本 SpringBoot,通过继承`WebMvcConfigurationSupport`来扩展 SpringBoot 相关的配置,则把以上配置加在相应的`addResourceHandlers`方法中即可

推荐使用实现`WebMvcConfigurer`接口的方式来进行扩展
