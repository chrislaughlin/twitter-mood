'use strict';

// Module dependencies.
var express = require('express'),
    config = require('./config/config');

var app = express();

// Express Configuration
require('./config/express')(app);

// Start server
var port = config.get('express:port');
app.listen(port, function () {
    console.log('Twitter Mood server listening on port %d in %s mode', port, app.get('env'));
});