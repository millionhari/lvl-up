/**
 * Express configuration
 */

'use strict';

var express         = require('express');
var favicon         = require('serve-favicon');     // Serve Favicons from express
var morgan          = require('morgan');            // Logger - terminal messages
var compression     = require('compression');       // Enable compression through express
var bodyParser      = require('body-parser');       // Allows you to parse JSON/RAW/TEXT/URL-ENCODED
var methodOverride  = require('method-override');   // Lets you use HTTP verbs such as PUT or DELETE in places where the client doesn't support it.
var cookieParser    = require('cookie-parser');     // Get Cookies
var errorHandler    = require('errorhandler');      // Should be DEV Only
var path            = require('path');              // Node Path module
var config          = require('./environment');

module.exports = function(app) {
  var env = app.get('env');

  app.set('views', config.root + '/server/views');
  app.engine('html', require('ejs').renderFile);
  app.set('view engine', 'html');
  app.use(compression());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  app.use(methodOverride());
  app.use(cookieParser());

  if ('production' === env) {
    app.use(favicon(path.join(config.root, 'public', 'favicon.ico')));
    app.use(express.static(path.join(config.root, 'public')));
    app.set('appPath', path.join(config.root, 'public'));
    app.use(morgan('dev'));
  }

  if ('development' === env || 'test' === env) {
    app.use(express.static(path.join(config.root, 'client')));  //server static files from here
    app.set('appPath', path.join(config.root, 'client'));
    app.use(morgan('dev'));
    app.use(errorHandler()); // Error handler - has to be last
  }
};