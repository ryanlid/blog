---
title: 每日签到
date: 2019-08-27 21:34:42
updated: 2019-08-27 21:34:42
tags:
- pwa
- 小作品
category:
description:
---

为了方便记录每天签到领取积分的小事，避免遗漏，或者重复操作，做了一个小工具

<!-- more -->

项目地址： https://qian.lidong.me
源码地址： https://github.com/ryanlid/qiandao

扫码试用：
<img src="https://api.oonnnoo.com/qr/qrcode?text=https%3A%2F%2Fqian.lidong.me">

功能点：
1. 收集了一些 常用APP 签到
2. 通过 URL（URL schemes）唤起 APP
3. 通过比较当前时间与本地保存的时间戳，判断是否为当天首次开启，判断是否需要更新页面上的签到数据，确保页面数据每天有且只更新一次
4. 使用 PWA 技术，让网页可以离线使用，可以添加桌面图标

几点问题：

1. 因为系统限制在iOS设备中将页面添加到桌面图标后，通过桌面图标无法唤起其他 APP。android设备没有这个问题。
2. 页面加载后，无法及时获取更新页面，待优化。

TODO:

1. 可以根据偏好，选择每日签到的 APP 列表
2. 优化使用了 PWA 技术的页面更新
3. 使用 webauth webshare 使用一些有趣的尝试。

## 更新记录

1. {{ date.format('YYYY/M/D H:mm:ss') }} 首次发布

## 参考链接
