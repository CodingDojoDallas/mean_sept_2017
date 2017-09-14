//require mongoose 
var mongoose = require('mongoose');
//create the schema
var NameSchema = new mongoose.Schema({
	name: String,
})
var Name = mongoose.model("Name", NameSchema);