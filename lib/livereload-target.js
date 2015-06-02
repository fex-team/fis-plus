// fis.baidu.com

'use strict';

module.exports = function(ret, settings, conf, opt) {

  if (!opt.live)  {
    return;
  }

  var exclude = fis.config.get('livereload.exclude');

  var leftDelimiter = fis.config.get('settings.smarty.left_delimiter', '{%');
  var rightDelimiter = fis.config.get('settings.smarty.right_delimiter', '%}');

  fis.util.map(ret.src, function InsertLiveReloadPlaceholder (subpath, file) {

    if (file.extras && file.extras.isPage && file.rExt == '.tpl') {
      
      if (exclude && exclude.test && exclude.test(file.realpath)) {
        return;
      }

      var content = file.getContent();
      var reg = new RegExp(fis.util.escapeReg(leftDelimiter) + '\\/body\\\s*' + fis.util.escapeReg(rightDelimiter));
      var p;

      if (~(p = content.indexOf(leftDelimiter + '/body' + rightDelimiter))) {
        content = content.substr(0, p) + '<!--livereload-->' + content.substr(p);
      } else if (reg.test(content)) {
        content = content.replace(reg, function (all) {
          return "<!--livereload-->" + all; 
        });
      } else if (~content.indexOf(leftDelimiter + 'extends')) {
        // if has {extends, not layout
        p = content.lastIndexOf(leftDelimiter + '/block' + rightDelimiter);
        content = content.substr(0, p) + '<!--livereload-->' + content.substr(p);
      } else {
        content += '<!--livereload-->';
      }

      file.setContent(content);
    }
  });
};