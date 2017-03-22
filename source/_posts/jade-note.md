---
title: Jade笔记
date: 2017-03-07 19:03:46
updated:
tags: 
- notes
- 模版
- jade
- pug
category:
---

Jade模版引擎
<mark>
好吧，它的新版本已经改名叫 `pug` 了，但我看的书中讲的是 `Jade`， 而且感觉使用上几乎木有问题，所以就先记 `Jade`，之后再去看看 `pug` 的文档。语法应该差不多的。😝
</mark>
<!-- more -->
## 标签

Jade模版

```jade
body
    div
        h1 Pracical Jade
        p The useful template engine
    div
        footer &copy; Hah
```

输出

```html
<body>
<div>
    <h1>Pracical Jade</h1>
    <p>The useful template engine</p>
</div>
<div>
    <footer>&copy; Hah</footer>
</div>
</body>
```

## 变量/数据
// todo 有问题,语法貌似不对

```
h1= title
p= body

(locals):{
title: "express.js",
body: "the book on express"
}
```

## 属性
紧跟标签之后，用括号括起来

```jade
meta(charset="utf-8")
div(id="content" class="main")
    a(href="http://www.google.com", title="google", target="_blank") google
    form(action="/login")
        input(type="text")
        input(type="submit" value="提交")
    div(class="hero-init") here we go!
```

输出

```html
<meta charset="utf-8"/>
<div id="content" class="main">
    <a href="http://www.google.com" title="google" target="_blank">google</a>
    <form action="/login"><input type="text"/>
        <input type="submit" value="提交"/>
    </form>
    <div class="hero-init">here we go!</div>
</div>
```

## 字变量

直接在标签名之后写类(class)或ID，再次使用 `|` 创建文本内容

```jade
div#content
    p.lead.center
        | webapplog: where code lives
        #side-bar.pull-right
        span.contact.span4
            a(href='/contact') contact us
```

输出

```html
<div id="content">
    <p class="lead center">
        webapplog: where code lives
        <div id="side-bar" class="pull-right"></div>
        <span class="contact span4">
            <a href="/contact">contact us</a>
        </span>
    </p>
</div>
```

注：如果没有写标签名，默认是div标签

## 文本
通过符号 `|` 可以输出原始文本

```jade
div
    | jade is a template engine
    | It can be used in Node.js and in the browser Javascript.
```
输出

```html
<div>
    jade is a template engine
    It can be used in Node.js and in the browser Javascript.
</div>
```

## script 和 style 块
将script和style标签里内容写内容块，需要使用点号`.`.

```
script.
    console.log('hello Jade!');
    console.log('Good bye!');
```

输出
 
```html
<script>
    console.log('hello Jade!');
    console.log('Good bye!');
</script>
```

## JavaScript 代码
可以在jade中写可以操作输出的可执行JavaScript代码，可以使用符号 `-`,`=`,`!=` 这在要输出html元素和注入JavaScript时很有用。(注：个人感觉不好用😢)

```
- var arr = ['<a>','<b>','<c>']
ul
    - for(var i=0 ;i<arr.length;i++)
        li
            span= i
            span!= "unescaped:" + arr[i] + "vs."
            span="escaped:" + arr[i]
```

输出

```
<ul>
    <li><span>0</span><span>unescaped:<a>vs.</span><span>escaped:&lt;a&gt;</span></li>
    <li><span>1</span><span>unescaped:<b>vs.</span><span>escaped:&lt;b&gt;</span></li>
    <li><span>2</span><span>unescaped:<c>vs.</span><span>escaped:&lt;c&gt;</span></li>
</ul>
```

## 注释
如果想输出注释，使用JavaScript的注释形式 `//` ，如果不想输出它，使用 `//~`

```
// content goes here
p Node.js is a non-blocking I/O
//- @todo change this line
p(id=footer) Copyright 2017
```

输出

```
<!-- content goes here-->
<p>Node.js is a non-blocking I/O</p>
<p>Copyright 2017</p>
```

## if 语句
## each 语句

## 过滤器
## 读取变量
## case
## 函数minxin

## include
将逻辑提取到单独的文件里的一种方式，旨在让多个文件重用它，是一种自顶向下的方法
 
 ```
 // 模版名字和路径不需要加引号
 include ./includes/header
 ```
 
## extend
是一种自底向上的方法（和include相反），包含的文件决定它要替换主文件的哪一部分。格式为 `extend filename` 和 `block blockname`

文件file_a中

```
block header
    p some default text
block content
    p loading
block footer
    p copyright
```

文件file_b中

```
extends file_a
block header
    p very specific text
block content
    .main-content
```

输出

file_b.html

```
<p>very specific text</p>
<div class="main-content"></div>
<p>copyright</p>
```


## 单独使用jade
全局安装

```
npm i -g jade
```

执行以下命令，将jade文件编译成html文件

```
jade file.jade 
```

