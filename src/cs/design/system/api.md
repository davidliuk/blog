# API Design 接口设计

网站系统，API 设计与短网址 Web System,API, Design Tiny URL

- ·网站系统的基本构成

- ·API 设计问题
- ·什么是 RestAPI

实战真题：

1. What happend if you visit www.google.com?
2. How to design tiny url?
3. 如何设计 News Feed API
4. 如何设计 mention 功能
5. 如何做翻页 Pagination

关键词：Web,Consistent Hashing,Memcached,Tiny url..

## REST API

你要获取的数据是什么，你的路径就是什么开头的

- 每个 URL 代表某类数据/资源
- HTTP 的四个动作，代表数据的增删改查
- 所有筛选条件，创建参数，放到 HTTP 的参数里面

转账 API

`POST /api/transaction/?from=1&to=2&money=500`

## Design News Feed API

设计前后端的交互接口

- 什么是 API，Web API 请求格式

  `GET api.domain.com/newsfeed/`

  `GET domain.com/api/newsfeed/`

- 返回内容格式

  Structured Data：json 或 xml，主要是 json

  xml 主要在 android 的代码中用于记录一些格式化数据

- 设计 Pagination

  - `page=1`,

    优点：可以跳转到第 x 页

    缺点：如果有新的数据插入，则翻页的时候可能看到上一页的内容，刷新比较难受

  - `max_id=xxx`, cursor 法，信息流变化快的

    没有 max_id 表示第一页

    有 max_id 找所有 id<=max_id 的最顶上的 20 个（时间倒叙排列）

    - 如何判断有没有下一页，如果避免额外再查一次来判断是否终点
      - Next_max_id，每次多找一个数据，把这个数据的 id 作为 next_max_id

- 设计 Mentions 的数据格式，可以点进人家的主页里面

## Mentions 数据格式

预防 Javascript injection attack

mobile 和 web 不能共享

url 可能改动

推荐方法：

自定义链接结构

如：`<user username="a">Hello World</user>`让 Web 和 Mobile 分别对该格式进行解析

---

custom url

API = Application Programming Interface

- 样例1：
  - 你实现了一个叫做Utility 的 class, 然后这个 class 提供一个 sortlntegers 的method, 可以对参数中的整数数组进行排序。这就是一个 APl。
- 样例2：
  - 你访问了 https://www.awebsite.com/api/users/ 获得了所有的用户的信息。这就是一个 Web API
  - 通常来说, 只要是你提供了一些方法, 函数, 功能给别人用, 别人通过直接的函数调用或者 http 等方式进行调用, 得到了返回结果, 这就是 API。

---

为什么了解网站系统如此重要？

- System Design 几乎都是 Backend Design
- Backend Design 几乎都是 Web Backend Design

当你访问 www.google.com 的时候发生了什么

- 你在浏览器输入 www.qgoogle.com
- 你首先访问的是离你最近的 DNS 服务器
  - Domain Name Service
  - DNS 服务器记录了 www.google.com 这个域名的IP 地址是什么
- 你的浏览器然后向该 IP 发送 http/https 请求
  - 每台服务器/计算机联网都需要一个IP 地址
  - 通过IP 地址就能找到该 服务器/计算机

---

- 服务器 (Web Server) 收到请求, 将请求递交给正在 80端口监听的HTTP Server
- 比较常用的 HTTP Server 有 Apache, Unicorn, Gunicorn, Uwsgi
- HTTP Server 将请求转发给Web Application
  - 最火的三大Web Application Framework: Django, Ruby on Rails, NodeJS
  - Python 新宠：Flask
- Web Application 处理请求
  - 根据当前路径“P找到对应的逻辑处理模块
  - 根据用户请求参数 (GET+POST) 决定如何获取/存放数据
  - 从数据存储服务 (数据库或者文件系统) 中读取数据
  - 组织数据成一张 html 网页作为返回结果
- 浏览器得到结果, 展示给用户

---

- DNS
- HTTP
- Domain
- IP Address
- URL
- Web Server (硬件) 
- HTTP Server (软件) 
- Web Application (软件) 
