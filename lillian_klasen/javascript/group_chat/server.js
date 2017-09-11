var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + "/static"));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    res.render('index');
})

var server = app.listen(8000, function (){
    console.log("listening on port 8000");
})

var io = require('socket.io').listen(server);

io.sockets.on('connection', function (socket) {
    console.log('connected!');

    socket.on("entered_name", function(data) {
        socket.emit("user_entered", {name: data.name});
        console.log(data.name);
    })
})
