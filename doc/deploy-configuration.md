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
