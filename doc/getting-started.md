## Get Started

* we provide a small demo for you to exprience how to use fis.
* make sure you have read [fis installation](./installation.md)

### Initiate local environment

Initiate fis local environment and use lights to install demo to your machine

```bash
$ fisp server init
$ lights install pc-demo
```

*  fis local environment includes Samrty3, fis-data, fis-rewrite, index.php

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
![](./images/fis-demo.png)

you can try to edit the demo's content and release them again to see your changes.

### At last

Congratulations, you have your first FIS project, you can continue to see:

- [Command Line](./doc/command-line.md)
- [Recommended Directory Structure](./doc/directory structure.md)
- [Pages and Layout Based On Smarty](./doc/smarty framework.md) 
- [How to Develop With Widgets](./doc/widget.md)
- [A Toolset For Production](./doc/compilation plugin.md)
- [Concat Files With Pack Plugin](./doc/pack-configuration.md)
- [URL Rewriting for Beginners](./doc/rewrite and redirect.md)
- [One-Click Upload From Your PC To Server](./doc/deploy-configuration.md)
- [Monitor and Optimize](./doc/monitor and optimize.md)

**You will see more fantastic and powerful FIS functions afterwards~**
