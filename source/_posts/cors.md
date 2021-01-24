---
title: 跨站资源共享 CORS 跨域配置
date: 2019-04-20 17:28:43
updated: 2019-04-20 17:28:43
tags:
- 跨域
- cors
- nginx
- php
category:
description:
---

欢迎访问新站点: <https://www.yidiankuaile.com/post/cors-settings>

跨域资源共享(CORS) 是一种机制，它使用额外的 HTTP 头来告诉浏览器，让运行在一个 origin (domain) 上的 Web 应用被准许访问来自不同源服务器上的指定的资源。当一个资源从与该资源本身所在的服务器不同的域、协议或端口请求一个资源时，资源会发起一个跨域 HTTP 请求。具体参考 [MDN 文档](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Access_control_CORS)

<!-- more -->

下面记录一下如何配置 CORS

## Nginx

可以在 `http` 或 `server` 或 `location` 中添加 `add_header`

1. 允许单个域名跨域访问

   ```conf
   add_header    "Access-Control-Allow-Origin" "http://example.com";
   add_header    "Access-Control-Allow-Methods" "GET, POST, OPTIONS";
   ```

2. 允许多个域名跨域访问

   ```conf
   if ($http_origin ~ "^https?://(a.example.com|b.example.com)") {
      add_header    "Access-Control-Allow-Origin" $http_origin;
      add_header    "Access-Control-Allow-Methods" "GET, POST, OPTIONS";
   }
   ```

3. 允许所有域名跨域访问

   ```conf
   add_header    "Access-Control-Allow-Origin" "*";
   add_header    "Access-Control-Allow-Methods" "GET, POST, OPTIONS";
   ```

## PHP

在 `server.php` 文件头部添加如下代码：

1. 允许单个域名跨域访问

   ```php
   header('Access-Control-Allow-Origin:http://example.com');
   ```

2. 允许多个域名跨域访问

   ```php
   $origin = isset($_SERVER['HTTP_ORIGIN'])? $_SERVER['HTTP_ORIGIN'] : '';

   $allow_origin = array(
      'http://a.example.com',
      'https://a.example.com',
      'http://b.example.com',
      'https://b.example.com'
   );

   if(in_array($origin, $allow_origin)){
      header('Access-Control-Allow-Origin:'.$origin);
   }
   ```

3. 允许所有域名访问

   ```php
   header('Access-Control-Allow-Origin:*');
   ```

## 更新记录

1. {{ date.format('YYYY/M/D H:mm:ss') }} 首次发布

## 参考链接

1. [Module ngx_http_headers_module](http://nginx.org/en/docs/http/ngx_http_headers_module.html#add_header)
2. [PHP 通过 Access-Control-Allow-Origin 跨域](https://www.jianshu.com/p/06007a4213d7)
