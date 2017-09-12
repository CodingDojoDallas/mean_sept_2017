var express = require('express');
var app = express();

var bodyParser = require('body-parser');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/puppies');

var PuppySchema = new mongoose.Schema({
    name: String,
    breed: String,
})

mongoose.model('Puppy', PuppySchema);
var Puppy = mongoose.model('Puppy');

app.use(bodyParser.urlencoded({ extended: true }));

var path = require('path');

app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    puppies = [];

    Puppy.find({}, function(err, puppies) {
        if(err){
            console.log('something went wrong');
        }
        else {
            res.render('index', {puppies: puppies});
        }

    })
})

app.post('/puppies', function(req, res) {
    var puppy = new Puppy({name: req.body.name, breed: req.body.breed});

    puppy.save(function(err) {
        if(err) {
            console.log('something ELSE went wrong');
            res.redirect('/puppies');
        }
        else {
            console.log('successfully added puppy :)');
            res.redirect('/');
        }
    })
})

app.get('/puppies/:id', function (req, res) {
    Puppy.findOne({_id: req.params.id}, function(err, puppy) {
        if(err){
            console.log('couldnt get the puppy part one');
        }
        else{
            console.log(puppy);
            res.render('show', {puppy: puppy});
        }
    })
})

app.get('/puppies', function (req, res) {
    res.render('puppies');
})

app.get('/puppies/edit/:id', function (req, res) {
    Puppy.findOne({_id: req.params.id}, function(err, puppy) {
        if(err){
            console.log('couldnt get the puppy part 2');
        }
        else{
            console.log(puppy);
            res.render('edit', {puppy: puppy});
        }
    })
})

app.post('/puppies/:id', function (req, res) {
    Puppy.update({_id: req.params.id}, req.body, function(err, puppy){
        if(err){
            console.log(err);
        }
        else {
            res.redirect('/');
         }
     })
})

app.post('/puppies/destroy/:id', function (req, res) {
    Puppy.remove({_id: req.params.id }, function(err){
        if(err){
            console.log('puppy not removed');
        }
        else{
            res.redirect('/');
        }
    })
})


app.listen(8000, function() {
    console.log("listening on port 8000");
})
