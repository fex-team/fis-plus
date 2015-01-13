/**
 * use sass
 */

var path = require('path');
var url = require('url');

fis.config.set('project.exclude', '**/_*.scss');
fis.config.set('modules.parser.scss', 'sass');  //启用fis-parser-sass插件
fis.config.set('roadmap.ext.scss', 'css');      //scss文件编译后产出为css文件
fis.config.set('framework', 'fis-plus');

fis.config.set('roadmap.path', [
    {
        reg: '*\.min\.(?:js|css)$',
        useOptimizer: false,
        release: '/static/${framework}/$&'
    },
    {
        reg: '**/_Sidebar.md',
        isNav: true
    },
    {
        reg: '**.md'
    },
    {
        reg: '/document.html',
        isDocumentPage: true
    },
    {
        reg: '**.html'
    },
    {
        reg: '**',
        release: '/static/${framework}/$&'
    }
]);

fis.config.set('settings.parser.sass', {
    'include_paths': [__dirname, path.join(__dirname, 'lib', 'bootstrap', 'stylesheets')]
});

// 获取导航需要编译加`-c`或者`-u`，因为我偷懒了
var gLinks = [];
fis.config.set('roadmap.ext.md', 'html');
fis.config.set('modules.parser.md', function (content, file, conf) {
    var marked = require('marked');
    var renderer = new marked.Renderer();
    var navs = [];
    if (file.isNav) {
        renderer.link = function(href, title, text) {
            var info = url.parse(href);
            if (!~navs.indexOf(info.pathname)) {
                navs.push(info.pathname);
            }
        };
    }

    renderer.heading = function (text, level) {
        var link = {};
        link.text = text;
        link.level = level;
        var escapedText = text;

        //收集所有的链接
        gLinks.push(link);
        if (level != 1) level += 1;
        return '<h' + level + ' class="' + (level == 1 ? 'page-header' : '') + '"><a name="' +
                    escapedText +
                     '" class="anchor" href="#' +
                     escapedText +
                     '"><span class="header-link"></span></a>' +
                      text + '</h' + level + '>';
    };

    marked.setOptions({
        renderer: renderer,
        gfm: true,
        tables: true,
        breaks: false,
        pedantic: false,
        sanitize: true,
        smartLists: true,
        smartypants: false
    });

    content = marked(content);
    if (file.isNav) {
        return navs.map(function(path) {
            return '<div class="bs-docs-section"><!--inline[' + path + '.md]--></div>';
        }).join('\n');
    }
    return content;
});

function getLinksHtml(links) {
    var ret = '';
    var flag = false;
    links.forEach(function (link) {
        if (link.level == 1) {
            if (flag) {
                ret += '</ul></li>';
                flag = false;
            }
            ret += '<li><a href="#' + link.text + '">' + link.text + '</a><ul class="nav">';
        } else if (link.level == 2) {
            flag = true;
            ret += '<li><a href="#' + link.text + '">' + link.text + '</a>';
        }
    });
    return ret;
}

fis.config.set('modules.postpackager', function (ret, settings, conf, opt) {
    fis.util.map(ret.src, function (subpath, file) {
        if (file.isDocumentPage) {
            console.log(gLinks);
            file.setContent(file.getContent().replace('<document_links>', getLinksHtml(gLinks)));
            gLinks = []; //reset
        }
    });
});
