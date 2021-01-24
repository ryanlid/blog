---
title: 树莓派上安装 lnmp
date: 2016-10-27 08:00:34
updated: 2016-10-27 08:00:34
tags:
- linux
- lnmp
- raspberrypi
- nginx
- php
- mysql
category:
---

欢迎访问新站点: <https://www.yidiankuaile.com/post/raspberry-lnmp>
## 准备
1.更新

    sudo apt-get update
    sudo apt-get upgrade

2.创建一个用户，用户组

    sudo usermod -a -G www-data www-data
<!-- more -->
3.安装PHP,MySQL及一些相关软件包

    sudo apt-get install openssl ssl-cert php5-cli php5-mysql php5-gd \
    php5-common php5-cgi mysql-server php-pear php-apc curl libapr1 libtool \
    libcurl4-openssl-dev php-xml-parser php5 php5-dev php5-curl php5-fpm \
    memcached php5-memcache varnish

    安装过程中出现下图弹窗，设置MySQL的root密码。
    ![IMG]()


3.安装 Nginx

 安装中会提示缺少一些依赖库，可以提前先安装了：
 sudo apt-get install libpcre3 libpcre3-dev

    wget -c https://nginx.org/download/nginx-1.11.5.tar.gz
    tar zxf nginx-1.11.5.tar.gz

    cd nginx-1.11.5/

    ./configure --with-http_v2_module --with-http_ssl_module --with-http_gzip_static_module

    make
    sudo make install



