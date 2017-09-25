const mongoose = require('mongoose');

const NoteSchema = new mongoose.Schema({
	note: {
		type: String,
		required: [true, "Note must be at least three characters"],
		minlength: [3, "Note must be at least three characters"],
	}
}, { timestamps: true })

mongoose.model('Note', NoteSchema);