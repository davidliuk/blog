# Ray tracing

What is raytracing?

- Computer graphics technique used to simulate the way light bounces off surfaces

- Render fairly realistic-looking images without having to fully simulate the infinitely-many photons light sources give off

- Trace light paths backwards, from camera to light source(s)


---

Implicit surface: Ray marching

Signed Distance Fields

sphere

Better marching for SDF: Sphere-Marching

Paralell 是 edge case

## raycasting

Creating a line that passes through the viewing frustum and travels from the eye to some endpoint on a slice of the frustum (e.g. the far clip plane)

The line’s endpoint is determined by the pixel on our screen from which we want to raycast

Find their intersections with geometry in the scene