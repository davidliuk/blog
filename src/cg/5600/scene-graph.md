# Scene Graph

Defination

A set of nodes that hold transformation matrix data and pointers to other nodes and geometryTraverse a directed tree of transformations to render shapesThe basis of most scene data structures, from game engines to mesh editor applications to scenes in animated films

```c++
Node& Node::addChild(uPtr<Node> n) {
    Node& ref = *n; // like an alias of node in heap
    this.children.push_back(std::move(n));
    return ref;
}
```



sPtr比uPtr慢，有引用计数，比较慢；如果非sPtr场景就用uPtr

Examples Scene

1. TRS
2. SRT
