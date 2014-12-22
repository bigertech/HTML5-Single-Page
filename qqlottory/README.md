# [Bigertech front-end template](http://bigertech.com)
[![Bower version](https://badge.fury.io/bo/bootstrap.svg)](http://badge.fury.io/bo/bootstrap)
[![NPM version](https://badge.fury.io/js/bootstrap.svg)](http://badge.fury.io/js/bootstrap)
[![Build Status](https://secure.travis-ci.org/twbs/bootstrap.svg?branch=master)](http://travis-ci.org/twbs/bootstrap)
[![devDependency Status](https://david-dm.org/twbs/bootstrap/dev-status.svg)](https://david-dm.org/twbs/bootstrap#info=devDependencies)

## Quick start

Three quick start options are available:

- [Download the latest release](https://codeload.github.com/bigertech/front-end-template/zip/master).
- Clone the repo: `git clone https://github.com/bigertech/front-end-template.git`.
- Install with [Bower](http://bower.io): `bower install bigertech`.


### What's included

Within the download you'll find the following directories and files, logically grouping common assets and providing both compiled and minified variations. You'll see something like this:

```
Front-End-Template/
├── less/
├── js/
├── img/
├── fonts/
└── dist/
    ├── css/
    ├── js/
    ├── images/
    └── fonts/
├── bower.json
├── package.json  
└── gulpfile.js
```

## Compiling CSS and JavaScript
Bigertech uses [Gulp](https://github.com/gulpjs/gulp) for its build system, with convenient methods for working with the framework. It's how we compile our code, run tests, and more.

### install dependences
```
bower install
```
```
npm install
```

### install Gulp
```
npm install -g gulp
```

### Run gulp
```
gulp          // 完成 Less 编译，css、js、图像压缩合并与检验
```

```
gulp clean    // 清理开发时不需要的文件
```

```
gulp less     // 将 Less 转换成 CSS，以及压缩 CSS
```

```
gulp scripts  // 验证、合并、压缩 js 文件
```

```
gulp images   // 压缩图片
```

```
gulp watch    // 默认监测所有前端开发文件的变化
```
