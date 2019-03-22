---
title: Webpack 使用
date: 2019-03-22 20:15:33
updated: 2019-03-22 20:15:33
tags:
- webpack
- webpack4
- 前端
category:
description:
---

## 初始化项目

```
npm init -y
```

## 安装 webpack-cli webpack

```
npm install -D webpack-cli webpack
```

```
yarn add --dev webpack-cli webpack
```

创建 src 目录，并在 src 目录中创建 index.js 文件，在 `package.json`中编写 script `"build":"webpack"` ；此刻运行 ` npm run build` 即可将 src/index.js 编译生成 dist/main.js

此时的目录结构为

```
.
├── dist
│   └── main.js
├── node-modules
├── package.json
└── src
    ├── index.html
    └── index.js
```
## 使 javascript 自动插入到 HTML 中

```
npm install -D html-webpack-plugin html-loader
```

```
yarn add --dev html-webpack-plugin html-loader
```

创建 webpack 配置文件 webpack.config.js

配置 loader

```js
{
  test: /\.html$/,
  use: [{
    loader: "html-loader",
    options: {
      minimize: true
    }
  }]
}

```
配置 html-webpack-plugin

```js
new htmlWbpackPlugin({
  template: "./src/index.html",
  filename: "./index.html"
})
```

这时候，再运行 `npm run build`，src 中html、js 文件就会被编译转换后保存在 dist 目录中，并且 html 文件中通过 script 引用了 js 文件。

此时的目录结构为

```
.
├── dist
│   ├── index.html
│   └── main.js
├── node_modules
├── package.json
├── src
│   ├── index.html
│   └── index.js
└── webpack.config.js
```

## 使用 webpack-dev-server

```
npm install -D webpack-dev-server
```

```
yarn add --dev webpack-dev-server
```

在 `package.json` 中编写 script `"dev":"webpack-dev-server"`；此刻运行 ` npm run dev` 即可启动 webpack-dev-server，热加载运行，修改src目录中文件，即刻在页面中显示出效果。

## 编译 javascript

```
npm install -D @babel/core babel-loader @babel/preset-env
```

```
yarn add --dev @babel/core babel-loader @babel/preset-env
```

在 webpack.config.js 中

配置 babel-loader

```js
{
  test: /\.js$/,
  exclude: /node_modules/,
  use: {
    loader: "babel-loader"
  }
}
```
## 编译 sass

```
npm i -D node-sass style-loader css-loader sass-loader mini-css-extract-plugin
```

```
yarn add --dev node-sass style-loader css-loader sass-loader mini-css-extract-plugin
```

在 webpack.config.js 中

配置 sass、css 相关的 loader

```js
{
  test: /\.scss$/,
  use: [
    "style-loader",
    "css-loader",
    "sass-loader"
  ]
}
```

⚠️ 配置 loader 是有顺序的，webpack 从后往前读取 loader ，也就是说这里 loader 是，scss 文件，先通过 sass-loader 处理，再通过 css-loader 处理，最后通过 style-loader 处理

配置 mini-css-extract-plugin

```js
new MiniCssExtractPlugin({
  filename: "[name].css",
  chunkFilename: "[id].css"
})
```

## 处理文件

```
npm install -D file-loader
```

```
yarn add --dev file-loader
```

配置 file-loader

```js
{
  test: /\.(jpg|png|gif|svg)$/,
  use: [
    "file-loader"
  ]
}
```

项目地址：https://github.com/ryanlid/webpack-start
示例：https://webpack-start.lidong.me
文档说明：https://lidong.me/blog/webpack-start

## 更新记录

1. {{ date.format('YYYY/M/D H:mm:ss') }} 首次发布

## 参考链接

