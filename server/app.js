var express = require('express');
var db = require('./db/index.js');

// Middleware
var morgan = require('morgan');
var parser = require('body-parser');

// Router
var router = require('./routes.js');

var app = express();
module.exports.app = app;

// Set what we are listening on.
app.set('port', 3000);

// db.query('CREATE DATABASE IF NOT EXISTS test', function(err) {
//   if (err) {
//     console.error(err);
//   }  
// });

// app.post('/users', function (req, res) {
//   db.query('hahaha', req.body, function (err, result) {
//     if (err) {
//       throw err;
//     }
//     res.send('haha');
//   });
// });

// Logging and parsing
app.use(morgan('dev'));
app.use(parser.json());

// Set up our routes
app.use('/classes', router);

// Serve the client files
app.use(express.static(__dirname + '/../client'));

// If we are being run directly, run the server.
if (!module.parent) {
  app.listen(app.get('port'));
  console.log('Listening on', app.get('port'));
}

