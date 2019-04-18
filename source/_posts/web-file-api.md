---
title: HTML5 中的文件 API
date: 2019-04-17 23:39:02
updated: 2019-04-17 23:39:02
tags:
- html
- html5
- javascript
- web
- file
- api
category:
description:
---

## 文件 API

1. 代表原始二进制数据的 Blob 对象

2. 存放原始二进制数据的缓存区的 ArrayBuffer 对象，以及可向缓存区写入或从缓存区中读出数据的 ArrayBufferView 对象与 DataView 对象。

<p class="codepen" data-height="400" data-theme-id="0" data-default-tab="js,result" data-user="oonnnoo" data-slug-hash="zXELNW" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1em 0; padding: 1em;" data-pen-title="FileList">
  <span>See the Pen <a href="https://codepen.io/oonnnoo/pen/zXELNW/">
  FileList</a> by oonnnoo (<a href="https://codepen.io/oonnnoo">@oonnnoo</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

## ArrayBuffer 对象与 ArrayBufferView 对象与 DataView 对象

// TODO

## Blob 对象

创建 Blob 对象

```js
var blob = new Blob([blobParts, type]);
```

第一个参数值为一个数组，可以存放任意数量的以下类型的对象。

- Array Buffer
- ArrayBufferView
- Blob
- String 对象

第二个参数表示为数据类型

```js
var blob = new Blob(["1234" + "5678"]);
var blob = new Blob(["1234" + "5678"], { type: "text/plain" });
var blob = new Blob(["1234" + "5678"], { type: "text/plain;charset=UTF-8" });
```

通过 Blob 生成文件下载

<p class="codepen" data-height="300" data-theme-id="0" data-default-tab="js,result" data-user="oonnnoo" data-slug-hash="GLOdwE" style="height: 304px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1em 0; padding: 1em;" data-pen-title="File-Blob-download">
  <span>See the Pen <a href="https://codepen.io/oonnnoo/pen/GLOdwE/">
  File-Blob-download</a> by oonnnoo (<a href="https://codepen.io/oonnnoo">@oonnnoo</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

Blob 对象的 slice 方法

用于从 Blob 对象所代表的原始二进制数据中抽离一部分数据。

```js
var newBlob = blob.slice(start, end, contentType);
```

```js
var file = document.getElementById("file").files[0];
if (file) {
  // 复制file对象
  var fileClone = file.slice();
  // 复制file对象
  var fileClone2 = file.slice(0, file.size);
  // 复制file对象的后半部分
  var fileChunkFromEnd = file.slice(-Math.round(file.size / 2));
  // 复制file对象的前半部分
  var fileChunkFromStart = file.slice(0, Math.round(file.size / 2));
  var fileNoMetadata = file.slice(0, -150, "application/experimental");
}
```

## FileReader 对象

### 事件

- onabort 中止
- onerror
- onloadstart
- onprogress
- onload
- onloadend

// 触发顺序 loadstart progress load loadend

### 方法

| 方法               | 描述                                                                       |
| ------------------ | -------------------------------------------------------------------------- |
| readAsText         | 以文本的形式读取 Blob 对象（第二个参数可以设置文本的编码方式，默认 UTF-8） |
| readAsBinaryString | 以二进制字符串读取 Blob 对象                                               |
| readAsDataURL      | 以 Data URL 字符串 读取 Blob 对象                                          |
| readAsArrayBuffer  | 以 ArrayBuffer 读取 Blob 对象                                              |

<p class="codepen" data-height="850" data-theme-id="0" data-default-tab="js,result" data-user="oonnnoo" data-slug-hash="yrKagM" style="height: 370px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1em 0; padding: 1em;" data-pen-title="FileReader">
  <span>See the Pen <a href="https://codepen.io/oonnnoo/pen/yrKagM/">
  FileReader</a> by oonnnoo (<a href="https://codepen.io/oonnnoo">@oonnnoo</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

#### FileReader readAsArrayBuffer 示例

<p class="codepen" data-height="750" data-theme-id="0" data-default-tab="js,result" data-user="oonnnoo" data-slug-hash="jRzMRL" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1em 0; padding: 1em;" data-pen-title="FileReader-readAsArrayBuffer">
  <span>See the Pen <a href="https://codepen.io/oonnnoo/pen/jRzMRL/">
  FileReader-readAsArrayBuffer</a> by oonnnoo (<a href="https://codepen.io/oonnnoo">@oonnnoo</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## 更新记录

1. {{ date.format('YYYY/M/D H:mm:ss') }} 首次发布

## 参考链接
