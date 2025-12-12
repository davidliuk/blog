# Mongo DB

NoSQL, Document DB

### 安装使用

```shell
$ docker run -itd --name mongo -p 27017:27017 mongo --auth
$ docker exec -it mongo mongosh admin
# 创建一个名为 admin，密码为 123456 的用户。
> db.createUser({ user:'admin',pwd:'123456',roles:[ { role:'userAdminAnyDatabase', db: 'admin'},"readWriteAnyDatabase"]});
# 尝试使用上面创建的用户信息进行连接。
> db.auth('admin', '123456')
```



MongoDB 存储类似 Json(Document)



database 数据库
table collection 数据库表/集合。
row
documentp 数据记录行文档。
columne
field 数据字段/域。
index 索引
table join 表连接,

MongoDB 不支持。
primary key
primary key
主键 MongoDB.自动将_id字段设置为主键。



集合就是数据库的表
