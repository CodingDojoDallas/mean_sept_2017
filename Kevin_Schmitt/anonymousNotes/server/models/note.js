const mongoose = require('mongoose');

const NoteSchema = new mongoose.Schema({
    note: {
        // _id is automatically done by mongoose
        type: String,
        required: [true, 'Note must be at least 3 characters'],
        minlength: [3, 'Note must be at least 3 characters']
    }
}, { timestamps: true })

mongoose.model('Note', NoteSchema);