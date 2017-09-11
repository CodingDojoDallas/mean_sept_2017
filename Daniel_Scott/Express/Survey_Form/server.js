// require express
var express = require("express");
// path module -- try to figure out where and why we use this
var path = require("path");

var port = 8000;
// create the express app
var app = express();

var session = require("express-session");

app.use(session({
  secret: 'phoenix', // it doesn't matter what this is
  resave: false,
  saveUninitialized: true //make sure this is added - this is new
}))

var bodyParser = require('body-parser');
// use it!
app.use(bodyParser.urlencoded({ extended: true }));
// static content
app.use(express.static(path.join(__dirname, "./static")));
// setting up ejs and our views folder
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');





// root route to render the index.ejs view
app.get('/', function(req, res) {
 return res.render("index");
})

app.get('/index', (req, res) =>{
  return res.render("index");
})

app.get('/results', function(req, res){
  return res.render("results", { session: req.session });
})
// post route for adding a user
app.post('/results', function(req, res) {
 console.log( req.body);
 req.session.name = req.body.name,
 req.session.location = req.body.location,
 req.session.language = req.body.language,
 req.session.comments = req.body.comments
 // This is where we would add the user to the database
 // Then redirect to the root route
 return res.redirect('/results');
})
// tell the express app to listen on port 8000
app.listen(port, function() {
 console.log("Server is locked and loaded . . .");
});
