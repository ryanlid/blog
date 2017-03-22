---
title: CentOS 上搭建 lnmp
date: 2016-10-25 20:55:22
updated: 2016-10-25 20:55:22
tags:
  - lnmp
  - centos
  - linux
  - nginx
  - php
  - mysql
---

LNMP使用了很久，也安装了好多次，每次安装还得去看别人的文档，今天来整理一份完整版文档。 虽然有网上有很好一键安装包，但自己有不是更好。 CentOS 7 Nginx 1.11.5 PHP 5.6 MySQL

1. 更新

        sudo yum update

2. 安装 MySQL

        yum install mysql mysql-devel

3. 安装 PHP

        yum install php

4. 安装 Nginx

        wget -c https://nginx.org/download/nginx-1.11.5.tar.gz
        tar zxf nginx-1.11.5.tar.gz

        cd nginx-1.11.5/

        ./configure --with-http_v2_module --with-http_ssl_module --with-http_gzip_static_module

        make
        sudo make install


我的nginx配置文件

{% include_code nginx/www-lidong-me-nginx.conf %}

