---
title: 使用 ffmpeg 下载加密 ts 视频流
date: 2018-08-02 22:30:53
updated: 2018-08-02 22:30:53
tags:
- ffmpeg
- ts视频流
- 视频下载
category:
description:
---

因为朋友需要下载某课的付费视频，某课的视频是以ts文件后缀格式的视频流一小段一小段边下边播的，而且使用了加密手段。研究了一下，发现通过 ffmpeg 下载还是挺容易的，直接可以生成一个ts的文件，播放器都播放这个文件也是没有问题的。

现在记录一下下载方法，不过前提是你有在线观看的权限。否则拿不到视频流地址，何谈下载？

<!-- more -->

## 系统环境
  最好使用 Linux 环境

  我使用的是 wsl 中 ubuntu (WSL 中的 Ubuntu 16.04.5 LTS)
  ![lsb_release.png](https://static.lidong.me/upload/images/HkQVn9xB7.png)

## 操作步骤

1. 安装ffmpeg，在 ubuntu 系统中，可以直接 `apt install` 安装

  ```
  sudo apt install ffmpeg
  ```

2. 下载m3u8

  如果播放的视频是ts形式的视频流，浏览器播放视频之前一定会加载一个.m3u8 文件，可以通过浏览器开发者工具network查看到，下载这个文件

3. 下载key文件，替换m3u8中的key文件

  在m3u8 中的密钥通常是这样的：`#EXT-X-KEY:METHOD=AES-128,URI="https://xxx"`，这时需要用能够在线观看到这个视频的浏览器会话去访问这个 URI （通过 cookies 验证），并保存到本地，并把 m3u8 也保存到本地，将密钥的 URI 改为下载好的本地路径（一个 m3u8 中可能有多个密钥，需要一一处理）。

  > 如果报错可以将文件保存为以.m3u8后缀的文件

  下载视频文件

  ```sh
  ffmpeg -i 02.m3u8  -c copy 02.ts  # ffmpeg -i m3u8路径 -c copy 下载文件保存文件名
  ```

## 遇到的问题及参考资料列表

1. [[ffmpeg]如何使用ffmpeg下载分段并加密的m3u8视频流](http://www.cuplayer.com/player/PlayerCode/FFmpeg/2017/0419/2873.html)

2. [ffmpeg读取加密的m3u8文件时无法访问.key文件](https://blog.csdn.net/dzreal_7/article/details/79277636)

3. [ffmpeg分解视频文件并加密](https://blog.csdn.net/cnhome/article/details/73250495)

## 更新记录

1. {{ date.format('YYYY/M/D H:mm:ss') }} 首次发布
