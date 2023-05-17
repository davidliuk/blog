# 函数

## 聚合函数

最大值，最小值

**聚合函数类型**

- AVG()
- SUM()
- MAX()
- MIN()
- COUNT()



## 窗口函数

https://zhuanlan.zhihu.com/p/92654574

窗口函数，也叫OLAP函数（Online Anallytical Processing，联机分析处理），可以对数据库数据进行实时分析处理。

```sql
<窗口函数> over (partition by <用于分组的列名>
                order by <用于排序的列名>)
```



<窗口函数>的位置，可以放以下两种函数：

1） 专用窗口函数，包括后面要讲到的rank, dense_rank, row_number等专用窗口函数。

2） 聚合函数，如sum. avg, count, max, min等

因为窗口函数是对where或者group by子句处理后的结果进行操作，所以**窗口函数原则上只能写在select子句中**。



1）同时具有分组和排序的功能

2）不减少原表的行数



加distinct会显著提速



- rank, dense_rank, row_number
- lag
- lead



### 前后类

**Lag** 和**Lead** 函数可以在一次查询中取出同一字段的**前N行** 的数据和**后N行** 的值。这种操作可以使用对相同表的表连接来实现，不过使用LAG和LEAD有更高的效率。

`Lead (expression, offset, default) over(partition-clause order-by-clause)`

参数说明： 

- offset 偏移，表示查询其后第n条记录， 如果不提供这个参数，就是默认为1；
- default 默认值，如果没有找到。如果没有设置，且找不到，那么就返回Null； 
- query_partition_clause  分区语句，对结果集合分区的语句，是可选的，如果没有就是所有的一个分区；
- Order_by_clause 排序语句 必须需要 , 如果没有order by 子句，就不是“连续”的。

Lead向下（后），Lag向上（前）



## 处理函数

### 字符串处理函数



### 数字处理函数

在 SQL 中，可以使用 ROUND 函数来保留指定位数的小数。ROUND 函数的语法如下：

```
ROUND(number, decimal_places)
```

其中，number 是要进行舍入的数字，decimal_places 是要保留的小数位数。例如，要将一个数保留两位小数，可以使用以下 SQL 语句：

```
SELECT ROUND(number, 2) FROM table_name;
```

其中，number 是要进行舍入的数字，2 是要保留的小数位数。执行该 SQL 语句后，将返回一个保留两位小数的结果集。

需要注意的是，ROUND 函数会根据第二个参数进行四舍五入操作。如果要对小数进行截断操作，可以使用 TRUNCATE 函数。TRUNCATE 函数的语法如下：

```
TRUNCATE(number, decimal_places)
```

其中，number 是要进行截断的数字，decimal_places 是要保留的小数位数。例如，要将一个数截断到两位小数，可以使用以下 SQL 语句：

```
SELECT TRUNCATE(number, 2) FROM table_name;
```

执行该 SQL 语句后，将返回一个截断到两位小数的结果集。

### 日期处理函数

`TIMESTAMPDIFF`

```sql
ADDDATE: ADDDATE(date, INTERVAL value addunit) 
#ADDDATE('yyyyMMdd',INTERVAL 1 day)

DATEDIFF: DATEDIFF(date1, date2) #date1-date2

TIMESTAMPDIFF: TIMESTAMPDIFF(DAY,'2023-01-01', '2022-12-21')
DATE_SUB: DATE_SUB('2023-12-29',INTERVAL 2 DAY) #2023-12-27
DATE_ADD: 同上
```



ADDDATE()函数用于将指定的时间间隔添加到日期值date是表示日期的值，它可以是 String、DATE（YEAR、MONTH 和 DAY）、DATETIME（HOURS、MINUTES 或 SECONDS）或 TIMESTAMP 类型。

ADDDATE( date , INTERVAL value addunit )

ADDDATE( date , days )

| date    | 必填。要修改的日期                                           |
| ------- | ------------------------------------------------------------ |
| days    | 必填。要添加到日期的天数                                     |
| value   | 必填。要添加的时间/日期间隔的值。允许正值和负值              |
| addunit | 必填。要添加的间隔类型。可以是以下值之一：MICROSECON 、 DSECOND、MINUTE、HOUR、DAY、WEEK、MONTH、QUARTER、YEAR、 SECOND_MICROSECOND、YEAR_MONTH、MINUTE_MICROSECOND、MINUTE_SECOND 、HOUR_MICROSECOND、HOUR_SECOND 、HOUR_MINUTE、DAY_MICROSECOND、DAY_SECOND、DAY_MINUTE、DAY_HOUR |

`update salary set sex=IF(sex='f','m','f')`