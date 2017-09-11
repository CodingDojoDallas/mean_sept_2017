var express = require("express");
var app = express();
var bodyParser = require('body-parser');

var session = require('express-session');

app.use(session({secret: 'codingdojorocks'}));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function (request, response) {
    if(request.session.counter){
        request.session.counter++;
    }
    else {
        request.session.counter = 1;
    }

    counter = { counter: request.session.counter }

    response.render('index', counter);
})

app.post('/addTwo', function (request, response) {
    request.session.counter += 1;

    response.redirect('/')
})

app.post('/reset', function (request, response) {
    request.session.counter = 0;

    response.redirect('/')
})

app.listen(8000, function() {
    console.log("listening on port 8000");
})
