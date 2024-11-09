# 函数

## 聚合函数

将一组数据通过运算返回这组数据的某种性质，如最大值，最小值。

没有元素的时候返回null

**聚合函数类型**

- AVG()
- SUM()
- MAX()
- MIN()
- COUNT()
- GROUP_CONCAT()

### AVG()

AVG(c.action = 'confirmed')

= sum(if(c.action = 'confirmed', 1, 0) / count(*)

= sum(action = 'confirmed') / count(*)

= count(if(action='confirmed',c.action,null) / count(c.action)

### COUNT()

SQL `COUNT`函数是一个聚合函数，它返回符合条件行数。 可以使用[SELECT语句](http://www.yiibai.com/sql/sql-select.html)中的`COUNT`函数来获取员工数量，每个部门的员工数量，指定工作岗位的员工数量等。

以下是SQL `COUNT`函数的语法：

```sql
COUNT([ALL | DISTINCT] expression);
```

`COUNT`函数的结果取决于传递给它的参数。

- 默认情况下，`COUNT`函数使用`ALL`关键字，无论是否指定它。 `ALL`关键字表示考虑组中的所有项目，包括重复值。 例如，如果有一个数据集合`(1,2,3,3,4,4)`并应用`COUNT`函数，则结果为`6`。
- 如果明确指定`DISTINCT`关键字，则仅考虑唯一的非`NULL`值。 如果将`COUNT`函数应用于数据集`(1,2,3,3,4,4)`，则`COUNT`函数返回`4`。

另一种形式的`COUNT`函数接受星号(`*`)作为参数如下：

COUNT(column_name) 函数返回指定列的值的数目（NULL 不计入）：

```sql
COUNT(*)
```

`COUNT(*)`函数返回表中的行数，包括包含`NULL`值的行。

这里值得注意的是count的条件用法。举个例子count(age > 20 or null)这个语句，里面or null必须加，否则就等价于count(*)了，要么就是写作sum(age > 20)也可。

### GROUP_CONCAT()

```sql
GROUP_CONCAT(
    DISTINCT expression1
    ORDER BY expression2
    SEPARATOR sep
)
```



## 窗口函数

https://zhuanlan.zhihu.com/p/92654574

https://zhuanlan.zhihu.com/p/120269203

https://zhuanlan.zhihu.com/p/80051518

- 序号函数：rank, dense_rank, **row_number**

- 分布函数：percent_rank(), cume_dist(), `ntile()`
- 前后函数：lag() / lead()
- 头尾函数：first_val() / last_val()
- 其他函数：nth_value() / 用途：将分区中的有序数据分为n个桶，记录桶号。

窗口函数 (WINDOW function)，也叫OLAP函数（Online Anallytical Processing，联机分析处理)，可以对数据库数据进行实时分析处理。

```sql
<聚合函数/窗口函数> over(
    partition by <用于分组的列名> 
    order by <用于排序的列名>)
window_function (expression) OVER (
   [ PARTITION BY part_list ]
   [ ORDER BY order_list ]
   [ { ROWS | RANGE } BETWEEN frame_start AND frame_end ] )
```

<窗口函数>的位置，可以放以下两种函数：

1) 专用窗口函数，包括后面要讲到的rank, dense_rank, row_number, lead, lag等专用窗口函数。

2) 聚合函数，如 sum, avg, count, max, min 等

因为窗口函数是对where或者group by子句处理后的结果进行操作，所以**窗口函数原则上只能写在select子句中**。

- **ROWS** 选择前后几行，例如 `ROWS BETWEEN 3 PRECEDING AND 3 FOLLOWING` 表示往前 3 行到往后 3 行，一共 7 行数据（或小于 7 行，如果碰到了边界）
- **RANGE** 选择数据范围，例如 `RANGE BETWEEN 3 PRECEDING AND 3 FOLLOWING` 表示所有值在 $[c-3,c+3]$ 这个范围内的行，$c$ 为当前行的值

https://blog.csdn.net/qq_42374697/article/details/115109386

---

逻辑语义上说，一个窗口函数的计算“过程”如下：

