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
