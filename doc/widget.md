##How to Develop With Widgets

Widget is a set of specs which let web developers leverage their HTML, CSS and JavaScript knowledge to build widgets that can be reused easily and reliably. It can build anything from a button to a complete application as an encapsulated, reusable element. The fis framework will find and load all the resources for the widget when the widget is called. There are three types of widget, Template widget, JavaScript widget, CSS widget, Template widget(smarty for now) can invoke JavaScript widget and CSS widget.

###CSS

In general, CSS widgets are the most simple components, the css files in widget directory are css widgets, files and widgets are in one-to-one correspondence. CSS widgets offers several extensions to the CSS @import to provide more flexibility over what you can do with external files.

####Reference in CSS

Use @require to import external files, but without adding the imported styles to the compiled output. FIS takes a different approach to loading than traditional @import tags, while it can also run fast and optimize well.

```
/**
 * demo.css
 * @require reset.css
 */
```

We declare dependencies through **require**, so fis compiler can record dependencies by identifying @require in css comments. After compilation, you can see map.json file,

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

####Inline in CSS

Use @import url('url?__inline') to include the source file in the output.

```
//before
@import url('demo.css?__inline');

//after 
//below is ther sourece of the demo.css
img { border: 5px solid #ccc; };
```

####Require in Smarty

Use {%require%} to import external files in Smarty, but without adding the imported styles to the compiled output.

```
{%require name="home:static/index/index.css"%}
```

![require](./images/require.jpg)

the fis framework will find and load all the resources the widget need fast and optimize well.

####CSS Preprocessor

By default, the css preprocessor compile LESS files to CSS. There are also some other css preprocessor plug-ins which you can install and config to use. 

###JavaScript

####JavaScript Widget

The new JavaScript widget enables developers to create their own hidden implementations of HTML elements. For example, instead of pasting (and re-pasting) a script and a css into a web page, you only need call the JavaScript widget through require, the fis framework will auto load all the resources needed. The JavaScript files in widget directory are JavaScript widgets. Each JavaScript widget contains at least one JavaScript file which has the same name with the JavaScript widget directory, the JavaScript widget also can have the same name css file for the widget. 

```
js:  path_to_widget/widget/ui/widget name/widget name.js
css: path_to_widget/widget/ui/widget name/widget name.css
```

###Template

####Template Widget

Template widget can build anything from a button to a complete application as an encapsulated, reusable element. Each Smarty widget contains at least one tpl(smarty) file which has the same name width the Smarty widget directory, the template provides a method for declaring document fragments in HTML. The Smarty widget also can have the same name js and css file for the widget. **The reason of why the tpl, js and css must have the same name is that if you do that then you don't need to explicitly import resources.** When you call the widget the fis framework will auto find and load all the resources the widget need. 

```
tpl: path_to_widget/widget/ui/widget name/widget name.tpl
js:  path_to_widget/widget/ui/widget name/widget name.js
css: path_to_widget/widget/ui/widget name/widget name.css
```