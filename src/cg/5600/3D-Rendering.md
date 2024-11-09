# 3D Rendering Topics

## Perspective-correct interpolation

PLERP



## Texture

Problem: The texture’s pixels must be mapped to points on the object’s surface before the texture can be sampled

Interpolating triangle UVs

### Texture space

RGB 0 -> XYZ -1

RGB 0.5 -> XYZ 0

RGB 1 -> XYZ 1

### Normal maps

The physics of lighting

### The physics of lighting

#### Flux



#### Irradiance



#### Lambert’s law



### Shading Models

Shading models dictate how one interpolates the results of reflection models

Vertex shader, fragment shader

#### Gouraud Shading Model

Cons:

- Vertices with different colors

### Phone Shading Model

Fragment

### Reflection Models

- Blinn-Phong specular highlights
- Specular reflection model
- Subsurface Scattering
- Microfacet reflection