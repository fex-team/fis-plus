##Command Line

There are three commands you have to know which can meet all you needs.

```
Usage: fis-plus <command>

  Commands:

    release            build and deploy your project
    server             launch a php-cgi server
    lights install     install components and demos

  Options:

    -h, --help     output usage information
    -v, --version  output the version number
    --no-color     disable colored output

 ```

###fisp release

fisp release is a very powerful command which can compile and deploy your code. It can meet a variety of front-end development needs with the appropriate parameter.

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

###fisp server

fisp server command can start a small built-in server which can monitor your file changes. If you run php/smarty on your pc, make sure you have installed [Java](http://java.com/en/) and [php](http://cn2.php.net/downloads.php). After install Java and php, we can start the debug server

```
$ fisp server start
checking java support : version 1.6.0
checking php-cgi support : version 5.2.11
starting fis-server on port : 8080
```

After the server starts, it automatically checks the environment, and finally tell you that it is listening on port 8080.

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

###lights install

Lights is a front end package management tool which can make it exceedingly simple to find, install and keep packages up-to-date. You can install fis demo, modules and other resources through lights.

below is the output from lights --help

```
Usage: lights <command>

Commands:

      install      install resource from lights
      search       search resource of lights
      adduser      add user of lights
      publish      publish resource to lights
      unpublish    remove resource to lights
      owner        change ownership of resource
      config       set or get config if lights

Options:

  -h, --help     output usage information
  -v, --version  output the version number
```

View all packages available through Lights's registry(http://lightjs.duapp.com).