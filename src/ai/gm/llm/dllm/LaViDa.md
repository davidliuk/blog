# LaViDa

## Evaluation

- ai2d
- chartqa_lite
- coco2017_cap_val_lite

```
mme,vqav2_val_lite,mmbench_en_dev_lite,textvqa_val,docvqa_val,chartqa_lite,infovqa_val_lite,scienceqa_full,ai2d,coco2017_cap_val_lite,mathverse_testmini_vision_dominant,mathvista_testmini_format
```



```
ai2d,chartqa,mmbench_en,mmmu_pro_standard,mmmu_pro_vision,mmmu_val,mmstar,muirbench,realworldqa,videomme
```

- ai2d,chartqa,mmbench_en,mmmu_pro_standard,mmmu_pro_vision,mmmu_val,mmstar,muirbench,realworldqa,videomme

### chartqa_lite

500个

```
2025-06-02 02:34:12.722 | INFO     | lmms_eval.loggers.evaluation_tracker:save_results_samples:255 - Saving per-sample results for: chartqa_lite
llava_llada (pretrained=lavida-ckpts/lavida-llada-hd,conv_template=llada,model_name=llava_llada), gen_kwargs: (refix_lm=True), limit: None, num_fewshot: None, batch_size: 1
|   Tasks    |Version|Filter|n-shot|        Metric         |   |Value |   |Stderr|
|------------|-------|------|-----:|-----------------------|---|-----:|---|-----:|
|chartqa_lite|Yaml   |none  |     0|relaxed_augmented_split|↑  |0.7440|±  |0.0338|
|chartqa_lite|Yaml   |none  |     0|relaxed_human_split    |↑  |0.5361|±  |0.0274|
|chartqa_lite|Yaml   |none  |     0|relaxed_overall        |↑  |0.6060|±  |0.0219|
```

### mmbech_en

太慢，等下试试light版本

```
DEBUG_PRINT_IMAGE_RES: ('anyres', 'spatial_unpad', 'grid')
Avg Latency (of 1): 12.879929304122925
Model Responding:   0%|                                                                                            | 13/10995 [03:29<44:32:17, 14.60s/it]Preprocess:Image Aspect Ratio anyres
(384, 768)
```

### mmmu_val

900

24G 4090爆显存了，换36G显存了

```
Avg Latency (of 1): 4.171314239501953
Model Responding: 100%|████████████████████████████████████████████████████████████████████████████████████████████████| 900/900 [50:18<00:00,  3.35s/it]
Postprocessing: 100%|████████████████████████████████████████████████████████████████████████████████████████████████| 900/900 [00:00<00:00, 5927.21it/s]
{'Overall-Art and Design': {'num': 120, 'acc': 0.54167}, 'Art': {'num': 30, 'acc': 0.63333}, 'Art_Theory': {'num': 30, 'acc': 0.46667}, 'Design': {'num': 30, 'acc': 0.66667}, 'Music': {'num': 30, 'acc': 0.4}, 'Overall-Business': {'num': 150, 'acc': 0.45333}, 'Accounting': {'num': 30, 'acc': 0.46667}, 'Economics': {'num': 30, 'acc': 0.43333}, 'Finance': {'num': 30, 'acc': 0.36667}, 'Manage': {'num': 30, 'acc': 0.43333}, 'Marketing': {'num': 30, 'acc': 0.56667}, 'Overall-Science': {'num': 150, 'acc': 0.39333}, 'Biology': {'num': 30, 'acc': 0.33333}, 'Chemistry': {'num': 30, 'acc': 0.26667}, 'Geography': {'num': 30, 'acc': 0.46667}, 'Math': {'num': 30, 'acc': 0.4}, 'Physics': {'num': 30, 'acc': 0.5}, 'Overall-Health and Medicine': {'num': 150, 'acc': 0.39333}, 'Basic_Medical_Science': {'num': 30, 'acc': 0.46667}, 'Clinical_Medicine': {'num': 30, 'acc': 0.3}, 'Diagnostics_and_Laboratory_Medicine': {'num': 30, 'acc': 0.4}, 'Pharmacy': {'num': 30, 'acc': 0.33333}, 'Public_Health': {'num': 30, 'acc': 0.46667}, 'Overall-Humanities and Social Science': {'num': 120, 'acc': 0.58333}, 'History': {'num': 30, 'acc': 0.63333}, 'Literature': {'num': 30, 'acc': 0.8}, 'Sociology': {'num': 30, 'acc': 0.56667}, 'Psychology': {'num': 30, 'acc': 0.33333}, 'Overall-Tech and Engineering': {'num': 210, 'acc': 0.39048}, 'Agriculture': {'num': 30, 'acc': 0.6}, 'Architecture_and_Engineering': {'num': 30, 'acc': 0.3}, 'Computer_Science': {'num': 30, 'acc': 0.33333}, 'Electronics': {'num': 30, 'acc': 0.33333}, 'Energy_and_Power': {'num': 30, 'acc': 0.3}, 'Materials': {'num': 30, 'acc': 0.4}, 'Mechanical_Engineering': {'num': 30, 'acc': 0.46667}, 'Overall': {'num': 900, 'acc': 0.44778}}
2025-06-02 08:02:30.659 | INFO     | lmms_eval.loggers.evaluation_tracker:save_results_aggregated:188 - Saving results aggregated
2025-06-02 08:02:30.660 | INFO     | lmms_eval.loggers.evaluation_tracker:save_results_samples:255 - Saving per-sample results for: mmmu_val
llava_llada (pretrained=lavida-ckpts/lavida-llada-hd,conv_template=llada,model_name=llava_llada), gen_kwargs: (refix_lm=True), limit: None, num_fewshot: None, batch_size: 1
| Tasks  |Version|Filter|n-shot| Metric |   |Value |   |Stderr|
|--------|------:|------|-----:|--------|---|-----:|---|------|
|mmmu_val|      0|none  |     0|mmmu_acc|↑  |0.4478|±  |   N/A|
```



### ai2d

```
DEBUG_PRINT_IMAGE_RES: ('anyres', 'spatial_unpad', 'grid')
Avg Latency (of 1): 2.891571044921875
Model Responding: 100%|████████████████████████████████████████████████████████████████████████████████████████████| 3088/3088 [2:41:56<00:00,  3.15s/it]
Postprocessing: 100%|██████████████████████████████████████████████████████████████████████████████████████████████| 3088/3088 [00:00<00:00, 6959.04it/s]
2025-06-02 11:12:15.162 | INFO     | lmms_eval.loggers.evaluation_tracker:save_results_aggregated:188 - Saving results aggregated
2025-06-02 11:12:15.164 | INFO     | lmms_eval.loggers.evaluation_tracker:save_results_samples:255 - Saving per-sample results for: ai2d
llava_llada (pretrained=lavida-ckpts/lavida-llada-hd,conv_template=llada,model_name=llava_llada), gen_kwargs: (refix_lm=True), limit: None, num_fewshot: None, batch_size: 1
|Tasks|Version|     Filter     |n-shot|  Metric   |   |Value |   |Stderr|
|-----|-------|----------------|-----:|-----------|---|-----:|---|-----:|
|ai2d |Yaml   |flexible-extract|     0|exact_match|↑  |0.6933|±  |0.0083|
```

