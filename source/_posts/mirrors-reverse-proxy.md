---
title: 反向代理apt镜像
date: 2017-05-08 00:22:17
updated: 2017-06-30 01:30:00
tags: 
- nginx 
- 代理
- 镜像
category:
---

通过apt镜像，可以快速的安装软件包，但由于部分镜像地址直接访问有困难，所以我对这些镜像地址使用nginx搭建了一个反向代理。如需使用，请修改 `/etc/apt/sources.list.d/` 中对应文件中URL。

<!-- more -->
虽然我是为了方便在树莓派上安装而搭建反向代理，但大多数镜像地址是可以安装所有的版本的相关软件包，需要使用请自行尝试，更多信息 [👇戳这里](https://apt.proxy.oonnnoo.com/)。如有疑问可以邮件联系我  ![email](https://static.lidong.me/img/email-x28.png)

## 镜像地址替换

 `#` 开头为为注释内容，是原地址，
- docker

    ```txt  docker.list
    deb [arch=armhf] https://apt.proxy.oonnnoo.com/docker/repo raspbian-jessie main
    #deb [arch=armhf] https://apt.dockerproject.org/repo raspbian-jessie main
    ```

- gitlab

    ```txt  gitlab_raspberry-pi2.list
    deb https://apt.proxy.oonnnoo.com/gitlab/raspberry-pi2/raspbian/ jessie main
    deb-src https://apt.proxy.oonnnoo.com/gitlab/raspberry-pi2/raspbian/ jessie main
    #deb https://packages.gitlab.com/gitlab/raspberry-pi2/raspbian/ jessie main
    #deb-src https://packages.gitlab.com/gitlab/raspberry-pi2/raspbian/ jessie main
    ```

- syncthing

    ```txt syncthing-release.list
    deb http://apt.proxy.oonnnoo.com/syncthing/ syncthing release
    #deb http://apt.syncthing.net/ syncthing release
    ```

- megasync
    
    ```txt megasync.list
    deb https://apt.proxy.oonnnoo.com/mega/linux/MEGAsync/Raspbian_8.0/ ./
    #deb https://mega.nz/linux/MEGAsync/Raspbian_8.0/ ./
    ```

## 更新记录

1. 2017-05-08 首次发布
2. 2017-06-30 更换 mega 代理目录名称
