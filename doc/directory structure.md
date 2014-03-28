##Recommended Directory Structure

The FIS recommended project directory structure which consists of four levels:

- **site**, which consists of several subsystem.
- **subsystem**, which groups a set of related business logic feature into a organized group, several subsystems constitute a site.
- **page**, which use back-end template rending the widgets and model into a web page suitable for interaction with ther user.
- **widget**, is a set of specs which let web developers leverage their HTML, CSS and JavaScript knowledge to build widgets that can be reused easily and reliably.

By default, the projects include the following folders:

```bash
|---site //the project
|     |---common //common subsystem
|     |      |---page //page file directory
|     |            └── layout.tpl 
|     |      |---widget //widget directory, include template module, JavaScript module, CSS module, ext
|     |      |     └── menu   //template module
|     |      |     |    └── menu.tpl  
|     |      |     |    └── menu.js   
|     |      |     |    └── menu.css
|     |      |     └── ui
|     |      |          └── dialog  //JavaScript module
|     |      |          |    └──dialog.js
|     |      |          |    └──dialog.css
|     |      |          └── reset // CSS module
|     |      |               └── reset.css
|     |      |---static //static resources which do not belong to the widget
|     |      |---fis-conf.js //fis config file
|     |---subsystem1 //business subsystem
|     |      |---test //test cases
|     |      |---page
|     |            └── index.tpl 
|     |      |---widget
|     |      |---static
|     |      |     └── index //the static resources which belong to index.tpl
|     |      |          └── index.js  
|     |      |          └── index.css
|     |      |---fis-conf.js //fis config file
|     |---subsystem2 //business subsystem
```

The following describes the use cases for each directory as listed.

- site, this directory contains your application, it contains several subsystem directory.
- subsystem directory, this directory contains set of related business logic feature resources.
- page, this directory contains views(template).
- widget, this directory contains widgets.
- static, this directory contains static resources which do not belong to the widget.
- test, this directory contains application tests, these could be hand-written based on some other testing framework. 

###Subsystem

The reason we isolate the subsystem is to result in greater maintainability which can make parallel developments easily and deploy the subsystem parallelly. There are two types of subsystem, common subsystem and ordinary subsystem, the common subsystem is for common libraries, modules and template on which the other ordinary subsyestems depends. The subsystem directory usually contains page, widget, static, test and the fis-conf.js. 
**We do not recommend calling each other between the ordinary subsystems, but ordinary subsystem can call common subsystem**, so that it can guarantee the ordinary subsystems are independent. This can bring great flexibility and maintainability  to the project. For instance, if you have many ordinary subsystems and one common subsystem, you will just release some subsystems which new feature are in, without the need to publish the entire site.

###Page

We provide a framework based on Smarty3/PHP for template, there are alse other back-end solutions coming soon, like java, go, etc. The framework can efficiently control the loading of static resources. 

You can find more in [Pages and Layout Based On Smarty](./doc/smarty framework.md);

###Widget

There are three types of widget, Template widget, JavaScript widget, CSS widget, Template widget(smarty for now) can invoke JS widget and CSS widget.

####CSS widget

In general, CSS widgets are the most simple components, the css files in widget directory are css widgets. Each css widget contains at least one css file which has the same name with the css widget directory, while the css directory also can contains some pictures which are referenced in the css. 

```
css: path_to_widget/widget/ui/widget name/widget name.css
```
####JavaScript widget

The new JavaScript widget enables developers to create their own hidden implementations of HTML elements. For example, instead of pasting (and re-pasting) a script and a css into a web page, you only need call the JavaScript widget through require, the fis framework will auto load all the resources needed. The JavaScript files in widget directory are JavaScript widgets. Each JavaScript widget contains at least one JavaScript file which has the same name with the JavaScript widget directory, the JavaScript widget also can have the same name css file for the widget. 

```
js:  path_to_widget/widget/ui/widget name/widget name.js
css: path_to_widget/widget/ui/widget name/widget name.css
```

####Template widget

Template widget can build anything from a button to a complete application as an encapsulated, reusable element. Each Smarty widget contains at least one tpl(smarty) file which has the same name width the Smarty widget directory, the template provides a method for declaring document fragments in HTML. The Smarty widget also can have the same name js and css file for the widget. **The reason of why the tpl, js and css must have the same name is that if you do that then you don't need to explicitly import resources.** The fis framework will automatically find and load all the js and css files that the widget need when the widget rendering. 

```
tpl: path_to_widget/widget/ui/widget name/widget name.tpl
js:  path_to_widget/widget/ui/widget name/widget name.js
css: path_to_widget/widget/ui/widget name/widget name.css
```

You can find more in [How to Develop With Widgets](./doc/widget.md); 
