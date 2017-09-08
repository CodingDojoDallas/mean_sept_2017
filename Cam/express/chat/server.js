// require
var session = require('express-session');
var express = require("express");
var bodyParser = require('body-parser');
// path module -- try to figure out where and why we use this
var path = require("path");
// create the express app
var app = express()
;// use it!
app.use(session({
    secret: 'cameronssecret',
    resave: false,
    saveUninitialized: true,
}));

//session
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname + './static')));

//setting up ejs and our views folder
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

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

//storing app.listen within a variable called server!
var server = app.listen(8000, function() {
    console.log("Listening on port 8000")
});

//this is a new line we're adding after our server listener
var io = require('socket.io').listen(server);

//whenever a conncetion event happens (connection built in) run the following code
var COUNT = 0
io.sockets.on('connection', function(socket){
    console.log(socket.id + " is connected through sockets")
    //all the socket code goes in here
    socket.on('click_button', function(data){
        console.log("+1 by = " + socket.id);
        COUNT++;
        io.emit('update_count', {count: COUNT});
    });
    socket.on('click_reset_button', function(data){
        console.log("Count reset by = " + socket.id);
        COUNT = 0;
        io.emit('reset_count', {count: COUNT});
    })
});