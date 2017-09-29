const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
	title: {
		type: String,
		required: [true, 'Title cannot be blank']
	},
	description: {
		type: String,
		required: [true, 'Description cannot be blank']
	},
	price: {
		type: Number,
		required: [true, 'Price cannot be blank']
	},
	location: {
		type: String,
		required: [true, 'Location cannot be blank']
	},
	photo: String,
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User'
	}
}, { timestamps: true })

mongoose.model('Post', PostSchema);
