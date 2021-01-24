---
title: gulp自动处理css前缀
date: 2016-08-30 23:03:25
updated: 2016-08-30 23:03:25
tags:
- css
- gulp
---

欢迎访问新站点: <https://www.yidiankuaile.com/post/gulp-auto-css-prefix>

先安装npm包 [gulp-postcss](https://github.com/postcss/postcss-loader) ,[autoprefixer]()，在gulp中添加下面的task：

    var gulp = require('gulp');
    gulp.task('autoprefixer', function () {
      var postcss      = require('gulp-postcss');
      var autoprefixer = require('autoprefixer');
      return gulp.src('./postcss/*.css')
        .pipe(postcss([ autoprefixer({ browsers: ['last 2 versions'] }) ]))
        .pipe(gulp.dest('./dist/postcss'));
    });

我现在常用gulp，就只记录gulp方法了。

更多方法请参考:
1. [几种自动处理css前缀的方法简介](http://www.cnblogs.com/shuiyi/p/5724300.html)


