# Scene Graph

> like Kinematics Chain

Definition

A set of nodes that hold transformation matrix data and pointers to other nodes and geometry. Traverse a directed tree of transformations to render shapes. The basis of most scene data structures, from game engines to mesh editor applications to scenes in animated films

```c++
Node& Node::addChild(uPtr<Node> n) {
    Node& ref = *n; // like an alias of node in heap
    this.children.push_back(std::move(n));
    return ref;
}
```



sPtr 比 uPtr 慢，有引用计数，比较慢；如果非 sPtr 场景就用 uPtr

Examples Scene

1. TRS
2. SRT
