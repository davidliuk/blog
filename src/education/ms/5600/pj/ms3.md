

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