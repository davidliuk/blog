# Spring Data Redis



操作API分组

- opsForValue
- opsForHash
- opsForList
- opsForSet
- opsForZSet





### 引入依赖

```xml
spring-data-redis

common-pool2
```



### 配置文件

```yaml
spring:
	redis:
		host: xxx
		port: 6379
		password: xxx
		lettuce:
			pool: 
				max-active: 8 # 最大连接
				max-idle: 8 # 最大空闲连接
				min-idle: 0 # 最小空闲连接
				max-wait: 100 # 连接等待时间
```



## Redis Serializer

默认会当做Object去存



key一般用StringRedisSerializer

value一般用Jackson2



字节码额外存了class，占用额外空间，所以不要用

统一使用String，value也是，然后手动序列化，用ObjectMapper