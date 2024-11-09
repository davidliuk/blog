# Java 17

## Switch

###  表达式扩展

### 模式匹配

```java
static String formatterPatternSwitch(Object o) {
    return switch (o) {
        case null -"null";
        case Integer i-> String.format("int %d",i);
        case Long l -> String.format("long %d",l);
        case Double d -> String.format("double %f",d);
        case String s -> String.format("String %s",s);
        default -> o.getclass().getSimpleName()+""+o;
    };
}
```

### Instanceof 模式匹配

> JDK 14

新的instanceof模式匹配 ，新的模式匹配的用法如下所示，在`instanceof`的类型之后添加了变量`str`。如果`instanceof`对`obj`的类型检查通过，`obj`会被转换成`str`表示的`String`类型。在新的用法中，`String`类型仅出现一次。

如果obj是String的实例，则将其强制转换为String并分配给绑定变量s。绑定变量在if语句的true块中，而不在if语句的false块中。

```java
if (obj instanceof String s) {
    // 使用s
} else {
    // 不能使用s
}
```

## GC

### 删除 CMS 垃圾回收器

> Java 14

CMS 是老年代垃圾回收算法，通过标记-清除的方式进行内存回收，在内存回收过程中能够与用户线程并行执行。CMS 回收器可以与 Serial 回收器和 Parallel New 回收器搭配使用，CMS 主要通过并发的方式，适当减少系统的吞吐量以达到追求响应速度的目的，比较适合在追求 GC 速度的服务器上使用。

Java 9 中，就已经决定放弃使用 CMS 回收器了，而这次在 Java 14 中，是继之前 Java 9 中放弃使用 CMS 之后，彻底将其禁用，并删除与 CMS 有关的选项，同时清除与 CMS 有关的文档内容，至此曾经辉煌一度的 CMS 回收器，也将成为历史。

### G1 的 NUMA 可识别内存分配

> Java 14

### **弃用 ParallelScavenge 和 SerialOld GC 的组合使用**

### **禁用偏向锁定**

> Java 15

