# Big Key

阿里广告平台，海量数据里查询某一固定前缀的ky
小红书，你如何生产上限制keys\*/flushdb/.flushall等危险命令以防止误删误用？
美团，MEMORY USAGE命令你用过吗？
BigKey问题，多大算big?你如何发现？如何删除？如何处理？
BigKey你做过调优吗？惰性释放lazyfree了解过吗？
Morekey 问题，生产上redis数据库有1000W记录，你如何遍历？key\*可以吗？

conf

禁用 flushall key \*

rename command keys ""

替换key用scan

【强制】：拒绝bigkey(防止网卡流量、慢查询)
string类型控制在10KB以内，hash、Iist、set、zset元素个数不要超过5000。
反例：一个包含200万个元素的ist。

非字符串的bigkey,不要使用del删除，
使用nscan、sscan、zscan方式渐进式删除，同时
要注意防止bigkey过期时间自动删除问题（例如一个200万的zset设置1小时过期，会触发del
操作，造成阻塞，而且该操作不会出现在慢查询中(latency可查)，