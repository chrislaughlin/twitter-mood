// Module dependencies.
var express = require('express'),
    config = require('./config/config'),
    routes = require('./routes');

var app = express();

// Express Configuration
require('./config/express')(app);

//Routes
// GET '/hello' - return "Hello World"
app.get('/hello', routes.hello);
// GET '/score/username
app.get('/score/:username', routes.getScore);

// Start server
var port = config.get('express:port');
app.listen(port, function () {
    console.log('Twitter Mood server listening on port %d in %s mode', port, app.get('env'));
});