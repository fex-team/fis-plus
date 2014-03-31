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
    $ fisp release --domains --dest ../output
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