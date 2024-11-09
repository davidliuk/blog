# 分支条件

逻辑

- `AND`
- `OR`

## 谓词

谓词的返回值都是true, false, unknown, SQL是三值逻辑，所以有三种真值

查询结果只会包含WHERE子句里的判断结果为true的行！不包含判断结果为false和unknown的行。

### 比较谓词

`>,<,<>,=,!=`

BETWEEN(闭区间), LIKE, IN, IS NULL

谓词是一种特殊的函数，返回值是真值。

对NULL使用其他比较谓词（比如>NULL），结果也都是unknown。

### 空值检验

- `is null`
- `is not null`
- `Ifnull(a, b)`

MySQL 使用三值逻辑：TRUE, FALSE 和 UNKNOWN。任何与 NULL 值进行的比较都会与第三种值 UNKNOWN 做比较。这个“任何值”包括 NULL 本身

重点理解：

- NULL不是值，所以不能对其使用谓词，如果使用谓词，结果是unknown。
- 可以认为它只是一个没有值的标记,而比较谓词只适用于比较值。因此对非值的NULL使用比较谓词是没有意义的

比较判断的返回值：成立为1，不成立为0

sum的时候不需要if，如果sum条件成立就是1，不成立就是0，所以直接写成round(sum(order_date=customer_pref_delivery_date)*100/count(1),2) immediate_percentage即可

### 特殊谓词

`str like pat`

通配符匹配

`str REGEXP pat`

正则表达式匹配

## 分支语句

### `CASE`

写法一：

```sql
CASE WHEN condition1 THEN result1
     [WHEN condition2  THEN result2]
     [...]
     [ELSE result] 
END [AS alias_name]
```

写法二：

```sql
CASE Expression
	WHEN expression1 THEN Result1
	[WHEN expression2 THEN Result2]
	[...]
	[ELSE Result]
END [AS alias_name]
```

### `IF`函数

相当于三目运算符

```sql
IF(expr1, expr2, expr3)
```

expr1是一个条件表达式，例如a>b；

expr2是当条件表达式为真时返回的值；

expr3是当条件表达式为假时返回的值。

`update salary set sex=IF(sex='f','m','f')`

