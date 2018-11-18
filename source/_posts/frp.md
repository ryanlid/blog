---
title: frp配置
date: 2018-11-18 15:04:33
updated: 2018-11-18 15:04:33
tags:
- frp
- 内网穿透
category:
description:
---

因为光纤改造，安装上了光纤，没了公网IP，嗯，也没有去找客服要，想着试一下内网穿透。frp这个内网穿透的工具，使用配置起来，还是挺简单的

<!-- more -->

frp下载地址：[https://github.com/fatedier/frp](https://github.com/fatedier/frp)

## 服务端配置（frps，具有公网IP的设备)

```conf frps.ini
[common]
bind_port = 7000
subdomain_host = lidong.me
vhost_https_port = 443
```

## 客户端配置（frpc 无公网IP的设备）

```conf frpc.ini
[common]
server_addr = nas.lidong.me
server_port = 7000

[audio]
type = https
local_port = 443
subdomain = audio

[download]
type = https
local_port = 443
subdomain = download

[files]
type = https
local_port = 443
subdomain = files

[mailplus]
type = https
local_port = 443
subdomain = mailplus

[note]
type = https
local_port = 443
subdomain = note

[drive]
type = https
local_port = 443
subdomain = drive

[moments]
type = https
local_port = 443
subdomain = moments

[video]
type = https
local_port = 443
subdomain = video
```

## 更新记录

1. {{ date.format('YYYY/M/D H:mm:ss') }} 首次发布

## 参考链接
