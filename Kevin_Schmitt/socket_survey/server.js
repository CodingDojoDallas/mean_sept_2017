let express = require('express');
let bodyParser = require('body-parser');
let session = require('express-session');
let port = 8000;
let app = express();

// middleware
app.use(express.static(__dirname + '/static'))
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.use(session({
    secret: 'sdkjvhieurvbhj',
    resave: false,
    saveUninitialized: true,
}))

let server = app.listen(port, () => console.log(`listening on port ${port}...`));

app.get('/', (req, res) => {
    res.render('index')
})

var io = require('socket.io').listen(server);

io.sockets.on('connection', (socket) => {
    console.log('socket connection!!');
    console.log(`socket id: ${socket.id}`);
    // listener
    
    // socket.on('button_clicked', (data) =>{
    //     console.log('recieved event from client')
    //     // emit type
    //         // to everyone including yourself
    //     io.emit('button_response', {msg: "somebody clicked a button"})
    //         // to everyone but you
    //     // socket.broadcast.emit()
    //         // to only yourself
    //     // socket.emit()

    // })
    // listener
    socket.on('form_submission', (data) =>{
        console.log('received event form client')
        // emit
        let num = Math.floor((Math.random() * 1000) + 1);
        context = {
            'msg': `You emmitted the following to the server name: ${data.name}, location: ${data.location}, Language: ${data.language}, comment: ${data.comment} and your LUCKY number is ${num}`,
        }
        io.emit('form_response', context)
    })
})

