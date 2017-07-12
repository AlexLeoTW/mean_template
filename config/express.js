var express = require('express'),
    config = require('./config'),
    path = require('path'),
    logger = require('morgan'),
    compress = require('compression'),
    favicon = require('serve-favicon'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    csp = require('helmet-csp'),
    cors = require('cors');

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
  app.use(cors({
    origin: config.host.indexOf("localhost") >= 0 ? '*' : config.host   // some browsers tend to ignore localhost in CORS
  }));
  app.use(csp({
    directives: {
      defaultSrc: ["'self'", config.host],
      scriptSrc: ["'self'", config.host, "'unsafe-inline'"],
      styleSrc: ["'self'", config.host],
      fontSrc: ["'self'", config.host],
      imgSrc: ["'self'", config.host],
      objectSrc: ["'self'", config.host],
      sandbox: ['allow-forms', 'allow-scripts'],
      reportUri: `'self' ${config.host} /report-violation`,
      upgradeInsecureRequests: true
    },

    // This module will detect common mistakes in your directives and throw errors
    // if it finds any. To disable this, enable "loose mode".
    loose: false,

    // Set to true if you only want browsers to report errors, not block them.
    // You may also set this to a function(req, res) in order to decide dynamically
    // whether to use reportOnly mode, e.g., to allow for a dynamic kill switch.
    reportOnly: false,

    // Set to true if you want to blindly set all headers: Content-Security-Policy,
    // X-WebKit-CSP, and X-Content-Security-Policy.
    setAllHeaders: false,

    // Set to true if you want to disable CSP on Android where it can be buggy.
    disableAndroid: false,

    // Set to false if you want to completely disable any user-agent sniffing.
    // This may make the headers less compatible but it will be much faster.
    // This defaults to `true`.
    browserSniff: true
  }));

  require('../app/routes/index.server.routes.js')(app);

  // Configure static file serving
  app.use(express.static('./public'));

  return app;
};
