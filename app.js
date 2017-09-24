'use strict';

var express = require( 'express' );
var app = express();
var routes = require('./routes');
var bodyParser = require('body-parser');
var nunjuck = require('nunjucks');
var socketio = require('socket.io');

nunjuck.configure('./views', {
    express: app,
    noCache: true,
    autoescape: true
  });

app.use(express.static('public'));
app.set('view engine', 'html');
app.engine('html', nunjuck.render);
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
//app.use(routes);

  var server = app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
  });

  var io = socketio.listen(server);
  app.use('/', routes(io));