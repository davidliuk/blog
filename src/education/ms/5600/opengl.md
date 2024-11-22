# OpenGL

Apple GPU Only support old version

## GPU Side

### GLSL

Like C++ but **without**:

- Pointers

- Dynamic memory allocation

- Recursion

- User-defined classes

Has its own **built-in** classes

- vec2, vec3, vec4, mat2, mat3, mat4, etc.

Also has a built-in **linear algebra** library for common graphics functions

- normalize, length, dot, cross, reflect, sin, cos, etc.

We had you write your linear algebra library to follow the GLSL API

- While the functions called in the shaders may look like the ones you wrote, they are different function calls!

---

rgb, xyz

wxyz

vert, frag

Sobel: edge detection

## Pipeline

![pipeline](https://cdn.jsdelivr.net/gh/davidliuk/images@master/blog/Screenshot%202024-09-25%20at%201.51.23%E2%80%AFPM.png)

gl bind



- glBufferData
- glBindBuffer

from CPU to GPU

GL_ELEMENT_ARRAY_BUFFER: 

GL_ARRAY_BUFFER

## CPU Side

### Vertex Data



GLSL optimize redundant object(has no effect): don't

Associating “in” variables with VBOs

每个vertices一个normal，不光滑，连接处的所有normal合并了就光滑了（举例maya）