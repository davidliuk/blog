# 内存管理

New/malloc/delete/free

**malloc()** 函数在 C 语言中就出现了，在 C++ 中仍然存在，但建议尽量不要使用 malloc() 函数。new 与 malloc() 函数相比，其主要的优点是，new 不只是分配了内存，它还创建了对象。

## 指针

### 智能指针

- `std::auto_ptr`
- `std::unique_ptr`
- `std::share_ptr`
- `std::weak_ptr`

传统的指针（裸指针）在使用时需要手动分配和释放内存，容易出现内存泄漏和悬挂指针等问题。智能指针通过封装裸指针，并提供自动内存管理功能，使得内存资源可以更安全、高效地管理。

