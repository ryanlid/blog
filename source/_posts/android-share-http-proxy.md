---
title: 在 android 手机上共享代理 HTTP Proxy
tags:
  - android
  - http
  - proxy
  - termux
  - 代理
date: 2018-03-12 16:34:42
updated: 2018-03-12 16:34:42
category:
description:
---

之前都是自己搭建shadowsocks，访问外网，前不久都被block了，在手机上有很多免费的软件可用，于是想着通过手机共享上网。

<!-- more -->

## 准备

1.  连接WIFI的安卓手机
2.  Termux APP（其他类似终端APP应该也可以）

## 操作

安装 NodeJS

```
pkg install nodejs
```

安装proxy

```
npm install -g proxy
```

开启proxy

```
proxy -p 8080
```

> -p 指定端口号

将 termux 切换到后台，然后该干嘛，干嘛去~~~

这时候，就可以在其他设备，将 HTTP Proxy 访问外网了，如电脑，连接到手机 ip:8080

> 手机ip地址可以在手机中，通过 `系统设置` -> `关于手机` -> `状态` 查看，或者登录路由器查看。

## 更新记录

1. {{ date.format('YYYY/M/D H:mm:ss') }} 首次发布

## 参考链接
