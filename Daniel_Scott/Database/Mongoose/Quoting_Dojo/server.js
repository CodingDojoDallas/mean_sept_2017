const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 8000;
const mongoose = require('mongoose');
const path = require('path');
app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
 // mongoose and other database stuff
 mongoose.connect('mongodb://localhost/quoting_dojo', { useMongoClient: true });
 mongoose.Promise = global.Promise;
 // User Native promises
 var QuoteSchema = new mongoose.Schema({
   name: String,
   quote: String
 })
 mongoose.model('Quote', QuoteSchema);
 var Quote = mongoose.model('Quote')

 // Routes
app.get('/', (req, res)=>{
  res.render('index');
});
app.get('/show', (req, res)=>{
  Quote.find({}, (err, results)=>{
    if(err){ console.log(err); }
    res.render('quotes', { quotes: results});
  })
});

app.post('/quotes', (req, res)=>{
  console.log("Post Data", req.body);
  var quote = new Quote({name: req.body.name, quote: req.body.quote});
  quote.save(function(err){
    if(err){
      console.log('Something Went Wrong');
    }else {
      console.log('Successfully added Quote');
      res.redirect('/show')
    }
  })
});
app.listen(port,()=>{
  console.log("Server is locked and loaded on port:"+port+". . .");
})
