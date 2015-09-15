var path = require('path');

var appRoot = 'client/src/';
var outputRoot = 'client/_built/';

module.exports = {
  root: appRoot,
  source: appRoot + '**/*.js',
  html: appRoot + '**/*.html',
  style: appRoot + '**/*.scss',
  output: outputRoot
};
