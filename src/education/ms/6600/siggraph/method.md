# Rig Net

## Joint prediction

1. In the regression step, the mesh vertices are displaced towards their
   nearest candidate joint locations. This step results in accumulating points near joint locations

2. localizes the joints by clustering the displaced points and setting the cluster centers as joint locations

   The number of resulting clusters is determined adaptively according to the underlying point density and learned clustering parameters. Performing clustering without first displacing the vertices fails to extract reasonable joints, since the original position of mesh vertices is often far from joint locations.

### regression step

1. perturbed points: $q=v+f_d(M;w_d)$
2. attention map: $a=f_a(M;w_a)$ 

### clustering



## Connectivity prediction

