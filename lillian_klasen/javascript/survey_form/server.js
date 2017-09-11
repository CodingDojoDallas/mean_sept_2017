var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + "/static"));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    res.render('index');
})

app.post('/survey', function (req, res) {
    user = req.body;
    res.redirect('/result');
})

app.get('/result', function (req, res) {
    res.render('results');
})


app.listen(8000, function() {
    console.log("listening on port 8000");
})
