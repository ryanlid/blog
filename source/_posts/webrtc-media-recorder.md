---
title: WebRTC 媒体流录制
date: 2020-05-29 22:30:12
updated: 2020-05-29 22:30:12
tags:
  - webrtc
category:
description:
---

欢迎访问新站点: <https://www.yidiankuaile.com/post/webrtc-media-recorder>

## MediaRecorder

媒体流录制

```js
const mediaRecorder = new MediaRecorder(stream[,option]);
```

|  参数   |                                     说明                                      |
| :-----: | :---------------------------------------------------------------------------: |
| stream  | 媒体流，<br>可从 `getUserMedia`，`<video>`，<br> `<audio>` 或 `<canvas>` 获取 |
| options |                                   限制选项                                    |

### options

|        选项        |                                                   说明                                                   |
| :----------------: | :------------------------------------------------------------------------------------------------------: |
|      mimeType      | video/webm<br> audio/webm <br> video/webm;codecs=vp8<br>video/webm;codecs=vp8<br> audio/webm;codecs=opus |
| audioBitsPerSecond |                                                 音频玛率                                                 |
| videoBitsPerSecond |                                                 视频玛率                                                 |
|   bitsPerSecond    |                                                 整体玛率                                                 |

### MediaRecorder API

开启录制媒体

```
MediaRecorder.start([timeslice])
```

> timeslice 可选 如果设置了，会按照时间切片存储数据

停止录制媒体

```
MediaRecorder.stop()
```

暂停录制

```
MediaRecorder.pause()
```

恢复录制

```
MediaRecorder.resume()
```

类型检测

```
MediaRecorder.isTypeSupported()
```

### 事件

```
MediaRecorder.ondataavailable
```

每次记录一定时间的数据时（如果没有指定时间片，则记录整个数据时）会触发

```
MediaRecorder.onerror
```

当有错误发生时，录制会被停止

### 数据存储

- 字符串

- Blob (该格式相当于对 ArrayBuffer 封装)

- ArrayBuffer

- ArrayBufferView

## 更新记录

1. {{ date.format('YYYY/M/D H:mm:ss') }} 首次发布

## 参考链接
