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

##Project configuration

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

* explanation：set the file include filter of project source
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

##Plugins

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

## Settings

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
* options：[doc](https://github.com/GoalSmashers/clean-css#how-to-use-clean-css-programmatically)
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

* explanation：Specify the mapping between the extension and standardization of the language
* type：``Object``
* default：empty
* usage：

    ```javascript
    //fis-conf.js
    fis.config.merge({
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

### roadmap.domain

* explanation：config domain
* type：``Object`` | ``string``
* default：empty
* usage：
    ```javascript
    //fis-conf.js
    //usage
    fis.config.merge({
        roadmap : {
            //All static resource files use as a domain name http://s1.example.com or http://s2.example.com
            domain : 'http://s1.example.com, http://s2.example.com'
        }
    });
    //usage
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

	Use fis release with `` - domains `` parameter to control whether to add domain

    ```bash
    $ fis release --domains --dest ../output
    ```

### roadmap.domain.image

* explanation：set image domain
* type：``Array`` | ``string``
* default：empty
* usage：
    ```javascript
    //fis-conf.js
    fis.config.merge({
        roadmap : {
            domain : {
                //All images use as a domain name http://img.example.com
                'image' : ['http://img.example.com']
            }
        }
    });
    ```
    Use fis release with `` - domains `` parameter to control whether to add domain

    ```bash
    $ fis release --domains --dest ../output
    ```

## Deploy

* explanation：deploy。
* type：``Object``
* default：empty
* usage：
    ```javascript
    //fis-conf.js
    fis.config.merge({
        deploy : {
            //through fis release --dest remote
            remote : {
                //the receiver url
                receiver : 'http://www.example.com/path/to/receiver.php',
                //Find the file from the static directory
                from : '/static',
                //Saved to the remote machine / home / fis / www static directory /
                to : '/home/fis/www/',
                //Wildcard or regular filter files, which means that all the js file uploads only
                include : '**.js',
                //do not release files in widget directory
                exclude : /\/widget\//i,
                //Support for file string replacement
                replace : {
                    from : 'http://www.online.com',
                    to : 'http://www.offline.com'
                }
            },
            //Just take the name, there is no special meaning
            local : {
                //from parameter is omitted, which means that after the release from the root directory to start uploading
                //Posted on the current project output directory level in
                to : '../output'
            },
            //Array
            remote2 : [
                {
                    //Upload the static directory to / home / fis / www / webroot under
                    //Upload file path is / home / fis / www / webroot / static / xxxx
                    receiver : 'http://www.example.com/path/to/receiver.php',
                    from : '/static',
                    to : '/home/fis/www/webroot'
                },
                {
                    //Upload the template directory to /home/fis/www/tpl\
                    //Upload file path is /home/fis/www/tpl/xxxx
                    receiver : 'http://www.example.com/path/to/receiver.php',
                    from : '/template',
                    to : '/home/fis/www/tpl',
                    subOnly : true
                }
            ]
        }
    });
    ```

* Tips: - dest parameter supports the use of a comma (,) to separate multiple release configuration, such as the above example, we can use the fis release - dest ** remote, local, remote2 ** command compilation released simultaneously in more than one goals.

## Pack

* explanation：Configuration files to be packaged。
* type：``Object``
* default：empty
* usage：
    ```javascript
    //fis-conf.js
    fis.config.merge({
        pack : {
            //pack all demo.js, script.js
            //The contents of the output is static / pkg / aio.js file
            'pkg/aio.js' : ['**/demo.js', /\/script\.js$/i],
            //package all the css files
            //The contents of the output is static/pkg/aio.css file
            'pkg/aio.css' : '**.css'
        }
    });
    ```

* Output: Use the command fis release ** - pack ** - md5 - dest / output compile the project, and then to the output directory to see the contents of output map.json get.：
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
These are just some plugins, [See more on npm](https://www.npmjs.org/search?q=fis).

- [fis-chassis](https://www.npmjs.org/package/fis-chassis) 
- [fis-sass](https://www.npmjs.org/package/fis-sass)
- [fis-gui](https://www.npmjs.org/package/fis-gui)
- [fis-webapp](https://www.npmjs.org/package/fis-webapp)
- [fis-modular-reqlang](https://www.npmjs.org/package/fis-modular-reqlang)
- [fis-command-upgrade](https://www.npmjs.org/package/fis-command-upgrade)
- [fis-optimizer-uglify-js](https://www.npmjs.org/package/fis-optimizer-uglify-js)
- [fis-packager-map](https://www.npmjs.org/package/fis-packager-map)
- [fis-prepackager-widget-inline](https://www.npmjs.org/package/fis-prepackager-widget-inline)
- [fis-command-xgettext](https://www.npmjs.org/package/fis-command-xgettext)
- [fis-packager-autopack](https://www.npmjs.org/package/fis-packager-autopack)
- [fis-parser-handlebars](https://www.npmjs.org/package/fis-parser-handlebars)
- [fis-parser-sass](https://www.npmjs.org/package/fis-parser-sass)
- [fis-postpackager-modjs](https://www.npmjs.org/package/fis-postpackager-modjs)
- [fis-cloud-app-light](https://www.npmjs.org/package/fis-cloud-app-light)
- [fis-postpackager-phiz](https://www.npmjs.org/package/fis-postpackager-phiz)
- [fis-parser-dot](https://www.npmjs.org/package/fis-parser-dot)
- [fis-lint-jshint](https://www.npmjs.org/package/fis-lint-jshint)
- [fis-optimizer-png-compressor](https://www.npmjs.org/package/fis-optimizer-png-compressor)
- [fis-parser-bdtmpl](https://www.npmjs.org/package/fis-parser-bdtmpl)
- [fis-optimizer-smarty-xss](https://www.npmjs.org/package/fis-optimizer-smarty-xss)
- [fis-command-cssrtl](https://www.npmjs.org/package/fis-command-cssrtl)
- [fis-postpackager-ypm](https://www.npmjs.org/package/fis-postpackager-ypm)
- [fis-parser-po](https://www.npmjs.org/package/fis-parser-po)
- [fis-postpackager-increment](https://www.npmjs.org/package/fis-postpackager-increment)
- [fis-lint-csslint](https://www.npmjs.org/package/fis-lint-csslint)
- [fis-preprocessor-image-set](https://www.npmjs.org/package/fis-preprocessor-image-set)
- [fis-parser-utc](https://www.npmjs.org/package/fis-parser-utc)
- [fis-parser-coffee-script](https://www.npmjs.org/package/fis-parser-coffee-script)
- [fis-parser-dust](https://www.npmjs.org/package/fis-parser-dust)
- [fis-command-component](https://www.npmjs.org/package/fis-command-component)
- [fis-postpackager-map-php](https://www.npmjs.org/package/fis-postpackager-map-php)
- [fis-postpackager-ext-map](https://www.npmjs.org/package/fis-postpackager-ext-map)
- [fis-postprocessor-widget-inline](https://www.npmjs.org/package/fis-postprocessor-widget-inline)
- [fis-postpackager-b5min](https://www.npmjs.org/package/fis-postpackager-b5min)
- [fis-deploy-distfile](https://www.npmjs.org/package/fis-deploy-distfile)
- [fis-parser-jade-inline](https://www.npmjs.org/package/fis-parser-jade-inline)
- [fis-parser-extlang](https://www.npmjs.org/package/fis-parser-extlang)
- [fis-parser-ejs](https://www.npmjs.org/package/fis-parser-ejs)
- [fis-parser-iknow-less](https://www.npmjs.org/package/fis-parser-iknow-less)
- [fis-postpackager-inlinemap](https://www.npmjs.org/package/fis-postpackager-inlinemap)

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

This is just a short list of companies and projects that use FIS. [See more here](./doc/who uses FIS.md).

##Architecture
![](https://raw.github.com/fis-dev/fis-plus/gh-pages/images/struct.png)

##License
[F.I.S](http://fis.baidu.com) is available under the terms of the MIT License.
