# Canal

`Canal` [kə’næl]，译意为水道/管道/沟渠，主要用途是基于 **MySQL 数据库增量日志**解析，提供**增量数据订阅和消费**。

https://blog.csdn.net/qq_43528451/article/details/116120745

Canal框架原理，参考MySQL数据主从复制原理。

1. MySQL master 将数据变更写入二进制日志( binary log, 其中记录叫做二进制日志事件binary log events，可以通过 show binlog events 进行查看)；变更数据，记录日志：biglog
2. MySQL slave 将 master 的 binary log events 拷贝到它的中继日志(relay log)；IO 线程，获取binlog
3. MySQL slave 重放 relay log 中事件，将数据变更反映它自己的数据；SQL线程，执行语句



数据库镜像
数据库实时备份
索引构建和实时维护（拆分异构索引、倒排索引等）
业务cache刷新
带业务逻辑的增量数据处理

伪装成slave

1. 全库存全表 connector.subscribe(".".."")
2. 指定存全表 connector.subscribe("test\\.."")
3. 单表 connector,sbscribe(“test,user“)
4. 多规组合使用 connoctor subscribo(tost 'tost2 usor1 tost3.usor2"