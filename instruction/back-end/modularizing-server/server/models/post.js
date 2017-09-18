const mongoose = require('mongoose');

let PostSchema = new mongoose.Schema({
	post: String,
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User'
	},
	comments: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Comment'
	}]
})

mongoose.model('Post', PostSchema);
