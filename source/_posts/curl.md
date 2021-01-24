---
title: curl
date: 2017-05-09 22:53:07
updated: 2017-05-09 22:53:07
tags:
- curl
- 命令
category:
---

欢迎访问新站点: <https://www.yidiankuaile.com/post/curl>
## 命令参数

显示输出内容

```
curl http://example.com
```

`-i` 输出响应头信息和内容

```
curl -i http://example.com
```

`--head` `-I` 输出响应头信息

```
curl --head http://example.com
curl -I http://example.com
```

`-o` 输出内容到文件，另存为

```
curl http://example.com/hello.txt -o hello.txt
```

`-O` 输出内容到文件，保持原文件名

```
curl -o http://example.com /hello.txt
```

`-d` post请求中的data

post请求

```
curl -d "title=hello&&body=hello world" http://
```

`-X` 设置请求方式

put请求

```
curl -X put -d "title=hello&&body=hello world" http://
```

`-L`  跟踪跳转（Follow redirects）

```
curl http://google.com
curl -L http://google.com
```

`-u` 上传

```
curl -u user@example.com:123456 -T hello.txt ftp://ftp.expample.com
```

下载

```
curl -u user@example.com:123456 -o hello.txt ftp://ftp.expample.com/hello.txt
```
## 更新记录

1. 2017-05-09 首次发布

## 参考链接
https://www.youtube.com/watch?v=7XUibDYw4mc



