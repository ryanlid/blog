---
title: 使用 squid 搭建 http 透明代理
date: 2019-06-18 20:04:37
updated: 2019-06-18 20:04:37
tags:
- squid
- http
- proxy
category:
description:
---

欢迎访问新站点: <https://www.yidiankuaile.com/post/squid-http-proxy>

<!-- more -->

## 安装

安装 apache2-utils 用于 HTTP 认证文件的生成，

```
apt-get install apache2-utils -y
```

安装 Squid，

```
apt-get install squid3 -y
```

安装 stunnel

```
apt-get install stunnel4 -y
```

## 配置 Squid

修改 Squid 默认配置

配置文件位于 `/etc/squid/squid.conf`

### 修改监听地址与端口号

找到 `TAG: http_port` 注释，把其下方的

```conf
# Squid normally listens to port 3128
http_port 3128
```

中 http_port 修改为 `127.0.0.1:3128`

> 使得 Squid 只能被本地（127.0.0.1）访问。此处可以修改为监听其他端口号。

### 修改访问权限与 HTTP 认证（可选）

若不需要添加 HTTP 认证，只需将 http_access deny all 修改为 http_access allow all 即可，无需下列的操作。

使用如下命令生成认证文件，

```sh
htpasswd -c /etc/squid/squid.passwd <登录用户名>
```

找到 `TAG: auth_param` 注释，在其下方添加，

```
auth_param basic program /usr/lib/squid3/basic_ncsa_auth /etc/squid3/squid.passwd
auth_param basic children 5
auth_param basic realm Squid proxy-caching web server
auth_param basic credentialsttl 2 hours
auth_param basic casesensitive off
```

找到 `TAG: acl` ，在其下方添加，

```conf
acl ncsa_users proxy_auth REQUIRED
```

找到 `TAG: http_access` ，在其下方添加，使得只允许经过认证的用户访问，

```conf
http_access deny !ncsa_users
http_access allow ncsa_users
```

### 重启 Squid

```sh
service squid3 restart
```

## 配置 stunnel

接下来，我们需要在 Squid 上添加一层加密。

### 生成公钥和私钥

生成私钥（ privatekey.pem ）

```sh
openssl genrsa -out privatekey.pem 2048
```

生成公钥（ publickey.pem ）

```sh
openssl req -new -x509 -key privatekey.pem -out publickey.pem -days 1095
```

（需要注意的是， 命令中中输入 Common Name 需要与服务器的 IP 或者主机名一致）

合并：

```
cat privatekey.pem publickey.pem >> /etc/stunnel/stunnel.pem
```

### 修改 stunnel 配置

新建一个配置文件 /etc/stunnel/stunnel.conf ，输入如下内容

```conf
client = no
[squid]
accept = 4128
connect = 127.0.0.1:3128
cert = /etc/stunnel/stunnel.pem
```

配置中指定了 stunnel 所暴露的 HTTPS 代理端口为 4128，可以修改为其他的值。

修改 /etc/default/stunnel4 配置文件中 ENABLED 值为 1。

```conf
ENABLED=1
```

重启 stunnel

```
service stunnel4 restart
```

至此，服务器端已配置完成了。

## 更新记录

1. {{ date.format('YYYY/M/D H:mm:ss') }} 首次发布

## 参考链接

1. [使用 Squid 搭建 HTTPS 代理服务器](https://blog.csdn.net/github_38885296/article/details/78588006)
