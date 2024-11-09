# Multi Platform

wine

重写 Windows dll 到 Linux 系统调用的兼容层

但是directx3d的几个dll是通过OpenGL反编译的效果不好没办法

shader 编程显卡

OpenGL shader: glsl

DirectX 

- HLSL
- DXBC/DXIL（预编译格式）

Vulkan

- SPIR-V(预编译格式)

DXBC->SPIR-V，逐行翻译



Shader 编译器开源

HLSL 编译器直接编译到SPIR-V，然后跑到vulkan

DXVK，

Proton：wine+DXVK

Whisky



X86->Rosetta->ARM

DirectX->GPTK->Metal

---

CrossOver/Whisky
