---
title: 通过 Nginx 使用 Google Analytics
date: 2018-10-05 23:53:53
updated: 2018-10-05 23:53:53
tags:
- nginx
- google analytics
category:
description:
---

欢迎访问新站点: <https://www.yidiankuaile.com/post/nginx-google-analytics>

通常是通过引用 analytics.js 来使用 Google Analytics 。 但是这个方案缺点是：客户端安装 Adblock 等扩展，屏蔽了Google Analytics，导致统计信息偏差。

通过将统计转移到后端发送，则可以避免统计被扩展拦截的可能，同时也提高浏览器访问页面的速度。

<!-- more -->

## 配置

```conf
userid on;
userid_name cid;
userid_domain [domain];
userid_path /;
userid_expires max;

location @tracker {
    resolver 100.100.2.138 8.8.8.8 233.5.5.5 valid=3600s;
    proxy_method GET;
    proxy_pass https://www.google-analytics.com/collect?v=1&tid=[UA-XXXXXXXX-Y]&$uid_set$uid_got&t=pageview&dh=$host&dp=$uri&uip=$remote_addr&dr=$http_referer&z=$msec;
    proxy_set_header User-Agent $http_user_agent;
    proxy_pass_request_headers off;
    proxy_pass_request_body off;
}

location / {
    try_files $uri $uri/ =404;
    post_action @tracker;
}
```
> Ng­inx 默认自带的 userid 模块可以用于标记各个用户，而 post_ac­tion 配置项可以在 Ng­inx 收到的请求处理完成后向某处发送一个异步的 Get 请求，这个请求会附带原始请求的 ref­erer 与 user-agent

> userid 模块将会在用户访问时检查 cook­ies 中是否有 cid 项，如果没有 cid 项，则会在返回的 header 中加入 set-cook­ies 头标记这个用户，并将$uid_set 变量设定为 cid=XXXXXX 这一形式，将$uid_got 变量设定为空。如果有 cid 项，则将$uid_got 变量设定为 cid=XXXXXX 这一形式，将$uid_set 变量设定为空。于是在@tracker 部分，上述变量会将$uid_set$uid_got 填充为 cid=XXXXXX。

遵守 DNT (Do Not Track) 的写法

```
location / {
    try_files $uri $uri/ =404;
    if ($http_dnt != 1) {post_action @tracker;}
}
```

完整的配置，查看我的 [Github](https://github.com/ryanlid/nginx-conf/blob/09eca098cfc8116a4d7e8105354480291aab0c35/www.lidong.me.conf)


## Tips
和相较于参考文章，我添加 `resolver 100.100.2.138 8.8.8.8 233.5.5.5 valid=3600s;`  这个是用于dns解析 `www.google-analytics.com` 的，在调试过程中：如果不添加 `resolver` ， 在 `proxy_pass` 填写 ip 测试没有问题，填写域名测试就接收不到数据了。

更多内容查看参考链接～～

## 更新记录

1. {{ date.format('YYYY/M/D H:mm:ss') }} 首次发布

## 参考链接

1. [Ng­inx 内配置 Google An­a­lyt­ics 指南](https://darknode.in/network/nginx-google-analytics/)
2. [通过 Nginx 使用 Google Analytics 服务](https://imlonghao.com/36.html)
3. [使用 Measurement Protocol](https://developers.google.com/analytics/devguides/collection/protocol/v1/devguide)