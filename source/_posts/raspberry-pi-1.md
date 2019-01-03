---
title: 树莓派 Raspberry-Pi 系统安装及基本设置
date: 2016-07-30 14:50:25
updated: 2016-07-30 14:50:25
tags:
- raspberrypi
---

前两天一时冲动，🙃买了个树莓派，于是边查资料边捣腾，系统都重装了三遍，终于搞定了。😂
现在记录下来，以免哪天要从头开始，可以快速找到。如果能帮助到后来的人，那也是极好滴～
<!--more-->
## 一、安装系统
### 下载系统镜像　
官网的[下载页面](https://www.raspberrypi.org/downloads)可以找到pi的系统镜像。

我选择的是 RASPBIAN JESSIE，下载 [JESSIE 的 torrent]()，然后再用迅雷下载，还是挺快的。

下载完成后解压zip文件，将会得到一个img文件。

### 将镜像写入TF卡中
Windows可以使用[Win32DiskImager](https://sourceforge.net/projects/win32diskimager/)写入。

1.运行Win32DiskImager，然后点击那个文件夹图标（浏览）

2.找到你放系统镜像的位置，然后device(设备）那选择内存卡盘符

3.点击write，进行写入，等待写入完全。

## 二、设置pi
将TF卡插入树莓派的插槽中，并连接网线和电源
### 1.ssh登录
登录路由器，查看树莓派的IP，

然后就可以通过ssh登录到PI了（Windows系统可以使用PuTTY）

初始用户名：pi
密码：raspberry

### 2.设置语言，时区
设置语言

    sudo raspi-config

上下方向键移动，选5
![](https://img.lidong.me/2016/07/omfG8WzFS6t4.png)

再选I1 Change Locale
![](https://img.lidong.me/2016/07/ZsFG9nW2dagP.png)

移动到接近最后
空格键选择zh_CN.UTF-8 UTF-8，回车键确认
![](https://img.lidong.me/2016/07/fT7HmTRgoS78.png)
 设置时区
和上面差不多，就不截图了

    sudo raspi-config

上下方向键移动，选5
上下方向键移动，选I2  Change Timezome
上下方向键移动，选择 Asia
空格键，选择 Shanghai 或 Hong_Kong，
回车确认～

执行`exit`退出登录,之后再ssh登录，提示信息就是中文了~

![](https://img.lidong.me/2016/07/qfJhT5z5OhvN.png)

### 3.修改镜像源
（科大的文档没有更新，那是老版的）

备份 `/etc/apt/sources.list` 和 `/etc/apt/sources.list.d/raspi.list`

    sudo mv /etc/apt/sources.list /etc/apt/sources.list.backup
    sudo mv /etc/apt/sources.list.d/raspi.list /etc/apt/sources.list.d/raspi.list.backup

编辑`sudo vi /etc/apt/sources.list`文件，文件中写入

    deb http://mirrors.ustc.edu.cn/raspbian/raspbian/ jessie main non-free contrib


 编辑`sudo vi /etc/apt/sources.list.d/raspi.list`文件，文件中写入

    deb http://mirrors.ustc.edu.cn/archive.raspberrypi.org/ jessie main ui
### 4.更新

    sudo apt-get update
    sudo apt-get upgrade

### 5.安装vim编辑器
默认的vi编辑器不是完整的，有些操作不好用，再重新安装一下vim

    sudo apt-get install vim

## 三、更新记录

1. 2016-07-30 首次发布
2. 2017-05-08 修改地址镜像地址错误

## 四、参考链接
1. [Raspberry Pi 使用科大镜像源](https://xusiwei.github.io/post/2016/raspberry-pi-use-ustc-mirror/)
2. [科大Raspbian镜像使用帮助](https://lug.ustc.edu.cn/wiki/mirrors/help/raspbian)
3. [官方文档](https://www.raspberrypi.org/documentation/)
4. [官方config-text说明](https://www.raspberrypi.org/documentation/configuration/config-txt.md)






