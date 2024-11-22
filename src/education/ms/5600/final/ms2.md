# Milestone 2

> 11.20

## Cave Systems

You will implement two main features:

- In addition to the 2D height fields used to generate surface terrain, you will add the computation of 3D noise to generate cave systems beneath the terrain's surface.
- You will introduce a post-process rendering pipeline into your game engine to render an overlay when the player's head is beneath water and lava.

Extend the Perlin noise algorithm discussed in the Noise Functions slides to work in three dimensions; this will require sampling eight surflets rather than four (one for each corner of a 3D grid cell) and using trilinear interpolation on their values. Sample this 3D Perlin noise at every block whose Y coordinate is in the range [1, 128]. Whenever the value of this Perlin noise is negative, the block at the sampled coordinates should be set to `EMPTY`, unless its Y value is less than 25, in which case it should be set to `LAVA`. Finally, all blocks at Y = 0 should be made `BEDROCK`, and made to be unbreakable when left-clicked. The end result will be a system of somewhat-interconnected caves with pools of lava at the lowest depths.

If you would like cave openings to be more frequent on the surface of your terrain, then increase the ceiling of Y values at which you sample your Perlin noise to allow carving out the surface height field as well.

**Note:** If you are testing your cave generation without the multithreading portion of milestone 2 working on your local implementation of the project, it is useful to shrink the range of Y coordinates that can contain cave structures (e.g. only Y = [64, 128] or even smaller). Sampling a noise function at every XYZ below Y = 128 can take a long time and will make loading your initial scene very slow on a single-threaded program.

During the player's collision detection function, `WATER` and `LAVA` blocks should **not** cause the player to stop moving. Instead, the player should move at 2/3 its normal speed (both in terms of gravity and lateral movement) and should be able to swim upwards at a constant rate by holding `Spacebar`. Additionally, when the player's `Camera` is inside a `WATER` block, the screen should be tinged blue, while a `LAVA` block should cause a red tinge. You should create these overlay effects by setting up a post-process pipeline like the one in hw04, and render your 3D scene to a frame buffer, then render the frame buffer's texture to a screen-spanning quadrangle with a new shader program. We have created a `FrameBuffer` class to assist you in this process, which you can download [here](https://www.cis.upenn.edu/~cis4600/24fa/hw/hwMM02/framebuffer.zip). **Note that because your team will be using alpha blending this milestone, your post-process fragment shader should output a `vec4` for its color, otherwise you will have uninitialized transparency which will cause rendering errors.**

1. 3D Perlin Cave
2. fluid collision detection
3. fluid overlay

---

exit code 3: uncaught exception





## Texture

Refer to HW5

glTexture