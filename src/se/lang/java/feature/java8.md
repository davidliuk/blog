# Java 8

## Interface 方法修饰

为了解决接口的修改与现有的实现不兼容的问题。新 interface 的方法可以用`default` 或 `static`修饰，这样就可以有方法体，实现类也不必重写此方法。

一个 interface 中可以有多个方法被它们修饰，这 2 个修饰符的区别主要也是普通方法和静态方法的区别。

1. `default`修饰的方法，是普通实例方法，可以用`this`调用，可以被子类继承、重写。
2. `static`修饰的方法，使用上和一般类静态方法一样。但它不能被子类继承，只能用`Interface`调用。



**在 Java 8 ，接口和抽象类有什么区别的？**

很多小伙伴认为：“既然 interface 也可以有自己的方法实现，似乎和 abstract class 没多大区别了。”

其实它们还是有区别的

1. interface 和 class 的区别，好像是废话，主要有：
   - 接口多实现，类单继承
   - 接口的方法是 public abstract 修饰，变量是 public static final 修饰。 abstract class 可以用其他修饰符
2. interface 的方法是更像是一个扩展插件。而 abstract class 的方法是要继承的。

开始我们也提到，interface 新增`default`和`static`修饰的方法，为了解决接口的修改与现有的实现不兼容的问题，并不是为了要替代`abstract class`。在使用上，该用 abstract class 的地方还是要用 abstract class，不要因为 interface 的新特性而将之替换。

**记住接口永远和类不一样。**



## functional interface 函数式接口

**定义**：也称 SAM 接口，即 Single Abstract Method interfaces，有且只有一个抽象方法，但可以有多个非抽象方法的接口。

在 java 8 中专门有一个包放函数式接口`java.util.function`，该包下的所有接口都有 `@FunctionalInterface` 注解，提供函数式编程。

在其他包中也有函数式接口，其中一些没有`@FunctionalInterface` 注解，但是只要符合函数式接口的定义就是函数式接口，与是否有

`@FunctionalInterface`注解无关，注解只是在编译时起到强制规范定义的作用。其在 Lambda 表达式中有广泛的应用。



## Lambda 表达式

接下来谈众所周知的 Lambda 表达式。它是推动 Java 8 发布的最重要新特性。是继泛型(`Generics`)和注解(`Annotation`)以来最大的变化。

使用 Lambda 表达式可以使代码变的更加简洁紧凑。让 java 也能支持简单的*函数式编程*。

> Lambda 表达式是一个匿名函数，java 8 允许把函数作为参数传递进方法中。

### 语法格式

```java
(parameters) -> expression 或
(parameters) ->{ statements; }
```

### Lambda 实战

我们用常用的实例来感受 Lambda 带来的便利

#### 替代匿名内部类

过去给方法传动态参数的唯一方法是使用内部类。



## Optional

防止 NPE，是程序员的基本修养，注意 NPE 产生的场景：

1） 返回类型为基本数据类型，return 包装数据类型的对象时，自动拆箱有可能产生 NPE。

反例：public int f() { return Integer 对象}， 如果为 null，自动解箱抛 NPE。

2） 数据库的查询结果可能为 null。

3） 集合里的元素即使 isNotEmpty，取出的数据元素也可能为 null。

4） 远程调用返回对象时，一律要求进行空指针判断，防止 NPE。

5） 对于 Session 中获取的数据，建议进行 NPE 检查，避免空指针。

6） 级联调用 obj.getA().getB().getC()；一连串调用，易产生 NPE。

正例：使用 JDK8 的 Optional 类来防止 NPE 问题。



## Date-Time API

现在 jdbc 时间类型和 java8 时间类型对应关系是

1. `Date` ---> `LocalDate`
2. `Time` ---> `LocalTime`
3. `Timestamp` ---> `LocalDateTime`

而之前统统对应 `Date`，也只有 `Date`。

