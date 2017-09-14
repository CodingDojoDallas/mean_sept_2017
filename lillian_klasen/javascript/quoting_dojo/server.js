// Require the Express Module
var express = require('express');
// Create an Express App
var app = express();
// Require body-parser (to receive post data from clients)
var bodyParser = require('body-parser');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/quoting_dojo');

var QuoteSchema = new mongoose.Schema({
    name: String,
    quote: String,
})
mongoose.model('Quote', QuoteSchema);
var Quote = mongoose.model('Quote');

// Integrate body-parser with our App
app.use(bodyParser.urlencoded({ extended: true }));
// Require path
var path = require('path');
// Setting our Static Folder Directory
app.use(express.static(path.join(__dirname, './static')));
// Setting our Views Folder Directory
app.set('views', path.join(__dirname, './views'));
// Setting our View Engine set to EJS
app.set('view engine', 'ejs');
// Routes
// Root Request
app.get('/', function(req, res) {
    res.render('index');
})

app.get('/quotes', function(req, res) {
    quotes = [];
    // This is where we will retrieve the users from the database and include them in the view page we will be rendering.
    Quote.find({}, function(err, quotes) {
        if(err) {
            console.log('something went wrong:' + err);
        }
        else {
            console.log(quotes);
            res.render('quotes', {quotes: quotes});
        }
    })
})

app.post('/add_quote', function(req, res) {
    console.log("POST DATA", req.body);
    // This is where we would add the user from req.body to the database.
    var quote = new Quote({name: req.body.name, quote: req.body.quote});

    quote.save(function(err) {
        if(err) {
            console.log('something went wrong');
            res.redirect('/')
        }
        else {
            console.log('successfully added a quote!');
            res.redirect('quotes');
        }
    })
})

app.post('/skip', function (req,res) {
    res.redirect('quotes')
})


// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
})
