---
title: macOS下将shadowsocks转换成http代理
date: 2016-11-14 06:16:00
updated: 2016-11-16 11:41:29
tags:
- macos
- shadowsocks
category: 
---

### 安装privoxy
这里我是通过brew来进行的安装

    brew install privoxy
<!-- more -->
### 编辑配置文件

    echo 'listen-address 0.0.0.0:8118' >> /usr/local/etc/privoxy/config
    echo 'forward-socks5 / localhost:1080 .' >> /usr/local/etc/privoxy/config

说明:
8118 是要监听的http端口
1080 是本地的shadowsocks监听端口。请修改为你自己的

### 启用

    privoxy /usr/local/etc/privoxy/config
    或
    brew services restart privoxy
### 验证
可以使用下面2个命令检查是否启动成功和端口是否已经监听
1.

    ps aux  | grep privoxy
看到如下进程

    xxx             57930   0.0  0.0  2461168   1496   ??  S    11:19上午   0:00.02 /usr/local/Cellar/privoxy/3.0.26/sbin/privoxy --no-daemon /usr/local/etc/privoxy/config
    
证明已经启动
2.

    netstat -an | grep 8118
看到这个

    tcp4       0      0  *.8118                 *.*                    LISTEN
    
证明已经监听。

## 使用
这时本机可以可以通过 `127.0.0.1:8118` ,局域网中都可以可以通过 `本机ip:8118` 使用http代理了。

PS: 可以做到在命令行中使用代理的软件还有 [proxychains-ng](https://github.com/rofl0r/proxychains-ng)


