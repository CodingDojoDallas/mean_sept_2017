var mongoose = require('mongoose');

var NameSchema = new mongoose.Schema({
    name: String
})

var Name = mongoose.model('Name', NameSchema);
