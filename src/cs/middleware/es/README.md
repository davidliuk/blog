# ElasticSearch

Elasticsearch(简称ES)是一个分布式、RESTful风格的搜索和数据分析引擎。

Elasticsearch是面向文档型数据库，一条数据在这里就是一个文档，用SON作为文档序列化的格式，比如下面这条用户数据：



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

