//require npm modules
let express = require('express');
let bodyParser = require('body-parser');
let session = require('express-session');
let port = 8000;

let app = express();

//views
app.set('view engine', 'ejs');
app.set('views', __dirname + "/views");

//static content
app.use(express.static(__dirname + "/static"));

//POST request helper
app.use(bodyParser.urlencoded({ extended: true }));

//session
app.use(session({
	secret: 'thisisasecret',
	resave: false,
	saveUninitialized: true,
}))

//routes
app.get('/', (req, res) => {
	return res.render('index', { session: req.session })
})

app.post('/user_guess', (req, res) =>{
	console.log(req.body);
	req.session.guess = req.body.guess;
	return res.redirect('/');
})

app.listen(port, () => console.log(`listening on port ${port}...`));