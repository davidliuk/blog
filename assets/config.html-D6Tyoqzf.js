import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as t,b as p,o as r}from"./app-B3ooTv29.js";const o={};function i(n,e){return r(),t("div",null,e[0]||(e[0]=[p('<h1 id="配置文件" tabindex="-1"><a class="header-anchor" href="#配置文件"><span>配置文件</span></a></h1><h3 id="配置优先级" tabindex="-1"><a class="header-anchor" href="#配置优先级"><span>配置优先级</span></a></h3><p>命令行参数（Command-line arguments）：通过命令行传递给应用程序的参数具有最高的优先级。可以使用--前缀指定参数，例如：java -jar myapp.jar --myapp.property=value。</p><p>系统属性（System properties）：可以通过在启动应用程序时设置 Java 系统属性来传递配置值。例如：java -jar -Dmyapp.property=value myapp.jar。</p><p>环境变量（Environment variables）：可以通过设置操作系统的环境变量来传递配置值。Spring Boot 会自动将环境变量转换为相应的配置属性。例如，将 MYAPP_PROPERTY=value 设置为环境变量。</p><p>配置文件（Application properties）：Spring Boot 支持使用.properties 或.yml 文件来配置应用程序。这些文件可以位于多个位置，按照优先级从高到低的顺序包括：</p><ul><li>jar/file:./config</li><li>jar/file:./</li><li>classpath:/config</li><li>classpath:/</li><li>通过 spring.config.location 指定的外部配置文件。</li></ul><p><code>properties</code>&lt;<code>yml</code></p><p>默认属性（Default properties）：Spring Boot 提供了一些默认的配置属性，可以在应用程序中使用。这些属性在没有其他配置值时会被应用。</p><p>需要注意的是，优先级高的配置会覆盖优先级低的配置。例如，如果同时在命令行参数和配置文件中定义了同一个属性，那么命令行参数的值将覆盖配置文件中的值。</p><h3 id="多环境配置" tabindex="-1"><a class="header-anchor" href="#多环境配置"><span>多环境配置</span></a></h3><p>spring.profile.active</p><h3 id="环境变量" tabindex="-1"><a class="header-anchor" href="#环境变量"><span>环境变量</span></a></h3><p>在 application.yaml 中，使用 shell 中的变量引用表达式<code>${VAR}</code></p><p>举例：<code>${MYSQL_HOST}</code>，将会读取环境变量中的 MYSQL_HOST 的值</p><p>可以进行字符串拼接</p><p>可以有默认值，<code>${MYSQL_HOST:localhost}</code></p>',17)]))}const m=a(o,[["render",i],["__file","config.html.vue"]]),c=JSON.parse(`{"path":"/se/framework/spring/boot/config.html","title":"配置文件","lang":"en-US","frontmatter":{"description":"配置文件 配置优先级 命令行参数（Command-line arguments）：通过命令行传递给应用程序的参数具有最高的优先级。可以使用--前缀指定参数，例如：java -jar myapp.jar --myapp.property=value。 系统属性（System properties）：可以通过在启动应用程序时设置 Java 系统属性来传递配...","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/se/framework/spring/boot/config.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"配置文件"}],["meta",{"property":"og:description","content":"配置文件 配置优先级 命令行参数（Command-line arguments）：通过命令行传递给应用程序的参数具有最高的优先级。可以使用--前缀指定参数，例如：java -jar myapp.jar --myapp.property=value。 系统属性（System properties）：可以通过在启动应用程序时设置 Java 系统属性来传递配..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-11-22T09:56:03.000Z"}],["meta",{"property":"article:modified_time","content":"2023-11-22T09:56:03.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"配置文件\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-11-22T09:56:03.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[{"level":3,"title":"配置优先级","slug":"配置优先级","link":"#配置优先级","children":[]},{"level":3,"title":"多环境配置","slug":"多环境配置","link":"#多环境配置","children":[]},{"level":3,"title":"环境变量","slug":"环境变量","link":"#环境变量","children":[]}],"git":{"createdTime":1694686552000,"updatedTime":1700646963000,"contributors":[{"name":"davidliu","email":"liudawei47@jd.com","commits":1},{"name":"liudawei47","email":"liudawei47@jd.com","commits":1}]},"readingTime":{"minutes":1.33,"words":400},"filePathRelative":"se/framework/spring/boot/config.md","localizedDate":"September 14, 2023","excerpt":"\\n<h3>配置优先级</h3>\\n<p>命令行参数（Command-line arguments）：通过命令行传递给应用程序的参数具有最高的优先级。可以使用--前缀指定参数，例如：java -jar myapp.jar --myapp.property=value。</p>\\n<p>系统属性（System properties）：可以通过在启动应用程序时设置 Java 系统属性来传递配置值。例如：java -jar -Dmyapp.property=value myapp.jar。</p>\\n<p>环境变量（Environment variables）：可以通过设置操作系统的环境变量来传递配置值。Spring Boot 会自动将环境变量转换为相应的配置属性。例如，将 MYAPP_PROPERTY=value 设置为环境变量。</p>","autoDesc":true}`);export{m as comp,c as data};
