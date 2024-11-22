# Path

#### 谈谈你对“猴子补丁”（monkey patching）的理解。

“猴子补丁”是动态类型语言的一个特性，代码运行时在不修改源代码的前提下改变代码中的方法、属性、函数等以达到热补丁（hot patch）的效果。很多系统的安全补丁也是通过猴子补丁的方式来实现的，但实际开发中应该避免对猴子补丁的使用，以免造成代码行为不一致的问题。

在使用`gevent`库的时候，我们会在代码开头的地方执行`gevent.monkey.patch_all()`，这行代码的作用是把标准库中的`socket`模块给替换掉，这样我们在使用`socket`的时候，不用修改任何代码就可以实现对代码的协程化，达到提升性能的目的，这就是对猴子补丁的应用。

另外，如果希望用`ujson`三方库替换掉标准库中的`json`，也可以使用猴子补丁的方式，代码如下所示。

```
import json, ujson

json.__name__ = 'ujson'
json.dumps = ujson.dumps
json.loads = ujson.loads
```

单元测试中的`Mock`技术也是对猴子补丁的应用，Python中的`unittest.mock`模块就是解决单元测试中用`Mock`对象替代被测对象所依赖的对象的模块。