//require npm modules
let express = require('express');
let bodyParser = require('body-parser');
let session = require('express-session');
let port = 8000;

let app = express();

//set up the middleware
//views
app.set('view engine', 'ejs');
app.set('views', __dirname + "/views");
//static content
app.use(express.static(__dirname + '/static'));
//POST request helper
app.use(bodyParser.urlencoded({ extended: true }));
//session
app.use(session({
	secret: 'somestringitreallydoesnotmatterhwatyouput',
	resave: false,
	saveUninitialized: true,
}))

//routes
app.get('/', (req, res) => {
	return res.render('index')
})

app.get('/showUser', (req, res) => {
	return res.render('showUser', { session: req.session })
})

app.post('/login', (req, res) => {
	console.log(req.body);
	req.session.user = req.body.name
	req.session.location = req.body.location
	req.session.language = req.body.language
	req.session.comment = req.body.comment
	return res.redirect('/showUser')
})

app.listen(port, () => console.log(`listening on port ${port}...`));