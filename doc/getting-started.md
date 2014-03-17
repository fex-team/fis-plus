## get started

We provide a small demo for you to exprience how to use fis, make sure you have installed nodejs, java, php, php-cgi, fis-plus and lights

Firstly，Initiate fis local environment and use lights to install demo to your machine

$ fisp server init
$ lights install pc-demo

*  fis local environment includes Samrty3, fis-data, fis-rewrite, index.php

Let's take a look at the demo's directory.

├── common   //common module
│   ├── fis-conf.js  //config gile
│   ├── page     //page tpl directory
│   ├── plugin   //smarty plugin directory
│   ├── static   //static resource directory
│   └── widget   //模块化组件目录
└── home    //业务模块
    ├── fis-conf.js
    ├── page
    ├── static
    ├── test    //测试数据目录
    └── widget
