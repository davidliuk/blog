# 排序

`order by`后面可以根多个字段及其升降序，默认采用升序的策略进行排序。

对字符串用默认的升降序排序得到的是按字典序排列的结果

## 默认排序

### 升序

`order by id asc`

### 降序

`order by id desc`

## 自定排序

利用`field()`函数，来指定排序顺序

`order by field(id, 5, 2, 3)`

下面是一段示例，SQL语句与对应的Mybatis映射。

```sql
SELECT * FROM project_case where
case_id in (119, 113, 117)
order by field(case_id, 119, 113, 117);
```

mapper

```xml
<select id="selectSortedProjectCaseByIds" parameterType="String" resultMap="ProjectCaseResult">
    SELECT * FROM project_case where
    case_id in
    <foreach collection="caseIdList" item="caseId" open="(" close=")" separator=",">
        #{caseId}
    </foreach>
    order by field
    <foreach collection="caseIdList" item="caseId" open="(case_id," close=")" separator=",">
        #{caseId}
    </foreach>
</select>
```

java

```java
List<ProjectCase> selectSortedProjectCaseByIds(@Param("caseIdList") List<Integer> caseIdList);
```

## 字符串排序

```sql
SELECT * FROM `tasks` order by FIELD(state, 'ready', 'failure', 'success'), execute_time desc
```

1. `cast( 要排序的字段名  as integer)` ，注意 integer 小写

   整数和小数都可以处理

2. `to_number(要排序的字段名) `

3. `order by to_number(regexp_substr(salary,'[0-9]*[0-9]',1)) desc`，regexp_substr 为截取方法，1为起始位置

其中，正则表达式函数

`REGEXP_SUBSTR(srcstr, pattern, position, occurrence, modifier)`

- srcstr：需要进行正则处理的字符串

- pattern：进行匹配的正则表达式

- position   ：起始位置，从第几个字符开始正则表达式匹配（默认为1）

- occurrence ：标识第几个匹配组，默认为1

- modifier   ：模式（'i'不区分大小写进行检索；'c'区分大小写进行检索。默认为'c'。）

## 排序窗口函数

### rank() over

作用：查出指定条件后的进行排名，条件相同排名相同，排名间断不连续。 

说明：例如学生排名，使用这个函数，成绩相同的两名是并列，下一位同学空出所占的名次。即：1 1 3 4 5 5 7

```sql
select a.Score as Score,
(select count(b.Score) + 1 from Scores b where b.Score > a.Score) as Rank
from Scores a
order by a.Score DESC
```

### dense_rank() over

作用：查出指定条件后的进行排名，条件相同排名相同，排名连续。 

说明：和 rank() over 的作用相同，区别在于 dense_rank() over 排名是密集连续的。例如学生排名，使用这个函数，成绩相同的两名是并列，下一位同学接着下一个名次。即：1 1 2 3 4 5 5 6

```sql
select a.Score as Score,
(select count(distinct b.Score) from Scores b where b.Score >= a.Score) as Rank
from Scores a
order by a.Score DESC
```

### row_number() over

作用：查出指定条件后的进行排名，条件相同排名也不相同，排名连续。

说明：这个函数不需要考虑是否并列，即使根据条件查询出来的数值相同也会进行连续排序。即：1 2 3 4 5 6

### ntile(${group_num}) over

Ntile() 将所有记录分成group_num个组，每组序号一样

用于做分位数，如4分位数，可以把数组排序后分成4个部分，每个部分的序号相同

```sql
select *, ntile(2) OVER(order by number ) as row_num
from num 
```

### 使用小提示

dense_rank() over 后面跟排序的依据的列，下面是用了一个排序好的列(order by score desc)。 

注意：如果select中有一列是用rank()这类函数，其他的列都会按着他这列规定好的顺序排。

```sql
select score, dense_rank() over (order by score desc) as 'rank'  #这个rank之所以要加引号，因为rank本身是个函数，直接写rank会报错
from scores;
```

