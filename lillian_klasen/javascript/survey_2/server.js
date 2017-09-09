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

app.post('/survey', function (req, res) {
    user = req.body;
    res.redirect('/');
})

var server = app.listen(8000, function (){
    console.log("listening on port 8000");
})

var io = require('socket.io').listen(server);

io.sockets.on('connection', function (socket) {
    console.log("client/socket is connected");

    socket.on("posting_form", function(data) {
        socket.emit('updated_message', {name: data.name, location: data.location, language: data.language, comment: data.comment});
    })
})
