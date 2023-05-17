# SNK面试

- 一面，技术面
- 二面，技术主管面
- HR面

## 一面 4月21日

### 项目

第一个项目的一些细节

- redis 的geo怎么用的

- 然后这个项目介绍一下

- 好友共同关注set怎么实现的

- 然后这个aof什么好处为什么用这个

- 然后我们这个项目是什么奖项

  二等奖（ar赛道的第叁名

- 你觉得和一等奖的差在哪里

第二个项目

- 让我给他这个外行人介绍一下这个trustSVD是什么、什么原理，可以解决什么问题

### 八股

HashMap

- 结构
- 自定义Key的时候重写的hashCode和equals在哪里用

JVM

- 垃圾回收机制

- 内存泄漏是什么，什么原因，如何避免

  这个没答好

  https://blog.csdn.net/u014401141/article/details/120135330

  https://blog.csdn.net/weixin_44388689/article/details/124615496

  https://blog.csdn.net/wuhuayangs/article/details/122594327

  https://cloud.tencent.com/developer/news/914959

并发

- volatile解决了什么
- 原子性怎么保证

线程安全三要素

### 算法

给一个二叉树，口述一下中序遍历序列

实现一个链表反转（本地IDE）

## 二面 4月22日

## 简历

对简历提问

成绩，专业第一？

实训

具体的商业项目

其他技术？

## 项目

### 第二个项目

- 推荐算法
- 云存储

- 设计大对象存储流程


### 第一个项目

雁过留痕

- lbs服务

- GEO

- 经纬度划分、二进制合并，求哈希值

- 哈希值怎么描述坐标点，寻址

扩大一些维度，亿级别用户的时候，如何实现检索或搜索引擎

> ElasticSearch

双写一致性问题如何解决

- 我说了几种策略，Cache Aside Pattern

  先更新MySQL后删除Redis

  但是这样依然没有彻底解决一致性的问题，更新完的时候并没有立即可以读到

  怎么解决

## 八股

JMM

- 可见性问题

Redis

- Redis集群几种模式

- Redis Cluster 如何实现分片的，加入一个节点怎么实现的

  如何分片做集群管理

  数据迁移

Synchronized原理

## HR 面

