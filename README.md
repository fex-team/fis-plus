##[F.I.S](http://fis.baidu.com)
[![NPM version](https://badge.fury.io/js/fis-plus.png)](http://badge.fury.io/js/fis-plus)
![fis](./doc/images/logo.png)

The official site: http://fis.baidu.com

##Introduction
Welcome to [F.I.S](http://fis.baidu.com), it is the front-end integrated solution which included automation tool, development framework, development environment. Our mission is to give you an advanced solution for developing web sites and applications without worrying about framework and performance.

##Questions

Thank you for interesting of [F.I.S](http://fis.baidu.com). We are improving the quality and grammar of this documentation. If you have any questions, please feel free to ask through [New Issue](https://github.com/fex-team/fis-plus/issues/new).

##Features
* Scaffolds out project, pages, modules, plug-ins and other resources.
* Performing repetitive tasks like minification, compilation, unit testing, linting, etc
* Automatic processing of embedded static resources, replacing the path, md5 timestamp.
* Convenient local debugging environment, built-in debugging servers, supporting data and the request simulation, file monitoring.
* Effectively monitor resource loading conditions and automatically optimize site performance.
* Flexible and scalable, plug-in system mechanisms
* Enable greater speed and frequency for the delivery of project.

##Environmental requirements
* [nodeJS](http://nodejs.org/) (comes with npm) version >= v0.8.0
* [Java JDK](http://www.oracle.com/technetwork/java/javase/downloads/index.html) version >= v1.5.0 **[If you do not use the local debug server, you can ignore it]**
* php-cgi version：>= v5.0.0 **[If you do not use the local debug server, you can ignore it]**

##Getting started
Install fis via npm:

```
npm install fisp -g
```

then wo can check the fisp version

```
fisp -v
```

![fisp version](./doc/images/v.png)

##Command Line

We can run command with --help to see detail,below is the output from fisp --help

```
Usage: fis-plus <command>

  Commands:

    release     build and deploy your project
    server      launch a php-cgi server

  Options:

    -h, --help     output usage information
    -v, --version  output the version number
    --no-color     disable colored output

 ```

 below is the output from fisp release --help

 ```
  Usage: release [options]

  Options:

    -h, --help             output usage information
    -d, --dest <names>     release output destination
    -m, --md5 [level]      md5 release option
    -D, --domains          add domain name
    -l, --lint             with lint
    -t, --test             with unit testing
    -o, --optimize         with optimizing
    -p, --pack             with package
    -w, --watch            monitor the changes of project
    -L, --live             automatically reload your browser
    -c, --clean            clean compile cache
    -r, --root <path>      set project root
    -f, --file <filename>  set fis-conf file
    -u, --unique           use unique compile caching
    --verbose              enable verbose output

```

below is the output from fisp server --help

```
  Usage: server <command> [options]

  Commands:

    start                  start server
    stop                   shutdown server
    restart                restart server
    info                   output server info
    open                   open document root directory
    clean                  clean files in document root
    install <name>         install server framework
    init                   initialize server framework

  Options:

    -h, --help                     output usage information
    -p, --port <int>               server listen port
    --root <path>                  document root
    --type <php|java|node>         process language
    --rewrite [script]             enable rewrite mode
    --repos <url>                  install repository
    --timeout <seconds>            start timeout
    --php_exec <path>              path to php-cgi executable file
    --php_exec_args <args>         php-cgi arguments
    --php_fcgi_children <int>      the number of php-cgi processes
    --php_fcgi_max_requests <int>  the max number of requests
    --include <glob>               clean include filter
    --exclude <glob>               clean exclude filter

```

##Configuration

Create a **fis-conf.js** file in the project directory, we can do all kinds of fis build system customized configurations through：

```javascript
fis.config.set(key, value);
```

or

```javascript
fis.config.merge({...});
```

### project.charset

* explanation：config encoding。
* type：``string``
* default：'utf8'
* usage：
    ```javascript
    fis.config.set('project.charset', 'gbk');
    ```
    
    or
    ```javascript
    fis.config.merge({
        project : { charset : 'gbk' }
    });
    ```

### project.md5Length

* explanation：the length of md5。
* type：``number``
* default：7
* usage：
    ```javascript
    fis.config.set('project.md5Length', 8);
    ```

    or
    ```javascript
    fis.config.merge({
        project : { md5Length : 8 }
    });
    ```

### project.md5Connector

* explanation：Set hyphen between md5 and file name
* type：``string``
* default：'_'
* usage：
    ```javascript
    fis.config.set('project.md5Connector ', '.');
    ```

    or
    ```javascript
    fis.config.merge({
        project : { md5Connector : '.' }
    });
    ```

### project.include

* explanation：设置项目源码文件include过滤器。只有命中include的文件才被视为源码，其他文件则忽略。
* type：``string`` | ``RegExp``
* default：empty
* usage：
    ```javascript
    fis.config.set('project.include', 'src/**');
    ```

    or
    ```javascript
    fis.config.merge({
        project : { include : 'src/**' }
    });
    ```

### project.exclude

* explanation：Set the file exclude filter of project source
* type：``string`` | ``RegExp``
* default：empty
* usage：
    ```javascript
    fis.config.set('project.exclude', /^\/_build\//i);
    ```

    or
    ```javascript
    fis.config.merge({
        project : { exclude : /^\/_build\//i }
    });
    ```

### project.fileType.text

* explanation：Append text file suffix
* type：``Array`` | ``string``
* default：empty
* notice：the internal list of suffixes： [ **'css', 'tpl', 'js', 'php', 'txt', 'json', 'xml', 'htm', 'text', 'xhtml', 'html', 'md', 'conf', 'po', 'config', 'tmpl', 'coffee', 'less', 'sass', 'jsp', 'scss', 'manifest', 'bak', 'asp', 'tmp'** ], additional user configuration will not override the internal list of suffixes.
* usage：
    ```javascript
    fis.config.set('project.fileType.text', 'tpl, js, css');
    ```

    or
    ```javascript
    fis.config.merge({
        project : {
            fileType : {
                text : 'tpl, js, css'
            }
        }
    });
    ```

### project.fileType.image

* explanation：Append image file suffix
* type：``Array`` | ``string``
* default：empty
* notice：the internal list of suffixes： [ **'svg', 'tif', 'tiff', 'wbmp', 'png', 'bmp', 'fax', 'gif', 'ico', 'jfif', 'jpe', 'jpeg', 'jpg', 'woff', 'cur'** ], additional user configuration will not override the internal list of suffixes.
* usage：
    ```javascript
    fis.config.set('project.fileType.image', 'swf, cur, ico');
    ```

    or
    ```javascript
    fis.config.merge({
        project : {
            fileType : {
                image : 'swf, cur, ico'
            }
        }
    });
    ```

### modules.parser

* explanation：config parser plugins
* type：``Object``
* default：empty
* usage：

    ```javascript
    //fis-conf.js
    fis.config.merge({
        modules : {
            parser : {
                //coffee suffix file using fis-parser-coffee-script compiler plugin
                coffee : 'coffee-script',
                //less suffix file using fis-parser-less compiler plugin
                //the processor supports an array, or a comma-delimited string configuration
                less : ['less'],
                //md suffix file using fis-parser-marked compiler plugin
                md : 'marked'
            }
        },
        roadmap : {
            ext : {
                //convert less suffix to css suffix
                less : 'css',
                //convert coffee suffix to js
                coffee : 'js',
                //convert md suffix to html
                md : 'html'
            }
        }
    });
    ```

### modules.preprocessor

* explanation：config preprocessor plugins
* type：``Object``
* default：empty
* usage：
    ```javascript
    fis.config.set('modules.preprocessor.css', 'image-set');
    ```

    or
    ```javascript
    //fis-conf.js
    fis.config.merge({
        modules : {
            preprocessor : {
                //css file will be compiled by fis-preprocessor-image-se plugin
                css : 'image-set'
            }
        }
    });
    ```

### modules.postprocessor

* explanation：config postprocessor plugins
* type：``Object``
* default：
    ```javascript
    { js : 'jswrapper' }
    ```
* usage：like modules.preprocessor

### modules.lint

* explanation：lint plugin
* type：``Object``
* default：empty
* usage：
    ```javascript
    fis.config.set('modules.lint.js', 'jshint');
    ```

    or
    ```javascript
    //fis-conf.js
    fis.config.merge({
        modules : {
            lint : {
                //js files will be linted by fis-lint-jshint plugin
                js : 'jshint'
            }
        }
    });
    ```

### modules.test

* explanation：test plugin
* type：``Object``
* default：empty
* usage：
    ```javascript
    fis.config.set('modules.test.js', 'phantomjs');
    ```

    or
    ```javascript
    //fis-conf.js
    fis.config.merge({
        modules : {
            test : {
                //js files will by tested by fis-test-phantomjs plugin
                js : 'phantomjs'
            }
        }
    });
    ```

### modules.optimizer

* explanation：minification
* type：``Object``
* default：
    ```javascript
    {
        js : 'uglify-js',
        css : 'clean-css',
        png : 'png-compressor'
    }
    ```
* usage：
    ```javascript
    fis.config.set('modules.optimizer.js', 'uglify-js');
    ```

    or
    ```javascript
    //fis-conf.js
    fis.config.merge({
        modules : {
            optimizer : {
                //js files will by minified by fis-optimizer-uglify-js
                js : 'uglify-js'
            }
        }
    });
    ```

### modules.prepackager

* explanation：pre-packager plugin
* type：``Array`` | ``string``
* default：empty
* usage：
    ```javascript
    fis.config.set('modules.prepackager', 'oo, xx');
    ```

    or
    ```javascript
    //fis-conf.js
    fis.config.merge({
        modules : {
            prepackager : 'oo, xx'
        }
    });
    ```

### modules.packager

* explanation：packager plugin
* type：``Array`` | ``string``
* default：'map'
* usage：
    ```javascript
    fis.config.set('modules.packager', 'your_packager');
    ```

    or
    ```javascript
    //fis-conf.js
    fis.config.merge({
        modules : {
            packager : 'your_packager'
        }
    });
    ```

### modules.spriter
* explanation：csssprite plugin。
* type：``Array`` | ``string``
* default：'csssprites'
* usage：
    ```javascript
    fis.config.set('modules.spriter', 'your_spriter');
    ```

    or
    ```javascript
    //fis-conf.js
    fis.config.merge({
        modules : {
            spriter : 'your_spriter'
        }
    });
    ```

### modules.postpackager

* explanation：post-packager plugin
* type：``Array`` | ``string``
* default：empty
* usage：
    ```javascript
    fis.config.set('modules.postpackager', 'your_postpackager');
    ```

    or
    ```javascript
    //fis-conf.js
    fis.config.merge({
        modules : {
            postpackager : 'your_postpackager'
        }
    });
    ```

### settings

* explanation：plugins detail settings
* type：``Object``
* default：empty
* usage：
    ```javascript
    fis.config.set('settings.optimizer.uglify-js.output.max_line_len', 500);
    fis.config.set('settings.optimizer.clean-css.keepBreaks', true);
    ```

    or
    ```javascript
    //fis-conf.js
    fis.config.merge({
        settings : {
            optimizer : {
                //config fis-optimizer-uglify-js detail
                'uglify-js' : {
                    output : {
                        max_line_len : 500
                    }
                },
                //config fis-optimizer-clean-css detail
                'clean-css' : {
                    keepBreaks : true
                }
            }
        }
    });
    ```

### settings.postprocessor.jswrapper

* explanation：jswrapper
* type：``Object``
* default：empty
* usage：
    ```javascript
    fis.config.set('settings.postprocessor.jswrapper.template', 'try{ ${content} }catch(e){e.message+="${id}";throw e;}');
    ```
    
    or
    ```javascript
    fis.config.merge({
        settings : {
            postprocessor : {
                jswrapper : {
                    template : 'try{ ${content} }catch(e){ e.message += "${id}"; throw e; }'
                }
            }
        }
    });
    ```

### settings.optimizer.uglify-js

* explanation：uglifyJS
* type：``Object``
* default：empty
* options：
    * ``mangle``
    * ``output``
    * ``compress``
* usage：
    ```javascript
    fis.config.set('settings.optimizer.uglify-js.output.ascii_only', true);
    ```
    
    or
    ```javascript
    fis.config.merge({
        settings : {
            optimizer : {
                'uglify-js' : {
                    output : {
                        ascii_only : true
                    }
                }
            }
        }
    });
    ```

### settings.optimizer.clean-css

* explanation：clean-css
* type：``Object``
* default：empty
* options：[文档](https://github.com/GoalSmashers/clean-css#how-to-use-clean-css-programmatically)
* usage：
    ```javascript
    fis.config.set('settings.optimizer.clean-css.keepBreaks', true);
    ```
    
    or
    ```javascript
    fis.config.merge({
        settings : {
            optimizer : {
                'clean-css' : {
                    keepBreaks : true
                }
            }
        }
    });
    ```

### settings.optimizer.png-compressor

* explanation：png-compressor
* type：``Object``
* default：empty
* usage：
    ```javascript
    //use pngquant
    fis.config.set('settings.optimizer.png-compressor.type', 'quant');
    ```
    
    or
    ```javascript
    //use pngquant
    fis.config.merge({
        settings : {
            optimizer : {
                'png-compressor' : {
                    type : 'quant'
                }
            }
        }
    });
    ```

### settings.spriter.csssprites

* explanation：csssprites
* type：``Object``
* default：
    ```javascript
    {
        margin       : 3,
        layout       : 'linear',
        width_limit  : 10240,
        height_limit : 10240
    }
    ```

* options：
    * ``margin``
    * ``layout``：linear,matrix
* usage：
    ```javascript
    fis.config.set('settings.spriter.csssprites.layout', 'matrix');
    ```
    
    or
    ```javascript
    fis.config.merge({
        settings : {
            spriter : {
                csssprites : {
                    layout : 'matrix'
                }
            }
        }
    });
    ```

##RoadMap

### roadmap.path

* explanation：Custom project file attributes, including but not limited to the output path, access url, resource id, dependence, file type。
* type：``Array``
* default：empty
* options：
    * ``reg``：Regular file paths to match (RegExp) or wildcard (String). File path is the path relative to the project root directory to `` / `` beginning
    * ``release``：Set the output file path. The default is the path to the file relative to the project root directory to `` / `` beginning. This value can be set to `` false ``
    * ``url``：Resource location path of the specified file to `` / `` beginning. The default is to release `` value ``, url can be released `` release `` inconsistent path。
    * ``query``：Resource Locator query after the specified file path, such as '? T = 123124132'.
    * ``id``：Resource id specified file. The default is `` namespace `` + `` `` value subpath.
    * ``charset``：Output encoding specified text file. The default is `` utf8 ``, can be formulated as a `` gbk `` or `` gb2312 `` and so on.
    * ``isHtmlLike``：treated like html
    * ``isJsLike``：treated like js
    * ``isCssLike``：treated like css
    * ``useCompile``：Whether to use the compiler
    * ``useHash``：Specify whether to add the output file md5 stamp
    * ``useDomain``：Specify whether the domain name is added at the file reference。
    * ``useCache``：Specify whether to create the file during compilation cache
    * ``useMap``：Specified in the packing stage whether to add files to the index map.json
    * ``useParser``：Whether to use the parser
    * ``usePreprocessor``：Whether to use the preprocessor
    * ``useStandard``：Specifies whether the file through a built-in three languages ​​standardization process treatment
    * ``usePostprocessor``：Whether to use the postprocessor
    * ``useLint``：Whether to use lint
    * ``useTest``：Whether to use test
    * ``useOptimizer``：Whether to use lint optimizer
    * ``useSprite``Whether to use lint csssprite
    * ``isMod``：Mark file for a component of the file
    * ``extras``：The additional data map.json for extensions map.json table
    * ``requires``：The default resource-dependent
* usage：

    ```javascript
    fis.config.merge({
        roadmap : {
            path : [
                {
                    //All js files in the widget directory
                    reg : 'widget/**.js',
                    //Modular file
                    isMod : true,
                    //default require lib.js
                    requires : [ 'lib.js' ],
                    //attach some information to map.json
                    extras : { say : '123' },
                    //release to /static/widget/xxx
                    release : '/static$&'
                },
                {
                    //all js files
                    reg : '**.js',
                    //release to /static/js/xxx
                    release : '/static/js$&'
                },
                {
                    //all ico files
                    reg : '**.ico',
                    //do not use hash
                    useHash : false,
                    //release to /static/xxx
                    release : '/static$&'
                },
                {
                    //all png,gif files
                    reg : /^\/images\/(.*\.(?:png|gif))/i,
                    //url
                    url : '/m/$1?log_id=123',
                    //release to /static/pic/xxx
                    release : '/static/pic/$1'
                },
                {
                    //all php files in template directory
                    reg : /^\/template\/(.*\.php)/i,
                    //treate like html
                    isHtmlLike : true,
                    //set encoding as gbk
                    charset : 'gbk',
                    //release to /php/template/xxx
                    release : '/php/template/$1'
                },
                {
                    //other files
                    reg : /.*/,
                    //do not release
                    release : false
                }
            ]
        }
    });
    ```

### roadmap.ext

* explanation：指定后缀名与标准化语言的映射关系。
* type：``Object``
* default：empty
* notice：fis允许在前端开发中使用less、coffee、utc等非标准语言，并能利用插件将它们编译成标准的js、css语言。这个过程是由modules.parser配置的插件处理的。编译之后，less会变成css文件，那么，后续对于css的处理应该同样可以适用于less的生成文件，因此，这个时候需要通过配置告诉fis，less文件会编译为css文件，并在后续的处理过程中当做css文件对待。
* usage：

    ```javascript
    //fis-conf.js
    fis.config.merge({
        roadmap : {
            ext : {
                //less后缀的文件将输出为css后缀
                //并且在parser之后的其他处理流程中被当做css文件处理
                less : 'css',
                //coffee后缀的文件将输出为js文件
                //并且在parser之后的其他处理流程中被当做js文件处理
                coffee : 'js',
                //md后缀的文件将输出为html文件
                //并且在parser之后的其他处理流程中被当做html文件处理
                md : 'html'
            }
        }
    });
    ```

### roadmap.domain

* explanation：设置静态资源的域名前缀。
* type：``Object`` | ``string``
* default：empty
* notice：fis扩展了html、js、css的[三种语言能力](https://github.com/fis-dev/fis/wiki/三种语言能力)，并支持对资源的定位，定位包括 **开发路径与发布路径的映射关系** 以及 **静态资源服务器域名设置**。roadmap.domain节点就是用于控制该能力的配置。
* 注意：domain的值如果不是特殊需要，请 **不要以"/"结尾**。
* usage：
    ```javascript
    //fis-conf.js
    //usage一
    fis.config.merge({
        roadmap : {
            //所有静态资源文件都使用 http://s1.example.com or http://s2.example.com 作为域名
            domain : 'http://s1.example.com, http://s2.example.com'
        }
    });
    //usage二
    fis.config.merge({
        roadmap : {
            domain : {
                //widget目录下的所有css文件使用 http://css1.example.com 作为域名
                'widget/**.css' : 'http://css1.example.com',
                //所有的js文件使用 http://js1.example.com or  http://js2.example.com 作为域名
                '**.js' : ['http://js1.example.com', 'http://js2.example.com']
            }
        }
    });
    ```
    编译时使用fis release的 ``--domains`` 参数来控制是否添加domain

    ```bash
    $ fis release --domains --dest ../output
    ```

### roadmap.domain.image

* explanation：设置图片资源的域名前缀。
* type：``Array`` | ``string``
* default：empty
* notice：由于使用配置roadmap.domain.ext方式来配置图片资源太麻烦，fis提供了image字段，对于符合 [project.fileType.image](https://github.com/fis-dev/fis/wiki/%E9%85%8D%E7%BD%AEAPI#projectfiletypeimage) 规则的文件，设置相应domain配置。
* usage：
    ```javascript
    //fis-conf.js
    fis.config.merge({
        roadmap : {
            domain : {
                //所有图片文件，使用 http://img.example.com 作为域名
                'image' : ['http://img.example.com']
            }
        }
    });
    ```
    编译时使用fis release的 ``--domains`` 参数来控制是否添加domain

    ```bash
    $ fis release --domains --dest ../output
    ```

## 部署配置

### deploy
* explanation：设置项目的发布方式。
* type：``Object``
* default：empty
* notice：当使用 fis release 命令时，参数 **--dest &lt;name&gt;** 可以指定项目发布配置。deploy配置是一个key-value的object对象，--dest参数的值如果与配置的key相同，则执行该配置的部署设置。fis支持使用post请求向http服务器发送文件，服务器端可以使用php、java等后端逻辑进行接收，[fis-command-release](https://github.com/fis-dev/fis-command-release)插件中提供了一个这样的 [php版示例](https://github.com/fis-dev/fis-command-release/blob/master/tools/receiver.php)，用户可以直接部署此文件于接收端服务器上。
* usage：
    ```javascript
    //fis-conf.js
    fis.config.merge({
        deploy : {
            //使用fis release --dest remote来使用这个配置
            remote : {
                //如果配置了receiver，fis会把文件逐个post到接收端上
                receiver : 'http://www.example.com/path/to/receiver.php',
                //从产出的结果的static目录下找文件
                from : '/static',
                //保存到远端机器的/home/fis/www/static目录下
                //这个参数会跟随post请求一起发送
                to : '/home/fis/www/',
                //通配或正则过滤文件，表示只上传所有的js文件
                include : '**.js',
                //widget目录下的那些文件就不要发布了
                exclude : /\/widget\//i,
                //支持对文件进行字符串替换
                replace : {
                    from : 'http://www.online.com',
                    to : 'http://www.offline.com'
                }
            },
            //名字随便取的，没有特殊含义
            local : {
                //from参数省略，表示从发布后的根目录开始上传
                //发布到当前项目的上一级的output目录中
                to : '../output'
            },
            //也可以是一个数组
            remote2 : [
                {
                    //将static目录上传到/home/fis/www/webroot下
                    //上传文件路径为/home/fis/www/webroot/static/xxxx
                    receiver : 'http://www.example.com/path/to/receiver.php',
                    from : '/static',
                    to : '/home/fis/www/webroot'
                },
                {
                    //将template目录内的文件（不包括template一级）
                    //上传到/home/fis/www/tpl下
                    //上传文件路径为/home/fis/www/tpl/xxxx
                    receiver : 'http://www.example.com/path/to/receiver.php',
                    from : '/template',
                    to : '/home/fis/www/tpl',
                    subOnly : true
                }
            ]
        }
    });
    ```

* 小贴士：--dest参数支持使用逗号（,）分割多个发布配置，比如上面的例子，我们可以使用fis release --dest **remote,local,remote2** 命令在一次编译中同时发布多个目标。

## 打包配置

### pack
* explanation：配置要打包合并的文件。
* type：``Object``
* default：empty
* notice：fis内置的 [打包策略](https://github.com/fis-dev/fis/wiki/运行原理#----1) 与传统的打包概念不同，fis的打包实际上是在建立一个资源表，并将其描述并产出为一份map.json文件，用户应该围绕着这份描述文件来设计前后端运行框架，从而实现运行时判断打包输出策略的架构。
* usage：
    ```javascript
    //fis-conf.js
    fis.config.merge({
        pack : {
            //打包所有的demo.js, script.js文件
            //将内容输出为static/pkg/aio.js文件
            'pkg/aio.js' : ['**/demo.js', /\/script\.js$/i],
            //打包所有的css文件
            //将内容输出为static/pkg/aio.css文件
            'pkg/aio.css' : '**.css'
        }
    });
    ```

* 输出结果：使用命令 fis release **--pack** --md5 --dest ./output 编译项目，然后到output目录下查看产出的map.json内容得到：
    ```json
    {
        "res": {
            "demo.css": {
                "uri": "/static/css/demo_7defa41.css",
                "type": "css",
                "pkg": "p1"
            },
            "demo.js": {
                "uri": "/static/js/demo_33c5143.js",
                "type": "js",
                "deps": [
                    "demo.css"
                ],
                "pkg": "p0"
            },
            "index.html": {
                "uri": "/index.html",
                "type": "html",
                "deps": [
                    "demo.js",
                    "demo.css"
                ]
            },
            "script.js": {
                "uri": "/static/js/script_32300bf.js",
                "type": "js",
                "pkg": "p0"
            },
            "style.css": {
                "uri": "/static/css/style_837b297.css",
                "type": "css",
                "pkg": "p1"
            }
        },
        "pkg": {
            "p0": {
                "uri": "/static/pkg/aio_5bb04ef.js",
                "type": "js",
                "has": [
                    "demo.js",
                    "script.js"
                ],
                "deps": [
                    "demo.css"
                ]
            },
            "p1": {
                "uri": "/static/pkg/aio_cdf8bd3.css",
                "type": "css",
                "has": [
                    "demo.css",
                    "style.css"
                ]
            }
        }
    }
    ```


##Available plugins

##Who uses FIS?
These are just a few companies and projects that are using FIS.
### [Baidu](http://www.baidu.com/)
- [baidu page search](http://www.baidu.com/) 
- [baidu map](http://ditu.baidu.com/)
- [baidu tieba](http://tieba.baidu.com/)
- [baidu zhidao](http://zhidao.baidu.com/)
- [baidu image](http://image.baidu.com/)
- [baidu wenku](http://wenku.baidu.com/)
- [baidu baike](http://baike.baidu.com/)
- [baidu lvyou](http://lvyou.baidu.com/)
- [baidu news](http://news.baidu.com/)
- [baidu wangpan](http://wangpan.baidu.com/disk/home)
- [baidu xiangce](http://xiangce.baidu.com/)
- [baidu yuedu](http://yuedu.baidu.com/)
- [baidu baifubao](https://www.baifubao.com/)
- [baidu licai](http://8.baidu.com/)
- [baidu tuan](http://tuan.baidu.com/)

###[Tencent](http://www.qq.com/)
### [UC](http://www.uc.cn/)
### [Funshion](http://www.funshion.com/)
### [B5M](http://www.b5m.com/)
### [7k7k](http://www.7k7k.com/)
### [Rong360](http://rong360.com/)

This is just a short list of companies and projects that use FIS. [See more here](./doc/who uses FIS.md)..

##Architecture
![](https://raw.github.com/fis-dev/fis-plus/gh-pages/images/struct.png)

##License
[F.I.S](http://fis.baidu.com) is available under the terms of the MIT License.
