## Built-ins Configuration

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