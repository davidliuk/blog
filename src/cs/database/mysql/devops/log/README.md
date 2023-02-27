# 日志



错误日志，记录了mysqld启动和停止时，以及服务器在运行程序时产生的error记录在这里，主要是启动失败之类的严重错误



二进制日志(BINLOG)记录了所有的DDL(数据定义语言)语句和DML语句，但是不包括数据查询(select, show)

作用

- 灾难时的数据恢复
- MySQL的主从复制

在Mysql8中，二进制日志是默认开启的

```sql
show variables like %bin_log%
```



- Statement
- row
- mixed





指令
含义
reset master
删除全部binlog日志，删除之后，日志编号，将从binlog.000001重新开始
purge master logs to 'binlog.******
删除**幸编号之前的所有日志
purge master logs before 'yyyy-mm-dd hh24:mi:ss'
删除日志为"yyyy-mm-ddhh24:mi:ss"之前产生的所有日志



