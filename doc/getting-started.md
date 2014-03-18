## get started

* We provide a small demo for you to exprience how to use fis.
* make sure you have installed nodejs, java, php, php-cgi, fis-plus and lights

### install lights 

how to install lights, it's easy

```bash
$npm install lights -g
```

lights officila site: http://lightjs.duapp.com

### Initiate local environment

Initiate fis local environment and use lights to install demo to your machine

```bash
$ fisp server init
$ lights install pc-demo
```

*  fis local environment includes Samrty3, fis-data, fis-rewrite, index.php

### FIS directory specifications 

Let's take a look at the demo's directory.
```bash
├── common   //common module
│   ├── fis-conf.js  //config gile
│   ├── page     //page tpl directory
│   ├── plugin   //smarty plugin directory
│   ├── static   //static resource directory
│   └── widget   //widget directory
└── home    //business module
    ├── fis-conf.js
    ├── page
    ├── static
    ├── test    //test directory
    └── widget
```

* common module includes basic libraries like jquery, bootstrap, layout template so that the other business can use。
* business module is more likely to change with the business requirements。With the requirements explosion, you may have lots of business modules。
* FIS directory specifications make parallel developments easily and your applications come online safer.

### preview demo

let's release the demo and launch FIS server to preview the page

```bash
$ cd common
$ fisp release -c

$ cd ../home
$ fisp release -c

$ fisp server start

//open your internet explorer
http://localhost:8080/home/page/index
```

you should see this page
![](https://github.com/fex-team/fis-plus/blob/master/doc/images/fis-demo.png)

you can try to edit the demo's content and release them again to see your changes.

### At last

* Congratulations, you have your first FIS project.
* You will see more fantastic and powerful FIS functions afterwards.

