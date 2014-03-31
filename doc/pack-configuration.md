###Concat-Sourcemap

Concatenate files and generate a source map file.

####Usage

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

Use fis release with `` -- pack `` parameter

```bash
$ fisp release --pack --dest ../output
``` 

In this example, it will concatenate the specified source files(in order), joining files with default separator and writing the output to dest/map.json.

```
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

####How to use sourcemap

The [framework](./widget.md) can efficiently control the loading of static resources with sourcemap. we can get automatic dependency resolution and the ability to optimize downloads.