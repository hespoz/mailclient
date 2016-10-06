//server.js
var express = require('express');
var http = require('http'); 
var path = require('path');
var app = express();
var router = express.Router();


app.set('views', path.join(__dirname, './src/views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, './src/public')));


app.use(router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
}));

app.use(router.get('/messages_sample.json', function(req, res, next) {
  res.json(require( "./messages_sample.json" ));
}));


router.get('/', function(req, res, next) {
  
});

http.createServer(app).listen(3000, function() {
  console.log('\nDummy server listening on port 3000');
});




module.exports = app;