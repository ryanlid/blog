---
title: 安装 dropbox 同步备份主机数据
tags:
  - dropbox
  - 备份
  - linux
date: 2018-01-22 02:45:39
updated: 2018-01-22 02:45:39
category:
description:
---

欢迎访问新站点: <https://www.yidiankuaile.com/post/linux-command-dropbox-backup>

之前就是用dropbox同步备份了，没有记录。现在迁移主机，都不知道怎么操作了，重新整理记录一下。😓

<!-- more -->

操作很简单，Dropbox提供了文档和相关工具，这里记录一下，操作过程，中间一部分内容来自dropbox文档。

<pre>
环境：
1.centos 7.0
2.阿里云香港
（如果是土啬内主机，那就别用 Dropbox 了，瞎折腾）
</pre>

> 如果之前没有注册过Dropbox，欢迎使用我的推荐码注册，使用后，我俩各多得500MB空间  [https://db.tt/Mcf2xYeC](https://db.tt/Mcf2xYeC)

## 通过命令行安装 Dropbox

32-bit:

```
cd ~ && wget -O - "https://www.dropbox.com/download?plat=lnx.x86" | tar xzf -
```

64-bit:

```
cd ~ && wget -O - "https://www.dropbox.com/download?plat=lnx.x86_64" | tar xzf -
```

接着，从新建的 .dropbox-dist 文件夹运行 Dropbox 守护程序。

```
~/.dropbox-dist/dropboxd
```

首次在服务器上运行 Dropbox，系统会生成一个授权链接，浏览器打开链接登录账号，就可以将服务器中Dropbox与账号关联了。操作完成后，程序会在主目录中创建 Dropbox 文件夹。

下载这个 [Python 脚本](https://www.dropbox.com/download?dl=packages/dropbox.py)，可以通过命令行控制 Dropbox。

## 准备同步

### 添加软链接

如果文件夹是已经同步过，务必在同步开始前创建文件夹软连接，以减少不必要的操作。

```
ln -s 想要同步文件夹路径 dropbox同步盘的路径
```

如：

```
ln -s /var/www ~/Dropbox/www
```

### 添加shell别名

可以设置成任意你喜欢的别名，我设置成 `drp`

```
alias drp='python ~/dropbox.py'
```

## 同步

### 开启同步

```
drp start
```

### 查看同步状态

```
drp status
```

### 设置开机自启动

```
drp autostart
```

### 排除目录

在开始开启同步后，可以尽快添加排除目录，毕竟不是所有文件都要同步到主机上。就不浪费空间和流量了。Dropbox不能在没有开始同步提前设置排除目录，这个不是太好，或许是python脚本的问题，没细看 🙂

```
drp exclude add Apps
```

> 我的完整排除目录查看 [secret gist](https://gist.github.com/ryanlid/secret), 不公开的哈 🙂

## 参考链接

1.[linux 安装 Dropbox](https://www.dropbox.com/zh_CN/install-linux)

## 更新记录

1. {{ date.format('YYYY/M/D H:mm:ss') }} 首次发布

## 参考链接
