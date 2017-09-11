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
var server = app.listen(8000, function() {
 console.log("listening on port 8000");
});

var io = require('socket.io').listen(server);

io.sockets.on('connection', function(socket) {
  let count = undefined;
  console.log("Client/socket is connected");
  console.log("Client/socket id is: ", socket.id);
  //epic button
  socket.on("epic_button_clicked", function(data){
    if (!count){
      count = 1;
    }
    else{
      count++;
    }
    socket.emit("server_response", {response: count});
  })
  //reset button
  socket.on("reset_button_clicked", function(data){
    count= 0;
    socket.emit("server_response", {response: count});
  })
})

// Setting up a full server!
// Create a new project folder.
// Move to project directory.
// Create server.js file
// Copy the above content into new_project server.js file
// Type npm init -y
// Typing npm install express --save will make sure you get the newest version of express!
// Copy TestProject package.json dependencies into a new_project package.json file inside new_project folder.
// Type npm install.
// create views folder and place an index.ejs file (and place it in the appropriate place based on the server) to load a page when you go to localhost:8000.
