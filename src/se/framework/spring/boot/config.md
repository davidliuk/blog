# 配置文件

### 配置优先级

命令行参数（Command-line arguments）：通过命令行传递给应用程序的参数具有最高的优先级。可以使用--前缀指定参数，例如：java -jar myapp.jar --myapp.property=value。

系统属性（System properties）：可以通过在启动应用程序时设置 Java 系统属性来传递配置值。例如：java -jar -Dmyapp.property=value myapp.jar。

环境变量（Environment variables）：可以通过设置操作系统的环境变量来传递配置值。Spring Boot 会自动将环境变量转换为相应的配置属性。例如，将 MYAPP_PROPERTY=value 设置为环境变量。

配置文件（Application properties）：Spring Boot 支持使用.properties 或.yml 文件来配置应用程序。这些文件可以位于多个位置，按照优先级从高到低的顺序包括：

- jar/file:./config
- jar/file:./
- classpath:/config
- classpath:/
- 通过 spring.config.location 指定的外部配置文件。

`properties`<`yml`

默认属性（Default properties）：Spring Boot 提供了一些默认的配置属性，可以在应用程序中使用。这些属性在没有其他配置值时会被应用。

需要注意的是，优先级高的配置会覆盖优先级低的配置。例如，如果同时在命令行参数和配置文件中定义了同一个属性，那么命令行参数的值将覆盖配置文件中的值。

### 多环境配置

spring.profile.active

### 环境变量

在 application.yaml 中，使用 shell 中的变量引用表达式`${VAR}`

举例：`${MYSQL_HOST}`，将会读取环境变量中的 MYSQL_HOST 的值

可以进行字符串拼接

可以有默认值，`${MYSQL_HOST:localhost}`
