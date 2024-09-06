# new UI

harmony框架

集中到同一个网站上

QUIC decision

React, harmony（一站式服务

没有PM，自己设计

Jarvis 的 constraint，没有Log

已经有的功能，需要保留（比如input、output，这个需要重新开发，没法reuse

后端：定义一套数据结构

把已经收集到的数据，进行 transform

UI 到后端都有

基本上是一个全栈

UI框架需要我比较快的上手

除了Jarvis已有的之外，调研业内observatory（monitor的UI）做成什么样子的，做成用户觉得比较好用的

页内的标准

短期内，十几天内出一个静态页面也好，出一个原型

mockup或静态页面，把需求展示出来

最好有简单的交互，最少有对应的意思就行

要做出来的点：3点



比微服务的粒度大（可能这个team有很多微服务，但是只展示一个team

cross service

hyper link

1. 单个 service trace（需要调研开源的tracing tool
2. 跨服务 hyper link（需要调研开源的tracing tool，不同domain的信息
3. table, timeline（所有的都长一样的）

open telemetry官网看

jarvis model 存在ES里

source

后端的data model也可能要改一下，可以参考jarvis和

domain/namespace

三级结构

1. domain/namespace，cross domain，一个booking下来需要经过多个domain，我们这里要连接外部用户了（lsp，carrier，需求把exception在哪里挂掉了/数据有问题，没有通过验证，发给他们）
2. service/package
3. process (一次执行)
4. method

目前有一个raw data存在了ddb里

1. cross domain visab，一个booking下来需要经过多个domain，我们这里要连接外部用户了（lsp，carrier，需求把exception在哪里挂掉了/数据有问题，没有通过验证，发给他们）
2. 哪里有报错，error，显示到一个具体的service上；log展示，后端还没ready，但是要先设计全了
3. 每个team ticket有各自的模式，UI上把处理问题的方法尽量集成进来一个按钮，发现问题，找到问题的地方，然后集成他们的tool，可以点进去

两周目标：

1. prototype（到下周五/四之前，先做prototype，静态页面或mockup
2. 结构怎么搭建、后端结构怎么定义

自己想象空间比较大，前端加后端的系统加design

先大量学习，看看开元的东西，原则：尽量摆脱Jarvis，因为这个太老了

细节有不会的东西/不确定的东西即使问

demo 的时候一块找领导看一看

搭建一套service很快，用harmony很快；直接用react搭建一个页面

对span raw data处理，放到ddb或es都有可能，处理一部分内容放es，es再放ddb的link显示到前端去

tag data，之类的结构用到的时候再聊

open search

ES不全的，然后get ddb，再组装成一个前端

ddb类似mongodb

现在的信息不够，一旦遇到问题，技术方面可以自己调研，比如需要项目输入的可以直接找wangsheng/yc

loosely link 是jarvis的限制

问题：有tag和时间戳链接的，本来是串行的，结果变成并行了，因为有的没有tag

有workflow的都会出现这种情况

log引入以后，log有execution id，internal service用内部的id，不用loosely link解决所有问题

loosely link

本来execution id作为一个tag，但是觉得应该单独拿出来

tag用来标识business level的东西

只把有tag的链接起来了

xinyuan lcl planing在gamma测试，in bond

OpenTracing 规范

- Log
- Metric
- Trace

开源

- SigNoz
- Jaeger
- X Ray
- skywalking
- zikpin

---

UI 的阶段

1. 先有一个地方show flow
2. 有哪些feature

---

tracing系统需要的功能

1. 搜索 topnav
2. 左侧筛选
3. timeline 模仿jaeger的界面

hyper process 

展示log

开源图

1. list/timeline (sk)
2. tree (sk)
3. table  (sk)（树形列表）

---

hyper link折叠

domain、service、process这样三级

---

user story，high level的design，有没有discussion

让组的知道可能要做成什么样，和wangsheng、yongcheng聊一下

Observatory UI可能分成哪些模块，这一期可能做什么

hyper process case，loosely link 讨论

use case

约一个discussion

courious learn, dive deep, deliver result, bias for action