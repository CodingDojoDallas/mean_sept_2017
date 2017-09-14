let express = require('express');
let bodyParser = require('body-parser');
let session = require('express-session');
let port = 8000;
let path = require('path');
let app = express();
let server = app.listen(port, () => {
  console.log('Server is locked and loaded. . .');
});
var io = require('socket.io').listen(server);
app.get('/', (req, res) => {
  res.render("index");
});
io.sockets.on('connection', (socket) => {
  console.log('Socket connection has been established for socket id:', socket.id);
});

app.use(session({
  secret: 'Phoenix',
  resave: false,
  saveUninitialized: true
}));


app.use(bodyParser.urlencoded({ extended: true}));
// Define the static folder.
app.use(express.static(path.join(__dirname, "./static")));
// Setup ejs templating and define the views folder.
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
