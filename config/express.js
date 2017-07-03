var express = require('express'),
    path = require('path'),
    logger = require('morgan'),
    compress = require('compression');

module.exports = function() {
    var app = express();

    app.set('views', path.join(__dirname, '../app/views'));
    app.set('view engine', 'ejs');

    // Use the 'NDOE_ENV' variable to activate the 'morgan' logger or 'compress' middleware
	if (process.env.NODE_ENV === 'development') {
		app.use(logger('dev'));
	} else if (process.env.NODE_ENV === 'production') {
		app.use(compress());
	}

    require('../app/routes/index.server.routes.js')(app);

    // Configure static file serving
	app.use(express.static('./public'));

    return app;
};
