# Database

Relational DB, Document DB, Key-Value DB, Graph DB

常见数据库，包括关系型数据库、非关系型数据库、分布式数据库等。

- MySQL

- Redis

- MongoDB

  LSM Tree 和 B-Tree 就是 NoSQL 和 SQL 的 trade off

分类

- SQL

  - Relational

    关系：MySQL、TiDB

  - Analytical (OLAP)

    分析：ClickHouse

- NoSQL

  - Document

    文档：MongoDB、CouchDB

  - Key-Value

    键值：Redis、DynamoDB、RocksDB、Doris

  - Wide-Column

    宽列：HBase、Cassandra

  - Graph

    图表：Neo4j、 Amazon Neptune、Giraph

---

nosql 最早就是处理写多读少，google big table 处理 log 的（分布式 k-v 数据库）(big table 用的是 skip list，因为方便序列化成有序表)

---

MPP ( Massively Parallel Processing )，即大规模并行处理，海量数据并发查询。

在数据库非共享集群中，每个节点都有独立的磁盘存储系统和内存系统，业务数据根据数据库模型和应用特点划分到各个节点上，每台数据节点通过专用网络或者商业通用网络互相连接，彼此协同计算，作为整体提供数据库服务。非共享数据库集群有完全的可伸缩性、高可用、高性能、优秀的性价比、资源共享等优势。简单来说，MPP 是将任务并行的分散到多个服务器和节点上，在每个节点上计算完成后，将各自部分的结果汇总在一起得到最终的结果 ( 与 Hadoop 相似 )。

OLAP

数据分析的目标则是探索并挖掘数据价值，作为企业高层进行决策的参考，通常被称为 OLAP（On-Line Analytical Processing，联机分析处理）。

业务数据积累时所产生的价值信息则被 OLAP 不断呈现，企业高层通过参考这些信息会不断调整经营方针，也会促进基础业务的不断优化。

OLAP 不应该对 OLTP 产生任何影响，（理想情况下）OLTP 应该完全感觉不到 OLAP 的存在。

OLTP

业务类系统主要供基层人员使用，进行一线业务操作，通常被称为 OLTP（On-Line Transaction Processing，联机事务处理）。从功能角度来看，OLTP 负责基本业务的正常运转。
