# Mini Minecraft

Noise

Berlin, worley noise

**Summed Perlin noise terrain**

Increase number of grid lines



the lower freq the flatter

different freq and 



```c++
float dessertH = dessertHeight(xz);
float grassH = grassLandHeight(xz);
float t = biomeBlender(xz);
t = smoothsep(0.4, 0.6, t); // smooth between biome

float h = mix(dessertH, grassH, t);
```



write 

- grass
- mountain

noise and distribution 



- Milestone 1: procedural terrain
- Milestone 2: 
  - 3D noise
  - texture
  - Multithreaded terrain generation
- Milestone 3: 
  - 50
  - extra 50



chunk rendering



```c++
class Chunk {
private:
    std::array<BlockType, 65536> m_blocks;
    int minX, minZ;
    std::unordered_map<Direction, Chunk*, EnumHash> m_neighbors; 
}
```



```c++
struct InputBundle {
    bool press
}
```



---

physics



every tick check distance between ground and
