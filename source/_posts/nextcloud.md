---
title: docker 安装 Nextcloud ，并挂载阿里云 OSS
date: 2018-08-06 20:21:27
updated: 2018-08-06 20:21:27
tags:
- nextcloud
- docker
- oss
category:
description:
---

嗯，阿里 OSS 最近出了个优惠，1T存储3年99元，看起来蛮便宜的，当然流量费另算，不过同区域的内网流量免费，入网流量免费，灰常适合作备份。哈哈 😄
于是弄个nextcloud，倒腾一下~~，顺道记录一下倒腾过程。

<!-- more -->

## 镜像选择
![nextcloud-docker-tags.PNG](https://static.lidong.me/upload/images/SJS6BxLrQ.PNG)

[查看链接](https://hub.docker.com/_/nextcloud/)

官方提供了多种版本的 image ，目前最新稳定版是 `13.x.x` 我选择的是 `nextcloud:stable-apache`，这是我的 `docker-compose.yml`文件

```yml docker-compose.yml
version: "2.0"
services:
  mysql:
    image: mysql:5.7
    restart: always
    volumes:
    - /var/datadir:/var/lib/mysql
    environment:
     MYSQL_ROOT_PASSWORD: mysql_root_password

  nextcloud:
    image: nextcloud:stable-apache
    restart: always
    expose:
      - "80"
    volumes:
      - /var/nextcloud/html:/var/www/html

  website:
    image: onnno/nginx:latest
    restart: always
    ports:
    - 443:443
    - 80:80
    volumes:
    - /var/www:/var/www
    - /etc/nginx/conf.d:/usr/local/nginx/conf.d
    - /var/log/nginx:/usr/local/nginx/logs
    - /etc/letsencrypt:/etc/letsencrypt
    depends_on:
      - mysql
      - nextcloud
```

> 这里简化过的 `docker-compose.yml` 。因为MySQL的密码直接写在了 yml 文件中，就不贴完整原文件了，仅供参考，使用时注意替换。

## 安装使用

通过你的域名或IP访问你的服务器安装就可以了，操作简单，就不细说了，如有需要，查看我的 [Nginx的配置](https://github.com/ryanlid/nginx-conf) 以及我的 [ Nextcloud Nginx的配置](https://github.com/ryanlid/nginx-conf/blob/master/cloud.lidong.me.conf)

> 注意：安装填写 MySQL 数据地址要填写 `mysql`, 而不是 `localhost` 了

## OSS 挂载权限

阿里 OSS 提供一个工具 ossfs ， 可以将 OSS 挂载到本地文件系统上。

查看[oss文档](https://help.aliyun.com/document_detail/32196.html)

先按照文档安装ossfs，配置 passwd-ossfs ，挂载目录就不能按照文档操作了，因为 NextCloud 有点不一样，“外部存储” 挂载的目录权限必须是 0770 ，用户是 33，（也不知道是为什么是这个鬼，应该 docker 的问题），否则在使用 NextCloud 时无法读取到文件。

正确的挂载方式：

```sh
# my-bucket:oss的bucket名 ouid: 用户id ogid:组id
ossfs my-bucket my-mount-point -ourl=my-oss-endpoint -ouid=33 -ogid=0  -oumask=007 -o allow_other
```

具体缘由：[看这里](https://github.com/aliyun/ossfs/wiki/FAQ#11) 和 [看这里](https://github.com/aliyun/ossfs/issues/5)

这是我的挂载命令

```shell
ossfs cloud-fs /var/nextcloud/html/cloudossfs -ourl=http://oss-cn-hongkong-internal.aliyuncs.com -ouid=33 -ogid=0  -oumask=007 -o allow_other
```

> 注意：因为我在 docker 映射的是 `/var/nextcloud/html/` 目录， `my-mount-point` 必须在 `/var/nextcloud/html/`之下，否则在容器中是读取不到的。
>
> 我这里 my-mount-point 是 `/var/nextcloud/html/cloudossfs`，在docker容器中对应的则是`/var/www/html/cloudossfs`

这时在 Nextcloud 中启用 External storage support 应用（插件），添加路径就可以通过 OSS 存取数据啦。

![External storage](https://static.lidong.me/upload/images/r1TzObIrX.png)

> 看不清图片，可以右键图片，选择新标签页打开图片

如果还是不行，尝试进入到容器，将 `/var/www/html/cloudossfs` 目录的用户属性手动修改为 `www-data`

```shell
chown www-data:root /var/www/html/cloudossfs/
```

重新扫描用户文件

```shell
sudo -u www-data php occ files:scan --all
```

缘由[看这里](https://www.zhihu.com/question/267841887/answer/393946741)

在容器中不带 `sudo` 命令，需要安装

```shell
apt update && apt install sudo
```

> PS： 最初我也是想把 Nextcloud 中的整个目录都映射到 OSS 的中的，即上面的目录 `/var/nextcloud/html:/var/www/html`，因为权限问题 Nextcloud 一直没有操作成功，而且文件巨多，不算用户上传的数据，就有13000多个， OSS 的一部分费用是按请求计算的，每1万次1分钱。在安装过程中，拷贝了两次，产生了两万多个请求。直接把我 OSS 账号搞欠费了（因为账号本没有余额😆），于是放弃了。

## 客户端同步设置

Nextcould是见过为数不多的支持自定义忽略文件、文件夹的云同步软件

### 设置忽略文件

在Windows上，忽略文件的配置文件保存在`C:\Program Files (x86)\Nextcloud\sync-exclude.lst`中。

其他操作系统，请自行查找，可以在客户端的设置中查看

找到文件，在文件末尾，添加 `node_modules` ，同步的时候就会自动跳过 `node_modules` 目录了 😆


### 设置隐藏文件同步

Nextcloud 默认是不同步隐藏文件的，即点开头的文件

文档在这里：[链接](https://docs.nextcloud.com/desktop/2.3/advancedusage.html#configuration-file)

- Linux
  ```shell
  $HOME/.config/Nextcloud/nextcloud.cfg
  ```

- Windows
  ```shell
  %APPDATA%\Nextcloud\nextcloud.cfg
  ```
- macOS
  ```shell
  $HOME/Library/Preferences/Nextcloud/nextcloud.cfg
  ```

将 `ignoreHiddenFiles=true` 修改为 `ignoreHiddenFiles=false` 即可

> 按文档来说是这样，但是修改后重启客户端后，就无法连接服务端了。貌似是 bug 了，额，尴尬。😱

## 其它

1. 通常，在访问 Nextcloud 过程中，程序会自动检查请求是 http 请求还是 https 请求，而动态生成页面中资源的链接，而现在的部署方式，使用nginx代理过请求， 如果是是https访问，程序并不能检测到https请求，所以需要在 Nextcloud 配置文件 `/var/nextcloud/html/config/config.php` 添加为 `'overwriteprotocol' => 'https'`来覆盖默认设置。

2. 如果要上传大文件，注意在nginx中设置 `client_max_body_size` ,看我的[示例](https://github.com/ryanlid/nginx-conf/blob/5678e4bab3b7a34ec92043e3a9566fc471d04775/cloud.lidong.me.conf#L14)

3. 欢迎使用我的阿里云的 [推荐链接](https://promotion.aliyun.com/ntms/act/oss-discount.html?userCode=hk4wst53) ，参团一起购买有优惠，你懂的 ~~~

## 更新记录

1. {{ date.format('YYYY/M/D H:mm:ss') }} 首次发布

## 参考链接

1. [使用OwnCloud Docker容器+阿里云OSS搭建自己的云盘服务 on Centos 7](http://crabdave.iteye.com/blog/2356624)
2. [用 Docker 和 Nginx 搭建自己的云服务器（Nextcloud）](https://oing9179.github.io/blog/2017/03/Setup-Nextcloud-using-Docker-and-Nginx/)
