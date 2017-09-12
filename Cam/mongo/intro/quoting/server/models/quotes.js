var mongoose = require('mongoose');

// create the schema
var QuoteSchema = new mongoose.Schema({
    name: { type: String, required:true, minlength:3},
    quote: { type: String, required: true, minlength: 3}
}, {timestamps: true});

var Quote = mongoose.model('Quote', QuoteSchema);