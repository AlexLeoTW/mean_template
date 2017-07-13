module.exports = function (app) {
  const echo = require('../controllers/echo.server.controller');

  app.all('/echo', echo.res);
};
