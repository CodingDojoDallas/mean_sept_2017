let express = require('express');
let bodyParser = require('body-parser');
let session = require('express-session');
let port = 8000;
let app = express();

//set up middleware
app.use(express.static(__dirname + '/static'))
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.use(session({
	secret: "dsajfkldsfjkdhfas",
	resave: false,
	saveUninitialized: true
}))

let server = app.listen(port, () => console.log(`listening in port ${port}`));

app.get('/', (req, res) => {
	res.render('index')
})

var io = require('socket.io').listen(server);

io.sockets.on('connection', (socket) => {
	console.log('socket connection!!');
	console.log(`socket id: ${socket.id}`);
	//listener
	socket.on('button_clicked', function(data) {
		//emit
		console.log('count by' + socket.id);
		socket.emit('button_response', { msg: 'Button has been clicked'})
	})
	//reset
	socket.on('reset_clicked', function(data) {
		//emit
		console.log('count by' + socket.id);
		socket.emit('reset_response', { msg: 'Button has been clicked'})
	})
})