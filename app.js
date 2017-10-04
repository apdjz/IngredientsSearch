'use strict';

let express = require( 'express' );
let app = express();
let routes = require('./routes');
let bodyParser = require('body-parser');
let nunjuck = require('nunjucks');
let morgan = require('morgan');

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
app.use(morgan('dev'));

app.use(routes);


app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.listen(3000, function () {
    console.log('Listening on port 3000!');
});

// handle all errors (anything passed into `next()`)
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  console.error(err);
  res.send('oh no');
});


