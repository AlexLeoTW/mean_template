var express = require('express'),
    config = require('./config'),
    path = require('path'),
    logger = require('morgan'),
    compress = require('compression'),
    favicon = require('serve-favicon'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser');

module.exports = function() {
  var app = express();

  app.set('views', path.join(__dirname, '..', 'app', 'views'));
  app.set('view engine', 'ejs');
  app.use(favicon(path.join(__dirname, '..', 'public', 'favicon.ico')));

  // Use the 'NDOE_ENV' variable to activate the 'morgan' logger or 'compress' middleware
  if (process.env.NODE_ENV === 'development') {
    app.use(logger('dev'));
  } else if (process.env.NODE_ENV === 'production') {
    app.use(compress());
  }

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(cookieParser());

  require('../app/routes/index.server.routes.js')(app);

  // Configure static file serving
  app.use(express.static('./public'));

  return app;
};
