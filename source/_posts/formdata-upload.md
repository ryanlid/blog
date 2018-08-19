---
title: 通过 formdata 上传文件
tags:
  - codepen
  - web
date: 2018-01-28 00:00:18
updated: 2018-01-28 00:00:18
category:
description:
---

通常表单上传是通过form提交上传的文件的话，对form设置 `enctype:'multipart/form-data'` ，将文件和其他字段一起提交就好了，但是这只能导致页面刷新，嗯，这是老的做法。

<!--more-->

现在可以使用new FormData

<p class="codepen" data-height="500" data-theme-id="0" data-slug-hash="goVrJK" data-default-tab="js,result" data-user="oonnnoo" data-embed-version="2" data-pen-title="通过 formData 上传">See the Pen <a href="https://codepen.io/oonnnoo/pen/goVrJK/">通过 formData 上传</a> by oonnnoo (<a href="https://codepen.io/oonnnoo">@oonnnoo</a>) on <a href="https://codepen.io">CodePen</a>.</p>

<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

## 更新记录

1. {{ date.format('YYYY/M/D H:mm:ss') }} 首次发布

## 参考链接