1. 按窗口定义，将所有输入数据分区、再排序（如果需要的话）
2. 对每一行数据，计算它的 Frame 范围
3. 将 Frame 内的行集合输入窗口函数，计算结果填入当前行

---

- 如果不指定 `ORDER BY`，则不对各分区做排序，通常用于那些顺序无关的窗口函数，例如 `SUM()`

- 如果不指定 Frame 子句，则默认采用以下的 Frame 定义：

- - 若不指定 `ORDER BY`，默认使用分区内所有行 `RANGE BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING`
  - 若指定了 `ORDER BY`，默认使用分区内第一行到当前值 `RANGE BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW`

最后，窗口函数可以分为以下 3 类：

- **聚合（Aggregate）**：`AVG()`, `COUNT()`, `MIN()`, `MAX()`, `SUM()`...
- **取值（Value）**：`FIRST_VALUE()`, `LAST_VALUE()`, `LEAD()`, `LAG()`...
- **排序（Ranking）**：`RANK()`, `DENSE_RANK()`, `ROW_NUMBER()`, `NTILE()`...

受限于篇幅，本文不去探讨各个窗口函数的含义，有兴趣的读者可以参考[这篇文档](https://link.zhihu.com/?target=https%3A//drill.apache.org/docs/sql-window-functions-introduction/%23types-of-window-functions)。

> 注：Frame 定义并非所有窗口函数都适用，比如 `ROW_NUMBER()`、`RANK()`、`LEAD()` 等。这些函数总是应用于整个分区，而非当前 Frame。

---

功能：

1) 同时具有分组 partition by 和排序 order by 的功能

2) 不减少原表的行数

加distinct会显著提速

使用场景：

1) 业务需求“**在每组内排名”**，比如：

> 排名问题：每个部门按业绩来排名
> topN问题：找出每个部门排名前N的员工进行奖励

### 前后类

Lead向下（后)，Lag向上（前)

**Lag** 和**Lead** 函数可以在一次查询中取出同一字段的**前N行** 的数据和**后N行** 的值。这种操作可以使用对相同表的表连接来实现，不过使用LAG和LEAD有更高的效率。

`Lead(expression, offset, default) over(partition-clause order-by-clause)`

参数说明： 

- offset 偏移，表示查询其后第n条记录，如果不提供这个参数，就是默认为1；
- default 默认值，如果没有找到。如果没有设置，且找不到，那么就返回Null； 
- query_partition_clause  分区语句，对结果集合分区的语句，是可选的，如果没有就是所有的一个分区；
- order_by_clause 排序语句 必须需要 , 如果没有order by 子句，就不是“连续”的。

语法：

```sql
[你要的操作] OVER (
    PARTITION BY  <用于分组的列名>
    ORDER BY <按序叠加的列名> 
    ROWS|RANGE <窗口滑动的数据范围>
)
```

<窗口滑动的数据范围> 用来限定 [你要的操作] 所运用的数据的范围，有如下这些：

- 当前 - current row
- 之前的 - preceding
- 之后的 - following
- 无界限 - unbounded
- 表示从前面的起点 - unbounded preceding
- 表示到后面的终点 - unbounded following

举例：

- 取当前行和前五行：ROWS between 5 preceding and current row --共6行
- 取当前行和后五行：ROWS between current row and 5 following --共6行
- 取前五行和后五行：ROWS between 5 preceding and 5 following --共11行
- 取当前行和前六行：ROWS 6 preceding（等价于between...and current row） --共7行
- 这一天和前面6天：RANGE between interval 6 day preceding and current row --共7天
- 这一天和前面6天：RANGE interval 6 day preceding（等价于between...and current row） --共7天
- 字段值落在当前值-100到+200的区间：RANGE between 100 preceding and 200 following  --共301个数值

题目分析：

本题中，要的是按日期的金额的累计， 窗口内的数据要取当前日期和前6天。
但是即使前边的数据不够，窗口函数也会将范围内的数据框住并计算，因此需要最后手动地从第7天开始。

## 处理函数

`FORMAT()`

### 字符串处理函数

`CHAR_LENGTH(str)`：字符串长度

