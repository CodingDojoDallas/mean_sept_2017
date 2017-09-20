const mongoose = require('mongoose');

let GiraffeSchema = new mongoose.Schema({
	name: String
}, { timestamps: true });

mongoose.model('Giraffe', GiraffeSchema);