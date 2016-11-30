---
title: 使用dnsmasq搭建dns服务
date: 2016-10-10 14:14:00
tags:
- dnsmasq
- dns
---

这两天看YouTube比较多，但是代理网速不咋地，找了个可以访问IP，试试用hosts看，会不会好一点，但是YouTube的视频源地址是rx---sn-xxxxxxx.googlevideo.com,xxx部分不定，也就是说域名有很多，不过Google就是有那么点diao，把很多域名解析到同一个IP也是可以访问的。但是hosts文件本身不支持通配符，只好另辟蹊径：在本地搭建一个DNS。正好dnsmasq，使用简单，还支持通配符。
<!-- more -->
### 1. 安装dnsmasq

        brew install dnsmasq

### 2. 配置

新建文件/usr/local/etc/resolv.dnsmasq.conf，文件中用来指定上游域名解析服务器的地址，可以添加多个地址：

    nameserver  119.29.29.29
    nameserver  8.8.8.8
        
拷贝一份模版配置文件，并对其修改：
    
    cp /usr/local/opt/dnsmasq/dnsmasq.conf.example /usr/local/etc/dnsmasq.conf
    
修改配置文件

    # 引入刚刚的域名服务器文件
    resolv-file=/usr/local/etc/resolv.dnsmasq.conf
    # 设置dns服务监听地址，设置本地地址或局域网地址
    # 如果使用局域网地址，局域网中其他机器将DNS服务修改这台电脑地址，就可以使用这台电脑的DNS服务，
    # 当然这里192.168.x.x是本机的局域网IP地址（貌似这样，同理在vps搭建，就真正成为DNS服务器了）
    listen-address=127.0.0.1,192.168.x.x
    # 可选设置，如果设置将忽略本机的 hosts 设置
    no-host
    # 域名解析设置
    address=/example.com/1.2.3.4
    # 上面示例表示 *.example.com域名都会解析道1.2.3.4 （包含exmple.com ）
        
### 3. 启用 dnsmasq
启动：`sudo dnsmasq`
结束：`sudo kill 进程号`  (使用 `ps aux||grep dnsmasq` 第二列为进程号）
    
### 4. 清除系统的DNS缓存

        sudo killall -HUP mDNSResponder

### 5. 验证DNS是否启用：
将dns设置为127.0.0.1
然后使用nslookup/dig/host命令测试DNS服务是否正常运行


update 2016-10-11：后来看了网上的讨论，应该是中国电信对国际出口进行了限速，我这差不多在0.5Mb，也就是50KB/s。

不过比较庆幸，如果网速稳定，感觉看 YouTube 的 720P 刚刚够，偶尔一慢，还是会卡住，😭 想想前几天在朋友家使用移动宽带，晚上7、8点都有1MB/s下载，不都说电信好吗？我的网费都要比朋友贵好多，我开始要怀疑人生了。。。

![宝宝心里苦](https://img.lidong.me/2016/10/Da1FJ3vzD540.jpg)


