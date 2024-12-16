# Milestone 3

> 12.09

If you earn more than 50 points, the additional points will be extra credit. This week, you should also focus on finalizing the features you worked on in weeks 1 and 2.

- **Post-process Camera Overlay (20 points):** When the `Player` enters `WATER` or `LAVA` blocks, rather than displaying a simple blue or red screen 

- overlay, apply some sort of interesting fluid-like screen distortion and coloration instead. You should use noise functions to distort your player's view, and the distortion should animate as a function of time.

  - **distortion**

    20

- **Inventory and onscreen GUI (50+ pts):** Allow the player to select which type of block they will place by creating an onscreen GUI that can be called up by pressing a particular key, such as `I`. You could also allow the player to collect blocks by breaking them, and only place blocks when they have a block in their inventory.

  - **准星**, [参考](https://upenn.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=52fbe2ce-2674-47cc-a2ec-b22c01576380), 13-16min

    10-20

  - 

- **Additional Biomes (50 pts):** Add additional block types such as `SNOW` or `SAND`, and distribute patches of these new block types over large areas of your world. For additional points, modify the structure of your terrain in these areas to reflect things like flat deserts or frigid mountains. The biomes should smoothly transition between one another near their borders. You might use two different noise functions to generate a map of moisture and temperature (or overall elevation) and use those to determine what biome your terrain currently lies in. For inspiration, you can always peruse the list of [biomes](https://minecraft.gamepedia.com/Biome) featured in the official Minecraft game. Also take a look at this person's [custom biomes Minecraft mod](https://www.spigotmc.org/resources/danns-world-generator-oasis-desert-demo-1-14-x-1-15-x-uses-an-organic-tree-generator.74083/) for visual inspiration.

  Temperature, Moisture

  - GRASS, high t, high m
  - **SAND**, high t, low m
  - SNOW, low t, high m
  - ICE SPIR, low t, low m

## Terrain

- **Rivers (50 pts):** Using 2D L-systems, procedurally generate branching rivers that carve themselves out of the surface terrain. For more organic-looking river trails, consider having drawing rules along the lines of "move forward along a small arc and carve that arc out of the terrain" rather than plain "move forward along a straight line". Below is a video with an example of an L-system river.
- **Additional Biomes (50 pts):** Add additional block types such as `SNOW` or `SAND`, and distribute patches of these new block types over large areas of your world. For additional points, modify the structure of your terrain in these areas to reflect things like flat deserts or frigid mountains. The biomes should smoothly transition between one another near their borders. You might use two different noise functions to generate a map of moisture and temperature (or overall elevation) and use those to determine what biome your terrain currently lies in. For inspiration, you can always peruse the list of [biomes](https://minecraft.gamepedia.com/Biome) featured in the official Minecraft game. Also take a look at this person's [custom biomes Minecraft mod](https://www.spigotmc.org/resources/danns-world-generator-oasis-desert-demo-1-14-x-1-15-x-uses-an-organic-tree-generator.74083/) for visual inspiration.

---



1. Interpolate mountain & grassland based on moisture
2. Interpolate desert and island based on moisture
3. Interpolate results of 1 and 2 based on temperature

## EC

### 联机

- 本地：地图的主人是host，大家和他联系去交互数据
- 服务器：×

同步：pos，camera

还得渲染动作了

如果做生物的话，每个动物的信息也需要同步了，动态的比较复杂，还涉及寻路

### Ray Tracing

影子

post processing Camera Overlay

- 南瓜头
- 水下
- 中毒
- 致盲

---

- **Post-process Camera Overlay (20 points):** When the `Player` enters `WATER` or `LAVA` blocks, rather than displaying a simple blue or red screen overlay, apply some sort of interesting fluid-like screen distortion and coloration instead. You should use noise functions to distort your player's view, and the distortion should animate as a function of time.
- **Third-Person Mode (20 points):** Allow the player to switch to a third-person camera view by pressing a key on the keyboard. In this view, the `Player` must be visible to the user as a 3D *animated* model. The model's animations must include leg movement when walking and arm movement when adding or removing a block. The `Camera` must still face where the `Player` is facing, but should be located somewhere behind the `Player`.