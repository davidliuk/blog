# Collections

`slice(start, end, step)`

### defaultdict

使用dict时，如果引用的Key不存在，就会抛出KeyError。如果希望key不存在时，返回一个默认值，就可以用defaultdict

在没有接触到它之前，我在代码里经常使用setdafult来给字典设置初始值，但这样可读性不好，也不够优雅，比如这一段：

```
for cate in res_service_category:
    category_id = cate['id']
    biz_service_category_mapping = self._service_category_data.setdefault(bk_biz_id, {})
    biz_service_category_mapping[category_id] = cate
```

如果用了defaultdict呢？是不是简洁多了。

```
self._service_category_data = defaultdict()
for cate in res_service_category:
    category_id = cate['id']
    biz_service_category_mapping = self._service_category_data[bk_biz_id]
    biz_service_category_mapping[category_id] = cate
```



```python
data_dic = defaultdict(list)       # default_factory默认是None, 这里default_factory默认是None赋值为列表
data_dic['name'].append("java")
data_dic['name'].append("python")
data_dic['name'].append("go")
data_dic['test_num'].append(1)
data_dic['test_num'].append(2)

# 虽然default_factory是list，但是它并不限制data_dic中键的类型，可以添加任何类型的键和值
data_dic['category'] = "IT"
```

### OrderedDict

众所周知，使用dict时，Key是无序的。在对dict做迭代时，我们无法确定Key的顺序。

如果要保持Key的顺序，可以用OrderedDict

```
nodes_category = OrderedDict([('ADD', []), ('REMOVE', []), ('RETRY', [])])
```

这样在遍历该字典时，就能保证它的顺序了。

### namedtuple

namedtuple是一个函数，它用来创建一个自定义的tuple对象，并且规定了tuple元素的个数，并可以用属性而不是索引来引用tuple的某个元素。

这样一来，我们用namedtuple可以很方便地定义一种数据类型，它具备tuple的不变性，又可以根据属性来引用，使用十分方便。

```
from collections import namedtuple
>>> Point = namedtuple('Point', ['x', 'y'])
>>> p = Point(1, 2)
>>> p.x
1
>>> p.y
2
```

### deque

使用list存储数据时，按索引访问元素很快，但是插入和删除元素就很慢了，因为list是线性存储，数据量大的时候，插入和删除效率很低。

deque是为了高效实现插入和删除操作的双向列表，适合用于队列和栈

```
from collections import deque
>>> q = deque(['a', 'b', 'c'])
>>> q.append('x')
>>> q.appendleft('y')
>>> q
deque(['y', 'a', 'b', 'c', 'x'])
```

