# 框架

![image](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/image.png)



结构

- 线：减治，

- 树：分治，无重叠子问题（注意均衡的问题）

  分治很简单也符合直觉，难点是时间复杂度估算（主方法）

  对于分布式计算很重要，mit 6.24

- 图：动规，有重叠子问题

- 集：无序，判断存在或者数量

搜索

- FOR：循环搜索
- DFS：栈式搜索
- BFS：队列搜索

优化

- 减治：无效优化
- 动规：重叠优化
- 分治：并行优化，可以分布式计算如mapreduce

顺序

- 先序
- 后序
- 访问
- 邻接

传参

- 局部变量传参
  - 父向子：自上而下（在栈内部或队列内部）
  - 子向父：返回值
- 全局参数传递

线索：

- 递推
  - 值传递
- 分类
  - 分治
- 有序
  - 减治
- 收敛
  - DFS


