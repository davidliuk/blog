# 点赞排行

## 点赞

### 一人一赞

方案一：

- 数据库建立联系集，点赞和取消都在数据库做 crud
- 缺点：太重

方案二：

- Redis Set：集合并且唯一

### 点赞排行榜

按照点赞的时间排序，展示点赞排行的前五名

SortedSet，

![截屏2023-02-10 23.06.43](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/%E6%88%AA%E5%B1%8F2023-02-10%2023.06.43.png)

注意拿到 id 到数据库查询的时候，sql 写 in 的时候，他的结果又是无序的了，需要类似`order by field(id, 5, 2, 3)`这样写
