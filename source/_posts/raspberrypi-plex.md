---
title: 树莓派 Raspberry Pi 安装 plex
tags:
  - plex
  - raspberrypi
date: 2018-04-08 18:22:01
updated: 2018-04-08 18:22:01
category:
description:
---

Plex是一款功能强大的流媒体播放器

<!-- more -->

## 1.添加软件源
```

echo "deb https://dev2day.de/pms/ jessie main" | sudo tee /etc/apt/sources.list.d/pms.list
```

## 2.为软件源添加GPG密钥

```
wget https://dev2day.de/pms/dev2day-pms.gpg.key
sudo apt-key add dev2day-pms.gpg.key
```

## 3.安装

```
sudo apt install plexmediaserver-installer
```

## 4.修改配置文件

```
sudo vi /etc/default/plexmediaserver.prev
```

将里面的的

> PLEX_MEDIA_SERVER_USER=plex

修改为

> PLEX_MEDIA_SERVER_USER=pi

## 5.重启PLEX服务

```
sudo systemctl restart plexmediaserver
sudo systemctl status plexmediaserver
```

## 更新记录

1. {{ date.format('YYYY/M/D H:mm:ss') }} 首次发布

## 参考链接
