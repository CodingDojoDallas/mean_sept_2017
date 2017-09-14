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

app.post('/reset', function (req, res) {
    count = 0;
    res.redirect('/');
})

var server = app.listen(8000, function (){
    console.log("listening on port 8000");
})

var io = require('socket.io').listen(server);

io.sockets.on('connection', function (socket) {
    var count = 0;
    console.log('connected!');

    socket.on("clicking_button", function(data) {
        console.log("did it happen");
            count += 1;

        socket.emit("getting_count", { count: count});
    })
})
