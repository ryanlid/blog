---
title: WebRTC 音视频采集
date: 2020-05-28 20:53:49
updated: 2020-05-28 20:53:49
tags:
  - webrtc
category:
description:
---

通过 `getUserMedia` 获取音视频

```js
const promise = navigator.mediaDevices.getUserMedia(constraints);
```

适配不同浏览器

https://webrtc.github.io/adapter/adapter-latest.js

获取设备信息

```js
const promise = navigator.mediaDevices.enumerateDevices();
```

视频约束

|    参数    |    说明    |
| :--------: | :--------: |
|   width    |            |
|   height   |            |
| frameRate  |    帧率    |
| facingMode | 摄像头选择 |

facingMode 的可选值：

|             |            |
| :---------: | :--------: |
|    user     | 前置摄像头 |
| environment |    后置    |
|    left     |  前置左侧  |
|    right    |  前置右侧  |

音频约束

|                  |                      |
| :--------------: | -------------------- |
|      volume      | 声音大小 0~1         |
|    sampleRate    | 采样率               |
|    sampleSize    |
| echoCancellation | 回音消除             |
| autoGainControl  | 自动增益 true /false |
| noiseSuppression | 降噪国内             |
|     latency      | 延迟效果             |
|   channelCount   | 声道                 |
|     deviceID     | 设备 id              |
|     groupID      |                      |

示例

```js
audio:true
video:{
  width:{
    min:300,
    max:640
  },
  height:{
    min:300,
    max:480
    },
    frameRate:{
      min:15,
      max:30
    }
}
```

## 更新记录

1. {{ date.format('YYYY/M/D H:mm:ss') }} 首次发布

## 参考链接
