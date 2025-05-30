# 事务

### 事务定义

事务是一组操作的集合，它是一个不可分割的工作单位，事务会把所有的操作作为一个整体一起向系统提交或撤销操作请求，即这些操作要么同时成功，要么同时失败。

默认 MySQL 的事务是自动提交的，也就是说，当执行一条 DML 语句，MySQL 会立即隐式的提交事务。

## 事务操作

### 方法一

取消自动提交

```sql
set @@autocommit = 0

-- 写操作

-- 操作

-- 提交事务
commit;

-- 如果异常，则不要执行commit，要回滚事务
rollback;
```

### 方式二

开启事务

```sql
-- begin 或者如下都可以
start transaction;


-- 提交事务
commit;

-- 回滚事务
rollback;
```

## 事物分类

### 数据库角度

根据数据源的数量分为本地事务和全局事务：

本地事务：普通事务，独立的一个数据库，保证在该数据库上操作的ACID。

分布式事务：涉及两个或多个数据库源的事务，即跨越多台同类或异类数据库的事务（由每台数据库的本地事务组成的），分布式事务旨在保证这些本地事务的所有操作的ACID，使事务可以跨越多台数据库；

- 扁平事务(Flat Transactions)

  最常用

- 带有保存点的扁平事务(Flat Transactions with Savepoints)

  带有保存点的扁平事务 除了支持扁平事务支持的操作外，允许在事务执行过程设置一个保存点.从而达到将事务回滚到此位置的目的.

- 链事务(Chained Transactions)

  链式事务基于带有保存点的事务基础上,自动将当前事务的上下文隐式传递给下一个事务.

- 嵌套事务(Nested Transactions)

  嵌套事务就是多个事务处于嵌套状态,然后由一个顶层事务控制各个事务.

- 分布式事务(Distributed Transactions)

  指事务的参与者,事务所在的服务器,涉及到资源服务器以及事务管理器等分别位于不同的服务或数据库节点上.


### Java 角度

根据规范分为JDBC事务和JTA事务

JDBC事务：普通事务，即数据库事务中的本地事务，通过connection对象控制管理。

JTA事务：JTA指Java事务API(Java Transaction API)，是Java EE数据库事务规范， JTA只提供了事务管理接口，由应用程序服务器厂商（如WebSphere Application Server）提供实现，JTA事务比JDBC更强大，支持分布式事务（当然也支持本地事务）。

### 编程角度（Spring层面）

根据是否通过编程分为声明式事务和编程式事务

声明式事务：通过XML配置或者注解实现，更为简单

编程式事务：通过编程代码在业务逻辑时需要时自行实现，粒度更小。

> 声明式事务管理建立在AOP之上的。其**本质是对方法前后进行拦截，然后在目标方法开始之前创建或者加入一个事务**，在执行完目标方法之后根据执行情况提交或者回滚事务。

声明式事务最大的优点就是不需要通过编程的方式管理事务，这样就不需要在业务逻辑代码中掺杂事务管理的代码，只需在配置文件中做相关的事务规则声明(或通过基于@Transactional注解的方式)，便可以将事务规则应用到业务逻辑中。
