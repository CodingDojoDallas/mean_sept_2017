// require express
var express = require("express");
// path module -- try to figure out where and why we use this
var path = require("path");
// create the express app
var app = express();
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
 res.render("index");
})
app.post('/result', function(req, res){
  res.render("result", req.body);
})
// post route for adding a user
app.post('/users', function(req, res) {
 console.log("POST DATA", req.body);
 // This is where we would add the user to the database
 // Then redirect to the root route
 res.redirect('/');
})
// tell the express app to listen on port 8000
app.listen(8000, function() {
 console.log("listening on port 8000");
});

// Setting up a full server!
// Create a new project folder.
//
// Copy TestProject package.json into a new_project package.json file inside new_project folder:

// Typing npm install express --save will make sure you get the newest version of express!
// in terminal/command-prompt/bash type npm init -y
// Copy this file into a new-project server.js file inside that folder:

// navigate to new_project folder with your command line, and then type npm install.
// create an index.ejs file (and place it in the appropriate place based on the server) to load a page when you go to localhost:8000.
