# Diffusion Large Language Model

相比于LLM AR(Auto-Regression)

[Gemini Diffusion](https://deepmind.google/models/gemini-diffusion/#what-is-a-diffusion-model)

[LLaDA](https://ml-gsai.github.io/LLaDA-demo/)

LLaDA-V

[MMaDA](https://github.com/Gen-Verse/MMaDA), Princeton, SEED

[Fast-dllm](http://arxiv.org/abs/2505.22618), NVIDIA：引入KV-Cache

速度很快，但是效果一般

Traditional autoregressive language models generate text one word – or token – at a time. This sequential process can be slow, and limit the quality and coherence of the output.

Diffusion models work differently. Instead of predicting text directly, they learn to generate outputs by refining noise, step-by-step. This means they can iterate on a solution very quickly and error correct during the generation process. This helps them excel at tasks like editing, including in the context of math and code.



缺点

- 无 Cache
- 定长

变长思路：Block Diffusion



---



- 

```python
cat > simple_dataset_download.py << 'EOF'
import os
import subprocess
import time

# 设置环境
os.environ['HF_ENDPOINT'] = 'https://hf-mirror.com'
os.environ['HF_HOME'] = '/root/autodl-tmp/cache/'
os.environ['CUDA_VISIBLE_DEVICES'] = ''  # 无GPU模式

def trigger_dataset_download(task_name):
    """触发数据集下载"""
    print(f"\n=== 触发 {task_name} 数据集下载 ===")
    
    cmd = [
        'python', '-m', 'lmms_eval',
        '--tasks', task_name,
        '--limit', '1',
        '--verbosity', 'DEBUG'
    ]
    
    try:
        # 运行命令但预期会失败（因为没有模型），但会触发数据下载
        result = subprocess.run(
            cmd,
            cwd='./eval',
            timeout=180,  # 3分钟超时
            capture_output=True,
            text=True
        )
        
        # 检查输出中是否有下载信息
        if any(keyword in result.stdout.lower() + result.stderr.lower() 
               for keyword in ['downloading', 'download', 'fetching']):
            print(f"✓ {task_name} 触发了数据下载")
        else:
            print(f"⚠ {task_name} 可能已缓存或下载失败")
            
    except subprocess.TimeoutExpired:
        print(f"⚠ {task_name} 超时，但可能已开始下载")
    except Exception as e:
        print(f"❌ {task_name} 出错: {e}")

def main():
    tasks = [
        "mme", "vqav2_val_lite", "mmbench_en_dev_lite", "textvqa_val",
        "docvqa_val", "chartqa_lite", "infovqa_val_lite", "scienceqa_full",
        "ai2d", "coco2017_cap_val_lite", "mathverse_testmini_vision_dominant",
        "mathvista_testmini_format"
    ]
    
    print("🚀 开始触发数据集下载...")
    
    for i, task in enumerate(tasks):
        print(f"\n进度: {i+1}/{len(tasks)}")
        trigger_dataset_download(task)
        time.sleep(10)  # 等待10秒再下载下一个
    
    print("\n✅ 所有数据集下载触发完成!")
    print("请检查 /root/autodl-tmp/cache/ 目录查看下载的数据")

if __name__ == "__main__":
    main()
EOF
```





```
cd ~/diffusion_lm/LaViDa

cat > download_eval_datasets.py << 'EOF'
import os
import sys
import subprocess
from pathlib import Path

# 设置环境变量
os.environ['HF_ENDPOINT'] = 'https://hf-mirror.com'
os.environ['HF_HOME'] = '/root/autodl-tmp/cache/'

# 添加eval路径
sys.path.append('./eval')

def setup_environment():
    """设置评测环境"""
    print("=== 设置评测环境 ===")
    
    # 创建必要的目录
    os.makedirs('/root/autodl-tmp/cache/datasets', exist_ok=True)
    os.makedirs('./logs', exist_ok=True)
    
    print("✓ 环境设置完成")

def download_dataset_with_lmms_eval(task_name):
    """使用lmms_eval下载单个数据集"""
    print(f"\n=== 下载数据集: {task_name} ===")
    
    try:
        # 使用lmms_eval的--download_only模式（如果支持）
        cmd = [
            'python', '-m', 'lmms_eval',
            '--model', 'llava_llada',
            '--model_args', 'pretrained=dummy',  # 虚拟模型路径
            '--tasks', task_name,
            '--limit', '1',  # 只处理1个样本来触发数据集下载
            '--verbosity', 'INFO'
        ]
        
        # 设置环境变量
        env = os.environ.copy()
        env['CUDA_VISIBLE_DEVICES'] = ''  # 无GPU模式
        
        result = subprocess.run(
            cmd, 
            capture_output=True, 
            text=True, 
            env=env,
            cwd='./eval',
            timeout=300  # 5分钟超时
        )
        
        if result.returncode == 0 or "Downloading" in result.stdout:
            print(f"✓ {task_name} 数据集下载成功")
            return True
        else:
            print(f"⚠ {task_name} 下载可能有问题，但继续...")
            print(f"输出: {result.stdout[-200:]}")  # 显示最后200字符
            return False
            
    except subprocess.TimeoutExpired:
        print(f"⚠ {task_name} 下载超时，但数据可能已部分下载")
        return False
    except Exception as e:
        print(f"❌ {task_name} 下载失败: {e}")
        return False

def download_datasets_manually():
    """手动下载常见数据集"""
    print("\n=== 手动下载常见数据集 ===")
    
    datasets_to_download = [
        'coco/annotations_train2017.json',
        'coco/annotations_val2017.json',
    ]
    
    from huggingface_hub import hf_hub_download
    
    for dataset in datasets_to_download:
        try:
            print(f"下载 {dataset}...")
            # 这里可以添加具体的数据集下载逻辑
        except Exception as e:
            print(f"⚠ {dataset} 下载失败: {e}")

def main():
    """主函数"""
    print("🚀 开始预下载评测数据集...")
    
    # 任务列表（从run.sh提取）
    tasks = [
        "mme",
        "vqav2_val_lite", 
        "mmbench_en_dev_lite",
        "textvqa_val",
        "docvqa_val", 
        "chartqa_lite",
        "infovqa_val_lite",
        "scienceqa_full",
        "ai2d",
        "coco2017_cap_val_lite",
        "mathverse_testmini_vision_dominant",
        "mathvista_testmini_format"
    ]
    
    setup_environment()
    
    # 下载每个数据集
    successful_downloads = 0
    for i, task in enumerate(tasks):
        print(f"\n进度: {i+1}/{len(tasks)}")
        if download_dataset_with_lmms_eval(task):
            successful_downloads += 1
    
    print(f"\n=== 下载完成 ===")
    print(f"成功下载: {successful_downloads}/{len(tasks)} 个数据集")
    
    # 检查下载的数据
    check_downloaded_data()

def check_downloaded_data():
    """检查已下载的数据"""
    print("\n=== 检查已下载的数据 ===")
    
    cache_dirs = [
        '/root/autodl-tmp/cache/',
        '~/.cache/huggingface/',
        './eval/data/',
        './data/'
    ]
    
    for cache_dir in cache_dirs:
        expanded_dir = os.path.expanduser(cache_dir)
        if os.path.exists(expanded_dir):
            size = subprocess.run(['du', '-sh', expanded_dir], 
                                 capture_output=True, text=True)
            print(f"{expanded_dir}: {size.stdout.strip()}")

if __name__ == "__main__":
    main()
EOF
```

