// require express
var session = require('express-session');
var express = require("express");
// path module -- try to figure out where and why we use this
var path = require("path");
// create the express app
var app = express()
;
var bodyParser = require('body-parser');
// use it!
app.use(session({secret: 'cameronssecret'})); 
//session
app.use(bodyParser.urlencoded({ extended: true }));
// static content
app.use(express.static(path.join(__dirname, "./static")));
// setting up ejs and our views folder
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
// root route to render the index.ejs view
app.get('/', function(req, res) {
    if (req.session.count) {
        req.session.count += 1;
    }
    else {
        req.session.count = 1;
    }
    console.log(req.session.count)
    res.render("index", {count: req.session.count});
})

app.post('/add', function(req, res) {
    console.log("POST DATA", req.body);
    // This is where we would add the user to the database
    // Then redirect to the root route
    res.redirect('/');
})
app.post('/add2', function(req, res) {
    console.log("POST DATA", req.body);
    req.session.count += 1
    // This is where we would add the user to the database
    // Then redirect to the root route
    res.redirect('/');
})
app.post('/reset', function(req, res) {
    console.log("POST DATA", req.body);
    req.session.count = 0
    res.redirect('/')
})
// tell the express app to listen on port 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
});
