---
title: nginx安装、升级
date: 2017-03-18 01:39:34
updated: 2017-03-18 01:39:34
tags:
- nginx
- linux
category:
---

欢迎访问新站点: <https://www.yidiankuaile.com/post/nginx>

## 依赖安装

```
sudo yum -y install pcre-devel
sudo yum -y install zlib-devel
```
<!-- more -->
### 下载openssl
使用最新版的openssl对nginx进行编译，

```
wget -c https://www.openssl.org/source/openssl-1.0.2k.tar.gz

tar zxf openssl-1.0.2k.tar.gz
mv openssl-1.0.2k/ openssl
```

### 下载ngx_http_substitutions_filter_module
用于反向代理中的字符替换(如果nginx不用于反向代理，可选)

```
wget -c https://github.com/yaoweibin/ngx_http_substitutions_filter_module/archive/master.zip

unzip master.zip
```
解压之后文件夹为 `ngx_http_substitutions_filter_module-master`

## 安装nginx
### 下载nginx

 ```
 wget -c http://nginx.org/download/nginx-1.11.10.tar.gz
 ```

### 编译安装

```
cd nginx-1.11.10/
./configure --with-http_v2_module --with-http_ssl_module --with-openssl=./../openssl/ --add-module=./../ngx_http_substitutions_filter_module-master/


make
sudo make install
```

------分割线-----(如升级安装，会用到)
## 升级安装
### 下载
同上
### 编译
同上（去掉最后一步，`make install` ）

```
cd nginx-1.11.10/
./configure --with-http_v2_module --with-http_ssl_module --with-openssl=./../openssl/ --add-module=./../ngx_http_substitutions_filter_module-master/

make
```

重命名保存进程号的文件

```
sudo mv /usr/local/nginx/sbin/nginx /usr/local/nginx/sbin/nginx.old
```

复制编译后的 `objs/`目录下的 `nginx` 到 `sbin` 目录下

```
sudo cp objs/nginx /usr/local/nginx/sbin/
```

测试复制文件及配置文件的是否正确

```
sudo /usr/local/nginx/sbin/nginx -t
```

让nginx把nginx.pid文件修改成nginx.pid.oldbin

```
sudo kill -USR2 `cat /usr/local/nginx/logs/nginx.pid`(发送平滑升级信号将旧的nginx.pid文件添加后缀nginx.pid.oldbin)
```
停止老版本运行

```
sudo kill  -WINCH(平缓停止worker process) `cat /usr/local/nginx/log/nginx.pid.oldbin
sudo kill -QUIT `cat /usr/local/nginx／log/nginx.pid.oldbin`
```
升级完成了，最后在看一下升级后的版本

```
sudo /usr/local/nginx/sbin/nginx -v
// nginx: nginx version: nginx/1.11.10
```


## 参考
[nginx之平滑升级详解](http://blog.csdn.net/u010391029/article/details/48658399)


