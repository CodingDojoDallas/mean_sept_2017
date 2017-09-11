var express = require("express");

var session = require('express-session');
//app.use(session({secret: 'coding'}));

var bodyParser = require('body-parser')
//app.use(bodyParser.urlencoded({extended: true}));

var app = express();

app.use(session({secret: 'coding'}));
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + "/static"));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function (req, res){
    if (req.session.count == null){
      req.session.count = 1;
      console.log(req.session.count);
    }
    else {
      req.session.count += 1;
      console.log(req.session.count);
    }

    res.render('index', {count: req.session.count});
});

app.get('/two', function (req, res){
  req.session.count += 2;
  res.redirect('/');
});

app.get('/reset', function (req, res){
    req.session.count = 0;
    res.redirect('/');
});

app.listen(4000, function() {
  console.log("listening on port 4000");
})
