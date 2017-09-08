// require express
var express = require("express");
var session = require('express-session');
// path module -- try to figure out where and why we use this
var path = require("path");
// create the express app
var app = express();
var bodyParser = require('body-parser');
// use it!
app.use(bodyParser.urlencoded({ extended: true }));
// static content
app.use(express.static(path.join(__dirname, "./static")));
// session
app.use(session({secret: 'codingdojorocks'}));  // string for encryption
// setting up ejs and our views folder
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
// root route to render the index.ejs view
app.get('/', function(req, res) {
  if(!req.session.target){
    req.session.target = Math.trunc(Math.random()*101);
  }
  var feedback;
  req.session.success = false;
  if(req.session.guess){
      if(req.session.guess == req.session.target){
        feedback = `${req.session.target} is the correct number!`;
        req.session.success = true;
      } else if(req.session.guess < req.session.target){
        feedback = "You guessed too low.  Try again.";
      } else{
        feedback = "You guessed too high.  Try again.";
      }
  }
  else{
    feedback = "Ready to Play?";
  }
 res.render("index", {feedback: feedback, success: req.session.success, target: req.session.target, guess: req.session.guess, bool: false});
})

// post route for adding a user
app.post('/guess', function(req, res) {
  req.session.guess = req.body.guess;
 console.log("POST DATA", req.body);
 // This is where we would add the user to the database
 // Then redirect to the root route
 res.redirect('/');
})

app.get('/play_again', function(req, res){
  req.session.destroy();
  return res.redirect('/');
})
// tell the express app to listen on port 8000
app.listen(8000, function() {
 console.log("listening on port 8000");
});
