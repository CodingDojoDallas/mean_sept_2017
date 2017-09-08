var express = require("express");
var path = require('path');

var app = express();

app.use(express.static(path.join(__dirname + './static')));

//setting up ejs and our views folder
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.render('index')
});

//storing app.listen within a variable called server!
var server = app.listen(8000, function() {
    console.log("Listening on port 8000")
});

//this is a new line we're adding after our server listener
var io = require('socket.io').listen(server);

//whenever a conncetion event happens (connection built in) run the following code
io.sockets.on('connection', function(socket){
    console.log("Socket connected!");
    console.log("Socket id = " + socket.id)
    //all the socket code goes in here
    socket.on("random_number", function(data){
        console.log(data.message)
        socket.emit('updated_number', {number: Math.floor(Math.random()*1000 + 1)})
    })
    socket.on("posting_form", function(data){
        console.log("Data going through server is = {Name:" + data.name + " Location:"+data.location + " Language:" + data.language + " Comment: " + data.comment + "}");
        socket.emit('updated_message', {name: data.name, location: data.location, language: data.language, comment: data.comment})
    })
});