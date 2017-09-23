// title: (string)
// description: (string, default to empty string)
// completed: (boolean, default to: false)
// created_at: (date, default to current date)
// updated_at: (date, default to current date)

const mongoose = require('mongoose');

let TaskSchema = new mongoose.Schema({
	title: {
		type: String,
		required: [true, 'Title must be at least three characters'],
		minlength: [3, 'Title must be at least three characters']
	},
	description: {
		type: String,
		default: '',
	},
	completed: {
		type: Boolean,
		default: false,
	}
}, { timestamps: true });

mongoose.model('Task', TaskSchema);