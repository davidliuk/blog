# FeedForward

```mermaid
graph TD
    %% 样式定义
    classDef input fill:#e1f5fe,stroke:#01579b,stroke-width:2px;
    classDef vision fill:#f3e5f5,stroke:#4a148c,stroke-width:2px;
    classDef align fill:#e8f5e9,stroke:#1b5e20,stroke-width:2px;
    classDef llm fill:#fff3e0,stroke:#e65100,stroke-width:2px;
    classDef logic fill:#eceff1,stroke:#455a64,stroke-dasharray: 5 5;

    %% --- 1. 多模态输入层 ---
    subgraph InputLayer ["1. Input Modalities (Processor 层)"]
        direction LR
        TextIn["Raw Text"]:::input
        ImgIn["Images / Videos"]:::input
    end

    %% --- 2. 视觉编码层 ---
    subgraph VisionEncoder ["2. Vision Tower (视觉编码)"]
        direction TB
        Preprocessor["Pre-processing<br/>(LLaVA: Fixed Resize / Qwen2: Dynamic Grid)"]:::vision
        Backbone["Encoder Backbone<br/>(CLIP / SigLIP / Qwen-ViT)"]:::vision
        FeatureSelect["Feature Selection<br/>(Selected Layers / Hidden States)"]:::vision
        
        ImgIn --> Preprocessor --> Backbone --> FeatureSelect
    end

    %% --- 3. 特征对齐层 ---
    subgraph Aligner ["3. Multi-modal Projector (对齐/投影)"]
        direction TB
        Proj_Base["Projector Type<br/>(LLaVA: MLP / Qwen2: MLP + PatchMerger)"]:::align
        DimensionMatch["Dimension Alignment<br/>(Vision Dim -> LLM Hidden Dim)"]:::align
        
        FeatureSelect --> Proj_Base --> DimensionMatch
    end

    %% --- 4. 序列融合与位置编码逻辑 ---
    subgraph PosLogic ["4. Position & Sequence Manager (核心逻辑差异)"]
        direction TB
        TokenFusion["Embedding Fusion<br/>(Placeholder Replacement)"]:::logic
        PosEncoding["Position Encoding System<br/>(LLaVA: 1D Absolute / Qwen2: 3D M-RoPE)"]:::logic
    end

    %% --- 5. LLM 骨干层 ---
    subgraph LLMBackbone ["5. LLM Backbone (推理核心)"]
        direction TB
        TextEmbed["Text Embeddings"]:::llm
        TransformerLayers["Transformer Decoder Layers<br/>(Llama / Mistral / Qwen)"]:::llm
        
        TextIn --> TextEmbed
        TextEmbed & DimensionMatch --> TokenFusion
        TokenFusion --> TransformerLayers
        PosEncoding -.-> TransformerLayers
    end

    %% --- 输出 ---
    TransformerLayers --> OutputHead["LM Head (Logits)"]:::llm
```





