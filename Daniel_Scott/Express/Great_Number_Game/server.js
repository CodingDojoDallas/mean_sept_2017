// first we must require express
var express = require("express");
// this is our path module
var path = require("path");
//now for our port:
var port = 8000;
// let's create an express app here:
var app = express();

var bodyParser = require("body-parser");
// use bodyParser here:
app.use(bodyParser.urlencoded({ extended: true}));
// use my static content
app.use(express.static(path.join(__dirname, "./static")));
// Also need to set up ejs and views
app.set("views", path.join(__dirname, "./views"));
app.set('view engine', 'ejs');
// Now for our session variable
var session = require("express-session");
// use it!
app.use(session({
  secret: "phoenix", // my spirit animal
  resave: false,
  saveUninitialized: true // I have no idea what this if for haha
}))

app.post("/guess", (req, res) => {
  console.log(req.body);
  req.session.number = req.body.number
  let computer = Math.trunc(Math.random()*101);
  let message = "";
  if(req.body.number == computer){
    message += "You guessed correctly"
  }else {
    message += "Sorry, you guessed incorrectly, please try again"
  }
  console.log(message);
  console.log(computer);
  return res.redirect('/');
});

// setting the routes
app.get('/', function(req, res) {
 return res.render("index", {session: req.session});
});

app.get('/index', (req, res) =>{
  return res.render("index");
});

// tell the express app to listen on port 8000
app.listen(port, function() {
 console.log("Server is locked and loaded . . .");
});
