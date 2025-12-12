# ElasticSearch

Elasticsearch(简称ES)是一个分布式、RESTful风格的搜索和数据分析引擎。

Elasticsearch是面向文档型数据库，一条数据在这里就是一个文档，用JSON作为文档序列化的格式，比如下面这条用户数据：



10.1.2索引(Index)

一个索引就是一个拥有几分相似特征的文档的集合。比如说，你可以有一个客户数据的索引，另一个产品目录的索引，还有一个订单数据的索引。一个索引由一个名字来标识（必须全部是小写字母），并且当我们要对这个索引中的文档进行索引、搜索、更新和删除的时候，都要使用到这个名字。在一个集群中，可以定义任意多的索引。

能搜索的数据必须索引，这样的好处是可以提高查询速度，比如：新华字典前面的目录就是索引的意思，目录可以提高查询速度。

Elasticsearch索引的精髓：一切设计都是为了提高搜索的性能。



## 安装

```sh
docker network create es-net

docker run -d \
	--name elasticsearch \
    -e "ES_JAVA_OPTS=-Xms512m -Xmx512m" \
    -e "discovery.type=single-node" \
    -v /appdata/es/data:/usr/share/elasticsearch/data \
    -v /appdata/es/plugins:/usr/share/elasticsearch/plugins \
    --privileged \
    --network es-net \
    -p 9200:9200 \
    -p 9300:9300 \
	elasticsearch:7.8.0

docker run -d \
    --name kibana \
    --network es-net \
    -p 5601:5601  \
    kibana:7.8.0

docker logs -f kibana

#进入容器
docker exec -it kibana /bin/bash

#进入配置文件目录
cd /usr/share/kibana/config

#编辑文件kibana.yml
vi kibana.yml

#在最后一行添加如下配置
i18n.locale: zh-CN

#保存退出
exit

#并重启容器
docker restart kibana
```

命令说明：

- `--network itmentu-net` ：加入一个名为`itmentu-net`的网络中，与`elasticsearch`在同一个网络中
- `-e ELASTICSEARCH_HOSTS=http://192.168.211.130:9200"`：设置`elasticsearch`的地址，因为`kibana`已经与`elasticsearch`在一个网络，因此可以用容器名直接访问`elasticsearch`，也可以写IP地址实现访问。
- `-p 5601:5601`：端口映射配置

## 基本概念

- Index(索引)：作为名词理解的话，索引是一类拥有相似特征的文档的集合比如商品索引、商家索引、订单索引，有点类似于SQL中的数据库表。作为动词理解的话，索引就是将一份文档保存在一个索引中。
- Document(文档)：可搜索最小单位，用于存储数据，一般为JSON格式。文档由一个或者多个字
  段(Field)组成，字段类型可以是布尔，数值，字符串、二进制、日期等数据类型。
- Type(字段类型)：每个文档在ES中都必须设定它的类型。ES7.0之前，一个Index可以有多个 Type。6.0开始，Type已经被Deprecated。7.0开始，一个索引只能创建一个Type：`_doc`。8.0之后，Type被完全删除，删除的原因看这里：https://www.elastic.co/guide/en/elasticsearch/reference/7.17/removal-of-types.html.
- Mapping(映射)：定义字段名称、数据类型、优化信息（比如是否索引）、分词器，有点类似于数据库中的表结构定义。一个Index对应一个Mapping。
- Node(节点)：相当于一个ES实例，多个节点构成一个集群。
- Cluster(集群)：多个ES节点的集合，用于解决单个节点无法处理的搜索需求和数据存储需求。
- Shard(分片)：Index(索引)被分为多个碎片存储在不同的Node节点上的分片中，以提高性能和吞吐量。
- Replica(副本)：Index副本，每个Index有一个或多个副本，以提高拓展功能和吞吐量。
- DSL(查询语言)：基于JSON的查询语言，类似于SQL语句。

MySQL与Elasticsearch的概念简单类比：

| MySQL         | Elasticsearch |
| ------------- | ------------- |
| Table(表)     | Index         |
| Row(行)       | Document      |
| Column(列)    | Field         |
| Schema(约束)  | Mapping       |
| SQL(查询语言) | DSL           |

## 数据同步

Elasticsearch和MySQL同步的策略有哪些？

我们可以将同步类型分为全量同步和增量同步。

全量同步即建好Elasticsearch索引后一次性导入MySQL所有数据。全量同步有很多现成的工具可以用比如go-mysql--elasticsearch、Datax。

另外，除了插件之外，像我们比较熟悉的Canal除了支持binlog实时增量同步数据库之外也支持全量同步。

增量同步即对ySQL中新增，修改，删除的数据进行同步：

- 同步双写：修改数据时同步到Elasticsearch.。这种方式性能较差、存在丢数据风险且会耦合大量数据同步代码，一般不会使用。
- 异步双写：修改数据时，使用MQ异步写入Elasticsearch提高效率。这种方式引入了新的组件和服务，增加了系统整体复杂性。
- 定时器：定时同步数据到Elasticsearch。这种方式时效性差，通常用于数据实时性不高的场景
- **Canal**：binlog同步组件，使用Canal可以做到业务代码完全解耦，API完全解耦，零代码实现准实时同步，Canal通过解析 MySQL 的binlog日志文件进行数据同步。

Canal 增量数据同步 Elasticsearch 的原理了解吗？

这个在Canal官方文档中有详细介绍到，原理非常简单：

1. Canal模拟MySQL Slave节点与MySQL Master节点的交互协议，把自己伪装成一个MySQL Slave节点，向MySQL Master节点请求binlog;
2. MySQL Master节点接收到请求之后，根据偏移量将新的binlog发送给MySQL Slave节点；
3. Canal接收到binlog之后，就可以对这部分日志进行解析，获取主库的结构及数据变更。
