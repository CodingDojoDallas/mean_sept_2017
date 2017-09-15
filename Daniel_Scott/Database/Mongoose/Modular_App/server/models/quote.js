var mongoose = require('mongoose');
var QuoteSchema = new mongoose.Schema({
  name: String,
  quote: String
})
var Quote = mongoose.model('Quote', QuoteSchema);
