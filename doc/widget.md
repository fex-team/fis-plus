##How to Develop With Widgets

Widget is a set of specs which let web developers leverage their HTML, CSS and JavaScript knowledge to build widgets that can be reused easily and reliably.

###Why Widget

To understand why widget(components) are so important, we need look no further than how we’ve hacked around the lack of components. As an example, let’s run through the process of consuming a typical third-party widget.

First, we include the widget’s CSS and JavaScript:

```
<link rel="stylesheet" type="text/css" href="my-widget.css" />
<script src="my-widget.js"></script>
```

Next, we might need to add placeholder elements to the page where our widgets will be inserted.

```
<div data-my-widget></div>
```

Finally, when the DOM is ready, we reach back into the document, find the placeholder elements and instantiate our widgets:

```
// jQuery used here for brevity...

$(function() {
  $('[data-my-widget]').myWidget();
});
```

Can we get a way to avoid this constant three-step process to achieve simple, consistent, reusable, encapsulated and composable widgets, the answer is yes, but we’re only just getting started. There are three types of widget, Template widget, JavaScript widget, CSS widget, Template widget(smarty for now) can invoke JavaScript widget and CSS widget. It’s a great time to start experimenting.


###Template Widget

Template widget can build anything from a button to a complete application as an encapsulated, reusable element. Each Smarty widget contains at least one tpl(smarty) file which has the same name width the Smarty widget directory, it also can have the same name js and css file for the widget. **The reason of why the tpl, js and css must have the same name is that if you do that then you don't need to explicitly import resources.** The fis framework will automatically find and load all the js and css files that the widget need when the widget rendering. 

```
tpl: path_to_widget/widget/ui/widget name/widget name.tpl
js:  path_to_widget/widget/ui/widget name/widget name.js
css: path_to_widget/widget/ui/widget name/widget name.css
```

- tpl, a template provides a method for declaring document fragments in HTML
- js, a javascript widget to control the UI interaction 
- css, a css widget to control the style and layout of the tpl

####Call Template Widget

Use {%widget%} to call template widget with a widget a name(path).

```
{%widget name="home:widget/section/section.tpl" %}
```

The smarty widget tag is used to dynamic control the output of widget static resources and html, usage:

![widget](./images/widget.jpg)

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

The module can return immediately and synchronously because the dependency are pre-loaded.

The framework also provides an runtime asynchronous interface to load the modules that do not need to be loaded at startup.

```
//names can be string or array
require.async (names, callback);

require.async(["common:widget/menu/menu.js"],function(menu){
      menu.init();
})
```
####CSS attachment in a JavaScript Widget

JavaScript widget can make you write a JavaScript module that with a CSS file with the same name to control the style and layout of the widget. 

```
js:  path_to_widget/widget/ui/widget name/widget name.js
css: path_to_widget/widget/ui/widget name/widget name.css
```

The corresponding css file will be automatically loaded in the page.

####Subset of AMD Specification

FIS loader is a subset of AMD, **does not fully comply with AMD** for a better experience and higher performance.

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
