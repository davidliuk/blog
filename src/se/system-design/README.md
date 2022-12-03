# 系统设计

系统设计中常说的Tradeoff是什么：权衡，面试官最看重的

什么叫SOA

什么是Pull Model和什么是Push Model

数据存储系统有哪些，什么样的数据适合存在什么样的数据存储系统中

什么是异步任务和消息队列



### 问题

设计xxx系统

设计xx系统中的xx功能



访问限制系统：memcached

设计统计某事件历史发生次数：监控设计

![截屏2022-07-13 08.46.33](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/%E6%88%AA%E5%B1%8F2022-07-13%2008.46.33.png)





### OOD vs SD

OOD是微观设计，手把手Coding

SD是高屋建瓴宏观的设计：Backend design，数据库如何设计、xxx

游戏设计、电梯设计就是OOD





### 评分标准

- 可行解
- 特定问题
- 分析能力
- 权衡
- 知识储备





### 4S分析法

- scenario, 场景

  - 说人话：需要设计哪些功能，设计得多牛
  - Ask/ Features/ QPS/ DAU/ Interfaces
- service, 服务

  - 说人话：将大系统拆分为小服务
  - Split/ application/ module
- storage, 存储

  - 说人话：数据如何存储与访问
  - Schema/ Data/ SQL/ NoSQL/ File System
- scale 升级
  - 说人话：解决缺陷，处理可能遇到的问题
  - Sharding/ Optimize/ Special Case



问面试官Scenario

![截屏2022-07-13 08.59.24](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/%E6%88%AA%E5%B1%8F2022-07-13%2008.59.24.png)





推特系统中，最核心的是新鲜事系统



pull模型、慢，用的时候现查



#### push模型

fanout、denormalieze

复杂度分析

- news feed -= 1次DB Read

- POST a tweet N个粉丝，需要n次 DB write，异步任务

  无需用户等待



news feed table

复合索引

缺点：



广告用Pull模型

需要用推荐排序算法时，pull模型

![截屏2022-07-13 09.34.35](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/%E6%88%AA%E5%B1%8F2022-07-13%2009.34.35.png)





定义明星：不动态判断即可，离线的确认，即使掉粉了也认为是明星



![截屏2022-07-13 09.51.35](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/%E6%88%AA%E5%B1%8F2022-07-13%2009.51.35.png)