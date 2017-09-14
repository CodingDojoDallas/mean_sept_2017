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