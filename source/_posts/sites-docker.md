---
title: 使用Docker部署
date: 2017-01-18 12:09:40
updated: 2017-01-18 12:09:40
tags:
- docker
- docker-compose
category:
---

欢迎访问新站点: <https://www.yidiankuaile.com/post/sites-docker>

使用docker部署主要是为了方便迁移
<!-- more -->
## 缘由
从去年开始一直都是使用的是linode VPS，实际使用量也没多大，每月10刀，感觉有点贵，就很想把它上东西迁移到其他的vps上，然后把linode的退了。再一想既然要迁移，不如开始启用docker，再以后要迁移，会容易一些，出现意外恢复备份也会容易一些。

于是就在就倒腾了docker，尝试将网站通过docker部署。为了再巩固docker的使用方法，前一段时间专门借到一本叫《docker全指南》的书。

## 部署结构
目前裸域名的内容有三部分：首页及其目录下的少量页面，Blog，Wiki

所以部署的情况：

1. 使用一个Nginx container作为入口
2. 首页和blog均为静态文件，将目录映射到nginx容器中，直接访问。
3. Wiki是使用dokuwiki搭建，需要PHP运行环境，使用 [onnno/dokuwiki](https://hub.docker.com/r/onnno/dokuwiki/) 镜像，这个镜像是在istepanov/dokuwiki基础上进行修改，单独运行一个container，然后通过入口的Nginx反向代理访问。

## 管理
使用docker-compose对容器进行管理。

配置文件内容使用git进行记录。
https://github.com/oonnnoo/onoservers


