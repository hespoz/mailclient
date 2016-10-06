//server.js
var express = require('express');
var http = require('http'); 
var path = require('path');
var app = express();
var router = express.Router();


app.set('views', path.join(__dirname, './src/views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, './src/public')));

//This router load the index.ejs template. This contains the base html.
app.use(router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
}));

//This router returns the messages_sample.json file.
app.use(router.get('/messages_sample.json', function(req, res, next) {
  res.json(require( "./messages_sample.json" ));
}));

//This creates the server and start listen at port 3000
http.createServer(app).listen(3000, function() {
  console.log('\nDummy server listening on port 3000');
});

module.exports = app;