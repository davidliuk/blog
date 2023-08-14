# Makefile

## makefile的规则

在讲述这个makefile之前，还是让我们先来粗略地看一看makefile的规则。

```makefile
target ... : prerequisites ...
    recipe
    ...
    ...
```

target：可以是一个object file（目标文件），也可以是一个可执行文件，还可以是一个标签（label）/伪目标。

prerequisites：生成该target所依赖的文件和/或target。

recipe：该target要执行的命令（任意的shell命令）。

这是一个文件的依赖关系，也就是说，target这一个或多个的目标文件依赖于prerequisites中的文件，其生成规则定义在command中。说白一点就是说:

prerequisites中如果有一个以上的文件比target文件要新的话，recipe所定义的命令就会被执行。
这就是makefile的规则，也就是makefile中最核心的内容。

说到底，makefile的东西就是这样一点，好像我的这篇文档也该结束了。呵呵。还不尽然，这是makefile 的主线和核心，但要写好一个makefile还不够，我会在后面一点一点地结合我的工作经验给你慢慢道来。内容还多着呢。

## makefile的命令

makefile中的命令，也就是我们前面讲过的“recipe”部分，其实就是一些Shell命令，makefile会一行一行地执行这些命令。因为命令过多，所以make提供了一个续行符（\）,来让我们的命令可以分行书写，make会将其连接起来，当作一个完整的命令。例如：

## makefile条件判断

makefile中的条件判断主要有三种方式，分别是：

1. 条件表达式
2. makefile中的函数
3. makefile中的运算符
