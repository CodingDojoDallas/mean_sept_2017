//require my npm modules
let express = require('express');
let bodyParser = require('body-parser');
let session = require('express-session');
let port = 8000;

let app = express();

//set up the middleware
////views
app.set('view engine', 'ejs');
app.set('views', __dirname + "/views");
////static content
app.use(express.static(__dirname + '/static'));
////POST request helper
app.use(bodyParser.urlencoded({ extended: true }));
////session
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
	// if(!req.session.isLoggedIn){
	// 	res.redirect('/')
	// }
	if(req.session.count){
		req.session.count++;
	} else {
		req.session.count = 1;
	}
	return res.render('showUser', { session: req.session })
})

app.post('/login', (req, res) => {
	//take the data from the form
	//form data is always available at req.body
	console.log(req.body);
	req.session.user = req.body.name
	return res.redirect('/showUser')
	//save it into sessions
})

// must be at the bottom of the document
app.listen(port, () => console.log(`listening on port ${port}...`));
