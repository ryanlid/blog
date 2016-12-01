---
title: Gitlab CI 持续集成
date: 2016-12-1 16:23:00
updated:
tags:
- gitlab
- gitlab-ci
category:
---
持续集成，听起来很棒的样子，我就小做尝试一把
<!-- more -->
## 1.GitLab-Runner下载
https://docs.gitlab.com/runner/

``` sh
sudo curl --output /usr/local/bin/gitlab-ci-multi-runner https://gitlab-ci-multi-runner-downloads.s3.amazonaws.com/latest/binaries/gitlab-ci-multi-runner-darwin-amd64

sudo chmod +x /usr/local/bin/gitlab-ci-multi-runner
```

## 2.查看 GitLab 中项目的Runners
项目页面 -> ⚙️设置(齿轮图标) -> Runners
![setting](https://static.lidong.me/img/2016/12/xDeMEYp18c7r.png)

查看Runners
![runners](https://static.lidong.me/img/2016/12/6NMsGI8l1d7s.png)

## 3.注册Runners

```
gitlab-ci-multi-runner register
```

根据提示，填写
1) GitLab->Runners的Url地址①
2) GitLab->Runners的registration token②
3) runner名称，这个随便写
4) 分支名，master
5) 协议方式，shell
⚠️ 注：使用sudo，可以防止稍后runners中，执行可能因为权限问题而执行失败，

![示例](https://static.lidong.me/img/2016/12/sknaczoIxw98.png)

## 4.开启gitlab-runner服务

```
gitlab-ci-multi-runner install
gitlab-ci-multi-runner start
```

## 5.设置 .gitlab-ci.yml 脚本
编辑 `.gitlab-ci.yml`，文件名为固定格式，并将文件放在git库的跟目录下。

下面是gitlab-ci中的一个部署 hexo 模版，正好可以拿来使用

更多配置文件编写方法 👉[官方文档](http://docs.gitlab.com/ee/ci/yaml/README.html)

{% include_code yml gitlab-ci/.gitlab-ci.yml %}

## 6.完成配置
设置完成 .gitlab-ci.yml ，每当有新的提交 Gitlab CI 就会运行

![](https://static.lidong.me/img/2016/12/7OVccmT27N87.png)
## 更新记录
2016年12月1日 首次发布

## 参考连接

- [GitLab CI持续集成配置方案](https://www.cnblogs.com/newP/p/5735366.html#_Toc458009359)


