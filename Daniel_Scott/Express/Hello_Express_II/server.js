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




// // require express
// var express = require("express");
// // path modure == try to figure out why we'd use this one
// var path = require("path");
// // this line is what creates the app
// var app = express();
// var bodyparser = require("body-parser");
// //use the body parser - I'm assuming this is what parses and processes the javascript within the views?
// app.use(bodyparser.urlencoded({ extended: true}));
// // this is how I access and use my static content:
// app.use(express.static(path.join(__dirname, './static')));
// // this will set up ejs and our views folder
// app.set('views', path.join(__dirname, '.views'));
// app.set('view engine', 'ejs');
// // root route to render the index.ejs view
// app.get('/', function(req, res)){
//   res.render("index");
// }
// // this is the post route for adding a user
// app.post('/users', function(req, res){
//   console.log("POST DATA", req.body);
//   // this is where we would add the user to the database
//   //then we'd redirect to the root route
//   res.redirect('/');
// });
//
// // let's tell the express app to listen on port 8000
// app.listen(8000, function(){
//   console.log("Listening on port 8000 . . .");
// })