```mermaid
graph TD
    %% 定义样式
    classDef input fill:#e1f5fe,stroke:#01579b,stroke-width:2px;
    classDef vision fill:#f3e5f5,stroke:#4a148c,stroke-width:2px;
    classDef projector fill:#e8f5e9,stroke:#1b5e20,stroke-width:2px;
    classDef llm fill:#fff3e0,stroke:#e65100,stroke-width:2px;
    classDef output fill:#ffebee,stroke:#b71c1c,stroke-width:2px;

    %% --- 输入层 ---
    subgraph Inputs ["Input Layer"]
        direction LR
        RawText["input_ids<br/>(Tokens)"]:::input
        RawImage["pixel_values<br/>(Image Tensors)"]:::input
    end

    %% --- 视觉塔 ---
    subgraph VisionTower ["Vision Tower (CLIP)"]
        direction TB
        VT_Base["Vision BackBone<br/>(e.g., CLIP-ViT-L/14)"]:::vision
        SelectLayer["Feature Selection<br/>(vision_feature_layer)"]:::vision
        SelectStrategy["Select Strategy<br/>(Default: remove CLS token)"]:::vision
        
        RawImage --> VT_Base --> SelectLayer --> SelectStrategy
    end

    %% --- 投影层 ---
    subgraph Projector ["LlavaMultiModalProjector (MLP)"]
        direction TB
        P_Linear1["Linear 1<br/>(Vision Dim -> Text Dim)"]:::projector
        P_Act["GELU Activation"]:::projector
        P_Linear2["Linear 2<br/>(Text Dim -> Text Dim)"]:::projector
        
        SelectStrategy --> P_Linear1 --> P_Act --> P_Linear2
        P_Linear2 --> ImageFeatures["image_features"]:::projector
    end

    %% --- 核心逻辑：特征融合 ---
    subgraph Fusion ["_merge_input_ids_with_image_features"]
        direction TB
        TextEmbed["Text Embeddings<br/>(language_model.embed_tokens)"]:::llm
        
        SpecialMask["special_image_token_mask<br/>(Find <image> ID)"]:::llm
        CumSum["Position Calculation<br/>(torch.cumsum)"]:::llm
        
        FinalEmbed["final_embedding<br/>(Merged Image + Text)"]:::llm
        
        RawText --> TextEmbed
        RawText --> SpecialMask --> CumSum
        
        TextEmbed --> FinalEmbed
        ImageFeatures --> FinalEmbed
        CumSum --> FinalEmbed
    end

    %% --- 语言模型 ---
    subgraph LLM ["Language Model (Causal LM)"]
        direction TB
        L_Model["language_model<br/>(e.g., Llama-2 / Vicuna)"]:::llm
        L_Pos["position_ids<br/>(Recalculated after merge)"]:::llm
        L_Mask["attention_mask<br/>(Updated for image length)"]:::llm
        
        FinalEmbed --> L_Model
        L_Pos --> L_Model
        L_Mask --> L_Model
    end

    %% --- 输出 ---
    subgraph Output ["Output Head"]
        L_Head["lm_head"]:::output
        L_Loss["CrossEntropyLoss<br/>(Shifted Labels)"]:::output
    end

    L_Model --> L_Head
    L_Head --> L_Loss
```





```mermaid
graph TD
    %% 定义样式
    classDef vision fill:#f3e5f5,stroke:#4a148c,stroke-width:2px;
    classDef text fill:#e1f5fe,stroke:#01579b,stroke-width:2px;
    classDef coord fill:#fff3e0,stroke:#e65100,stroke-width:2px;

    subgraph ImageProcessor ["Image/Video Processor"]
        direction TB
        Resize["Factor Resize (Scale to multiples of 28)"]:::vision
        Reshape["3D Reshape (T, C, H, W)"]:::vision
        Normalize["Normalization (Mean/Std)"]:::vision
        GetTHW["Calculate grid_thw (t, h, w)"]:::vision
    end

    subgraph TextProcessor ["Text Processor (Tokenizer)"]
        direction TB
        Tokenize["Text Tokenization"]:::text
        AddSpecial["Add Special Tokens (<|vision_start|>, <|image_pad|>, etc.)"]:::text
    end

    subgraph CoordinateSystem ["Position System (M-RoPE Pre-calc)"]
        direction TB
        MapTokens["Map Vision Tokens to 3D Grids"]:::coord
        CalcDeltas["Calculate rope_deltas (Sequence length vs Multi-modal length)"]:::coord
    end

    %% 数据流
    RawImg["Raw Image/Video"] --> Resize --> Reshape --> Normalize --> PixelValues["pixel_values / pixel_values_videos"]
    Normalize --> GetTHW --> GridTHW["image_grid_thw / video_grid_thw"]
    
    RawTxt["User Prompt"] --> Tokenize --> AddSpecial --> InputIDs["input_ids"]
    
    GridTHW & InputIDs --> MapTokens --> CalcDeltas --> RopeDeltas["rope_deltas / position_ids"]
```



