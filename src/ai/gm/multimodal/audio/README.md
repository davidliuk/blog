# Audio

音频这部分是多模态里的一个独立分支，主要关心两件事: 把声音转成文本或语义表征，以及从文本或语义条件反向生成声音。

## Typical Problems

- `ASR`: Automatic Speech Recognition，把语音转成文本。
- `TTS`: Text-to-Speech，把文本转成可听的语音。
- `Audio understanding`: 识别说话人、事件、音乐风格或环境声音。
- `Audio generation`: 在文本、音乐片段或风格条件下生成音频。

## Starting Points

- Whisper: 语音识别的代表性基础模型。
- Audio language models / audio foundation models: 把音频也纳入统一生成式建模框架。

## Reading Notes

后续如果这条线继续扩展，可以按 `ASR -> TTS -> Audio LLM -> speech agent` 这条路径继续整理。
