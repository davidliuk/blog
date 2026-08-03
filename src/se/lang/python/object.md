# Python Object Model

Python 中几乎一切都是对象：数字、函数、类和模块都拥有类型、身份和值。变量保存对象引用，而不是把对象本身复制进变量。

## Identity, Type, Value

- `id(obj)` 表示当前进程中的对象身份；
- `type(obj)` 给出运行时类型；
- `==` 比较值，`is` 比较是否为同一对象；
- 可变对象可以原地改变，不可变对象的“修改”会创建新对象。

## Attribute Lookup

实例属性通常保存在 `obj.__dict__`，类属性保存在 `type(obj).__dict__`。读取 `obj.name` 时会经过描述符协议、实例字典、类及其 MRO；因此 property、方法绑定和 ORM 字段都能复用同一个属性访问接口。

函数定义在类中时是 descriptor。通过实例访问会产生 bound method，自动把实例作为第一个参数传给函数。

## Classes Are Objects

类由 metaclass 创建，默认 metaclass 是 `type`：

```python
class User:
    role = "member"

u = User()
assert isinstance(User, type)
assert u.__class__ is User
```

`__new__` 负责创建实例，`__init__` 负责初始化已经创建的实例。多数业务代码只需重写 `__init__`；不可变类型或对象缓存等场景才需要直接控制 `__new__`。

## Practical Boundaries

- 默认参数、类属性和浅拷贝可能共享可变对象；
- `__slots__` 可限制属性并减少大量小对象的内存，但会改变动态行为；
- `dataclass` 减少数据对象样板代码，不改变 Python 的引用语义；
- 循环引用通常能被 GC 处理，但文件、锁和连接仍应使用 context manager 显式释放。
