---
title: 树莓派上安装DLNA实现流媒体服务器
tags:
  - dlna
  - raspberrypi
date: 2018-04-08 17:29:46
updated: 2018-04-08 17:29:46
category:
description:
---

欢迎访问新站点: <https://www.yidiankuaile.com/post/raspberrypi-dlna>

DLNA并不是创造技术，而是形成一种解决的方案，一种大家可以遵守的规范。嗯，通过它可以实现流媒体服务器～

<!-- more -->

## 1.安装 minidlna

```
sudo apt-get update

sudo apt-get install minidlna
```

## 2.设置配置文件

修改 `/etc/minidlna.conf` 文件：

```
media_dir=A,/data/DLNA/Music    #A表示这个目录是存放音乐的，当minidlna读到配置文件时，它会自动加载这个目录下的音乐文件
media_dir=P,/data/DLNA/Music
media_dir=V,/data/DLNA/Video
db_dir=/data/DLNA/db            #配置minidlna的数库数据的存放目录
log_dir=/data/DLNA/log          #配置日志目录
```

## 3.后续操作

建立文件夹

在 `/data` 文件夹下，建立以上文件夹，并设置好权限为 read and write。

重启 minidlna

```
/etc/init.d/minidlna restart
```

查看运行状态

```
/etc/init.d/minidlna status
```

## 更新记录

1. {{ date.format('YYYY/M/D H:mm:ss') }} 首次发布

## 参考链接
