# BLOG

[![Travis CI](https://travis-ci.org/ryanlid/blog.svg?branch=master)](https://travis-ci.org/ryanlid/blog)

😝 欢迎访问我的 Blog

🏠 访问地址： https://lidong.me/blog/

🔐 备份地址： https://ryanlid.github.io/blog/

记录一些日常学习的笔记

## Getting Started

1. 克隆项目

    ```shell
    git clone git@github.com:ryanlid/blog.git || git clone https://github.com/ryanlid/blog.git
    ```

2. 初始化子模块，获取主题（theme）

    ```shell
    git submodule init
    git submodule update
    ```

    > 获取最新主题
    > ```shell
    > git submodule update --remote
    > ```

3. 运行

    ```shell
    npm install
    npm run dev
    ```

4. 新增文章

    ```shell
    npm run hexo new hello-world
    ```
