# 连接

| 连接类型                                 | 说明                                                         |
| ---------------------------------------- | ------------------------------------------------------------ |
| INNER JOIN 内连接                        | （默认连接方式）只有当两个表都存在满足条件的记录时才会返回行。 |
| LEFT JOIN / LEFT OUTER JOIN 左(外)连接   | 返回左表中的所有行，即使右表中没有满足条件的行也是如此。     |
| RIGHT JOIN / RIGHT OUTER JOIN 右(外)连接 | 返回右表中的所有行，即使左表中没有满足条件的行也是如此。     |
| FULL JOIN / FULL OUTER JOIN 全(外)连接   | 只要其中有一个表存在满足条件的记录，就返回行。               |
| SELF JOIN                                | 将一个表连接到自身，就像该表是两个表一样。为了区分两个表，在 SQL 语句中需要至少重命名一个表。 |
| CROSS JOIN                               | 交叉连接，从两个或者多个连接表中返回记录集的笛卡尔积。       |



```sql
SELECT
    a.Name 'Employee'
FROM
    Employee a,
    Employee b
WHERE
    a.ManagerId = b.Id
        AND a.Salary > b.Salary
;
```



```sql
SELECT
     a.NAME AS Employee
FROM Employee AS a JOIN Employee AS b
     ON a.ManagerId = b.Id
     AND a.Salary > b.Salary
;
```



MySQL 中的 UNION 和 JOIN 是两种不同的操作，它们的作用和使用场景也不同。

UNION 是用于合并两个或多个 SELECT 语句的结果集，它会将多个结果集合并成一个结果集，并去除重复的行。UNION 操作的语法如下：

```sql
SELECT column1, column2, ... FROM table1
UNION [ALL]
SELECT column1, column2, ... FROM table2;
```

其中，`UNION` 表示合并两个结果集并去除重复的行，`UNION ALL` 表示合并两个结果集但不去除重复的行。

JOIN 是用于将两个或多个表中的数据进行关联的操作，它会根据指定的条件将两个表中的数据进行匹配，并返回匹配的结果。JOIN 操作的语法如下：

```sql
SELECT column1, column2, ...
FROM table1
JOIN table2 ON condition;
```

其中，`JOIN` 表示内连接，只返回两个表中匹配的行，`LEFT JOIN` 和 `RIGHT JOIN` 表示左连接和右连接，会返回左表或右表中的所有行，即使没有匹配的行。

总的来说，UNION 用于合并结果集，而 JOIN 用于关联表中的数据。在使用时需要根据具体的需求选择合适的操作。

