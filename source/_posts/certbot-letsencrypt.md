---
title: 使用 Certbot工具，签发 Let's Encrypt 证书
date: 2017-06-22 21:35:49
updated: 2017-06-22 21:35:49
tags:
- https
- server
- letsencrypt
category:
---

之前是使用 [acme-tiny](https://github.com/diafygi/acme-tiny)获取 Let's Encrypt 证书，但是这次弄死活就弄不上，就尝试一下用官方的工具了，用起来也很方便。[官方文档](https://certbot.eff.org/)写的已经很详细了。

我记录一下方便下次～🤗

## 安装certbot工具

```sh
sudo yum -y install yum-utils
sudo yum-config-manager --enable rhui-REGION-rhel-server-extras rhui-REGION-rhel-server-optional
sudo yum install certbot
```

## 配置用于验证域名访问路径

在Nginx配置文件 `server{}` 中添加下面内容

```conf
# 下面配置的作用：
# certbot会在 /var/www/challenges/ 中生称一个文件(xxx)，
# Let's Encrypt 通过访问 http://lidong.me/.well-known/acme-challenge/xxx 来验证域名的归属

location ^~ /.well-known/acme-challenge/ {
  root      /var/www/challenges/;
  try_files $uri =404;
}
```

## 获取证书

``` sh
# --webroot 使用webroot的插件方式（还有其他插件模式，详情请看官方文档～）
# -w 指定用于验证文件保存路径，确保文件可以通过域名访问到。
# -d 指定签发证书的域名
sudo certbot certonly --webroot -w /var/www/challenges \
-d lidong.me -d www.lidong.me
```

## 配置证书

如果一切正常的话，获取后证书保存在到 `/etc/letsencrypt/` 中，通过 `/etc/letsencrypt/live/lidong.me/xxxx` 就可以使用刚刚获取的证书了。

我的设置：在Nginx的`server{}`中添加下面内容，用于指定SSL证书

```
ssl_certificate      /etc/letsencrypt/live/lidong.me/fullchain.pem;
ssl_certificate_key  /etc/letsencrypt/live/lidong.me/privkey.pem;
```

## 更新记录

1. 2017-06-22 首次发布

## 参考链接

1. [Let's Encrypt](https://certbot.eff.org)
2. [我的nginx配置信息](https://github.com/OOnnnOO/nginx-conf)
