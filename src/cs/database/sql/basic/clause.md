# 子句

### 书写顺序

1. `WITH`
1. `SELECT`, `DISTINCT`
1. `FROM`
2. `JOIN`,  `ON`
3. `WHERE`
4. `GROUP BY`
5. `HAVING`
6. `ORDER BY`
7. `LIMIT`

> 注意：必须按照 (1) - (9) 的顺序编写子句。

https://blog.csdn.net/siaok/article/details/129762384

### 执行顺序

1. `WITH`

2. `FROM`

3. `ON`

4. `JOIN`

5. `WHERE`

6. `GROUP BY`

   `(CUBE|ROLLUP)`

7. `HAVING`

8. `SELECT`

9. `DISTINCT`

10. `ORDER BY`

12. `LIMIT`

### FROM

后面跟表，**表示从某个表中筛选数据**

### ON

1) on 必须配合join使用
2) on 后面只写关联条件

所谓关联条件是**两个表的关联字段的关系**，或者是一些筛选条件

**有n张表关联，就有n-1个关联条件**

> 两张表关联，就有1个关联条件
>
> 三张表关联，就有2个关联条件

### WHERE

在查询结果中筛选

### GROUP BY

WITHROLLUP：加在 group by 后面，在 group 分组字段的基础上再进行统计数据。

**HAVING 与 WHERE**

在通过`GROUP BY`子句将行汇总到分组之前，`WHERE`子句将条件应用于各个行。 但是，`HAVING`子句在将行分组到组之后将条件应用于组。

因此，需要注意的是，在`GROUP BY`子句之前应用`WHERE`子句之后应用`HAVING`子句。

### LIMIT

一个参数：返回前几个

两个参数

1. 返回几个
2. 跳过几个

limit m,n

n：表示最多该页显示几行
m：表示从第几行开始取记录，第一个行的索引是0
m = (page-1)×n, page表示第几页

select 参数 from 表格 where 条件 limit N offset M

1. `Limit N`
  查询table_A中前50条数据（按gen_key倒序排列）
  select * from table_A order by gen_key desc limit 50

2. `Limit N,M`, `Limit N offest M`

  跳过前 M 条也就是说从 M+1 开始的前 N 条

  offset N：跳过N条记录（必须组合使用，单独没有用）

  查询table_A 中第11条到20条数据

  ```sql
  select * from table_A order by gen_key desc limit 10,20
  select * from table_A order by gen_key desc limit 10 OFFSET 3
  ```

  去除前3条记录后取出前10
