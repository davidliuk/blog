# 集合操作

对**结果集**进行交并差操作

在 SQL 中使用 UNION 运算符时，有几点需要注意，需要确保 UNION 的每个部分都具有相同的数据类型，顺序相同，列数必须相同。

![img](https://cdn.jsdelivr.net/gh/davidliuk/images@master/blog/6d666f8c6c392a2b04799886422f55e7.png)

### INTERSECT

求两个集合的交集

### UNION

求两个集合的并集，默认会去重（但是会影响性能）

`UNION ALL` 可以不去重（性能更好）

只要求列数相同即可Union

### MINUS/EXCEPT

求两个集合的差集（差异，两个集中不重复的部分）

results in only those records in one table BUT NOT the other.
