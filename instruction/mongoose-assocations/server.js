const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const mongoose = require("mongoose");
const port = 8000;
const app = express();

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(express.static(__dirname + '/static'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
	secret: 'learningassociations',
	resave: false,
	saveUninitialized: true
}))

mongoose.connect('mongodb://localhost/associations1024856', { useMongoClient: true })
mongoose.Promise = global.Promise;

let UserSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, 'Name cannot be blank']
	},
	posts: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Post'
	}],
	comments: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Comment'
	}]
}, { timestamps: true, });
mongoose.model('User', UserSchema);
const User = mongoose.model('User');

let PostSchema = new mongoose.Schema({
	post: {
		type: String,
		required: [true, 'Post cannot be blank']
	},
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User'
	},
	comments: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Comment'
	}]
}, { timestamps: true })
mongoose.model('Post', PostSchema);
const Post = mongoose.model('Post')

let CommentSchema = new mongoose.Schema({
	comment: {
		type: String,
		required: [true, 'Comment cannot be blank'],
	},
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User'
	},
	post: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User'
	}
}, { timestamps: true })
mongoose.model('Comment', CommentSchema);
const Comment = mongoose.model('Comment');

app.get('/', (req, res) => {
	return res.render('login')
})

app.post('/login', (req, res) => {
	console.log(req.body);
	User.findOne({ name: req.body.name }, (err, user) => {
		if(err){
			console.log('err: ', err);
		}
		if(!user){
			User.create(req.body, (err, user) => {
				if(err){
					console.log(err);
					return res.redirect('/');
				} else {
					console.log('new user: ', user);
					req.session.user_id = user._id;
					return res.redirect('/dashboard')
				}
			})
		} else {
			console.log('found user: ', user);
			req.session.user_id = user._id;
			return res.redirect('/dashboard')
		}
	})
})

app.get('/dashboard', (req, res) => {
	if(!req.session.user_id){
		return res.redirect('/');
	}
	Post.find({}).populate('user').populate({
		path: 'comments',
		model: 'Comment',
		populate: {
			path: 'user',
			model: 'User'
		}
	}).exec((err, posts) => {
		if(err){
			console.log(err);
		} else {
			return res.render('dashboard', { posts: posts})
		}
	})
})

app.post('/posts', (req, res) => {
	console.log('session: ', req.session.user_id)
	req.body.user = req.session.user_id;
	console.log('body: ', req.body);
	Post.create(req.body, (err, post) => {
		if(err){
			console.log(err);
		} else {
			console.log('post: ', post);
			User.findByIdAndUpdate(req.session.user_id, { $push: { posts: post._id } }, { new: true }, (err, user) => {
				if(err){
					console.log(err);
				} else {
					console.log('user after manipulation: ', user);
					return res.redirect('/dashboard');
				}
			})
		}
	})
})

app.post('/comments/:id', (req, res) => {
	req.body.user = req.session.user_id;
	req.body.post = req.params.id;
	console.log(req.body);
	Comment.create(req.body, (err, comment) => {
		if(err){
			console.log(err);
		} else {
			Post.findByIdAndUpdate(req.params.id, { $push: { comments: comment._id } }, { new: true }, (err, post) => {
				if(err){
					console.log(err);
				}
				User.findByIdAndUpdate(req.session.user_id, { $push: { comments: comment._id } }, { new: true }, (err, user) => {
					if(err){
						console.log(err);
					}
					return res.redirect('/dashboard')
				})
			})
		}
	})
})

app.listen(port, () => console.log(`listening on port ${port}...`))







