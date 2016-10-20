var express = require('express');
var app = express();
var logger = require('morgan');
var bodyParser = require('body-parser');
var port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(logger('dev'));

app.get('/', function(req, res, next) {
    res.send('get It');
});
app.get('/add', function(req, res, next) {
    res.send('add something');
});
app.all('*', function(req, res){
    res.status(404);
    res.send('not found');
});


app.listen(port,function(){
    console.log('listening on port ' + port)
});