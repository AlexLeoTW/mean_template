// Set the 'NODE_ENV' variable
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var express = require('./config/express'),
    config = require('./config/config');
    debug = require('debug')(`${config.appName}:server`);

var app = express();

app.listen(config.port);
debug(`${config.appName} listening on port ${config.port}`);

module.exports = app;
