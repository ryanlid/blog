---
title: 使用 travis-ci 自动化部署 hexo
date: 2018-07-16 22:18:39
updated: 2018-07-16 22:18:39
tags:
  - hexo
  - travis-ci
  - ci
category:
description:
---

以前有使用 hexo 记录 blog ，但不能在线修改，每次写完都要本地构建、提交、上传，操作繁琐， 遂弃之，今天重新尝试使用 hexo ，不过这次配置好了 CI，简化日常操作，现在记录一下操作步骤。

<!-- more -->

## 配置 Acess Token

我使用的是https://travis-ci.org, 免费版只能用于开源项目，所以不能使用ssh-key来认证的（常规方法，貌似通过奇技淫巧也是可以，没具体操作），所以只能使用 Personal Access Token。

管理自己 Personal Access Token 的地方在 Settings 中，链接地址：<https://github.com/settings/tokens> ,在最小权限原则下，可以授予 `public_repo` 权限即可。

![Personal-Access-Token-Permissions](https://static.lidong.me/upload/images/HJXs1HqQm.png)

## 添加环境变量

将 access token 添加到 Travis CI环境变量中，添加之后，就可以在配置文件中使用 `$环境变量` 指代 access token，从而不用把重要的密钥提交到代码中

![travis-ci-setting](https://static.lidong.me/upload/images/rJRxrLcXQ.png)

## 编写travis.yaml

> 代码放在Gist上，如无法查看，请自行想办法 😜

Travis CI 将安装配置文件设置执行

{% gist cb1e1aca4f2914b2f550599dc09510d9 %}

在部署完后添加将代码提交到gh-pages分支

{% gist 2a5c496e38491ab90fae86ad1fc0a5aa %}

## 说明

目前通过 travis-ci 自动部署到了 GitHub Pages 上 , https://ryanlid.github.io/blog/ ，但主站还是部署在我的云主机上，将代码同步到我云主机上这一步还是通过手动操作，后期将准备通过 webhook，触发自动部署

## 更新记录

1. {{ date.format('YYYY/M/D H:mm:ss')}} 首次发布

## 参考链接

1. [使用 Travis CI 自动部署 Hexo 博客 - Blessing Studio](hlttps://blessing.studio/deploy-hexo-blog-automatically-with-travis-ci/)
2. [使用 Travis CI 自动部署 Hexo](https://www.jianshu.com/p/5e74046e7a0f)
3. [使用 Travis 自动部署 Hexo 到 Github 与 自己的服务器](https://segmentfault.com/a/1190000009054888)
