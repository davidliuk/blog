# 空值

- is null
- is not null
- Ifnull(a, b)



MySQL 使用三值逻辑 —— TRUE, FALSE 和 UNKNOWN。任何与 NULL 值进行的比较都会与第三种值 UNKNOWN 做比较。这个“任何值”包括 NULL 本身



SQL的保留字中，很多都被归类为谓词一类，例如>,<>,= 等比较谓词，以及BETWEEN, LIKE, IN, IS NULL等。总结，谓词是一种特殊的函数，返回值是真值。(前面提到的诶个谓词，返回值都是true, false, unknown,SQL是三值逻辑，所以有三种真值）

因为查询结果只会包含WHERE子句里的判断结果为true的行！不包含判断结果为false和unknown的行。且不仅是等号，对NULL使用其他比较谓词（比如> NULL），结果也都是unknown。

重点理解：

- NULL不是值，所以不能对其使用谓词，如果使用谓词，结果是unknown。
- 可以认为它只是一个没有值的标记,而比较谓词只适用于比较值。因此对非值的NULL使用比较谓词是没有意义的



