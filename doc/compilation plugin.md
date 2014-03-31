##A Toolset For Production

FIS automation tool is not just a task runner, more precisely speaking, it is a toolset for porduction. You can start working quickly without configuring a lot of independent tasks. The plugins system simply takes files, processes them, and pipes them to the next step. If you need to do something different, it’s rather simple: the fis config is simply a JavaScript file, so you can pull in existing node modules, run them, and be on your way.

![pipe](./images/compile.png)

Listed below are some of the built-in plugins enabled by default. 

###Pareser

####less

Compile less files to CSS.

###Standard

####hashres

Revision static file asset through content hashing and rename the src declarations that refer to them in your html/js/css/etc files.

- In Html

```
before:
<script type="text/javascript" src="demo.js"></script>
<link rel="stylesheet" type="text/css" href="demo.css">
<img title="百度logo" src="images/logo.gif"/>

after:
<img title="百度logo" src="/images/logo_74e5229.gif"/>
<link rel="stylesheet" type="text/css" href="/demo_7defa41.css">
<script type="text/javascript" src="/demo_33c5143.js"></script>
```
- In JavaScript

```
//before:
var img = __uri('images/logo.gif');
var css = __uri('demo.css');
var js = __uri('demo.js');

//after:
var img = '/images/logo_74e5229.gif';
var css = '/demo_7defa41.css';
var js = '/demo_33c5143.js';
```

The path output can be controlled by the config file,

```
fis.config.set('roadmap.path', [
    {
        //all the js files
        reg : '**.js',
        //output /static/js/xxx
        release : '/static/js$&'
    }
]);

//before:
var js = __uri('demo.js');

//after:
var js = '/static/js/demo_33c5143.js';
```

- In CSS

```
//before:
background: url('images/body-bg.png');
_filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src='images/body-bg.png');

//after:
background: url('/images/body-bg_1b8c3e0.png');
_filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src='/images/body-bg_1b8c3e0.png');
```

####CDN

Properly prepends a CDN url to those assets referenced with absolute paths.

```javascript
//fis-conf.js
//usage
fis.config.merge({
    roadmap : {
        //All static resource files use as a domain name http://s1.example.com or http://s2.example.com
          domain : 'http://s1.example.com, http://s2.example.com'
    }
});

//another usage
fis.config.merge({
    roadmap : {
        domain : {
            //All css files in widget directory use as a domain name http://css1.example.com
              'widget/**.css' : 'http://css1.example.com',
            //All js files in widget directory use as a domain name http://css1.example.com
              '**.js' : ['http://js1.example.com', 'http://js2.example.com']
        }
    }
});
```

Use fis release with `` -- domains `` parameter to control whether to add domain

```bash
$ fisp release --domains --dest ../output
```	

####Inline/Embedded

Embedding js, css, images as base64 data URIs inside your files with `` ?__inline `` parameter.

- In HTML

```
//before:
<img title="百度logo" src="images/logo.gif?__inline"/>
<link rel="stylesheet" type="text/css" href="demo.css?__inline">
<script type="text/javascript" src="demo.js?__inline"></script>

//after:
<img title="百度logo" src="data:image/gif;base64,R0lGODlhDgGBALMAAGBn6eYxLvvy9PnKyfO...Jzna6853wjKc850nPeoYgAgA7"/>

<style>img { border: 5px solid #ccc; }</style>

<script type="text/javascript">console.log('inline file');</script>
```

- In JavaScript

```
源码：
//before:
__inline('demo.js');
var img = __inline('images/logo.gif');
var css = __inline('a.css');

//after:
console.log('demo.js content');

var img = 'data:image/gif;base64,R0lGODlhDgGBALMAAGBn6eYxLvvy9PnKyfO...Jzna6853wjKc850nPeoYgAgA7';

var css = "body \n{    color: red;\n}";
```

- In CSS

```
//before:
@import url('demo.css?__inline');

.style {
    background: url(images/logo.gif?__inline);
}

//after:
//the content from demo.css
img { border: 5px solid #ccc; }

.style {
    background: url(data:image/gif;base64,R0lGODlhDgGBALMAAGBn6eYxLvvy9PnKyfO...Jzna6853wjKc850nPeoYgAgA7);
}
```

- processing of embedded static resources
- replacing the path
- md5 timestamp
- dependces

###Postprocessor

####amd-wrap

Wrap CommonJS files in `define(function (require, exports, module) { ... })`.

```
//before
//common/widget/menu/menu.js
var $ = require('common:widget/jquery/jquery.js');

exports.init = function() {
    $('.menu-ui ul li a').click(function(event) {
        var self = this;
        $('.menu-ui ul li a.active').removeClass('active');
        $(self).addClass('active');
        event.preventDefault();
    });
};

//after
define('common:widget/menu/menu.js', function(require, exports, module){
    var $ = require('common:widget/jquery/jquery.js');
    exports.init = function() {
        $('.menu-ui ul li a').click(function(event) {
            var self = this;
            $('.menu-ui ul li a.active').removeClass('active');
            $(self).addClass('active');
            event.preventDefault();
        });
    };
});
```

###Optimizer

####uglify-js

Minify JavaScript files with UglifyJS.

####clean-css

Minify CSS files with clean-css.

####html-compress

Minify html files with html-compress.

####png-compressor

Compress png images with pngquant.

####smarty-xss

Prevent Smarty from XSS.

###CSS Sprites

Generates a sprite from images referenced in a stylesheet and then updates the references with the new sprite image and positions.


####Usage

Use image src with `` __sprite `` parameter

![background](https://raw.github.com/fex-team/fis-spriter-csssprites/master/doc/image/background.png)


####background-position

|usage|demo|
|:------|:----|:--------|
|background-position: \d+px \d+px;|background-position: -9px -1px;|
|background-position: left  \d+px;|background-position: left -11px;|
|background-position: right \d+px;|background-position: right -1px;|
|background-position: left top;|background-position: left top;|
|background-position: right top;|background-position: right top;|

####demo

**before:**

```css
//aio.css
.header, .footer {
    background: url(/img/1px_bg.png?__sprite) repeat-x;
    height: 150px;
    width: 960px;
}

.nav {
    min-height: 400px;
    width: 100px;
    background: url(/img/nav_bg.png?__sprite) repeat-y;
}

.icon_add {
    width: 25px;
    height: 25px;
    background: url(/img/icon/add.jpg?__sprite) no-repeat;
}

.icon_mul {
    width: 25px;
    height: 25px;
    background: url(/img/icon/mul.jpg?__sprite) no-repeat;
}
```
**after:**

```css
.header, .footer {
    height: 150px;
    width: 960px;
    background-repeat: repeat-x
}

.nav {
    min-height: 400px;
    width: 100px;
    background-repeat: repeat-y
}

.icon_add {
    width: 25px;
    height: 25px;
    background-repeat: no-repeat
}

.icon_mul {
    width: 25px;
    height: 25px;
    background-repeat: no-repeat
}

.header, .footer {
    background-position: 0px 0px;
}

.nav {
    background-position: 0px 0px;
}

.icon_add {
    background-position: 0px 0px;
}

.icon_mul {
    background-position: 0px -25px;
}

.header, .footer {
    background-image: url('aio_x.png');
}

.nav {
    background-image: url('aio_y.png');
}

.icon_add, .icon_mul {
    background-image: url('aio_z.png');
}

```

As shown above, `1px_bg.png` is merged into `aio_x.png` , `nav_bg.png`  is merged into `aio_y.png`, `add.jpg` and `mul.jpg` are merged into `aio_z.png`.

Use fis release with `` - p `` parameter to generate a sprite.