const mongoose = require('mongoose');

let UserSchema = new mongoose.Schema({
	name: String,
}, { timestamps: true });

//here we're attaching the schema to a new Model
mongoose.model('User', UserSchema);