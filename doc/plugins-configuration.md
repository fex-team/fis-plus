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