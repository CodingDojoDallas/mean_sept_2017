// require express
const express = require("express");
const session = require('express-session');

//Mongoose schema
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/basic_mongoose');
var UserSchema = new mongoose.Schema({
  name: {type: String, required: [true, 'Must enter a name'], minlength: 6},
  age: {type: Number, min: 1, max: 150 }
}, {timestamps: true})
mongoose.model('User', UserSchema);
var User = mongoose.model('User')
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
  users = User.find({}, function(err, users){
    if(err){
      console.log('Could not locate the record.')
    }
    else{
      res.render("index", {users: users});
    }
  })
})
// post route for adding a user
app.post('/users', function(req, res) {
 console.log("POST DATA", req.body);
 // This is where we would add the user to the database
 // Then redirect to the root route
 var user = new User({name: req.body.name, age: req.body.age});
 user.save(function(err){
   if(err) {
     console.log('something went wrong');
    //  res.render('index', {title: 'you have errors!', errors: user.errors})
   }
   else{
    console.log('successfully added a user!');
    res.redirect('/');
   }
 })
})
// tell the express app to listen on port 8000
app.listen(8000, function() {
 console.log("listening on port 8000");
});
