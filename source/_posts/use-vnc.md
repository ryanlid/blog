---
title: 使用 VNC
date: 2017-08-06 00:14:19
updated: 2017-08-06 00:14:19
tags:
- vnc
- raspberrypi
category:
---

## 安装 VNC 服务端

```
sudo apt-get install tightvncserver
```

启动 VNC
```
vncserver
```

### 设置 VNC 服务端
第一次启动 VNC，需要设置VNC的密码，可选设置一个可供其他人浏览只读(read-only)密码，登入的密码会加密后保存在 `~/.vnc/passwd` 文件中。

## 安装 VNC 客户端

VNC 客户端可以使用 VNC Viewer（Chrome App） 
https://chrome.google.com/webstore/detail/iabmpiboiopbgfabjmgeedhcmjenhbla

在服务端启动时候，默认创建的用户为1，开放的端口为5901

客户端中，输入 `ip:1` 或 `ip:5901` 或 `ip::5901`连接 VNC，输入密码确认连接。

VNC Viewer 登录页
![VNC Viewer 截屏](https://static.lidong.me/img/blog/5WEtijRrqiUw.png)

使用VNC登录 raspberry Pi
![使用vnc登录 raspberry Pi](https://static.lidong.me/img/blog/7yO0KhNoyl6U.png)

## 更新记录

1.2017-08-06 首次发布

## 参考链接
