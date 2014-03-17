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
