# Installation

## 本地

mac 环境下使用的 brew 作为包管理器，通过 brew 的方式安装最新的 docker desktop

```sh
brew install --cask docker
```

由于 k8s 是谷歌的服务以及一些网络的因素，k8s 的安装过程会非常受阻

故采用阿里云的服务进行 k8s 的安装

```sh
git clone https://github.com/AliyunContainerService/k8s-for-docker-desktop.git
cd k8s-for-docker-desktop
./load_images.sh
```

执行脚本安装 K8S 相关镜像（确认 k8s-for-docker-desktop 文件夹下的 images 中的 k8s 和本地安装的 docker 中需要的 k8s 版本保持一致）
