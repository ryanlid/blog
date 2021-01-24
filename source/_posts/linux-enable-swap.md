---
title: 开启 swap 分区（虚拟内存）
date: 2016-09-11 08:23:25
updated: 2016-09-11 08:23:25
tags:
- linux
- swap
---

欢迎访问新站点: <https://www.yidiankuaile.com/post/linux-enable-swap>

1. 检查分区情况

    free -m

    ![](https://img.lidong.me/2016/09/IZ5dmUw0LquR.png)
<!-- more -->

2. 增加交换分区及大小

        sudo dd if=/dev/zero of=/swapfile bs=1024 count=2048k
3. 设置交换文件

        mkswap /swapfile
4. 立即启用交换分区文件

        swapon /swapfile

        swapon: /swapfile: insecure permissions 0644, 0600 suggested.

        chmod 0600 /swapfile

5. 想在引导时候自动启用，编辑文件 `/etc/fstab`

        vi /etc/fstab
在文件末位添加

        /swapfile swap swap defaults 0 0

6. 验证：系统下次引导时，它就会启用新建的交换文件，再查看SWAP分区大小发现增加了2G。

    ![](https://img.lidong.me/2016/09/Uv4CHbdAfCoY.png)



