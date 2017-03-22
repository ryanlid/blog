---
title: webpack 笔记
date: 2017-03-14 23:56:09
updated: 2017-03-14 23:56:09
tags: 
- webpack
category:
---

特点：
静态资源
支持导入第三方工具
支持代码分割
支持模块热更新
<!-- more -->
## 安装
1.先全局安装webpack，再在项目目录安装

```
npm install -g webpack
```
项目目录下

```
npm install --save-dev webpack
```

直接使用webpack

```
webpack hello.js hello.bundle.js
```

## 简单示例使用
### 安装必要的loader

```
npm install css-loader style-loader --save-dev
```
```  hello.js
require ('./world.js')
require('style-loader!css-loader!./style.css')
function(){

}
```

``` index.html
<body>
<script src="hello.bundle.js"></script>
</body>
```


### 使用webpack命令 
Webpack命令的常用参数：
在命令行中绑定loader，
自动更新，打包，
显示打包过程，
显示打包模块，
显示为什么打包，

```
webpack hello.js hello.bundle.js --module-bind 'css=style-loader!css-loader' --watch --progress --display-modules --display-reasons --colors
```

## 使用 webpack.config.js
### 单文件输入输出
```
module.exports={
entry:'/src/script/main.js'

outfile:{
  path:'./dist/js',
  filename:'bundle.js'
  }
}

```

### 多文件输入输出

``` webpack.config.js
module.exports={
entry:'/src/script/main.js'

outfile:{
  path:'./dist/js',
  //占位符： name 表示原文件名，hash当前打包的hash,chunkhash表示每个打包文件的hash，
  filename:'[name]-[hash]-bundle.js'
  //filename:'[name]-[chunkhash]-bundle.js'  
  }
}
```

## 插件使用 
安装使用插件 [html-webpack-plugin](https://github.com/jantimon/html-webpack-plugin)，让js自动引入到html中


npm install html-webpack-plugin --save-dev

```javascript webpack.config.js
var htmlWebpckPlugin=require('html-webpack-plugin');

module.exports={
  entry:{
    main:'./src/script/main.js',
    a:'./src/script/a.js'
  },
  output:{
    path:'./dist/',
    filename:'js/[name]-[hash]-bundle.js',
    publicPath:'http://cdn.com/' 

  },
  plugins:[
    new htmlWebpckPlugin({
    filename:'index-[hash].html',
    // 嵌入到head标签中
    inhect:'head',
    template:'index.html',
    title:"webpck is good",
    // 压缩
    minify:{
      // 删除注释，删除空格
      removeComments:true,
      collapseWhitespace:true
    }
    })
  ]
}
```