`SUBSTRING(column_name, start, length)`：从1开始数的，这将从列的值中提取一个子字符串，从指定的起始位置开始，直到指定的长度。不指定长度就到末尾。

`UPPER(expression)`：这会将字符串表达式转换为大写。

`LOWER(expression)`：这会将字符串表达式转换为小写。

`CONCAT(string1, string2, ...)`：这会将两个或多个字符串连接成一个字符串。

核心思想是将名称列的第一个字符与其他字符分开，相应地更改它们的大小写，然后将它们连接在一起。

### 数学函数

abs、cos、floor、power等

### 浮点数处理函数

MOD(100, 2)

可以使用 ROUND 函数来保留指定位数的小数。ROUND 函数的语法如下：

```sql
ROUND(number, decimal_places)
```

其中，number 是要进行舍入的数字，decimal_places 是要保留的小数位数。例如，要将一个数保留两位小数，可以使用以下 SQL 语句：

```sql
SELECT ROUND(number, 2) FROM table_name;
```

其中，number 是要进行舍入的数字，2 是要保留的小数位数。执行该 SQL 语句后，将返回一个保留两位小数的结果集。

需要注意的是，ROUND 函数会根据第二个参数进行四舍五入操作。如果要对小数进行截断操作，可以使用 TRUNCATE 函数。TRUNCATE 函数的语法如下：

```sql
TRUNCATE(number, decimal_places)
```

其中，number 是要进行截断的数字，decimal_places 是要保留的小数位数。例如，要将一个数截断到两位小数，可以使用以下 SQL 语句：

```sql
SELECT TRUNCATE(number, 2) FROM table_name;
```

执行该 SQL 语句后，将返回一个截断到两位小数的结果集。

### 日期处理函数

#### 加减

`TIMESTAMPDIFF(unit, date1, date2)`

```sql
ADDDATE: ADDDATE(date, INTERVAL value addunit) 
#ADDDATE('yyyyMMdd',INTERVAL 1 day)
DATEDIFF: DATEDIFF(date1, date2) #date1-date2,结果是以日为单位

TIMESTAMPDIFF: TIMESTAMPDIFF(DAY, '2023-01-01', '2022-12-21')
DATE_SUB: DATE_SUB('2023-12-29',INTERVAL 2 DAY) #2023-12-27
DATE_ADD: DATE_ADD('2023-12-29',INTERVAL 2 DAY) #2023-12-27
```

`ADDDATE(date, INTERVAL value addunit)`

ADDDATE()函数用于将指定的时间间隔添加到日期值date是表示日期的值，它可以是 String、DATE（YEAR、MONTH 和 DAY)、DATETIME（HOURS、MINUTES 或 SECONDS)或 TIMESTAMP 类型。

| 字段    | 描述                                                         |
| ------- | ------------------------------------------------------------ |
| date    | 必填。要修改的日期                                           |
| days    | 必填。要添加到日期的天数                                     |
| value   | 必填。要添加的时间/日期间隔的值。允许正值和负值              |
| addunit | 必填。要添加的间隔类型。可以是以下值之一：MICROSECON 、 DSECOND、MINUTE、HOUR、DAY、WEEK、MONTH、QUARTER、YEAR、 SECOND_MICROSECOND、YEAR_MONTH、MINUTE_MICROSECOND、MINUTE_SECOND 、HOUR_MICROSECOND、HOUR_SECOND 、HOUR_MINUTE、DAY_MICROSECOND、DAY_SECOND、DAY_MINUTE、DAY_HOUR |

#### 格式

`DATE_FORMAT(datem '%Y-%m')`

### 空值处理函数

`COALESCE` 是 SQL 中的一个函数，用于返回参数列表中的第一个非空值。如果所有参数均为 NULL，则 `COALESCE` 返回 NULL。语法如下：

```sql
COALESCE(value1, value2, ..., valueN)
```

它会按顺序检查每个参数，并返回第一个非空值。如果所有参数都是 NULL，则返回 NULL。

在上面的 SQL 查询中，`COALESCE(ms.num_of_reports, 0)` 和 `COALESCE(ms.avg_age, 0)` 的作用是如果 `ms.num_of_reports` 或 `ms.avg_age` 是 NULL，则将其替换为 0。