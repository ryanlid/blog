---
title: Windows10 中的 Linux(wsl) 使用
tags:
  - windows
  - wsl
date: 2018-06-13 09:01:39
updated: 2018-06-13 09:01:39
category:
description:
---

欢迎访问新站点: <https://www.yidiankuaile.com/post/windows10-wsl-ubuntu>

[![store](https://static.lidong.me/upload/images/keqvjWA_P.png)](https://static.lidong.me/upload/images/keqvjWA_P.png)

wsl开启相关内容参考 [巨硬的文档](https://docs.microsoft.com/zh-cn/windows/wsl/install-win10)

这里记录一下我在 wsl 中的使用情况

<!-- more -->

## node(nvm) 安装

> 注意：安装完 nvm 需要重启终端，wsl 中就直接重新进入 Linux 终端，才能使用 nvm 安装 Nodejs

```
# 安装 nvm
wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash

# 安装最新长期支持版本 Nodejs
nvm install --lts

# 安装最新稳定版本版本 Nodejs
nvm install stable
```

## 更新记录

1. {{ date.format('YYYY/M/D H:mm:ss') }} 首次发布

## 参考链接
