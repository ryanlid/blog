---
title: 使用docker部署
date: 2017-06-22 07:56:10
updated: 2017-06-22 07:56:10
tags: 
- docker
- php
- nginx
category:
---

## PHP Container

负责处理php程序

```
docker run -d -p 9000:9000 --name php \
-v /var/www/file:/var/www/html \
php:7.1-fpm
```
> 注意在这里有坑，因为映射的目录路径不一致导，致与Nginx搭配时，文件读取错误，出现F。目前的做法是在nginx配置文件中单独设置，后期想想有没有好的方法再调整

## Nginx Container

负责静态文件处理静态文件及对其他程序的转发

```
docker run -d --name site -p 80:80 -p 443:443 \
-v /var/www:/var/www \
-v /etc/nginx/conf.d:/usr/local/nginx/conf.d \
-v /var/log/nginx:/usr/local/nginx/logs \
-v /etc/letsencrypt:/etc/letsencrypt \
onnno/nginx
```
各 Volume 作用，请查看[README.md](https://github.com/OOnnnOO/docker-nginx)及[dockerfile](https://github.com/OOnnnOO/docker-nginx/blob/master/Dockerfile)

https://github.com/OOnnnOO/nginx-conf

## 更新记录

1. 2017-06-22 首次发布
