---
title: l2tp VPN 搭建
tags:
  - l2tp
  - vpn
date: 2018-04-06 12:43:04
updated: 2018-04-06 12:43:04
category:
description:
---

因为在路由器上需要用到，这里记录一下VPN安装方式。

<!-- more -->

```shell
wget https://raw.githubusercontent.com/teddysun/across/master/l2tp.sh
chmod +x l2tp.sh
./l2tp.sh
```
> 一些可能用到的操作
>
>l2tp -a (Add a user)
>
>l2tp -d (Delete a user)
>
>l2tp -l (List all users)
>
>l2tp -m (Modify a user password)
>
>more https://teddysun.com/448.html

更多详情查看。原作者的 [GitHub](https://github.com/teddysun/across/)

## 更新记录

1. {{ date.format('YYYY/M/D H:mm:ss') }} 首次发布

## 参考链接
