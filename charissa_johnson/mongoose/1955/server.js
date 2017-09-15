const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
const port = 8000;
const app = express();

app.set('json spaces', 2);

app.use(bodyParser.json());

mongoose.Promise = require('body-parser');
mongoose.connect('mongodb://localhost/1955', { useMongoClient: true });

let UserSchema = new mongoose.Schema({
	name: String
})

let User = mongoose.model('User', UserSchema);

app.get('/', (req, res) => {
	User.find({}).then(function(users){
		res.json(users);
	})
	.catch(function(errc){
		throw err;
	})
})

app.get('/new/:name', (req, res) => {
	console.log(req.params.name)
    User.create(req.params)
    .then(function(User){
        res.redirect('/')
    })
    .catch(function(err){
        console.log(err);
    })	
})

app.get('/remove/:name/', (req,res) => {
    User.remove(req.params, function(err){
        if(err){
            console.log(err);
        } else {
            res.redirect('/')
        }
    })
})
app.get('/:name', (req, res) => {
    User.findOne(req.params)
    .then(function(user){
        res.json(user);
    })
    .catch(function(err){
        throw err;
    })
})

app.listen(port, () =>  console.log(`listening on port ${port}`));