```mermaid
graph TD
    %% 定义样式
    classDef input fill:#e1f5fe,stroke:#01579b,stroke-width:2px;
    classDef vision fill:#f3e5f5,stroke:#4a148c,stroke-width:2px;
    classDef llm fill:#fff3e0,stroke:#e65100,stroke-width:2px;
    classDef fusion fill:#e8f5e9,stroke:#1b5e20,stroke-width:2px;
    classDef output fill:#ffebee,stroke:#b71c1c,stroke-width:2px;

    %% --- 输入层 ---
    subgraph Inputs ["Input Modalities"]
        direction LR
        RawText["Raw Text (Input IDs)"]:::input
        RawImage["Pixel Values (Images)"]:::input
        RawVideo["Pixel Values (Videos)"]:::input
        GridTHW["Grid T H W Info"]:::input
    end

    %% --- 视觉编码器 ---
    subgraph VisionTower ["Qwen2VisionTransformer (Visual Encoder)"]
        direction TB
        PatchEmbed["PatchEmbed (Conv3d)"]:::vision
        VisionRotary["VisionRotaryEmbedding"]:::vision
        
        subgraph VisionBlocks ["Stack of Qwen2VLVisionBlock"]
            V_LN1["LayerNorm"]:::vision
            V_Attn["VisionAttention (3D RoPE)"]:::vision
            V_LN2["LayerNorm"]:::vision
            V_MLP["VisionMLP"]:::vision
            V_Res1(("Add")):::vision
            V_Res2(("Add")):::vision
        end
        
        PatchMerger["PatchMerger (Dimension Reduction)"]:::vision
        
        RawImage & RawVideo --> PatchEmbed
        PatchEmbed --> V_LN1
        VisionRotary --> V_Attn
        
        V_LN1 --> V_Attn --> V_Res1
        PatchEmbed --> V_Res1
        V_Res1 --> V_LN2 --> V_MLP --> V_Res2
        V_Res1 --> V_Res2
        V_Res2 --> PatchMerger
    end

    %% --- 文本嵌入与融合 ---
    subgraph FusionLayer ["Multimodal Fusion & Position Calculation"]
        direction TB
        TextEmbed["Text Embedding Layer"]:::fusion
        PlaceholderMask["Get Placeholder Mask"]:::fusion
        MaskedScatter["Masked Scatter (Feature Fusion)"]:::fusion
        MRoPE_Calc["M-RoPE Index Calculation"]:::fusion
        
        RawText --> TextEmbed
        RawText --> PlaceholderMask
        TextEmbed --> MaskedScatter
        PatchMerger --> MaskedScatter
        PlaceholderMask --> MaskedScatter
        RawText & GridTHW --> MRoPE_Calc
    end

    %% --- 语言模型 ---
    subgraph LLM ["Qwen2VL LLM Backbone"]
        direction TB
        RotaryEmb["Qwen2VLRotaryEmbedding"]:::llm
        
        subgraph DecoderLayer ["Stack of Qwen2VLDecoderLayer"]
            LLM_LN1["Qwen2RMSNorm"]:::llm
            subgraph AttentionBlock ["Qwen2VLAttention"]
                QKV["Linear Q K V"]:::llm
                M_RoPE_Apply["Apply M-RoPE (T/H/W)"]:::llm
                FlashAttn["Flash Attention"]:::llm
                O_Proj["Linear Output"]:::llm
            end
            LLM_Res1(("Add")):::llm
            LLM_LN2["Qwen2RMSNorm"]:::llm
            LLM_MLP["Qwen2MLP"]:::llm
            LLM_Res2(("Add")):::llm
        end
        FinalNorm["Final RMSNorm"]:::llm
        
        MaskedScatter --> LLM_LN1
        MRoPE_Calc --> RotaryEmb
        LLM_LN1 --> QKV
        RotaryEmb --> M_RoPE_Apply
        QKV --> M_RoPE_Apply --> FlashAttn --> O_Proj
        MaskedScatter --> LLM_Res1
        O_Proj --> LLM_Res1
        LLM_Res1 --> LLM_LN2 --> LLM_MLP --> LLM_Res2
        LLM_Res1 --> LLM_Res2
        LLM_Res2 --> FinalNorm
    end

    %% --- 输出层 ---
    FinalNorm --> LM_Head["LM Head (Linear)"]:::output
    LM_Head --> Logits["Logits / Next Token"]:::output
```



主流模型采用 **SwiGLU** 激活函数，包含三个投影矩阵。

- **参数名称**：

  - $W_G$: `gate_proj`
  - $W_U$: `up_proj`
  - $W_D$: `down_proj`

- **参数量**：$3 \times (d \times d_{ff})$

- 公式：
  $$
  \text{SwiGLU}(X) = (\text{SiLU}(X \cdot W_G) \otimes (X \cdot W_U)) \cdot W_D
  $$

