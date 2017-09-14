var express = require("express");
var app = express();
var bodyParser = require("body-parser");

var session = require('express-session');
app.use(session({secret: 'codingdojorocks'}));

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + "/static"));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    var my_number = Math.floor(Math.random() * 100);
    if (!req.session.number) {
        req.session.number = my_number;
    }

    var render_message = req.session.message;

    res.render('index', {message: render_message});
})

app.post('/guess', function (req, res) {
    console.log(req.session.number);

    if (req.body.guess == req.session.number) {
        message = req.session.number + " was the correct number!";
    }

    else if (req.body.guess < req.session.number) {
        message = "That number is too low";
    }

    else {
        message = "That number is too high";
    }

    console.log(message);

    req.session.message = message;

    res.redirect('/');
})

app.post('/reset', function (req, res) {

    req.session.number = null;
    
    message = "New game!"

    req.session.message = message;

    res.redirect('/');
})


app.listen(8000, function() {
    console.log("listening on port 8000");
})
