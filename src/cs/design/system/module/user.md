# 用户系统

用户系统特点：

读非常多，写非常少，一个读多写少的系统，一定要使用 Cache 进行优化

- Authentication Service 负责登录注册
- User Service 负责用户信息存储与查询
- Friendship Service 负责好友关系存储

User SQL

Friendship Cassandra

## Authentication Service

Session、Cookie

Session Table

- Session Token
- User ID，可能加密
- expire at, lazy deleting

单端登陆和多端登陆区别

- 单端加一个device token字段做判断

Session数据存储系统

- 如果用户不太多的话，memcached
- 多，数据库，加cache和索引

## Friendship Service

单向、双向

单向

- `from_user_id`, `to_user_id`

双向

- 一条数据
  - `smaller_user_id`, `bigger_user_id`
  - `where sm_id=x or bg_id=x`
  - 一般noSQL不支持multi-index，不能使用这种方案
  - P：存储空间小，C：慢
- 两条
  - `from_user_id`, `to_user_id`
  - NoSQL, SQL都可以用这种方案
  - P：快，C：存储空间大

两条数据更好，上一个他的or其实性能差，约等于执行两次，disk is cheap



用户不等，在线服务sql不能复杂

DS、DA处理离线数据可能用到复杂sql
