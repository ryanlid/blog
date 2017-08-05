---
title: 通过adb命令操作android设备
date: 2017-08-05 21:59:44
updated: 2017-08-05 21:59:44
tags:
- adb
- android
category:
---

因为前些天，手机掉地上，摔碎了屏幕，现在手机是半身不遂(下半屏触摸失效)😢

搜索一下，发现可以通过android的调试工具来触发点击事件的，而且不仅仅是触发点击事件功能。

## 准备
### 下载 platform tools

要通过电脑来操作android终端，首先需要下载adb工具

下载页面：

https://developer.android.com/studio/releases/platform-tools.html

下载链接：

https://dl.google.com/android/repository/platform-tools-latest-windows.zip

https://dl.google.com/android/repository/platform-tools-latest-darwin.zip

https://dl.google.com/android/repository/platform-tools-latest-linux.zip

MacOS可以通过brew来安装 

```
brew cask install android-platform-tools
```
### 下载安装手机驱动
这个不同手机驱动不同，要到各自手机厂商去下载，或者要简单一些，各种手机助手随便下载一个，会自动帮你把需要安装的手机驱动安装完成。

### 开启手机调试

用过手机助手都懂，不解释

## 使用

查看设备连接情况

```
adb devices
```

进入shell

```
adb shell
```
点击坐标（500，1600）

```
adb shell tap 500，1600
```

输入字符abc

```
adb shell input text "abc"
```

屏幕截图

```
adb shell screencap /sdcard/screen.png
```

录制视频

```
adb shell screenrecord /sdcard/demo.mp4
```
安装软件

```
adb install path_to_apk
```

从设备复制文件或目录

```
adb pull remote local
```

将文件目录复制到设备

```
adb push local remote  // 比如：adb push foo.txt /sdcard/foo.txt
```

重启adb服务器

```
adb kill-server
```

## 更新记录

1. 2017-08-05 首次发布

## 参考链接

1. Android 调试桥：https://developer.android.com/studio/command-line/adb.html
