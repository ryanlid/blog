---
title: Ubuntu 16.04 搭建 Gitlab
date: 2016-09-11 19:11:25
tags:
- ubuntu
- gitlab
---

Gitlab 可以用来搭建自己的git仓库
<!--more-->
## 安装Gitlab
官方推荐配置

- 2 cores 以上
- 2GB of RAM 以上

如果想省一点，1 cores and 1GB of RAM也是可以安装的（这应该是最低配置了，再低就跑不动了），如果用这样配置必须使用虚拟内存 swap [链接在此](https://lidong.me/blog/linux-enable-swap/) 。

> ⚠️ 注意：安装时，请g.lidong.me替换成你的域名

1. 安装依赖环境

        sudo apt-get update
        sudo apt-get install ca-certificates curl openssh-server postfix

2. 安装 Gitlab
   
        cd /tmp
        curl -LO https://packages.gitlab.com/install/repositories/gitlab/gitlab-ce/script.deb.sh

        sudo bash /tmp/script.deb.sh
    
        sudo apt-get install gitlab-ce
3. 编辑 `/etc/gitlab/gitlab.rb` 配置文件

        sudo vim /etc/gitlab/gitlab.rb
    
    修改
    
        external_url 'http://g.lidong.me' 
    
    使配置文件生效
    
        sudo gitlab-ctl reconfigure
4. 安装完成  
http://g.lidong.me 
    
## 配置Let's Encrypt

安装 Let's Encrypt 客户端
    
    sudo apt-get update
    sudo apt-get install letsencrypt
    
准备 Let's Encrypt 验证 WEB 目录

    sudo mkdir -p /var/www/letsencrypt
   
编辑gitlab.rb配置文件

    sudo vi /etc/gitlab/gitlab.rb
   
将下面配置文件加入到添加 `gitlab.rb` 中

    ['custom_gitlab_server_config'] = "location ^~ /.well-known { root /var/www/letsencrypt; }"

            
是配置文件生效

    sudo gitlab-ctl reconfigure

获取 Let's Encrypt 证书
(将g.lidong.me替换成你的域名)

    sudo letsencrypt certonly -a webroot -w /var/www/letsencrypt -d g.lidong.me
    
编辑`gitlab.rb`配置文件

    sudo vi /etc/gitlab/gitlab.rb
将URL修改为以https开头
    
    external_url 'https://g.lidong.me'

配置nginx部分，添加你的证书路径

    nginx['redirect_http_to_https'] = true
    nginx['ssl_certificate'] = "/etc/letsencrypt/live/g.lidong.me/fullchain.pem"
    nginx['ssl_certificate_key'] = "/etc/letsencrypt/live/g.lidong.me/privkey.pem"

使配置文件生效

    sudo gitlab-ctl reconfigure
    
这时你访问你的网站时候，将自动重http跳转到https。

    http://g.lidong.me
    
## 配置Let's Encrypt自动更新

在 `sudo crontab -e` 加入以下内容

    0 0 1 * * /usr/bin/letsencrypt renew >> /var/log/le-renew.log
    5 0 1 * * /usr/bin/gitlab-ctl restart nginx

这样Let's Encrypt证书会每月自动更新

## 更新日志

- 2016年09月11日 首次发布
- 2016年12月01日 添加Let's Encrypt自动更新

参考链接：
  
1. [GitLab 下载](https://about.gitlab.com/downloads/)  

2. [How To Install and Configure GitLab on Ubuntu 16.04](https://www.digitalocean.com/community/tutorials/how-to-install-and-configure-gitlab-on-ubuntu-16-04)
    
3. [How To Secure GitLab with Let's Encrypt on Ubuntu 16.04](https://www.digitalocean.com/community/tutorials/how-to-secure-gitlab-with-let-s-encrypt-on-ubuntu-16-04)


