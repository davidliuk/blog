# it

html5嵌入: markdown-it-html5-embed（typora自带支持html5）

[markdown video](https://stackoverflow.com/questions/46273751/how-can-i-add-a-video-in-markdown)

Depending on your markdown processor, there may be a built-in syntax. 

Pandoc [the image syntax](https://pandoc.org/MANUAL.html#images) with a video file extension (`.mov`, `.mp4`) can be used:

```markdown
![](video.mov)
```

---

The other answer is correct, but if you're dealing with GitHub, now you can just [add a URL to the video](https://github.blog/2021-05-13-video-uploads-available-github/) and it will automatically be embedded, as long as it's surrounded by empty lines. For example:

```markdown
# cool-beans

https://example.com/video.mp4

Press play to see the video.
```

For GitHub markdown (in website), you can drag the video file from your file explorer and drop it into the comment or text box.

This action will automatically generate a URL and store it in GitHub Assets.

---

For other processors, you can always write raw-HTML in your markdown:

```html
<video width="320" height="240" controls>
  <source src="video.mov" type="video/mp4">
</video>
```

或者使用iframe，视频网站外链，效果如下（推荐 Google Drive 外链）

<iframe src="https://drive.google.com/file/d/15fHpLKYUewPKiyrWV3DgaFWmrXo1oHPL/preview" width="640" height="480" allow="autoplay"></iframe>

bilibili player bvid

<iframe src="//player.bilibili.com/player.html?bvid=BV1FX4y1E7ag" width="600" height="400px"  scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>

**boolean** 类型，在 QueryString 中可以使用 **0** 和 **1** 表示。

| 参数名    | 类型      | 必要 | 说明                                                         |
| :-------- | :-------- | :--- | :----------------------------------------------------------- |
| aid       | `number`  |      | UGC 视频 ID。aid、bvid 选择其一即可                          |
| cid       | `number`  |      | UGC 视频 ID                                                  |
| bvid      | `string`  | ✅    | UGC 视频 ID。aid、bvid 选择其一即可                          |
| seasonId  | `number`  |      | OGV 视频 ID                                                  |
| episodeId | `number`  | ✅    | OGV 视频 ID。优先级高于 aid、bvid                            |
| poster    | `boolean` |      | 展示封面                                                     |
| autoplay  | `boolean` |      | 自动播放                                                     |
| muted     | `boolean` |      | 静音                                                         |
| t         | `number`  |      | 跳转到媒体的初始时间点，单位：秒                             |
| danmaku   | `boolean` |      | `false` 表示**关闭弹幕**，其他表示默认值                     |
| kind      | `number`  |      | 群组种类。非通用业务需要此参数                               |
| refer     | `boolean` |      | 跳链时携带当前的 Referrer。用于合作方查询来自嵌入网站的跳转次数 |
| p         | `number`  |      | 多 P 视频的集数。从 1 开始计数，若有 cid 参数，则此参数不生效 |

------

---

fregante's answer works fine for videos you upload to GitHub yourself, but not for youtube video links.

mb21's answer works fine for links if you want to provide the image yourself, but that means you'll have to use the plain thumbnail image without the play button (in which case it doesn't look like a video), or edit an image yourself, which is time-consuming.

In case you wanna get the thumbnail from a video on the web automatically... you can use an API I made which essentially gets the video's thumbnail, then adds a play button and backdrop to it.

You can use it in markdown like this:

```markdown
[![](https://markdown-videos-api.jorgenkh.no/youtube/{video_id})](https://youtu.be/{video_id})
```

Clicking on the image will open the video in your browser.

[![](http://markdown-videos-api.jorgenkh.no/youtube/8lGpZkjnkt4)](https://youtu.be/8lGpZkjnkt4)

[![](http://markdown-videos-api.jorgenkh.no/youtube/8lGpZkjnkt4.gif)](https://youtu.be/8lGpZkjnkt4.gif)



