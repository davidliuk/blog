# 子查询

[select子查询](https://blog.csdn.net/qq_38643434/article/details/81490053)

子查询放在 select 里面，如果返回值

子查询的特质：子查询数据出虚表嵌套查询虚表，如果查询不到会返回null

## CTE

WITH 语句通常被称为通用表表达式（Common Table Expressions）即 CTEs。

WITH 语句作为一个辅助语句依附于主语句，WITH语句和主语句都可以是SELECT，INSERT，UPDATE，DELETE中的任何一种语句。

- A special type of subquery that is declared ahead of your main query.（在主查询之前声明。）
- Named and referenced later in FROM statement.（在FROM语句中按名称引用它，就像它是数据库中的任何其他表一样。）

```sql
WITH 
cte_name1[(column1, column2, ...)] AS(
  CTE_query_definition),
     ...
cte_name2 AS(
  CTE_query_definition)

Main query
```

注：可以同时定义1个或多个cte，做法是用逗号','隔开，最后一个cte后不跟','。

`WITH` 关键字用于定义一个公共表表达式（CTE）或者临时命名结果集（可以视为一个临时表）。

`temp_category` 是临时表的名称。

`(category)` 是临时表的列名。

`AS` 关键字之后是子查询，用于定义临时表的内容。在你的例子中，使用 `UNION ALL` 连接了多个 `SELECT` 查询，每个查询返回一个不同的字符串值。

### 优点

- Exceted once（仅执行一次，然后存储在内存中，可以提高执行效率）

  - CTE is then stored in memory
  - Improves query performance

- Improving organization of long & complex queries（提升复杂查询的可阅读性、可维护性）

- Referencing other CTEs（可引用其他的CTE）

- Referencing itself (SELF JOIN) （可自引用）

## 子查询

- 单行单列
- 多行单列
- 多行多列

https://www.yiibai.com/sql/sql-subquery.html

**带有IN或NOT IN运算符的SQL子查询**

在前面的示例中，已经了解了子查询如何与`IN`运算符一起使用。 以下示例使用带有`NOT IN`运算符的子查询来查找未找到位置ID为`1700`的所有员工：

```sql
SELECT 
    employee_id, first_name, last_name
FROM
    employees
WHERE
    department_id NOT IN (SELECT 
            department_id
        FROM
            departments
        WHERE
            location_id = 1700)
ORDER BY first_name , last_name;
```

**带有比较运算符的SQL子查询**

以下语法说明了子查询如何与比较运算符一起使用：

```sql
comparison_operator (subquery)
```

比较运算符是这些运算符之一：

- 等于(`=`)
- 大于(`>`)
- 小于(`<`)
- 大于或等于(`>=`)
- 小于等于(`<=`)
- 不相等(`!=`)或(`<>`)

以下示例查找薪水最高的员工：

```sql
SELECT 
    employee_id, first_name, last_name, salary
FROM
    employees
WHERE
    salary = (SELECT 
            MAX(salary)
        FROM
            employees)
ORDER BY first_name, last_name;
```

**带有EXISTS或NOT EXISTS运算符的SQL子查询**

`EXISTS`运算符检查子查询返回的行是否存在。 如果子查询包含任何行，则返回`true`。 否则，它返回`false`。

`EXISTS`运算符的语法如下：

```sql
EXISTSE  (subquery)
```

`NOT EXISTS`运算符与`EXISTS`运算符相反。

```sql
NOT EXISTS (subquery)
```

以下示例查找至少有一名员工的薪水大于`10000`的所有部门：

```sql
SELECT 
    department_name
FROM
    departments d
WHERE
    EXISTS( SELECT 
            1
        FROM
            employees e
        WHERE
            salary > 10000
                AND e.department_id = d.department_id)
ORDER BY department_name;
```

**2.4. 带有ALL运算符的SQL子查询**
子查询与`ALL`运算符一起使用时的语法如下：

```sql
comparison_operator ALL (subquery)
```

如果`x`大于子查询返回的每个值，则以下条件的计算结果为`true`。

```sql
x > ALL (subquery)
```

假设子查询返回三个值：`1`,`2`和`3`。 如果`x`大于`3`，则以下条件的计算结果为`true`。

```sql
x > ALL (1,2,3)
```

以下查询使用[GROUP BY](http://www.yiibai.com/sql/sql-group-by.html)子句和[MIN()](http://www.yiibai.com/sql-aggregate-functions/sql/sql-min.html)函数按部门查找最低工资：

```sql
SELECT 
    employee_id, first_name, last_name, salary
FROM
    employees
WHERE
    salary >= ALL (SELECT 
            MIN(salary)
        FROM
            employees
        GROUP BY department_id)
ORDER BY first_name , last_name;
```

**带有ANY运算符的SQL子查询**
以下是带有`ANY`运算符的子查询的语法：

```sql
comparison_operator ANY (subquery)
```

例如，如果`x`大于子查询返回的任何值，则以下条件的计算结果为`true`。 因此，如果`x`大于`1`，则条件`x> SOME(1,2,3)`的计算结果为`true`。

```sql
x > ANY (subquery)
```

请注意，`SOME`运算符是`ANY`运算符的同义词，因此可以互换使用它们。

以下查询查找薪水大于或等于每个部门的最高薪水的所有员工。

```sql
SELECT 
    employee_id, first_name, last_name, salary
FROM
    employees
WHERE
    salary >= SOME (SELECT 
            MAX(salary)
        FROM
            employees
        GROUP BY department_id);
```

**FROM子句中的SQL子查询**

可以在`SELECT`语句的`FROM`子句中使用子查询，如下所示：

```sql
SELECT 
    *
FROM
    (subquery) AS table_name
```

在此语法中，**表别名是必需的**，因为`FROM`子句中的所有表都必须具有名称。
请注意，`FROM`子句中指定的子查询在MySQL中称为派生表，在Oracle中称为内联视图。

以下语句返回每个部门的平均工资：

```sql
SELECT 
    AVG(salary) average_salary
FROM
    employees
GROUP BY department_id;
```

**SELECT子句中的SQL子查询**

可以在`SELECT`子句中使用表达式的任何位置使用子查询。 以下示例查找所有员工的工资，平均工资以及每个员工的工资与平均工资之间的差值。

```sql
SELECT 
    employee_id,
    first_name,
    last_name,
    salary,
    (SELECT 
            ROUND(AVG(salary), 0)
        FROM
            employees) average_salary,
    salary - (SELECT 
            ROUND(AVG(salary), 0)
        FROM
            employees) difference
FROM
    employees
ORDER BY first_name , last_name;
```

