# 代码质量

也称 Coding Style

优化的逻辑：

1. 先想暴力的方法
2. 看哪里有地方是浪费的

#### 优秀的 Coding Quality

1. bug free

2. 有边界检测和异常处理

3. 代码风格：命名规范、空格、空行

   1. 每一个逻辑 Part 之间一个空行划分

      如异常判断、主体逻辑、结果返回，这些part之间一个分行

   2. 参数列表比较长

      1. 每个参数占一行

         将每个参数放在新的一行，缩进对齐。适合参数较多时，保证代码可读性。

         ```java
         public void someMethod(
             String firstName,
             String lastName,
             int age,
             String address,
             String phoneNumber
         ) {
             // method body
         }
         ```
   
      2. 按逻辑分组
   
         如果参数之间有逻辑关系，可以按组换行，组内保持紧凑。
   
         ```java
         public void someMethod(
             String firstName, String lastName,
             int age,
             String address, String phoneNumber
         ) {
             // method body
         }
         ```
   
      3. 保持总行长度符合规范
   
         根据团队代码风格（如 Google Java Style Guide 限制每行 ≤ 100 列），在长度合适的地方换行：
   
         ```java
         public void someMethod(String firstName, String lastName, int age,
                                String address, String phoneNumber) {
             // method body
         }
         
         ```
   
   3. 变量命名：全称，1-2个单词，小驼峰
   
   4. 避免重复代码
   
      泄露没有工程经验
   
   5. 用不到的变量用_来命名
   
   6. 尽可能避免全局变量
   
   7. 缩进
   
      1. java是4个
   
   8. 空格
   
      1. 运算符前后要有
      2. 逗号、分号后面有

> 写Python能大概减少10分钟的时间，如果是面试不限制语言的话，可以写Python

### 独孤九剑 - 总决式

想做到 bug free 最重要的是优化code Quality

单元运算符：--, ++, !

多用 continue 少用 else：减少大段代码的缩进

减少 else，如果前面的if里面执行了return或者continue、break等，后面就不需要else if，直接普通的if，最后不需要else，直接普通的xxx

最好把嵌套式的改成并列的：好懂得多

减少typo：拼写错误