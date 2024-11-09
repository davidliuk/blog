# Java Agent 的拓展

一个jar包，可以在JVM启动的时候给他一个参数，可以动态改service的code，我们要做的就是修改monitor的code
看怎么用，需要看gradle.test，看看他怎么用的，然后看test，这样上手就知道怎么用

build起来，然后 integeration test 跑起来

with span

目前是class和method

1. 加一个功能，with span可以自定义内

    github参考实现

2. 实现第二个annotation，

    1. output，把output放到span里面，作为span的属性，交给agent处理
    2. input annotation，获取

    可以参考开源实现，但是要注意amz的规范

3. 通过kenesis发到后端，想要用cloud watch给kenesis加一下metrics，现在是log，但是收集不到，

    要么log到自己的cloud watch里面，要么用cloud watch的metric发到我们的matric里面
