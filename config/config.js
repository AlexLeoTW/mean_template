// Load the correct configuration file according to the 'NODE_ENV' variable
config = require('./env/' + process.env.NODE_ENV + '.js');
config.appName = 'mean_template';

module.exports = config;
