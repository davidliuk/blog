# Rasterization

API

**intersection**

**Z-buffering**

**Fragments**

## Rasterization

The process of converting vector graphics into dot matrix graphics

● Raster derived from Latin rastrum, meaning “a rake”

● Not to be confused with raster scanning

- The process CRT displays use to render the image row-by-row

- Nearly all real-time graphics are rasterized

- Modern 3D rendering APIs
  - OpenGL (Khronos Group)
  - DirectX (Microsoft)
  - Metal (Apple iOS)
  - Vulkan (Khronos Group, very new, as of February 2016)

### Triangle rasterization

- Want to determine which pixels of the screen overlap a triangle
- Need to treat each pixel as a single point in space rather than a small area
- Color each pixel with the color of the triangle it overlaps (bottom-left corner overlap below)

### Approach

#### Naive approach

iterate through **each pixel** in the image and test whether or not it falls within the bounds of each triangle

Problems:

- Unnecessarily looks at each and every pixel

- Tests each pixel against each triangle

#### Better approach

iterate through each triangle and determine which pixels it overlaps

Instead of performing point-in-triangle test, treat the image as a set of **rows**. Find where each row enters and exits the triangle

### Optimization

Testing each triangle against each row of the image is inefficient

● Want to only test rows that are guaranteed to overlap the triangle

● What can we do?

#### Bounding Boxes

Compute the axis-aligned bounding box of each triangle

○ Find the minimum and maximum XYZ coordinates of an object

○ These are the lower-left and upper-right corners of your box

Only test a triangle against rows inside its bounding box

Bounding boxes are very commonly used in computer graphics

○ Speed up intersection testing primarily

#### Culling geometry

- We don’t want to waste time trying to render triangles (or pixels) we won’t ever see
- Ignore triangles outside our viewport and clamp triangle’s bounding box to screen bounds

---

Easy checks:

○ Is bounding box’s left bound greater than the screen’s right bound?

○ Is bounding box’s bottom bound greater than the screen’s top bound?

○ Do the same checks for BB right to screen left, and BB top to screen bottom

### Overlapping triangles

In almost every rasterized image, multiple triangles will overlap the same pixels

Which triangle’s color should be used for each pixel?

Ideally, the triangle that is “on top”

Simple solution: **Painter’s algorithm**

#### Painter’s algorithm

Earliest proposed method for sorting geometry to be drawn on a 2D screen

● Sort the shapes by distance from viewport, where farthest are first

● Draw the shapes in order, painting over previously-drawn shapes as you iterate through the list

Problem: what if you have intersecting shapes? What if you have cyclical overlap?

Solution: need to sort on a per-pixel basis instead of a per-triangle basis

#### Z-buffering

When identifying pixels that overlap a triangle, store the Z-coordinate of the portion of the triangle that is overlapped

○ The Z-coordinate is stored inside the pixel as part of a data bundle known as a “fragment”

### Fragments

Fragments store things like (but not limited to):

○ Z-coordinate (also called “depth”)

○ Color

○ Texture coordinate

○ Transparency (also called “alpha”)

○ Anything else you program them to store