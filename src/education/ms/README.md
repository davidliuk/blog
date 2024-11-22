# Master Courses

Computer Graphics

课程

- CIS 560 Interactive Computer Graphics
- CIS 565 GPU Programming
- GAMES 101
- GAMES 104

Conferences

- SigGraph (Special Interest Group on GRAPHics and Interactive Techniques)
- GDC (Game Developers Conference)
- TOG (ACM Transactions on Graphics)

![image-20241115010341352](https://cdn.jsdelivr.net/gh/davidliuk/images@master/blog/image-20241115010341352.png)

图形 API

- OpenGL

- Vulkan

  跨平台，Win, Mac, Linux, Android

- Direct X

  Windows 在游戏开发商和五花八门的硬件设备之间，起到沟通的作用。

  HLSL compiler 开源了，可以直接预编译成 Vulkan 可以运行的标准了

- Metal

  MacOS

MPS<=>cuda

Game Porting Toolkit

假定游戏是一个客人，想进 windows 系统做客，就必须要经过 windows 系统的一道门：DirectX API，而 Mac 系统的 GPT 可以把自己家门“Metal API”模拟成windows家门，这样游戏就可以自动移植在 Mac，让苹果电脑用户玩到windows游戏了。

5天速通vulkan把565写了然后顺手把论文的那个collision部分也复现了一下

感觉现代图形 api 真的很好用 反观 OpenGL
