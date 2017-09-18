const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 8000;
const mongoose = require('mongoose');
const path = require('path');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
mongoose.connect('mongodb://localhost/animal_dashboard', { useMongoClient: true });
mongoose.Promise = global.Promise;
var AnimalSchema = new mongoose.Schema({
  type: String
});
mongoose.model('Animal', AnimalSchema);
var Animal = mongoose.model('Animal', AnimalSchema);
// Routes
// This is a dashboard/ display all route
app.get('/', (req, res)=>{
  Animal.find({}, (err, results)=>{
    if(err){console.log(err);}
    res.render('dashboard', { animals: results });
  })
});
app.get('/new', (req, res)=>{
  res.render('new');
});
// This is a show method
app.get('/:id', function(req, res){
  Animal.find({ _id: req.params.id }, (err, response)=>{
    if (err) { console.log(err); }
    res.render('info', { animal: response[0] });
  });
});

app.post('/:id/delete', (req, res)=>{
  Animal.remove({ _id: req.params.id }, (err, result)=>{
    if (err) { console.log(err); }
    res.redirect('/');
  });
});
app.get('/:id/edit/', (req, res)=>{
  Animal.find({ _id: req.params.id }, (err, response)=> {
    if (err) { console.log(err); }
    res.render('edit', { animal: response[0] });
  })
});
app.post('/:id', (req, res)=>{
  Animal.update({ _id: req.params.id }, req.body, (err, result)=>{
    if (err) { console.log(err); }
    res.redirect('/');
  });
});


app.post('/create', (req, res )=>{
  console.log("Post Data: ", req.body);
  Animal.create(req.body, (err, result)=>{
    if(err){
      console.log(err);
    }
    res.redirect('/')
  })
});
app.listen(port, ()=>{
  console.log("Server is locked and loaded on port: "+port+". . .");
});
