##Recommended Directory Structure

The FIS recommended project directory structure which consists of four levels:

- site, which consists of several subsystem.
- subsystem, which groups a set of related business logic feature into a organized group, several subsystems constitute a site.
- page, which use smarty(jsp coming later) rending the widgets and model into a web page suitable for interaction with ther user.
- widget, which are encapsulated and reusable components for the web which can be executed within a web page. 

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
We do not recommend calling each other between the ordinary subsystems, but ordinary subsystem can call common subsystem, so that it can guarantee the ordinary subsystems are independent. This can bring great flexibility and serviceability to the project. For instance, if you have many ordinary subsystems and one common subsystem, you just released the subsystems which new feature are in , without the need to publish the entire site.

###Widget

There are three types of widget, smarty widget, JavaScript widget, CSS widget, smarty widget can invoke JS widget and CSS widget.