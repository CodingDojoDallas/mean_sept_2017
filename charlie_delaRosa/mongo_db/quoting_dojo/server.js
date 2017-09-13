// require express
var express = require("express");
var session = require('express-session');

//Mongoose schema-modify as necessary
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/quoting_dojo');
var QuoteSchema = new mongoose.Schema({
  name: {type: String, required: [true, 'Must enter a name'], minlength: 3},
  quote: {type: String, minlength: 3, maxlength: 75}
}, {timestamps: true})
mongoose.model('Quote', QuoteSchema);
var Quote = mongoose.model('Quote')

mongoose.Promise = global.Promise;

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
  res.render("index")
})
// post route for adding a user
app.post('/quotes', function(req, res) {
 console.log("POST DATA", req.body);
 // This is where we would add the user to the database
 // Then redirect to the root route
 var quote = new Quote({name: req.body.name, quote: req.body.quote});
 quote.save(function(err){
   if(err) {
     console.log('something went wrong');
   }
   else{
     console.log('successfully added a quote!');
     res.redirect('/quotes');
   }
 })
})

//Main quotes page
app.get('/quotes', function(req, res) {
  quotes = Quote.find({}, function(err, quotes){
    if(err){
      console.log('Could not locate the record.');
    }
    else{
      res.render("quotes", {quotes: quotes});
    }
  })
})

// tell the express app to listen on port 8000
app.listen(8000, function() {
 console.log("listening on port 8000");
});

// Setting up a full server!
// Create a new project folder.
// Move to project directory.
// Create server.js file
// Copy the above content into new_project server.js file
// Type npm init -y
// Copy TestProject package.json dependencies into a new_project package.json file inside new_project folder.
// Typing npm install express --save will make sure you get the newest version of express!
// navigate to new_project folder with your command line, and then type npm install.
// create views folder and place an index.ejs file (and place it in the appropriate place based on the server) to load a page when you go to localhost:8000.
