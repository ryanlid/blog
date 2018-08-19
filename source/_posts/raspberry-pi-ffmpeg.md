---
title: raspberrypi 安装 ffmpeg
date: 2018-08-19 21:10:11
updated: 2018-08-19 21:10:11
tags:
- raspberrypi
- ffmpeg
category:
description:
---

## 安装编译x264

``` sh
cd ~
git clone git://git.videolan.org/x264
# git clone https://gitea.lidong.me/mirrors/x264.git
cd x264
./configure --host=arm-unknown-linux-gnueabi --enable-static --disable-opencl
make -j4
sudo make install
```
> `make -j4` 表示使用4线程编译，raspberry pi 3 为四核 CPU，使用4线程可以加快编译速度
## 安装 FFMPEG

```sh
cd ~
git clone git://source.ffmpeg.org/ffmpeg.git
cd ffmpeg
./configure --arch=armel --target-os=linux --enable-gpl --enable-libx264 --enable-nonfree
make -j4
sudo make install
```

## 配置 ldconfig

完成上述步骤后，直接运行命令 ffmpeg 会报错：`ffmpeg: error while loading shared libraries: libx264.so.157: cannot open shared object file: No such file or directory。`

找不到对应库，库文件存放在 /usr/local/lib 这个目录，这里将目录添加到配置文件中，命令行如下：

```
vim /etc/ld.so.conf
```

添加 `/usr/local/lib`，最终文件内容为：

```conf  ld.so.conf
include /etc/ld.so.conf.d/*.conf
/usr/local/lib
```

运行 ldconfig 使配置生效：

```shell
sudo ldconfig
```

这时输入 `ffmpeg` 命令即可看到类似下面的输出，则表示已经安装成功。

![raspberrypi-ffmpeg](https://static.lidong.me/upload/images/_Zwvgbb_S.png)


## 更新记录

1. {{ date.format('YYYY/M/D H:mm:ss') }} 首次发布

## 参考链接

1. [install ffmpeg on Raspberry Pi](https://gist.github.com/dudewheresmycode/154df74824aadef2b8c1b8a6bccb66c7)
2. <https://segmentfault.com/a/1190000014681834>