# Milestone 1

## Terrain

Noise

Berlin, worley noise

**Summed Perlin noise terrain**

Increase number of grid lines



the lower freq the flatter

different freq and 



```c++
vec4 offsetPos = vs_Pos + vec4(vs_offset);
float dessertH = dessertHeight(xz);
float grassH = grassLandHeight(xz);
float t = biomeBlender(xz);
t = smoothsep(0.4, 0.6, t); // smooth between biome

float h = mix(dessertH, grassH, t);
offsetPos.y *= h;
```



write 

- grass
- mountain

noise and distribution 



## Chunck

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



## Physics

Collision boxes

Const store `array<vec3,12>`

every tick check distance between ground and

---

```
Mini Minecraft
template<class T>
MutexPair {
	T sharedResource;
	std::mutex lock;
}

Main Thread
	vector<Chunck*> dataForNoiseWorkerThreads;
    tick() {
        1. update player position, velocity, collisions, etc
        2. check to see if we need to make more terrain based on where the player is when we send info to our parallel threads to be processed "worker threads"
        3. 
}


```

---

Opaque blocks

Transparent Blocks

1. Draw all chunks' opaque VBO data
2. Draw all chunks' transparent VBO data



