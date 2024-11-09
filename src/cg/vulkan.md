# Vulkan

**Vulkan 教程**，**Vulkan**是Khronos Group(OpenGL标准的维护组织)开发的一个新API，它提供了对现代显卡的一个更好的抽象，与OpenGL和Direct3D等现有api相比，Vulkan可以更详细的向显卡描述你的应用程序打算做什么，从而可以获得更好的性能和更小的驱动开销。Vulkan的设计理念与Direct3D 12和Metal基本类似，但Vulkan作为OpenGL的替代者，它设计之初就是为了跨平台实现的，可以同时在Windows、Linux和Android开发。甚至在Mac OS系统上，Khronos也提供了Vulkan的SDK，虽然这个SDK底层其实是使用MoltenVK实现的。

OpenGL还算是对初学者比较友好的API，但到了Vulkan，由于严格把pipeline、descriptor、buffer分开，初学者上手难度变大了，App开发者直接调用图形API的情况将会减少，更多地会依赖于图形引擎。因此，Vulkan标准的渐渐普及会加速开发者的层级分划，使用Vulkan的人将是专业研究图形引擎或作GPGPU算法引擎的人。

对于有志于研究图形的初学者，可以直接学习Vulkan，不用去学习OpenGL了，Vulkan标准与GPU工作原理更为贴近，学习 Vulkan 更有利于掌握图形显示的知识。

https://geek-docs.com/vulkan/vulkan-tutorial/vulkan-and-opengl.html

Vulkan是平台无关的应用程序图形API接口，创建本地窗口的能力依赖GLFW与GLM的支持。

GLFW (Graphics Library Framework):

最初用于创建OpenGL窗口和上下文的开源库，它提供了一套跨平台的API，能够方便地创建OpenGL窗口、处理输入事件、处理窗口事件等。
GLFW为Vulkan提供了一组扩展，使得开发人员能够更轻松地创建Vulkan窗口和上下文，并处理窗口和输入事件等。
GLM (OpenGL Mathematics):
GLM是一个用于数学计算的开源库，它提供了一组类和函数，用于实现矩阵变换、向量计算、投影等数学操作。
GLM与Vulkan密切相关，在进行Vulkan开发时时，GLM为开发人员提供矩阵变换、向量计算等数学操作来控制渲染管线使得开发人员能够更方便地进行三维图形编程。