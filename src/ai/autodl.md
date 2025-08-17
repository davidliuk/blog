# AutoDL

## 数据盘

```
# 在数据盘创建模型存储目录
mkdir -p /root/autodl-tmp/lavida-models

# 下载HD模型到数据盘
cd /root/autodl-tmp/lavida-models
export HF_ENDPOINT="https://hf-mirror.com"

python -c "
import os
from huggingface_hub import snapshot_download

print('下载 LaViDa-LLaDa HD 版本到数据盘...')
snapshot_download(
    repo_id='jacklishufan/lavida-llada-v1.0-instruct',
    local_dir='/root/autodl-tmp/lavida-models/lavida-llada-hd',
    resume_download=True
)
print('下载完成!')
"

# 回到项目目录
cd ~/diffusion_lm/LaViDa/lavida-ckpts

# 创建软链接
ln -s /root/autodl-tmp/lavida-models/lavida-llada-hd lavida-llada-hd

# 验证链接
ls -la lavida-llada-hd
```

```
# 设置HuggingFace缓存到数据盘（避免future问题）
echo 'export HF_HOME=/root/autodl-tmp/cache/' >> ~/.bashrc
echo 'export HF_ENDPOINT=https://hf-mirror.com' >> ~/.bashrc
source ~/.bashrc

# 验证设置
echo "HF_HOME: $HF_HOME"
echo "HF_ENDPOINT: $HF_ENDPOINT"
```

```
# 创建作者期望的目录结构
sudo mkdir -p /data0/jacklishufan

# 下载正确的vision tower到期望位置
python -c "
import os
os.environ['HF_ENDPOINT'] = 'https://hf-mirror.com'
from huggingface_hub import snapshot_download

print('下载 SigLIP vision tower 到期望位置...')
snapshot_download(
    repo_id='google/siglip-so400m-patch14-384',
    local_dir='/tmp/siglip-so400m-patch14-384',
    resume_download=True
)
print('下载完成!')
"

# 创建符号链接
sudo ln -s /tmp/siglip-so400m-patch14-384 /data0/jacklishufan/siglip-so400m-patch14-384

# 验证链接
ls -la /data0/jacklishufan/siglip-so400m-patch14-384
```

## 学术资源加速

以下为可以加速访问的学术资源地址：

- github.com
- githubusercontent.com
- githubassets.com
- huggingface.co

### 如果在终端中使用：

**开启**

```
source /etc/network_turbo
```

**取消**，如果不再需要建议关闭学术加速，因为该加速可能对正常网络造成一定影响。

```
unset http_proxy && unset https_proxy
```

### 如果是在Notebook中使用：

```
import subprocess
import os

result = subprocess.run('bash -c "source /etc/network_turbo && env | grep proxy"', shell=True, capture_output=True, text=True)
output = result.stdout
for line in output.splitlines():
    if '=' in line:
        var, value = line.split('=', 1)
        os.environ[var] = value
```

