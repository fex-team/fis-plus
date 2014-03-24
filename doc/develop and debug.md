##Develop and debug

###Directory Structure

Recommended Project Directory Structure

When you create an  MVC Web application project, MVC components are separated based on the project folders shown in the following illustration:



By default, MVC projects include the following folders:


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
