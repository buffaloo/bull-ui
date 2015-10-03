/*eslint-env node */
'use strict';

module.exports = function (queues, config) {
  if (!Array.isArray(queues)) {
    queues = [queues];
  }

  var path = require('path');
  var http = require('http');
  var express = require('express');
  var app = express();
  var server = http.createServer(app);

  var bunyan = require('bunyan');

  var logger = bunyan.createLogger({
    name: 'bull-ui',
    level: config.logLevel
  });

  function absPath(_path) {
    return path.join(__dirname, _path);
  }

  var options = {};

  app.use(express.static(absPath('app'), options));
  app.use(express.static(absPath('app/components'), options));
  app.use(express.static(absPath('app/views'), options));
  app.use(express.static(absPath('app/directives'), options));

  app.use('/queues', require('./routes/queues'));
  app.use('/jobs', require('./routes/jobs'));

  app.get('/queues', function (req, res) {
    res.send(queues);
  })

  logger.info("Listening to port %s", config.port);
  server.listen(config.port);
}
