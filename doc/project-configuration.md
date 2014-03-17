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