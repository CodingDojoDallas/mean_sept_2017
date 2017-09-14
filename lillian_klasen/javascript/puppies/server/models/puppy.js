var mongoose = require('mongoose');

var PuppySchema = new mongoose.Schema({
    name: String,
    breed: String,
})

var Puppy = mongoose.model('Puppy', PuppySchema);
