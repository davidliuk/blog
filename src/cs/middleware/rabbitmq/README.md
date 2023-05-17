## 基本概念

### rabbitmq有哪些重要角色？

- 生产者：消息的创建者，负责创建和推送数据到消息服务器
- 消费者：消息的接收方，用于处理数据和确认消息
- 代理：就是RabbitMQ本身，用于扮演快递的角色，本身并不生产消息

### rabbitmq有哪些重要组件？

- ConnectionFactory(连接管理器)：应用程序与RabbitMQ之间建立连接的管理器
- BrokerBroker是RabbitMQ的核心组件，它接收来自生产者的消息并将其路由到消费者。Broker还负责管理队列、交换机和绑定等对象。RabbitMQ Broker可以在单个节点上运行，也可以在多个节点上运行以实现高可用性和负载均衡。
- Channel(信道)：消息推送使用的通道
- Exchange(交换器)：用于接受、分配消息
- Queue(队列)：用于存储生产者的消息
- RoutingKey(路由键)：生产者将消息发送给交换器的时候，会指定一个RoutingKey,用来指定这个消息的路由规则，这个RoutingKey需要与交换器类型和绑定键(BindingKey)联合使用才能最终生效。
- BindKey(绑定键)：用于把交换器的消息绑定到队列上

## 基本操作

## 安装

启动命令

```sh
docker run -d --hostname mq1 --name rabbitmq -e RABBITMQ_DEFAULT_USER=david -e RABBITMQ_DEFAULT_PASS=DavidLiu7 -p 15672:15672 -p 5672:5672 rabbitmq:3-management
```

虚拟主机：多租户隔离

## 流程

消息发送流程：

1. 建立Connection
2. 创建Channel
3. 利用Channel声明队列
4. 利用Channel向队列发送消息

消息接收流程：

1. 建立Connection
2. 创建Channel
3. 利用Channel声明队列
4. 定义consumer的消费行为handleDelivery()
5. 利用Channel讲消费者与队列绑定



## AMQP

什么是AMQP?

- 应用间消息通信的一种协议，与语言和平台无关。



添加spring-amqp的依赖

或者spring-boot-starter-amqp



SpringAMQP如何发送消息？

- 引入amgp的starter依赖
- 配置RabbitMO地址
- 利用RabbitTemplate的convertAndSend方法

```java
@RunWith(SpringRunner.class)
@SpringBootTest
public class SpringAMQPTest {
    @Autowaired
    private RabbitTemplate rabbitTemplate;
    @Test
    public void testSimpleQueue() {
        String queueName = "simple.queue";
        String message = "hello, spring amqp!";
        rabbitTemplate.convertAndSend(queueName, message);
    }
}
```



```java
@Component
public class SpringRabbitListener {
    
    @RabbitListener(queue = "simple.queue")
    public void listenSimpleQueueMessage(String msg) throw InterruptedException {
        System.out.println(msg);
    }
}
```

