---
title: HTML5 中的文件 API
date: 2019-04-18 21:08:02
updated: 2019-04-18 21:08:02
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

HTML5 提供了关于文件操作的文件 API。

1. 代表原始二进制数据的 Blob 对象

2. 存放原始二进制数据的缓存区的 ArrayBuffer 对象，以及可向缓存区写入或从缓存区中读出数据的 ArrayBufferView 对象与 DataView 对象。

<p class="codepen" data-height="400" data-theme-id="0" data-default-tab="js,result" data-user="oonnnoo" data-slug-hash="zXELNW" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1em 0; padding: 1em;" data-pen-title="FileList">
  <span>See the Pen <a href="https://codepen.io/oonnnoo/pen/zXELNW/">
  FileList</a> by oonnnoo (<a href="https://codepen.io/oonnnoo">@oonnnoo</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

## ArrayBuffer 与 ArrayBufferView 及 DataView

// TODO

## Blob 对象

### 创建 Blob 对象

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
var blobX = new Blob(["1234" + "5678"], { type: "text/plain" });
var blobY = new Blob(["1234" + "5678"], { type: "text/plain;charset=UTF-8" });
var shorts = new Uint16Array(buffer, 512, 128);
var blobA = new Blob([blob, shorts]);
var bytes = new Unit8Array(buffter, shorts.byteOffset + shorts.byteLength);
var blobB = new Blob([blob, blobA, bytes]);
var blobC = new Blob([buffer, blob, blobA, bytes]);
```

### 通过 Blob 生成文件下载

通过浏览器的 URL 对象的 `createObjectURL` 方法可以根据一个 Blob 对象的二进制数据来创建一个 URL 地址并返回该地址。当用户访问该 URL 地址时可以直接下载原始的二进制数据。

<p class="codepen" data-height="300" data-theme-id="0" data-default-tab="js,result" data-user="oonnnoo" data-slug-hash="GLOdwE" style="height: 304px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1em 0; padding: 1em;" data-pen-title="File-Blob-download">
  <span>See the Pen <a href="https://codepen.io/oonnnoo/pen/GLOdwE/">
  File-Blob-download</a> by oonnnoo (<a href="https://codepen.io/oonnnoo">@oonnnoo</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

### Blob 对象的 slice 方法

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

FileReader 对象主要用于将文件读入内存，并读取文件中的数据

### 事件

- onabort 数据读取中断时
- onerror 数据读取错误时
- onloadstart 数据读取开始时
- onprogress 数据读取中
- onload 数据读取成功完成时
- onloadend 数据读取完成时触发，无论成功还是失败

```js
var result = document.getElementById("result");
var input = document.getElementById("input");

function readFile() {
  var file = document.getElementById("file").files[0];
  var reader = new FileReader();
  reader.onload = function(e) {
    result.innerHTML = '<img src="' + this.result + '"alt=""/>';
    alert("load");
  };
  reader.onprogress = function(e) {
    alert("progress");
  };
  reader.onabort = function(e) {
    alert("abort");
  };
  reader.onerror = function(e) {
    alert("error");
  };
  reader.onloadstart = function(e) {
    alert("loadstart");
  };
  reader.onloadend = function(e) {
    alert("loadend");
  };
  reader.readAsDataURL(file);
}

// 时间顺序 loadstart progress load loadend
```

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

### FileReader readAsArrayBuffer 示例

首先将文件中前 4 个字节中的内容复制到一个 Blob 对象中，再将 Blob 对象中的数据读取为一个 ArrayBuffer 对象，然后使用 DataView 读取该 ArrayBuffer 缓存区中位于开头的 32 位整数，最后通过比较整数值来判断文件类型

<p class="codepen" data-height="750" data-theme-id="0" data-default-tab="js,result" data-user="oonnnoo" data-slug-hash="jRzMRL" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1em 0; padding: 1em;" data-pen-title="FileReader-readAsArrayBuffer">
  <span>See the Pen <a href="https://codepen.io/oonnnoo/pen/jRzMRL/">
  FileReader-readAsArrayBuffer</a> by oonnnoo (<a href="https://codepen.io/oonnnoo">@oonnnoo</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## 更新记录

1. {{ date.format('YYYY/M/D H:mm:ss') }} 首次发布

## 参考链接
