##How to Develop With Widgets

Widget is a set of specs which let web developers leverage their HTML, CSS and JavaScript knowledge to build widgets that can be reused easily and reliably. It can build anything from a button to a complete application as an encapsulated, reusable element. The fis framework will find and load all the resources for the widget when the widget is called. There are three types of widget, Template widget, JavaScript widget, CSS widget, Template widget(smarty for now) can invoke JavaScript widget and CSS widget.

###CSS Widget

In general, CSS widgets are the most simple components, the css files in widget directory are css widgets, files and widgets are in one-to-one correspondence. CSS widgets offers several extensions to the CSS @import to provide more flexibility over what you can do with external files.

####Reference in CSS

Use @require to import external files, but without adding the imported styles to the compiled output. FIS takes a different approach to loading than traditional @import tags, while it can also run fast and optimize well.

```
/**
 * demo.css
 * @require reset.css
 */
```

We declare dependencies through @require, so fis compiler can record dependencies by identifying @require in css comments. After compilation, you can see map.json file,

```
{
    "res" : {
        ...
        "demo.css" : {
            "uri" : "/static/css/demo_7defa41.css",
            "type" : "css",
            "deps" : [ "reset.css" ]
        },
        ...
    },
    "pkg" : {}
}
```

the fis framework will find and load all the resources the widget need fast and optimize well through this map.json file.

####Require in Smarty

Use {%require%} to import external files in Smarty, but without adding the imported styles to the compiled output.

```
{%require name="home:static/index/index.css"%}
```

![require](./images/require.jpg)

####Inline in CSS

Use @import url('url?__inline') to include the source file in the output.

```
//before
@import url('demo.css?__inline');

//after 
//below is ther sourece of the demo.css
img { border: 5px solid #ccc; };
```

####CSS Preprocessor

By default, the css preprocessor compile LESS files to CSS. There are also some other css preprocessor plug-ins which you can install and config to use. 

###JavaScript Widget

JavaScript widget can make you write like modular commonjs components that include their own css, images, etc, with fis framework(loader) you get automatic dependency resolution. Achieve faster load times with asynchronous loading and the ability to optimize downloads.

####Define a Module

The compiler automatic wraps the scripts and in AMD modules.

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

####Load a Module

FIS framework will ensure that all dependent modules are loaded before your module execution. So when we need a module, simply provide a module name to require anywhere. 

```
//sybsystem name: path
//path can be absolute url or relative url
require("common:widget/ui/a/a.js");
```

Because the dependency are pre-loaded, therefore the module can return immediately and synchronously.

The framework also provides an runtime asynchronous interface to load the modules that do not need to be loaded at startup.

```
//names can be string or array
require.async (names, callback);

require.async(["common:widget/menu/menu.js"],function(menu){
      menu.init();
})
```


####Loader

FIS loader is a streamlined version of AMD, **does not fully comply with AMD** for a better experience and higher performance.

###Template Widget

Template widget can build anything from a button to a complete application as an encapsulated, reusable element. Each Smarty widget contains at least one tpl(smarty) file which has the same name width the Smarty widget directory, the template provides a method for declaring document fragments in HTML. The Smarty widget also can have the same name js and css file for the widget. **The reason of why the tpl, js and css must have the same name is that if you do that then you don't need to explicitly import resources.** When you call the widget the fis framework will auto find and load all the resources the widget need. 

```
tpl: path_to_widget/widget/ui/widget name/widget name.tpl
js:  path_to_widget/widget/ui/widget name/widget name.js
css: path_to_widget/widget/ui/widget name/widget name.css
```