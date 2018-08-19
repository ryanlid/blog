---
title: 重新配置WordPress
tags:
  - docker
  - wordpress
date: 2018-01-10 01:25:24
updated: 2018-01-10 01:25:24
category:
description:
---

查看上一篇内容：[使用Docker安装WordPress](https://lidong.me/blog/install-wordpress-with-docker/)

不到黄河不死心，早先就想把Wordpress部署在子目录，前几天把捣鼓了差不多一天都没弄好，今天有捣鼓了大约三四个小时，如您所见，终于弄成现在这个样子了。

<span id="more-143"></span>

这次主要做了：

*   将Wordpress部署在了子目录。
*   还是用回原来的域名，[https://lidong.me](https://lidong.me) 这个域名就专门用来写点文章，整理资料，用别的域名捣鼓其他东西吧。

## 重点配置：

### 1.修改nginx.conf

在 `nginx.conf`中添加下面这段
```
location /wordpress/ {
  proxy_set_header Host $host;
  proxy_set_header X-Real-IP $remote_addr;
  proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
  proxy_set_header X-Forwarded-Proto $scheme;
  proxy_pass http://wordpress:80/; # &lt;-- mind the trailing slash!
}
```

完整配置查看[Github](https://github.com/ryanlid/nginx-conf/blob/b6d3ecff36727930978676dbd9ed93e6d9c31f08/www.lidong.me.conf#L24-L30)

### 2.修改 wp-config.php

在 `wp-config.php` 中添加下面的代码

```
// 写上篇文章就加上了，为了HTTPS访问
$_SERVER['HTTPS'] = '1';
$_SERVER['HTTP_HOST'] = $_SERVER['HTTP_X_FORWARDED_HOST'];

// 定义网站域名，在Wordpress后台修改或数据库修改也可以
define('WP_HOME', 'https://lidong.me/wordpress');
define('WP_SITEURL', 'https://lidong.me/wordpress');

// 修复后台链接错误
$_SERVER['REQUEST_URI'] = str_replace("/wp-admin/", "/wordpress/wp-admin/", $_SERVER['REQUEST_URI']);
```
### 3.修改 .htaccess

完成上面的配置，如果使用固定链接，文章详情可能无法访问，出现 internal server error 的500错误，查看日志提示 `Request exceeded the limit of 10 internal redirects due to probable configuration error. Use 'LimitInternalRecursion' to increase the limit if necessary.` 大概意思是重定向次数太多。修改 `.htaccess` ，找到一个解决办法，内容在gist上，用作者提供的new `.htaccess` 替换原来就可以。

<div class="gist-oembed" data-gist="effa1ee0f20ab9b8886a209c95b719c0.json"></div>

⚠️ 注意：每次在Wordpress的设置&#8211;常规选项等页面，修改保存操作，Wordpress都会自动修改 `.htaccess` 的文件，还原我们设置，导致页面访问出错。所以修改了设置后，要注意检查页面是否访问正常～～

<small>别问为什么，我也不知道为什么[摊手]</small>，查看原来作者的 [Gist](https://gist.github.com/JustThomas/141ebe0764d43188d4f2)


## 更新记录

1. {{ date.format('YYYY/M/D H:mm:ss') }} 首次发布

## 参考链接：

1.  [https://wordpress.stackexchange.com/questions/191747/how-can-i-have-nginx-serve-wordpress-at-blog](https://wordpress.stackexchange.com/questions/191747/how-can-i-have-nginx-serve-wordpress-at-blog)
2.  [https://yuji.wordpress.com/2010/03/08/nginx-wordpress-proxy-subdirectory-to-wordpress-subdomain/](https://yuji.wordpress.com/2010/03/08/nginx-wordpress-proxy-subdirectory-to-wordpress-subdomain/)
3.  [https://docs.j7k6.org/wordpress-nginx-proxy-subdirectory/](https://docs.j7k6.org/wordpress-nginx-proxy-subdirectory/)
4.  [http://www.ur-ban.com/2015/07/27/nginx-proxy_pass-wordpress-in-a-sub-directory/](http://www.ur-ban.com/2015/07/27/nginx-proxy_pass-wordpress-in-a-sub-directory/)
