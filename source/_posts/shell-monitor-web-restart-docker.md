---
title: 通过shell监控网页 无法访问就自动重启Docker
tags:
  - docker
  - shell
date: 2018-01-25 21:32:41
updated: 2018-01-25 21:32:41
category:
description:
---

最近，不知道是 MySQL Container 的问题，还是迁移到阿里云，阿里主机的问题，抑或网络爬虫，抓取频繁，挂掉了？反正隔个两天，CPU占用100%，MySQL Container运行出错，导致我的 Wordpress 无法访问。我了个擦。

<!-- more -->

## 正文

自身水平不行，排查不出问题，就来个简单粗暴的，直接自动重启docker。于是学着做了一个监控脚本，隔一段时间请求一次页面，访问不了就自动重启 Docker。仅仅重启一个 Container貌似也是不行的。不过现在这样粗暴的方式会导致所有的 Container 都会重启一次 。😂

因为我在启动 Container 时设置了 `restart：always`，所以重启 Docker 之后，Container 就会自动启动，就不用自己写脚本去控制了。

脚本大致流程是：每隔10分钟运行一次，访问网站，如果发现返回状态码不是200，直接重启docker，并记录监控日志、出错日志。哈哈，参考别人的。

<div class="gist-oembed" data-gist="a4aa182bfff3abf2df7cfc5cc07db289.json"></div>

[查看Gist](https://gist.github.com/a4aa182bfff3abf2df7cfc5cc07db289)

## 更新记录

1. {{ date.format('YYYY/M/D H:mm:ss') }} 首次发布

## 参考链接

1.[linux上监控tomcat down掉后自动重启tomcat](https://www.cnblogs.com/ddxueyu/p/6209932.html)
