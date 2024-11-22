# Iterator

- `enumerate(iterable, start=0)`
- `range(start, stop, step)`

### Iterator vs Iterable

- 可迭代类，必须自定义__iter__()魔法方法，range，list类的实例化对象都是可迭代对象
- 迭代器类，必须自定义__iter__()和__next__()魔法方法，用iter()函数可以创建可迭代对象的迭代器

## Generators

生成器是一种可迭代对象，可以挂起并保持当前的状态

生成器遇到yield处会停止执行，调用next()或send()才会继续执行

定义一个生成器有两种方式，

1. 生成器推导式
2. 生成器函数，在函数中添加yield语句并实例化

```python
(expression for item in iterable if condition);

def frange(start, stop, increment):
    x = start
    while x < stop:
        yield x
        x += increment

for n in frange(0, 2, 0.5):
    print(n)
```

生成器(generator)可以简单理解为懒人版本的迭代器。

它相比于迭代器的优势是，生成器并不会像迭代器一样占用大量内存。比如声明一个迭代器：`[i for i in range(100000000)]`就可以声明一个包含一亿个元素的列表，每个元素在生成后都会保存到内存中。但实际上我们也许并不需要保存那么多东西，只希望在你用 next() 函数的时候，才会生成下一个变量，因此生成器应运而生，在python中的写法为(i for i in range(100000000))

此外，生成器还可以有别的形式，比如生成器函数，通过yield关键字，把结果返回到next()方法中，举个例子：

相比于迭代器，生成器具有以下优点：

1. 减少内存
2. 延迟计算
3. 有效提高代码可读性