- **意义**：$W_G$ 和 $W_U$ 将空间维度升采样，通过门控过滤信息，$W_D$ 负责将信息压缩回 $d$ 维。

FFN 存储了模型大部分的“知识点”。

- **激活函数演进**：ReLU $\rightarrow$ GELU $\rightarrow$ **SwiGLU** (Llama、Qwen 标配)。
- **结构演进 (MoE - Mixture of Experts)**：
  - **Mixtral / DeepSeek-V3**：将大的 FFN 拆成多个专家，每次只激活一小部分。
  - **细粒度专家**：DeepSeek 将专家拆得更细，并引入“共享专家”处理通用知识，解决了专家路由的负载均衡问题。
- **MTP (Multi-Token Prediction)**：DeepSeek-V3 在 FFN 层之后引入多 Token 预测分支，增强了模型对上下文的整体规划能力。

## Activation



## MoE (Mixture of Experts)

MoE 的核心思路是：**在不增加单次推理计算量（FLOPs）的前提下，大幅增加模型参数量（存储能力）。**

1. **早期尝试 (Switch Transformer/GShard)**：
   - **机制**：Top-1 路由，将 Token 发给最匹配的一个专家。
   - **问题**：训练极不稳定，容易出现“专家坍塌”（所有 Token 都挤给一个专家，其他专家不学习）。
2. **主流阶段 (Mixtral 8x7B)**：
   - **机制**：Top-2 路由。每个 Token 激活 2 个专家。
   - **贡献**：确立了 **Sparse MoE** 的工业化标准，开源性能首次反超某些闭源稠密模型。
3. **精细化阶段 (DeepSeek-MoE)**：
   - **创新**：引入 **共享专家 (Shared Experts)** + **细粒度专家 (Fine-grained Experts)**。
   - **逻辑**：总有 2 个专家是“常驻”的，负责处理通用语法和基础知识；剩下的 62 个专家中选出 6 个，负责特定领域。这避免了每个专家都要重复学习“的、地、得”这种废话。
4. **原生多模态 MoE (Llama 4 / Qwen 3)**：
   - **改进**：专家不再只是处理文本。模型内部会出现“视觉专家”、“代码专家”、“逻辑推理专家”，且支持在训练时动态扩展专家数量（Dynamic Scaling）。

MOE 特点

- 相同计算代价下，可以增大网络参数规模，性能更好。
- 基本可以达到相同参数规模的稠密网络性能。
- 相比同等参数规模的稠密网络，计算代价变小。
- 相比同等参数规模的稠密网络，显存占用不变。
- 可能有专家负载不均衡问题，训练难度增大。

### 专家负载均衡

- 训练时对每个tokent最少选择2个专家。选择Top1专家和在剩余专家里按概率再选择一个。
- 给每个专家设置tokn容量，达到容量后，则跳过处理，输出为全0。通过残差连接后边。
- 设置一个负载均衡的辅助损失。

### 负载均衡衡损失

- 希望每个专家被调用的频率是相等的。
- $f_i=(该专家被调用的次数)/(所有专家被调用的次数)$
- $loss_{balance}=\sum\limits^N_{i=1}(f_i)^2$
- 假设有2个专家：
  - f1=1;f2=0;losspalance =12+02=1
  - f1=0.8;f2=0.2;l0 SSpalance=0.82+0.22=0.68
  - f1=0.5;f2=0.5;l0 SSpalance=0.52+0.52=0.5

#### fi

- $f_i=(该专家被调用的次数)/(所有专家被调用的次数)$
- $loss_{balance}=\sum\limits^N_{i=1}(f_i)^2$

是否调用某个专家是通过torch.topk操作得到的，这个操作不可微，无法通过梯度下降优化。

#### 近似

$loss_{balance}=\sum\limits^N_{i=1}f_ip_i$

- $f_i=(该专家被调用的次数)/(所有专家被调用的次数)$
- $p_i=$ 一个批次中所有token对该专家的路由概率的平均值。
  - 这个是softmax得到的，可微，f作为常数，对pi优化

### DeepSeek MoE

- 细分更多专家
- 抽取共享专家

效果已经达到MoE极限：与Dense网络loss一致

## MTP (Multi-Token Prediction)

- 只在训练时使用，用来加速训练，
- 推理的时候用vllm可以自动分batch处理多用户同时访问，不必 mtp