# OOP

多态

虚函数

纯虚函数

C++ 无接口，但是可以通过抽象类来实现

---

c 语言实现 oop 思路和go类似，但是也有不同

封装：struct

继承：数据成员表现为叠加（父类变成一个属性）

多态：虚表指针，指向虚函数表，虚函数表在构造函数中初始化，在析构函数中销毁，所以在这两个函数中都不会发生多态行为。

`virtual`：动态链接