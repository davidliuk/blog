# Mesh

## Structure We have

Polygon Mesh Implementation

Generally speaking, we build a linked structure to explicitly connect faces, edges, and vertices

○ Advantages: fast, efficient, can support arbitrary polygons

○ Disadvantages: Somewhat complex to implement, must maintain

pointers to the necessary neighboring components

---

Well-Formed Surfaces

● Want a mesh’s structure to be “clean” (manifold geometry)

● Components must intersect “properly”

○ Faces are disjoint, OR share either a vertex or the edge between two vertices

○ Each edge is incident to exactly two vertices

○ Each edge is incident to at most two faces, and at least one face

● Local topology must also be “proper”

○ The “neighborhood” of a vertex should permit stretching and bending, but not tearing

● Global topology should be connected, closed, and bounded

---

Simple Data Structures

● List of polygon faces

● List of edges

● Vertices and index-based faces

---

● Store a list of polygon faces, each containing a set of explicit vertex coordinates

● No explicit edges

● No explicit face adjacency

○ You might figure out what faces are adjacent by checking for pairs of shared vertices

List of Edges

● Store a list of vertex pairs, where each pair defines an edge

● Again, no explicit faces or adjacency

○ Two vertices at the same coordinates are discrete

Index-based faces

● Like we discussed previously, this is the data structure you used to render your geometry with vertex buffer objects

● As with the previous two data structures, there is no adjacency information

### Constraint

We want a mesh data structure that helps us do the following

- ○ Easily add/remove/modify elements in 3D
- ○ Have a low access time when finding elements
  - ■ Usually linear time
  - ■ Avoid searching for things like neighbors
- ○ Have constant-size storage (i.e. no usage of std::vectors)
- ○ Implicitly prevent “bad” mesh structures

in addition to geometric data, let’s also store topological information like **adjacency** and **connectivity**

## Half-Edge Data Structure

Naïve Adjacency

● Each element has a list of pointers to ALL adjacent elements

○ Queries depend on the local complexity of the mesh

○ Each element (face/edge/vertex) does not have a fixed size!

○ Slow to construct, tedious to maintain all the pointers during operations on the mesh

### Structure

Composed of vertices, faces, and half-edges

#### half-edge

● Half-edges are directed edges that form a **ring** around a particular face

> DO-WHILE to traversal edges
>
> ```c++
> Node *curr = head; 
> dp {
>     tag(curr);
>     curr = curr.next;
> } while (curr != head);
> ```

● A half-edge stores the following information:

○ The face to its left

○ The next half-edge in the ring

○ The symmetric half-edge on the face adjacent to this half-edge’s face

○ The vertex between this half-edge and the next half-edge

● If an edge lies at a boundary (i.e. it only touches one face), both half-edges are still needed

○ The outer half-edge just has a NULL face pointer

● Take note that the external boundary of this mesh is still linked in a ring

#### face

A face stores a single pointer to **any** one of the half-edges that loops around it

#### vertex

● A vertex stores a single pointer to an arbitrary half-edge that points to it

● Combined with the many pointers stored in a half-edge, we have a data structure that we can traverse starting from any arbitrary component!

### Advantages

Fixed size of data structure elements

● Data:

○ Geometric information stored at vertices

○ Attribute information (e.g. color) stored in any relevant component

○ **Topological** information in half-edges **only**!

● Structure enforces “proper” topology (i.e. you can’t have Mobius strips)

● Time complexity

○ Linear for all local information (e.g. gathering lists of faces, edges, or vertices)

○ Independent of the overall mesh complexity

### Split Edge/Insert Vertex

Insert a new vertex between V1 and V2



### Triangulate





```c++
class Mesh {
    
}

class Face {
    
}

class HalfFace {
    HalfFace *sym;
    HalfFace *nxt;
    
}
```

