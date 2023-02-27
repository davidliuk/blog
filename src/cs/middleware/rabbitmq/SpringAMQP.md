# AMQP



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

