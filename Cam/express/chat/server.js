// require
var express = require("express");
var app = express()
var session = require('express-session');
var express = require("express");
var path = require("path");
var server = require('http').createServer(app);
var bodyParser = require('body-parser');
// path module -- try to figure out where and why we use this
var path = require("path");
// create the express app
var app = express();
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
});

//storing app.listen within a variable called server!
var server = app.listen(8000, function() {
    console.log("Listening on port 8000")
});

//Chatroom
var numUsers = 0;

var io = require('socket.io').listen(server);

//whenever a conncetion event happens (connection built in) run the following code
io.sockets.on('connection', function(socket){
    console.log(socket.id + " is connected through sockets");
    var addedUser = false;

    // listen & executes new message
    socket.on('new message', function(data) {
        socket.broadcast.emit('new message', {
            username: socket.username,
            message: data,
        });
    });
    // when the client emits 'add user', this listens and executes
    socket.on('add user', function (username) {
        if (addedUser) return;

        // we store the username in the socket session for this client
        socket.username = username;
        ++numUsers;
        addedUser = true;
        socket.emit('login', {
            numUsers: numUsers
        });
        // echo globally (all clients) that a person has connected
        socket.broadcast.emit('user joined', {
            username: socket.username,
            numUsers: numUsers
        });
    });

    // when the client emits 'typing', we broadcast it to others
    socket.on('typing', function () {
        socket.broadcast.emit('typing', {
            username: socket.username
        });
    });

    // when the client emits 'stop typing', we broadcast it to others
    socket.on('stop typing', function () {
        socket.broadcast.emit('stop typing', {
            username: socket.username
        });
    });

    // when the user disconnects.. perform this
    socket.on('disconnect', function () {
        if (addedUser) {
            --numUsers;

            // echo globally that this client has left
            socket.broadcast.emit('user left', {
                username: socket.username,
                numUsers: numUsers
            });
        }
    });
});