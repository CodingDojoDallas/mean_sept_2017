let express = require('express');
let bodyParser = require('body-parser');
let session = require('express-session');
let port = 8000;
let app = express();

//middleware
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')

app.use(express.static(__dirname + '/static'))
app.use(session({
	secret: 'as;ldkfjas;dfklj',
	resave: false,
	saveUninitialized: true
}))

let server = app.listen(port, () => console.log(`listening on port ${port}...`));

app.get('/', (req, res) => {
	res.render('index')
})

var io = require('socket.io').listen(server);

io.sockets.on('connection', (socket) => {
	console.log('socket connection!!');
	console.log(`socket id: ${socket.id}`);
	//listener
	socket.on('button_clicked', (data) => {
		console.log('received event from client')
		//emit
		socket.broadcast.emit('button_response', { msg: 'Somebody clicked a button' })
	})
	//listener
	socket.on('form_submission', (data) => {
		console.log('recvd event from client');
		//emit
		io.emit('form_response', { msg: `${data.user} filled out the form` })
	})
})

