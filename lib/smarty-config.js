// fis.baidu.com

'use strict';

var path = require('path');
var util = require('util');

module.exports = function (ret, settings, conf, opt) {
  var leftDelimiter = fis.config.get('settings.smarty.left_delimiter', '{%');
  var rightDelimiter = fis.config.get('settings.smarty.right_delimiter', '%}');

  var smartyConfigFile = fis.file.wrap(path.join(fis.project.getProjectPath(), 'smarty.conf'));
  if (smartyConfigFile.exists()) {
    // nothing
  } else {
    // Auto generate smarty.conf
    var fileContent = util.format('left_delimiter="%s"\nright_delimiter="%s"\n', leftDelimiter, rightDelimiter);
    var charset;
    if ((charset = fis.config.get('project.charset', null))) {
      fileContent += util.format('encoding="%s"\n', charset); 
    }
    smartyConfigFile.setContent(fileContent);
    ret['pkg'][smartyConfigFile.subpath] = smartyConfigFile;
  }
}
