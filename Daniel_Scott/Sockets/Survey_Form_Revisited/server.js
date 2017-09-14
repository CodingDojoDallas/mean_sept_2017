let express = require('express');
let bodyParser = require('body-parser');
let session = require('express-session');
let port = 8000;
let path = require("path");
let app = express();
let server = app.listen(port, () => {
  console.log('Server is locked and loaded . . .');
});
var io = require('socket.io').listen(server);
app.get('/', function(req, res) {
 res.render("index");
});

io.sockets.on('connection', (socket) =>{
console.log('socket connection');
console.log('socket id:', socket.id);
socket.on('posting_form', (data) =>{
  var random_number = Math.floor((Math.random() * 1000) + 1);
  socket.emit('updated_message', {response: data});
  socket.emit('random_number', {response: random_number});
  });
});

app.use(session({
  secret: "phoenix", // my spirit animal
  resave: false,
  saveUninitialized: true // I have no idea what this if for haha
}))

app.use(bodyParser.urlencoded({ extended: true}));
// Define the static folder.
app.use(express.static(path.join(__dirname, "./static")));
// Setup ejs templating and define the views folder.
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
// Root route to render the index.ejs view.
