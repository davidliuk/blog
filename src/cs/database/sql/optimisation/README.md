# SQL 优化



## 选择合适的字段类型

存储字节越小、占用空间就越小、性能就越好

- 非负整数优先用unsigned int，多出一倍存储空间

  自增ID、整型IP、年龄等

- 小数值类型优先使用TINYINT

  比如年龄、状态表示如0/1/2、类别

- IP地址用整数存

  MySQL提供两个方法处理ip地址

  - INET_ATON
  - INET_NTOA

- 日期类型用timestamp

  Datetime消耗空间大，且没有时区信息。

- 金融字段用decimal，避免丢失精度



