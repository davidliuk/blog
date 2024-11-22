# Class

duck type

### `__new__`和`__init__`区别？

- `__new__`是一个静态方法,而`__init__`是一个实例方法.
- `__new__`方法会返回一个创建的实例,而`__init__`什么都不返回.
- 只有在`__new__`返回一个cls的实例时后面的`__init__`才能被调用.
- 当创建一个新实例时调用`__new__`,初始化一个实例时用`__init__`.

```python
__new__();
__init__();
__call__();
__del__();
```

### Meta Class

元类(meta class)是创建类的类

- 元类允许我们控制类的生成，比如修改类的属性等
- 使用type来定义元类
- 元类最常见的一个使用场景就是ORM框架

### 可变对象与不可变对象

- 可变对象: list，dict，set
- 不可变对象: bool，int，float，tuple，str…

### 类变量和实例变量的区别？

- 类变量由所有实例共享
- 实例变量由实例单独享有，不同实例之间不影响
- 当我们需要在一个类的不同实例之间共享变量的时候使用类变量

### classmethod和staticmethod区别？

- 都可以通过Class.method()的方式使用
- classmethod第一个参数是cls，可以引用类变量
- staticmethod使用起来和普通函数一样，只不过放在类里去组织
- classmethod是为了使用类变量，staticmethod是代码组织的需要，完全可以放到类之外

通过下面这个例子，看到类变量，实例变量，类方法，普通方法，静态方法的使用

```python
class Person:
    Country = 'china'
    
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def print_name(self):
        print(self.name)

    @classmethod
    def print_country(cls):
        print(cls.Country)

    @staticmethod
    def join_name(first_name, last_name):
        return print(last_name + first_name)
```

### 浅拷贝和深拷贝

浅拷贝出来的是一个独立的对象，但它的子对象还是原对象中的子对象

深拷贝会递归地拷贝原对象中的每一个子对象，因此拷贝后的对象和原对象互不相关。

### 闭包

闭包就是一个嵌套函数，它的内部函数使用了外部函数的变量或参数,它的外部函数 返回了 内部函数

可以保存外部函数内的变量，不会随着外部函数调用完而销毁

## Singleton

```python
class SingletonMeta(type):
    def __init__(cls, *args, **kwargs):
        cls.__instance = None
        super().__init__(*args, **kwargs)

    def __call__(cls, *args, **kwargs):
        if cls.__instance is None:
            cls.__instance = super().__call__(*args, **kwargs)
        return cls.__instance


class President(metaclass=SingletonMeta):
    pass
```

