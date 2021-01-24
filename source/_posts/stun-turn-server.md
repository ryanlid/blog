---
title: stun/turn 服务器
date: 2020-06-04 20:27:37
updated: 2020-06-04 20:27:37
tags:
  - stun
  - turn
  - webrtc
category:
description:
---

欢迎访问新站点: <https://www.yidiankuaile.com/post/stun-server-turn-server>

## 选型

- rfc5766-turn-server
- [coTurn](https://github.com/coturn/coturn/)

## 源码安装

1. 下载 https://github.com/coturn/coturn/releases

2. 生成 makefile

   ```
   ./configure -prefix=/usr/local/coturn
   ```

3. 编译安装

   ```
   make && make install
   ```

## 服务器配置

```conf
# 指定监听端口
listening-port=3478
# 指定云主机的公网IP地址
external-ip=12.34.56.78
# 访问stun/turn服务器的用户名和密码
user=aaa:bbb
# 域名
realm=stun.example.com
```

## 运行

```
/usr/local/coturn/bin/turnserver -c /usr/local/coturn/etc/turnserver.conf
```

## 检测

```sh
ps -ef | grep turn
```

## 测试 turn 服务

通过 webrtc 示例测试 turn 服务

https://webrtc.github.io/samples/src/content/peerconnection/trickle-ice/

## 更新记录

1. {{ date.format('YYYY/M/D H:mm:ss') }} 首次发布

## 参考链接
