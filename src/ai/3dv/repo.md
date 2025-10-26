# Representations, Benchmarks, and Learning Paradigms

## Table of Contents

## [📚 3D Datasets Summary](#3d-datasets-summary)

| Dataset                                                      | Modality                                                     | Year | Granularity    | Tasks                                                        | Project                                                      | Size |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ---- | -------------- | ------------------------------------------------------------ | ------------------------------------------------------------ | ---- |
| [WildRGB-D](https://arxiv.org/pdf/2401.12592)                | RGB-D, Instance Masks, Camera Pose, Point Cloud              | 2024 | Object         | View Synthesis, Pose Estimation, 6D Object Tracking, 3D Reconstruction | [Website](https://wildrgbd.github.io/)                       |      |
| [H3WB](https://arxiv.org/pdf/2211.15692)                     | RGB, 2D+3D Whole-body Keypoints, Camera Pose                 | 2022 | Human Body     | 3D Pose Estimation                                           | [Website](https://github.com/wholebody3d/wholebody3d)        |      |
| [DL3DV-10K](https://arxiv.org/pdf/2312.16256)                | RGB video frames, Camera Pose, Scene Meta                    | 2023 | Scene          | Novel View Synthesis, NeRF Pretraining                       | [Website](https://dl3dv-10k.github.io/DL3DV-10K/)            |      |
| [RELLIS-3D](https://arxiv.org/abs/2011.12954)                | RGB, LiDAR point cloud, Stereo, GPS/IMU, Camera+LiDAR Pose, Semantic Labels | 2020 | Outdoor scenes | 3D Semantic Segmentation, Sensor Fusion, Autonomous Navigation | [Website](https://www.unmannedlab.org/research/RELLIS-3D)    |      |
| [Amazon Berkeley Objects](https://arxiv.org/abs/2110.06199)  | Multi View, Camera Intrinsics & PBR Materials, 3D Mesh       | 2021 | Object         | 3D Reconstruction, Multi-view Retrieval, Material Estimation | [Website](https://amazon-berkeley-objects.s3.amazonaws.com/index.html) |      |
| [Fusion 360 Gallery Dataset](https://www.research.autodesk.com/app/uploads/2023/03/Fusion_360_Gallery__A_Dataset_and_Environment_for_Programmatic_CAD_Construction_from_Human_Design_Sequences.pdf_recB1A7wJLthITzJo.pdf) | Parametric CAD (B‑Rep) models + 2D operation sequences + 3D meshes + assembly/joint info | 2021 | Object         | 3D reconstruction, segmentation, assembly prediction, sequential modeling | [Github](https://github.com/AutodeskAILab/Fusion360GalleryDataset) |      |
| [CO3Dv2](https://arxiv.org/pdf/2109.00512)                   | Multi-view RGB, Camera Pose, Ground-truth 3D Point Cloud     | 2021 | Object         | Novel View Synthesis, Category-level 3D Reconstruction       | [Github](https://github.com/facebookresearch/co3d)           |      |
| [Kubric](https://arxiv.org/pdf/2203.03570)                   | Multi-view RGB, Camera Pose, Semantic Segmentation, Semantic Point Cloud | 2022 | Indoor Scene   | Semantic Mapping, 2.5D Reconstruction, View-consistent Semantics | [Github](https://github.com/google-research/kubric)          |      |
| [HyperSim](https://arxiv.org/abs/2011.02523)                 | RGB + Depth + Pose + Segmentation + Material + Lighting + 3D Mesh | 2021 | Indoor Scene   | Multi-task Scene Understanding: Semantic Segmentation, 3D Shape Prediction, Inverse Rendering | [Github](https://github.com/apple/ml-hypersim)               |      |
| [Habitat 2.0](https://arxiv.org/pdf/2106.14405)              | RGB, Depth, Semantic Segmentation                            | 2021 | Object         | Pick, Place, Navigate, Open, Close, Rearrange                | [Link](https://sites.google.com/view/habitat2)               |      |
| [FaceScape](https://arxiv.org/pdf/2003.13989)                | FaceScape                                                    | 2020 | Human Face     | Classification, Segmentation, Reconstruction, Completion, Recognition | [Link](https://github.com/zhuhao-nju/facescape)              |      |
| [A Large Dataset of Object Scans](https://vladlen.info/papers/3d-scan-dataset.pdf) | RGBD / Point Cloud                                           | 2020 | Object         | Object Scanning, 3D Reconstruction, Object Categorization    | [Link](https://github.com/isl-org/redwood-3dscan)            |      |
| [3D-FRONT](https://openaccess.thecvf.com/content/ICCV2021/papers/Fu_3D-FRONT_3D_Furnished_Rooms_With_layOuts_and_semaNTics_ICCV_2021_paper.pdf?utm_source=chatgpt.com) | Room Layout + Meshes                                         | 2020 | Scene          | Scene Understanding, Layout Analysis, Object Arrangement     | [Link](https://tianchi.aliyun.com/specials/promotion/alibaba-3d-scene-dataset) |      |
| [3D-FUTURE](https://arxiv.org/pdf/2009.09633.pdf)            | Furniture CAD with Textures                                  | 2020 | Object         | Navigation, Exploration, Interaction                         | [Link](https://tianchi.aliyun.com/specials/promotion/alibaba-3d-future) |      |
| [Structured3D](https://www.ecva.net/papers/eccv_2020/papers_ECCV/papers/123540494.pdf) | Photo-realistic + Annotations                                | 2020 | Scene          | Reconstruction, Segmentation, Object Detection               | [Link](https://structured3d-dataset.org/#download)           |      |
| [Mapillary](https://www.ecva.net/papers/eccv_2020/papers_ECCV/papers/123470579.pdf) | Image + Depth Map                                            | 2020 | Scene          | Reconstruction, Semantics, Viewpoint Estimation              | [Link](https://www.mapillary.com/dataset/depth)              |      |
| [ABC](https://openaccess.thecvf.com/content_CVPR_2019/papers/Koch_ABC_A_Big_CAD_Model_Dataset_for_Geometric_Deep_Learning_CVPR_2019_paper.pdf) | CAD                                                          | 2019 | Object         | Shape Analysis, Segmentation, Surface Fitting                | [Link](https://deep-geometry.github.io/abc-dataset)          |      |
| [BlendedMVS](https://arxiv.org/pdf/1911.10127)               | Multi-view                                                   | 2019 | Object         | Reconstruction, Alignment, Evaluation                        | [Link](https://github.com/YoYo000/BlendedMVS)                |      |
| [Replica](https://arxiv.org/pdf/1906.05797)                  | Dense Mesh + HDR Texture + Semantic/Instance Labels + Mirror/Glass | 2019 | Indoor Scene   | Scene Graph Generation, Object Detection, Relationship Modeling | [Link](https://github.com/facebookresearch/Replica-Dataset)  |      |
| [RealEstate10K](https://arxiv.org/pdf/1805.09817)            | Camera Poses Corresponding to Frames                         | 2018 | Scene          | Part Segmentation, Hierarchical Labeling, Shape Understanding | [Link](https://google.github.io/realestate10k/)              |      |
| [MegaDepth](https://www.cs.cornell.edu/projects/megadepth/paper.pdf) | RGBD, Camera Pose, Segment Labels                            | 2018 | Scene          | Multisensory Perception, Object Interaction, Representation Learning | [Link](https://www.cs.cornell.edu/projects/megadepth/)       |      |
| [ScanNet](https://arxiv.org/pdf/1702.04405)                  | RGB-D                                                        | 2017 | Indoor Scene   | Feature Matching, Registration, 3D Reconstruction            | [Link](http://www.scan-net.org/)                             |      |
| [Thingi10K](https://arxiv.org/pdf/1605.04797)                | Triangle Mesh                                                | 2016 | Object         | Scene Understanding, Semantic Segmentation, Layout Prediction | [Link](https://github.com/Thingi10K/Thingi10K)               |      |
| [Semantic3D](https://isprs-annals.copernicus.org/articles/IV-1-W1/91/2017/isprs-annals-IV-1-W1-91-2017.pdf) | Point Cloud + Classification                                 | 2016 | Scene          | Point Cloud Classification, Semantic Segmentation            | [Link](http://www.semantic3d.net/)                           |      |
| [SceneNN / ObjectNN](https://www.saikit.org/static/projects/sceneNN/home/pdf/dataset_3dv16.pdf) | RGB-D Indoor Scenes                                          | 2016 | Scene          | Multi-view Fusion, 3D Reconstruction, Semantic Segmentation  | [Link](https://hkust-vgd.github.io/scenenn/)                 |      |
| [ShapeNet](https://arxiv.org/pdf/1512.03012.pdf)             | 3D Mesh + Semantic                                           | 2015 | Object         | Single-view Reconstruction, Multi-view Reconstruction        | [Link](https://shapenet.org/)                                |      |
| [ModelNet](https://arxiv.org/pdf/1406.5670.pdf)              | CAD Models                                                   | 2015 | Object         | Classification, Segmentation, Retrieval, Reconstruction      | [Link](http://modelnet.cs.princeton.edu/#)                   |      |
| [PASCAL3D+](https://arxiv.org/pdf/1511.05175)                | CAD                                                          | 2014 | Object         | Scene Understanding, Object Detection, Semantic Segmentation | [Link](https://cvgl.stanford.edu/resources.html)             |      |
| [DeepMVS](https://arxiv.org/pdf/1804.00650)                  | RGB images                                                   | 2018 | Scene          | CAD Alignment, 3D Matching, Pose Estimation                  | [Link](https://phuang17.github.io/DeepMVS/mvs-synth.html)    |      |
| [PointOdyssey](https://arxiv.org/pdf/2307.15055)             | 3D Scenes                                                    | 2023 | Scene          | 3D Generation, Multimodal Learning, Simulation               | [Link](https://pointodyssey.com/)                            |      |
| [Virtual KITTI](https://arxiv.org/pdf/2001.10773)            | Synthetic Video                                              | 2020 | Scene          | 6D Pose Estimation, Object Detection, Benchmarking           | [Link](https://gist.github.com/alwynmathew/114a060319d268d512ebe2e0b3781d0f?utm_source=chatgpt.com) |      |
| [Aria Synthetic Environments](https://arxiv.org/pdf/2403.13064) | RGB + LiDAR                                                  | 2024 | Scene          | Open-vocabulary Detection, LiDAR Region Merging, Long-tailed Object Detection | [Link](https://facebookresearch.github.io/projectaria_tools/docs/open_datasets/aria_synthetic_environments_dataset/ase_download_dataset?utm_source=chatgpt.com) |      |
| [Aria Digital Twin](https://arxiv.org/pdf/2306.06362)        | RGB + Depth + Audio                                          | 2023 | Scene          | 3D Question Answering, Spatial Reasoning, Scene Understanding | [Link](https://facebookresearch.github.io/projectaria_tools/docs/open_datasets/aria_digital_twin_dataset?utm_source=chatgpt.com) |      |
| [Objaverse](https://arxiv.org/pdf/2304.00501)                | 3D Mesh + Text                                               | 2023 | Object         | 3D Asset Collection, Annotation, Multimodal Learning         | [Link](https://github.com/allenai/objaverse-xl)              |      |

📝 *Modality includes available signals like RGB, Depth, Pose, Segmentation, Flow, Mesh, Action...*

## Modalities of 3D datasets

| Dataset                         | RGB-D | Point Cloud | Mesh | Multi-view | Implicit Field | Year |
| ------------------------------- | ----- | ----------- | ---- | ---------- | -------------- | ---- |
| WildRGB-D                       | ✅     | ✅           | ❌    | ❌          | ❌              | 2024 |
| H3WB                            | ❌     | ❌           | ❌    | ❌          | ❌              | 2022 |
| DL3DV-10K                       | ❌     | ❌           | ❌    | ❌          | ✅              | 2023 |
| RELLIS-3D                       | ❌     | ✅           | ❌    | ❌          | ❌              | 2020 |
| Amazon Berkeley Objects         | ❌     | ❌           | ✅    | ✅          | ❌              | 2021 |
| Fusion 360 Gallery Dataset      | ❌     | ❌           | ✅    | ❌          | ❌              |      |
| CO3Dv2                          | ❌     | ✅           | ❌    | ✅          | ❌              |      |
| Kubric                          | ❌     | ✅           | ❌    | ✅          | ❌              |      |
| HyperSim                        | ✅     | ❌           | ✅    | ❌          | ❌              |      |
| Habitat 2.0                     | ✅     | ❌           | ❌    | ❌          | ❌              |      |
| FaceScape                       | ❌     | ❌           | ✅    | ❌          | ❌              |      |
| A Large Dataset of Object Scans | ✅     | ✅           | ❌    | ❌          | ❌              |      |
| 3D-FRONT                        | ❌     | ❌           | ✅    | ❌          | ❌              |      |
| 3D-FUTURE                       | ❌     | ❌           | ✅    | ❌          | ❌              |      |
| Structured3D                    | ✅     | ❌           | ❌    | ❌          | ❌              |      |
| Mapillary                       | ✅     | ❌           | ❌    | ❌          | ❌              |      |
| ABC                             | ❌     | ❌           | ✅    | ❌          | ✅              |      |
| BlendedMVS                      | ❌     | ❌           | ❌    | ✅          | ❌              |      |
| Replica                         | ❌     | ❌           | ✅    | ❌          | ❌              |      |
| RealEstate10K                   | ❌     | ❌           | ❌    | ✅          | ❌              |      |
| MegaDepth                       | ✅     | ❌           | ❌    | ✅          | ❌              |      |
| ScanNet                         | ✅     | ❌           | ❌    | ❌          | ❌              |      |
| Thingi10K                       | ❌     | ❌           | ✅    | ❌          | ✅              |      |
| Semantic3D                      | ❌     | ✅           | ❌    | ❌          | ❌              |      |
| SceneNN / ObjectNN              | ✅     | ❌           | ❌    | ❌          | ❌              |      |
| ShapeNet                        | ❌     | ❌           | ✅    | ❌          | ❌              |      |
| ModelNet                        | ❌     | ❌           | ✅    | ❌          | ❌              |      |
| PASCAL3D+                       | ❌     | ❌           | ✅    | ❌          | ❌              |      |
| DeepMVS                         | ❌     | ❌           | ❌    | ✅          | ❌              |      |
| PointOdyssey                    | ❌     | ✅           | ❌    | ❌          | ❌              |      |
| Virtual KITTI                   | ✅     | ❌           | ❌    | ✅          | ❌              |      |
| Aria Synthetic Environments     | ❌     | ✅           | ❌    | ❌          | ❌              |      |
| Aria Digital Twin               | ✅     | ❌           | ❌    | ❌          | ❌              |      |
| Objaverse                       | ❌     | ❌           | ✅    | ❌          | ✅              |      |
| GigaHands                       | ❌     | ❌           | ✅    | ✅          | ✅              |      |
| InteriorGS                      | ❌     | ❌           | ❌    | ✅          | ✅              |      |
| AnyHome                         | ❌     | ❌           | ✅    | ❌          | ✅              |      |
| DIVA-360                        | ❌     | ❌           | ✅    | ✅          | ✅              |      |
| StrobeNet                       | ❌     | ✅           | ❌    | ✅          | ✅              |      |

## ⚒️ Applications
