---
title: PWA 备忘录
date: 2019-07-23 19:58:21
updated: 2019-07-23 19:58:21
tags:
- pwa
- service worker
category:
description:
---

<!-- more -->

### 什么是 PWA

### Wab App Manifest

`<link rel="stylesheet" href="/manifast.json">`

```json
{
  "name": "PWA Simple",
  "short_name": "PWASimple",
  "start_url": "/index.html",
  "display": "standalone",
  "background_color": "#FFE9D2",
  "theme_color": "FFE1C4",
  "orientation": "portrait-primary",
  "icons": [
    {
      "src": "/icons/icons-72x72.png",
      "type": "images/png",
      "sizes": "72x72"
    },
    {
      "src": "/icons/icons-96x96.png",
      "type": "images/png",
      "sizes": "96x96"
    },
    {
      "src": "/icons/icons-128x128.png",
      "type": "images/png",
      "sizes": "128x128"
    },
    {
      "src": "/icons/icons-144x144.png",
      "type": "images/png",
      "sizes": "144x144"
    }
  ]
}
```

### iOS 支持

```html
<!-- iOS support -->
<link rel="apple-touch-icon" href="/icons/icon-96x96.png" />
<meta name="apple-mobile-web-app-status-bar" content="#aa7700" />
```

### Service Worker

```flow
op1=>operation: register the service worker (sw.js)
op2=>operation: install event
缓存 App Shell 等关键静态资源和 html (保证能缓存的内容能在离线状态跑起来)
op3=>operation: service worker becomes active
op4=>operation: active event
激活的状态，这里就做一做老的缓存的清理工作
op5=>operation: service worker "listens" for event

op1->op2->op3->op4->op5
```

> 当第一次加载页面时，Service Worker 还没有激活，所以不会处理任何请求，只有当它安装和激活后，才能控制在其范围的一切。这意味着，只有刷新页面或导航到另一个页面，Service Worker 内的逻辑才会启动

### 注册 Service Worker

```js app.js
// register the service worker
if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/sw.js")
    .then(reg => console.log("service worker registered", reg))
    .catch(err => console.log("service worker not registered", err));
}
```

### Service Worker 安装事件

在安装过程中预缓存

```js sw.js
// install service worker
self.addEventListener("install", evt => {
  evt.waitUntil(
    // 使用指定的缓存名称打开缓存
    caches
      .open(staticCacheName)
      // 将文件添加到缓存中
      .then(cache => {
        cache.addAll([
          "/",
          "/index.html",
          "/about.html",
          "manifest.json",
          "/css/style.css"
        ]);
      })
  );
});
```

> 如果所有的文件都成功缓存，Service Worker 便会安装成功。如果有任何文件下载失败，那么安装过程也会随之失败。

检查传入的请求 URL 是否匹配当前缓存已有内容

```js sw.js
// fetch event
self.addEventListener("fetch", function(event) {
  event.respondWith(
    // 检查传入的请求URL是否匹配当前缓存已有内容
    caches.match(event.request).then(function(response) {
      // 如果有 response 并且它不是未定的或空的，就返回
      // 否则如往常一样继续，通过网络获取内容
      if (response) {
        return response;
      }
      return fetch(event.request);
    })
  );
});
```

拦截请求并缓存，适用于网页中动态链接

```js
var cacheName = "hello";

self.addEventListener("fetch", function(event) {
  event.respondWith(
    // 检查传入的请求URL是否匹配当前缓存已有内容
    caches.match(event.request).then(function(response) {
      // 如果有response并且它不是未定的或空的，就返回缓存内容
      if (response) {
        return response;
      }

      // 复制请求，请求是一个流，只能使用一次
      var requestToCache = event.request.clone();
      return fetch(requestToCache).then(function(response) {
        // 如果请求失败或者服务器响应了错误代码，则立即返回错误信息
        if (!response || response.status !== 200) {
          return response;
        }

        var requestToCache = response.clone();
        caches.open(cacheName).then(function(cache) {
          cache.put(requestToCache, requestToCache);
        });
        return response;
      });

      // 否则如往常一样继续，通过网络获取内容
      return fetch(event.request);
    })
  );
});
```

### Service Worker 更新

为了能让 Service Worker 做到实时更新，必须要解决 Service Worker 文件 sw.js HTTP 缓存的问题
服务端设置 Cache-Control

```nginx nginx.conf
location ~ \/sw\.js$ {
    add_header Cache-Control no-store;
    add_header Pragma no-cache;
}
```

## 更新记录

1. {{ date.format('YYYY/M/D H:mm:ss') }} 首次发布

## 参考链接

1. [如何优雅的为 PWA 注册 Service Worker](https://zhuanlan.zhihu.com/p/28161855)
2. [Service Worker | Google Developers](https://developers.google.com/web/fundamentals/primers/service-workers/)
3. [Service Worker 生命周期 | Google Developers](https://developers.google.com/web/fundamentals/primers/service-workers/lifecycle)
4. [谨慎处理 Service Worker 的更新](https://zhuanlan.zhihu.com/p/51118741)
