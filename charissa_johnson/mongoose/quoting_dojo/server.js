const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const mongoose = require('mongoose');
const port = 8000;
const app = express();

//set up middleware
app.use(express.static(__dirname + '/static'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
	secret: 'dskfjkdaljfladsjf',
	reasve: false,
	saveUninitialized: false
}));

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

//connect to database
mongoose.connect('mongodb://localhost/quotedb', { useMongoClient: true });
mongoose.Promise = global.Promise;

let QuoteSchema = new mongoose.Schema({
	name: {
		type: String
	},
	quotes: {
		type: String
	}
}, { timestamps: true });

mongoose.model('Quote', QuoteSchema)

const Quote = mongoose.model('Quote');

app.get('/', (req, res) => {
	res.render('index');
});

app.get('/quotes', function(req, res){
  // Logic to grab all quotes and pass into the rendered view
  Quote.find({}, (err, quotes) => {
    if(err) { 
    	console.log(err); 
    }
    res.render('quotes', { quotes: quotes });
  });
});

//create a new quote
app.post('/quotes', (req, res) => {
  Quote.create(req.body, (err) => {
    if(err) { console.log(err); }
    res.redirect('/quotes');
  });
});

app.listen(port, () => console.log(`listening on port ${port}`));