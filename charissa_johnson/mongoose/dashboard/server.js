const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const mongoose = require('mongoose');
const port = 8000
const app = express();

//set up middleware
app.use(express.static(__dirname + '/static'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
	secret: 'sdjkfkdafkdsjhfas',
	resave: false,
	saveUninitialized: false
}));

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

//connect to the database
mongoose.connect('mongodb://localhost/giraffe_pack', { useMongoClient: true });
mongoose.Promise = global.Promise;

let GiraffeSchema = new mongoose.Schema({
	name: String
}, { timestamps: true });

mongoose.model('Giraffe', GiraffeSchema);

const Giraffe = mongoose.model('Giraffe');

app.get('/', (req, res) => {
	Giraffe.find({}, (err, giraffes) => {
		if(err) {
			console.log(err);
		}
		res.render('index', { giraffes: giraffes });
	})
});

app.get('/giraffes/new', (req, res) => {
	res.redirect('/');
});

app.get('/giraffe/:id', (req, res) => {
	Giraffe.findById(req.params.id, (err, giraffe) => {
		if(err){
			console.log(err);
			return res.redirect('/');
		}
		else{
			res.render('giraffe', { giraffe: giraffe });
		}
	});
});

//new giraffe
app.post('/giraffes/new', (req, res) => {
	console.log(req.body);
	Giraffe.create(req.body, (err, user) => {
		if(err){
			console.log(err);
		}
		return res.redirect('/');

	});
});

//edit giraffe
app.post('/giraffe/edit/:id', (req, res) => {
	Giraffe.update({ _id: req.params.id }, req.body, function(err, result){
    if (err) { 
    	console.log(err); 
    }
    res.redirect('/');
	});
});

app.post('/giraffe/:id/delete', function(req, res){
  Giraffe.remove({ _id: req.params.id }, function(err, result){
    if (err) { 
    	console.log(err); 
    }
    res.redirect('/');
  });
});

app.listen(port, () => console.log(`listening on port ${port}`));