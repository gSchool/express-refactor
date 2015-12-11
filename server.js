var express = require('express');
var app = express();

// Set the view engine && public folder
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

// import the routes for song
var routeBootstrap = require('./controllers/routes');

// Import the models
var song = require('./models/song');

// Register root route
app.get('/', function(req, res) {
  res.render('index');
});

// Register song app routes
app.use('/song', routeBootstrap)

var server = app.listen(3000, function () {
  var port = server.address().port;
  console.log('Server up and listening on', port);
});
