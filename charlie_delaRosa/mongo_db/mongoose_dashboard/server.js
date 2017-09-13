// require express
var express = require("express");
var session = require('express-session');

//Mongoose schema-modify as necessary
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mongoose_dashboard');
var DogSchema = new mongoose.Schema({
  name: {type: String, required: [true, 'Must enter a name'], minlength: 3},
  color: {type: String},
  gender: {type: String},
  age: {type: Number, min: 1, max: 150 },
  fav_activity: {type: String}
}, {timestamps: true})
mongoose.model('Dog', DogSchema);
var Dog = mongoose.model('Dog')
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
//################################################
//Root route to render the index.ejs view.  Displays all dogs
app.get('/', function(req, res) {
  dogs = Dog.find({}, (err,dogs) =>{
    if(err){
      console.log('Could not locate the records');
    }
    else{
      res.render("index", {dogs: dogs});
    }
  })
})

//New: form to register a new dog
app.get('/new', (req, res) => {

res.render('new');
})

//Show: displays info on 1 dog
app.get('/:id', (req, res) => {
  Dog.findOne({_id: req.params.id}, (err, dogs) => {
    if(err){
      console.log(err);
    }
    res.render("show", {dog: dogs});
  })
})

//Create: post route for adding a dog
app.post('/', function(req, res) {
 console.log("POST DATA", req.body);
 // This is where we would add the user to the database
 // Then redirect to the root route
 var dog = new Dog({name: req.body.name, color: req.body.color, gender: req.body.gender, age: req.body.age, fav_activity: req.body.fav_activity});
 dog.save(function(err){
   if(err){
     console.log('something went wrong');
     res.redirect('/');
   }
   else{
     console.log('successfully added a doggie!');
     res.redirect('/');
   }
 })
})

//Edit: shows a form to edit an existing dog
app.get('/:id/edit', (req, res) => {
  Dog.findOne({_id: req.params.id}, (err, dog) => {
    if(err){
      console.log(err);
    }
    res.render("edit", {dog: dog});
  })
})

//Update: action for the edit form
app.post('/:id', (req, res) => {
  Dog.update({ _id: req.params.id }, req.body, function(err, dog){
    if (err) { console.log(err); }
    res.redirect('/');
  })
})

//Destroy: delete a dog from the database
app.post('/:id/destroy', (req, res) => {
  Dog.remove({ _id: req.params.id }, (err, result) => {
    if (err) { console.log(err); }
    res.redirect('/');
  })
})
//############################################
// tell the express app to listen on port 8000
app.listen(8000, function() {
 console.log("listening on port 8000");
});
