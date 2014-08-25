var fis = module.exports = require('fis');

fis.cli.name = "fis-plus";
fis.cli.info = fis.util.readJSON(__dirname + '/package.json');

fis.require.prefixes = ['fisp', 'fis'];

fis.config.merge({
    statics: '/static',
    templates: '/template',
    server: {
        rewrite: true,
        libs: 'pc',
        clean: {
            exclude: "fisdata**,smarty**,rewrite**,index.php**,WEB-INF**"
        }
    },
    modules : {
        parser : {
            less : 'less',
            tmpl: 'bdtmpl',
            po: 'po'
        },
        preprocessor: {
            tpl: 'extlang'
        },
        postprocessor: {
            tpl: 'require-async',
            js: 'jswrapper, require-async'
        },
        optimizer : {
            tpl : 'smarty-xss,html-compress'
        },
        prepackager: 'widget-inline,js-i18n'
    },
    roadmap : {
        ext : {
            less : 'css',
            tmpl : 'js',
            po   : 'json'
        },
        path : [
            // i18n
            {
                reg: '/fis_translate.tpl',
                release: '${templates}/${namespace}/widget/fis_translate.tpl'
            },
            {
                reg: /\/lang\/([^\/]+)\.po/i,
                release: '/config/lang/${namespace}.$1.po'
            },
            //i18n end
            {
                reg : /^\/widget\/(.*\.tpl)$/i,
                isMod : true,
                url : '${namespace}/widget/$1',
                release : '${templates}/${namespace}/widget/$1'
            },
            {
                reg : /^\/widget\/(.*\.(js|css))$/i,
                isMod : true,
                release : '${statics}/${namespace}/widget/$1'
            },
            {
                reg : /^\/page\/(.+\.tpl)$/i,
                isMod: true,
                release : '${templates}/${namespace}/page/$1',
                extras: {
                    isPage: true
                }
            },
            {
                reg : /\.tmpl$/i,
                release : false,
                useOptimizer: false
            },
            {
                reg: /^\/(static)\/(.*)/i,
                release: '${statics}/${namespace}/$2'
            },
            {
                reg: /^\/(config|test)\/(.*)/i,
                isMod: false,
                release: '/$1/${namespace}/$2'
            },
            {
                reg : /^\/(plugin|smarty\.conf$)|\.php$/i
            },
            {
                reg : 'server.conf',
                release : '/server-conf/${namespace}.conf'
            },
            {
                reg: "domain.conf",
                release: '/config/$&'
            },
            {
                reg: "build.sh",
                release: false
            },
            {
                reg : '${namespace}-map.json',
                release : '/config/${namespace}-map.json'
            },
            {
                reg: /^.+$/,
                release: '${statics}/${namespace}$&'
            }
        ]
    },
    settings : {
        parser : {
            bdtmpl : {
                LEFT_DELIMITER : '<#',
                RIGHT_DELIMITER : '#>'
            }
        },
        postprocessor : {
            jswrapper: {
                type: 'amd'
            }
        }
    }
});
