const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const port = 8000;
app.set('json spaces', 2);
app.use(bodyParser.json());
mongoose.connect('mongodb://localhost/1955', { useMongoClient: true});
mongoose.Promise = global.Promise;
var Name_Schema = new mongoose.Schema({
  name: String
});

var Name = mongoose.model('Name', Name_Schema);
app.get('/', function(req, res){
  Name.find({})
  .then(function(names){
    res.json(names);
  })
  .catch(function(errc){
    throw err;
  })
})
app.get('/new/:name', function(req, res){
  console.log(req.params.name);
  Name.create(req.params)
  .then(function(Name){
    res.redirect('/');
  })
  .catch(function(err){
    console.log(err);
  })
});
app.get('/remove/:name', function(req, res){
  Name.remove(req.params, function(err){
    if(err){
      console.log(err);
    }else {
      res.redirect('/')
    }
  })
})
app.get('/:name', function(req, res){
  Name.findOne(req.params)
  .then(function(name){
    res.json(name)
  })
  .catch(function(err){
    throw err;
  })
})
app.listen(port, ()=>{
  console.log('Server is locked and loaded on port: '+port+'. . .');
});
