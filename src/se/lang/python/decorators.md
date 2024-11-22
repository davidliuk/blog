# Decorators 装饰器

> 类似于Java的注解，实现类似于AOP，但是是通过闭包的形式

**说明**：装饰器可以用来装饰类或函数，为其提供额外的能力，属于设计模式中的**代理模式**。

**装饰器本身也可以参数化**，例如上面的例子中，如果不希望在终端中显示函数的执行时间而是希望由调用者来决定如何输出函数的执行时间，可以通过参数化装饰器的方式来做到，代码如下所示。

```python
from functools import wraps

def singleton(cls):
    """单例类装饰器"""
    instances = {}

    @wraps(cls)
    def wrapper(*args, **kwargs):
        if cls not in instances:
            instances[cls] = cls(*args, **kwargs)
        return instances[cls]

    return wrapper

@singleton
class President:
    pass
```

> **扩展**：装饰器是Python中非常有特色的语法，用一个函数去装饰另一个函数或类，为其添加额外的能力。通常通过装饰来实现的功能都属横切关注功能，也就是跟正常的业务逻辑没有必然联系，可以动态添加或移除的功能。装饰器可以为代码提供缓存、代理、上下文环境等服务，它是对设计模式中代理模式的践行。在写装饰器的时候，带装饰功能的函数（上面代码中的`wrapper`函数）通常都会用`functools`模块中的`wraps`再加以装饰，这个装饰器最重要的作用是给被装饰的类或函数动态添加一个`__wrapped__`属性，这个属性会将被装饰之前的类或函数保留下来，这样在我们不需要装饰功能的时候，可以通过它来取消装饰器，例如可以使用`President = President.__wrapped__`来取消对`President`类做的单例处理。需要提醒大家的是：上面的单例并不是线程安全的，如果要做到线程安全，需要对创建对象的代码进行加锁的处理。在Python中可以使用`threading`模块的`RLock`对象来提供锁，可以使用锁对象的`acquire`和`release`方法来实现加锁和解锁的操作。当然，更为简便的做法是使用锁对象的`with`上下文语法来进行隐式的加锁和解锁操作。