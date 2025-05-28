# User Guide



## Installation

```shell
conda create --name rignet python=3.7
conda activate rignet
pip install rtree==0.8.3
conda install pytorch==1.12.0 torchvision==0.13.0 cudatoolkit=11.3 -c pytorch

pip install torch_scatter torch_sparse torch_cluster torch_spline_conv -f https://data.pyg.org/whl/torch-1.12.0+cu113.html # this take a while
pip install torch-geometric==1.7.2

pip install numpy scipy matplotlib tensorboard open3d==0.9.0 opencv-python "rtree>=0.8,<0.9" trimesh[easy]  # Make sure to install open3d 0.9.0.

conda install rtree=0.8.3
conda install -c conda-forge libspatialindex=1.9.3

cd ~/anaconda3/envs/rignet/Library/bin
cp spatialindex_c-64.dll spatialindex_c.dll
```

正确思路：

conda创建一个环境安装依赖，然后python脚本里面sys.path.append



## 其他思路

conda创建一个环境安装依赖，然后符号链接

```sh
conda create --name rignet python=3.7
conda activate rignet
pip install rtree==0.8.3
conda install pytorch==1.12.0 torchvision==0.13.0 cudatoolkit=11.3 -c pytorch

pip install torch_scatter torch_sparse torch_cluster torch_spline_conv -f https://data.pyg.org/whl/torch-1.12.0+cu113.html # this take a while
pip install torch-geometric==1.7.2

pip install numpy scipy matplotlib tensorboard open3d==0.9.0 opencv-python "rtree>=0.8,<0.9" trimesh[easy]  # Make sure to install open3d 0.9.0.

ln -s /usr/autodesk/maya2022/include/python3.9 ~/miniconda3/envs/maya_rig/include/
```



