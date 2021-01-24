---
title: 通过 DNS Api 签发 Let's Encrypt 证书
date: 2020-02-20 22:47:53
updated: 2020-02-20 22:47:53
tags:
- letsencrypt
- https
- dns-api
- api
- docker
category:
description:
---

欢迎访问新站点: <https://www.yidiankuaile.com/post/letsencrypt-dns-api>

<!-- more -->
我域名的DNS托管在 Cloudflare，所以这里只记录 Cloudflare DNS 的操作。

## 前提

需要[安装 docker](https://lidong.me/blog/docker-ce-install/)

## 获取CloudFlare API

需要获取 Global API Key

填入 `/root/.secrets/cerbot/cloudflare.ini` 格式为：

```
dns_cloudflare_email = example@example.com
dns_cloudflare_api_key = 12345678901234567
```

> 设置文件权限，可以避免获取证书时出现相关警告
>
> `sudo chmod 0400 /root/.secrets/cerbot/cloudflare.ini`

## 获取证书

使用 certbot 提供了 Cloudflare 镜像，拉去运行就可以了

```bash
sudo docker run -it --rm --name certbot \
            -v "/etc/letsencrypt:/etc/letsencrypt" \
            -v "/var/lib/letsencrypt:/var/lib/letsencrypt" \
            -v "/root/.secrets/cerbot/cloudflare.ini:/root/.secrets/cerbot/cloudflare.ini" \
            certbot/dns-cloudflare certonly --expand --dns-cloudflare \
            --dns-cloudflare-credentials /root/.secrets/cerbot/cloudflare.ini \
            --dns-cloudflare-propagation-seconds 60 \
            -d lidong.me \
            -d *.lidong.me \
            -d funs.app \
            -d *.funs.app \
            -d oonnnoo.com \
            -d *.oonnnoo.com \
            -d *.rorg.oonnnoo.com \
            -d *.rcom.oonnnoo.com \
            -d *.rnet.oonnnoo.com
```

其他常用的DNS服务商，也有相关镜像，在这里：https://hub.docker.com/u/certbot

## 相关内容

1. [使用 Certbot工具，签发 Let's Encrypt 证书](https://lidong.me/blog/certbot-letsencrypt/)
2. https://github.com/ryanlid/sites/blob/master/cert/README.md

## 更新记录

1. {{ date.format('YYYY/M/D H:mm:ss') }} 首次发布

## 参考链接
