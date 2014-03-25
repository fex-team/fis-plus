##Develop and debug

###Directory structure

The FIS recommended project structure which consists of four levels:

- site, which consists of several subsystem.
- subsystem, which groups a set of related business logic feature into a organized group, several subsystems constitute a site.
- page, which use smarty(jsp coming later) rending the widgets and model into a web page suitable for interaction with ther user.
- widget, which are encapsulated and reusable components for the web which can be executed within a web page. 


The reason we isolate the subsystem is to result in greater maintainability which can make parallel developments easily and deploy the subsystem parallelly. By default, the projects include the following folders:

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
|     |---system1 //business subsystem
|     |      |---test //test cases
|     |      |---page
|     |            └── index.tpl 
|     |      |---widget
|     |      |---static
|     |      |     └── index //the static resources which belong to index.tpl
|     |      |          └── index.js  
|     |      |          └── index.css
|     |      |---fis-conf.js //fis config file

        ......
```

The following describes the use cases for each directory as listed.

- site, this directory contains your application, it contains several subsystem directory.
- subsystem directory, there are two type of subsystem, common subsystem and business subsystem, the common subsystem is for common libraries, modules and template on which the other business subsyestems depends.
- page, which is the recommended location for views(template).
- widget, this directory contains widgets. There are three types of widget, smarty widget, JavaScript widget, CSS widget, smarty widget can invoke JS widget and CSS widget.
- static, this directory contains static resources which do not belong to the widget.
- test, this directory contains application tests. These could be hand-written based on some other testing framework. 

