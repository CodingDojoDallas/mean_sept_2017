const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const mongoose = require('mongoose');
const port = 8000;
const app = express();

//set up middleware
app.use(express.static(__dirname + '/static'));
app.use(bodyParser.urlencoded({ extended: true }))
app.use(session({
	secret: 'alsdkfjasdf',
	resave: false,
	saveUninitialized: true
}))

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views')

//connect to database
mongoose.connect('mongodb://localhost/lillian_rules', { useMongoClient: true })
mongoose.Promise = global.Promise;

let UserSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, 'Name cannot be blank'],
		minlength: [2, 'Name must be greater than 2 characters'],
	},
	age: {
		type: Number,
		min: [1, 'Age must be greater than One']
	},
	email: {
		type: String,
		required: [true, 'Email cannot be blank'],
	},
	password: {
		type: String,
		required: [true, 'Password cannot be blank.']
	}
}, { timestamps: true })

//register a model by passing in a schema
mongoose.model('User', UserSchema)

//extract a model by omitting the schema
//this must happen after you register a model
const User = mongoose.model('User');

app.get('/', (req, res) => {
	User.find({}, (err, users) => {
		if(err){
			console.log(err);
		} else {
			console.log(users);
			res.render('index', { users: users })
		}
	})
})

app.get('/users/new', (req, res) => {
	res.render('users_new')
})

app.post('/users', (req, res) => {
	console.log(req.body);
	//the .save() way
	// let user = new User(req.body)
	// // user.name = req.body.name;
	// // user.email = req.body.email;
	// // user.age = req.body.age;
	// // user.password = req.body.password;
	// user.save((err, user) => {
	// 	if(err){
	// 		console.log('model validation error')
	// 		console.log(err);
	// 	} else {
	// 		console.log('created user!')
	// 		console.log(user);
	// 	}
	// 	return res.redirect('/users/new');
	// })

	//the .create() way
	User.create(req.body, (err, user) => {
		if(err){
			console.log(err)
		}
		return res.redirect('/')
	})
})

app.get('/users/:id', (req, res) => {
	User.findById(req.params.id, (err, user) => {
		if(err){
			console.log(err);
			return res.redirect('/')
		} else {
			res.render('show_user', { user: user })
		}
	})

})


app.listen(port, () => console.log(`listening on port ${port}...`))