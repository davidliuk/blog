# 附近

基于地理坐标搜索，即经纬度，GEO 结构底层是 ZSET

- `GEOADD`，key，(x, y, member)，member 建议存数据库里面的 id

- `GEOPOS`

- `GEOHASH`，

- `GEODIST`，两个 key 之间的距离，返回的单位都是 km

- `GEORADIUS`，圆心，半径，可以把这个范围内的所有的都返回出来，并按距离排好序，可以实现附近的人功能，6.2 以后废弃，替换为 GEOSEARCH

- `GEOSEARCH`，不仅支持圆形，还支持方形等，拓展性更好，其他方面与上面那个相同，半径长度的单位是 km

- `GEOSEARCHSTORE`，不返回，只是讲搜索结果存储到一个指定的 key

不会的时候可以`help GEOSEARCH`

距离单位：KM，坐标单位：经纬度

key 的设计

- `typeId` 作为 key 存入同一个 GEO 集合
