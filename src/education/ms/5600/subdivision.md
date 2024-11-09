# Subdivision Techniques



## Catmull-Clark Subdivision

0. Initial mesh

1. For each Face, compute its centroid

   Centroid = average of all vertices

   `f=sum(e)/n`

2. Compute the smoothed midpoint of each edge in the mesh

   split all edges

   `e=(v1+v2+f1+f2)/4`

   `e=(v1+v2+f)/3` (border case, only 1 incident face)

3. Smooth the original vertices

   barycenter of the input components

   `v' = (n-2)v/n + sum(e)/n^2 + sum(f)/n^2`

   v is the vertex’s original position

   sum(e) is the sum of all adjacent midpoints

   sum(f) is the sum of the centroids of all faces incident to v

   n is the number of adjacent midpoints

4. For each original face, split that face into N quadrangle faces

   1st subface is orginal face, 2-4th would be new face

---



