var express = require('express');
var path = require("path");
var app = express();
app.set('json spaces', 2);
//-.-. .- -- . .-. --- -. / -- .- .-. ... .... .- .-.. .-..//
var bodyParser = require('body-parser');
app.use(bodyParser.json());
//-.-. .- -- . .-. --- -. / -- .- .-. ... .... .- .-.. .-..//
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/1955', { useMongoClient: true });
//-.-. .- -- . .-. --- -. / -- .- .-. ... .... .- .-.. .-..//
var User_Schema = new mongoose.Schema({
  name: String
});
//-.-. .- -- . .-. --- -. / -- .- .-. ... .... .- .-.. .-..//
var User = mongoose.model('User', User_Schema);
//-.-. .- -- . .-. --- -. / -- .- .-. ... .... .- .-.. .-..//
app.get('/', function(req, res){
    User.find({})
    .then(function(users){
        res.json(users);
    })
    .catch(function(errc){
        throw err;
    })
})
app.get('/new/:name', function(req, res){
    console.log(req.params.name)
    User.create(req.params)
    .then(function(User){
        res.redirect('/')
    })
    .catch(function(err){
        console.log(err);
    })
});
app.get('/remove/:name/', function(req,res){
    User.remove(req.params, function(err){
        if(err){
            console.log(err);
        } else {
            res.redirect('/')
        }
    })
})
app.get('/:name', function(req, res){
    User.findOne(req.params)
    .then(function(user){
        res.json(user);
    })
    .catch(function(err){
        throw err;
    })
})
//-.-. .- -- . .-. --- -. / -- .- .-. ... .... .- .-.. .-..//
const PORT = 8000
app.listen(PORT, function(){
  console.log(`listening on port ${PORT}`);
});
