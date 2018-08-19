---
title: 使用 Docker 安装 WordPress
tags:
  - docker
  - wordpress
date: 2018-01-01 12:48:54
updated: 2018-01-01 12:48:54
category:
description:
---

今天是元旦，首先要祝自己、祝大家元旦快乐?。

好久没有写东西了，新年新开始，从今天开始写点东西吧。

昨天刚把Wordpress装上了，记录一些安装过程。毕竟不是像原来那样常规的安装方式。

<!-- more -->

## 安装方式

通过docker安装，docker-compose 放在gist上，其中包含一些其他 services，请自行忽略

<div class="gist-oembed" data-gist="1209a07f07b718854e5c9e7bc2589ecb.json"></div>

## 遇到的问题

1.通过 nginx 转发 wordpress

因为做了多个services，所以不能直接将宿主机的80端口或443端给wordpress，一开始我不知道怎么弄，后来发现可以直接转到通过反向代理转到`http://wordpress:80`

参考[GitHub链接](https://github.com/oonnnoo/nginx-conf/blob/63e574ce73c7adcf11c26e0a746feb6452f2eefb/worpdress.oonnnoo.com.conf#L10)

2.SSL证书错误

因为1中使用http，80端口访问的，也就是从nginx container到wordpress container中访问是通过HTTP访问的，由于wordpress container中没有配置SSL证书，目前也只能这样了。正因为这样，wordpress中检测不到https访问，所以资源链接一律返回HTTP，到浏览器一片红。

找到一个解决办法。

```
if ($_SERVER['HTTP_X_FORWARDED_PROTO'] === 'https')
$_SERVER['HTTPS'] = '1';

if (isset($_SERVER['HTTP_X_FORWARDED_HOST'])) {
$_SERVER['HTTP_HOST'] = $_SERVER['HTTP_X_FORWARDED_HOST'];
}
```

我的配置，简单粗暴，不带判断

```
$_SERVER['HTTPS'] = '1';
$_SERVER['HTTP_HOST'] = $_SERVER['HTTP_X_FORWARDED_HOST'];
```

参考链接：[https://github.com/docker-library/wordpress/issues/251#issuecomment-345687824](https://github.com/docker-library/wordpress/issues/251#issuecomment-345687824)

3.数据库保存

目前将数据保存在mysql container中，对mysql image还没有深入研究，毕竟经常会 `docker-compose up -d --force-recreate` ，数据保存在container，多危险。这是一个 `//TODO` 的事情。

2018.01.10 update:

[重新配置WordPress](https://lidong.me/wordpress/2018/second-set-wordpress/)

2018.03.24 update:

4.客户端IP获取错误

由于请求是通过nginx转发了一次，Wordpress获取到的客户端IP是docker传过去的形似 `172.18.0.x` 的IP地址，在评论中显示作者IP那就是 `172.18.0.x`了，要想拿到真实的客户端IP，可以这样做：

在nginx配置文件中添加

```
proxy_set_header  X-Real-IP          $remote_addr;
```

在Wordpress中 `wp-config.php` 添加

```
if (isset($_SERVER['HTTP_X_REAL_IP'])) {
    $_SERVER['REMOTE_ADDR'] = $_SERVER['HTTP_X_REAL_IP'];
}

```

## 更新记录

1. {{ date.format('YYYY/M/D H:mm:ss') }} 首次发布

## 参考链接
