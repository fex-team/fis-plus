##[F.I.S](http://fis.baidu.com)
[![NPM version](https://badge.fury.io/js/fis-plus.png)](http://badge.fury.io/js/fis-plus)
![fis](./doc/images/logo.png)

The official site: http://fis.baidu.com

##Introduction
Welcome to [F.I.S](http://fis.baidu.com), it is the front-end integrated solution which included automation tool, development framework, development environment. Our mission is to give you an advanced solution for developing web sites and applications without worrying about framework and performance.

##Questions

Thank you for interesting of [F.I.S](http://fis.baidu.com). We are improving the quality and grammar of this documentation. If you have any questions, please feel free to ask through [New Issue](https://github.com/fex-team/fis-plus/issues/new).

##Features
* Scaffolds out project, pages, modules, plug-ins and other resources.
* Performing repetitive tasks like minification, compilation, unit testing, linting, etc
* Automatic processing of embedded static resources, replacing the path, md5 timestamp.
* Convenient local debugging environment, built-in debugging servers, supporting data and the request simulation, file monitoring.
* Effectively monitor resource loading conditions and automatically optimize site performance.
* Flexible and scalable, plug-in system mechanisms
* Enable greater speed and frequency for the delivery of project.

##Environmental requirements
* [nodeJS](http://nodejs.org/) (comes with npm) version >= v0.8.0
* [Java JDK](http://www.oracle.com/technetwork/java/javase/downloads/index.html) version >= v1.5.0 **[If you do not use the local debug server, you can ignore it]**
* php-cgi version：>= v5.0.0 **[If you do not use the local debug server, you can ignore it]**

##Getting started
Install FIS via npm:

```
npm install fisp -g
```

then wo can check the fisp version

```
fisp -v
```

![fisp version](./doc/images/v.png)

##Command Line

We can run command with --help to see detail,below is the output from fisp --help

```
Usage: fis-plus <command>

  Commands:

    release     build and deploy your project
    server      launch a php-cgi server

  Options:

    -h, --help     output usage information
    -v, --version  output the version number
    --no-color     disable colored output

 ```

 below is the output from fisp release --help

 ```
  Usage: release [options]

  Options:

    -h, --help             output usage information
    -d, --dest <names>     release output destination
    -m, --md5 [level]      md5 release option
    -D, --domains          add domain name
    -l, --lint             with lint
    -t, --test             with unit testing
    -o, --optimize         with optimizing
    -p, --pack             with package
    -w, --watch            monitor the changes of project
    -L, --live             automatically reload your browser
    -c, --clean            clean compile cache
    -r, --root <path>      set project root
    -f, --file <filename>  set fis-conf file
    -u, --unique           use unique compile caching
    --verbose              enable verbose output

```

below is the output from fisp server --help

```
  Usage: server <command> [options]

  Commands:

    start                  start server
    stop                   shutdown server
    restart                restart server
    info                   output server info
    open                   open document root directory
    clean                  clean files in document root
    install <name>         install server framework
    init                   initialize server framework

  Options:

    -h, --help                     output usage information
    -p, --port <int>               server listen port
    --root <path>                  document root
    --type <php|java|node>         process language
    --rewrite [script]             enable rewrite mode
    --repos <url>                  install repository
    --timeout <seconds>            start timeout
    --php_exec <path>              path to php-cgi executable file
    --php_exec_args <args>         php-cgi arguments
    --php_fcgi_children <int>      the number of php-cgi processes
    --php_fcgi_max_requests <int>  the max number of requests
    --include <glob>               clean include filter
    --exclude <glob>               clean exclude filter

```

##Configuration

##Available plugins

##Who uses FIS?
These are just a few companies and projects that are using FIS.
### [Baidu](http://www.baidu.com/)
- [baidu page search](http://www.baidu.com/) 
- [baidu map](http://ditu.baidu.com/)
- [baidu tieba](http://tieba.baidu.com/)
- [baidu zhidao](http://zhidao.baidu.com/)
- [baidu image](http://image.baidu.com/)
- [baidu wenku](http://wenku.baidu.com/)
- [baidu baike](http://baike.baidu.com/)
- [baidu lvyou](http://lvyou.baidu.com/)
- [baidu news](http://news.baidu.com/)
- [baidu wangpan](http://wangpan.baidu.com/disk/home)
- [baidu xiangce](http://xiangce.baidu.com/)
- [baidu yuedu](http://yuedu.baidu.com/)
- [baidu baifubao](https://www.baifubao.com/)
- [baidu licai](http://8.baidu.com/)
- [baidu tuan](http://tuan.baidu.com/)

###[Tencent](http://www.qq.com/)
### [UC](http://www.uc.cn/)
### [Funshion](http://www.funshion.com/)
### [B5M](http://www.b5m.com/)
### [7k7k](http://www.7k7k.com/)
### [Rong360](http://rong360.com/)

This is just a short list of companies and projects that use FIS. [See more here](./doc/who uses FIS.md)..

##Architecture
![](https://raw.github.com/fis-dev/fis-plus/gh-pages/images/struct.png)

##License
[F.I.S](http://fis.baidu.com) is available under the terms of the MIT License.
