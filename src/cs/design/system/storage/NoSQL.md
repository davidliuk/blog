## Cassandra

> 类似的 HBase

- Cassandra 是一个三层结构的 NoSQL 数据库
  - 第一层：row_key
  - 第二层：column_key
  - 第三层：value
- Cassandra 的Key =row_key +column_key
  - 同一个 row_key + column_key 只对应一个 value
- 结构化信息如何存储？
  - 将其他需要同时存储的数据, 序列化 (Serialize) 到 value 里进行存储
    - 什么是 Serialization： 把一个 object / hash 序列化为一个 string, 比如把一棵二叉树序列化

---

Row Key

- 又称为 Hash Key, Partition Key
- Cassandra 会根据这个 key 算一个 hash 值
- 然后决定整条数据存储在哪儿
- 无法进行 Range Query
- 常用：user_id

Column Key

- `insert(row_key, column_key, value)`
- 任何一条数据, 都包含上面三个部分
- 你可以指定 column_key 按照什么排序
- Cassandra 支持这样的“范围查询”：
  - `query(row_key, columr_start, column_end)`
- 可以是复合值, 如 timestamp + user_id

---

- SQL的column是在Schema中预先指定好的, 不能随意添加
- 一条数据一般以 row 为单位 (取出整个row作为一条数据) 

---

- NoSQL的column是动态的, 无限大, 可以随意添加
- 一条数据一般以 grid 为单位, row_key +column_key t yalue而一条数据
- 只需要提前定义好 column_key 本身的格式 (是一个 int 还是一个 int+string) 

Hi Prathyusha,

Thanks for your update on this interview scheduled on Friday, February 20. I am 

Hi Prathyusha,

Thank you for your update regarding the interview scheduled for Friday, February 20. I’m pleased to confirm that I am available and happy to participate in the interview as planned.

Best regards,

Dawei Liu